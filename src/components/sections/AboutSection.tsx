"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { missionCards } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{ padding: "5.5rem 2.5rem", background: "var(--white)" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rv">
          <SectionHeader
            tag="// about_me"
            title={
              <>
                The developer
                <br />
                behind the code
              </>
            }
          />
        </div>

        <div
          className="rv"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "4rem",
            alignItems: "start",
            marginTop: "3rem",
          }}
        >
          {/* Portrait card — with topographic bg like ref image 1 */}
          <div style={{ position: "relative" }}>
            <div
              className="topo-bg"
              style={{
                background: "var(--blue-light)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                aspectRatio: "4/5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "11rem",
                  fontWeight: 800,
                  color: "rgba(26,79,214,0.1)",
                  userSelect: "none",
                  lineHeight: 1,
                }}
              >
                F
              </span>
              <div
                style={{
                  position: "absolute",
                  top: "0.8rem",
                  right: "0.8rem",
                  width: 34,
                  height: 34,
                  borderTop: "2px solid var(--blue)",
                  borderRight: "2px solid var(--blue)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderRadius: 9,
                  padding: "0.85rem 1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--ink)",
                  }}
                >
                  Furqan
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--ink3)",
                    marginTop: "0.15rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  📍 Lahore, Pakistan · UTC+5
                </div>
              </div>
            </div>
            {/* Floating snippets */}
            <div
              className="float-snip-1"
              style={{
                position: "absolute",
                top: "-1.25rem",
                right: "-1.5rem",
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: 9,
                padding: "0.85rem 1.1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                lineHeight: 1.75,
                color: "var(--ink3)",
                zIndex: 3,
                display: "none",
              }}
              id="fs1"
            >
              <span style={{ color: "var(--blue)" }}>const</span> dev = {"{"}
              <br />
              &nbsp;name:{" "}
              <span style={{ color: "var(--teal)" }}>&quot;Furqan&quot;</span>,
              <br />
              &nbsp;exp: <span style={{ color: "var(--blue)" }}>5</span>{" "}
              <span style={{ color: "var(--ink4)" }}>// yrs</span>
              <br />
              {"}"}
            </div>
            <div
              className="float-snip-2"
              style={{
                position: "absolute",
                bottom: "2.5rem",
                left: "-1.75rem",
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: 9,
                padding: "0.85rem 1.1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                lineHeight: 1.75,
                color: "var(--ink3)",
                zIndex: 3,
                display: "none",
              }}
              id="fs2"
            >
              <span style={{ color: "var(--ink4)" }}>// mission</span>
              <br />
              <span style={{ color: "var(--purple)" }}>buildProducts</span>(
              <br />
              &nbsp;
              <span style={{ color: "var(--teal)" }}>
                &quot;that matter&quot;
              </span>
              <br />)
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingTop: "0.5rem",
            }}
          >
            <p
              style={{
                color: "var(--ink2)",
                fontSize: "1rem",
                lineHeight: 1.9,
                fontFamily: "var(--font-body)",
              }}
            >
              I&apos;m <strong style={{ color: "var(--ink)" }}>Furqan</strong>,
              a full-stack developer from{" "}
              <strong style={{ color: "var(--ink)" }}>Lahore, Pakistan</strong>{" "}
              with 5+ years building end-to-end web products. I don&apos;t just
              write code — I engineer solutions that create measurable impact
              for businesses globally.
            </p>

            {/* Mission/Goal cards — 2×2 grid, coloured like ref */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
              }}
            >
              {missionCards.map((mc) => (
                <div
                  key={mc.label}
                  style={{
                    background: mc.bg,
                    border: `1px solid ${mc.border}`,
                    borderRadius: 10,
                    padding: "1.1rem 1.2rem",
                    transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "";
                  }}
                >
                  <div style={{ fontSize: "0.9rem", marginBottom: "0.45rem" }}>
                    {mc.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: mc.labelColor,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {mc.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.83rem",
                      lineHeight: 1.6,
                      color: mc.textColor,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {mc.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Status */}
            <div
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: 9,
                padding: "1rem 1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
              }}
            >
              {[
                {
                  color: "#22c55e",
                  label: "Currently building:",
                  val: "AI-powered SaaS tools for SMBs",
                },
                {
                  color: "var(--blue)",
                  label: "Open to:",
                  val: "Full-time roles & high-impact freelance",
                },
                {
                  color: "var(--purple)",
                  label: "Working style:",
                  val: "Remote-first, async-friendly, ships on time",
                },
              ].map((r) => (
                <div
                  key={r.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.65rem",
                    fontSize: "0.87rem",
                    color: "var(--ink2)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: r.color,
                      flexShrink: 0,
                      marginTop: 5,
                    }}
                  />
                  <span>
                    <strong style={{ color: "var(--ink)" }}>{r.label}</strong>{" "}
                    {r.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {[
                "Clean Architecture",
                "Performance Obsessed",
                "API Design",
                "Open Source",
                "Async-First",
                "Technical Writing",
              ].map((c) => (
                <span
                  key={c}
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    color: "var(--ink3)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: 20,
                    fontSize: "0.78rem",
                    cursor: "default",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.background = "var(--blue)";
                    el.style.color = "#fff";
                    el.style.borderColor = "var(--blue)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.background = "var(--bg2)";
                    el.style.color = "var(--ink3)";
                    el.style.borderColor = "var(--border)";
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.getElementById('fs1') && (document.getElementById('fs1').style.display = 'block');
        document.getElementById('fs2') && (document.getElementById('fs2').style.display = 'block');
      `,
        }}
      />
    </section>
  );
}
