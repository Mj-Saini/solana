import React from "react";
import brave from "../assets/img/svg/brave.svg";
import circle from "../assets/img/svg/circle.svg";
import discord from "../assets/img/svg/discord.svg";
import google from "../assets/img/svg/google.svg";
import jump from "../assets/img/svg/jump.svg";
import palgza from "../assets/img/svg/palgla.svg";
import magic from "../assets/img/svg/magic.svg";

function Connect() {
  return (
    <>
      <section className="pt-5 pt-xl-0  mt-sm-5 mt-xl-0 ">
        <div className="container ">
          <p
            className="ff_helvetica fw-normal fs_md text_clr_sky text-center mb-0 pb-4 mt-xl-5"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Powering tools and integrations from companies all around the world
          </p>
          <div
            className="overflow-auto"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <div className="w_1200 d-flex justify-content-between align-items-center mt-3 ">
              <span>
                <a href="#">
                  <img src={brave} alt="logo-img" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={circle} alt="logo-img" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={discord} alt="logo-img" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={google} alt="logo-img" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={jump} alt="logo-img" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={palgza} alt="logo-img" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={magic} alt="logo-img" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Connect;
