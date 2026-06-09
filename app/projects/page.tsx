import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  const projects = [
    "Corporate CCTV Installation",
    "Fiber Optic Network Deployment",
    "Biometric Access Control System",
    "Electric Fence Security Project",
    "Enterprise Telephone System",
    "Multimedia Production Studio",
  ];

  return (

    <>

    <Navbar />

     <div className="container py-5">

      <div className="text-center mb-5">
        <h1>Our Projects</h1>
        <p className="text-muted">
          Some of our completed and ongoing projects.
        </p>
      </div>

      <div className="row g-4">

        {projects.map((project, index) => (
          <div key={index} className="col-md-4">

            <div className="card shadow-sm border-0">

              <div
                className="bg-light d-flex align-items-center justify-content-center"
                style={{ height: "250px" }}
              >
                <i className="bi bi-image display-1 text-secondary"></i>
              </div>

              <div className="card-body">
                <h5>{project}</h5>

                <p className="text-muted">
                  Project description and client information.
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
    </>

   
  );
}