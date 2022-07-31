import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import $ from "jquery";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navvbar sticky-top">
        <div className="container-fluid navvbar-div">
          <Link className="navbar-brand mx-2" id="myName" to="/">
            <img
              src="https://avatars.githubusercontent.com/u/76250569?v=4"
              alt=""
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </Link>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>

          <div
            className="collapse navbar-collapse div-navbar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-list">
              <li className="nav-item navbar-list-li active">
                <Link className="nav-link NavbarLink mx-2 " to="/">
                  <i className="fa-solid fa-house navlink-logo mx-1"></i> Home
                </Link>
              </li>

              <li className="nav-item navbar-list-li">
                <Link className="nav-link  NavbarLink mx-2" to="/about">
                  <i className="fa-solid fa-user navlink-logo mx-1"></i> About
                </Link>
              </li>

              <li className="nav-item navbar-list-li">
                <Link className="nav-link  NavbarLink  mx-2" to="/projects">
                  <i className="fa-solid fa-list-check navlink-logo mx-1"></i>{" "}
                  Projects
                </Link>
              </li>

              <li className="nav-item navbar-list-li">
                <Link className="nav-link  NavbarLink mx-2" to="/resume">
                  <i className="fa-solid fa-book navlink-logo mx-1"></i> Resume
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link  NavbarLink mx-2"
                  href="https://github.com/aman465320"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-github"
                    style={{ fontSize: "1.5rem", color: "#DAB6FC" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

let navbarLink = document.querySelectorAll(".navbar-nav li");

document.addEventListener("click", function (e) {
  for (let x = 0; x < navbarLink.length; x++) {
    navbarLink[x].classList.remove("active");
  }

  e.target.closest("li").classList.add("active");
});

export default Navbar;
