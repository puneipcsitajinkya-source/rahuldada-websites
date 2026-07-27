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
      <button type="submit" className="btn btn--clay">Send message</button>

      <style>{`
        .contact-form { display: flex; flex-direction: column; gap: 16px; margin-top: 20px; }
        .contact-form label { display: flex; flex-direction: column; gap: 6px; font-weight: 600; font-size: 14px; color: var(--forest-deep); }
        .contact-form input, .contact-form textarea {
          font-family: var(--font-body);
          font-size: 15px;
          padding: 12px 14px;
          border: 1.5px solid var(--line);
          border-radius: 4px 12px 4px 12px;
          background: var(--cream);
          color: var(--ink);
          resize: vertical;
        }
        .contact-form input:focus, .contact-form textarea:focus { outline: 2px solid var(--sky); border-color: var(--sky); }
        .contact-form button { align-self: flex-start; margin-top: 4px; }

        .contact-success { padding: 10px 0; }
        .contact-success h4 { margin-top: 10px; font-family: var(--font-display); font-size: 20px; }
        .contact-success p { margin-top: 8px; color: rgba(22,36,28,0.72); }
      `}</style>
    </form>
  );
}
