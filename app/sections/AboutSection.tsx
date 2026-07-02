"use client";

import { useEffect, useRef, useState } from "react";
import NavNetworkbackground from "../components/NavNetworkbackground";

/* ── animated counter hook ─────────────────────────── */
function useCounter(target, duration = 1800, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

/* ── SVG icons ──────────────────────────────────────── */
const HappyClientsIcon = () => (
  <svg viewBox="0 0 48 48" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* person 1 */}
    <circle cx="16" cy="14" r="5" stroke="#f7941d" strokeWidth="2"/>
    <path d="M6 34 C6 27 10 24 16 24 C18 24 20 24.6 21.5 25.6" stroke="#f7941d" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* person 2 (main) */}
    <circle cx="30" cy="13" r="6" stroke="#f7941d" strokeWidth="2"/>
    <path d="M18 38 C18 30 22 27 30 27 C38 27 42 30 42 38" stroke="#f7941d" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* smile on person 2 */}
    <path d="M27 16 Q30 19 33 16" stroke="#f7941d" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 48 48" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* clipboard */}
    <rect x="10" y="10" width="28" height="34" rx="3" stroke="#f7941d" strokeWidth="2"/>
    <rect x="18" y="6" width="12" height="8" rx="2" stroke="#f7941d" strokeWidth="2"/>
    {/* check lines */}
    <line x1="16" y1="22" x2="32" y2="22" stroke="#f7941d" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="28" x2="32" y2="28" stroke="#f7941d" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="34" x2="26" y2="34" stroke="#f7941d" strokeWidth="2" strokeLinecap="round"/>
    {/* tick */}
    <path d="M28 32 L30 35 L34 30" stroke="#f7941d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── stat card ──────────────────────────────────────── */
function StatCard({ icon: Icon, target, label, trigger }) {
  const count = useCounter(target, 1800, trigger);
  return (
    <div className="bsa-stat">
      <div className="bsa-stat-icon">
        <Icon />
      </div>
      <div className="bsa-stat-text">
        <span className="bsa-stat-value">{count}<span className="bsa-stat-plus">+</span></span>
        <span className="bsa-stat-label">{label}</span>
      </div>
    </div>
  );
}

/* ── section ────────────────────────────────────────── */
export default function AboutSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: HappyClientsIcon,  target: 120, label: "Happy Clients"      },
    { icon: ProjectsIcon,      target: 250, label: "Projects Delivered"  },
  ];

  return (
    <section className="bsa-section" id="about" ref={sectionRef}>
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-stretch">

          {/* ── LEFT: IMAGE ──────────────────────────────── */}
          <div className="col-lg-6 bsa-image-col">
            <div className="bsa-image-wrap">
              <img
                src="/images/network.jpg"
                alt="BISYNC Networks team at work"
                className="bsa-img"
              />
              {/* floating badge */}
              <div className="bsa-badge">
                <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#f7941d" strokeWidth="2"/>
                  <path d="M13 20 L18 25 L27 15" stroke="#f7941d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="bsa-badge-num">10+</span>
                  <span className="bsa-badge-text">Years in Zambia</span>
                </div>
              </div>
              {/* dark overlay gradient */}
              <div className="bsa-image-overlay" />
            </div>
          </div>

          {/* ── RIGHT: CONTENT ───────────────────────────── */}
          <div className="col-lg-6 bsa-content-col position-relative">
            <NavNetworkbackground />

            <div className="bsa-content">

              {/* eyebrow */}
              <div className="bsa-eyebrow">
                <span className="bsa-eyebrow-line" />
                <span>Who We Are</span>
              </div>

              <h2 className="bsa-heading">
                Zambia's Trusted<br />
                <span className="bsa-heading-accent">ICT & Security</span> Partner
              </h2>

              <p className="bsa-body">
                <strong>BISYNC Networks & Security (Z) Limited</strong> is a leading ICT,
                networking, and security solutions provider based in Zambia. We specialise
                in designing, supplying, installing, and maintaining reliable technology
                infrastructure for businesses, institutions, and industrial environments.
              </p>
              <p className="bsa-body">
                From structured cabling and IP CCTV systems to access control, electric fencing,
                and multimedia solutions — we deliver secure, scalable, and future-ready systems
                tailored to your operational needs.
              </p>

              {/* pillars */}
              <div className="bsa-pillars">
                {[
                  { icon: "fa-shield-alt",   text: "Secure & Reliable" },
                  { icon: "fa-bolt",         text: "Fast Deployment"   },
                  { icon: "fa-headset",      text: "24/7 Support"      },
                ].map((p, i) => (
                  <div key={i} className="bsa-pillar">
                    <i className={`fa ${p.icon} bsa-pillar-icon`}></i>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>

              {/* stats */}
              <div className="bsa-stats-row">
                {stats.map((s, i) => (
                  <StatCard key={i} {...s} trigger={inView} />
                ))}
              </div>

              {/* CTA */}
              <a href="#services" className="bsa-btn">
                Explore Our Services
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="bsa-btn-arrow">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`

        /* ── SECTION ── */
        .bsa-section {
          overflow: hidden;
          background: #f8f9fb;
        }

        /* ── IMAGE SIDE ── */
        .bsa-image-col {
          min-height: 500px;
        }
        .bsa-image-wrap {
          position: relative;
          height: 100%;
          min-height: 500px;
        }
        .bsa-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bsa-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(15,15,15,0.35) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* floating experience badge */
        .bsa-badge {
          position: absolute;
          bottom: 32px;
          left: 28px;
          background: rgba(10,10,10,0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(247,148,29,0.3);
          border-radius: 14px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #fff;
        }
        .bsa-badge-num {
          display: block;
          font-size: 1.4rem;
          font-weight: 800;
          color: #f7941d;
          line-height: 1;
        }
        .bsa-badge-text {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.65);
          display: block;
          margin-top: 2px;
        }

        /* ── CONTENT SIDE ── */
        .bsa-content-col {
          background: #fff;
          overflow: hidden;
        }
        .bsa-content {
          position: relative;
          z-index: 2;
          padding: 64px 48px 64px 52px;
        }

        /* eyebrow */
        .bsa-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f7941d;
          margin-bottom: 18px;
        }
        .bsa-eyebrow-line {
          display: block;
          width: 36px;
          height: 2px;
          background: #f7941d;
          border-radius: 2px;
        }

        /* heading */
        .bsa-heading {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #111;
          line-height: 1.25;
          margin-bottom: 22px;
          letter-spacing: -0.02em;
        }
        .bsa-heading-accent {
          color: #f7941d;
        }

        /* body copy */
        .bsa-body {
          font-size: 0.93rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 14px;
        }

        /* pillars row */
        .bsa-pillars {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 22px 0 28px;
        }
        .bsa-pillar {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #f8f9fb;
          border: 1.5px solid #e8eaed;
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #333;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
        }
        .bsa-pillar:hover {
          border-color: #f7941d;
          color: #f7941d;
          background: rgba(247,148,29,0.05);
        }
        .bsa-pillar-icon {
          color: #f7941d;
          font-size: 0.85rem;
        }

        /* stats */
        .bsa-stats-row {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          margin-bottom: 36px;
          padding: 24px 0;
          border-top: 1.5px solid #eee;
          border-bottom: 1.5px solid #eee;
        }
        .bsa-stat {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          min-width: 140px;
        }
        .bsa-stat-icon {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
          border-radius: 14px;
          background: rgba(247,148,29,0.08);
          border: 1.5px solid rgba(247,148,29,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .bsa-stat:hover .bsa-stat-icon {
          background: rgba(247,148,29,0.15);
          border-color: #f7941d;
          transform: scale(1.06);
        }
        .bsa-stat-text {
          display: flex;
          flex-direction: column;
        }
        .bsa-stat-value {
          font-size: 2rem;
          font-weight: 900;
          color: #111;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .bsa-stat-plus {
          color: #f7941d;
          font-size: 1.3rem;
          font-weight: 800;
        }
        .bsa-stat-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #f7941d;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* CTA button */
        .bsa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 14px 30px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .bsa-btn::before {
          content: "";
          position: absolute;
          left: -5%;
          bottom: 0;
          width: 110%;
          height: 0%;
          background: #f7941d;
          border-radius: 45% 45% 0 0 / 12% 12% 0 0;
          transition: height 0.45s cubic-bezier(0.45, 0, 0.2, 1);
          z-index: 0;
        }
        .bsa-btn:hover::before { height: 110%; }
        .bsa-btn > * { position: relative; z-index: 1; }
        .bsa-btn:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(247,148,29,0.3);
        }
        .bsa-btn-arrow {
          transition: transform 0.2s ease;
        }
        .bsa-btn:hover .bsa-btn-arrow {
          transform: translateX(4px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 991.98px) {
          .bsa-content {
            padding: 48px 28px;
          }
          .bsa-image-col {
            min-height: 320px;
          }
        }
        @media (max-width: 575px) {
          .bsa-stats-row { gap: 18px; }
          .bsa-stat-value { font-size: 1.6rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bsa-btn::before,
          .bsa-pillar,
          .bsa-stat-icon,
          .bsa-btn-arrow { transition: none !important; }
        }
      `}</style>
    </section>
  );
}