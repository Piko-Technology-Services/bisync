
export default function Navbar() {
  return (

<>
    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End --> */}


    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-dark px-5">
        <div className="row gx-4 d-none d-lg-flex">
            <div className="col-lg-6 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="fa fa-map-marker-alt text-white"></small>
                    </div>
                    <small>123 Street, New York, USA</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="fa fa-envelope-open text-white"></small>
                    </div>
                    <small>info@example.com</small>
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="fa fa-phone-alt text-white"></small>
                    </div>
                    <small>+012 345 6789</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="far fa-clock text-white"></small>
                    </div>
                    <small>Mon - Fri : 9AM - 9PM</small>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
            <h2 className="m-0 text-primary">Securex</h2>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-4 py-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="project.html" className="nav-item nav-link">Project</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="feature.html" className="dropdown-item">Feature</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <div className="h-100 d-lg-inline-flex align-items-center d-none">
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}
</>
  );
}