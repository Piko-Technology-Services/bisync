"use client";

import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    const handleMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle dark gradient background
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        width
      );
      gradient.addColorStop(0, "rgba(10, 20, 40, 0.6)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.95)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // draw dots
      dots.forEach((d, i) => {
        // mouse attraction (subtle)
        const dx = mouse.current.x - d.x;
        const dy = mouse.current.y - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          d.x -= dx * 0.01;
          d.y -= dy * 0.01;
        }

        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;

        // dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 200, 255, 0.7)";
        ctx.fill();

        // lines
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j];
          const dx2 = d.x - d2.x;
          const dy2 = d.y - d2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 200, 255, ${1 - dist2 / 120})`;
            ctx.lineWidth = 1;
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="network-bg"
    />
  );
}

// "use client";

// import { useEffect, useRef } from "react";

// export default function NetworkBackground() {
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     // 🔥 particles upgraded with orbital motion
//     const dots = Array.from({ length: 70 }, () => {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = Math.random() * 0.6;

//       return {
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         orbit: Math.random() * 2 + 0.5,
//       };
//     });

//     const handleMouse = (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouse);

//     const draw = () => {
//       // soft fade trail (gives motion persistence)
//       ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
//       ctx.fillRect(0, 0, width, height);

//       // subtle energy field gradient
//       const gradient = ctx.createRadialGradient(
//         mouse.current.x,
//         mouse.current.y,
//         0,
//         mouse.current.x,
//         mouse.current.y,
//         width * 0.6
//       );

//       gradient.addColorStop(0, "rgba(0, 255, 255, 0.12)");
//       gradient.addColorStop(0.4, "rgba(0, 80, 120, 0.08)");
//       gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       dots.forEach((d, i) => {
//         // 🔥 mouse gravity (smooth + stronger near cursor)
//         const dx = mouse.current.x - d.x;
//         const dy = mouse.current.y - d.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         if (dist < 180) {
//           const force = (180 - dist) / 180;

//           // pull + swirl effect (SCI-FI FEEL)
//           d.vx += (dx / dist) * force * 0.03;
//           d.vy += (dy / dist) * force * 0.03;

//           // orbital swirl
//           const angle = Math.atan2(dy, dx);
//           d.vx += Math.sin(angle) * 0.01;
//           d.vy -= Math.cos(angle) * 0.01;
//         }

//         // damping (stabilize motion)
//         d.vx *= 0.98;
//         d.vy *= 0.98;

//         // movement
//         d.x += d.vx;
//         d.y += d.vy;

//         // wrap edges (infinite field)
//         if (d.x < 0) d.x = width;
//         if (d.x > width) d.x = 0;
//         if (d.y < 0) d.y = height;
//         if (d.y > height) d.y = 0;

//         // 🔵 glowing node
//         const glow = dist < 150 ? 1 : 0.6;

//         ctx.beginPath();
//         ctx.arc(d.x, d.y, 2.2, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(0, 255, 255, ${glow})`;
//         ctx.fill();

//         // ✨ connections (optimized feel)
//         for (let j = i + 1; j < dots.length; j++) {
//           const d2 = dots[j];
//           const dx2 = d.x - d2.x;
//           const dy2 = d.y - d2.y;
//           const dist2 = dx2 * dx2 + dy2 * dy2;

//           if (dist2 < 140 * 140) {
//             const opacity = 1 - dist2 / (140 * 140);

//             // flowing energy line (animated feel)
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.6})`;
//             ctx.lineWidth = 1;

//             ctx.moveTo(d.x + Math.sin(Date.now() * 0.001 + i) * 1.5, d.y);
//             ctx.lineTo(d2.x, d2.y);
//             ctx.stroke();
//           }
//         }
//       });

//       requestAnimationFrame(draw);
//     };

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", handleMouse);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="network-bg" />;
// }