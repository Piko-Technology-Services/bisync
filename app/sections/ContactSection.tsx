"use client";

// import Navbar from "../components/Navbar";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 21s-7-6.5-7-11.5A7 7 0 0119 9.5C19 14.5 12 21 12 21z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
      label: "Address",
      lines: ["Room 313/314, 3rd Floor, Collet House,", "Buteko Avenue, Ndola"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Opening Hours",
      lines: ["Monday – Friday", "09:00 AM – 05:00 PM"],
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      <section className="contact-section">
        <div className="container py-6">
          <div className="row g-5 align-items-stretch">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <span className="d-inline-flex align-items-center gap-2 badge rounded-pill bg-primary-subtle text-primary fw-semibold px-3 py-2 mb-3">
                <span className="bg-primary rounded-circle" style={{ width: 6, height: 6 }} />
                Contact Us
              </span>

              <h2 className="fw-bold mb-4" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
                Get in Touch
              </h2>

              {/* INFO CARDS */}
              <div className="row g-3 mb-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="col-12 col-sm-6">
                    <div className="info-card d-flex align-items-start gap-3 p-3 rounded-4 h-100">
                      <div className="info-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-primary mb-1 small text-uppercase fw-bold" style={{ letterSpacing: "0.04em" }}>
                          {item.label}
                        </p>
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-muted small mb-0">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
                <h5 className="fw-bold mb-1">Let's Create Something Great Together</h5>
                <p className="text-muted small mb-4">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form>
                  <div className="row g-3">

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Full Name"
                        />
                        <label htmlFor="fullName">Full Name</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          style={{ height: 150 }}
                          placeholder="Message"
                        ></textarea>
                        <label htmlFor="message">Type your message</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary d-inline-flex align-items-center gap-2 py-3 px-5 rounded-3 fw-semibold"
                        type="submit"
                      >
                        Send Message
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="col-lg-6">
              <div className="map-wrap rounded-4 overflow-hidden shadow-lg h-100 position-relative">
                <iframe
                  className="w-100 h-100"
                  style={{ border: 0, minHeight: 500 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d856.903239929714!2d28.647039647728054!3d-12.972844577686418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1780985627074!5m2!1sen!2szm"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          background: #f7f8fa;
          overflow: hidden;
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .info-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.06);
          border-color: rgba(var(--bs-primary-rgb), 0.25);
        }
        .info-icon {
          width: 46px;
          height: 46px;
          background: rgba(var(--bs-primary-rgb), 0.1);
          color: var(--bs-primary);
        }
        .map-wrap {
          min-height: 400px;
        }
        @media (max-width: 991.98px) {
          .map-wrap {
            min-height: 350px;
          }
        }
        @media (max-width: 575.98px) {
          .py-6 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>
    </>
  );
}