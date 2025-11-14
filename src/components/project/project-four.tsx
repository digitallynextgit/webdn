import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// images
import port_1 from "../../../public/projects/ad1.webp";
import port_2 from "../../../public/projects/ad2.webp";
import port_3 from "../../../public/projects/im1.webp";
import port_4 from "../../../public/projects/im2.webp";
import port_5 from "../../../public/projects/kh1.webp";
import port_6 from "../../../public/projects/kh2.webp";
import port_7 from "../../../public/projects/gj1.webp";
import port_8 from "../../../public/projects/gj2.webp";
import port_9 from "../../../public/projects/hon1.webp";
import port_10 from "../../../public/projects/hon2.webp";
import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    meta: "JUN 2024 . IT Services & Consulting",
    title: "Advent Global Solutions!",
    link: "https://adventglobal.com/",
  },
  {
    id: 2,
    img_1: port_3,
    img_2: port_4,
    meta: "DEC 2024 . B-School Institute",
    title: "Imet Global",
    link: "https://imetglobal.com/",
  },
  {
    id: 3,
    img_1: port_5,
    img_2: port_6,
    meta: "APR 2025 . E-Commerce",
    title: "Khaleej",
    link: "https://khaleej.in",
  },

  {
    id: 4,
    img_1: port_9,
    img_2: port_10,
    meta: "JUN 2025 . E-Commerce",
    title: "House of Nandini",
    link: "https://www.houseofnandini.com/",
  },
    {
    id: 5,
    img_1: port_7,
    img_2: port_8,
    meta: "OCT 2025 . Coffee Brand",
    title: "Gajna OverSeas",
    link: "https://gajnaoverseas.com/",
  },

];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                 <Image 
                 src="/mascot/mascotthink.webp"
                 width={180}
                 height={100}
                 alt="port-img"
                 style={{ height: "auto" }}
                 />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href={item.link ?? "/portfolio-wrapper"}>{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={item.link ?? "/portfolio-wrapper"}
                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
