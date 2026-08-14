"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: wire this up to an email service or backend endpoint before launch.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-success">
        <p className="tag-pill">Sent</p>
        <h4>Thanks, {form.name.split(" ")[0] || "there"}.</h4>
        <p>We&apos;ll reply to {form.email || "your email"} soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
      </label>
      <label>
        Email
        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
      </label>
      <label>
        Message
        <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help?" />
      </label>
      <button type="submit" className="btn btn--gold">Send Message →</button>

      <style>{`
        .contact-form { display: flex; flex-direction: column; gap: 16px; margin-top: 8px; }
        .contact-form label {
          display: flex; flex-direction: column; gap: 5px;
          font-weight: 700; font-size: 13px;
          text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--charcoal);
        }
        .contact-form input, .contact-form textarea {
          font-family: var(--font-body);
          font-size: 15px;
          padding: 12px 16px;
          border: 1.5px solid var(--line-strong);
          border-radius: 10px;
          background: var(--off-white);
          color: var(--charcoal);
          resize: vertical;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          outline: none;
          border-color: var(--emerald-light);
          box-shadow: 0 0 0 3px rgba(42,144,96,0.15);
        }
        .contact-form input::placeholder, .contact-form textarea::placeholder { color: var(--muted-light); }
        .contact-form button { align-self: flex-start; margin-top: 4px; }

        .contact-success { padding: 10px 0; }
        .contact-success .tag-pill { margin-bottom: 8px; }
        .contact-success h4 { font-family: var(--font-display); font-size: 22px; color: var(--emerald-deep); margin-top: 10px; }
        .contact-success p { margin-top: 8px; color: var(--muted); font-size: 14.5px; }
      `}</style>
    </form>
  );
}
