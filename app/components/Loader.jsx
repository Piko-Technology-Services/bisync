"use client";

import { useEffect, useState } from "react";
import NavNetworkbackground from "./NavNetworkbackground";


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
    }, duration + 1500); // matches the fade-out transition below

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
      <NavNetworkbackground />

      <div className="bs-loader-tank">
        {/* Logo on top, water rises behind/under it */}
        <img src="/logo.png" alt="BISYNC" className="bs-loader-logo" />

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

    </div>
  );
}
