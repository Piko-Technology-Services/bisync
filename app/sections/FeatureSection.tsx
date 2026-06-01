"use client";

import Image from "next/image";

export default function FeatureSection() {
  const features = [
    {
      icon: "/img/icon/icon-7.png",
      top: "Trusted",
      bottom: "Security",
    },
    {
      icon: "/img/icon/icon-10.png",
      top: "Quality",
      bottom: "Services",
    },
    {
      icon: "/img/icon/icon-3.png",
      top: "Smart",
      bottom: "Systems",
    },
    {
      icon: "/img/icon/icon-2.png",
      top: "24/7 Hours",
      bottom: "Support",
    },
  ];

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">

        <div className="row g-0 mx-lg-0 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 py-5">
            <div className="p-lg-5 ps-lg-0">

              {/* LINE */}
              <div
                className="bg-primary mb-3"
                style={{ width: 60, height: 2 }}
              />

              <h1 className="display-5 mb-5">Why Choose Us</h1>

              <p className="mb-4 pb-2 text-muted">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet.
              </p>

              {/* FEATURES GRID */}
              <div className="row g-4">

                {features.map((item, index) => (
                  <div key={index} className="col-6">

                    <div className="d-flex align-items-center">

                      {/* ICON */}
                      <div
                        className="d-flex align-items-center justify-content-center bg-white rounded-circle"
                        style={{ width: 64, height: 64 }}
                      >
                        <Image
                          src={item.icon}
                          alt={item.top}
                          width={32}
                          height={32}
                        />
                      </div>

                      {/* TEXT */}
                      <div className="ms-4">
                        <p className="text-primary mb-2">
                          {item.top}
                        </p>
                        <h5 className="mb-0">
                          {item.bottom}
                        </h5>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <Image
                src="/img/feature.jpg"
                alt="Feature"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}