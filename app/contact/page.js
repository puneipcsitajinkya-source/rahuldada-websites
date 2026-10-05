import { org } from "@/lib/siteData";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact Us — " + org.name,
  description:
    "Get in touch with Navchaitanya Bahuuddeshiya Vikas Yuva Mandal in Shiroli, Ghatanji, Yavatmal. Contact for volunteering, donations, bird paanpoi project, or CSR collaborations.",
};

const phones = [
  { number: "+91 9421770995", label: "Primary Helpline & WhatsApp", clean: "919421770995" },
  { number: "+91 9403955764", label: "Field Coordinator", clean: "919403955764" },
];

const faqs = [
  {
    q: "How can I participate in Shramdaan water conservation drives?",
    a: "Our check dam (Mati Nala Band) construction and desilting drives happen mainly on weekends and early mornings during pre-monsoon and winter months. You can fill out the contact form or register directly on our Volunteer page to join the WhatsApp volunteer crew.",
  },
  {
    q: "Can I sponsor or request a bird paanpoi clay station in my route?",
    a: "Yes! Every summer starting January, we install and refill clay water stations along transit roads in Shiroli, Ghatanji, Pangadi, and Junoni. You can write to us via this form or call directly to sponsor clay stations or alert us to a drought-prone bird habitat.",
  },
  {
    q: "Can CSR teams and institutions partner with Navchaitanya Yuva Mandal?",
    a: "Absolutely. Navchaitanya has been active since 2003 and has received grassroots recognition including the Krishithon and Baliraja awards. We welcome CSR partnerships in watershed management, tree nurseries, and rural environmental education.",
  },
  {
    q: "Can I visit the field conservation work in Shiroli?",
    a: "Yes, visitors, researchers, and well-wishers are always welcome. Please give us a heads up 1–2 days before arriving so our volunteers can guide you through the water harvesting and tree plantation sites.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ---- Hero Section ---- */}


      {/* ---- Quick Contact Bar ---- */}
      <div className="quick-bar-wrapper">
        <div className="wrap">
          <div className="quick-bar">
            <a href="tel:+919421770995" className="quick-item">
              <div className="quick-item__icon quick-item__icon--call">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 15.1 16.1l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="quick-item__text">
                <span className="quick-item__label">Call Direct</span>
                <span className="quick-item__value">+91 9421770995</span>
              </div>
            </a>

            <a
              href="https://wa.me/919421770995?text=Namaste%20Navchaitanya%20Yuva%20Mandal,%20I%20would%20like%20to%20get%20in%20touch%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="quick-item"
            >
              <div className="quick-item__icon quick-item__icon--wa">
                <span>💬</span>
              </div>
              <div className="quick-item__text">
                <span className="quick-item__label">WhatsApp Chat</span>
                <span className="quick-item__value">Start Chat &rarr;</span>
              </div>
            </a>

            <a href={`mailto:${org.email}`} className="quick-item">
              <div className="quick-item__icon quick-item__icon--mail">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="quick-item__text">
                <span className="quick-item__label">Email Inbox</span>
                <span className="quick-item__value">{org.email}</span>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shiroli,+Ghatanji,+Yavatmal,+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-item"
            >
              <div className="quick-item__icon quick-item__icon--map">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="quick-item__text">
                <span className="quick-item__label">Location</span>
                <span className="quick-item__value">Shiroli, Ghatanji</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ---- Main Contact Content Grid ---- */}
      <section className="section section--parchment">
        <div className="wrap contact-grid">
          {/* Left Column: Organization Details & Map */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="contact-info-card__header">
                <div>
                  <span className="contact-info-card__tag">Office &amp; Field Base</span>
                  <h2 className="contact-info-card__title">Visit or reach our team</h2>
                </div>
                <div className="contact-info-card__crest">NC</div>
              </div>

              <div className="contact-blocks">
                {/* Address */}
                <div className="contact-block">
                  <div className="contact-block__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-block__content">
                    <div className="contact-block__label">Mandal Address</div>
                    <div className="contact-block__val">{org.address}</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Shiroli,+Ghatanji,+Yavatmal,+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-block__link"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="contact-block">
                  <div className="contact-block__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 15.1 16.1l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-block__content">
                    <div className="contact-block__label">Helplines &amp; Calling</div>
                    <div className="phone-badges">
                      {phones.map((p) => (
                        <div key={p.number} className="phone-badge">
                          <a href={`tel:${p.number}`} className="phone-badge__num">
                            {p.number}
                          </a>
                          <span className="phone-badge__desc">{p.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-block">
                  <div className="contact-block__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-block__content">
                    <div className="contact-block__label">Official Email</div>
                    <a href={`mailto:${org.email}`} className="contact-block__val-link">
                      {org.email}
                    </a>
                    <span className="contact-block__sub">Monitored daily by volunteer administration</span>
                  </div>
                </div>
              </div>

              {/* Emergency Bird Rescue & Summer Helpline Callout */}
              <div className="emergency-callout">
                <div className="emergency-callout__icon">🐦</div>
                <div className="emergency-callout__body">
                  <h4>Summer Bird Paanpoi &amp; Wildlife Support</h4>
                  <p>
                    Found a dehydrated bird in Vidarbha&apos;s heat, or want clay water pots hung along your farm path?
                    Call <strong>+91 9421770995</strong> for immediate local coordination.
                  </p>
                </div>
              </div>

              {/* Map embed */}
              <div className="map-card">
                <div className="map-card__header">
                  <span>📍 Village Map &bull; Shiroli (Ghatanji)</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shiroli,+Ghatanji,+Yavatmal,+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Larger Map &nearr;
                  </a>
                </div>
                <div className="map-embed">
                  <iframe
                    title="Shiroli, Ghatanji, Yavatmal map"
                    src="https://www.google.com/maps?q=Shiroli,+Ghatanji,+Yavatmal,+Maharashtra&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Office hours note */}
              <div className="contact-hours">
                <span className="contact-hours__icon">🕐</span>
                <div>
                  <strong>Volunteer Availability:</strong>
                  <p>
                    Field work runs morning 6:30 AM &ndash; 11:00 AM. Best time for phone calls and visits is
                    evenings from 4:30 PM to 8:30 PM IST.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form Card */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="contact-form-card__header">
                <div className="contact-form-card__icon-badge">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="contact-form-card__title">Send Us a Direct Message</h3>

                </div>
              </div>

              <div className="contact-form-card__body">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Frequently Asked Questions Section ---- */}
      <section className="section section--white">
        <div className="wrap">
          <div className="faq-header">
            <span className="eyebrow">Clear Answers</span>
            <h2>Common Questions Before Reaching Out</h2>
            <p className="kicker">
              Here are quick details about visiting Shiroli, supporting our initiatives, and collaborating on projects.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((f, i) => (
              <div key={i} className="faq-card">
                <span className="faq-card__num">0{i + 1}</span>
                <h3 className="faq-card__q">{f.q}</h3>
                <p className="faq-card__a">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="faq-footer-cta">
            <p>Have a different question or specific proposal?</p>
            <a href="tel:+919421770995" className="btn btn--primary">
              Speak Directly with Rahul Jivane &rarr;
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Styling */
        .contact-hero {
          background: #FAF8FE;
          padding-top: 140px;
          padding-bottom: 70px;
          position: relative;
          overflow: hidden;
        }
        .contact-hero__gradient {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 70% 70% at 20% 30%, rgba(124, 58, 237, 0.14) 0%, transparent 65%),
            radial-gradient(ellipse 55% 80% at 85% 45%, rgba(52, 211, 153, 0.20) 0%, transparent 60%),
            linear-gradient(180deg, #FFFFFF 0%, #FAF8FE 100%);
        }
        .contact-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;
        }
        .contact-hero__orb--1 {
          width: 440px; height: 440px; top: -80px; right: 5%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
        }
        .contact-hero__orb--2 {
          width: 320px; height: 320px; bottom: -30px; left: 10%;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.22) 0%, transparent 70%);
        }
        .contact-hero__grid {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(124, 58, 237, 0.06) 1.2px, transparent 1.2px);
          background-size: 34px 34px;
          pointer-events: none;
        }
        .contact-hero__shimmer {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(115deg, transparent 30%, rgba(52, 211, 153, 0.05) 50%, transparent 70%);
          background-size: 300% 300%;
          pointer-events: none;
        }
        .contact-hero__inner { position: relative; z-index: 3; }

        .contact-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--muted-light);
          margin-bottom: 20px;
        }
        .contact-breadcrumb a {
          color: var(--purple);
          transition: opacity 0.2s;
        }
        .contact-breadcrumb a:hover {
          text-decoration: underline;
        }
        .contact-breadcrumb .current {
          color: var(--charcoal);
        }

        .contact-hero h1 {
          color: var(--charcoal);
          font-size: clamp(2.3rem, 4.4vw, 3.4rem);
          margin-top: 8px;
          line-height: 1.18;
          max-width: 820px;
        }
        .contact-hero .kicker {
          color: var(--muted);
          font-size: 18px;
          max-width: 720px;
        }

        .hero-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }
        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid rgba(124, 58, 237, 0.15);
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: var(--charcoal);
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.05);
        }
        .hero-pill__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }
        .hero-pill__icon {
          font-size: 14px;
        }

        /* Quick Bar */
        .quick-bar-wrapper {
          background: #ffffff;
          border-top: 1px solid rgba(124, 58, 237, 0.08);
          border-bottom: 1px solid rgba(124, 58, 237, 0.08);
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
          position: relative;
          z-index: 10;
        }
        .quick-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 16px 0;
        }
        @media (max-width: 900px) {
          .quick-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 520px) {
          .quick-bar {
            grid-template-columns: 1fr;
          }
        }
        .quick-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          background: #FAF8FE;
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.22s ease;
        }
        .quick-item:hover {
          background: #ffffff;
          border-color: var(--purple);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(124, 58, 237, 0.12);
        }
        .quick-item__icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .quick-item__icon--call {
          background: var(--purple-tint);
          color: var(--purple);
        }
        .quick-item__icon--wa {
          background: #D1FAE5;
          font-size: 20px;
        }
        .quick-item__icon--mail {
          background: #FEF3C7;
          color: #D97706;
        }
        .quick-item__icon--map {
          background: #E0E7FF;
          color: #4338CA;
        }
        .quick-item__text {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .quick-item__label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
        }
        .quick-item__value {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--charcoal);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.08fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        /* Info Card */
        .contact-info-card {
          background: #ffffff;
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.05);
          position: relative;
        }
        @media (max-width: 600px) {
          .contact-info-card {
            padding: 24px;
          }
        }
        .contact-info-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(124, 58, 237, 0.08);
        }
        .contact-info-card__tag {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--purple-dark);
          background: var(--purple-tint);
          padding: 3px 10px;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 6px;
        }
        .contact-info-card__title {
          font-size: 24px;
          font-weight: 800;
          color: var(--charcoal);
        }
        .contact-info-card__crest {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--purple) 0%, #10B981 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        .contact-blocks {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .contact-block {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }
        .contact-block__icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #FAF8FE;
          border: 1px solid rgba(124, 58, 237, 0.15);
          color: var(--purple);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-block__content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .contact-block__label {
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #065F46;
        }
        .contact-block__val {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--charcoal);
          line-height: 1.5;
        }
        .contact-block__link {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--purple);
          display: inline-block;
          margin-top: 2px;
        }
        .contact-block__link:hover {
          text-decoration: underline;
        }
        .contact-block__val-link {
          font-size: 16px;
          font-weight: 700;
          color: var(--purple);
        }
        .contact-block__sub {
          font-size: 12.5px;
          color: var(--muted);
        }

        /* Phone badges */
        .phone-badges {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
        }
        .phone-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FAF8FE;
          padding: 8px 14px;
          border-radius: 10px;
          border: 1px solid rgba(124, 58, 237, 0.1);
        }
        .phone-badge__num {
          font-size: 15px;
          font-weight: 700;
          color: var(--charcoal);
          text-decoration: none;
        }
        .phone-badge__num:hover {
          color: var(--purple);
        }
        .phone-badge__desc {
          font-size: 12px;
          font-weight: 600;
          color: var(--muted);
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 6px;
          margin-left: auto;
        }

        /* Emergency Callout */
        .emergency-callout {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-top: 26px;
          padding: 20px;
          background: linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%);
          border: 1.5px solid #FCD34D;
          border-radius: 16px;
        }
        .emergency-callout__icon {
          font-size: 26px;
          line-height: 1;
          flex-shrink: 0;
        }
        .emergency-callout__body h4 {
          font-size: 15.5px;
          font-weight: 800;
          color: #92400E;
          margin-bottom: 6px;
        }
        .emergency-callout__body p {
          font-size: 13.5px;
          color: #78350F;
          line-height: 1.55;
        }

        /* Map Embed */
        .map-card {
          margin-top: 26px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(124, 58, 237, 0.15);
          background: #FAF8FE;
        }
        .map-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 18px;
          background: #ffffff;
          font-size: 13px;
          font-weight: 700;
          color: var(--charcoal);
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
        }
        .map-card__header a {
          color: var(--purple);
          font-size: 12px;
          font-weight: 700;
        }
        .map-embed {
          height: 220px;
          width: 100%;
        }
        .map-embed iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        /* Office hours */
        .contact-hours {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-top: 22px;
          padding: 18px 20px;
          background: var(--purple-pale);
          border: 1px solid rgba(124, 58, 237, 0.12);
          border-radius: 14px;
        }
        .contact-hours__icon {
          font-size: 22px;
          flex-shrink: 0;
        }
        .contact-hours strong {
          display: block;
          font-size: 13.5px;
          color: var(--charcoal);
          margin-bottom: 4px;
        }
        .contact-hours p {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.55;
        }

        /* Form Card */
        .contact-form-card {
          background: #ffffff;
          border: 1px solid rgba(124, 58, 237, 0.14);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(124, 58, 237, 0.08);
          position: sticky;
          top: 96px;
        }
        .contact-form-card__header {
          background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 50%, #10B981 100%);
          padding: 24px 30px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: #ffffff;
        }
        .contact-form-card__icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-form-card__title {
          font-size: 19px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }
        .contact-form-card__subtitle {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 4px;
        }
        .contact-form-card__body {
          padding: 32px 30px;
        }
        @media (max-width: 600px) {
          .contact-form-card__body {
            padding: 22px 18px;
          }
        }

        /* FAQ Section */
        .faq-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 50px;
        }
        .faq-header h2 {
          font-size: clamp(2rem, 3.2vw, 2.6rem);
          margin-top: 8px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 760px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
        .faq-card {
          background: #FAF8FE;
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: 18px;
          padding: 28px;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.25);
        }
        .faq-card__num {
          font-size: 12px;
          font-weight: 800;
          font-family: monospace;
          color: var(--purple);
          background: var(--purple-tint);
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 12px;
        }
        .faq-card__q {
          font-size: 17.5px;
          font-weight: 700;
          color: var(--charcoal);
          margin-bottom: 10px;
          line-height: 1.35;
        }
        .faq-card__a {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.65;
        }

        .faq-footer-cta {
          margin-top: 48px;
          padding: 30px;
          background: linear-gradient(135deg, #FAF8FE 0%, #ECFDF5 100%);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .faq-footer-cta p {
          font-size: 16px;
          font-weight: 700;
          color: var(--charcoal);
        }
      `}</style>
    </>
  );
}
