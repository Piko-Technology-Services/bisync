"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-secondary footer mt-5 py-5">
      <div className="container py-5">

        <div className="row g-5">

          {/* COMPANY INFO */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">
              BISYNC Networks & Security (Z) Limited
            </h5>

            <p className="mb-3">
              Reliable ICT, Networking & Security Solutions for Modern Businesses.
              We design, install, and maintain secure and scalable technology infrastructure.
            </p>

            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              Collet House, Buteko Avenue, Ndola, Zambia
            </p>

            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>
              +260 962 857 789
            </p>

            <p className="mb-3">
              <i className="fa fa-envelope me-3"></i>
              info@bisyncnetworks.com
            </p>

            {/* SOCIALS */}
            <div className="d-flex pt-2">

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-whatsapp"></i>
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Our Services</h5>

            <Link className="btn btn-link" href="#">
              IP CCTV Surveillance Systems
            </Link>

            <Link className="btn btn-link" href="#">
              Access Control & Time Attendance
            </Link>

            <Link className="btn btn-link" href="#">
              Structured Cabling & Networking
            </Link>

            <Link className="btn btn-link" href="#">
              Electric Fencing & Security Systems
            </Link>

            <Link className="btn btn-link" href="#">
              VoIP & Telephone Systems
            </Link>

            <Link className="btn btn-link" href="#">
              Multimedia & Digital Solutions
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>

            <Link className="btn btn-link" href="#about">About Us</Link>
            <Link className="btn btn-link" href="#services">Services</Link>
            <Link className="btn btn-link" href="#projects">Projects</Link>
            <Link className="btn btn-link" href="#quote">Request Quote</Link>
            <Link className="btn btn-link" href="#contact">Contact</Link>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Stay Updated</h5>

            <p>
              Get updates on new ICT solutions, security technologies, and company projects.
            </p>

            <div className="position-relative w-100">

              <input
                className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5"
                type="email"
                placeholder="Enter your email"
              />

              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="container text-center pt-4 border-top border-secondary">
        <small className="text-secondary">
          © {new Date().getFullYear()} BISYNC Networks & Security (Z) Limited. All Rights Reserved.
        </small>
      </div>
    </div>
  );
}