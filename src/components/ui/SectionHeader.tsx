interface Props { tag: string; title: React.ReactNode; sub?: string; }

export function SectionHeader({ tag, title, sub }: Props) {
  return (
    <div>
      {/* Tag line */}
      <div className="flex items-center gap-3 mb-4">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--cyan)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 500,
          }}
        >
          {tag}
        </span>
        <div className="section-line" />
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem,4vw,3rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "var(--ink)",
          lineHeight: 1.05,
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>

      {/* Accent line */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: sub ? "1rem" : 0 }}>
        <div
          style={{
            width: 28,
            height: 2,
            background: "var(--grad-accent)",
            borderRadius: 1,
            boxShadow: "0 0 8px rgba(0,212,255,0.5)",
          }}
        />
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
      </div>

      {sub && (
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--ink3)",
            maxWidth: 480,
            lineHeight: 1.8,
            fontFamily: "var(--font-body)",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
