import React from "react";
import notes from "../assets/img/svg/note.svg";
import ring from "../assets/img/webp/ring.webp";
import shadow from "../assets/img/png/shadow.png";
import Header from "./Header";

function Resources() {
  return (
    <>
      <section className="position-relative">
        <Header />
        <div className="container">
          <div className="row align-items-center mt-4 mt-sm-5 mt-lg-0">
            <div className="col-lg-6">
              <div
                data-aos="zoom-in-up"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-delay="300"
                className="d-flex flex-column align-items-center align-items-lg-start"
              >
                <h2 className=" ff_helvetica fw-normal fs_9x2l text-white mb-0 text-center text-lg-start">
                  Developer Resources
                </h2>
                <p className=" ff_helvetica fw-normal fs_2x1l text_clr_gray mt-3 mb-0 text-center text-lg-start">
                  A manual for joining the Solana{" "}
                  <span className="d-lg-block">
                    ecosystem. By builders for builders.
                  </span>
                </p>
                <div className="d-flex flex-column flex-sm-row gap-4 mt-md-4 pt-md-3 mt-3">
                  <span className="update_sec_btn py-2 px-2  px-sm-4  bg_green border-0 text-center">
                    <a
                      className=" ff_Roboto fw-normal fs_md text-black text-uppercase "
                      href="#"
                    >
                      Build Now
                    </a>
                  </span>
                  <span className="update_sec_btn py-2 px-3 px-md-4 text-center">
                    <a
                      className=" ff_Roboto fw-normal fs_md text-white"
                      href="#"
                    >
                      Stack Exchange{" "}
                      <img className="ps-2" src={notes} alt="media iicon" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="">
                <img
                  className="z_index_1 position-absolute end-0"
                  src={shadow}
                  alt="shadow"
                />
                <img
                  data-aos="zoom-in-up"
                  data-aos-offset="500"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500"
                  className="w-100"
                  src={ring}
                  alt="ring-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;
