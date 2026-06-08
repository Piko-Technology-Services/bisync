"use client";

export default function ServicesSection() {
  const services = [
    {
      icon: "/img/icon/icon-6.png",
      title: "IP CCTV Surveillance Systems",
      desc: "Design, supply, and installation of smart CCTV systems with remote monitoring and recording capabilities for full security visibility.",
    },
    {
      icon: "/img/icon/icon-8.png",
      title: "Access Control & Time Attendance",
      desc: "Biometric and card-based systems for secure entry management and accurate employee attendance tracking.",
    },
    {
      icon: "/img/icon/icon-9.png",
      title: "Fire Detection & Alarm Systems",
      desc: "Early warning fire detection systems integrated with alarms to protect lives, property, and business operations.",
    },
    {
      icon: "/img/icon/icon-3.png",
      title: "Structured Cabling & Networking",
      desc: "Professional installation of copper and fiber network infrastructure for fast, reliable, and scalable connectivity.",
    },
    {
      icon: "/img/icon/icon-4.png",
      title: "Electric Fencing & Perimeter Security",
      desc: "High-security perimeter protection systems designed for industrial, commercial, and residential safety.",
    },
    {
      icon: "/img/icon/icon-7.png",
      title: "Telephone & VoIP Systems",
      desc: "Modern communication systems including PBX and VoIP solutions for efficient business communication.",
    },
    {
      icon: "/img/icon/icon-5.png",
      title: "General ICT Solutions",
      desc: "Computer systems, server setups, IT support, and digital transformation services tailored to business needs.",
    },
    {
      icon: "/img/icon/icon-2.png",
      title: "Multimedia & Digital Solutions",
      desc: "Photography, video production, live streaming, and content creation for corporate branding and communication.",
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
          <p className="text-muted mt-3">
            End-to-end ICT, networking, and security solutions designed for modern businesses in Zambia.
          </p>
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
                  <img
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
                <a className="btn btn-link text-white" href="#quote">
                  <i className="fa fa-arrow-right me-2" />
                  Ask Quote
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}