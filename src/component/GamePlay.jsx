import React from "react";
import videoPath from "../assets/video/pexels-mikhail-nilov-7989448.mp4";
import fiveLine from "../assets/img/five-lines.png";
import thumbnailimg from "../assets/img/video-thumbnail.png";
import ReactPlayer from "react-player";
import { PlayIcon } from "../common/Icons";

const GamePlay = () => {
  return (
    <>
      <section
        className="gameplay-section mb-sm-3 mb-xl-5 pb-xl-2 overflow-hidden"
        id="about"
      >
        <div className="container">
          <div className="row justify-content-center modified-container mx-auto">
            <div className="col-12 col-lg-11 text-center">
              <h2
                className="fs-xl ff-audiowide fw-400 my-lg-5 mt-3  pt-5 pb-4"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                CyberFPS Pre-Alpha
                <span className="text-light-blue"> Gameplay</span>
              </h2>

              <div className="video-container text-center pb-2 pb-xl-0">
                <img className="five-line-1" src={fiveLine} alt="fiveLine" />
                <img className="five-line-2" src={fiveLine} alt="fiveLine" />
                <div className="video-container-clip-path">
                  <ReactPlayer
                    url={videoPath}
                    playing={true}
                    light={thumbnailimg}
                    playIcon={<PlayIcon />}
                    volume={1}
                    width="100%"
                    controls={false}
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePlay;
