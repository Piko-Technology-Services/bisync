"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle light-gray "network cable" background animation.
 * Draws moving particles connected by thin lines when close to each other —
 * intended to sit absolutely positioned behind navbar content.
 *
 * Usage:
 *   <nav className="navbar ...">
 *     <NavNetworkBackground />
 *     ...rest of navbar content...
 *   </nav>
 *
 * Make sure the parent nav has `position: relative; overflow: hidden;`
 * (already added in navbar-animations.css) and that this component
 * renders BEFORE the rest of the navbar's children so z-index stacking
 * in the CSS keeps it behind everything else.
 */
export default function NavNetworkBackground({
  dotColor = "rgba(150, 150, 150, 0.5)",
  lineColor = "rgba(150, 150, 150, 0.18)",
  density = 0.00009, // particles per px^2, tuned for a nav-bar-height strip
  maxLineDist = 140,
  speed = 0.25,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    let particles = [];
    let animationId;
    let reduceMotion = false;

    if (typeof window !== "undefined" && window.matchMedia) {
      reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function resize() {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight || 90;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(12, Math.min(60, Math.floor(width * height * density)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      // update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      // draw connecting lines between near particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLineDist) {
            const opacity = 1 - dist / maxLineDist;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor.replace(
              /[\d.]+\)$/,
              `${opacity * 0.18})`
            );
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(step);
    }

    resize();

    if (!reduceMotion) {
      step();
    } else {
      // draw a single static frame
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }
    }

    const handleResize = () => {
      cancelAnimationFrame(animationId);
      resize();
      if (!reduceMotion) step();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [dotColor, lineColor, density, maxLineDist, speed]);

  return <canvas ref={canvasRef} className="nav-network-bg" aria-hidden="true" />;
}