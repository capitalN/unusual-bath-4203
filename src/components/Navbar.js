import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="#">
          Bitrix24
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                TOOLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SOLUTIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PARTNERS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                APPS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SUPPORT
              </a>
            </li>
          </ul>
          <div>
            <button className="btn btn-success m-1" type="submit">
              Start For Free
            </button>
            <button className="btn btn-outline-primary m-1" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
