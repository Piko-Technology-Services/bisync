"use client";
import NavNetworkbackground from "../components/NavNetworkbackground";


export default function FactsSection() {
  const facts = [
    {
      id: "01",
      title: "Networking & Infrastructure",
      delay: "0.1s",
      description:
        "We design and install structured cabling and fiber network systems for offices, factories, warehouses, and institutions.",
      svg: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
          {/* Server rack / network nodes */}
          <rect x="6" y="10" width="36" height="8" rx="2" stroke="#f7941d" strokeWidth="2" fill="none"/>
          <rect x="6" y="22" width="36" height="8" rx="2" stroke="#f7941d" strokeWidth="2" fill="none"/>
          <circle cx="38" cy="14" r="2" fill="#f7941d"/>
          <circle cx="38" cy="26" r="2" fill="#f7941d"/>
          <circle cx="33" cy="14" r="2" fill="#f7941d" opacity="0.5"/>
          <circle cx="33" cy="26" r="2" fill="#f7941d" opacity="0.5"/>
          {/* Connection lines downward */}
          <line x1="16" y1="30" x2="16" y2="38" stroke="#f7941d" strokeWidth="2" strokeLinecap="round"/>
          <line x1="24" y1="30" x2="24" y2="38" stroke="#f7941d" strokeWidth="2" strokeLinecap="round"/>
          <line x1="32" y1="30" x2="32" y2="38" stroke="#f7941d" strokeWidth="2" strokeLinecap="round"/>
          {/* Bottom nodes */}
          <circle cx="16" cy="40" r="2.5" fill="#f7941d"/>
          <circle cx="24" cy="40" r="2.5" fill="#f7941d"/>
          <circle cx="32" cy="40" r="2.5" fill="#f7941d"/>
          {/* horizontal line connecting bottom nodes */}
          <line x1="16" y1="40" x2="32" y2="40" stroke="#f7941d" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      ),
    },
    {
      id: "02",
      title: "Security Systems",
      delay: "0.3s",
      description:
        "Modern IP CCTV, access control, electric fencing, and surveillance solutions for complete premises protection.",
      svg: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
          {/* Shield */}
          <path
            d="M24 4 L40 10 L40 24 C40 33 32 40 24 44 C16 40 8 33 8 24 L8 10 Z"
            stroke="#f7941d" strokeWidth="2" fill="none" strokeLinejoin="round"
          />
          {/* Camera body */}
          <rect x="17" y="19" width="10" height="8" rx="2" stroke="#f7941d" strokeWidth="1.8" fill="none"/>
          {/* Camera lens */}
          <circle cx="22" cy="23" r="2.5" stroke="#f7941d" strokeWidth="1.5" fill="none"/>
          {/* Camera tail */}
          <path d="M27 21 L32 19 L32 27 L27 25" stroke="#f7941d" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      id: "03",
      title: "24/7 Technical Support",
      delay: "0.5s",
      description:
        "Reliable maintenance and support services ensuring your systems remain secure, stable, and always operational.",
      svg: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
          {/* Headset arc */}
          <path
            d="M10 24 C10 15 16 8 24 8 C32 8 38 15 38 24"
            stroke="#f7941d" strokeWidth="2" fill="none" strokeLinecap="round"
          />
          {/* Left earpiece */}
          <rect x="6" y="22" width="6" height="10" rx="3" stroke="#f7941d" strokeWidth="2" fill="none"/>
          {/* Right earpiece */}
          <rect x="36" y="22" width="6" height="10" rx="3" stroke="#f7941d" strokeWidth="2" fill="none"/>
          {/* Mic arm */}
          <path d="M38 32 C38 38 32 40 26 40" stroke="#f7941d" strokeWidth="2" strokeLinecap="round" fill="none"/>
          {/* Mic dot */}
          <circle cx="25" cy="40" r="2" fill="#f7941d"/>
          {/* Clock hands inside to hint 24/7 */}
          <circle cx="24" cy="24" r="4" stroke="#f7941d" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <line x1="24" y1="24" x2="24" y2="21" stroke="#f7941d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <line x1="24" y1="24" x2="26.5" y2="25.5" stroke="#f7941d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bsf-section" id="facts">
      
      <div className="container">
                  <NavNetworkbackground />

        <div className="row g-0 bsf-row">
          
          {facts.map((item, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 wow fadeIn"
              data-wow-delay={item.delay}
            >
              <div className={`bsf-card ${index === 1 ? "bsf-card-accent" : ""}`}>

                {/* Top row: icon + number */}
                <div className="bsf-top">
                  <div className="bsf-icon-ring">
                    {item.svg}
                  </div>
                  <span className="bsf-number">{item.id}</span>
                </div>

                {/* Animated orange line */}
                <div className="bsf-line">
                  <span className="bsf-line-fill" />
                </div>

                {/* Text */}
                <h5 className="bsf-title">{item.title}</h5>
                <p className="bsf-desc">{item.description}</p>

                {/* Bottom corner accent */}
                <div className="bsf-corner" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bsf-section {
          padding: 72px 0;
          background: #ffffff;
        }

        /* flush cards, no gap, separated by a hairline */
        .bsf-row {
          border: 1px solid #1f1f1f;
        }

        .bsf-card {
          position: relative;
          overflow: hidden;
          height: 100%;
          padding: 40px 36px 44px;
          background: #111;
          border-right: 1px solid #1f1f1f;
          transition: background 0.35s ease;
        }
        /* last card: no right border */
        .col-lg-4:last-child .bsf-card {
          border-right: none;
        }
        /* middle card has a very subtle orange tint to distinguish it */
        .bsf-card-accent {
          background: #131210;
        }
        .bsf-card:hover {
          background: #161410;
        }

        /* ── top row ── */
        .bsf-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        /* icon ring */
        .bsf-icon-ring {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 1.5px solid rgba(247, 148, 29, 0.25);
          background: rgba(247, 148, 29, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.35s ease;
          flex-shrink: 0;
        }
        .bsf-card:hover .bsf-icon-ring {
          border-color: rgba(247, 148, 29, 0.6);
          background: rgba(247, 148, 29, 0.12);
          transform: rotate(-6deg) scale(1.06);
        }

        /* faint large number */
        .bsf-number {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1;
          color: #1c1c1c;
          letter-spacing: -0.04em;
          transition: color 0.3s ease;
          user-select: none;
        }
        .bsf-card:hover .bsf-number {
          color: #252218;
        }

        /* ── animated line ── */
        .bsf-line {
          width: 100%;
          height: 2px;
          background: #1f1f1f;
          border-radius: 2px;
          margin-bottom: 22px;
          overflow: hidden;
        }
        .bsf-line-fill {
          display: block;
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #f7941d, #e07b00);
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bsf-card:hover .bsf-line-fill {
          width: 40%;
        }

        /* ── text ── */
        .bsf-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 0.01em;
          transition: color 0.25s ease;
        }
        .bsf-card:hover .bsf-title {
          color: #f7941d;
        }
        .bsf-desc {
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.875rem;
          line-height: 1.75;
          margin: 0;
          transition: color 0.25s ease;
        }
        .bsf-card:hover .bsf-desc {
          color: rgba(255, 255, 255, 0.6);
        }

        /* ── bottom-right corner orange triangle accent ── */
        .bsf-corner {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 42px 42px;
          border-color: transparent transparent #1a1500 transparent;
          transition: border-bottom-color 0.3s ease, border-left-width 0.35s ease,
            border-bottom-width 0.35s ease;
        }
        .bsf-card:hover .bsf-corner {
          border-width: 0 0 56px 56px;
          border-color: transparent transparent rgba(247, 148, 29, 0.18) transparent;
        }

        @media (max-width: 767px) {
          .bsf-card {
            border-right: none;
            border-bottom: 1px solid #1f1f1f;
          }
          .col-md-6:last-child .bsf-card,
          .col-lg-4:last-child .bsf-card {
            border-bottom: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bsf-icon-ring,
          .bsf-line-fill,
          .bsf-title,
          .bsf-desc,
          .bsf-number,
          .bsf-corner {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}