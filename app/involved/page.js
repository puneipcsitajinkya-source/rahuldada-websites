import Image from "next/image";
import VolunteerForm from "@/components/VolunteerForm";
import { donationTiers, org } from "@/lib/siteData";

export const metadata = { title: "Get Involved — " + org.name };

export default function InvolvedPage() {
  return (
    <>
      {/* ---- Hero (Light Theme: Purple + Light Green) ---- */}
      <section className="involved-hero">
        <div className="involved-hero__gradient" aria-hidden="true" />
        <div className="involved-hero__orb involved-hero__orb--1" aria-hidden="true" />
        <div className="involved-hero__orb involved-hero__orb--2" aria-hidden="true" />
        <div className="involved-hero__grid" aria-hidden="true" />
        <div className="involved-hero__shimmer" aria-hidden="true" />
        <div className="wrap involved-hero__inner">
          <span className="eyebrow anim-hero-1">Get Involved</span>
          <h1 className="anim-hero-2">There is a way to help that fits what you have</h1>
          <p className="kicker anim-hero-3">
            Time on a weekend, a skill you already have, or a donation of any size &mdash;
            each keeps a different part of this work running.
          </p>
          <div className="involved-hero__tabs anim-hero-4">
            <a href="#volunteer" className="involved-tab-btn">🤲 Volunteer</a>
            <a href="#donate" className="involved-tab-btn">💜 Donate</a>
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
                  href="mailto:navchaitanys@gmail.com"
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
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.8">
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
              href="mailto:navchaitanys@gmail.com"
              className="btn btn--primary csr-card__btn"
            >
              Request a Proposal
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ---- Involved Hero ---- */
        .involved-hero {
          background: #FAF8FE;
          padding-top: 140px;
          padding-bottom: 84px;
          position: relative;
          overflow: hidden;
        }
        .involved-hero__gradient {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 75% 65% at 20% 35%, rgba(124, 58, 237, 0.16) 0%, transparent 65%),
            radial-gradient(ellipse 60% 75% at 85% 45%, rgba(52, 211, 153, 0.22) 0%, transparent 60%),
            linear-gradient(180deg, #FFFFFF 0%, #FAF8FE 100%);
          animation: heroGradientShift 13s ease-in-out infinite alternate;
        }
        .involved-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;
        }
        .involved-hero__orb--1 {
          width: 480px; height: 480px; top: -100px; right: 0;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%);
          animation: orbFloat1 19s ease-in-out infinite;
        }
        .involved-hero__orb--2 {
          width: 320px; height: 320px; bottom: -30px; left: 15%;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
          animation: orbFloat3 16s ease-in-out infinite;
        }
        .involved-hero__grid {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(124, 58, 237, 0.05) 1.2px, transparent 1.2px);
          background-size: 34px 34px;
          animation: gridPan 40s linear infinite;
          pointer-events: none;
        }
        .involved-hero__shimmer {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(115deg, transparent 30%, rgba(52, 211, 153, 0.06) 50%, transparent 70%);
          background-size: 300% 300%;
          animation: heroShimmer 9s linear infinite;
          pointer-events: none;
        }
        .involved-hero__inner { position: relative; z-index: 3; }
        .involved-hero h1 {
          color: var(--charcoal);
          font-size: clamp(2.4rem, 4.6vw, 3.4rem);
          max-width: 800px;
          margin-top: 8px;
        }
        .involved-hero .kicker { color: var(--muted); }

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
          background: rgba(255, 255, 255, 0.9);
          border: 1.5px solid rgba(124, 58, 237, 0.15);
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 700;
          color: var(--ink);
          text-decoration: none;
          box-shadow: var(--shadow-sm);
          transition: background 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .involved-tab-btn:hover {
          background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%);
          color: var(--white);
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: var(--shadow-primary);
        }

        /* ---- Volunteer ---- */
        .volunteer-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 860px) { .volunteer-grid { grid-template-columns: 1fr; gap: 40px; } }
        .volunteer-body h2 { font-size: clamp(2rem, 3.2vw, 2.6rem); margin-top: 6px; }
        .volunteer-text { margin-top: 18px; font-size: 16.5px; color: var(--muted); line-height: 1.72; }

        .volunteer-perks { display: flex; flex-direction: column; gap: 16px; margin: 28px 0; }
        .volunteer-perk {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .volunteer-perk__icon {
          font-size: 22px;
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--purple-tint), var(--green-tint));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .volunteer-perk strong { font-size: 16px; color: var(--charcoal); }
        .volunteer-perk p { font-size: 14px; color: var(--muted); margin-top: 2px; }

        .volunteer-img-wrap {
          border-radius: 0 40px 0 40px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--white);
          margin-top: 24px;
        }
        .volunteer-img { width: 100% !important; height: 280px !important; object-fit: cover; }

        .volunteer-form-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 96px;
        }
        .volunteer-form-card__header {
          background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%);
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 17px;
          font-weight: 800;
          color: #fff;
        }

        /* ---- Donate ---- */
        .donate-intro { text-align: center; margin-bottom: 48px; }
        .donate-intro h2 { font-size: clamp(2rem, 3.2vw, 2.6rem); margin-top: 6px; }
        .donate-intro .kicker { margin: 14px auto 0; text-align: center; }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        @media (max-width: 900px) { .tiers-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .tiers-grid { grid-template-columns: 1fr; } }

        .tier-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: var(--radius-lg);
          padding: 34px 24px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .tier-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: rgba(124, 58, 237, 0.25);
        }
        .tier-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #7C3AED, #10B981);
        }
        .tier-card__amount {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #7C3AED, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 12px;
        }
        .tier-card__impact {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.55;
          flex: 1;
          margin-bottom: 24px;
        }
        .tier-card__btn { width: 100%; justify-content: center; font-size: 13.5px; }

        .donate-methods {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: var(--shadow-sm);
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }
        .donate-methods__title { font-size: 20px; font-weight: 700; color: var(--charcoal); margin-bottom: 18px; }
        .donate-methods__options {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .donate-method-pill {
          padding: 8px 18px;
          border-radius: 999px;
          background: var(--purple-pale);
          border: 1px solid rgba(124, 58, 237, 0.15);
          font-size: 13px;
          font-weight: 700;
          color: var(--purple-dark);
        }
        .donate-methods__note { font-size: 13.5px; color: var(--muted); line-height: 1.6; }

        /* ---- CSR ---- */
        .csr-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 860px) { .csr-grid { grid-template-columns: 1fr; gap: 40px; } }

        .csr-body h2 { font-size: clamp(2rem, 3.2vw, 2.6rem); margin-top: 6px; }
        .csr-text { margin-top: 18px; font-size: 16.5px; color: var(--muted); line-height: 1.72; }

        .csr-list { list-style: none; margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
        .csr-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 700;
          color: var(--charcoal);
        }
        .csr-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: var(--green-tint);
          color: var(--green-deep);
          flex-shrink: 0;
        }

        .csr-card {
          background: linear-gradient(135deg, #18132B 0%, #2A1F4E 100%);
          border-radius: var(--radius-lg);
          padding: 44px 36px;
          box-shadow: var(--shadow-md);
          color: #fff;
        }
        .csr-card__icon { font-size: 40px; margin-bottom: 16px; }
        .csr-card__title { font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .csr-card__text { font-size: 15px; color: rgba(255,255,255,0.76); line-height: 1.65; margin-bottom: 28px; }
        .csr-card__btn { width: 100%; justify-content: center; }
      `}</style>
    </>
  );
}
