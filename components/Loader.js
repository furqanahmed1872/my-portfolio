"use client";
import { useState, useEffect } from "react";

export default function Loader() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only show loader once per session
    const hasLoaded = sessionStorage.getItem("loaded");
    if (hasLoaded) {
      setIsDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("loaded", "true");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (isDone) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "var(--navy)",
        zIndex: 9999,
      }}
    >
      <style>{`
        @keyframes fadeOut { to { opacity: 0; visibility: hidden; } }
        @keyframes drawHex {
          0%   { stroke-dashoffset: 250; opacity: 0; }
          50%  { stroke-dashoffset: 0;   opacity: 1; }
          100% { stroke-dashoffset: 0;   opacity: 1; }
        }
        @keyframes fadeInLetter {
          0%   { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div style={{ position: "relative", width: 60, height: 60 }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <polygon
            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
            stroke="var(--green)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="250"
            strokeDashoffset="250"
            style={{ animation: "drawHex 1.5s var(--easing) forwards 0.2s" }}
          />
        </svg>
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--green)",
            fontFamily: "var(--font-mono)",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1,
            animation: "fadeInLetter 0.5s ease forwards 1s",
            opacity: 0,
            userSelect: "none",
          }}
        >
          F
        </span>
      </div>
    </div>
  );
}
