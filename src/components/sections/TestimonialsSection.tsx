"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "5.5rem 2.5rem",
        background: "linear-gradient(135deg,#e4f5ef 0%,#dff2ea 100%)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader tag="// client_voices" title={<>What clients say</>} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "1.2rem",
            marginTop: "3rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rv rv${i + 1}`}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 36px rgba(14,12,10,0.09)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  color: "rgba(13,126,98,0.35)",
                  marginBottom: "0.65rem",
                  fontWeight: 800,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  color: "var(--ink2)",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  marginBottom: "1.4rem",
                  fontStyle: "italic",
                  flex: 1,
                  fontFamily: "var(--font-body)",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    flexShrink: 0,
                    background: t.avatarBg,
                    color: t.avatarColor,
                    border: "1px solid var(--border)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      color: "var(--ink)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      color: "var(--ink4)",
                      fontFamily: "var(--font-body)",
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
