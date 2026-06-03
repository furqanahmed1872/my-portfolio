"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { missionCards } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--bg2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: 600, height: 600,
          background: "radial-gradient(ellipse, rgba(68,136,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0, left: 0,
          width: 400, height: 400,
          background: "radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// about_me"
            title={
              <>
                The developer
                <br />
                <span className="gradient-text">behind the code</span>
              </>
            }
          />
        </div>

        <div
          className="rv"
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "4rem",
            alignItems: "start",
            marginTop: "3rem",
          }}
        >
          {/* Portrait card */}
          <div style={{ position: "relative" }}>
            <div
              className="topo-bg neon-border"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(68,136,255,0.06) 100%)",
                borderRadius: 16,
                aspectRatio: "4/5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner brackets */}
              <div className="corner-bracket tl" />
              <div className="corner-bracket tr" />
              <div className="corner-bracket bl" />
              <div className="corner-bracket br" />

              {/* Big letter */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "10rem",
                  fontWeight: 900,
                  background: "var(--grad-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.08,
                  userSelect: "none",
                  lineHeight: 1,
                }}
              >
                F
              </span>

              {/* Scan line */}
              <div
                style={{
                  position: "absolute",
                  left: 0, right: 0,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
                  opacity: 0.4,
                  animation: "scrollHint 3s ease-in-out infinite",
                }}
              />

              {/* Info card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0.8rem",
                  left: "0.8rem",
                  right: "0.8rem",
                  background: "rgba(8,11,18,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: 10,
                  padding: "0.9rem 1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--ink)",
                  }}
                >
                  Furqan
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--cyan)",
                    marginTop: "0.1rem",
                    fontFamily: "var(--font-mono)",
                    opacity: 0.8,
                  }}
                >
                  📍 Lahore, PK · UTC+5
                </div>
              </div>
            </div>

            {/* Floating code snippets */}
            <div
              className="float-snip-1"
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "-2rem",
                background: "rgba(8,11,18,0.92)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0,212,255,0.15)",
                borderRadius: 10,
                padding: "0.9rem 1.1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                lineHeight: 1.75,
                color: "var(--ink3)",
                zIndex: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(0,212,255,0.05)",
              }}
              id="fs1"
            >
              <span style={{ color: "var(--cyan)" }}>const</span> dev = {"{"}<br />
              &nbsp;name: <span style={{ color: "var(--green)" }}>&quot;Furqan&quot;</span>,<br />
              &nbsp;exp: <span style={{ color: "var(--purple)" }}>5</span> <span style={{ color: "var(--ink4)" }}>// yrs</span><br />
              {"}"}
            </div>
            <div
              className="float-snip-2"
              style={{
                position: "absolute",
                bottom: "2.5rem",
                left: "-2rem",
                background: "rgba(8,11,18,0.92)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(168,85,247,0.15)",
                borderRadius: 10,
                padding: "0.9rem 1.1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                lineHeight: 1.75,
                color: "var(--ink3)",
                zIndex: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(168,85,247,0.05)",
              }}
              id="fs2"
            >
              <span style={{ color: "var(--ink4)" }}>// mission</span><br />
              <span style={{ color: "var(--purple)" }}>build</span>(<br />
              &nbsp;<span style={{ color: "var(--cyan)" }}>&quot;things that matter&quot;</span><br />
              )
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingTop: "0.5rem",
            }}
          >
            <p
              style={{
                color: "var(--ink2)",
                fontSize: "1rem",
                lineHeight: 1.9,
                fontFamily: "var(--font-body)",
              }}
            >
              I&apos;m{" "}
              <strong style={{ color: "var(--cyan)" }}>Furqan</strong>, a full-stack developer
              from{" "}
              <strong style={{ color: "var(--ink)" }}>Lahore, Pakistan</strong>{" "}
              with 5+ years building end-to-end web products. I don&apos;t just
              write code — I engineer solutions that create measurable impact
              for businesses globally.
            </p>

            {/* Mission cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
              }}
            >
              {missionCards.map((mc) => (
                <div
                  key={mc.label}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    padding: "1.1rem 1.2rem",
                    transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = `${mc.labelColor}30`;
                    el.style.boxShadow = `0 12px 32px rgba(0,0,0,0.3), 0 0 20px ${mc.labelColor}10`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.boxShadow = "";
                  }}
                >
                  {/* Accent line on top */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0, height: 2,
                      background: mc.labelColor,
                      opacity: 0.6,
                    }}
                  />
                  <div style={{ fontSize: "1rem", marginBottom: "0.45rem" }}>{mc.icon}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: mc.labelColor,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {mc.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                      color: "var(--ink3)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {mc.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Status bar */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: 10,
                padding: "1rem 1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                { color: "var(--green)", label: "Currently building:", val: "AI-powered SaaS tools for SMBs" },
                { color: "var(--cyan)", label: "Open to:", val: "Full-time roles & high-impact freelance" },
                { color: "var(--purple)", label: "Working style:", val: "Remote-first, async-friendly, ships on time" },
              ].map(r => (
                <div
                  key={r.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.65rem",
                    fontSize: "0.86rem",
                    color: "var(--ink3)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span
                    style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: r.color, flexShrink: 0, marginTop: 5,
                      boxShadow: `0 0 6px ${r.color}`,
                    }}
                  />
                  <span>
                    <strong style={{ color: "var(--ink)" }}>{r.label}</strong>{" "}{r.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Trait chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["Clean Architecture", "Performance Obsessed", "API Design", "Open Source", "Async-First", "Technical Writing"].map(c => (
                <span
                  key={c}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    color: "var(--ink3)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: 20,
                    fontSize: "0.78rem",
                    cursor: "default",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-mono)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.background = "rgba(0,212,255,0.08)";
                    el.style.color = "var(--cyan)";
                    el.style.borderColor = "rgba(0,212,255,0.3)";
                    el.style.boxShadow = "0 0 10px rgba(0,212,255,0.1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.color = "var(--ink3)";
                    el.style.borderColor = "rgba(0,212,255,0.1)";
                    el.style.boxShadow = "";
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('fs1') && (document.getElementById('fs1').style.display = 'block');
          document.getElementById('fs2') && (document.getElementById('fs2').style.display = 'block');
        `,
        }}
      />
    </section>
  );
}
