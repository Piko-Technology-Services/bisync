"use client";

import Image from "next/image";

export default function FactsSection() {
  const facts = [
    {
      id: "01",
      title: "Home Security",
      icon: "/img/icon/icon-3.png",
      delay: "0.1s",
    },
    {
      id: "02",
      title: "Access Control",
      icon: "/img/icon/icon-4.png",
      delay: "0.3s",
    },
    {
      id: "03",
      title: "24/7 Support",
      icon: "/img/icon/icon-2.png",
      delay: "0.5s",
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
                      background: "#000",
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                    />
                  </div>

                  {/* Number */}
                  <h1
                    className="display-1 mb-0"
                    style={{ color: "#000" }}
                  >
                    {item.id}
                  </h1>
                </div>

                {/* Title */}
                <h5 className="text-white">{item.title}</h5>

                <hr className="w-25" />

                {/* Description */}
                <span className="text-white-50">
                  Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}