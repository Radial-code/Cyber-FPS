import React from "react";
import footerLogo from "../assets/img/footer-logo.png";
import { DiscordIcon, InstaIcon, TwitterIcon } from "../common/Icons";

const Footer = () => {
  return (
    <>
      <footer class="footer pt-sm-3">
        <section class="footer-section">
          <div class="container mt-1">
            <div class="row">
              <div class="col-12 text-center">
                <div class="footer-content mt-4 pt-2">
                  <img class="mb-4" src={footerLogo} alt="footer-logo" />
                  <div class="d-flex justify-content-center mb-5">
                    <a
                      className="px-2 mx-sm-1"
                      href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                      target="_blank"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      className="px-2 mx-sm-1"
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <InstaIcon />
                    </a>
                    <a
                      className="px-2 mx-sm-1"
                      href="https://discord.com/"
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
        <div class="copyright white mt-1">
          <p class="fs-sm fw-400 text-center mb-0 pt-2 pb-3 opacity-75">
            © Cyber FPS 2022
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
