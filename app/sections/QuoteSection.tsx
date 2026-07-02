"use client";

import { useState } from "react";

export default function QuoteSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For now just log (later you can connect API/email/DB)
    console.log("BISYNC Quote Request:", form);

    alert("Thank you! Your request has been received. Our team will contact you shortly.");
  };

  const trustPoints = [
    "Free, no-obligation consultation",
    "Response within 24 hours",
    "Certified security professionals",
  ];

  return (
    <section className="quote-section py-6" id="quote">
      <div className="container">
        <div className="row g-0 rounded-4 overflow-hidden shadow-lg quote-card">

          {/* IMAGE SIDE */}
          <div className="col-lg-6 position-relative quote-image-col">
            <img
              src="/img/hero 5.jpg"
              alt="BISYNC Networks Security Quote"
              className="quote-image"
            />
            <div className="quote-image-overlay" />

            <div className="position-relative h-100 d-flex flex-column justify-content-end p-4 p-md-5 text-white">
              <div className="bg-white mb-3" style={{ width: 50, height: 3, opacity: 0.9 }} />
              <h3 className="fw-bold mb-3 text-white">Why request a quote with us?</h3>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                {trustPoints.map((point, i) => (
                  <li key={i} className="d-flex align-items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.15)" />
                      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="small">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="col-lg-6 bg-white">
            <div className="p-4 p-md-5">

              <span className="d-inline-flex align-items-center gap-2 badge rounded-pill bg-primary-subtle text-primary fw-semibold px-3 py-2 mb-3">
                <span className="bg-primary rounded-circle" style={{ width: 6, height: 6 }} />
                Get a Quote
              </span>

              <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.25rem)", lineHeight: 1.2 }}>
                Request a Free Consultation
              </h2>

              <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                Tell us about your project — whether it's CCTV installation, networking,
                access control, or complete security infrastructure. Our team will get back
                to you with a tailored solution and quotation.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  {/* NAME */}
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control quote-input"
                        id="qName"
                        placeholder="Full Name"
                        required
                      />
                      <label htmlFor="qName">Full Name</label>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control quote-input"
                        id="qEmail"
                        placeholder="Email Address"
                        required
                      />
                      <label htmlFor="qEmail">Email Address</label>
                    </div>
                  </div>

                  {/* MOBILE */}
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        className="form-control quote-input"
                        id="qMobile"
                        placeholder="Phone Number"
                      />
                      <label htmlFor="qMobile">Phone Number</label>
                    </div>
                  </div>

                  {/* SERVICE */}
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-select quote-input"
                        id="qService"
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="cctv">IP CCTV Surveillance Systems</option>
                        <option value="access">Access Control & Time Attendance</option>
                        <option value="networking">Networking & Structured Cabling</option>
                        <option value="electric">Electric Fencing & Perimeter Security</option>
                        <option value="voip">Telephone / VoIP Systems</option>
                        <option value="multimedia">Multimedia & Digital Solutions</option>
                        <option value="general">General ICT Solutions</option>
                      </select>
                      <label htmlFor="qService">Select Service</label>
                    </div>
                  </div>

                  {/* NOTE */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                        className="form-control quote-input"
                        id="qNote"
                        placeholder="Describe your project requirements..."
                        style={{ height: 120 }}
                      />
                      <label htmlFor="qNote">Project details</label>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 rounded-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                    >
                      Request a Quote
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .quote-section {
          background: #f7f8fa;
          overflow: hidden;
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .quote-card {
          background: #fff;
        }
        .quote-image-col {
          min-height: 380px;
        }
        .quote-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .quote-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 20, 40, 0.15) 0%,
            rgba(10, 20, 40, 0.85) 100%
          );
        }
        .quote-input {
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }
        .quote-input:focus {
          background: #fff;
          border-color: var(--bs-primary);
          box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.12);
        }
        @media (max-width: 991.98px) {
          .quote-image-col {
            min-height: 300px;
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