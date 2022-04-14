import React from "react";
import loaderimg from "../assets/img/logo.png";

const Loader = () => {
  return (
    <div className="loader-fullscreen">
      <img className="loader-img" src={loaderimg} alt="heroSnailImage" />
    </div>
  );
};

export default Loader;
