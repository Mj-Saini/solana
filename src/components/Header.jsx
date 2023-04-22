import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown } from "react-bootstrap";
import logo from "../assets/img/svg/logo.svg";
import menu from "../assets/img/png/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section>
        <div className="header_bg_gradient py-1">
          <p className="ff_roboto fw-normal fs_xl text-uppercase text-center text-black py-1 mb-0">
            Breakpoint 2023 - New City. New Vibes - Get Early Access -&gt;
          </p>
        </div>
        <nav className="bg_black">
          <div
            className="container"
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <div className="d-flex justify-content-between align-items-center w-100 ">
              <a
                className="ff_inter fw-bold fs_2xl text-white z_index1 my-2"
                href="#"
              >
                <Link to="/">
                  {" "}
                  <img src={logo} alt="logo-img" />
                </Link>
              </a>{" "}
              <ul className="d-flex gap-3 gap-xl-4 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
                <li className=" position-relative afterline z_index129">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Learn
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                          stroke="#7C7C7C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Build
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                          stroke="#7C7C7C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Network
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                          stroke="#7C7C7C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {" "}
                      Community
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                          stroke="#7C7C7C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <Link to="next">
                  {" "}
                  <li>
                    <a
                      className="resource ff_helvetica fw-normal fs_xl text_clr_dimGray"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                </Link>
              </ul>
              <div
                style={{ zIndex: "1000" }}
                className={
                  navShow
                    ? "threeline d-lg-none cursor_pointer my-2"
                    : "threeline d-lg-none cursor_pointer my-2"
                }
                onClick={() => setNavShow(!navShow)}
              >
                <a href="#">
                  <img className="menu_icon_size" src={menu} alt="icon" />
                </a>
              </div>
            </div>
            <div className="d-lg-none d-flex ">
              <div className={` ${navShow ? "shownav" : " hidenav"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center min-vh-100 justify-content-center  list-unstyled gap-3  pt-3 transition">
                  <li className=" position-relative afterline z_index129">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Learn
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                            stroke="#7C7C7C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Build
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                            stroke="#7C7C7C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Network
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                            stroke="#7C7C7C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {" "}
                        Community
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                            stroke="#7C7C7C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <a
                      className=" ff_helvetica fw-normal fs_xl text_clr_dimGray"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
