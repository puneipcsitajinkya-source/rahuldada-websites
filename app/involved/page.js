import Image from "next/image";
import VolunteerForm from "@/components/VolunteerForm";
import { donationTiers, org } from "@/lib/siteData";

export const metadata = { title: "Get Involved — " + org.name };

export default function InvolvedPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="involved-hero">
        <div className="involved-hero__bg" />
        <div className="wrap involved-hero__inner">
          <span className="eyebrow">Get Involved</span>
          <h1>There is a way to help that fits what you have</h1>
          <p className="kicker">
            Time on a weekend, a skill you already have, or a donation of any size —
            each keeps a different part of this work running.
          </p>
          <div className="involved-hero__tabs">
            <a href="#volunteer" className="involved-tab-btn">🤲 Volunteer</a>
            <a href="#donate" className="involved-tab-btn">💛 Donate</a>
            <a href="#csr" className="involved-tab-btn">🏢 CSR Partner</a>
          </div>
        </div>
      </section>

      {/* ---- VOLUNTEER ---- */}
      <section id="volunteer" className="section section--white">
        <div className="wrap volunteer-grid">
          <div className="volunteer-body">
            <span className="eyebrow">Volunteer</span>
            <h2>Join a paanpoi round or a plantation drive</h2>
            <p className="volunteer-text">
              Most of our regular work — filling water stations, staking new saplings,
              running an awareness session at a school — is done by volunteers from
              Shiroli and nearby villages. Tell us a little about yourself and we&apos;ll
              be in touch before the next drive.
            </p>
            <div className="volunteer-perks">
              <div className="volunteer-perk">
                <span className="volunteer-perk__icon">📅</span>
                <div>
                  <strong>Weekend drives</strong>
                  <p>Most activities happen on weekends — no leave needed.</p>
                </div>
              </div>
              <div className="volunteer-perk">
                <span className="volunteer-perk__icon">🌿</span>
                <div>
                  <strong>On-ground work</strong>
                  <p>Plant trees, fill water stations, run health camps.</p>
                </div>
              </div>
              <div className="volunteer-perk">
                <span className="volunteer-perk__icon">🏆</span>
                <div>
                  <strong>Recognised effort</strong>
                  <p>We celebrate and acknowledge our volunteers publicly.</p>
                </div>
              </div>
            </div>
            <div className="volunteer-img-wrap">
              <Image
                src="/images/volunteer-sapling.jpeg"
                alt="A volunteer holding up a sapling ready to be planted"
                width={480}
                height={320}
                className="volunteer-img"
              />
            </div>
          </div>
          <div className="volunteer-form-card">
            <div className="volunteer-form-card__header">
              <span>📝</span>
              <p>Volunteer Registration</p>
            </div>
            <div className="volunteer-form-card__body">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* ---- DONATE ---- */}
      <section id="donate" className="section section--parchment">
        <div className="wrap">
          <div className="donate-intro">
            <span className="eyebrow">Donate</span>
            <h2>See exactly where a donation goes</h2>
            <p className="kicker">
              Every rupee is spent on the ground — water, saplings, camps, and structures.
            </p>
          </div>

          <div className="tiers-grid">
            {donationTiers.map((t) => (
              <div key={t.amount} className="tier-card">
                <div className="tier-card__amount">{t.amount}</div>
                <p className="tier-card__impact">{t.impact}</p>
                <a
                  href="mailto:info@navchaitanyayuvamandal.org"
                  className="btn btn--outline tier-card__btn"
                >
                  Donate {t.amount}
                </a>
              </div>
            ))}
          </div>

          <div className="donate-methods">
            <h3 className="donate-methods__title">Ways to Pay</h3>
            <div className="donate-methods__options">
              {["UPI / QR Code", "Bank Transfer", "Razorpay", "PhonePe / Google Pay"].map((m) => (
                <span key={m} className="donate-method-pill">{m}</span>
              ))}
            </div>
            <p className="donate-methods__note">
              Bank details, UPI QR code and Razorpay link will be added here once set up —
              for now, please contact us directly to arrange a donation.
            </p>
          </div>
        </div>
      </section>

      {/* ---- CSR ---- */}
      <section id="csr" className="section section--white">
        <div className="wrap csr-grid">
          <div className="csr-body">
            <span className="eyebrow">CSR Partnership</span>
            <h2>Partner with us on a funded project</h2>
            <p className="csr-text">
              We work with companies looking to direct CSR budgets toward measurable,
              on-ground environmental and rural development outcomes — water conservation
              structures, plantation drives, school health camps, and skill-development
              programmes.
            </p>
            <ul className="csr-list">
              {[
                "Environmental & water conservation projects",
                "Rural development & livelihoods",
                "Education support",
                "Health camps & awareness drives",
              ].map((item) => (
                <li key={item}>
                  <span className="csr-check">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="csr-card">
            <div className="csr-card__icon">🏢</div>
            <h3 className="csr-card__title">Want a formal proposal?</h3>
            <p className="csr-card__text">
              We can put together a project proposal with budget, timeline and expected
              impact for your CSR team.
            </p>
            <a
              href="mailto:info@navchaitanyayuvamandal.org"
              className="btn btn--gold csr-card__btn"
            >
              Request a Proposal
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ---- Involved Hero ---- */
        .involved-hero {
          background: linear-gradient(135deg, var(--emerald-deep) 0%, var(--emerald) 100%);
          padding-top: 130px;
          padding-bottom: 72px;
          position: relative;
          overflow: hidden;
        }
        .involved-hero__bg {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(201,146,42,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .involved-hero__inner { position: relative; z-index: 1; }
        .involved-hero h1 {
          color: #fff;
          font-size: clamp(2rem, 4.2vw, 3rem);
          max-width: 760px;
          margin-top: 8px;
        }
        .involved-hero .kicker { color: rgba(255,255,255,0.72); }

        .involved-hero__tabs {
          display: flex;
          gap: 12px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .involved-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .involved-tab-btn:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ---- Volunteer Grid ---- */
        .volunteer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 900px) { .volunteer-grid { grid-template-columns: 1fr; gap: 40px; } }

        .volunteer-body h2 { font-size: clamp(1.7rem, 2.8vw, 2.2rem); margin-top: 8px; }
        .volunteer-text { margin-top: 16px; font-size: 16px; color: var(--muted); line-height: 1.72; }

        .volunteer-perks {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 28px;
        }
        .volunteer-perk {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .volunteer-perk__icon {
          font-size: 24px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .volunteer-perk strong {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: var(--emerald-deep);
        }
        .volunteer-perk p {
          font-size: 13.5px;
          color: var(--muted);
          margin-top: 2px;
        }

        .volunteer-img-wrap { margin-top: 28px; }
        .volunteer-img {
          width: 100% !important;
          height: 260px !important;
          object-fit: cover;
          border-radius: 0 24px 0 24px;
          box-shadow: var(--shadow-md);
        }

        .volunteer-form-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 96px;
        }
        .volunteer-form-card__header {
          background: linear-gradient(135deg, var(--emerald-deep), var(--emerald));
          padding: 20px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 800;
          color: #fff;
        }
        .volunteer-form-card__header span { font-size: 22px; }
        .volunteer-form-card__body { padding: 28px; }

        /* ---- Donate ---- */
        .donate-intro { text-align: center; margin-bottom: 52px; }
        .donate-intro h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-top: 8px; }
        .donate-intro .kicker { margin: 14px auto 0; text-align: center; }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        @media (max-width: 860px) { .tiers-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .tiers-grid { grid-template-columns: 1fr; } }

        .tier-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 32px 20px 28px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s, box-shadow 0.25s;
          border-top: 3px solid var(--gold);
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .tier-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
        .tier-card__amount {
          font-family: var(--font-display);
          font-size: 38px;
          font-weight: 800;
          color: var(--emerald);
          letter-spacing: -0.02em;
        }
        .tier-card__impact {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.6;
          flex: 1;
        }
        .tier-card__btn { width: 100%; justify-content: center; margin-top: 4px; }

        .donate-methods {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 32px 36px;
          box-shadow: var(--shadow-sm);
        }
        .donate-methods__title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--emerald-deep);
          margin-bottom: 18px;
        }
        .donate-methods__options {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .donate-method-pill {
          font-size: 13px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 999px;
          background: var(--emerald-tint);
          color: var(--emerald);
          border: 1px solid rgba(13,74,46,0.15);
        }
        .donate-methods__note {
          font-size: 13px;
          color: var(--muted);
          font-style: italic;
          line-height: 1.6;
        }

        /* ---- CSR ---- */
        .csr-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 52px;
          align-items: start;
        }
        @media (max-width: 900px) { .csr-grid { grid-template-columns: 1fr; } }

        .csr-body h2 { font-size: clamp(1.7rem, 2.8vw, 2.2rem); margin-top: 8px; }
        .csr-text { margin-top: 16px; font-size: 16px; color: var(--muted); line-height: 1.72; }

        .csr-list { list-style: none; margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
        .csr-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 15px;
          color: var(--charcoal);
        }
        .csr-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: var(--emerald-tint);
          color: var(--emerald);
          flex-shrink: 0;
        }

        .csr-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 36px 32px;
          box-shadow: var(--shadow-md);
          border-top: 4px solid var(--gold);
          position: sticky;
          top: 96px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        }
        .csr-card__icon { font-size: 36px; }
        .csr-card__title { font-size: 22px; font-weight: 700; color: var(--emerald-deep); margin: 0; }
        .csr-card__text { font-size: 14.5px; color: var(--muted); line-height: 1.65; }
        .csr-card__btn { margin-top: 8px; }
      `}</style>
    </>
  );
}
