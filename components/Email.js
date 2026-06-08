'use client';

export default function Email() {
  return (
    <div className="side-element right">
        <a
        href="mailto:hello@johndoe.com"
        style={{
          color: 'var(--light-slate)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fz-xxs)',
          letterSpacing: '0.1em',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transition: 'var(--transition)',
          paddingBottom: '10px',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--light-slate)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        hello@johndoe.com
      </a>
      <div style={{
        width: '1px',
        height: '90px',
        backgroundColor: 'var(--light-slate)',
      }} />
    </div>
  );
}