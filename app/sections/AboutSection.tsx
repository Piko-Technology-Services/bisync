"use client";

// import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      icon: "/img/icon/icon-1.png",
      value: 1234,
      label: "Happy Clients",
      delay: "0.1s",
    },
    {
      icon: "/img/icon/icon-5.png",
      value: 1234,
      label: "Projects Done",
      delay: "0.3s",
    },
  ];

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0 align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                src="/img/about.jpg"
                alt="About"
                style={{ objectFit: "cover" }}
                
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 py-5">
            <div className="p-lg-5 pe-lg-0">

              {/* Accent line */}
              <div
                className="bg-primary mb-3"
                style={{ width: "60px", height: "2px" }}
              />

              <h1 className="display-5 mb-4">About Us</h1>

              <p className="mb-4 pb-2 text-muted">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet.
              </p>

              {/* STATS */}
              <div className="row g-4 mb-4 pb-3">
                {stats.map((item, index) => (
                  <div key={index} className="col-sm-6">

                    <div className="d-flex align-items-center">

                      {/* ICON */}
                      <div
                        className="d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 64, height: 64 }}
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          width={32}
                          height={32}
                        />
                      </div>

                      {/* TEXT */}
                      <div className="ms-4">
                        <h2 className="mb-1">
                          {item.value}
                        </h2>
                        <p className="fw-medium text-primary mb-0">
                          {item.label}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <a
                href="#"
                className="btn btn-primary rounded-pill py-3 px-5"
              >
                Explore More
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}