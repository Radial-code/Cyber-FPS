import React from "react";
import videoImg from "../assets/img/video-img-2.png";

const PurusDictim = () => {
  return (
    <>
      <section
        className="bg-black text-white py-5 bg-rain-img overflow-hidden"
        id="cyber-fps"
      >
        <div className="container modified-container my-lg-5 py-lg-5">
          <div className="row justify-content-center ">
            <div
              className="col-11 col-sm-8 col-lg-6 ps-xxl-4 mt-3 mt-lg-0 "
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img className=" w-100 " src={videoImg} alt="img" />
            </div>
            <div
              className="col-12 col-lg-6  mt-4 mt-sm-5 mt-lg-0 d-flex flex-column justify-content-center text-center text-lg-start "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="fs-xl fw-400 mb-4 mb-xl-4 pb-2 pb-xl-3 ff-audiowide position-relative">
                <span className=" d-lg-inlign-block pb-1 me-4 blue-underline">
                  Purus
                </span>
                dictum
              </h2>
              <p className="fs-sm fw-400 opacity-80 ff-montserrat mb-3 mb-lg-1 mb-xl-3 pb-1">
                Euismod gravida hendrerit tincidunt ullamcorper parturient. Ut
                tellus pellentesque varius semper. Quis nisi vulputate sit
                nulla. Id sit at enim sapien gravida ultrices risus. Et molestie
                dis ac duis tempus, lorem consequat, in arcu. Pellentesque
                venenatis quam orci neque, aliquam mauris, ultricies dignissim
                gravida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PurusDictim;
