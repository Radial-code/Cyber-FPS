import React from "react";
import imgFirst from "../assets/img/what-is-cfps-main.png";

const WhatIsCyber = () => {
  return (
    <>
      <section
        className="what-is-section black py-5 overflow-hidden"
        id="cyber-fps"
      >
        <div className="container modified-container my-lg-5 py-lg-5">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-6 order-2 d-flex flex-column justify-content-center order-lg-1 mt-4 mt-sm-5 mt-lg-0 text-center text-lg-start ">
              <h2
                data-aos="fade-right"
                data-aos-duration="1500"
                className="fs-xl fw-400 mb-4 mb-xl-4 pb-2 pb-xl-3 ff-audiowide position-relative"
              >
                What is
                <span className="skyblue d-lg-block pb-1">CyberFPS</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
                className="fs-sm fw-400 opacity-80 ff-montserrat mb-3 mb-lg-1 mb-xl-3 pb-1"
              >
                CyberFPS is centered around 5v5 Search & Destroy style combat
                with P2E mechanics featuring the $AMMO Token and deep
                integrations within the CryptoStraps ecosystem.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
                className="fs-sm fw-400 opacity-80 ff-montserrat mb-0 mb-lg-4 me-xl-3"
              >
                CyberFPS pits 2 teams of 5 players against each other with the
                objective being to attack or defend depending on which side you
                start on. This "Search & Destroy" style combat has been
                implemented in many popular FPS titles and is a high-skill cap
                game mode.
              </p>
            </div>
            <div
              className="col-11 col-sm-8 col-lg-6 ps-xxl-4 order-1 order-lg-2 "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                className="gun-img w-100"
                src={imgFirst}
                alt="what-is-cfps-main"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsCyber;
