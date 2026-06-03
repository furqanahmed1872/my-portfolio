"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--bg2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: 500, height: 500,
          background: "radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// work_experience"
            title={
              <>
                5 years building
                <br />
                <span className="gradient-text">at scale</span>
              </>
            }
          />
        </div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            marginTop: "3.5rem",
            paddingLeft: "1.5rem",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, var(--cyan), var(--blue), var(--purple), transparent)",
              opacity: 0.2,
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`tl-item rv rv${i + 1}`}
              style={{
                position: "relative",
                marginBottom: "3rem",
                paddingLeft: "2.5rem",
              }}
            >
              {/* Timeline dot */}
              <div
                className="tl-dot"
                style={{
                  position: "absolute",
                  left: "-1.85rem",
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: `2px solid ${exp.accentColor}`,
                  background: "var(--bg2)",
                  boxShadow: `0 0 10px ${exp.accentColor}50`,
                  zIndex: 1,
                }}
              />

              {/* Card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `2px solid ${exp.accentColor}`,
                  borderRadius: "0 14px 14px 0",
                  padding: "1.75rem 2rem",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.transform = "translateX(4px)";
                  el.style.boxShadow = `0 8px 40px rgba(0,0,0,0.3), 0 0 20px ${exp.accentColor}10`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.transform = "";
                  el.style.boxShadow = "";
                }}
              >
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, right: 0,
                    width: 120, height: 120,
                    background: `radial-gradient(ellipse at 100% 0%, ${exp.accentColor}08, transparent)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Period */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    color: exp.accentColor,
                    opacity: 0.9,
                  }}
                >
                  {exp.period}
                </p>

                {/* Role */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    letterSpacing: "-0.025em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {exp.role}
                </h3>

                {/* Company */}
                <p
                  style={{
                    color: "var(--ink3)",
                    fontSize: "0.86rem",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {exp.company}
                  <span style={{ color: "var(--ink4)" }}> · {exp.location}</span>
                </p>

                {/* Achievements */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {exp.achievements.map((a, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.65rem",
                        fontSize: "0.86rem",
                        color: "var(--ink3)",
                        lineHeight: 1.65,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--cyan)",
                          flexShrink: 0,
                          fontWeight: 600,
                          marginTop: 1,
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          opacity: 0.8,
                        }}
                      >
                        →
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: a }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
