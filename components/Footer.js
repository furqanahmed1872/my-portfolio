'use client';

export default function Footer() {
  return (
    <footer>
      <ul className="footer-links" aria-label="Social media links">
        {[
          { name: 'GitHub', url: 'https://github.com' },
          { name: 'LinkedIn', url: 'https://linkedin.com' },
          { name: 'Twitter', url: 'https://twitter.com' },
          { name: 'Instagram', url: 'https://instagram.com' },
        ].map(({ name, url }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
          </li>
        ))}
      </ul>
      <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer">
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xxs)', lineHeight: 1.75, color: 'var(--slate)' }}>
            Designed &amp; Built by Furqan Ahmed
          </p>
        </div>
      </a>
    </footer>
  );
}
