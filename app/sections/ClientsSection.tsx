"use client";

import { useState } from "react";

interface Client {
  name: string;
  logo?: string; // path to logo, e.g. "/img/clients/agricrop.png"
}

export default function ClientsSection() {
  const clientsRow1: Client[] = [
    { name: "Agricrop", logo: "/img/clients/agricrop.png" },
    { name: "Murtaza Enterprises Limited" },
    { name: "Inland Investments Limited", logo: "/img/clients/inland.png" },
    { name: "C. Steinweg Bridge Zambia" },
    { name: "Sumaria Group Zambia", logo: "/img/clients/sumaria.png" },
    { name: "Polytra (Fracht)" },
    { name: "Sakiza Spinning Limited" },
  ];

  const clientsRow2: Client[] = [
    { name: "Mukango Milling" },
    { name: "Joe's Earthworks & Mining Limited" },
    { name: "Strongpak Limited", logo: "/img/clients/strongpak.png" },
    { name: "Mansa Sugar Limited" },
    { name: "Principal Freight Limited" },
    { name: "Tradesmart Limited" },
  ];

  const stats = [
    { value: "13+", label: "Corporate Clients" },
    { value: "15+", label: "Years of Service" },
    { value: "500+", label: "Projects Delivered" },
    { value: "24/7", label: "Support Coverage" },
  ];

  const BuildingIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 21V5a1 1 0 011-1h6a1 1 0 011 1v16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 10h5a1 1 0 011 1v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M7.5 7.5h1.5M7.5 11h1.5M7.5 14.5h1.5M15.5 13.5H17M15.5 17H17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );

  const LogoTile = ({ client }: { client: Client }) => {
    const [errored, setErrored] = useState(false);
    const showPlaceholder = !client.logo || errored;

    return (
      <div className="logo-tile flex-shrink-0 mx-2 mx-md-3" tabIndex={0}>
        <div className="logo-tile-inner d-flex align-items-center justify-content-center">
          {showPlaceholder ? (
            <div className="logo-placeholder d-flex align-items-center justify-content-center">
              <BuildingIcon />
            </div>
          ) : (
            <img
              src={client.logo}
              alt={client.name}
              className="logo-img"
              onError={() => setErrored(true)}
            />
          )}
        </div>
        <span className="logo-tooltip">{client.name}</span>
      </div>
    );
  };

  return (
    <section className="clients-section py-6" id="clients">
      <div className="container-fluid px-3 px-md-5">

        {/* TITLE */}
        <div className="text-center mb-4 mx-auto" style={{ maxWidth: 640 }}>
          <span className="d-inline-flex align-items-center gap-2 badge rounded-pill bg-primary-subtle text-primary fw-semibold px-3 py-2 mb-3">
            <span className="bg-primary rounded-circle" style={{ width: 6, height: 6 }} />
            Our Clients
          </span>

          <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}>
            Trusted by Leading Organizations
          </h2>

          <p className="text-muted mb-0">
            We have successfully delivered ICT, networking, and security solutions
            across multiple industries in Zambia.
          </p>
        </div>

        {/* STATS BAR */}
        <div className="stats-bar mx-auto mb-5 rounded-4">
          <div className="row g-0 text-center">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-md-3 py-3 px-2 stat-cell">
                <div className="fw-bold stat-value">{s.value}</div>
                <div className="text-muted small stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE — full bleed, edge to edge, keeps sliding always */}
      <div className="marquee-wrap">
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />

        <div className="marquee-row mb-3 mb-md-4">
          <div className="marquee-track marquee-track-rtl">
            {[...clientsRow1, ...clientsRow1].map((client, i) => (
              <LogoTile key={`r1-${i}`} client={client} />
            ))}
          </div>
        </div>

        <div className="marquee-row">
          <div className="marquee-track marquee-track-ltr">
            {[...clientsRow2, ...clientsRow2].map((client, i) => (
              <LogoTile key={`r2-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-section {
          background: linear-gradient(180deg, #f7f8fa 0%, #f2f4f7 100%);
          overflow: hidden;
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 4rem;
        }

        /* STATS BAR */
        .stats-bar {
          max-width: 900px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 0.5rem 1.5rem rgba(16, 24, 40, 0.05);
        }
        .stat-cell {
          position: relative;
        }
        .stat-cell:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 20%;
          bottom: 20%;
          width: 1px;
          background: rgba(0, 0, 0, 0.07);
        }
        @media (max-width: 767.98px) {
          .stat-cell:nth-child(odd)::after {
            display: none;
          }
        }
        .stat-value {
          font-size: 1.5rem;
          color: var(--bs-primary);
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* MARQUEE WRAPPER — animation NEVER pauses, keeps moving under hover */
        .marquee-wrap {
          position: relative;
          width: 100%;
        }
        .marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 10%;
          min-width: 40px;
          max-width: 180px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, #f2f4f7 0%, rgba(242, 244, 247, 0) 100%);
        }
        .marquee-fade-right {
          right: 0;
          background: linear-gradient(270deg, #f2f4f7 0%, rgba(242, 244, 247, 0) 100%);
        }

        .marquee-row {
          overflow: hidden;
          width: 100%;
          padding: 0.5rem 0;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
        }
        .marquee-track-rtl {
          animation: scrollLeft 38s linear infinite;
        }
        .marquee-track-ltr {
          animation: scrollRight 38s linear infinite;
        }
        /* NOTE: no pause-on-hover — track keeps sliding continuously */

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        /* LOGO TILES */
        .logo-tile {
          position: relative;
          width: 168px;
          height: 92px;
        }
        .logo-tile-inner {
          width: 100%;
          height: 100%;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 14px;
          box-shadow: 0 0.15rem 0.5rem rgba(16, 24, 40, 0.04);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.3s ease;
        }
        .logo-tile:hover .logo-tile-inner,
        .logo-tile:focus-visible .logo-tile-inner {
          transform: translateY(-6px) scale(1.05);
          border-color: rgba(255, 122, 0, 0.55);
          box-shadow:
            0 0 0 1px rgba(255, 122, 0, 0.2),
            0 1rem 1.75rem rgba(16, 24, 40, 0.1),
            0 0 34px 8px rgba(255, 122, 0, 0.45); /* orange glow */
          outline: none;
        }

        .logo-img {
          max-width: 72%;
          max-height: 60%;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.55);
          transition: filter 0.3s ease;
        }
        .logo-tile:hover .logo-img,
        .logo-tile:focus-visible .logo-img {
          filter: grayscale(0%) opacity(1);
        }

        .logo-placeholder {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(var(--bs-primary-rgb), 0.08);
          color: rgba(var(--bs-primary-rgb), 0.55);
          transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }
        .logo-tile:hover .logo-placeholder,
        .logo-tile:focus-visible .logo-placeholder {
          background: #ff7a00;
          color: #fff;
          box-shadow: 0 0 18px 4px rgba(255, 122, 0, 0.5);
        }

        /* TOOLTIP */
        .logo-tooltip {
          position: absolute;
          left: 50%;
          bottom: calc(100% + 10px);
          transform: translateX(-50%) translateY(4px);
          background: #16181d;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
          z-index: 5;
        }
        .logo-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #16181d;
        }
        .logo-tile:hover .logo-tooltip,
        .logo-tile:focus-visible .logo-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 575.98px) {
          .py-6 {
            padding-top: 3rem;
            padding-bottom: 2.5rem;
          }
          .logo-tile {
            width: 132px;
            height: 76px;
          }
          .stat-value {
            font-size: 1.25rem;
          }
          .marquee-track-rtl,
          .marquee-track-ltr {
            animation-duration: 26s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-rtl,
          .marquee-track-ltr {
            animation: none;
          }
          .marquee-row {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}