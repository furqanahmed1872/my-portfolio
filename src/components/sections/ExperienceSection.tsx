"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "5.5rem 2.5rem",
        background: "linear-gradient(135deg,#fdf6ec 0%,#faf3e8 100%)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader
            tag="// work_experience"
            title={
              <>
                5 years building
                <br />
                at scale
              </>
            }
          />
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "3rem",
            paddingLeft: "1.5rem",
            borderLeft: "1px solid var(--border2)",
          }}
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`tl-item rv rv${i + 1}`}
              style={{
                position: "relative",
                marginBottom: "2.75rem",
                paddingLeft: "2rem",
              }}
            >
              <div
                className="tl-dot"
                style={{
                  position: "absolute",
                  left: "-1.85rem",
                  top: 5,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: `2px solid ${exp.accentColor}`,
                  background: "var(--white)",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                  color: exp.accentColor,
                }}
              >
                {exp.period}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.025em",
                  marginBottom: "0.2rem",
                }}
              >
                {exp.role}
              </h3>
              <p
                style={{
                  color: "var(--ink3)",
                  fontSize: "0.88rem",
                  marginBottom: "0.85rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                {exp.company} · {exp.location}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {exp.achievements.map((a, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.88rem",
                      color: "var(--ink2)",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--blue)",
                        flexShrink: 0,
                        fontWeight: 600,
                        marginTop: 1,
                        fontSize: "0.8rem",
                      }}
                    >
                      →
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: a }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
