"use client";

import Image from "next/image";
import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      image: "/img/testimonial-1.jpg",
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client Name",
      profession: "Profession",
    },
    {
      image: "/img/testimonial-2.jpg",
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client Name",
      profession: "Profession",
    },
    {
      image: "/img/testimonial-3.jpg",
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client Name",
      profession: "Profession",
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
    <div className="container-xxl py-5">

      {/* TITLE */}
      <div className="text-center mb-5">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5">Testimonial</h1>
      </div>

      {/* CAROUSEL */}
      <div className="container text-center">

        {/* IMAGE */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            src={current.image}
            alt={current.name}
            width={100}
            height={100}
            className="rounded-circle"
          />
        </div>

        {/* TEXT */}
        <p className="fs-5 mb-4 px-lg-5">
          {current.text}
        </p>

        {/* NAME */}
        <h4>{current.name}</h4>
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