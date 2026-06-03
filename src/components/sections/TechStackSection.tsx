"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { techStack } from "@/lib/data";
import Image from "next/image";

export function TechStackSection() {
  return (
    <section
      id="techstack"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// tech_stack"
            title={
              <>
                My <span className="gradient-text">Tech Stack</span>
              </>
            }
            sub="Technologies I've been working with professionally"
          />
        </div>

        {/* Icon grid */}
        <div
          className="rv rv1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="tech-icon-wrap"
              title={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.55rem",
                padding: "1.1rem 0.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,212,255,0.08)",
                borderRadius: 12,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: "20%", right: "20%",
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${tech.color}60, transparent)`,
                  transition: "opacity 0.3s",
                }}
              />

              <Image
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                width={40}
                height={40}
                style={{ width: 40, height: 40, filter: "brightness(0.9)" }}
                unoptimized
              />
              <span
                style={{
                  fontSize: "0.67rem",
                  color: "var(--ink4)",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  padding: "0 4px",
                  transition: "color 0.3s",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="rv"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3))" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--ink4)",
            }}
          >
            {"// and always learning more"}
          </span>
          <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, rgba(0,212,255,0.3), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
