"use client";
import { useTypewriter } from "@/hooks/useTypewriter";
import { heroRoles, stats, siteConfig } from "@/lib/data";
import { CodeRainBackground } from "@/components/ui/CodeRainBackground";

function gs(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const typed = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 2.5rem 5rem",
        background: "var(--bg)",
      }}
    >
      {/* Dot grid only — clean, no gradients */}
      <CodeRainBackground />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badges */}
        <div style={{ animation: "fadeUp 0.6s ease both" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(0,255,136,0.06)",
              border: "1px solid rgba(0,255,136,0.2)",
              color: "var(--green)",
              padding: "0.3rem 1rem",
              borderRadius: 20,
              fontSize: "0.75rem",
              fontWeight: 500,
              marginBottom: "0.6rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--green)", flexShrink: 0,
                boxShadow: "0 0 8px var(--green)",
              }}
            />
            Available for opportunities · Lahore 🇵🇰
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(255,215,0,0.07)",
              border: "1px solid rgba(255,215,0,0.18)",
              color: "#ffd700",
              padding: "0.28rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.72rem",
              fontWeight: 500,
              marginBottom: "2rem",
              marginLeft: "0.5rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            👁 {siteConfig.viewerCount} recruiters viewed this week
          </div>
        </div>

        {/* Main headline */}
        <div style={{ animation: "fadeUp 0.7s 0.1s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--ink4)",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            {"// hello world"}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem,9vw,7.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              color: "var(--ink)",
              marginBottom: "0.4rem",
            }}
          >
            Hey, I&apos;m{" "}
            <span
              className="glitch-text"
              data-text="Furqan"
              style={{
                fontFamily: "var(--font-heading)",
                background: "var(--grad-hero)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Furqan
            </span>
          </h1>
        </div>

        {/* Role */}
        <div style={{ animation: "fadeUp 0.7s 0.18s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.4rem,3.5vw,2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--ink2)",
              marginBottom: "0.9rem",
            }}
          >
            Full-Stack{" "}
            <span style={{ color: "var(--cyan)", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Developer
            </span>
          </h2>
        </div>

        {/* Typewriter */}
        <div style={{ animation: "fadeUp 0.7s 0.24s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.85rem,1.6vw,1rem)",
              color: "var(--ink3)",
              marginBottom: "1.2rem",
              letterSpacing: "0.02em",
              minHeight: "1.5rem",
            }}
          >
            <span style={{ color: "var(--cyan)", opacity: 0.6 }}>{">"} </span>
            {typed}
            <span className="cursor-blink" aria-hidden="true" />
          </p>
        </div>

        {/* Description */}
        <div style={{ animation: "fadeUp 0.7s 0.3s ease both", opacity: 0, animationFillMode: "forwards" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--ink3)",
              maxWidth: 560,
              margin: "0 auto 2.5rem",
              lineHeight: 1.85,
              fontFamily: "var(--font-body)",
            }}
          >
            I craft high-performance web products that drive real business results.
            5+ years turning complex problems into elegant, scalable solutions —{" "}
            <span style={{ color: "var(--ink2)" }}>from Lahore to the global stage.</span>
          </p>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
            animation: "fadeUp 0.7s 0.38s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <button
            onClick={() => gs("projects")}
            className="btn-primary text-sm font-bold px-7 py-3 rounded-lg overflow-hidden relative"
            style={{ fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}
          >
            <span className="relative z-10">View Projects →</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm font-semibold px-7 py-3 rounded-lg"
            style={{ fontFamily: "var(--font-body)", textDecoration: "none", letterSpacing: "0.02em" }}
          >
            Download CV ↓
          </a>

          <button
            onClick={() => gs("contact")}
            className="text-sm font-semibold px-7 py-3 rounded-lg transition-all"
            style={{
              fontFamily: "var(--font-body)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--ink2)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(168,85,247,0.4)";
              el.style.color = "var(--purple)";
              el.style.background = "rgba(168,85,247,0.08)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.color = "var(--ink2)";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            Let&apos;s Talk 💬
          </button>
        </div>

        {/* Stats bar */}
        <div
          style={{
            animation: "fadeUp 0.7s 0.46s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              border: "1px solid rgba(0,212,255,0.12)",
              borderRadius: 12,
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(10px)",
              overflow: "hidden",
              maxWidth: 580,
              margin: "0 auto",
              boxShadow: "0 0 40px rgba(0,212,255,0.05), inset 0 0 40px rgba(0,212,255,0.02)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  minWidth: 110,
                  padding: "1.4rem 1rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(0,212,255,0.08)" : "none",
                  transition: "background 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    background: "var(--grad-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--ink4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: "0.35rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech marquee strip */}
        <div
          style={{
            marginTop: "3rem",
            animation: "fadeIn 1s 0.8s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--ink4)",
              letterSpacing: "0.15em",
              marginBottom: "0.8rem",
              textTransform: "uppercase",
            }}
          >
            {"// stack"}
          </p>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)" }}>
            <div
              className="marquee-track"
              style={{
                display: "flex",
                gap: "1.5rem",
                width: "max-content",
              }}
            >
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
                "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "LangChain",
                "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
                "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "LangChain",
              ].map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--ink4)",
                    padding: "0.3rem 0.8rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
