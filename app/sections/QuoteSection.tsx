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

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0" id="quote">
      <div className="container quote px-lg-0">

        <div className="row g-0 mx-lg-0 align-items-center">

          {/* IMAGE SIDE */}
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                src="/img/quote.jpg"
                alt="BISYNC Networks Security Quote"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="col-lg-6 py-5 px-lg-5 pe-lg-5">
            <div className="p-lg-5 pe-lg-0 px-lg-0">

              {/* HEADER */}
              <div
                className="bg-primary mb-3"
                style={{ width: 60, height: 2 }}
              />

              <h1 className="display-5 mb-3">
                Request a Free Consultation
              </h1>

              <p className="mb-4 pb-2 text-muted">
                Tell us about your project — whether it’s CCTV installation, networking,
                access control, or complete security infrastructure. Our team will get back
                to you with a tailored solution and quotation.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  {/* NAME */}
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Full Name"
                      style={{ height: 55 }}
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Email Address"
                      style={{ height: 55 }}
                      required
                    />
                  </div>

                  {/* MOBILE */}
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Phone Number"
                      style={{ height: 55 }}
                    />
                  </div>

                  {/* SERVICE */}
                  <div className="col-12 col-sm-6">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="form-select border-0"
                      style={{ height: 55 }}
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
                  </div>

                  {/* NOTE */}
                  <div className="col-12">
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Describe your project requirements..."
                      rows={4}
                    />
                  </div>

                  {/* BUTTON */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3"
                    >
                      Request a Quote
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}