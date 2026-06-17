"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export function TechBackground() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        gradientRef.current?.style.setProperty("--cursor-x", `${event.clientX}px`);
        gradientRef.current?.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-70 transition-opacity duration-500"
        style={
          {
            "--cursor-x": "50vw",
            "--cursor-y": "25vh",
            background:
              "radial-gradient(560px circle at var(--cursor-x) var(--cursor-y), rgba(99, 102, 241, 0.18), rgba(16, 185, 129, 0.08) 34%, transparent 68%)",
          } as CSSProperties
        }
      />
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
    </div>
  );
}
