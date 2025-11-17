import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { name, email, message, city, state, country, organization } = body || {};
  if (!name || !email || !message || !city || !state || !country || !organization) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    let transporter: nodemailer.Transporter;
    if (process.env.GMAIL_PASSWORD) {
      // Use Gmail App Password if provided
      const user = process.env.GMAIL_USER;
      const pass = (process.env.GMAIL_PASSWORD as string).replace(/\s+/g, "");
      if (!user || !pass) {
        return NextResponse.json(
          { error: "Gmail app password path missing env", details: "Set GMAIL_USER and GMAIL_PASSWORD" },
          { status: 500 }
        );
      }
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user, pass },
      });
    } else {
      // Fallback to OAuth2 if no app password is present
      const requiredEnv = ["GMAIL_USER", "GMAIL_CLIENT_ID", "GMAIL_CLIENT_SECRET", "GMAIL_REFRESH_TOKEN"] as const;
      const missing = requiredEnv.filter((k) => !process.env[k]);
      if (missing.length) {
        return NextResponse.json(
          { error: "OAuth2 credentials missing", details: `Set ${missing.join(", ")}` },
          { status: 500 }
        );
      }
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.GMAIL_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        },
      });
    }

    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_RECEIVER || process.env.GMAIL_USER,
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\nOrganization: ${organization}\nCity/State: ${city}, ${state}\nCountry: ${country}\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>City/State:</strong> ${city}, ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (err: any) {
    console.error("/api/contact error", err);
    const msg = typeof err?.message === "string" ? err.message : "Failed to send email";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}