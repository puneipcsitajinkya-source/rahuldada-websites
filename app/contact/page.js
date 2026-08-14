import { org } from "@/lib/siteData";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — " + org.name };

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: org.address,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 15.1 16.1l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: org.phone,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: org.email,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="wrap contact-hero__inner">
          <span className="eyebrow">Contact</span>
          <h1>Reach us in Shiroli</h1>
          <p className="kicker">
            For volunteering, donations, CSR proposals or press queries —
            we&apos;re a small team but we do reply.
          </p>
        </div>
      </section>

      {/* ---- Contact Grid ---- */}
      <section className="section section--parchment">
        <div className="wrap contact-grid">
          {/* Info card */}
          <div className="contact-info-card">
            <h3 className="contact-info-card__title">Visit or write to us</h3>
            <dl className="contact-dl">
              {contactDetails.map((d) => (
                <div key={d.label} className="contact-dl__item">
                  <div className="contact-dl__icon">{d.icon}</div>
                  <div>
                    <dt className="contact-dl__label">{d.label}</dt>
                    <dd className="contact-dl__value">{d.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Map embed */}
            <div className="map-embed">
              <iframe
                title="Shiroli, Ghatanji, Yavatmal map"
                src="https://www.google.com/maps?q=Shiroli,+Ghatanji,+Yavatmal,+Maharashtra&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office hours note */}
            <div className="contact-hours">
              <span className="contact-hours__icon">🕐</span>
              <p>
                <strong>Best time to reach us:</strong> We&apos;re mostly reachable
                evenings and weekends when field work wraps up.
              </p>
            </div>
          </div>

          {/* Form card */}
          <div className="contact-form-card">
            <div className="contact-form-card__header">
              <span>✉️</span>
              <p>Send us a message</p>
            </div>
            <div className="contact-form-card__body">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, var(--emerald-deep) 0%, var(--emerald) 100%);
          padding-top: 130px;
          padding-bottom: 72px;
          position: relative;
          overflow: hidden;
        }
        .contact-hero__bg {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(201,146,42,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .contact-hero__inner { position: relative; z-index: 1; }
        .contact-hero h1 {
          color: #fff;
          font-size: clamp(2rem, 4.2vw, 3rem);
          margin-top: 8px;
        }
        .contact-hero .kicker { color: rgba(255,255,255,0.72); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: start;
        }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }

        .contact-info-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: var(--shadow-sm);
          border-top: 4px solid var(--emerald-mid);
        }
        .contact-info-card__title {
          font-size: 22px;
          font-weight: 700;
          color: var(--emerald-deep);
          margin-bottom: 28px;
        }

        .contact-dl { display: flex; flex-direction: column; gap: 20px; }
        .contact-dl__item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .contact-dl__icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--emerald-tint);
          color: var(--emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-dl__label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          margin-bottom: 3px;
        }
        .contact-dl__value {
          font-size: 15px;
          color: var(--charcoal);
          margin: 0;
          line-height: 1.55;
        }

        .map-embed {
          margin-top: 28px;
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 240px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--line);
        }
        .map-embed iframe { width: 100%; height: 100%; border: 0; display: block; }

        .contact-hours {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-top: 20px;
          padding: 16px;
          background: var(--parchment);
          border-radius: var(--radius-md);
        }
        .contact-hours__icon { font-size: 20px; flex-shrink: 0; }
        .contact-hours p { font-size: 13.5px; color: var(--muted); line-height: 1.6; }
        .contact-hours strong { color: var(--charcoal); }

        .contact-form-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 96px;
        }
        .contact-form-card__header {
          background: linear-gradient(135deg, var(--emerald-deep), var(--emerald));
          padding: 20px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
        }
        .contact-form-card__header span { font-size: 22px; }
        .contact-form-card__body { padding: 28px; }
      `}</style>
    </>
  );
}
