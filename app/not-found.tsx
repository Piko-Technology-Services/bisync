import Link from "next/link";
import Navbar from "../app/components/Navbar";  

export default function NotFound() {
  return (

    <>  

    <Navbar />
    
        <div className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6 text-center">
          <i
            className="bi bi-exclamation-triangle text-warning"
            style={{ fontSize: "10rem" }}
          ></i>
        </div>

        <div className="col-lg-6">

          <h1 className="display-2 fw-bold text-primary">
            404
          </h1>

          <h3>Oops! Page Not Found</h3>

          <p className="text-muted">
            We couldn't find the page you're looking for.
            It may have been removed, renamed, or never existed.
          </p>

          <div className="mt-4">

            <Link
              href="/"
              className="btn btn-primary me-3"
            >
              Go Home
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline-primary"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </div>
    </>


  );
}