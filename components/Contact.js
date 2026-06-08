'use client';
import { useState } from 'react';
import useReveal from './useReveal';

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire up your backend / emailjs / formspree here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="contact reveal" ref={ref}>
        <p className="section-overline">What&apos;s Next?</p>
        <h2>Get In Touch</h2>
        <p>
          Have a project in mind, a question, or just want to say hello? Fill out the form
          below and I&apos;ll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="form-success">
            <div className="checkmark">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ color: 'var(--lightest-slate)', marginBottom: '10px' }}>Message Sent!</h3>
            <p>Thanks for reaching out. I&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project, idea, or question..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}