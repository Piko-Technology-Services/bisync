"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* TOPBAR */}
      <div className="container-fluid bg-dark px-5">
        <div className="row gx-4 d-none d-lg-flex">

          {/* LEFT INFO */}
          <div className="col-lg-6 text-start">

            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="fa fa-map-marker-alt text-white"></small>
              </div>
              <small>Collet House, Buteko Avenue, Ndola</small>
            </div>

            <div className="h-100 d-inline-flex align-items-center py-3">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="fa fa-envelope-open text-white"></small>
              </div>
              <small>info@bisyncnetworks.com</small>
            </div>

          </div>

          {/* RIGHT INFO */}
          <div className="col-lg-6 text-end">

            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="fa fa-phone-alt text-white"></small>
              </div>
              <small>+260 962 857 789</small>
            </div>

            <div className="h-100 d-inline-flex align-items-center py-3">
              <div className="btn-sm-square rounded-circle bg-primary me-2">
                <small className="far fa-clock text-white"></small>
              </div>
              <small>Mon - Fri : 08:00 - 17:00</small>
            </div>

          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">

        {/* BRAND */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <h6 className="m-0 text-primary">
            <img
                src="/logo.png"
                alt="BISYNC Networks"
                style={{ height: 40, width: "auto" }}
            />
            
          </h6>
        </Link>

        {/* TOGGLER */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarCollapse">

          <div className="navbar-nav ms-auto py-4 py-lg-0">

            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>

            <Link href="#about" className="nav-item nav-link">
              About
            </Link>

            <Link href="#services" className="nav-item nav-link">
              Services
            </Link>

            <Link href="#projects" className="nav-item nav-link">
              Projects
            </Link>

            <div className="nav-item dropdown">

              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>

              <div className="dropdown-menu rounded-0 rounded-bottom m-0">

                <Link href="#feature" className="dropdown-item">
                  Features
                </Link>

                <Link href="#quote" className="dropdown-item">
                  Request Quote
                </Link>

                <Link href="#clients" className="dropdown-item">
                  Our Clients
                </Link>

                <Link href="#testimonial" className="dropdown-item">
                  Testimonials
                </Link>

              </div>

            </div>

            <Link href="#contact" className="nav-item nav-link">
              Contact
            </Link>

          </div>

          {/* SOCIAL ICONS */}
          <div className="h-100 d-lg-inline-flex align-items-center d-none">

            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="#">
              <i className="fab fa-whatsapp"></i>
            </a>

          </div>

        </div>
      </nav>
    </>
  );
}