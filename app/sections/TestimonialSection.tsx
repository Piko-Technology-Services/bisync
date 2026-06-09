"use client";

import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      image: "/img/testimonial-1.jpg",
      text: "BISYNC Networks delivered a complete CCTV and access control system for our facility. The installation was professional, timely, and the system has significantly improved our security monitoring.",
      name: "Operations Manager",
      profession: "Manufacturing Industry",
    },
    {
      image: "/img/testimonial-2.jpg",
      text: "Their team handled our structured cabling and network infrastructure setup with high professionalism. Our office connectivity is now stable and scalable.",
      name: "IT Administrator",
      profession: "Corporate Office",
    },
    {
      image: "/img/testimonial-3.jpg",
      text: "We engaged BISYNC for electric fencing and perimeter security. The solution has greatly improved our site protection and overall safety.",
      name: "Facilities Manager",
      profession: "Industrial Sector",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[index];

  return (
    <div className="container-xxl py-5" id="testimonial">

      {/* TITLE */}
      <div className="text-center mb-5">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5">What Our Clients Say</h1>
        <p className="text-muted mt-3">
          Trusted by businesses across Zambia for reliable ICT and security solutions.
        </p>
      </div>

      {/* TESTIMONIAL */}
      <div className="container text-center">

        {/* IMAGE */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            src={current.image}
            alt={current.name}
            width={100}
            height={100}
            className="rounded-circle border"
          />
        </div>

        {/* TEXT */}
        <p className="fs-5 mb-4 px-lg-5 text-muted">
          “{current.text}”
        </p>

        {/* NAME */}
        <h4 className="mb-0">{current.name}</h4>
        <span className="text-primary">{current.profession}</span>

        {/* CONTROLS */}
        <div className="mt-4 d-flex justify-content-center gap-3">

          <button
            onClick={prev}
            className="btn btn-outline-primary rounded-circle"
            style={{ width: 40, height: 40 }}
          >
            ‹
          </button>

          <button
            onClick={next}
            className="btn btn-outline-primary rounded-circle"
            style={{ width: 40, height: 40 }}
          >
            ›
          </button>

        </div>

      </div>
    </div>
  );
}