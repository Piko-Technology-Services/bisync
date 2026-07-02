"use client";

/* ── SVG ICONS ──────────────────────────────────────── */
const icons = {
  cctv: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <rect x="8" y="18" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M28 21 L40 16 L40 32 L28 27" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <circle cx="18" cy="25" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="18" y1="32" x2="18" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="38" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  access: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <rect x="14" y="8" width="20" height="26" rx="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 24 L20 28 L28 28 L28 24" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <line x1="8" y1="38" x2="40" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 10 L38 12 M36 16 L38 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <path d="M24 6 C24 6 30 14 28 20 C32 16 34 10 32 6 C38 12 40 22 36 30 C34 36 29 40 24 40 C19 40 14 36 12 30 C8 22 10 12 16 6 C16 12 18 16 22 18 C20 14 20 8 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <circle cx="24" cy="32" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </svg>
  ),
  cabling: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <rect x="6" y="10" width="36" height="7" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="6" y="22" width="36" height="7" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="14" y1="29" x2="14" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="29" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="34" y1="29" x2="34" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="40" r="2.5" fill="currentColor"/>
      <circle cx="24" cy="40" r="2.5" fill="currentColor"/>
      <circle cx="34" cy="40" r="2.5" fill="currentColor"/>
      <circle cx="38" cy="13.5" r="2" fill="currentColor"/>
      <circle cx="38" cy="25.5" r="2" fill="currentColor"/>
    </svg>
  ),
  fence: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      {/* fence posts */}
      <rect x="8"  y="16" width="5" height="26" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="21.5" y="16" width="5" height="26" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="35" y="16" width="5" height="26" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* pointed tops */}
      <path d="M8 16 L10.5 10 L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M21.5 16 L24 10 L26.5 16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M35 16 L37.5 10 L40 16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      {/* horizontal rails */}
      <line x1="8" y1="26" x2="40" y2="26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      {/* lightning bolt = electric */}
      <path d="M23 4 L19 11 L23 11 L21 18 L27 9 L23 9 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  voip: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <path d="M10 24 C10 15 16 8 24 8 C32 8 38 15 38 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <rect x="6"  y="22" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2"/>
      <rect x="36" y="22" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M38 32 C38 38 32 40 26 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="25" cy="40" r="2" fill="currentColor"/>
      {/* signal arcs */}
      <path d="M28 17 C30 19 30 21 28 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      <path d="M31 14 C34 17 34 22 31 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3"/>
    </svg>
  ),
  ict: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="32" x2="16" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="32" x2="32" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="38" x2="36" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 21 L22 25 L30 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  media: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      {/* camera body */}
      <rect x="6" y="16" width="30" height="22" rx="4" stroke="currentColor" strokeWidth="2"/>
      {/* lens */}
      <circle cx="21" cy="27" r="7" stroke="currentColor" strokeWidth="2"/>
      <circle cx="21" cy="27" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      {/* viewfinder bump */}
      <path d="M20 16 L20 12 L26 12 L26 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* video indicator */}
      <path d="M36 22 L42 19 L42 35 L36 32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
};

const services = [
  {
    key: "cctv",
    title: "IP CCTV Surveillance",
    desc: "Smart CCTV systems with remote monitoring and recording for full premises visibility, day and night.",
  },
  {
    key: "access",
    title: "Access Control & Attendance",
    desc: "Biometric and card-based entry management with accurate employee time and attendance tracking.",
  },
  {
    key: "fire",
    title: "Fire Detection & Alarms",
    desc: "Early-warning fire detection integrated with audible alarms to protect lives, property, and operations.",
  },
  {
    key: "cabling",
    title: "Structured Cabling & Networking",
    desc: "Professional copper and fibre network infrastructure for fast, reliable, and scalable connectivity.",
  },
  {
    key: "fence",
    title: "Electric Fencing & Perimeter",
    desc: "High-security perimeter protection for industrial, commercial, and residential environments.",
  },
  {
    key: "voip",
    title: "Telephone & VoIP Systems",
    desc: "PBX and VoIP communication systems built for efficiency, clarity, and business-grade reliability.",
  },
  {
    key: "ict",
    title: "General ICT Solutions",
    desc: "Servers, workstations, IT support and digital transformation services tailored to your business.",
  },
  {
    key: "media",
    title: "Multimedia & Digital",
    desc: "Photography, video, live streaming and content creation for corporate branding and communication.",
  },
];

/* number label per card */
const nums = ["01","02","03","04","05","06","07","08"];

export default function ServicesSection() {
  return (
    <section className="bss-section" id="services">
      <div className="container">

        {/* HEADER */}
        <div className="bss-header">
          <span className="bss-eyebrow">
            <span className="bss-eyebrow-line" />
            What We Do
          </span>
          <h2 className="bss-title">Our Services</h2>
          <p className="bss-subtitle">
            End-to-end ICT, networking, and security solutions designed for modern businesses in Zambia.
          </p>
        </div>

        {/* GRID */}
        <div className="bss-grid">
          {services.map((svc, i) => (
            <div key={svc.key} className="bss-card m-2">

              {/* background number */}
              {/* <span className="bss-bg-num" aria-hidden="true">{nums[i]}</span> */}

              {/* icon */}
              <div className="bss-icon-wrap">
                {icons[svc.key]}
              </div>

              {/* text */}
              <h5 className="bss-card-title">{svc.title}</h5>
              <p className="bss-card-desc">{svc.desc}</p>

              {/* cta */}
              <a href="#quote" className="bss-cta">
                Get a Quote
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" className="bss-cta-arrow">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* bottom accent bar */}
              <div className="bss-accent-bar" />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`

        /* ── SECTION ── */
        .bss-section {
          padding: 88px 0;
          background: #f8f9fb;
        }

        /* ── HEADER ── */
        .bss-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .bss-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f7941d;
          margin-bottom: 14px;
        }
        .bss-eyebrow-line {
          display: block;
          width: 30px;
          height: 2px;
          background: #f7941d;
          border-radius: 2px;
        }
        .bss-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #111;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .bss-subtitle {
          color: #718096;
          font-size: 0.95rem;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── GRID ── */
        .bss-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1.5px solid #e2e5ea;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── CARD ── */
        .bss-card {
          position: relative;
          padding: 36px 28px 32px;
          background: #fff;
          border-right: 1.5px solid #e2e5ea;
          border-bottom: 1.5px solid #e2e5ea;
          overflow: hidden;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          cursor: default;
        }
        /* remove outer right/bottom borders on edges */
        .bss-card:nth-child(4n) { border-right: none; }
        .bss-card:nth-last-child(-n+4) { border-bottom: none; }

        .bss-card:hover {
          background: #1a1a1a;
          z-index: 2;
        }

        /* faint large number watermark */
        .bss-bg-num {
          position: absolute;
          top: -10px;
          right: 12px;
          font-size: 5.5rem;
          font-weight: 900;
          color: #f0f1f3;
          line-height: 1;
          letter-spacing: -0.05em;
          transition: color 0.3s ease;
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }
        .bss-card:hover .bss-bg-num {
          color: #222;
        }

        /* icon */
        .bss-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: rgba(247,148,29,0.08);
          border: 1.5px solid rgba(247,148,29,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f7941d;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.35s ease;
        }
        .bss-card:hover .bss-icon-wrap {
          background: rgba(247,148,29,0.18);
          border-color: #f7941d;
          transform: rotate(-6deg) scale(1.08);
        }

        /* title */
        .bss-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
          line-height: 1.35;
        }
        .bss-card:hover .bss-card-title {
          color: #f7941d;
        }

        /* desc */
        .bss-card-desc {
          font-size: 0.83rem;
          color: #718096;
          line-height: 1.75;
          margin-bottom: 24px;
          flex: 1;
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .bss-card:hover .bss-card-desc {
          color: rgba(255,255,255,0.55);
        }

        /* cta link */
        .bss-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #f7941d;
          text-decoration: none;
          position: relative;
          z-index: 1;
          letter-spacing: 0.03em;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .bss-cta:hover {
          gap: 10px;
          color: #fff;
        }
        .bss-cta-arrow {
          transition: transform 0.2s ease;
        }
        .bss-cta:hover .bss-cta-arrow {
          transform: translateX(3px);
        }

        /* bottom accent bar that grows on hover */
        .bss-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #f7941d, #e07b00);
          transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 3;
        }
        .bss-card:hover .bss-accent-bar {
          width: 100%;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1199px) {
          .bss-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 991px) {
          .bss-grid { grid-template-columns: repeat(2, 1fr); border-radius: 12px; }
          .bss-card:nth-child(4n) { border-right: 1.5px solid #e2e5ea; }
          .bss-card:nth-child(2n) { border-right: none; }
          .bss-card:nth-last-child(-n+4) { border-bottom: 1.5px solid #e2e5ea; }
          .bss-card:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 575px) {
          .bss-grid { grid-template-columns: 1fr; border-radius: 10px; }
          .bss-card { border-right: none !important; }
          .bss-card:last-child { border-bottom: none; }
          .bss-card:nth-last-child(-n+2) { border-bottom: 1.5px solid #e2e5ea; }
          .bss-card:nth-last-child(1) { border-bottom: none; }
          .bss-section { padding: 60px 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bss-card,
          .bss-icon-wrap,
          .bss-card-title,
          .bss-card-desc,
          .bss-cta,
          .bss-accent-bar,
          .bss-bg-num { transition: none !important; }
        }
      `}</style>
    </section>
  );
}