'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useReveal from './useReveal';

export const allProjects = [
  {
    year: '2024',
    title: 'Halcyon Theme',
    url: 'https://example.com',
    github: 'https://github.com',
    cover: 'https://picsum.photos/seed/halcyon/700/440',
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and GitHub.',
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    featured: true,
  },
  {
    year: '2023',
    title: 'Spotify Profile',
    url: 'https://example.com',
    github: 'https://github.com',
    cover: 'https://picsum.photos/seed/spotify/700/440',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
    featured: true,
  },
  {
    year: '2023',
    title: 'Build a Spotify Connected App',
    url: 'https://example.com',
    github: 'https://github.com',
    cover: 'https://picsum.photos/seed/course/700/440',
    description:
      'Having struggled with understanding how to get a Node.js app deployed to Heroku, I wrote a comprehensive tutorial covering everything from explaining APIs and OAuth to designing and building a React app.',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
    featured: true,
  },
  {
    year: '2022',
    title: 'Integrating Algolia Search with WordPress Multisite',
    description: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia.',
    tech: ['Algolia', 'Wordpress', 'PHP'],
    github: 'https://github.com',
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/algolia/700/440',
    featured: false,
  },
  {
    year: '2022',
    title: 'Time to Have More Fun',
    description: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com',
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/travel/700/440',
    featured: false,
  },
  {
    year: '2022',
    title: 'Building a Headless Mobile App CMS',
    description: 'Find out how we built a custom headless CMS with Node, Express, Mongoose, and Netlify.',
    tech: ['Node', 'Express', 'Mongoose', 'Netlify'],
    github: null,
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/cms/700/440',
    featured: false,
  },
  {
    year: '2021',
    title: 'OctoProfile',
    description: 'A nicer look at your GitHub profile and repo stats with data visualizations of your top languages, starred repos, and contributions.',
    tech: ['Next.js', 'Chart.js', 'GitHub API'],
    github: 'https://github.com',
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/octo/700/440',
    featured: false,
  },
  {
    year: '2021',
    title: 'Google Keep Clone',
    description: 'A simple Google Keep clone built with Vue and Firebase.',
    tech: ['Vue', 'Firebase'],
    github: 'https://github.com',
    url: null,
    cover: 'https://picsum.photos/seed/keep/700/440',
    featured: false,
  },
  {
    year: '2020',
    title: 'Apple Music Embeddable Web Player Widget',
    description: 'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.',
    tech: ['MusicKit.js', 'CSS', 'JavaScript'],
    github: null,
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/apple/700/440',
    featured: false,
  },
  {
    year: '2020',
    title: 'Personal Portfolio v3',
    description: 'Third iteration of my personal portfolio site built with Gatsby and hosted on Netlify.',
    tech: ['Gatsby', 'Styled Components', 'Netlify'],
    github: 'https://github.com',
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/port3/700/440',
    featured: false,
  },
  {
    year: '2019',
    title: 'Markdown Previewer',
    description: 'A real-time Markdown previewer built with React, featuring syntax highlighting and live updates as you type.',
    tech: ['React', 'Marked.js', 'CSS'],
    github: 'https://github.com',
    url: null,
    cover: 'https://picsum.photos/seed/markdown/700/440',
    featured: false,
  },
  {
    year: '2019',
    title: 'Budget Tracker App',
    description: 'A full-stack budget tracking app with charts, categories, recurring entries, and export to CSV.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com',
    url: 'https://example.com',
    cover: 'https://picsum.photos/seed/budget/700/440',
    featured: false,
  },
];

const featuredProjects = allProjects.filter((p) => p.featured);
const otherProjects = allProjects.filter((p) => !p.featured);
const VISIBLE_COUNT = 6;

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="folder-icon">
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>
        <img
          src={project.cover || `https://picsum.photos/seed/${project.title}/700/440`}
          alt={project.title}
          className="modal-img"
        />
        <div className="modal-body">
          <p className="modal-overline">Featured Project</p>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.description}</p>
          <ul className="modal-tech">
            {project.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="modal-links">
            {project.github && (
              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px' }}>
                <span style={{ width: 16, height: 16, display: 'inline-flex' }}><GithubIcon /></span> GitHub
              </a>
            )}
            {project.url && (
              <a href={project.url} className="btn" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px' }}>
                <span style={{ width: 16, height: 16, display: 'inline-flex' }}><ExternalIcon /></span> Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const featuredRef = useReveal();
  const otherRef = useReveal();
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleOther = showAll ? otherProjects : otherProjects.slice(0, VISIBLE_COUNT);

  return (
    <>
      {/* Featured Projects */}
      <section id="work" className="section reveal" ref={featuredRef}>
        <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
        <ul className="projects-list">
          {featuredProjects.map((project) => (
            <li key={project.title}>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setSelectedProject(project); }}
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                      <GithubIcon />
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <div
                className="project-image"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="img-wrapper">
                  <img
                    src={project.cover}
                    alt={project.title}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Other Projects */}
      <section className="section reveal" ref={otherRef}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 5vw, var(--fz-heading))', color: 'var(--lightest-slate)', marginBottom: '10px' }}>
          Other Noteworthy Projects
        </h2>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          <a
            href="/archive"
            className="inline-link"
            style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-sm)' }}
          >
            view the full archive
          </a>
        </p>
        <ul className="other-projects-grid">
          {visibleOther.map((project) => (
            <li key={project.title}>
              <div
                className="other-project-card"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              >
                <div className="other-project-top">
                  <FolderIcon />
                  <div className="other-project-links" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                      </a>
                    )}
                    {project.url && (
                      <a href={project.url} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="other-project-name">{project.title}</h3>
                  <p className="other-project-description">{project.description}</p>
                </div>
                <ul className="other-project-tech-list">
                  {project.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* Show More / Show Less */}
        {otherProjects.length > VISIBLE_COUNT && (
          <div className="show-more-btn">
            <button
              className="btn"
              onClick={() => {
                if (showAll) setShowAll(false);
                else router.push('/archive');
              }}
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}