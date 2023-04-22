import React from "react";
import Header from "./Header";
import oval from "../assets/img/png/header-circle1.png";
import oval1 from "../assets/img/png/header-circle2.png";

function Hero() {
  return (
    <>
      <section className="d-flex flex-column min_vh_70 position-relative">
        <img
          className="first_oval_hero position-absolute"
          src={oval}
          alt="IMG"
        />
        <img
          className="sec_oval_hero position-absolute"
          src={oval1}
          alt="IMG"
        />
        <Header />
        <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
          <div
            className="mt-sm-5 mt-xl
          "
          >
            <h1
              className="ff_helvetica fw-normal fs_7x0l text-white text-center mb-0 mt-sm-5 mt-xl-0 pt-4 pt-sm-5 pt-xl-0"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              Powerful for developers.{" "}
              <span className="d-lg-block">Fast for everyone.</span>
            </h1>
            <p
              className="ff_helvetica fw-normal fs_2x1l text-white text-center pt-md-5 pt-4 mb-0"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              Bring blockchain to the people. Solana supports experiences{" "}
              <span className="d-lg-block">
                for power users, new consumers, and everyone in between.
              </span>
            </p>
            <div
              className="d-flex flex-column flex-sm-row justify-content-center mt-5 gap-3"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <span className="build_btn d-inline-block text-center text-sm-start mx-5 mx-sm-0">
                <a className="ff_roboto fw-normal fs_md text-white" href="#">
                  Start building
                </a>
              </span>
              <span className="docs_btn text-center text-sm-start mx-5 mx-sm-0">
                <a className="ff_roboto fw-normal fs_md text-white" href="#">
                  Read docs
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
