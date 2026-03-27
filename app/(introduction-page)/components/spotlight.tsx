"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--x) var(--y), rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    />
  );
}
