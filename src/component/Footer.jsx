import React from "react";
import footerLogo from "../assets/img/footer-logo.png";
import { DiscordIcon, InstaIcon, TwitterIcon } from "../common/Icons";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer pt-sm-3">
        <section className="footer-section">
          <div className="container mt-1">
            <div className="row">
              <div
                className="col-12 text-center"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="footer-content mt-4 pt-2">
                  <img className="mb-4" src={footerLogo} alt="footer-logo" />
                  <div className="d-flex justify-content-center mb-5">
                    <a
                      className="px-2 mx-sm-1"
                      href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      className="px-2 mx-sm-1"
                      href="https://www.instagram.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <InstaIcon />
                    </a>
                    <a
                      className="px-2 mx-sm-1"
                      href="https://discord.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <DiscordIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright white mt-1">
          <p className="fs-sm fw-400 text-center mb-0 pt-2 pb-3 opacity-75">
            © Cyber FPS <span>{getCurrentYear}</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
