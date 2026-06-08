'use client';
import { allProjects } from '../../components/Work';
import Link from 'next/link';

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Archive() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--navy)' }}>
      <div className="archive-page">
        <Link href="/#work" className="archive-back">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          John Doe
        </Link>

        <h1 className="archive-title">All Projects</h1>
        <p className="archive-subtitle">
          A complete list of things I&apos;ve built
        </p>

        <table className="archive-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {allProjects.map((project) => (
              <tr key={project.title}>
                <td className="year">{project.year}</td>
                <td className="title">
                  {project.title}
                  {project.featured && (
                    <span style={{
                      marginLeft: 10,
                      fontSize: 'var(--fz-xxs)',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--green)',
                      background: 'var(--green-tint)',
                      border: '1px solid rgba(100,255,218,0.2)',
                      borderRadius: 3,
                      padding: '2px 6px',
                      verticalAlign: 'middle',
                    }}>
                      ★ Featured
                    </span>
                  )}
                </td>
                <td className="tech">{project.tech.join(' · ')}</td>
                <td className="links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="External link">
                      <ExternalIcon />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}