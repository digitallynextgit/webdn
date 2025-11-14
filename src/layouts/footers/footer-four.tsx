import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo-white.webp';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Quick Links</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="https://www.digitallynext.com/about">About Us</Link></li>
                      <li><Link href="https://www.digitallynext.com/services">Services</Link></li>
                      <li><Link href="https://www.digitallynext.com/case-studies">Case Studies</Link></li>
                      <li><Link href="https://www.digitallynext.com/careers">Careers</Link></li>
                      <li><Link href="https://www.digitallynext.com/contact">Contact</Link></li>
                      <li><Link href="https://www.digitallynext.com/privacy-policy">Privacy Policy</Link></li>
                      <li><Link href="https://www.digitallynext.com/terms-of-use">Terms of Use</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Empowering businesses with next-generation digital solutions and innovative strategies.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    2025 Digitally Next. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link href="#" target="_blank" style={{fontSize: '12px'}}>268 Business India Complex, Uday Park, Adjacent to August Kranti Marg, Delhi 110 049. Nearest Metro Station – Green Park/South Ex.</Link>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span><Link href="tel:+919810409943">+91 981-040-9943</Link></span>
                    <span> <Link href="mailto:contact@digitallynext.com">contact@digitallynext.com</Link></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
