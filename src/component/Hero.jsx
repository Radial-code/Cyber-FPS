import React from "react";
import Logo from "../assets/img/hero-img.png";
import ezgif from "../assets/img/ezgif.com-gif-maker.gif";
import Header from "./Header";
import heroSideImg from "../assets/img/CyberFPS.png";

export const Hero = () => {
  return (
    <>
      <section className="hero-section  position-relative overflow-hidden">
        <div className="heroSideImg">
          <img src={heroSideImg} alt="heroSideImg" />
        </div>
        <Header />
        <div className="container modified-container mb-md-1 min-height-100vh d-flex flex-column justify-content-lg-center">
          <div className="row text-center text-lg-start align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-8 col-xl-7  order-2 order-lg-1   animate__animated animate__fadeInRight animation__duration-3s animate__delay-2s hero-gif">
              <img className="w-100" src={ezgif} alt="ezgif" />
            </div>
            <div className="col-12 pb-xxl-5 col-md-10 order-1 order-lg-2 col-lg-12  d-flex flex-column justify-content-end  text-lg-end   animate__animated animate__fadeInLeft animation__duration-3s animate__delay-2s">
              <div className="mt-4 mt-lg-0 ">
                <img
                  className="hero-logo-img"
                  src={Logo}
                  alt="cyber-hero-logo"
                />
              </div>
              <h3 className="fs-lg fw-400 ff-audiowide white mt-1 mb-0">
                Web3 Gaming Reimagined
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
