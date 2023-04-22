import React from "react";
import logo from "../assets/img/png/logo.png";
import u_tube from "../assets/img/png/u tube.png";
import twitter from "../assets/img/png/twitter.png";
import discord from "../assets/img/png/discord.png";
import joker from "../assets/img/png/joker.png";
import codespace from "../assets/img/png/codespaces.png";
import telegram from "../assets/img/png/telegram.png";
import circle from "../assets/img/png/circle.png";
import down_arrow from "../assets/img/png/down.png";

function Footer() {
  return (
    <footer
      id="footer"
      className=" py-md-5 py-4 .bg__dark__black {
"
    >
      <div className="container">
        <div
          className="row py-4"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center align-items-md-start ">
              {" "}
              <a href="#">
                <img className="menu_icon_size" src={logo} alt="s_img" />
              </a>
              <p className=" mb-0 ff_Roboto fw-normal fs_lg text-white mt-4">
                Managed by Solana Foundation
              </p>
              <div id="logofooter" className="d-flex mt-4 gap-2">
                <span>
                  {" "}
                  <a href="#">
                    <img src={u_tube} alt="u_tube" />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="#">
                    <img src={discord} alt="discord" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img src={joker} alt="joker" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img src={codespace} alt="codespace" />
                  </a>
                </span>
                <span>
                  {" "}
                  <a href="#">
                    <img src={telegram} alt="telegram" />
                  </a>
                </span>
              </div>
            </div>
            <p className=" mb-0 ff_helvitica fw-normal fs_lg text_clr_dimGray mt-4 text-center text-md-start">
              © 2023Solana Foundation. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row mt-4 mt-md-0">
              <div className="col-md-4 col-6">
                <p className=" text-center text-md-start ff_helvitica fw-normal fs_lg text-white mb-0">
                  Solana
                </p>
                <div className="d-flex flex-column gap-3 mt-4">
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Grants
                    </a>
                  </span>
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Break Solana
                    </a>
                  </span>
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Media Kit
                    </a>
                  </span>
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Careers
                    </a>
                  </span>
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Disclaimer
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <p className=" ff_helvitica fw-normal fs_lg text-white mb-0 text-center text-md-start">
                  Get Connected
                </p>
                <div className="d-flex flex-column gap-3 mt-4">
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Ecosystem
                    </a>
                  </span>
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Blog
                    </a>
                  </span>
                  <span className="d-flex justify-content-center justify-content-md-start">
                    <a
                      className=" ff_helvitica fw-normal fs_md text_clr_dimGray d-inline-block footer"
                      href="#"
                    >
                      Newsletter
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="d-flex align-items-center mt-4 mt-md-0 justify-content-center justify-content-md-start">
                  <a href="#">
                    <img src={circle} alt="circle" />
                  </a>
                  <p className=" mb-0 ff_helvitica fw-normal fs_md text_clr_dimGray text-center text-md-start ms-1 text-center text-md-start">
                    EN
                  </p>
                  <a className=" d-inline-block ms-1" href="#">
                    <img src={down_arrow} alt="down_arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
