import React from "react";
import Logo from "../assets/img/footer-logo.png";
import heroImg from "../assets/img/hero-img.png";
import Header from "./Header";

export const Hero = () => {
  return (
    <>
      <section class="hero-section mb-md-3  ">
        <Header />
        <div class="container modified-container mb-md-1 ">
          <div class="row align-items-center justify-content-center justify-content-lg-between">
            <div class="col-12 col-md-10  col-lg-6  d-flex flex-column justify-content-end pb-lg-5 mb-5 text-center text-lg-start">
              <div>
                <img class="hero-logo" src={Logo} alt="cyber-hero-logo" />
              </div>
              <h3 class="fs-lg fw-400 ff-audiowide white mt-1 mb-lg-5 pb-3">
                Web3 Gaming Reimagined
              </h3>
              <div class="hero-btns d-flex ff-audiowide fs-sm fw-400 justify-content-center justify-content-lg-start mt-md-1 mb-xl-5">
                <button class="me-1">Get Started</button>
                <button class="ms-3 white">Learn More</button>
              </div>
            </div>
            <div class="col-8 col-lg-6">
              <img class="w-100" src={heroImg} alt="hero-main-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
