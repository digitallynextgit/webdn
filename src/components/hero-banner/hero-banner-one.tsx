'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";

const HeroBannerOne = () => {
  useGSAP(() => {

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100)
    }
  }, {});
  return (
    <div className="tp-hero-area tp-hero-ptb main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="tp-hero-shape-1">
                <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={790}
                  height={700}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="tp-hero-title-box text-center p-relative">
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative">
                    DigitallyNext
                    <span className="tp-hero-subtitle d-none d-lg-block ">
                      Hello <br /> People! We’re
                    </span>
                    <span className="tp-hero-shape-2 d-none d-md-block">
                      <Image
                        src="/assets/img/home-01/hero/hero-shape-1-1.png"
                        alt="shape"
                        width={40}
                        height={40}
                      />
                    </span>
                  </span>
                  <br />
                  Web
                  <span className="tp-hero-title-img">
                    <video
                      className="tp-zoom-img"
                      width={120}
                      height={100}
                      style={{ height: "auto" }}
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload="metadata"
                      poster="/mascot/srkmascot.webp"
                    >
                      <source src="/video/mascort.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </span>
                  Studio
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom">
              <p>
                <span></span>
                DigitallyNext is a global digital design agency that partners with brands and businesses to craft exceptional digital Web experiences.
                 We are a full-service design and development agency based in the New Delhi.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
