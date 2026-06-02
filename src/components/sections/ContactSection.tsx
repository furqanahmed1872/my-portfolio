"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, socialLinks } from "@/lib/data";

type State = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [err, setErr] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async () => {
    setErr("");
    if (!form.name || !form.email || !form.message) { setErr("Please fill in name, email and message."); return; }
    setState("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) setState("success");
      else { const d = await res.json(); setErr(d.error ?? "Something went wrong."); setState("error"); }
    } catch { setErr("Network error. Please try again."); setState("error"); }
  };

  const inputStyle: React.CSSProperties = { background: "var(--white)", border: "1px solid var(--border2)", color: "var(--ink)", padding: "0.7rem 0.9rem", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: "0.88rem", outline: "none", width: "100%", transition: "border-color 0.2s" };

  return (
    <section id="contact" style={{ padding: "5.5rem 2.5rem", background: "var(--white)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv"><SectionHeader tag="// contact" title={<>Let&apos;s build something<br />extraordinary</>} /></div>
        <div className="rv" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "4rem", alignItems: "start", marginTop: "3rem" }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem,2.8vw,2.2rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.04em", color: "var(--ink)" }}>
                Have a project?<br />Let&apos;s <span style={{ color: "var(--blue)" }}>make it real.</span>
              </h3>
              <p style={{ color: "var(--ink3)", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "0.9rem", fontFamily: "var(--font-body)" }}>
                Whether you need a full-stack engineer for your team or a technical partner to bring your product to life — I&apos;m ready.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.84rem", color: "#14532d", background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.18)", borderRadius: 8, padding: "0.8rem 1rem", fontFamily: "var(--font-body)" }}>
              <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              <span><strong>Currently open</strong> for full-time roles &amp; freelance projects</span>
            </div>
            <div>
              <p style={{ fontSize: "0.72rem", color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", fontFamily: "var(--font-mono)" }}>Find me on</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {[{ l: "GH", h: socialLinks.github, t: "GitHub" }, { l: "in", h: socialLinks.linkedin, t: "LinkedIn" }, { l: "𝕏", h: socialLinks.twitter, t: "Twitter" }, { l: "IG", h: socialLinks.instagram, t: "Instagram" }, { l: "@", h: socialLinks.email, t: "Email" }].map(s => (
                  <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" title={s.t}
                    style={{ width: 42, height: 42, background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink3)", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.75rem", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "var(--ink)"; el.style.color = "#fff"; el.style.borderColor = "var(--ink)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "var(--bg2)"; el.style.color = "var(--ink3)"; el.style.borderColor = "var(--border)"; }}>
                    {s.l}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", paddingTop: "1.2rem", borderTop: "1px solid var(--border)" }}>
              {[`📧 ${siteConfig.email}`, `📍 ${siteConfig.location} (${siteConfig.timezone})`, "⚡ Responds within 24 hours"].map(m => (
                <p key={m} style={{ fontSize: "0.84rem", color: "var(--ink3)", fontFamily: "var(--font-body)" }}>{m}</p>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 14, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {state === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.7rem" }}>✅</div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "var(--ink)", marginBottom: "0.4rem" }}>Message sent!</div>
                <div style={{ color: "var(--ink3)", fontSize: "0.88rem", fontFamily: "var(--font-body)" }}>I&apos;ll get back to you within 24 hours.</div>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
                  {[{ label: "Name", name: "name", type: "text", ph: "Ahmed Raza" }, { label: "Email", name: "email", type: "email", ph: "ahmed@company.com" }].map(f => (
                    <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{f.label}</label>
                      <input name={f.name} type={f.type} placeholder={f.ph} value={form[f.name as keyof typeof form]} onChange={onChange} style={inputStyle} onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "var(--blue)"; }} onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "var(--border2)"; }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Service</label>
                  <select name="service" value={form.service} onChange={onChange} style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}>
                    <option value="">Select a service...</option>
                    {["Full-Stack Development","Frontend Development","Backend / API Development","AI / ML Integration","Technical Consulting"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Message</label>
                  <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={onChange} rows={5} style={{ ...inputStyle, minHeight: 108, resize: "vertical" }} onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--blue)"; }} onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--border2)"; }} />
                </div>
                {err && <p style={{ color: "#dc2626", fontSize: "0.85rem", fontFamily: "var(--font-body)" }}>{err}</p>}
                <button onClick={submit} disabled={state === "loading"}
                  style={{ width: "100%", background: "var(--ink)", color: "#fff", border: "none", padding: "0.88rem", borderRadius: 8, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.92rem", cursor: "pointer", transition: "all 0.25s", letterSpacing: "0.01em", opacity: state === "loading" ? 0.6 : 1 }}
                  onMouseEnter={e => { if (state !== "loading") { (e.currentTarget as HTMLButtonElement).style.background = "var(--blue)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; } }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--ink)"; (e.currentTarget as HTMLButtonElement).style.transform = ""; }}>
                  {state === "loading" ? "Sending..." : "Send Message →"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
