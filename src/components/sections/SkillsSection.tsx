"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories, type SkillLevel } from "@/lib/data";

const levelColors: Record<SkillLevel, string> = {
  expert: "#1a4fd6",
  strong: "#5c4ed4",
  good: "#0d7e62",
};
const levelLabels: Record<SkillLevel, string> = {
  expert: "Expert",
  strong: "Strong",
  good: "Proficient",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "5.5rem 2.5rem",
        background: "linear-gradient(135deg,#edf2fd 0%,#f0edf9 100%)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader
            tag="// skills"
            title={<>Skills &amp; expertise</>}
            sub="Battle-tested across the full product lifecycle."
          />
        </div>
        <div
          className="rv rv1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(255px,1fr))",
            gap: "1.2rem",
            marginTop: "3rem",
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`sk-card rv rv${i + 1}`}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.5rem",
                cursor: "default",
                borderTop: `3px solid ${cat.color}`,
              }}
            >
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
                    width: 30,
                    height: 30,
                    borderRadius: 7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    background: cat.bgColor,
                    color: cat.color,
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: cat.color,
                  }}
                >
                  {cat.label}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.skills.map((sk) => (
                  <span
                    key={sk.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.3rem 0.7rem",
                      borderRadius: 5,
                      fontSize: "0.8rem",
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      color: "var(--ink2)",
                      fontFamily: "var(--font-body)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "var(--white)";
                      el.style.borderColor = "var(--border2)";
                      el.style.color = "var(--ink)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "var(--bg2)";
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--ink2)";
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: levelColors[sk.level],
                        flexShrink: 0,
                      }}
                    />
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="rv"
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          {(Object.keys(levelLabels) as SkillLevel[]).map((l) => (
            <span
              key={l}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.78rem",
                color: "var(--ink4)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: levelColors[l],
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
