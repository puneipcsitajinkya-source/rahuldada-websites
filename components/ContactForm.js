"use client";

import { useState } from "react";

const INQUIRY_TOPICS = [
  { id: "general", label: "General Inquiry", icon: "💬" },
  { id: "birds", label: "Bird Paanpoi Network", icon: "🐦" },
  { id: "water", label: "Water Conservation / Shramdaan", icon: "💧" },
  { id: "trees", label: "Tree Plantation & Nursery", icon: "🌱" },
  { id: "volunteer", label: "Volunteer With Us", icon: "🤝" },
  { id: "donation", label: "Donation & Sponsorship", icon: "💛" },
  { id: "csr", label: "CSR & Media Inquiry", icon: "🏢" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    sendCopy: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "", refId: "", timestamp: "" });
  const [copiedRef, setCopiedRef] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleTopicSelect(label) {
    setForm((prev) => ({ ...prev, subject: label }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "", refId: "", timestamp: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver message. Please try again.");
      }

      setStatus({
        type: "success",
        message: data.message || "Your message has been sent successfully!",
        refId: data.refId || "NC-" + Math.floor(100000 + Math.random() * 900000),
        timestamp: data.timestamp || new Date().toLocaleString(),
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please call or email us directly.",
      });
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
      sendCopy: true,
    });
    setStatus({ type: null, message: "", refId: "", timestamp: "" });
    setCopiedRef(false);
  }

  function copyRefId() {
    if (status.refId) {
      navigator.clipboard?.writeText(status.refId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  }

  // Success view
  if (status.type === "success") {
    return (
      <div className="form-success-card anim-fade-in">
        <div className="form-success-card__badge-check">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <span className="success-eyebrow">Message Delivered</span>
        <h3 className="success-title">Thank you, {form.name.split(" ")[0] || "Friend"}!</h3>
        <p className="success-desc">
          Your message has been triggered and routed directly to our volunteer coordinator in Shiroli via <strong>Nodemailer</strong>.
        </p>

        <div className="success-receipt">
          <div className="receipt-row">
            <span className="receipt-label">Reference ID</span>
            <div className="receipt-val-wrap">
              <span className="receipt-id">{status.refId}</span>
              <button
                type="button"
                onClick={copyRefId}
                className="btn-copy"
                title="Copy reference ID"
              >
                {copiedRef ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Topic</span>
            <span className="receipt-val">{form.subject}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Sender Email</span>
            <span className="receipt-val">{form.email}</span>
          </div>
          {form.phone && (
            <div className="receipt-row">
              <span className="receipt-label">Phone / WhatsApp</span>
              <span className="receipt-val">{form.phone}</span>
            </div>
          )}
          <div className="receipt-row">
            <span className="receipt-label">Submitted On</span>
            <span className="receipt-val">{status.timestamp}</span>
          </div>
        </div>

        <div className="success-actions">
          <button type="button" onClick={handleReset} className="btn-secondary-light">
            ← Send Another Message
          </button>
          <a
            href="https://wa.me/919421770995"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-chat"
          >
            <span>💬</span> Quick WhatsApp Chat
          </a>
        </div>

        <style>{`
          .form-success-card {
            padding: 40px 32px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .form-success-card__badge-check {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.35);
            margin-bottom: 20px;
            animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .success-eyebrow {
            display: inline-block;
            font-size: 11.5px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #065F46;
            background: #D1FAE5;
            padding: 4px 14px;
            border-radius: 999px;
            margin-bottom: 12px;
          }
          .success-title {
            font-size: 26px;
            font-weight: 800;
            color: var(--charcoal);
            margin-bottom: 10px;
          }
          .success-desc {
            font-size: 15px;
            color: var(--muted);
            line-height: 1.6;
            max-width: 440px;
            margin-bottom: 26px;
          }
          .success-receipt {
            width: 100%;
            background: #FAF8FE;
            border: 1px solid rgba(124, 58, 237, 0.14);
            border-radius: 16px;
            padding: 20px 24px;
            margin-bottom: 28px;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .receipt-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13.5px;
            border-bottom: 1px dashed rgba(124, 58, 237, 0.1);
            padding-bottom: 8px;
          }
          .receipt-row:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .receipt-label {
            color: var(--muted);
            font-weight: 600;
          }
          .receipt-val {
            color: var(--charcoal);
            font-weight: 700;
            text-align: right;
            word-break: break-all;
          }
          .receipt-val-wrap {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .receipt-id {
            font-family: monospace;
            font-size: 13px;
            font-weight: 800;
            color: var(--purple-dark);
            background: var(--purple-tint);
            padding: 3px 8px;
            border-radius: 6px;
          }
          .btn-copy {
            background: none;
            border: 1px solid rgba(124, 58, 237, 0.25);
            color: var(--purple);
            font-size: 11px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
          }
          .btn-copy:hover {
            background: var(--purple);
            color: #fff;
          }
          .success-actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
          .btn-secondary-light {
            padding: 12px 22px;
            border-radius: 999px;
            background: #fff;
            border: 1.5px solid rgba(124, 58, 237, 0.25);
            color: var(--charcoal);
            font-weight: 700;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s;
          }
          .btn-secondary-light:hover {
            background: var(--purple-pale);
            border-color: var(--purple);
          }
          .btn-whatsapp-chat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 22px;
            border-radius: 999px;
            background: #25D366;
            color: #ffffff;
            font-weight: 700;
            font-size: 14px;
            text-decoration: none;
            box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .btn-whatsapp-chat:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          }

          @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.08); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }
          .anim-fade-in {
            animation: fadeIn 0.35s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit} noValidate>
      {/* Error Banner */}
      {status.type === "error" && (
        <div className="cf-alert cf-alert--error anim-fade-in" role="alert">
          <span className="cf-alert__icon">⚠️</span>
          <div className="cf-alert__text">
            <strong>Unable to send:</strong> {status.message}
          </div>
        </div>
      )}

      {/* Inquiry Topic Selector */}
      <div className="cf-field">
        <label className="cf-label">
          <span>Select Inquiry Category</span>
          <span className="cf-label-hint">What can we help you with?</span>
        </label>
        <div className="cf-topic-chips" role="radiogroup" aria-label="Inquiry Topic">
          {INQUIRY_TOPICS.map((topic) => {
            const isSelected = form.subject === topic.label;
            return (
              <button
                key={topic.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleTopicSelect(topic.label)}
                className={`cf-topic-chip ${isSelected ? "cf-topic-chip--selected" : ""}`}
              >
                <span className="cf-topic-chip__icon">{topic.icon}</span>
                <span className="cf-topic-chip__label">{topic.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Two column: Full Name & Phone */}
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-name" className="cf-label">
            Your Full Name <span className="cf-required">*</span>
          </label>
          <div className="cf-input-wrap">
            <span className="cf-input-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              id="cf-name"
              required
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Patil"
              disabled={loading}
              className="cf-input"
            />
          </div>
        </div>

        <div className="cf-field">
          <label htmlFor="cf-phone" className="cf-label">
            Phone / WhatsApp <span className="cf-label-opt">(Optional)</span>
          </label>
          <div className="cf-input-wrap">
            <span className="cf-input-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 15.1 16.1l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 94217 70995"
              disabled={loading}
              className="cf-input"
            />
          </div>
        </div>
      </div>

      {/* Email Address */}
      <div className="cf-field">
        <label htmlFor="cf-email" className="cf-label">
          Email Address <span className="cf-required">*</span>
        </label>
        <div className="cf-input-wrap">
          <span className="cf-input-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <input
            id="cf-email"
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            disabled={loading}
            className="cf-input"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="cf-field">
        <div className="cf-label-row">
          <label htmlFor="cf-message" className="cf-label">
            Your Message <span className="cf-required">*</span>
          </label>
          <span className="cf-char-count">{form.message.length} / 1000</span>
        </div>
        <textarea
          id="cf-message"
          required
          name="message"
          rows={5}
          maxLength={1000}
          value={form.message}
          onChange={handleChange}
          disabled={loading}
          placeholder="Write your query, suggestion, or volunteer interest in detail..."
          className="cf-textarea"
        />
      </div>

      {/* Confirmation Checkbox */}
      <label className="cf-checkbox-label">
        <input
          type="checkbox"
          name="sendCopy"
          checked={form.sendCopy}
          onChange={handleChange}
          disabled={loading}
          className="cf-checkbox"
        />
        <span>Send an automatic acknowledgement copy to my email address</span>
      </label>

      {/* Submit Button & Assurance */}
      <div className="cf-footer">
        <button
          type="submit"
          disabled={loading || !form.name.trim() || !form.email.trim() || !form.message.trim()}
          className={`cf-submit-btn ${loading ? "cf-submit-btn--loading" : ""}`}
        >
          {loading ? (
            <>
              <span className="cf-spinner" aria-hidden="true" />
              <span>Sending via Nodemailer...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </>
          )}
        </button>

        <p className="cf-privacy-note">
          <span>🔒</span> Verified secure &bull; We never share your personal information.
        </p>
      </div>

      <style>{`
        .cf-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .cf-row {
            grid-template-columns: 1fr;
          }
        }

        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cf-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cf-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--charcoal);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cf-label-hint {
          font-size: 12px;
          font-weight: 500;
          color: var(--muted-light);
          margin-left: auto;
        }
        .cf-required {
          color: #EF4444;
          font-weight: 800;
        }
        .cf-label-opt {
          font-size: 11.5px;
          font-weight: 500;
          color: var(--muted-light);
        }
        .cf-char-count {
          font-size: 11.5px;
          color: var(--muted-light);
          font-family: monospace;
        }

        /* Topic selector chips */
        .cf-topic-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cf-topic-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          background: #FAF8FE;
          color: var(--charcoal);
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cf-topic-chip:hover {
          border-color: var(--purple);
          background: var(--purple-pale);
          transform: translateY(-1px);
        }
        .cf-topic-chip--selected {
          background: linear-gradient(135deg, var(--purple) 0%, #10B981 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.28);
        }
        .cf-topic-chip--selected .cf-topic-chip__icon {
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        }

        /* Input styling with icons */
        .cf-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .cf-input-icon {
          position: absolute;
          left: 14px;
          color: var(--purple);
          opacity: 0.65;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cf-input {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14.5px;
          padding: 13px 16px 13px 44px;
          border: 1.5px solid rgba(124, 58, 237, 0.16);
          border-radius: 12px;
          background: #ffffff;
          color: var(--charcoal);
          transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .cf-input:focus {
          outline: none;
          border-color: var(--purple);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.12);
          background: #fff;
        }
        .cf-input::placeholder {
          color: var(--muted-light);
        }

        .cf-textarea {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.6;
          padding: 14px 16px;
          border: 1.5px solid rgba(124, 58, 237, 0.16);
          border-radius: 12px;
          background: #ffffff;
          color: var(--charcoal);
          resize: vertical;
          min-height: 120px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .cf-textarea:focus {
          outline: none;
          border-color: var(--purple);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.12);
        }
        .cf-textarea::placeholder {
          color: var(--muted-light);
        }

        /* Checkbox */
        .cf-checkbox-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: var(--muted);
          cursor: pointer;
          user-select: none;
          line-height: 1.4;
        }
        .cf-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          accent-color: var(--purple);
          cursor: pointer;
        }

        /* Alert */
        .cf-alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
        }
        .cf-alert--error {
          background: #FEF2F2;
          border: 1px solid #FCA5A5;
          color: #991B1B;
        }
        .cf-alert__icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        /* Footer & Submit Button */
        .cf-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }
        .cf-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 28px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #10B981 100%);
          background-size: 200% 200%;
          color: #ffffff;
          border: none;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          box-shadow: 0 8px 24px -4px rgba(124, 58, 237, 0.4);
          transition: transform 0.22s ease, box-shadow 0.22s ease, background-position 0.4s ease;
        }
        .cf-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -4px rgba(124, 58, 237, 0.5);
          background-position: right center;
        }
        .cf-submit-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        .cf-spinner {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255, 255, 255, 0.35);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .cf-privacy-note {
          font-size: 12px;
          color: var(--muted-light);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
      `}</style>
    </form>
  );
}
