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
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <p className="tag-pill tag-pill--green">Received</p>
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
      <button type="submit" className="btn btn--primary">Join as a Volunteer →</button>

      <style>{`
        .volunteer-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
        .volunteer-form label {
          display: flex; flex-direction: column; gap: 6px;
          font-weight: 700; font-size: 13px;
          text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--charcoal);
        }
        .volunteer-form input, .volunteer-form select {
          font-family: var(--font-body);
          font-size: 15px;
          padding: 13px 18px;
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          border-radius: 12px;
          background: var(--white);
          color: var(--charcoal);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .volunteer-form input:focus, .volunteer-form select:focus {
          outline: none;
          border-color: var(--purple);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.12);
        }
        .volunteer-form input::placeholder { color: var(--muted-light); }
        .volunteer-form button { align-self: flex-start; margin-top: 4px; }

        .form-success {
          padding: 40px 32px;
          background: var(--green-pale);
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .form-success .tag-pill { margin-bottom: 12px; }
        .form-success h3 { font-size: 24px; color: var(--charcoal); margin-top: 8px; }
        .form-success p:last-child { margin-top: 10px; color: var(--muted); font-size: 15px; }
      `}</style>
    </form>
  );
}
