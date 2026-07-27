import { org } from "@/lib/siteData";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — " + org.name };

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero section--forest section">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Reach us in Shiroli</h1>
          <p className="kicker">For volunteering, donations, CSR proposals or press queries.</p>
        </div>
      </section>

      <section className="section section--sand contact-section">
        <div className="wrap contact-grid">
          <div className="card contact-info">
            <h3>Visit or write to us</h3>
            <dl>
              <div>
                <dt>Address</dt>
                <dd>{org.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{org.phone}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{org.email}</dd>
              </div>
            </dl>
            <div className="map-embed">
              <iframe
                title="Shiroli, Ghatanji, Yavatmal map"
                src="https://www.google.com/maps?q=Shiroli,+Ghatanji,+Yavatmal,+Maharashtra&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="card contact-form-card">
            <h3>Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero { padding-top: 140px; padding-bottom: 80px; }
        .contact-hero h1 { color: var(--cream); font-size: clamp(2rem, 4.2vw, 3rem); margin-top: 6px; }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
        .contact-info, .contact-form-card { padding: 32px; }
        .contact-info dl { margin-top: 20px; display: flex; flex-direction: column; gap: 16px; }
        .contact-info dt { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--clay); font-weight: 700; }
        .contact-info dd { margin: 4px 0 0; font-size: 15.5px; }
        .map-embed { margin-top: 26px; border-radius: 4px 18px 4px 18px; overflow: hidden; height: 260px; }
        .map-embed iframe { width: 100%; height: 100%; border: 0; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
