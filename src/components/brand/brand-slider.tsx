"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "../../../public/logos/1.webp"
import b_3 from "../../../public/logos/3.webp"
import b_5 from "../../../public/logos/5.webp"
import b_7 from "../../../public/logos/7.webp"
import b_9 from "../../../public/logos/9.webp"
import b_11 from "../../../public/logos/11.webp"
import b_13 from "../../../public/logos/13.webp"
import b_15 from "../../../public/logos/15.webp"
import b_17 from "../../../public/logos/17.webp"
import b_19 from "../../../public/logos/19.webp"



const brand_images = [
  b_1,
  b_3,
  b_5,
  b_7,
  b_9,
  b_11,
  b_13,
  b_15,
  b_17,
  b_19,
  b_1,
  b_3,
  b_5,
  b_7,
  b_9,
  b_11,
  b_13,
  b_15,
  b_17,
  b_19,
];


export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" >
            <Image src={b} alt={`brand-${i}`} width={150} height={50} className="w-full h-full object-contain gap-5 " />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
