import React from 'react'

export default function BottomLinks() {
  return (
    <footer
    className="text-center text-white"
    style={{ backgroundColor: "#f1f1f1" }}
  >
    {/* Grid container */}
    <div className="container pt-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-linkedin" />
        </a>
        {/* Github */}
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center text-dark p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-dark" href="https://www.bitrix24.in/?_gl=1*1ajlmgn*_ga*MjAyNzM3NDczMi4xNjY0MjU2NTU3*_ga_YLDC55MYKM*MTY2NDQ0NDIzNS42LjAuMTY2NDQ0NDIzNS4wLjAuMA..*_ga_3N26P6D2Z0*MTY2NDQ0NDIzNS42LjAuMTY2NDQ0NDIzNS4wLjAuMA..&_ga=2.5624757.781481452.1664256557-2027374732.1664256557&redirect_from=www.bitrix24.com%2F">
        Bitrix24
      </a>
    </div>
    {/* Copyright */}
  </footer>
  
  )
}
