"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import logo from "../../../public/logo.webp";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import useStickyHeader from "@/hooks/use-sticky-header";
import { usePathname } from "next/navigation";

const HeaderOne = () => {
  const { isSticky, headerRef, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pathname = usePathname();

  const scrollTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const spaMenu = (
    <ul>
      <li className="has-dropdown"><a href="#hero-4" onClick={(e) => { e.preventDefault(); scrollTo("hero-4"); }}>Home</a></li>
      <li className="has-dropdown"><a href="#about-4" onClick={(e) => { e.preventDefault(); scrollTo("about-4"); }}>Pages</a></li>
      <li className="has-dropdown"><a href="#portfolio-4" onClick={(e) => { e.preventDefault(); scrollTo("portfolio-4"); }}>Portfolio</a></li>
      <li className="has-dropdown"><a href="#services-4" onClick={(e) => { e.preventDefault(); scrollTo("services-4"); }}>Approach</a></li>
      <li className="has-dropdown"><a href="#contact-4" onClick={(e) => { e.preventDefault(); scrollTo("contact-4"); }}>Contact</a></li>
    </ul>
  );

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${isSticky ? 'header-sticky' : ''}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image style={{ width: "auto", height: "auto" }} src={logo} alt="logo" width={85} height={26} />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image style={{ width: "auto", height: "auto" }} src={logoWhite} alt="logo" width={85} height={26} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content" style={{ padding: "50px 0px" }}>
                    {/* header menus */}
                    {/* {pathname === "/home-4" ? spaMenu : <HeaderMenus />} */}
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end">
                  <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffCanvas(true)}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
};

export default HeaderOne;
