'use client';
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { name: 'About',      url: '#about'      },
  { name: 'Experience', url: '#experience' },
  { name: 'Work',       url: '#work'       },
  { name: 'Contact',    url: '#contact'    },
];

export default function Nav() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < 50) {
        setScrolledUp(false);
        setScrolledDown(false);
      } else if (current > lastScrollY.current) {
        setScrolledDown(true);
        setScrolledUp(false);
      } else {
        setScrolledUp(true);
        setScrolledDown(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = [
    'nav',
    scrolledUp ? 'scrolled-up' : '',
    scrolledDown ? 'scrolled-down' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={navClass} style={{ opacity: isMounted ? 1 : 0, transition: 'all 0.35s var(--easing)' }}>
        {/* Logo */}
        <div className="nav-logo">
          <a href="/" aria-label="home">
            <div className="hex-logo">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" stroke="var(--green)" strokeWidth="5" fill="none" />
              </svg>
              <span className="logo-letter">F</span>
            </div>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="main navigation">
          <ol>
            {NAV_LINKS.map(({ name, url }, i) => (
              <li key={name} style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ol>
          <div className="resume-btn" style={{ animationDelay: '500ms' }}>
            <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </nav>

        {/* Hamburger (mobile) */}
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          <ol style={{ counterReset: 'item 0' }}>
            {NAV_LINKS.map(({ name, url }) => (
              <li key={name}>
                <a href={url} onClick={() => setMenuOpen(false)}>{name}</a>
              </li>
            ))}
          </ol>
          <a href="/resume.pdf" className="btn resume-btn" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>
    </>
  );
}
