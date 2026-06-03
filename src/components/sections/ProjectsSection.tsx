"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type ProjectCategory } from "@/lib/data";

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: "All",        value: "all" },
  { label: "Web Apps",   value: "web" },
  { label: "AI / ML",   value: "ai" },
  { label: "SaaS",      value: "saas" },
  { label: "E-Commerce", value: "ecom" },
];

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const filtered = active === "all" ? projects : projects.filter(p => p.cat === active);

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 900, height: 500,
          background: "radial-gradient(ellipse, rgba(68,136,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv">
          <SectionHeader
            tag="// featured_projects"
            title={
              <>
                Projects that define
                <br />
                <span className="gradient-text">my craft</span>
              </>
            }
          />
        </div>

        {/* Filter pills */}
        <div
          className="rv"
          style={{
            display: "flex",
            gap: "0.4rem",
            flexWrap: "wrap",
            margin: "2rem 0 2.5rem",
          }}
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                background: active === f.value
                  ? "linear-gradient(135deg, var(--cyan), var(--blue))"
                  : "rgba(255,255,255,0.03)",
                border: "1px solid",
                borderColor: active === f.value ? "transparent" : "rgba(0,212,255,0.12)",
                color: active === f.value ? "var(--bg)" : "var(--ink3)",
                padding: "0.38rem 1rem",
                borderRadius: 20,
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: active === f.value ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.25s",
                boxShadow: active === f.value ? "0 4px 16px rgba(0,212,255,0.3)" : "none",
              }}
              onMouseEnter={e => {
                if (active !== f.value) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(0,212,255,0.3)";
                  el.style.color = "var(--cyan)";
                }
              }}
              onMouseLeave={e => {
                if (active !== f.value) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(0,212,255,0.12)";
                  el.style.color = "var(--ink3)";
                }
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="pj-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: p.gradient,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {/* Scan line over thumbnail */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
                    }}
                  />
                  {/* Grid overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Project initial */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "4rem",
                      fontWeight: 900,
                      color: "rgba(255,255,255,0.15)",
                      position: "relative",
                      zIndex: 1,
                      userSelect: "none",
                    }}
                  >
                    {p.name.charAt(0)}
                  </span>

                  {/* Category badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#fff",
                      padding: "0.22rem 0.65rem",
                      borderRadius: 5,
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-mono)",
                      zIndex: 2,
                    }}
                  >
                    {p.cat}
                  </span>

                  {/* Neon corner accent */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, ${p.accentColor}, transparent)`,
                      zIndex: 2,
                    }}
                  />
                </div>

                {/* Card body */}
                <div style={{ padding: "1.4rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--ink3)",
                      fontSize: "0.83rem",
                      lineHeight: 1.7,
                      marginBottom: "0.9rem",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
                    {p.stack.map(s => (
                      <span
                        key={s}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(0,212,255,0.1)",
                          color: "var(--ink4)",
                          padding: "0.18rem 0.55rem",
                          borderRadius: 4,
                          fontSize: "0.68rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {[
                      { label: "Live Preview", href: p.liveUrl ?? "#", icon: "↗" },
                      { label: "View Code",    href: p.githubUrl ?? "#", icon: "</>" },
                    ].map(lk => (
                      <a
                        key={lk.label}
                        href={lk.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--ink4)",
                          fontSize: "0.78rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          textDecoration: "none",
                          fontWeight: 500,
                          fontFamily: "var(--font-mono)",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--cyan)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink4)"; }}
                      >
                        <span style={{ fontSize: "0.7rem" }}>{lk.icon}</span>
                        {lk.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
