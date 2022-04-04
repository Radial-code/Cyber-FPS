import React from "react";
import csMain from "../assets/img/cs-main-img.png";

const CryptoStraps = () => {
  return (
    <>
      <section
        className="cryptstraps-section py-md-5 overflow-hidden"
        id="cryptostraps"
      >
        <div className="container modified-container my-lg-5 py-5 py-lg-3">
          <div className="row align-items-center justify-content-center justify-content-lg-between text-center text-lg-start">
            <div
              className="col-sm-11 col-12 col-sm-8 col-lg-5 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img className="cs-img w-100" src={csMain} alt="cs-main-img" />
            </div>
            <div
              className="col-12 col-lg-7 px-lg-3 px-xl-5 white mt-5 mt-lg-0 "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2 className="fs-xl fw-400 ms-lg-3 ps-lg-2 mb-4 mb-lg-3 pb-2 pb-lg-1 ff-audiowide position-relative">
                CryptoStraps
              </h2>
              <p className="fs-sm fw-400 opacity-50 mb-0 ms-lg-3 ps-lg-2 pe-xl-3 ff-montserrat">
                CryptoStraps are firearms pushing the boundaries of 3D animated
                art. CyberFPS will be powered by CryptoStraps $AMMO and is
                directly integrated with the existing CryptoStraps NFTs. You
                will be able to use CryptoStraps NFTs in-game and the
                visuals/graphics of CyberFPS are designed by the CryptoStraps 3D
                Studio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryptoStraps;
