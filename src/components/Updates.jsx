import React from "react";
import utube from "../assets/img/svg/youtube.svg";
import podcast from "../assets/img/svg/podcast.svg";

function Updates() {
  return (
    <>
      <section className=" py-lg-5">
        <div className="container">
          <div
            className="row"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <div className="col-lg-6">
              <div className="update_box px-md-5 py-md-5 py-4 px-3 h-100">
                <h2 className=" ff_helvetica fw-normal fs_3x6l text-white mb-0">
                  Solana Developer Update
                </h2>
                <p className=" ff_helvetica fw-normal fs_xl text_clr_gray pb-md-4 mt-md-4 mt-2 pt-1">
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <div className="mt-md-5 mt-3 update_input py-2 d-flex justify-content-between px-2 cursor_pointer ">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w_65 ps-1 ps-sm-3 bg-transparent py-2 border-0 outline_none ff_Roboto fw-semibold fs_md text_clr_dimGray"
                  />{" "}
                  <span className="sign_up_btn py-2 pe-sm-2">
                    <a
                      className="px-xl-4 px-2 ff_Roboto fw-normal fs_md text-black"
                      href="#"
                    >
                      Sign up
                    </a>
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="update_box px-md-5 py-md-5 py-4 px-3 h-100">
                <h2 className=" ff_helvetica fw-normal fs_3x6l text-white mb-0">
                  Even more resources
                </h2>
                <p className=" ff_helvetica fw-normal fs_xl text_clr_gray pb-md-2 mt-md-4 mt-2 pt-1">
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers.
                </p>
                <div className="d-flex gap-4 mt-md-5 mt-3">
                  <span className="update_sec_btn py-2 px-2 px-sm-4 px-xl-5">
                    <a
                      className=" ff_Roboto fw-normal fs_md text-white"
                      href="#"
                    >
                      YouTube <img src={utube} alt="media iicon" />
                    </a>
                  </span>
                  <span className="update_sec_btn py-2 px-2 px-sm-4 px-xl-5">
                    <a
                      className=" ff_Roboto fw-normal fs_md text-white"
                      href="#"
                    >
                      Podcast <img src={podcast} alt="media iicon" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
