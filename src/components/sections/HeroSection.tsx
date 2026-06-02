"use client";
import { useTypewriter } from "@/hooks/useTypewriter";
import { heroRoles, stats, siteConfig } from "@/lib/data";
import { CodeRainBackground } from "@/components/ui/CodeRainBackground";

function gs(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

export function HeroSection() {
  const typed = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "7rem 2.5rem 5rem", background: "var(--bg)" }}
    >
      <CodeRainBackground />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 880, width: "100%", textAlign: "center" }}>

        {/* Header eyebrow */}
        <div style={{ animation: "fadeUp 0.7s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--white)", border: "1px solid var(--border2)", color: "var(--ink2)", padding: "0.35rem 0.9rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 500, marginBottom: "0.8rem", fontFamily: "var(--font-body)" }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
            Open to opportunities · Lahore 🇵🇰
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(180,120,10,0.07)", border: "1px solid rgba(180,120,10,0.2)", color: "#7c4a00", padding: "0.28rem 0.75rem", borderRadius: 20, fontSize: "0.72rem", fontWeight: 500, marginBottom: "1.6rem", marginLeft: "0.4rem", fontFamily: "var(--font-body)" }}>
            👁 {siteConfig.viewerCount} recruiters viewed this week
          </div>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3.5rem,9vw,7rem)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.93, color: "var(--ink)", marginBottom: "0.35rem", animation: "fadeUp 0.7s 0.08s ease both" }}>
          Hey<br />
          I&apos;m <span style={{ color: "var(--blue)" }}>Furqan,</span>
        </h1>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,4vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink2)", marginBottom: "1rem", animation: "fadeUp 0.7s 0.12s ease both" }}>
          Full-Stack Developer
        </h2>

        {/* Typewriter */}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.85rem,1.8vw,1rem)", color: "var(--ink3)", marginBottom: "1.4rem", letterSpacing: "0.01em", animation: "fadeUp 0.7s 0.18s ease both", minHeight: "1.5rem" }}>
          {typed}<span className="cursor-blink" aria-hidden="true" />
        </p>

        {/* Description */}
        <p style={{ fontSize: "1.05rem", color: "var(--ink2)", maxWidth: 560, margin: "0 auto 2.25rem", lineHeight: 1.85, animation: "fadeUp 0.7s 0.24s ease both", fontFamily: "var(--font-body)" }}>
          I help businesses grow by crafting amazing web experiences. If you&apos;re looking for a developer who loves to get stuff done — let&apos;s talk.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem", animation: "fadeUp 0.7s 0.3s ease both" }}>
          <button onClick={() => gs("projects")} style={{ background: "var(--blue)", color: "#fff", border: "none", padding: "0.8rem 1.75rem", borderRadius: 7, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.25s", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.background = "#0d3db5"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ""; (e.currentTarget as HTMLButtonElement).style.background = "var(--blue)"; }}>
            Download CV →
          </button>
          <button onClick={() => gs("contact")} style={{ background: "transparent", color: "var(--blue)", border: "1.5px solid var(--blue)", padding: "0.78rem 1.75rem", borderRadius: 7, fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.25s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--blue)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "var(--blue)"; }}>
            Let&apos;s Talk 💬
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid var(--border)", borderRadius: 10, background: "var(--white)", overflow: "hidden", maxWidth: 580, margin: "0 auto", animation: "fadeUp 0.7s 0.38s ease both" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ flex: 1, minWidth: 110, padding: "1.25rem 1rem", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.73rem", color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.3rem", fontFamily: "var(--font-body)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", zIndex: 2 }}>
        <span style={{ fontSize: "0.68rem", color: "var(--ink4)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>Scroll</span>
        <div className="scroll-hint-line" style={{ width: 1, height: 34, background: "linear-gradient(var(--ink3),transparent)" }} />
      </div>
    </section>
  );
}
