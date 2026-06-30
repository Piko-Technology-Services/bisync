"use client";

import { useEffect, useState } from "react";

/**
 * Loader.jsx
 * Logo sits inside a rounded rectangle "tank" that fills up with an
 * animated orange wave, then fades out once the page is ready.
 *
 * Usage in page.js:
 *
 *   import { useState } from "react";
 *   import Loader from "./components/Loader";
 *
 *   export default function Home() {
 *     const [loading, setLoading] = useState(true);
 *     return (
 *       <>
 *         {loading && <Loader onFinish={() => setLoading(false)} />}
 *         ...rest of page
 *       </>
 *     );
 *   }
 */
export default function Loader({ onFinish, duration = 2200 }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fillTimer = setTimeout(() => setHide(true), duration);
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, duration + 500); // matches the fade-out transition below

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, onFinish]);

  return (
    <div
      className={`bs-loader-overlay ${hide ? "bs-loader-hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="bs-loader-tank">
        {/* Logo on top, water rises behind/under it */}
        <img src="/images/logo.png" alt="BISYNC" className="bs-loader-logo" />

        <div className="bs-loader-water">
          <svg
            className="bs-loader-wave bs-loader-wave-back"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C150,90 350,0 500,40 C650,80 750,20 800,40 L800,100 L0,100 Z" />
          </svg>
          <svg
            className="bs-loader-wave bs-loader-wave-front"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C200,10 300,90 500,50 C650,20 700,70 800,50 L800,100 L0,100 Z" />
          </svg>
        </div>
      </div>

      <div className="bs-loader-label">
        <span>B</span>
        <span>I</span>
        <span>S</span>
        <span>Y</span>
        <span>N</span>
        <span>C</span>
      </div>

      <style jsx>{`
        :global(:root) {
          --bs-orange: #f7941d;
          --bs-orange-deep: #e07b00;
          --bs-black: #111111;
        }

        .bs-loader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          background: #ffffff;
          transition: opacity 0.5s ease, visibility 0.5s ease;
          opacity: 1;
          visibility: visible;
        }

        .bs-loader-hide {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        /* The rectangle "tank" that holds the logo */
        .bs-loader-tank {
          position: relative;
          width: 220px;
          height: 140px;
          border: 3px solid var(--bs-black);
          border-radius: 14px;
          overflow: hidden;
          background: #fafafa;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .bs-loader-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 78%;
          height: auto;
          z-index: 2;
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
          user-select: none;
          pointer-events: none;
        }

        /* Water container: animates its height from 0 -> 100% */
        .bs-loader-water {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 0%;
          z-index: 1;
          animation: bs-fill 2.2s cubic-bezier(0.45, 0, 0.55, 1) forwards;
        }

        .bs-loader-wave {
          position: absolute;
          left: 0;
          width: 200%;
          height: 60px;
          top: -28px;
        }

        .bs-loader-wave path {
          fill: var(--bs-orange);
        }

        .bs-loader-wave-front path {
          fill: var(--bs-orange-deep);
        }

        .bs-loader-wave-back {
          animation: bs-wave-move 3.2s linear infinite;
          opacity: 0.85;
        }

        .bs-loader-wave-front {
          animation: bs-wave-move 2.1s linear infinite reverse;
        }

        /* fills the rest of the tank below the waves */
        .bs-loader-water::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 20px;
          bottom: 0;
          background: var(--bs-orange);
        }

        @keyframes bs-fill {
          0% {
            height: 0%;
          }
          100% {
            height: 100%;
          }
        }

        @keyframes bs-wave-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Brand letters pulsing under the tank */
        .bs-loader-label {
          display: flex;
          gap: 4px;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 700;
          font-size: 1.4rem;
          letter-spacing: 2px;
        }

        .bs-loader-label span {
          color: var(--bs-black);
          animation: bs-letter-pulse 1.4s ease-in-out infinite;
        }

        .bs-loader-label span:nth-child(1) {
          color: var(--bs-black);
        }
        .bs-loader-label span:not(:first-child) {
          color: var(--bs-orange);
        }

        .bs-loader-label span:nth-child(1) { animation-delay: 0s; }
        .bs-loader-label span:nth-child(2) { animation-delay: 0.1s; }
        .bs-loader-label span:nth-child(3) { animation-delay: 0.2s; }
        .bs-loader-label span:nth-child(4) { animation-delay: 0.3s; }
        .bs-loader-label span:nth-child(5) { animation-delay: 0.4s; }
        .bs-loader-label span:nth-child(6) { animation-delay: 0.5s; }

        @keyframes bs-letter-pulse {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .bs-loader-tank {
            width: 170px;
            height: 110px;
          }
          .bs-loader-label {
            font-size: 1.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bs-loader-wave-back,
          .bs-loader-wave-front,
          .bs-loader-label span {
            animation: none;
          }
          .bs-loader-water {
            animation-duration: 0.6s;
          }
        }
      `}</style>
    </div>
  );
}
