'use client';
import useReveal from './useReveal';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Eleventy',
  'Node.js',
  'WordPress',
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section reveal" ref={ref}>
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <div>
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog button taught me a
              lot about HTML &amp; CSS!
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at{' '}
              <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                an advertising agency
              </a>
              ,{' '}
              <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                a start-up
              </a>
              ,{' '}
              <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                a huge corporation
              </a>
              , and{' '}
              <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive products and digital
              experiences at{' '}
              <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                Upstatement
              </a>{' '}
              for a variety of clients.
            </p>
            <p>
              I also recently{' '}
              <a href="https://example.com" className="inline-link" target="_blank" rel="noopener noreferrer">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about-pic">
          <div className="wrapper">
            {/* Placeholder image – replace with your actual photo */}
            <img
              src="https://via.placeholder.com/500x500/1a1a1a/64ffda?text=Photo"
              alt="John Doe"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
