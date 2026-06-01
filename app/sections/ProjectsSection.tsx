"use client";

import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart CCTV Security Systems That Fits Your Business",
      category: "Business Security",
      type: "first",
      image: "/img/portfolio-1.jpg",
    },
    {
      title: "Smart CCTV Security Systems That Fits Your Business",
      category: "Fire Detection",
      type: "second",
      image: "/img/portfolio-2.jpg",
    },
    {
      title: "Smart CCTV Security Systems That Fits Your Business",
      category: "Access Control",
      type: "first",
      image: "/img/portfolio-3.jpg",
    },
    {
      title: "Smart CCTV Security Systems That Fits Your Business",
      category: "Alarm Systems",
      type: "second",
      image: "/img/portfolio-4.jpg",
    },
    {
      title: "Smart CCTV Security Systems That Fits Your Business",
      category: "CCTV & Video",
      type: "first",
      image: "/img/portfolio-5.jpg",
    },
    {
      title: "Smart CCTV Security Systems That Fits Your Business",
      category: "Smart Home",
      type: "second",
      image: "/img/portfolio-6.jpg",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="text-center mb-5">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: 60, height: 2 }}
          />
          <h1 className="display-5">Our Projects</h1>
        </div>

        {/* FILTER (UI ONLY - no JS filtering yet) */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <ul className="list-inline" id="portfolio-flters">
              <li className="mx-2 active">All</li>
              <li className="mx-2">Complete Projects</li>
              <li className="mx-2">Ongoing Projects</li>
            </ul>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="row g-4">

          {projects.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
            >

              <div className="portfolio-inner position-relative overflow-hidden border">

                {/* IMAGE */}
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.category}
                    width={600}
                    height={400}
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
                    {item.title}
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