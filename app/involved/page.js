import Image from "next/image";
import VolunteerForm from "@/components/VolunteerForm";
import { donationTiers, org } from "@/lib/siteData";

export const metadata = { title: "Get Involved — " + org.name };

export default function InvolvedPage() {
  return (
    <>
      <section className="involved-hero section--forest section">
        <div className="wrap">
          <p className="eyebrow">Get involved</p>
          <h1>There is a way to help that fits what you have</h1>
          <p className="kicker">
            Time on a weekend, a skill you already have, or a donation of any size —
            each keeps a different part of this work running.
          </p>
        </div>
      </section>

      {/* -------- VOLUNTEER -------- */}
      <section id="volunteer" className="section section--sand volunteer-section">
        <div className="wrap volunteer-grid">
          <div>
            <p className="eyebrow">Volunteer</p>
            <h2>Join a paanpoi round or a plantation drive</h2>
            <p className="kicker">
              Most of our regular work — filling water stations, staking new
              saplings, running an awareness session at a school — is done by
              volunteers from Shiroli and nearby villages. Tell us a little about
              yourself and we&apos;ll be in touch before the next drive.
            </p>
            <div className="volunteer-img">
              <Image
                src="/images/volunteer-sapling.jpeg"
                alt="A volunteer holding up a sapling ready to be planted"
                width={480}
                height={360}
              />
            </div>
          </div>
          <div className="card volunteer-card">
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* -------- DONATE -------- */}
      <section id="donate" className="section section--leaf donate-section">
        <div className="wrap">
          <p className="eyebrow">Donate</p>
          <h2>See exactly where a donation goes</h2>
          <p className="kicker">Every rupee is spent on the ground — water, saplings, camps, and structures.</p>

          <div className="grid grid--4" style={{ marginTop: 36 }}>
            {donationTiers.map((t) => (
              <div key={t.amount} className="card tier-card">
                <p className="tier-card__amount">{t.amount}</p>
                <p className="tier-card__impact">{t.impact}</p>
              </div>
            ))}
          </div>

          <div className="donate-methods card">
            <h3>Ways to pay</h3>
            <ul className="donate-methods__list">
              <li>UPI (QR code — to be added)</li>
              <li>Direct bank transfer</li>
              <li>Razorpay</li>
              <li>PhonePe / Google Pay</li>
            </ul>
            <p className="donate-methods__note">
              Bank details, UPI QR code and the Razorpay link will be added here once
              set up — for now, please contact us directly to arrange a donation.
            </p>
          </div>
        </div>
      </section>

      {/* -------- CSR -------- */}
      <section id="csr" className="section section--cream csr-section">
        <div className="wrap csr-grid">
          <div>
            <p className="eyebrow">CSR partnership</p>
            <h2>Partner with us on a funded project</h2>
            <p className="kicker">
              We work with companies looking to direct CSR budgets toward
              measurable, on-ground environmental and rural development outcomes —
              water conservation structures, plantation drives, school health
              camps, and skill-development programmes.
            </p>
            <ul className="csr-list">
              <li>Environmental & water conservation projects</li>
              <li>Rural development & livelihoods</li>
              <li>Education support</li>
              <li>Health camps & awareness drives</li>
            </ul>
          </div>
          <div className="card csr-card">
            <h3>Want a formal proposal?</h3>
            <p>We can put together a project proposal with budget, timeline and expected impact for your CSR team.</p>
            <a href="mailto:info@navchaitanyayuvamandal.org" className="btn btn--clay">Request a proposal</a>
          </div>
        </div>
      </section>

      <style>{`
        .involved-hero { padding-top: 140px; padding-bottom: 80px; }
        .involved-hero h1 { color: var(--cream); font-size: clamp(2rem, 4.2vw, 3rem); max-width: 760px; margin-top: 6px; }

        .volunteer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: start; }
        .volunteer-img { margin-top: 28px; }
        .volunteer-img img { border-radius: 6px 28px 6px 28px; object-fit: cover; width: 100%; height: 260px; }
        .volunteer-card { padding: 32px; }
        @media (max-width: 900px) { .volunteer-grid { grid-template-columns: 1fr; } }

        .tier-card { padding: 24px; text-align: center; }
        .tier-card__amount { font-family: var(--font-display); font-size: 28px; color: var(--clay); }
        .tier-card__impact { margin-top: 10px; font-size: 14px; color: rgba(22,36,28,0.72); }

        .donate-methods { margin-top: 40px; padding: 30px; }
        .donate-methods__list { list-style: none; display: flex; gap: 14px; flex-wrap: wrap; margin-top: 16px; }
        .donate-methods__list li {
          padding: 8px 16px; background: var(--sand); border-radius: 999px;
          font-weight: 600; font-size: 14px;
        }
        .donate-methods__note { margin-top: 18px; font-size: 13.5px; color: rgba(22,36,28,0.6); font-style: italic; }

        .csr-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 44px; align-items: start; }
        .csr-list { list-style: none; margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .csr-list li { padding-left: 22px; position: relative; font-weight: 600; }
        .csr-list li::before { content: "—"; position: absolute; left: 0; color: var(--clay); }
        .csr-card { padding: 32px; }
        .csr-card p { margin-top: 12px; color: rgba(22,36,28,0.72); font-size: 15px; }
        .csr-card .btn { margin-top: 20px; }
        @media (max-width: 900px) { .csr-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
