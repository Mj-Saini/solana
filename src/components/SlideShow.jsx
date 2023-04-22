import React from "react";
import grid_1 from "../assets/img/png/Grid_img1.png";
import grid_2 from "../assets/img/png/Grid_img2.png";
import grid_3 from "../assets/img/png/Grid_img3.png";
import grid_4 from "../assets/img/png/Grid_img4.png";
import grid_5 from "../assets/img/png/Grid_img5.png";
function SlideShow() {
  return (
    <>
      <section className="overflow-auto pt-md-5 slider_bg_img pb-4">
        <div className="container">
          <h2 className=" ff_helvetica fw-normal fs_3x8l text-white mt-3">
            Join a thriving community.
          </h2>
        </div>
        <div class="SliderParant d-flex  pt-4 ">
          <div class="Slide d-flex gap-3  align-items-center pe-5 ">
            {" "}
            <div className="d-grid col_gap row_gap ">
              <div className="Grid_box1">
                <div
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ backgroundColor: "#19161C" }}
                >
                  <h2 className="text_clr_pink ff_helvetica fs_3x6l ">
                    11,000
                  </h2>
                  <p className=" text_clr_darkGray ff_helvetica fw-normal fs_sm text-uppercase">
                    Solana Hacker House participants
                  </p>
                </div>
              </div>
              <div className="Grid_box2">
                <img className="w-100" src={grid_1} alt="img" />
              </div>
              <div className="Grid_box3">
                <img className="w-100" src={grid_2} alt="img" />
              </div>
              <div className="Grid_box4">
                <img className="w-100" src={grid_3} alt="img" />
              </div>
              <div className="Grid_box5">
                <div
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ backgroundColor: "#19161C" }}
                >
                  <h2 className=" text_clr_green ff_helvetica fs_3x6l ">
                    48,000
                  </h2>
                  <p className=" text_clr_darkGray ff_helvetica fw-normal fs_sm text-center text-uppercase">
                    Developers building during Solana Hackathons
                  </p>
                </div>
              </div>
              <div className="Grid_box6">
                <img className="w-100" src={grid_4} alt="img" />
              </div>
              <div className="Grid_box7">
                <div
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ backgroundColor: "#19161C" }}
                >
                  <h2 className=" text_clr_yellow ff_helvetica fs_3x6l ">
                    3800
                  </h2>
                  <p className=" text_clr_darkGray ff_helvetica fw-normal fs_sm text-center text-uppercase">
                    Solana Breakpoint 2022 attendees
                  </p>
                </div>
              </div>
              <div className="Grid_box8">
                <img className="w-100" src={grid_5} alt="img" />
              </div>
            </div>
          </div>
          <div class="Slide d-flex gap-3 align-items-center pe-5 me-5">
            {" "}
            <div className="d-grid col_gap row_gap ">
              <div className="Grid_box1">
                <div
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ backgroundColor: "#19161C" }}
                >
                  <h2 className="text_clr_pink ff_helvetica fs_3x6l ">
                    11,000
                  </h2>
                  <p className=" text_clr_darkGray ff_helvetica fw-normal fs_sm text-center">
                    Solana Hacker House participants
                  </p>
                </div>
              </div>
              <div className="Grid_box2">
                <img className="w-100" src={grid_1} alt="img" />
              </div>
              <div className="Grid_box3">
                <img className="w-100" src={grid_2} alt="img" />
              </div>
              <div className="Grid_box4">
                <img className="w-100" src={grid_3} alt="img" />
              </div>
              <div className="Grid_box5">
                <div
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ backgroundColor: "#19161C" }}
                >
                  <h2 className="text_clr_pink ff_helvetica fs_3x6l ">
                    11,000
                  </h2>
                  <p className=" text_clr_darkGray ff_helvetica fw-normal fs_sm">
                    Solana Hacker House participants
                  </p>
                </div>
              </div>
              <div className="Grid_box6">
                <img className="w-100" src={grid_4} alt="img" />
              </div>
              <div className="Grid_box7">
                <div
                  className="d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ backgroundColor: "#19161C" }}
                >
                  <h2 className="text_clr_pink ff_helvetica fs_3x6l ">
                    11,000
                  </h2>
                  <p className=" text_clr_darkGray ff_helvetica fw-normal fs_sm">
                    Solana Hacker House participants
                  </p>
                </div>
              </div>
              <div className="Grid_box8">
                <img className="w-100" src={grid_5} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5 pb-lg-5 ">
          <h3
            className=" text-center ff_helvetica fw-normal fs_3x8l text-white w_736 mx-auto mt-md-5 pt-md-5"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            It's time to join the thousands of creators, artists, and developers
            using Solana.
          </h3>
          <div
            className="d-flex justify-content-center mt-4 mb-lg-5 pb-lg-5"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <span className="build_btn d-inline-block text-center text-sm-start mx-5 mx-sm-0">
              <a
                className="ff_roboto fw-normal fs_md text-white text-uppercase"
                href="#"
              >
                Start building
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideShow;
