"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "home",       icon: "⌂",  label: "Home" },
  { id: "about",      icon: "👤", label: "About" },
  { id: "techstack",  icon: "⚡", label: "Tech Stack" },
  { id: "projects",   icon: "📁", label: "Projects" },
  { id: "experience", icon: "💼", label: "Experience" },
  { id: "contact",    icon: "@",  label: "Contact" },
];

export function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="side-nav" aria-label="Section navigation">
      {sections.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }); }}
          className={active === s.id ? "active" : ""}
          title={s.label}
          aria-label={s.label}
          style={{ fontSize: s.icon.length > 1 ? "0.7rem" : "0.85rem" }}
        >
          {s.icon}
        </a>
      ))}
    </nav>
  );
}
