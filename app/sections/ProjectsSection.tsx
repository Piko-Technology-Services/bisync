"use client";

import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Enterprise CCTV Surveillance Deployment",
      category: "Business Security",
      description:
        "Design and installation of IP CCTV systems with remote monitoring for a commercial facility.",
      image: "/img/portfolio-1.jpg",
    },
    {
      title: "Fire Detection & Alarm System Installation",
      category: "Fire Detection",
      description:
        "Integrated fire detection system with automated alert and alarm response infrastructure.",
      image: "/img/portfolio-2.jpg",
    },
    {
      title: "Office Access Control System Setup",
      category: "Access Control",
      description:
        "Biometric and card-based access control system for employee authentication and tracking.",
      image: "/img/portfolio-3.jpg",
    },
    {
      title: "Industrial Perimeter Security (Electric Fence)",
      category: "Alarm Systems",
      description:
        "High-voltage electric fencing system deployed for perimeter protection of industrial site.",
      image: "/img/portfolio-4.jpg",
    },
    {
      title: "Multi-Site CCTV Integration",
      category: "CCTV & Video",
      description:
        "Centralized CCTV monitoring system connecting multiple branches under one dashboard.",
      image: "/img/portfolio-5.jpg",
    },
    {
      title: "Smart Infrastructure Networking Project",
      category: "Networking",
      description:
        "Structured cabling and network setup for scalable and high-performance enterprise connectivity.",
      image: "/img/portfolio-6.jpg",
    },
  ];

  return (
    <div className="container-xxl py-5" id="projects">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="text-center mb-5">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: 60, height: 2 }}
          />
          <h1 className="display-5">Our Projects</h1>
          <p className="text-muted mt-3">
            Delivering secure, scalable, and intelligent ICT & security solutions across Zambia.
          </p>
        </div>

        {/* FILTER UI ONLY */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <ul className="list-inline" id="portfolio-flters">
              <li className="mx-2 active">All</li>
              <li className="mx-2">Security Systems</li>
              <li className="mx-2">Networking</li>
              <li className="mx-2">Access Control</li>
            </ul>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="row g-4">

          {projects.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">

              <div className="portfolio-inner position-relative overflow-hidden border">

                {/* IMAGE */}
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100"
                  />
                </div>

                {/* STATIC INFO */}
                <div className="text-center p-4 bg-white">
                  <p className="text-primary mb-2">
                    {item.category}
                  </p>
                  <h5 className="lh-base mb-0">
                    {item.title}
                  </h5>
                </div>

                {/* HOVER OVERLAY */}
                <div className="portfolio-text position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white opacity-0 hover-overlay">

                  <p className="text-primary mb-2">
                    {item.category}
                  </p>

                  <h5 className="lh-base mb-3 text-center px-3">
                    {item.description}
                  </h5>

                  <div className="d-flex">

                    <a
                      className="btn btn-primary btn-sm rounded-circle mx-1"
                      href={item.image}
                      target="_blank"
                    >
                      <i className="fa fa-eye" />
                    </a>

                    <a
                      className="btn btn-primary btn-sm rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fa fa-link" />
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}