import Navbar from "../components/Navbar";

export default function CertificationsPage() {
  return (

    <>
    
    <Navbar />
    
        <div className="container py-5">

      <div className="text-center mb-5">
        <div
          className="bg-primary mx-auto mb-3"
          style={{ width: 60, height: 2 }}
        />
        <h1>Our Certifications</h1>
        <p className="text-muted">
          Professional certifications, registrations and compliance documents.
        </p>
      </div>

      <div className="row g-4">

        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="col-md-4">

            <div className="card shadow-sm border-0">

              <div
                className="bg-light d-flex align-items-center justify-content-center"
                style={{ height: "350px" }}
              >
                <div className="text-center">
                  <i className="bi bi-file-earmark-pdf display-1 text-primary"></i>
                  <p className="mt-3">
                    Certificate Placeholder
                  </p>
                </div>
              </div>

              <div className="card-body text-center">
                <h5>Certificate {item}</h5>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
    </>


  );
}