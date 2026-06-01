"use client";

import Image from "next/image";
import { useState } from "react";

export default function QuoteSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Request:", form);
    alert("Quote submitted!");
  };

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container quote px-lg-0">

        <div className="row g-0 mx-lg-0 align-items-center">

          {/* IMAGE SIDE */}
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                src="/img/quote.jpg"
                alt="Quote"
                  
                style={{ objectFit: "cover" }}
                // priority="true"
              />
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="col-lg-6 py-5">
            <div className="p-lg-5 pe-lg-0">

              {/* HEADER */}
              <div
                className="bg-primary mb-3"
                style={{ width: 60, height: 2 }}
              />

              <h1 className="display-5 mb-5">Free Quote</h1>

              <p className="mb-4 pb-2 text-muted">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos.
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
                      placeholder="Your Name"
                      style={{ height: 55 }}
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
                      placeholder="Your Email"
                      style={{ height: 55 }}
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
                      placeholder="Your Mobile"
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
                    >
                      <option value="">Select A Service</option>
                      <option value="cctv">CCTV Installation</option>
                      <option value="access">Access Control</option>
                      <option value="fire">Fire Detection</option>
                      <option value="smart">Smart Home</option>
                    </select>
                  </div>

                  {/* NOTE */}
                  <div className="col-12">
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                      className="form-control border-0"
                      placeholder="Special Note"
                      rows={4}
                    />
                  </div>

                  {/* BUTTON */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3"
                    >
                      Get A Free Quote
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