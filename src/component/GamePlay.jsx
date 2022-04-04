import React from "react";

const GamePlay = () => {
  return (
    <>
      <section class="gameplay-section mb-sm-3 mb-xl-5 pb-xl-2">
        <div class="container">
          <div class="row justify-content-center modified-container">
            <div class="col-11 text-center">
              <h2 class="fs-xl ff-audiowide fw-400 my-lg-5 mt-3  pt-5 pb-4 position-relative">
                CyberFPS <span class="skyblue position-relative">Gameplay</span>
              </h2>

              <div className="video-container pt-3 pt-sm-5">
                <iframe
                  className="clip-path border-0"
                  width="90%"
                  height="473px"
                  src="https://www.youtube.com/embed/J42SZXS-_Qo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePlay;
