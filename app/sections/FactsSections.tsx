"use client";

import Image from "next/image";

export default function FactsSection() {
  const facts = [
    {
      id: "01",
      title: "Networking & Infrastructure",
      icon: "/img/icon/icon-3.png",
      delay: "0.1s",
      description:
        "We design and install structured cabling and fiber network systems for offices, factories, warehouses, and institutions.",
    },
    {
      id: "02",
      title: "Security Systems",
      icon: "/img/icon/icon-4.png",
      delay: "0.3s",
      description:
        "Modern IP CCTV, access control, electric fencing, and surveillance solutions for complete premises protection.",
    },
    {
      id: "03",
      title: "24/7 Technical Support",
      icon: "/img/icon/icon-2.png",
      delay: "0.5s",
      description:
        "Reliable maintenance and support services ensuring your systems remain secure, stable, and always operational.",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {facts.map((item, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 wow fadeIn"
              data-wow-delay={item.delay}
            >
              <div className="h-100 bg-dark p-4 p-xl-5 text-white">

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between mb-4">

                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: 64,
                      height: 64,
                      background: "#111",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                    />
                  </div>

                  {/* Number */}
                  <h1 className="display-1 mb-0" style={{ color: "#111" }}>
                    {item.id}
                  </h1>
                </div>

                {/* Title */}
                <h5 className="text-white">{item.title}</h5>

                <hr className="w-25" />

                {/* Description */}
                <span className="text-white-50">
                  {item.description}
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}