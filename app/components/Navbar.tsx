"use client";

import Link from "next/link";
import { services } from "../data/services";
import { useLoader } from "./LoaderProvider";
import NavNetworkbackground from "./NavNetworkbackground";

export default function Navbar() {

  const { showLoader } = useLoader();

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
        <NavNetworkbackground />

        {/* BRAND */}
        <Link href="/" className="navbar-brand d-flex align-items-center" onClick={showLoader}>
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

  {/* HOME */}
  <Link href="/" className="nav-item nav-link active" onClick={showLoader}>
    Home
  </Link>

  {/* OUR COMPANY */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Our Company
    </a>

    <div className="dropdown-menu rounded-0 rounded-bottom m-0">

      <Link href="/about" className="dropdown-item" onClick={showLoader}>
        Our Story
      </Link>

      <Link href="/company-documents" className="dropdown-item" onClick={showLoader}>
        Company Documents
      </Link>

      <Link href="/terms-conditions" className="dropdown-item" onClick={showLoader}>
        Terms & Conditions
      </Link>

      <Link href="/terms-of-use" className="dropdown-item" onClick={showLoader}>
        Terms Of Use
      </Link>

    </div>
  </div>

  {/* OUR PRODUCTS (MARKETPLACE) */}
  <a
    href="https://bisynconlinestore.odoo.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-item nav-link"
  >
    Products
  </a>

  {/* ROUTING */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Routing
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Accessories
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Enterprise Routers
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        SMB Routers
      </a>

    </div>
  </div>

  {/* SECURITY */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Security
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Network Security
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Perimeter Security
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Service Gateways
      </a>

    </div>
  </div>

  {/* SERVERS */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Servers
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Signal Boosters
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Enterprise
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Mobile
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        SMB
      </a>

    </div>
  </div>

  {/* SURVEILLANCE */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Surveillance
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Cameras
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Indoor Cameras
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Outdoor Cameras
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Accessories
      </a>

    </div>
  </div>

  {/* SOFTWARE & HARDWARE */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Software & Hardware
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Analytics
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        NVR / VMS Servers
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Video Management Software
      </a>

    </div>
  </div>

  {/* SWITCHES */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Switches
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Enterprise Switches
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Industrial Switches
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        SMB Switches
      </a>

    </div>
  </div>

  {/* WIRELESS */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Wireless
    </a>
    <div className="dropdown-menu">

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Indoor WiFi
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Enterprise WiFi
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        SMB WiFi
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Outdoor WiFi
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        Specialised Wireless
      </a>

      <a className="dropdown-item" href="https://bisynconlinestore.odoo.com/" target="_blank">
        60 GHz (V-Band)
      </a>

    </div>
  </div>

  {/* BRANDS (LINKS TO MARKETPLACE) */}
  <div className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      Brands
    </a>

    <div className="dropdown-menu" style={{ maxHeight: "300px", overflowY: "auto" }}>

      {[
        "Armis","Axis","Cambium Networks","Cudy","Cynet","DuxNet",
        "Extreme Networks","Hanwha Vision","HPE Aruba","HPE Instant On",
        "IronLink","MikroTik","Milesight","Milestone","Mitel","NETGEAR",
        "Nextivity","Northwest Towers","Rajant","Rapid Struct","SAFR",
        "Tachyon Networks","Teltonika","Versa"
      ].map((brand) => (
        <a
          key={brand}
          className="dropdown-item"
          href="https://bisynconlinestore.odoo.com/"
          target="_blank"
        >
          {brand}
        </a>
      ))}

    </div>
  </div>

  {/* EXISTING: PROJECTS + CONTACT */}
  <Link href="/projects" className="nav-item nav-link" onClick={showLoader}>
    Projects
  </Link>

  <Link href="/contact" className="nav-item nav-link" onClick={showLoader}>
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