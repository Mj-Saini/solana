import React from "react";
import arrow from "../assets/img/svg/arrow-up.svg";
import change from "../assets/img/webp/change.webp";

function Source() {
  return (
    <>
      <section className="py-lg-5 py-4 source_bg">
        <div className="container py-3">
          <h2
            className=" ff_helvetica fw-normal fs_3x6l text-white"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Go to the source.
          </h2>
          <p
            className=" ff_helvetica fw-normal fs_xxl text_clr_gray"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Read the documentation for Solana and popular tools.
          </p>
          <div
            className="row mt-5 "
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center border-bottom border-1 pb-4">
                <h2 className=" ff_helvetica fw-normal fs_3x2l text-white">
                  Solana Docs
                </h2>
                <span className="border border-1 border-white rounded-5 px-4 py-2 cursor_pointer">
                  <a className=" ff_Roboto fw-normal fs_md text-white" href="#">
                    View all{" "}
                    <img className="ps-2" src={arrow} alt="img-arrow" />
                  </a>
                </span>
              </div>
              <p className=" ff_helvetica fw-normal fs_xxl pt-4 mt-1 text-white">
                Learn how Solana works and get a high-level understanding of
                Solana's architecture.
              </p>
              <div className="mt-md-5 pt-5">
                <h2 className="mt-lg-5 ff_helvetica fw-normal fs_3x9l text-white mb-4 pb-1">
                  Solana Changelog
                </h2>
                <p className=" ff_helvetica fw-normal fs_xxl text-white pe-md-4">
                  Some more Solana changes from Jacob & Joe. Subscribe to the
                  newsletter: https://solana.us17.list-manage.com/s... Proposal
                  - Priced Compute Units: ...
                </p>
                <span className="border border-1 border-white bg-black rounded-5 ps-2">
                  <a
                    className=" ff_Roboto fw-normal fs_xxl text-white ps-3 pe-5"
                    href="#"
                  >
                    Latest episode
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="d-flex justify-content-between align-items-center border-bottom border-1 pb-4">
                <h2 className=" ff_helvetica fw-normal fs_3x2l text-white">
                  Metaplex Docs
                </h2>
                <span className="border border-1 border-white rounded-5 px-4 py-2 cursor_pointer">
                  <a className=" ff_Roboto fw-normal fs_md text-white" href="#">
                    View all{" "}
                    <img className="ps-2" src={arrow} alt="img-arrow" />
                  </a>
                </span>
              </div>
              <p className=" ff_helvetica fw-normal fs_xxl pt-4 mt-1 text-white">
                Learn what you build with Metaplex, make the process of creating
                and launching NFTs easier.
              </p>
              <div className="mt-md-5 pt-5">
                <img className="w-100 mt-lg-5" src={change} alt="change-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Source;
