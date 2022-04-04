import React from "react";

const GamePlay = () => {
  return (
    <>
      <section class="gameplay-section mb-sm-3 mb-xl-5 pb-xl-2">
        <div class="container">
          <div class="row justify-content-center modified-container">
            <div class="col-11 text-center">
              <h2 class="fs-xl ff-audiowide fw-400 my-xl-5 pt-5 pb-4 position-relative">
                CyberFPS <span class="skyblue position-relative">Gameplay</span>
              </h2>

              <video
                class="w-100 mt-md-4 mt-xl-0"
                autoplay
                loop
                src="./assets/video/mov_bbb.mp4"
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePlay;
