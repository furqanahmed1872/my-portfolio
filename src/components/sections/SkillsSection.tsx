"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories, type SkillLevel } from "@/lib/data";

const levelColors: Record<SkillLevel, string> = {
  expert:  "var(--cyan)",
  strong:  "var(--blue)",
  good:    "var(--purple)",
};
const levelLabels: Record<SkillLevel, string> = {
  expert: "Expert",
  strong: "Strong",
  good:   "Proficient",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
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
          bottom: 0, right: 0,
          width: 500, height: 500,
          background: "radial-gradient(ellipse, rgba(168,85,247,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// skills"
            title={
              <>
                Skills &amp;{" "}
                <span className="gradient-text">expertise</span>
              </>
            }
            sub="Battle-tested across the full product lifecycle."
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`sk-card rv rv${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14,
                padding: "1.5rem",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top neon accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                  opacity: 0.7,
                }}
              />

              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: 80, height: 80,
                  background: `radial-gradient(ellipse at 0% 0%, ${cat.color}12, transparent)`,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  marginBottom: "1.2rem",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    background: `${cat.color}15`,
                    color: cat.color,
                    flexShrink: 0,
                    border: `1px solid ${cat.color}25`,
                    boxShadow: `0 0 10px ${cat.color}10`,
                  }}
                >
                  {cat.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: cat.color,
                  }}
                >
                  {cat.label}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.skills.map(sk => (
                  <span
                    key={sk.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.28rem 0.65rem",
                      borderRadius: 6,
                      fontSize: "0.78rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "var(--ink3)",
                      fontFamily: "var(--font-mono)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = `${levelColors[sk.level]}12`;
                      el.style.borderColor = `${levelColors[sk.level]}30`;
                      el.style.color = levelColors[sk.level];
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "rgba(255,255,255,0.03)";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.color = "var(--ink3)";
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: levelColors[sk.level],
                        flexShrink: 0,
                        boxShadow: `0 0 4px ${levelColors[sk.level]}`,
                      }}
                    />
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className="rv"
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
            paddingLeft: "0.5rem",
          }}
        >
          {(Object.keys(levelLabels) as SkillLevel[]).map(l => (
            <span
              key={l}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.75rem",
                color: "var(--ink4)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: levelColors[l],
                  boxShadow: `0 0 6px ${levelColors[l]}`,
                }}
              />
              {levelLabels[l]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
