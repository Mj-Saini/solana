import React, { useState } from "react";
import anybody from "../assets/img/webp/anybodies.webp";
import anyicon from "../assets/img/svg/any.svg";
import clay from "../assets/img/svg/clay.svg";
import panda from "../assets/img/svg/panda.svg";
import dog from "../assets/img/svg/dog.svg";
import okay from "../assets/img/svg/okay.svg";

function Growth() {
  const [activeTab, setActiveTab] = useState("NFTs");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section id="Growth" className=" py-lg-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h2
              className=" ff_helvetica fw-normal fs_3x9l text-white"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              Build for growth.
            </h2>
            <div
              className="d-flex gap-sm-3 gap-2 flex-wrap"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <span
                className={
                  activeTab === "NFTs" ? " active growth_btn" : " growth_btn"
                }
                onClick={() => handleTabClick("NFTs")}
              >
                <a
                  className="ff_helvetica fw-normal fs_md text-white d-inline-block"
                  href="#Growth"
                >
                  NFTs
                </a>
              </span>
              <span
                className={
                  activeTab === "DeFi" ? "active  growth_btn" : " growth_btn"
                }
                onClick={() => handleTabClick("DeFi")}
              >
                <a
                  className="ff_helvetica fw-normal fs_md text-white d-inline-block"
                  href="#Growth"
                >
                  DeFi
                </a>
              </span>
              <span
                className={
                  activeTab === "Payments"
                    ? " active growth_btn"
                    : " growth_btn"
                }
                onClick={() => handleTabClick("Payments")}
              >
                <a
                  className="ff_helvetica fw-normal fs_md text-white d-inline-block"
                  href="#Growth"
                >
                  Payments
                </a>
              </span>
              <span
                className={
                  activeTab === "Gaming" ? "active  growth_btn" : " growth_btn"
                }
                onClick={() => handleTabClick("Gaming")}
              >
                <a
                  className="ff_helvetica fw-normal fs_md text-white d-inline-block"
                  href="#Growth"
                >
                  Gaming
                </a>
              </span>
              <span
                className={
                  activeTab === "DAOs" ? "active  growth_btn" : " growth_btn"
                }
                onClick={() => handleTabClick("DAOs")}
              >
                <a
                  className="ff_helvetica fw-normal fs_md text-white d-inline-block"
                  href="#Growth"
                >
                  DAOs
                </a>
              </span>
            </div>
          </div>
          {activeTab === "NFTs" && (
            <div
              className="row mt-4 pt-2"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <div className="col-md-6 px-0">
                <img className=" w-100" src={anybody} alt="img" />
              </div>
              <div className="col-md-6 px-0">
                <div className=" bg_midBlack ps-sm-5 px-3 py-4 h-100 d-flex flex-column justify-content-center">
                  <img
                    className=" w-50 pe-sm-5"
                    src={anyicon}
                    alt="anybody_img"
                  />
                  <p className=" mb-0 ff_helvetica fw-normal  fs_2x1l text-white mt-3">
                    It's time to bridge the digital and physical. Anybodies
                    helps established brands like Toys'R'Us connect real-life
                    places and products with NFTs.
                  </p>
                  <p className=" mb-0 ff_helvetica fw-normal fs_2xl text_clr_lightViolet mt-3">
                    Learn more about NFTs on Solana
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "DeFi" && (
            <div
              className="row mt-4 pt-2"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <div className="col-md-6 px-0">
                <img className=" w-100" src={anybody} alt="img" />
              </div>
              <div className="col-md-6 px-0">
                <div className=" bg_midBlack ps-sm-5 px-3 py-4 h-100 d-flex flex-column justify-content-center">
                  <img
                    className=" w-50 pe-sm-5"
                    src={anyicon}
                    alt="anybody_img"
                  />
                  <p className=" mb-0 ff_helvetica fw-normal  fs_2x1l text-white mt-3">
                    It's time to bridge the digital and physical. Anybodies
                    helps established brands like Toys'R'Us connect real-life
                    places and products with NFTs.
                  </p>
                  <p className=" mb-0 ff_helvetica fw-normal fs_2xl text_clr_lightViolet mt-3">
                    Learn more about NFTs on Solana
                  </p>
                </div>
              </div>
            </div>
          )}
          <div
            className="row justify-content-between align-items-center build_icon_bg py-2 px-sm-5 mt-4"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <div
              className="d-flex flex-wrap gap-3 gap-sm-0 justify-content-between align-items-center"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <span className=" ps-sm-4">
                <img src={clay} alt="build_img1" />
              </span>
              <span>
                <img src={panda} alt="img" />
              </span>
              <span>
                <img src={dog} alt="img" />
              </span>
              <span className=" pe-sm-4">
                <img src={okay} alt="img" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Growth;
