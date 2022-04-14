import React from "react";
import solanaImg from "../assets/img/solana.png";
import unrealImg from "../assets/img/engine.png";
import solanaSideImg from "../assets/img/solana-side-img.png";

const Solana = () => {
  return (
    <>
      <section className="solana-section  position-relative" id="light-paper">
        <div className="container-fluid ">
          <div className="row justify-content-start  py-5">
            <div className="col-sm-3 col-6 order-3 order-sm-1">
              <img className="w-100" src={solanaSideImg} alt="solanaSideImg" />
            </div>
            <div className="col-sm-4 order-1 order-sm-2 col-6 align-items-end d-flex flex-column justify-content-center">
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="100"
                className="solana-img  w-100"
                src={solanaImg}
                alt="solana"
              />
            </div>
            <div className="col-sm-3 col-6 order-2 order-sm-3 d-flex flex-column justify-content-center">
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
