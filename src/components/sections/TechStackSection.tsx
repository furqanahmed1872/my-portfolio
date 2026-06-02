import { SectionHeader } from "@/components/ui/SectionHeader";
import { techStack } from "@/lib/data";
import Image from "next/image";

export function TechStackSection() {
  return (
    <section id="techstack" style={{ padding: "5.5rem 2.5rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader
            tag="// tech_stack"
            title={<>My Tech Stack</>}
            sub="Technologies I've been working with recently"
          />
        </div>

        {/* Icon grid — exactly like reference image 2 */}
        <div
          className="rv rv1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="tech-icon-wrap"
              title={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1.1rem 0.5rem",
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                cursor: "default",
              }}
            >
              <Image
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                width={44}
                height={44}
                style={{ width: 44, height: 44 }}
                unoptimized
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--ink3)",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  padding: "0 4px",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
