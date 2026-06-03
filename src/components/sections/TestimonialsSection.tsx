"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
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
          bottom: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// client_voices"
            title={
              <>
                What clients{" "}
                <span className="gradient-text">say</span>
              </>
            }
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.2rem",
            marginTop: "3rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rv rv${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4), 0 0 30px rgba(0,212,255,0.06)";
                el.style.borderColor = "rgba(0,212,255,0.15)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "";
                el.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)",
                }}
              />

              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "var(--cyan)",
                  marginBottom: "0.6rem",
                  fontWeight: 900,
                  opacity: 0.2,
                }}
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                style={{
                  color: "var(--ink2)",
                  fontSize: "0.88rem",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                  flex: 1,
                  fontFamily: "var(--font-body)",
                }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    flexShrink: 0,
                    background: `${t.avatarColor}15`,
                    color: t.avatarColor,
                    border: `1px solid ${t.avatarColor}30`,
                    boxShadow: `0 0 12px ${t.avatarColor}15`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.86rem",
                      color: "var(--ink)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      color: "var(--ink4)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
