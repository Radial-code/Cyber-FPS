import React from "react";
// import logo from "../../assets/images/Knights-of-Havenly-logo.webp";
import { useMediaQuery } from "react-responsive";
import { DiscordIcon, InstaIcon, TwitterIcon } from "../common/Icons";
import logo from "../assets/img/logo.png";

const Header = () => {
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <div className="navbar-wrapper w-100 position-relative">
        <Desktop>
          <div className="container d-flex justify-content-between align-items-center">
            <div className="nav-logo w-100 cursor_pointer ">
              <img className="cursor-pointer" src={logo} alt="logo" />
            </div>
            <div className="nav-list-items w-100">
              <ul className="list-unstyled d-flex align-items-center m-0">
                <li className="px-3  mx-3">
                  <a className="text-decoration-none navbar-link" href="#about">
                    About
                  </a>
                </li>
                <li className="px-3  mx-3">
                  <a
                    className="text-decoration-none navbar-link text-nowrap"
                    href="#cryptostraps"
                  >
                    CryptoStraps
                  </a>
                </li>
                <li className="px-3  mx-3">
                  <a className="text-decoration-none navbar-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="px-3  mx-3">
                  <a className="text-decoration-none navbar-link" href="#faq">
                    Faq
                  </a>
                </li>
                <li className="px-3  mx-3">
                  <a
                    className="text-decoration-none navbar-link"
                    href="#light-paper"
                  >
                    Light Paper
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-100 d-flex justify-content-end  ">
              <a target="_blank" href="https://twitter.com" className="px-2">
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com"
                className="px-2"
              >
                <InstaIcon />
              </a>
              <a target="_blank" href="https://discord.com" className="px-2">
                <DiscordIcon />
              </a>
            </div>
          </div>
        </Desktop>
        <BeforeDesktop>
          <div className="px-3 d-flex justify-content-between align-items-center">
            <div className="nav-logo">
              <img
                className="nav-logo-small cursor-pointer"
                src={logo}
                alt="logo"
              />
            </div>
            <div className=" d-flex justify-content-end  ">
              <a
                target="_blank"
                href="https://twitter.com"
                className="px-sm-2 px-1 header-svg"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com"
                className="px-sm-2 px-1 header-svg"
              >
                <InstaIcon />
              </a>
              <a
                target="_blank"
                href="https://discord.com"
                className="px-sm-2 px-1 header-svg"
              >
                <DiscordIcon />
              </a>
            </div>
            <div
              id="nav-icon1"
              className={`hamburger-menu`}
              onClick={() => handldeOverlayActive()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`navbar-overlay  `}>
            <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
              <li
                className=" hover-animation  px-3 my-3 my-sm-4"
                onClick={() => handldeOverlayActive()}
              >
                <a className="text-decoration-none text-white" href="#about">
                  About
                </a>
              </li>
              <li
                className=" hover-animation  px-3 my-3 my-sm-4"
                onClick={() => handldeOverlayActive()}
              >
                <a
                  className="text-decoration-none text-white text-nowrap"
                  href="#cryptostraps"
                >
                  CryptoStraps
                </a>
              </li>
              <li
                className=" hover-animation  px-3 my-3 my-sm-4"
                onClick={() => handldeOverlayActive()}
              >
                <a className="text-decoration-none text-white" href="#team">
                  Team
                </a>
              </li>
              <li
                className=" hover-animation  px-3 my-3 my-sm-4"
                onClick={() => handldeOverlayActive()}
              >
                <a className="text-decoration-none text-white" href="#faq">
                  Faq
                </a>
              </li>
              <li
                className=" hover-animation  px-3 my-3 my-sm-4"
                onClick={() => handldeOverlayActive()}
              >
                <a
                  className="text-decoration-none text-white"
                  href="#light-paper"
                >
                  Light Paper
                </a>
              </li>
            </ul>
          </div>
        </BeforeDesktop>
      </div>
    </>
  );
};

export default Header;
