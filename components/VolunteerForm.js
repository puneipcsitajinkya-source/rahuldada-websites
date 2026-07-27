"use client";

import { useState } from "react";

const DAYS = ["Weekday mornings", "Weekday evenings", "Weekends", "Flexible / on-call"];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", address: "", occupation: "", skills: "", days: "",
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: wire this up to an email service or backend endpoint before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <p className="tag-pill">Received</p>
        <h3>Thank you, {form.name.split(" ")[0] || "friend"}.</h3>
        <p>Someone from the Mandal will reach out on {form.mobile || "the number you shared"} before the next drive.</p>
      </div>
    );
  }

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </label>
        <label>
          Mobile number
          <input required name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile number" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </label>
        <label>
          Occupation
          <input name="occupation" value={form.occupation} onChange={handleChange} placeholder="Student, farmer, teacher…" />
        </label>
      </div>
      <label>
        Address
        <input name="address" value={form.address} onChange={handleChange} placeholder="Village / town, taluka" />
      </label>
      <label>
        Skills you can offer
        <input name="skills" value={form.skills} onChange={handleChange} placeholder="Driving, teaching, first aid, photography…" />
      </label>
      <label>
        Days you&apos;re usually available
        <select name="days" value={form.days} onChange={handleChange}>
          <option value="">Select an option</option>
          {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </label>
      <button type="submit" className="btn btn--clay">Join as a volunteer</button>

      <style>{`
        .volunteer-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
        .volunteer-form label { display: flex; flex-direction: column; gap: 6px; font-weight: 600; font-size: 14px; color: var(--forest-deep); }
        .volunteer-form input, .volunteer-form select {
          font-family: var(--font-body);
          font-size: 15px;
          padding: 12px 14px;
          border: 1.5px solid var(--line);
          border-radius: 4px 12px 4px 12px;
          background: var(--cream);
          color: var(--ink);
        }
        .volunteer-form input:focus, .volunteer-form select:focus {
          outline: 2px solid var(--sky);
          border-color: var(--sky);
        }
        .volunteer-form button { align-self: flex-start; margin-top: 6px; }

        .form-success {
          padding: 34px;
          background: var(--leaf-tint);
          border-radius: 4px 22px 4px 22px;
          text-align: center;
        }
        .form-success h3 { margin-top: 10px; }
        .form-success p:last-child { margin-top: 10px; color: rgba(22,36,28,0.75); }
      `}</style>
    </form>
  );
}
