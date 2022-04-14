import React from "react";
import solanaImg from "../assets/img/solana.png";
import unrealImg from "../assets/img/engine.png";
import solanaSideImg from "../assets/img/solana-side-img.png";

const Solana = () => {
  return (
    <>
      <section
        className="solana-section py-5 position-relative"
        id="light-paper"
      >
        <img
          className="solana-side-img"
          src={solanaSideImg}
          alt="solanaSideImg"
        />
        <div className="container my-lg-5 py-sm-5">
          <div className="row justify-content-center my-md-4 py-4">
            <div className="col-12 text-center">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="100"
                className="solana-img me-md-3 me-lg-5 mb-5 mb-md-0 w-100"
                src={solanaImg}
                alt="solana"
              />
              <img
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="2000"
                className="engine-img w-100"
                src={unrealImg}
                alt="unrealImg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solana;
