import React from "react";
import teamImg1 from "../assets/img/collin.png";
import teamImg2 from "../assets/img/pharaox.png";
import teamImg3 from "../assets/img/zach.png";
import teamImg4 from "../assets/img/arlen.png";

const Team = () => {
  return (
    <>
      {" "}
      <section class="team-section black py-xl-5">
        <div class="container modified-container my-xl-4 mb-xl-5">
          <div class="row mb-sm-3 mb-md-4 mb-lg-5 justify-content-center">
            <div class="col-3 col-sm-2">
              <h2 class="fs-xl fw-400 text-center ff-audiowide mt-xl-5 pt-5 pb-2 mb-1 position-relative">
                Team
              </h2>
            </div>
          </div>
          <div class="row mb-xl-5 pb-5 justify-content-center">
            <div class="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-3 mt-sm-0">
              <div class="team-card">
                <div class="card-img">
                  <img class="w-100" src={teamImg1} alt="collin" />
                </div>
                <h4 class="fs-md fw-600 ff-montserrat mt-3 mb-1">Collin</h4>
                <p class="fs-sm fw-400 mb-0 ff-montserrat">Founder</p>
              </div>
            </div>
            <div class="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-5 mt-sm-0">
              <div class="team-card">
                <div class="card-img">
                  <img class="w-100" src={teamImg2} alt="Pharaox" />
                </div>
                <h4 class="fs-md fw-600 ff-montserrat mt-3 mb-1">Pharaox</h4>
                <p class="fs-sm fw-400 mb-0 ff-montserrat">Founder</p>
              </div>
            </div>
            <div class="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-5 mt-lg-0">
              <div class="team-card">
                <div class="card-img">
                  <img class="w-100" src={teamImg3} alt="Zach" />
                </div>
                <h4 class="fs-md fw-600 ff-montserrat mt-3 mb-1">Zach</h4>
                <p class="fs-sm fw-400 mb-0 ff-montserrat">CM</p>
              </div>
            </div>
            <div class="col-8 col-sm-6 col-lg-3 mt-4 mt-5 mt-lg-0 m-auto">
              <div class="team-card">
                <div class="card-img">
                  <img class="w-100" src={teamImg4} alt="Arlen" />
                </div>
                <h4 class="fs-md fw-600 ff-montserrat mt-3 mb-1">Arlen</h4>
                <p class="fs-sm fw-400 mb-0 ff-montserrat">CM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
