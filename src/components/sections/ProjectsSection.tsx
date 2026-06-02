"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type ProjectCategory } from "@/lib/data";

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "AI / ML", value: "ai" },
  { label: "SaaS", value: "saas" },
  { label: "E-Commerce", value: "ecom" },
];

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const filtered = active === "all" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="projects" style={{ padding: "5.5rem 2.5rem", background: "var(--white)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader tag="// featured_projects" title={<>Projects that define<br />my craft</>} />
        </div>

        {/* Filters */}
        <div className="rv" style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                background: active === f.value ? "var(--ink)" : "transparent",
                border: "1px solid",
                borderColor: active === f.value ? "var(--ink)" : "var(--border)",
                color: active === f.value ? "#fff" : "var(--ink3)",
                padding: "0.38rem 0.9rem",
                borderRadius: 20,
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.5rem" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="pj-card"
                style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", cursor: "pointer" }}
              >
                {/* Thumbnail — colorful gradient like ref image 2 */}
                <div style={{ aspectRatio: "16/9", background: p.gradient, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  {/* Subtle overlay pattern */}
                  <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.06)", backdropFilter: "blur(0px)" }} />
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", fontWeight: 800, color: "rgba(255,255,255,0.18)", userSelect: "none", position: "relative", zIndex: 1 }}>
                    {p.name.charAt(0)}
                  </span>
                  <span style={{ position: "absolute", top: "0.7rem", left: "0.7rem", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "0.22rem 0.6rem", borderRadius: 4, fontSize: "0.68rem", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-mono)", zIndex: 2 }}>
                    {p.cat}
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: "1.4rem" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: "0.4rem" }}>{p.name}</h3>
                  <p style={{ color: "var(--ink3)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.9rem", fontFamily: "var(--font-body)" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
                    {p.stack.map(s => (
                      <span key={s} style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--ink3)", padding: "0.18rem 0.55rem", borderRadius: 4, fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {[
                      { label: "Live Preview", href: p.liveUrl ?? "#", icon: "↗" },
                      { label: "View Code", href: p.githubUrl ?? "#", icon: "<>" },
                    ].map(lk => (
                      <a key={lk.label} href={lk.href} target="_blank" rel="noopener noreferrer"
                        style={{ color: "var(--ink4)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.3rem", textDecoration: "none", fontWeight: 500, fontFamily: "var(--font-body)", transition: "color 0.2s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--blue)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink4)"; }}>
                        <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}>{lk.icon}</span>{lk.label}
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
