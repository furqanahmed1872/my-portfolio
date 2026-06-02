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

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-10 ${
          scrolled ? "bg-[rgba(245,243,238,0.92)] backdrop-blur-xl border-b shadow-sm py-3" : "bg-transparent py-5"
        }`}
        style={{ borderColor: "var(--border)" }}
      >
        <nav className="max-w-[1100px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); gs("home"); }}
            className="font-heading font-extrabold text-xl"
            style={{ letterSpacing: "-0.03em", color: "var(--ink)" }}
          >
            {"<C/>"}
            <span style={{ color: "var(--blue)" }}> Furqan</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={`#${l.href}`}
                  onClick={e => { e.preventDefault(); gs(l.href); }}
                  className="text-sm font-medium transition-colors hover:text-blue-600"
                  style={{ color: "var(--ink3)", fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-3">
            {[
              { label: "IG", href: socialLinks.instagram, title: "Instagram" },
              { label: "GH", href: socialLinks.github, title: "GitHub" },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="text-xs font-bold font-mono px-3 py-1.5 rounded-md border transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
                style={{ color: "var(--ink3)", borderColor: "var(--border2)", fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </a>
            ))}
            <button
              onClick={() => gs("contact")}
              className="text-sm font-semibold px-4 py-1.5 rounded-md transition-all hover:-translate-y-px"
              style={{ background: "var(--ink)", color: "#fff", fontFamily: "var(--font-body)" }}
            >
              Hire Me
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[22px] h-[1.5px]" style={{ background: "var(--ink3)" }} />
            <span className="block w-[22px] h-[1.5px]" style={{ background: "var(--ink3)" }} />
            <span className="block w-[22px] h-[1.5px]" style={{ background: "var(--ink3)" }} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-8 text-xl border-none bg-transparent cursor-pointer"
              style={{ color: "var(--ink3)", fontFamily: "var(--font-body)" }}
            >
              ✕
            </button>
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={`#${l.href}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={e => { e.preventDefault(); gs(l.href); setOpen(false); }}
                className="font-heading font-extrabold no-underline"
                style={{ fontSize: "2.2rem", color: "var(--ink)", letterSpacing: "-0.04em" }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
