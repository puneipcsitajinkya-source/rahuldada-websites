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
    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-success">
        <p className="tag-pill tag-pill--green">Sent</p>
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
      <button type="submit" className="btn btn--primary">Send Message →</button>

      <style>{`
        .contact-form { display: flex; flex-direction: column; gap: 16px; margin-top: 8px; }
        .contact-form label {
          display: flex; flex-direction: column; gap: 6px;
          font-weight: 700; font-size: 13px;
          text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--charcoal);
        }
        .contact-form input, .contact-form textarea {
          font-family: var(--font-body);
          font-size: 15px;
          padding: 13px 18px;
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          border-radius: 12px;
          background: var(--white);
          color: var(--charcoal);
          resize: vertical;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          outline: none;
          border-color: var(--purple);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.12);
        }
        .contact-form input::placeholder, .contact-form textarea::placeholder { color: var(--muted-light); }
        .contact-form button { align-self: flex-start; margin-top: 4px; }

        .contact-success { padding: 16px 0; }
        .contact-success .tag-pill { margin-bottom: 8px; }
        .contact-success h4 { font-family: var(--font-display); font-size: 22px; color: var(--charcoal); margin-top: 10px; }
        .contact-success p { margin-top: 8px; color: var(--muted); font-size: 15px; }
      `}</style>
    </form>
  );
}
