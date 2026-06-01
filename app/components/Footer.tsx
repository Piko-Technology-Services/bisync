"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-secondary footer mt-5 py-5">
      <div className="container py-5">

        <div className="row g-5">

          {/* ADDRESS */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>

            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              123 Street, New York, USA
            </p>

            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>
              +012 345 67890
            </p>

            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              info@example.com
            </p>

            {/* SOCIALS */}
            <div className="d-flex pt-2">

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>

              <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Services</h5>

            <Link className="btn btn-link" href="#">Business Security</Link>
            <Link className="btn btn-link" href="#">Fire Detection</Link>
            <Link className="btn btn-link" href="#">Alarm Systems</Link>
            <Link className="btn btn-link" href="#">CCTV & Video</Link>
            <Link className="btn btn-link" href="#">Smart Home</Link>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>

            <Link className="btn btn-link" href="#">About Us</Link>
            <Link className="btn btn-link" href="#">Contact Us</Link>
            <Link className="btn btn-link" href="#">Our Services</Link>
            <Link className="btn btn-link" href="#">Terms & Conditions</Link>
            <Link className="btn btn-link" href="#">Support</Link>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>

            <p>
              Stay updated with our latest security solutions and tech updates.
            </p>

            <div className="position-relative w-100">

              <input
                className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5"
                type="email"
                placeholder="Your email"
              />

              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Sign Up
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}