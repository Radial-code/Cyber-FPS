import React from "react";
import Video from "../assets/video/pexels-mikhail-nilov-7989448.mp4";

const GamePlay = () => {
  return (
    <>
      <section class="gameplay-section mb-sm-3 mb-xl-5 pb-xl-2">
        <div class="container">
          <div class="row justify-content-center modified-container mx-auto">
            <div class="col-11 text-center">
              <h2 class="fs-xl ff-audiowide fw-400 my-lg-5 mt-3  pt-5 pb-4 position-relative">
                CyberFPS <span class="skyblue position-relative">Gameplay</span>
              </h2>

              <div className="video-container text-center">
                <video
                  className="clip-path w-100 h-100"
                  controls
                  autoPlay
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
