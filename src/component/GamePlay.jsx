import React from "react";
import Video from "../assets/video/pexels-mikhail-nilov-7989448.mp4";
import fiveLine from "../assets/img/five-lines.png";

const GamePlay = () => {
  return (
    <>
      <section
        class="gameplay-section mb-sm-3 mb-xl-5 pb-xl-2 overflow-hidden"
        id="about"
      >
        <div class="container">
          <div class="row justify-content-center modified-container mx-auto">
            <div class="col-12 col-lg-11 text-center">
              <h2
                class="fs-xl ff-audiowide fw-400 my-lg-5 mt-3  pt-5 pb-4 position-relative"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                CyberFPS <span class="skyblue position-relative">Gameplay</span>
              </h2>

              <div className="video-container text-center">
                <img className="five-line-1" src={fiveLine} alt="fiveLine" />
                <img className="five-line-2" src={fiveLine} alt="fiveLine" />
                <video
                  className="clip-path w-100 h-100"
                  autoPlay
                  muted
                  src={Video}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePlay;
