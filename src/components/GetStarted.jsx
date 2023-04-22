import React from "react";
import arrow from "../assets/img/svg/rounder-arrow.svg";
import buildSpace from "../assets/img/webp/buildspace.webp";
import Start from "./Start";
function GetStarted() {
  return (
    <>
      <section className="py-4 py-md-5">
        <div className="container ">
          <h2
            className=" ff_helvetica fw-normal fs_3x8l text-white  text-center text-md-start"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Get started.
          </h2>
          <p
            className=" ff_helvetica fw-normal fs_xxl text_clr_gray text-center text-md-start "
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
            className="get_started_img mt-4 w-100 py-md-5 py-4 px-md-5 d-flex flex-column align-items-center align-items-md-start"
          >
            <a
              className="ff_helvetica fw-normal fs_xsm text-white chapter_btn bg_violet ms-md-5"
              href="#"
            >
              17 Chapters
            </a>
            <h2 className="px-md-5 ff_helvetica fw-normal fs_3x9l text-white text-center text-sm-start pt-3">
              Solana Development Course
            </h2>
            <p className="px-md-5 ff_helvetica fw-normal fs_x8l text-white text-center text-sm-start mb-0 mt-4 pt-1">
              Quickstart your Solana development starting{" "}
              <span className="d-block">from nothing to complex programs.</span>
            </p>
            <img className="mt-4 px-md-5" src={arrow} alt="arrow" />
          </div>
          <div className="row ">
            {Start.map((data) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1500"
                  className="col-lg-4 col-sm-6 mt-4"
                >
                  <div className="build_space_bg position-relative">
                    <div className="content_over_img d-flex flex-column justify-content-end align-items-between">
                      <div className="px-4">
                        <span className="  d-inline-block mt-md-5 ">
                          <a
                            className="ff_helvetica fw-normal fs_xsm text-white chapter_btn bg_violet"
                            href="#"
                          >
                            {data.btn}
                          </a>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between w-100 mb-4 pb-3 px-4 mt-2   ">
                        <h2 className="mb-0 ff_helvetica fw-normal fs_x8l text-white">
                          {data.head}{" "}
                          <span className="d-block">{data.span}</span>
                        </h2>
                        <img src={data.image} alt="" />
                      </div>
                    </div>
                    <img className="w-100" src={data.Img} alt="img" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
