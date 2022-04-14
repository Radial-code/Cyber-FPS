import React from "react";
import { teamList } from "../common/Helper";

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
            {teamList.map((obj, index) => (
              <div
                key={index}
                className="col-8 col-sm-6 col-lg-3 pe-lg-3 mt-3 mt-sm-0 "
                data-aos="fade-up"
                data-aos-duration="2000""
                data-aos-delay={`${(index + 1) * 200}`}
              >
                <div className="team-card">
                  <div className="card-img">
                    <img className="w-100" src={obj.imgUrl} alt="team-member" />
                  </div>
                  <h4 className="fs-md fw-600 ff-montserrat mt-3 mb-1">
                    {obj.title}
                  </h4>
                  <p className="fs-sm fw-400 mb-0 ff-montserrat">
                    {obj.discription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
