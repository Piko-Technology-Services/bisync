"use client";

export default function FeatureSection() {
  const features = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      top: "Trusted",
      bottom: "Security",
      desc: "Bank-grade encryption keeping every transaction safe.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 12.5L6 21l6-3 6 3-2.5-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      top: "Quality",
      bottom: "Services",
      desc: "Consistently rated 5-star by clients we work with.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      top: "Smart",
      bottom: "Systems",
      desc: "Automated workflows that adapt to your needs.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 13a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="2.5" y="13" width="4" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
          <rect x="17.5" y="13" width="4" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6.5 19v.5A2.5 2.5 0 009 22h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      top: "24/7 Hours",
      bottom: "Support",
      desc: "Real people ready to help, any time of day.",
    },
  ];

  return (
    <section className="feature-section py-6" id="features">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <span className="d-inline-flex align-items-center gap-2 badge rounded-pill bg-primary-subtle text-primary fw-semibold px-3 py-2 mb-3">
              <span className="bg-primary rounded-circle" style={{ width: 6, height: 6 }} />
              Why Choose Us
            </span>

            <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
              Built on trust,<br className="d-none d-sm-block" /> driven by results
            </h2>

            <p className="text-muted mb-4 pb-1" style={{ maxWidth: "34rem", fontSize: "1.05rem" }}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo erat amet.
            </p>

            {/* FEATURES GRID */}
            <div className="row g-3 g-md-4">
              {features.map((item, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <div className="feature-card d-flex align-items-start gap-3 p-3 rounded-4 h-100">
                    <div className="feature-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-primary mb-1 small text-uppercase fw-bold" style={{ letterSpacing: "0.04em" }}>
                        {item.top}
                      </p>
                      <h6 className="mb-1 fw-bold">{item.bottom}</h6>
                      <p className="text-muted small mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="feature-image-wrap position-relative mx-auto" >
              <div className="rounded-4  shadow-lg">
                <img
                  src="/img/feature.jpg"
                  alt="Feature"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* decorative accent */}
              <div
                className="d-none d-md-block position-absolute rounded-4 bg-primary opacity-10"
                style={{ width: "70%", height: "70%", top: -24, left: -24, zIndex: -1 }}
              />

              {/* floating stat card */}
              <div className="stat-card position-absolute bottom-0 start-0 translate-middle-y ms-3 ms-md-4 bg-white rounded-4 shadow-lg p-3 p-md-4 d-flex align-items-center gap-3">
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white flex-shrink-0" style={{ width: 48, height: 48 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 13a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M12 4v3M4.5 8.5l2 1.5M19.5 8.5l-2 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold">15+ Years</h5>
                  <p className="text-muted small mb-0">of proven experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .feature-section {
          background: #f7f8fa;
          overflow: hidden;
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .feature-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0.75rem 1.75rem rgba(0, 0, 0, 0.08);
          border-color: rgba(var(--bs-primary-rgb), 0.25);
        }
        .feature-icon {
          width: 52px;
          height: 52px;
          background: rgba(var(--bs-primary-rgb), 0.1);
          color: var(--bs-primary);
          transition: background 0.25s ease, color 0.25s ease;
        }
        .feature-card:hover .feature-icon {
          background: var(--bs-primary);
          color: #fff;
        }
        .stat-card {
          max-width: 260px;
        }
        @media (max-width: 767.98px) {
          .stat-card {
            position: static !important;
            transform: none !important;
            margin: 1rem auto 0 !important;
            max-width: 100%;
          }
        }
        @media (max-width: 575.98px) {
          .py-6 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
}