import Link from "next/link";
import { services } from "../data/services";
import Navbar from "../components/Navbar";


export default function ServicesPage() {
  return (
    
    <>

    <Navbar />

      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5">
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead mt-3">
            Delivering innovative ICT, networking, security, surveillance,
            multimedia, and electrical solutions tailored to modern businesses.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-5">

        <div className="text-center mb-5">
          <div
            className="bg-primary mx-auto mb-3"
            style={{ width: 60, height: 2 }}
          />
          <h2 className="display-6">
            What We Do
          </h2>

          <p className="text-muted">
            Explore our comprehensive range of services and solutions.
          </p>
        </div>

        <div className="row g-4">

          {services.map((service) => (
            <div
              key={service.slug}
              className="col-md-6 col-lg-4"
            >
              <div className="card border-0 shadow-sm h-100">

                <div className="card-body p-4">

                  <div
                    className="d-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                    style={{
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    <i
                      className={`${service.icon} text-primary`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>

                  <h4 className="mb-3">
                    {service.title}
                  </h4>

                  <p className="text-muted">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="btn btn-outline-primary mt-3"
                  >
                    Learn More
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* CTA Section */}
      <div className="container-fluid bg-light py-5">

        <div className="container text-center">

          <h2 className="mb-3">
            Need a Custom Solution?
          </h2>

          <p className="text-muted mb-4">
            Whether you're planning a new installation, upgrading existing
            infrastructure, or seeking expert advice, our team is ready to help.
          </p>

          <Link
            href="/quote"
            className="btn btn-primary btn-lg"
          >
            <i className="bi bi-file-earmark-text me-2"></i>
            Request a Free Quote
          </Link>

        </div>

      </div>
    </>
  );
}