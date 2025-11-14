import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {

  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  What we do
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                We tell visual stories through smooth motions{" "}
                <span>
                  {" "}
                  <br />& fluid Website
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4 position-relative">
            <div className="tp-about-3-image tp_fade_bottom">
              <Image src="/mascot/mascot.webp" alt="about" width={300} height={500} />
            </div>
            <div className="tp-about-3-shape text-lg-end" style={{ marginTop: "-80px" }}>
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                We are a Delhi based Web studio focused on building Web Solutions as per the client&apos;s requirements.
                Our work blends design, storytelling and technology to help beauty brands stand out and grow online.
              </p>
              <p className="mb-45 tp_fade_bottom">
                Great ideas only matter when they create real impact. We shape concepts into thoughtful design and  experiences that connect with people,
                build trust and move your brand forward.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="https://www.digitallynext.com/about">
                About Us
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
