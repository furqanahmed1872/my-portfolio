"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, socialLinks } from "@/lib/data";

type State = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [err, setErr] = useState("");

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async () => {
    setErr("");
    if (!form.name || !form.email || !form.message) {
      setErr("Please fill in name, email and message.");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setState("success");
      else {
        const d = await res.json();
        setErr(d.error ?? "Something went wrong.");
        setState("error");
      }
    } catch {
      setErr("Network error. Please try again.");
      setState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(0,212,255,0.12)",
    color: "var(--ink)",
    padding: "0.75rem 1rem",
    borderRadius: 10,
    fontFamily: "var(--font-body)",
    fontSize: "0.88rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const onFocus = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.target.style.borderColor = "rgba(0,212,255,0.5)";
    e.target.style.boxShadow = "0 0 0 2px rgba(0,212,255,0.08)";
  };
  const onBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.target.style.borderColor = "rgba(0,212,255,0.12)";
    e.target.style.boxShadow = "";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 1.25rem",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "20%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="rv">
          <SectionHeader
            tag="// contact"
            title={
              <>
                Let&apos;s build something
                <br />
                <span className="gradient-text">extraordinary</span>
              </>
            }
          />
        </div>

        <div className="rv contact-grid" style={{ marginTop: "3rem" }}>
          {/* Left */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem,3vw,2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                }}
              >
                Have a project?
                <br />
                Let&apos;s{" "}
                <span
                  style={{
                    color: "var(--cyan)",
                    textShadow: "0 0 20px rgba(0,212,255,0.5)",
                  }}
                >
                  make it real.
                </span>
              </h3>
              <p
                style={{
                  color: "var(--ink3)",
                  fontSize: "0.94rem",
                  lineHeight: 1.85,
                  marginTop: "1rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Whether you need a full-stack engineer or a technical partner to
                bring your product to life — I&apos;m ready.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                fontSize: "0.84rem",
                color: "var(--green)",
                background: "rgba(0,255,136,0.05)",
                border: "1px solid rgba(0,255,136,0.15)",
                borderRadius: 10,
                padding: "0.85rem 1.1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--green)",
                  flexShrink: 0,
                  boxShadow: "0 0 8px var(--green)",
                }}
              />
              <span>
                <strong>Currently open</strong> for full-time roles &amp;
                freelance projects
              </span>
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--ink4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "0.8rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                // find me on
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {[
                  { l: "GH", h: socialLinks.github, t: "GitHub" },
                  { l: "in", h: socialLinks.linkedin, t: "LinkedIn" },
                  { l: "𝕏", h: socialLinks.twitter, t: "Twitter" },
                  { l: "IG", h: socialLinks.instagram, t: "Instagram" },
                  { l: "@", h: socialLinks.email, t: "Email" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.t}
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(0,212,255,0.1)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--ink3)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      textDecoration: "none",
                      transition: "all 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(0,212,255,0.08)";
                      el.style.color = "var(--cyan)";
                      el.style.borderColor = "rgba(0,212,255,0.3)";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "rgba(255,255,255,0.03)";
                      el.style.color = "var(--ink3)";
                      el.style.borderColor = "rgba(0,212,255,0.1)";
                      el.style.transform = "";
                    }}
                  >
                    {s.l}
                  </a>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(0,212,255,0.08)",
              }}
            >
              {[
                `📧 ${siteConfig.email}`,
                `📍 ${siteConfig.location} (${siteConfig.timezone})`,
                "⚡ Responds within 24 hours",
              ].map((m) => (
                <p
                  key={m}
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--ink3)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {m}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(0,212,255,0.1)",
              borderRadius: 16,
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="corner-bracket tl" />
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />
            <div className="corner-bracket br" />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)",
              }}
            />

            {state === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "var(--ink)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message sent!
                </div>
                <div
                  style={{
                    color: "var(--ink3)",
                    fontSize: "0.88rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  I&apos;ll get back to you within 24 hours.
                </div>
              </div>
            ) : (
              <>
                <div className="form-row">
                  {[
                    {
                      label: "Name",
                      name: "name",
                      type: "text",
                      ph: "Ahmed Raza",
                    },
                    {
                      label: "Email",
                      name: "email",
                      type: "email",
                      ph: "ahmed@company.com",
                    },
                  ].map((f) => (
                    <div
                      key={f.name}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                      }}
                    >
                      <label
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.67rem",
                          color: "var(--cyan)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          opacity: 0.7,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        type={f.type}
                        placeholder={f.ph}
                        value={form[f.name as keyof typeof form]}
                        onChange={onChange}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.67rem",
                      color: "var(--cyan)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      opacity: 0.7,
                    }}
                  >
                    Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      appearance: "none",
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  >
                    <option value="" style={{ background: "var(--bg2)" }}>
                      Select a service...
                    </option>
                    {[
                      "Full-Stack Development",
                      "Frontend Development",
                      "Backend / API Development",
                      "AI / ML Integration",
                      "Technical Consulting",
                    ].map((o) => (
                      <option key={o} style={{ background: "var(--bg2)" }}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.67rem",
                      color: "var(--cyan)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      opacity: 0.7,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    style={{
                      ...inputStyle,
                      minHeight: 110,
                      resize: "vertical",
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                {err && (
                  <p
                    style={{
                      color: "var(--magenta)",
                      fontSize: "0.83rem",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ⚠ {err}
                  </p>
                )}

                <button
                  onClick={submit}
                  disabled={state === "loading"}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    border: "none",
                    padding: "0.9rem",
                    borderRadius: 10,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: state === "loading" ? "not-allowed" : "pointer",
                    letterSpacing: "0.02em",
                    opacity: state === "loading" ? 0.6 : 1,
                  }}
                >
                  <span className="relative z-10">
                    {state === "loading" ? "Sending..." : "Send Message →"}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
