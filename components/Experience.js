'use client';
import { useState } from 'react';
import useReveal from './useReveal';

const jobs = [
  {
    company: 'Upstatement',
    url: 'https://example.com',
    title: 'Lead Engineer',
    range: 'May 2018 — Present',
    duties: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Level, and many more',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions for future projects and internal tools',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
      'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship',
    ],
  },
  {
    company: 'Apple',
    url: 'https://example.com',
    title: 'UI Engineer Co-op',
    range: 'July — December 2017',
    duties: [
      'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
      'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
      "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to Apple Music on any platform",
      'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps',
    ],
  },
  {
    company: 'Scout Studio',
    url: 'https://example.com',
    title: 'Studio Developer, Intern',
    range: 'January — June 2017',
    duties: [
      'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community',
      'Worked with a team of student designers, engineers, and fellow developers to build a marketing website for a local nonprofit organization using GatsbyJS',
    ],
  },
  {
    company: 'Starry',
    url: 'https://example.com',
    title: 'Software Engineer Co-op',
    range: 'July — December 2016',
    duties: [
      "Engineered and maintained major features of Starry's customer-facing iOS app using Objective-C",
      'Worked alongside engineers and the iOS team to build a data-driven social sharing extension',
      'Independently designed and built a tool to generate targeted and personalized Mailchimp campaigns',
    ],
  },
  {
    company: 'MullenLowe',
    url: 'https://example.com',
    title: 'Creative Technologist Intern',
    range: 'July — August 2016',
    duties: [
      'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
      'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
      'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useReveal();

  return (
    <section id="experience" className="section reveal" ref={ref}>
      <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      <div className="inner">
        <div role="tablist" aria-label="Job tabs" className="tab-list">
          {jobs.map((job, i) => (
            <div key={job.company} role="presentation">
              <button
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${i}`}
                id={`tab-${i}`}
                className={activeTab === i ? 'active' : ''}
                onClick={() => setActiveTab(i)}
              >
                <span>{job.company}</span>
              </button>
            </div>
          ))}
          <div
            className="tab-highlight"
            style={{ transform: `translateY(calc(${activeTab} * var(--tab-height)))` }}
          />
        </div>

        <div className="tab-panels">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              className="tab-panel"
              hidden={activeTab !== i}
              style={{
                opacity: activeTab === i ? 1 : 0,
                transform: activeTab === i ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.25s var(--easing), transform 0.25s var(--easing)',
              }}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} className="inline-link" target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                </span>
              </h3>
              <p className="range">{job.range}</p>
              <ul>
                {job.duties.map((duty, j) => (
                  <li key={j}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
