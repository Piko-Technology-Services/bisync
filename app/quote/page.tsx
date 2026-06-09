import Navbar from "../components/Navbar";

export default function QuotePage() {
  return (

<>

    <Navbar />

<div className="container-fluid bg-light overflow-hidden px-lg-0">

      <div className="container py-5">

        <div className="row g-5 align-items-center">

          {/* Left Content */}
          <div className="col-lg-5">

            <div
              className="bg-primary mb-3"
              style={{ width: 60, height: 2 }}
            />

            <h1 className="display-5 mb-4">
              Request a Free Quote
            </h1>

            <p className="mb-4">
              Looking for reliable ICT, networking, security, surveillance,
              access control, multimedia or electrical solutions?
              Tell us about your project and our team will prepare a
              customized quotation tailored to your requirements.
            </p>

            <div className="d-flex mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>Professional consultation and site assessment</span>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>Customized solution design</span>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>Competitive pricing and quality workmanship</span>
            </div>

            <div className="d-flex">
              <i className="bi bi-check-circle-fill text-primary me-3"></i>
              <span>Fast turnaround on quotations</span>
            </div>

          </div>

          {/* Form */}
          <div className="col-lg-7">

            <div className="bg-white shadow rounded p-5">

              <form>

                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">
                        Your Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        placeholder="Your Mobile"
                      />
                      <label htmlFor="mobile">
                        Your Mobile
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">

                      <select
                        className="form-select"
                        id="service"
                      >
                        <option value="">
                          Select a Service
                        </option>

                        <option>
                          Structured Cabling
                        </option>

                        <option>
                          IP CCTV Systems
                        </option>

                        <option>
                          Access Control & Time Attendance
                        </option>

                        <option>
                          Multimedia Production
                        </option>

                        <option>
                          Telephone Systems
                        </option>

                        <option>
                          Electric Fencing
                        </option>

                        <option>
                          Electrical Equipment Supply
                        </option>

                        <option>
                          General ICT Solutions
                        </option>

                      </select>

                      <label htmlFor="service">
                        Select A Service
                      </label>

                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">

                      <textarea
                        className="form-control"
                        placeholder="Special Note"
                        id="message"
                        style={{ height: "150px" }}
                      />

                      <label htmlFor="message">
                        Special Note
                      </label>

                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                    >
                      Request Quote
                    </button>
                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
</>

    
  );
}