"use client";

import Link from "next/link";
import { services } from "../data/services";
import Navbar from "./Navbar";

export default function ServiceDetails({ service }) {
  return (
    <>

    <Navbar />

      {/* Hero */}
      <div className="container-fluid bg-primary text-white py-5">
        <div className="container text-center">
          <i className={`${service.icon} display-1 mb-3`}></i>
          <h1 className="display-4 fw-bold">{service.title}</h1>
          <p className="lead">{service.shortDescription}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">

          {/* Main Content */}
          <div className="col-lg-8">

            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">

                <h2 className="mb-4">
                  {service.title}
                </h2>

                <p className="text-muted lh-lg">
                  {service.description}
                </p>

                {service.products?.length > 0 && (
                  <>
                    <hr className="my-5" />

                    <h3 className="mb-4">
                      Products & Equipment
                    </h3>

                    <div className="row">
                      {service.products.map((item, index) => (
                        <div
                          key={index}
                          className="col-md-6 mb-3"
                        >
                          <div className="border rounded p-3 h-100">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="mt-5">
                  <a
                    href="/contact"
                    className="btn btn-primary btn-lg"
                  >
                    Request a Quote
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="col-lg-4">

            <div className="card shadow-sm">
              <div className="card-body">

                <h4 className="mb-4">
                  Our Services
                </h4>

                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="d-flex align-items-center text-decoration-none border-bottom py-3"
                  >
                    <i className={`${s.icon} text-primary me-3`}></i>
                    <span>{s.title}</span>
                  </Link>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}