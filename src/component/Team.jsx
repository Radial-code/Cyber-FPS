import React from "react";
import teamImg1 from "../assets/img/collin.png";
import teamImg2 from "../assets/img/pharaox.png";
import teamImg3 from "../assets/img/zach.png";
import teamImg4 from "../assets/img/arlen.png";

const Team = () => {
  return (
    <>
      <section className="team-section black py-xl-5" id="team">
        <div className="container modified-container my-xl-4 mb-xl-5">
          <div className="row mb-sm-3 mb-md-4 mb-lg-5 justify-content-center">
            <div className="col-3 col-sm-2">
              <h2 className="fs-xl fw-400 text-center ff-audiowide mt-xl-5 pt-5 pb-2 mb-1 position-relative">
                Team
              </h2>
            </div>
          </div>
          <div className="row mb-xl-5 pb-5 justify-content-center">
            <div
              className="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-3 mt-sm-0 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="team-card">
                <div className="card-img">
                  <img className="w-100" src={teamImg1} alt="collin" />
                </div>
                <h4 className="fs-md fw-600 ff-montserrat mt-3 mb-1">Collin</h4>
                <p className="fs-sm fw-400 mb-0 ff-montserrat">Founder</p>
              </div>
            </div>
            <div
              className="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-5 mt-sm-0 "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <div className="team-card">
                <div className="card-img">
                  <img className="w-100" src={teamImg2} alt="Pharaox" />
                </div>
                <h4 className="fs-md fw-600 ff-montserrat mt-3 mb-1">
                  Pharaox
                </h4>
                <p className="fs-sm fw-400 mb-0 ff-montserrat">Founder</p>
              </div>
            </div>
            <div
              className="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-5 mt-lg-0 "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="team-card">
                <div className="card-img">
                  <img className="w-100" src={teamImg3} alt="Zach" />
                </div>
                <h4 className="fs-md fw-600 ff-montserrat mt-3 mb-1">Zach</h4>
                <p className="fs-sm fw-400 mb-0 ff-montserrat">CM</p>
              </div>
            </div>
            <div
              className="col-8 col-sm-6 col-lg-3 mt-4 mt-5 mt-lg-0 m-auto "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <div className="team-card">
                <div className="card-img">
                  <img className="w-100" src={teamImg4} alt="Arlen" />
                </div>
                <h4 className="fs-md fw-600 ff-montserrat mt-3 mb-1">Arlen</h4>
                <p className="fs-sm fw-400 mb-0 ff-montserrat">CM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
