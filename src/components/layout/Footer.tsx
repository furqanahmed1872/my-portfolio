"use client";

import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg2)",
        padding: "2rem 2.5rem",
        borderTop: "1px solid rgba(0,212,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0, left: "20%", right: "20%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)",
        }}
      />

      <div
        className="max-w-[1080px] mx-auto flex flex-wrap items-center justify-between gap-4"
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.02em",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span style={{ color: "var(--cyan)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{"<"}</span>
          <span style={{ color: "var(--ink)" }}>Furqan</span>
          <span style={{ color: "var(--cyan)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{"/>"}</span>
        </div>

        {/* Copyright */}
        <p
          style={{
            color: "var(--ink4)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
          }}
        >
          © {new Date().getFullYear()} {siteConfig.name} · Built in Lahore, Pakistan 🇵🇰
        </p>

        {/* Links */}
        <div className="flex gap-5">
          {["Top", "Work", "Contact"].map(l => (
            <a
              key={l}
              href={`#${l === "Top" ? "home" : l.toLowerCase()}`}
              style={{
                color: "var(--ink4)",
                fontSize: "0.78rem",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--cyan)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink4)"; }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
