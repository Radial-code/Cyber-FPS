import React from "react";
import imgFirst from "../assets/img/video-img.png";

const NonPurus = () => {
  return (
    <>
      <section className="py-5 overflow-hidden" id="cyber-fps">
        <div className="container modified-container my-lg-5 py-lg-5">
          <div className="row justify-content-center ">
            <div className="col-12 col-lg-6 order-2 order-lg-1 mt-4 mt-sm-5 mt-lg-0 d-flex flex-column justify-content-center text-center text-lg-start ">
              <h2
                data-aos="fade-right"
                data-aos-duration="2000"
                className="fs-xl fw-400 mb-3 pb-2 pb-xl-3 ff-audiowide position-relative"
              >
                <span className=" d-lg-inlign-block blue-underline pb-1 me-4">
                  Non
                </span>
                purus
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="500"
                className="fs-sm fw-400 opacity-80 ff-montserrat mb-3 mb-lg-1 mb-xl-3 pb-1"
              >
                Odio nam facilisis arcu, sodales ultrices viverra quam hac
                massa. Nisi neque nunc at ultricies enim risus quam cum. Purus
                est cursus aliquet nisl, pulvinar. Sociis ultrices phasellus
                praesent eleifend quam proin. Sagittis scelerisque est at eu
                nunc a vitae. Viverra rutrum pretium mattis arcu nulla pharetra.
              </p>
            </div>
            <div
              className="col-11 col-sm-8 col-lg-6 ps-xxl-4 order-1 order-lg-2 mt-4 mt-lg-0 "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img className=" w-100 " src={imgFirst} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NonPurus;
