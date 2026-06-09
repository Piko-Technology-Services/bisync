import Navbar from "../components/Navbar";  

export default function AboutPage() {
  return (
    <>

    <Navbar  />

      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">

            <div
              className="col-lg-6 ps-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/images/network.jpg"
                  alt="About Us"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-6 py-5">
              <div className="p-lg-5 pe-lg-0">

                <div
                  className="bg-primary mb-3"
                  style={{ width: 60, height: 2 }}
                />

                <h1 className="display-5 mb-4">
                  Our Story
                </h1>

                <p className="mb-4">
                  We build trusted, lifelong customer relationships by
                  creating innovative and smart security solutions.
                </p>

                <p className="mb-4">
                  We believe that in order to make a difference, we need to
                  encourage inventiveness, imagination, improvisation and
                  teamwork. There are no limits to what we can accomplish as a
                  team, and we continually explore new products, markets and
                  territories.
                </p>

                <p className="mb-4">
                  Our strength lies in the pride, trust and commitment of our
                  customers. Through innovative technologies and exceptional
                  service delivery, we continue to improve lives and help
                  organizations achieve their security and operational goals.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container py-5">
        <div className="row g-4">

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-5">
                <i className="bi bi-eye-fill text-primary display-5"></i>
                <h3 className="mt-3">Our Vision</h3>

                <p>
                  Technology is a vital tool in people’s lives. Our vision is
                  to improve livelihoods and quality of life while defining
                  excellence, building unmatched customer loyalty, and
                  providing complete solutions to our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-5">
                <i className="bi bi-bullseye text-primary display-5"></i>
                <h3 className="mt-3">Our Mission</h3>

                <p>
                  We are committed to conducting our business ethically,
                  responsibly and transparently while delivering products and
                  services that create positive economic, social and
                  environmental outcomes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Core Values */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2>Our Core Values</h2>
        </div>

        <div className="row g-4">

          {[
            {
              title: "Integrity & Trust",
              icon: "bi-shield-check",
            },
            {
              title: "Quality",
              icon: "bi-award",
            },
            {
              title: "Teamwork",
              icon: "bi-people",
            },
            {
              title: "Growth & Profitability",
              icon: "bi-graph-up-arrow",
            },
          ].map((value, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center p-4">
                  <i className={`${value.icon} text-primary display-6`}></i>
                  <h5 className="mt-3">{value.title}</h5>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </>
  );
}