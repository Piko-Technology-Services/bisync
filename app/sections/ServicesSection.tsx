"use client";

import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: "/img/icon/icon-6.png",
      title: "Commercial CCTV System",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      delay: "0.1s",
    },
    {
      icon: "/img/icon/icon-8.png",
      title: "Finger Print Access",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      delay: "0.3s",
    },
    {
      icon: "/img/icon/icon-9.png",
      title: "Fire Detection And Safety",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      delay: "0.5s",
    },
    {
      icon: "/img/icon/icon-3.png",
      title: "Smart Home Security",
      desc: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem",
      delay: "0.7s",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: 60, height: 2 }}
          />
          <h1 className="display-5">Our Services</h1>
        </div>

        {/* SERVICES GRID */}
        <div className="row g-0 service-row">

          {services.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">

              <div className="service-item border h-100 p-5 text-center">

                {/* ICON */}
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-4 mx-auto"
                  style={{ width: 64, height: 64 }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </div>

                {/* TITLE */}
                <h4 className="mb-3">{item.title}</h4>

                {/* DESCRIPTION */}
                <p className="mb-4 text-muted">{item.desc}</p>

                {/* BUTTON */}
                <a className="btn btn-link text-primary" href="#">
                  <i className="fa fa-arrow-right me-2" />
                  Read More
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}