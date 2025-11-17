
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/home-03/cta/cta-1.png';
import Link from "next/link";
import React, { useState } from "react";
import ContactModal from "../modal/contact-modal";

export default function ContactOne() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let’s talk
              <span>about it</span>
            </h4>
            <p className="tp_fade_bottom">
              We will collaborate to find the right answer and bring progress to
              your business and to the world.
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} alt="cta-img" />
            </div>
            <div className="tp-cta-btn-box ">
              <button className="tp-btn-zikzak p-relative " onClick={() => setShowModal(true)}>
                <span className="zikzak-content mt-60">
                  Get <br /> In Touch 
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
