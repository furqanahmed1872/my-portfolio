"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { educations } from "@/lib/data";

export function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%", right: "-10%",
          transform: "translateY(-50%)",
          width: 500, height: 500,
          background: "radial-gradient(ellipse, rgba(168,85,247,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// education"
            title={
              <>
                Education &amp;{" "}
                <span className="gradient-text">Certifications</span>
              </>
            }
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          {educations.map((ed, i) => (
            <div
              key={ed.degree}
              className={`rv rv${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: `2px solid ${ed.color}`,
                borderRadius: "0 12px 12px 0",
                padding: "1.6rem",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 12px 36px rgba(0,0,0,0.4), 0 0 20px ${ed.color}12`;
                el.style.borderColor = `${ed.color}40`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "";
                el.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, ${ed.color}40, transparent)`,
                }}
              />

              <span
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  display: "block",
                  filter: "drop-shadow(0 0 8px rgba(0,212,255,0.3))",
                }}
              >
                {ed.icon}
              </span>

              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.3rem",
                }}
              >
                {ed.degree}
              </div>

              <div
                style={{
                  color: "var(--ink3)",
                  fontSize: "0.82rem",
                  marginBottom: "0.3rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                {ed.school}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: ed.color,
                  opacity: 0.8,
                }}
              >
                {ed.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
