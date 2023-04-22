import React from "react";
import dot from "../assets/img/png/dot.png";

function Community() {
  return (
    <>
      <section className="py-4 py-lg-5 join_bg_img">
        <div className="container">
          <div className="row mt-lg-5 pt-lg-5 ">
            <div className="col-lg-6">
              <article>
                <p
                  className="ff_helvetica fw-normal fs_3x9l text-white text-center text-lg-start"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1500"
                >
                  Join a community{" "}
                  <span className="fs_3x8l d-block"> of millions.</span>
                </p>
              </article>
            </div>
            <div
              className="col-lg-6"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <div className="d-flex flex-column gap-5 align-items-center align-items-lg-start">
                <article>
                  {" "}
                  <h2 className="active_account ff_helvetica fw-normal fs_9x11l mb-0">
                    11.5M+
                  </h2>
                  <p className="ff_roboto fw-normal fs_lg text_clr_gray mb-0 ps-2 text-uppercase">
                    Active accounts
                  </p>
                </article>
                <article>
                  {" "}
                  <h2 className="minted_gradient ff_helvetica fw-normal fs_9x16l mb-0">
                    21.9M
                  </h2>
                  <p className="ff_roboto fw-normal fs_lg text_clr_gray mb-0 ps-2 text-uppercase">
                    NFTs minted
                  </p>
                </article>
                <article>
                  {" "}
                  <h2 className="average_gradient ff_helvetica fw-normal fs_9x20l mb-0">
                    $0.00025
                  </h2>
                  <p className="ff_roboto fw-normal fs_lg text_clr_gray mb-0 ps-2 text-uppercase">
                    Average cost per transaction
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="d-flex row mt-md-5 mt-4 ">
            <div
              className="col-lg-4"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <div className="d-flex flex-column align-items-center align-items-md-start">
                {" "}
                <h2 className=" ff_helvetica fw-normal text-white fs_3x9l mb-0 mt-lg-5 mt-4 pt-4">
                  Made for{" "}
                  <span className="fs_3x9l d-block"> mass adoption.</span>
                </h2>
                <div className="d-flex align-items-center">
                  <img src={dot} alt="dot" />
                  <p className=" ff_Roboto fw-normal fs_lg text_clr_gray mb-0 mt-2 ms-2">
                    Live data
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-8"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <div
                className="row"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <div className="col-md-6 mb-2">
                  <div className="transform_translet">
                    <div className="p-4 grid_box_bg">
                      <h3 className="text_clr_white ff_helvetica fs_2x8l fw-normal verticle_line position-relative">
                        Fast
                      </h3>
                      <p className="  text_clr_gray ff_helvetica fw-normal  fs_x8l">
                        Don’t keep your users waiting. Solana has block times of
                        400 milliseconds — and as hardware gets faster, so will
                        the network.
                      </p>
                      <div>
                        <div>
                          <span className=" d-flex align-items-center">
                            <img src={dot} alt="dot" />
                            <p className="ff_helvetica fw-normal text-white fs_2x8l mb-0 mt-3 ms-2">
                              3,969
                            </p>
                          </span>
                        </div>
                        <div className=" text-uppercase  ff_Roboto fw-normal fs_lg text_clr_gray mt-2">
                          Transactions per second
                        </div>
                      </div>
                    </div>
                    <div className="p-4 py-4 mt-4 grid_box_bg mt-4 ">
                      <h3 className="text_clr_white ff_helvetica fs_2x8l fw-normal verticle_line2 position-relative">
                        Scalable
                      </h3>
                      <p className=" text_clr_gray ff_helvetica fw-normal  fs_x8l">
                        Get big, quick. Solana is made to handle thousands of
                        transactions per second, and fees for both developers
                        and users remain less than $0.01.
                      </p>
                      <div>
                        <div>
                          <span className=" d-flex align-items-center">
                            <img src={dot} alt="dot" />
                            <p className="ff_helvetica fw-normal text-white fs_2x8l mb-0 mt-3 ms-2">
                              163,077,581,394
                            </p>
                          </span>
                        </div>
                        <div className=" text-uppercase  ff_Roboto fw-normal fs_lg text_clr_gray mt-2">
                          Total transactions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2 mt-4 mt-md-0 undefined py-4 ">
                  <div className="p-4  grid_box_bg mt-4 mt-md-0">
                    <h3 className="text_clr_white ff_helvetica fs_2x8l fw-normal position-relative verticle_line3">
                      Decentralized
                    </h3>
                    <p className="  text_clr_gray ff_helvetica fw-normal  fs_x8l">
                      The Solana network is validated by thousands of nodes that
                      operate independently of each other, ensuring your data
                      remains secure and censorship resistant.
                    </p>
                    <div>
                      <div>
                        <span className=" d-flex align-items-center">
                          <img src={dot} alt="dot" />
                          <p className="ff_helvetica fw-normal text-white fs_2x8l mb-0 mt-3 ms-2">
                            1,675
                          </p>
                        </span>
                      </div>
                      <div className=" text-uppercase  ff_Roboto fw-normal fs_lg text_clr_gray mt-2">
                        Validator nodes
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-sm-4 mt-4 grid_box_bg mt-4">
                    <h3 className="text_clr_white ff_helvetica fs_2x8l fw-normal position-relative verticle_line4">
                      Energy Efficient
                    </h3>
                    <p className="  text_clr_gray ff_helvetica fw-normal  fs_x8l">
                      Solana’s proof of stake network and other innovations
                      minimize its impact on the{" "}
                      <a
                        className=" text-decoration-underline text_clr_green"
                        href="/environment"
                      >
                        environment
                      </a>
                      . Each Solana transaction uses about the same energy as a
                      few Google searches.
                    </p>
                    <div>
                      <div>
                        <span className=" d-flex align-items-center">
                          <p className="ff_helvetica fw-normal text-white fs_2x8l mb-0 mt-3 ms-2">
                            0%
                          </p>
                        </span>
                      </div>
                      <div className=" text-uppercase  ff_Roboto fw-normal fs_lg text_clr_gray mt-2">
                        Net carbon impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
