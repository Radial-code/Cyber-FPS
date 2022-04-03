import React from "react";
import solanaImg from "../assets/img/solana.png";
import unrealImg from "../assets/img/engine.png";

const Solana = () => {
  return (
    <>
      <section class="solana-section py-5">
        <div class="container my-lg-5 py-xl-5">
          <div class="row justify-content-center my-md-4">
            <div class="col-12 text-center">
              <img
                class="solana-img me-md-3 me-lg-5 mb-5 mb-md-0 w-100"
                src={solanaImg}
                alt="solana"
              />
              <img class="engine-img w-100" src={unrealImg} alt="unrealImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solana;
