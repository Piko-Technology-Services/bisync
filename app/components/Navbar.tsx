"use client";

import Link from "next/link";
import { services } from "../data/services";

export default function Navbar() {
  return (
    <>
      {/* TOPBAR */}
      <div className="container-fluid bg-dark px-5">
        <div className="row gx-4 d-none d-lg-flex">

          {/* LEFT INFO */}
          <div className="col-lg-6 text-start">

            <div className="h-100 d-inline-flex align-items-center py-3 me-4 bs-topbar-item">
              <div className="btn-sm-square rounded-circle bg-primary me-2 bs-topbar-icon">
                <small className="fa fa-map-marker-alt text-white"></small>
              </div>
              <small>Collet House, Buteko Avenue, Ndola</small>
            </div>

            <div className="h-100 d-inline-flex align-items-center py-3 bs-topbar-item">
              <div className="btn-sm-square rounded-circle bg-primary me-2 bs-topbar-icon">
                <small className="fa fa-envelope-open text-white"></small>
              </div>
              <small>info@bisyncnetworks.com</small>
            </div>

          </div>

          {/* RIGHT INFO */}
          <div className="col-lg-6 text-end">

            <div className="h-100 d-inline-flex align-items-center py-3 me-4 bs-topbar-item">
              <div className="btn-sm-square rounded-circle bg-primary me-2 bs-topbar-icon">
                <small className="fa fa-phone-alt text-white"></small>
              </div>
              <small>+260 962 857 789</small>
            </div>

            <div className="h-100 d-inline-flex align-items-center py-3 bs-topbar-item">
              <div className="btn-sm-square rounded-circle bg-primary me-2 bs-topbar-icon">
                <small className="far fa-clock text-white"></small>
              </div>
              <small>Mon - Fri : 08:00 - 17:00</small>
            </div>

          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5 bs-navbar">

        {/* BRAND */}
        <Link href="/" className="navbar-brand d-flex align-items-center bs-brand">
          <h6 className="m-0 text-primary">
            <img
              src="/logo.png"
              alt="BISYNC Networks"
              style={{ height: 40, width: "auto" }}
              className="bs-logo-img"
            />
          </h6>
        </Link>

        {/* TOGGLER */}
        <button
          type="button"
          className="navbar-toggler bs-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarCollapse">

          <div className="navbar-nav ms-auto py-4 py-lg-0">

            <Link href="/" className="nav-item nav-link active bs-nav-link">
              <span className="bs-wavy-text">
                {"Home".split("").map((ch, i) => (
                  <span key={i} className="bs-letter" style={{ "--i": i }}>{ch}</span>
                ))}
              </span>
            </Link>

            <div className="nav-item dropdown bs-dropdown">

              <a
                href="#"
                className="nav-link dropdown-toggle bs-nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="bs-wavy-text">
                  {"About us".split("").map((ch, i) => (
                    <span key={i} className="bs-letter" style={{ "--i": i }}>{ch === " " ? "\u00A0" : ch}</span>
                  ))}
                </span>
              </a>

              <div className="dropdown-menu rounded-0 rounded-bottom m-0 bs-dropdown-menu">

                <Link href="/about" className="dropdown-item bs-dropdown-item">
                  About Us
                </Link>

                <Link href="/certifications" className="dropdown-item bs-dropdown-item">
                  Our Certifications
                </Link>

                <Link href="/quote" className="dropdown-item bs-dropdown-item">
                  Request Quote
                </Link>

                <Link href="#clients" className="dropdown-item bs-dropdown-item">
                  Our Clients
                </Link>

              </div>

            </div>

            <div className="nav-item dropdown bs-dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle bs-nav-link"
                data-bs-toggle="dropdown"
              >
                <span className="bs-wavy-text">
                  {"Services".split("").map((ch, i) => (
                    <span key={i} className="bs-letter" style={{ "--i": i }}>{ch}</span>
                  ))}
                </span>
              </a>

              <div className="dropdown-menu fade-up m-0 bs-dropdown-menu">
                <Link href="/services" className="dropdown-item bs-dropdown-item">
                  All Services
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="dropdown-item bs-dropdown-item"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects" className="nav-item nav-link bs-nav-link">
              <span className="bs-wavy-text">
                {"Projects".split("").map((ch, i) => (
                  <span key={i} className="bs-letter" style={{ "--i": i }}>{ch}</span>
                ))}
              </span>
            </Link>

            <Link href="/contact" className="nav-item nav-link bs-nav-link">
              <span className="bs-wavy-text">
                {"Contact".split("").map((ch, i) => (
                  <span key={i} className="bs-letter" style={{ "--i": i }}>{ch}</span>
                ))}
              </span>
            </Link>

          </div>

          {/* SOCIAL ICONS */}
          <div className="h-100 d-lg-inline-flex align-items-center d-none">

            <a className="btn btn-square rounded-circle bg-light text-primary me-2 bs-social" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="btn btn-square rounded-circle bg-light text-primary me-2 bs-social" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="btn btn-square rounded-circle bg-light text-primary me-0 bs-social" href="#">
              <i className="fab fa-whatsapp"></i>
            </a>

          </div>

        </div>
      </nav>

      <style jsx global>{`
        :root {
          --bs-orange: #f7941d;
        }

        /* ---------- TOPBAR ---------- */
        .bs-topbar-item {
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .bs-topbar-item:hover {
          transform: translateY(-2px);
          opacity: 0.85;
        }
        .bs-topbar-icon {
          perspective: 300px;
          transition: background-color 0.3s ease;
        }
        /* noticeable horizontal (Y-axis) spin on hover */
        .bs-topbar-item:hover .bs-topbar-icon {
          animation: bs-spin-y 0.7s linear;
          background-color: var(--bs-orange) !important;
        }
        @keyframes bs-spin-y {
          from { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(180deg) scale(1.15); }
          to { transform: rotateY(360deg) scale(1); }
        }

        /* ---------- NAVBAR SHELL ---------- */
        .bs-navbar {
          transition: box-shadow 0.3s ease;
        }
        .bs-navbar.scrolled,
        .bs-navbar:hover {
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
        }

        /* ---------- LOGO ---------- */
        .bs-brand {
          perspective: 600px;
        }
        .bs-logo-img {
          transform-style: preserve-3d;
          transition: filter 0.35s ease;
        }
        .bs-brand:hover .bs-logo-img {
          animation: bs-logo-spin 1s linear;
          filter: drop-shadow(0 2px 6px rgba(247, 148, 29, 0.45));
        }
        @keyframes bs-logo-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        /* ---------- NAV LINKS: wavy letters on hover ---------- */
        .bs-nav-link {
          position: relative;
          transition: color 0.25s ease;
          padding-bottom: 4px;
        }
        .bs-wavy-text {
          display: inline-flex;
        }
        .bs-letter {
          display: inline-block;
          transition: color 0.2s ease;
        }
        .bs-nav-link:hover .bs-letter,
        .bs-nav-link.active .bs-letter {
          color: var(--bs-orange) !important;
          animation: bs-wave 0.6s ease-in-out;
          animation-delay: calc(var(--i) * 0.05s);
        }
        @keyframes bs-wave {
          0%   { transform: translateY(0); }
          30%  { transform: translateY(-8px); }
          60%  { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }
        /* wavy underline that ripples in on hover */
        .bs-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            var(--bs-orange) 0px,
            var(--bs-orange) 4px,
            transparent 4px,
            transparent 8px
          );
          transition: width 0.35s ease;
        }
        .bs-nav-link:hover::after,
        .bs-nav-link.active::after {
          width: 100%;
        }

        /* ---------- DROPDOWNS: fade + slide on open ---------- */
        .bs-dropdown-menu {
          opacity: 0;
          transform: translateY(10px);
          visibility: hidden;
          display: block !important; /* override bootstrap's display:none so transition can run */
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
        }
        .bs-dropdown:hover .bs-dropdown-menu,
        .bs-dropdown-menu.show {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          pointer-events: auto;
        }

        .bs-dropdown-item {
          transition: background-color 0.2s ease, padding-left 0.2s ease, color 0.2s ease;
        }
        .bs-dropdown-item:hover {
          background-color: rgba(247, 148, 29, 0.08);
          padding-left: 24px;
          color: var(--bs-orange);
        }

        /* ---------- TOGGLER (mobile burger) ---------- */
        .bs-toggler {
          transition: transform 0.3s ease;
          border: none;
        }
        .bs-toggler:hover {
          transform: rotate(90deg);
        }

        /* ---------- SOCIAL ICONS ---------- */
        .bs-social {
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        .bs-social:hover {
          transform: translateY(-4px) scale(1.08);
          background-color: var(--bs-orange) !important;
          color: #fff !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .bs-topbar-item,
          .bs-topbar-icon,
          .bs-brand,
          .bs-logo-img,
          .bs-nav-link,
          .bs-nav-link::after,
          .bs-letter,
          .bs-dropdown-menu,
          .bs-dropdown-item,
          .bs-toggler,
          .bs-social {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}