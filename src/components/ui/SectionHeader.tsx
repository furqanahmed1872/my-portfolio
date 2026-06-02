interface Props { tag: string; title: React.ReactNode; sub?: string; }
export function SectionHeader({ tag, title, sub }: Props) {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500, marginBottom: "0.55rem" }}>{tag}</p>
      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.9rem,3.5vw,2.7rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.05, marginBottom: "0.85rem" }}>{title}</h2>
      <div style={{ width: 32, height: 2, background: "var(--blue)", margin: "1.1rem 0" }} />
      {sub && <p style={{ fontSize: "0.98rem", color: "var(--ink3)", maxWidth: 480, lineHeight: 1.8 }}>{sub}</p>}
    </div>
  );
}
