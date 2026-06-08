'use client';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Hi, my name is</h1>
      <h2>Furqan Ahmed.</h2>
      <h3>I build things for the web.</h3>
      <p>
        I&apos;m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I&apos;m focused on building accessible, human-centered
        products at{' '}
        <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
          Upstatement
        </a>
        .
      </p>
      <div className="hero-cta">
        <a href="#work" className="btn">
          Check out my work!
        </a>
      </div>
    </section>
  );
}
