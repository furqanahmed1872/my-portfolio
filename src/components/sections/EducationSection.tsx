"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { educations } from "@/lib/data";

export function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "5.5rem 2.5rem",
        background: "linear-gradient(135deg,#f0eefa 0%,#ece8f8 100%)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader
            tag="// education"
            title={
              <>
                Education &amp;
                <br />
                Certifications
              </>
            }
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "1.2rem",
            marginTop: "3rem",
          }}
        >
          {educations.map((ed, i) => (
            <div
              key={ed.degree}
              className={`rv rv${i + 1}`}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderLeft: `3px solid ${ed.color}`,
                borderRadius: "0 12px 12px 0",
                padding: "1.6rem",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 8px 24px rgba(14,12,10,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "";
              }}
            >
              <span
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "0.7rem",
                  display: "block",
                }}
              >
                {ed.icon}
              </span>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.25rem",
                }}
              >
                {ed.degree}
              </div>
              <div
                style={{
                  color: "var(--ink3)",
                  fontSize: "0.85rem",
                  marginBottom: "0.3rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                {ed.school}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "var(--ink4)",
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
