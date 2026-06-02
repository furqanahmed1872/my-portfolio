import { siteConfig } from "@/lib/data";
export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "2rem 2.5rem" }}>
      <div className="max-w-[1080px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="font-heading font-extrabold text-lg text-white" style={{ letterSpacing: "-0.03em" }}>
          {"<C/>"}<span style={{ color: "var(--blue-mid)" }}> Furqan</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", fontFamily: "var(--font-body)" }}>
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with care in Lahore, Pakistan.
        </p>
        <div className="flex gap-6">
          {["Top","Work","Contact"].map(l => (
            <a key={l} href={`#${l === "Top" ? "home" : l.toLowerCase()}`}
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", textDecoration: "none", fontFamily: "var(--font-body)" }}
              className="hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
