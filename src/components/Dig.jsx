import React from "react";
import { Deeper } from "./Start";

function Dig() {
  return (
    <>
      <section className="py-4  py-md-5 z_index_3">
        <div className="container mb-md-5">
          <h2 className=" ff_helvetica fw-normal fs_3x8l text-white mb-0">
            Dig deeper.
          </h2>
          <p className=" ff_helvetica fw-normal text_clr_gray mb-0 fs_2xl mt-1">
            Learn from resources across the greater Solana ecosystem.
          </p>
          <div className="row mt-4 pt-2">
            {Deeper.map((data) => {
              return (
                <div className="col-lg-4 col-sm-6 mt-4">
                  <div className=" h-100 update_box rounded-3 position-relative">
                    <div className=" d-flex h-100 flex-column justify-content-between  pt-4 px-4 pb-4">
                      <div className="position-absolute shadow_on_hover">
                        <img
                          className=" w-100 z_index_1"
                          src={data.shadow}
                          alt="img"
                        />
                      </div>
                      <div>
                        <p className=" ff_helvetica fw-normal fs_sm text_clr_darkViolet mb-0 text-uppercase z_index_3">
                          {data.p}
                        </p>
                        <h4 className=" ff_helvetica fw-normal fs_x8l text-white mt-2 mb-0 z_index_3">
                          {data.head}
                        </h4>
                      </div>
                      <div>
                        <p className=" ff_helvetica fw-normal fs_lg text-white mt-3 mb-0 pe-xl-5 z_index_3">
                          {data.article}
                        </p>
                      </div>
                      <div className="d-flex align-items-center mt-md-5 mt-3 d-inline-block pb-2 z_index_3">
                        <p className=" ff_helvetica fw-normal fs_xsm text-white mb-0 cursor_pointer text-uppercase">
                          {data.link}
                        </p>
                        <img
                          className=" ps-3 cursor_pointer"
                          src={data.img}
                          alt="arrow"
                        />
                      </div>
                    </div>
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

export default Dig;
