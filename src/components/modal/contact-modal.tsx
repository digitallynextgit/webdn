"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContactModal({ showModal, setShowModal }: Props) {
  const handleClose = () => setShowModal(false);
  type FormState = {
    name: string;
    email: string;
    message: string;
    city: string;
    state: string;
    country: string;
    organization: string;
  };
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    city: "",
    state: "",
    country: "",
    organization: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");
    try {
      const url = process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let errText = `Request failed: ${res.status}`;
        try {
          const data = await res.json();
          if (data?.error) errText = data.error;
          if (data?.details) errText += ` — ${data.details}`;
        } catch {}
        throw new Error(errText);
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered className="tp-product-modal">
      <button onClick={handleClose} type="button" className="tp-product-modal-close-btn">
        <i className="fa-regular fa-xmark"></i>
      </button>
      <Modal.Body>
        <div className="tp-contact-modal-content">
          <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom" style={{ marginBottom: 10 }}>
            Get in touch
          </h4>
          {status === "success" ? (
            <p>Thanks! We received your message and will reply soon.</p>
          ) : (
            <form onSubmit={onSubmit} className="tp-form">
              <div className="mb-20">
                <label className="mb-10">Name</label>
                <input name="name" type="text" required value={form.name} onChange={onChange} className="tp-input" />
              </div>
              <div className="mb-20">
                <label className="mb-10">Email</label>
                <input name="email" type="email" required value={form.email} onChange={onChange} className="tp-input" />
              </div>
              <div className="mb-20">
                <label className="mb-10">City</label>
                <input name="city" type="text" required value={form.city} onChange={onChange} className="tp-input" />
              </div>
              <div className="mb-20">
                <label className="mb-10">State</label>
                <input name="state" type="text" required value={form.state} onChange={onChange} className="tp-input" />
              </div>
              <div className="mb-20">
                <label className="mb-10">Country</label>
                <input name="country" type="text" required value={form.country} onChange={onChange} className="tp-input" />
              </div>
              <div className="mb-20">
                <label className="mb-10">Organization</label>
                <input name="organization" type="text" required value={form.organization} onChange={onChange} className="tp-input" />
              </div>
              <div className="mb-20">
                <label className="mb-10">Message</label>
                <textarea name="message" required value={form.message} onChange={onChange} className="tp-input" rows={4} />
              </div>
              {status === "error" && <p className="text-danger">{errorMsg}</p>}
              <button type="submit" className="tp-cart-update-btn w-100" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}