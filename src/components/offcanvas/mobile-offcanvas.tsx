import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import logo from "../../../public/logo.webp";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="#">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p> We are working and researching on the latest technologies to create the best possible experience for our clients. </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
             
                    <div className="">
                      <Link href="#">
                        <Image
                          src="/mascot/mutimascot.webp"
                          alt="gallery-img"
                          width={1200}
                          height={100}
                          style={{ height: "auto" }}
                        />
                      </Link>
                    </div>
                 
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <Link href="tel:+919810409943">+91 981-040-9943</Link>
                </li>
                <li>
                  <Link href="mailto:contact@digitallynext.com">contact@digitallynext.com</Link>
                </li>
               
              </ul>
            </div>
            {/* <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link href="#"><InstagramTwo /></Link>
                </li>
                <li>
                  <Link href="#"><Dribble /></Link>
                </li>
                <li>
                  <Link href="#"> <Behance /></Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@digitallynext"><Youtube /></Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
