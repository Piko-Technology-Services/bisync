"use client";

export default function ClientsSection() {
  const clients = [
    "Agricrop",
    "Murtaza Enterprises Limited",
    "Inland Investments Limited",
    "C. Steinweg Bridge Zambia",
    "Sumaria Group Zambia",
    "Polytra (Fracht)",
    "Sakiza Spinning Limited",
    "Mukango Milling",
    "Joe's Earthworks & Mining Limited",
    "Strongpak Limited",
    "Mansa Sugar Limited",
  ];

  return (
    <div className="container-xxl py-5 bg-light" id="clients">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <div
            className="bg-primary mb-3 mx-auto"
            style={{ width: 60, height: 2 }}
          />
          <h1 className="display-5">Our Clients</h1>
          <p className="text-muted mt-3">
            We have successfully delivered ICT, networking, and security solutions
            across multiple industries in Zambia.
          </p>
        </div>

        {/* CLIENT GRID */}
        <div className="row g-4 justify-content-center">

          {clients.map((client, index) => (
            <div key={index} className="col-md-4 col-lg-3">

              <div className="border bg-white text-center p-4 h-100 shadow-sm">

                {/* Optional icon placeholder */}
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center bg-light rounded-circle"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-building text-primary" />
                </div>

                {/* CLIENT NAME */}
                <h6 className="mb-0">{client}</h6>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}