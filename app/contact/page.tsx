import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (

    <>  
    <Navbar />

<div className="container-fluid bg-light overflow-hidden px-lg-0">

      <div className="container py-5">

        <div className="row g-0 mx-lg-0">

          <div className="col-lg-6 py-5">

            <div className="p-lg-5">

              <div className="section-title text-start">
                <h1 className="display-5 mb-4">
                  Get in Touch
                </h1>
              </div>

              <p className="mb-4">
                <strong>Address:</strong><br />
                Room 313/314, 3rd Floor, Collet House,
                Buteko Avenue, Ndola
              </p>

              <p className="mb-4">
                <strong>Opening Hours:</strong><br />
                Monday - Friday<br />
                09:00 AM - 05:00 PM
              </p>

              <h4 className="mb-4">
                Let's Create Something Great Together!
              </h4>

              <form>
                <div className="row g-3">

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                      <label>Full Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <label>Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        style={{ height: 150 }}
                        placeholder="Message"
                      ></textarea>

                      <label>
                        Type your message
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>

                </div>
              </form>

            </div>

          </div>

          <div
            className="col-lg-6"
            style={{ minHeight: "500px" }}
          >
            <iframe
              className="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d856.903239929714!2d28.647039647728054!3d-12.972844577686418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szm!4v1780985627074!5m2!1sen!2szm"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>

      </div>

    </div></>
  );
}