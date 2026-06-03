"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/lib/data";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "techstack", label: "Tech Stack" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

function gs(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const h = () => {
      setScrolled(window.scrollY > 20);
      // Track active section
      const sections = ["home", "about", "techstack", "projects", "experience", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-8 ${
          scrolled
            ? "nav-blur py-3"
            : "bg-transparent py-5"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
          background: scrolled ? "rgba(8,11,18,0.85)" : "transparent",
        }}
      >
        <nav className="max-w-[1100px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={e => { e.preventDefault(); gs("home"); }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                color: "var(--cyan)",
              }}
            >
              {"<"}
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--ink)",
                letterSpacing: "0.02em",
              }}
            >
              Furqan
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                color: "var(--cyan)",
              }}
            >
              {"/>"}
            </span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-1 list-none">
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={`#${l.href}`}
                  onClick={e => { e.preventDefault(); gs(l.href); }}
                  className="relative text-sm font-medium transition-all px-4 py-2 rounded-lg block"
                  style={{
                    color: activeSection === l.href ? "var(--cyan)" : "var(--ink3)",
                    fontFamily: "var(--font-body)",
                    background: activeSection === l.href ? "rgba(0,212,255,0.08)" : "transparent",
                  }}
                >
                  {l.label}
                  {activeSection === l.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--cyan)" }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { label: "GH", href: socialLinks.github, title: "GitHub" },
              { label: "IN", href: socialLinks.linkedin, title: "LinkedIn" },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="text-xs font-bold px-3 py-1.5 rounded-md border transition-all"
                style={{
                  color: "var(--ink3)",
                  borderColor: "rgba(0,212,255,0.15)",
                  fontFamily: "var(--font-mono)",
                  background: "rgba(255,255,255,0.03)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--cyan)";
                  el.style.borderColor = "rgba(0,212,255,0.4)";
                  el.style.background = "rgba(0,212,255,0.08)";
                  el.style.boxShadow = "0 0 12px rgba(0,212,255,0.15)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--ink3)";
                  el.style.borderColor = "rgba(0,212,255,0.15)";
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.boxShadow = "none";
                }}
              >
                {s.label}
              </a>
            ))}
            <button
              onClick={() => gs("contact")}
              className="btn-primary text-sm font-semibold px-5 py-2 rounded-lg overflow-hidden relative"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="relative z-10">Hire Me</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            {[0,1,2].map(i => (
              <motion.span
                key={i}
                className="block h-[1.5px]"
                style={{ background: "var(--cyan)", width: i === 1 ? "14px" : "22px" }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
            style={{ background: "rgba(8,11,18,0.97)", backdropFilter: "blur(20px)" }}
          >
            {/* Grid bg */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-8 text-xl border-none bg-transparent"
              style={{ color: "var(--ink3)", fontFamily: "var(--font-body)" }}
            >
              ✕
            </button>

            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={`#${l.href}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
                onClick={e => { e.preventDefault(); gs(l.href); setOpen(false); }}
                className="relative no-underline py-3 px-8 group"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--ink)",
                  letterSpacing: "-0.03em",
                }}
              >
                <span className="group-hover:gradient-text transition-all">{l.label}</span>
                <motion.span
                  className="absolute left-0 bottom-2 h-px"
                  style={{ background: "var(--grad-accent)" }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8"
              style={{ color: "var(--ink4)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
            >
              {"// Lahore, Pakistan · UTC+5"}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
