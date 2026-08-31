import Image from "next/image";
import Link from "next/link";
import ArcDivider from "@/components/ArcDivider";
import HeroSlider from "@/components/HeroSlider";
import { impactStats, paanpoiNetwork, focusAreas, timeline2026, press, awards, org } from "@/lib/siteData";

export const metadata = {
  title: "Navchaitanya Yuva Mandal — Water, Birds & Villages, Shiroli",
  description:
    "Grassroots NGO from Shiroli, Yavatmal — paanpoi bird water stations, tree plantation, water conservation and rural development since 2005.",
};

/* ---- Icon SVGs per stat ---- */
const statIcons = [
  /* years */
  <svg key="y" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  /* drops */
  <svg key="d" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  /* water */
  <svg key="w" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  /* award */
  <svg key="a" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
];

/* ---- Focus area icons ---- */
const focusIcons = {
  water:           "💧",
  birds:           "🐦",
  trees:           "🌳",
  environment:     "♻️",
  health:          "🏥",
  "rural-development": "🌾",
};

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO SLIDER (Full-bleed 3-Image Slider with Ground Impact)
      ============================================================ */}
      <HeroSlider />

      {/* ============================================================
          IMPACT STATS
      ============================================================ */}
      <section className="section section--white stats-section">
        <div className="wrap">
          <div className="stats-grid">
            {impactStats.map((s, i) => (
              <div key={s.label} className="stat-card">
                <div className="stat-card__icon">{statIcons[i]}</div>
                <p className="stat-card__value">{s.value}</p>
                <p className="stat-card__label">{s.label}</p>
                <div className="stat-card__note-wrap">
                  <p className="stat-card__note">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT STRIP
      ============================================================ */}
      <section className="section section--parchment about-strip">
        <div className="wrap about-strip__grid">
          <div className="about-strip__body">
            <span className="eyebrow">Who We Are</span>
            <h2>A youth mandal that started with a question about water</h2>
            <p className="about-strip__text">
              Registered in {org.established} and active on the ground since {org.workingSince},
              Navchaitanya Bahuuddeshiya Vikas Yuva Mandal works out of Shiroli village in
              Ghatanji taluka — organising villagers, students and farmers around the
              resources their region depends on: water, trees and the birds and soil that
              share them.
            </p>
            <div className="about-strip__chips">
              <span className="about-chip">🌿 Environment</span>
              <span className="about-chip">💧 Water</span>
              <span className="about-chip">🐦 Birds</span>
              <span className="about-chip">🌾 Rural Dev</span>
            </div>
            <Link href="/about" className="btn btn--outline" style={{ marginTop: 32 }}>
              Read Our Story →
            </Link>
          </div>
          <div className="about-strip__img-wrap">
            <div className="about-strip__img-frame">
              <Image
                src="/images/tree-grown-roadside.jpeg"
                alt="A volunteer standing beside a tree that has grown tall along a village road"
                width={640}
                height={800}
                className="about-strip__img"
              />
              <div className="about-strip__img-badge">
                <strong>20+</strong>
                <span>Years of Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOCUS AREAS
      ============================================================ */}
      <section className="section section--white focus-section">
        <div className="wrap">
          <div className="focus-section__intro">
            <span className="eyebrow">Our Focus Areas</span>
            <h2>Six threads, one village at a time</h2>
            <p className="kicker">
              Each programme grew out of something we saw missing on the ground —
              not a template borrowed from elsewhere.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((f) => (
              <Link key={f.slug} href={`/work#${f.slug}`} className="focus-card">
                <div className="focus-card__img-wrap">
                  <Image src={f.image} alt={f.title} width={420} height={280} className="focus-card__img" />
                  <div className="focus-card__overlay" />
                  <span className="focus-card__emoji">{focusIcons[f.slug]}</span>
                </div>
                <div className="focus-card__body">
                  <p className="focus-card__mr mr">{f.marathi}</p>
                  <h3 className="focus-card__title">{f.title}</h3>
                  <p className="focus-card__text">{f.summary}</p>
                  <span className="focus-card__cta">Explore area →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TIMELINE
      ============================================================ */}
      <section className="section section--emerald timeline-section">
        <div className="wrap timeline-grid">
          <div className="timeline-intro">
            <span className="eyebrow">This Year</span>
            <h2 style={{ color: "#fff" }}>2026 activity so far</h2>
            <p className="kicker">
              A running log, not a promise — updated as the season moves.
            </p>
          </div>
          <ol className="timeline-list">
            {timeline2026.map((t, i) => (
              <li key={t.label} className={`timeline-item ${t.done ? "is-done" : ""}`}>
                <div className="timeline-item__marker">
                  {t.done
                    ? <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    : <span>{i + 1}</span>
                  }
                </div>
                <span className="timeline-item__label">{t.label}</span>
                {t.done && <span className="timeline-item__done-tag">Completed</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          PRESS
      ============================================================ */}
      <section className="section section--white press-section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">In The News</span>
            <h2>What local papers have covered</h2>
          </div>
          <div className="press-grid">
            {press.map((p) => (
              <article key={p.headlineEn} className="press-card">
                <div className="press-card__img-wrap">
                  <Image src={p.image} alt={p.headlineEn} width={420} height={280} className="press-card__img" />
                  <span className="press-card__outlet">{p.outlet}</span>
                </div>
                <div className="press-card__body">
                  <p className="press-card__date">{p.date}</p>
                  <p className="press-card__mr mr">{p.headlineMr}</p>
                  <p className="press-card__en">{p.headlineEn}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          AWARDS
      ============================================================ */}
      <section className="section section--parchment awards-section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Recognition</span>
            <h2>Honours along the way</h2>
          </div>
          <div className="awards-grid">
            {awards.map((a) => (
              <div key={a.title} className="award-card">
                <div className="award-card__img-wrap">
                  <Image src={a.image} alt={a.title} width={400} height={280} className="award-card__img" />
                </div>
                <div className="award-card__body">
                  <span className="tag-pill tag-pill--green">{a.year}</span>
                  <h3 className="award-card__title">{a.title}</h3>
                  <p className="award-card__detail">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BAND
      ============================================================ */}
      <section className="cta-band">
        <div className="cta-band__bg-img">
          <Image
            src="/images/water-pond-conservation.jpeg"
            alt="Water conservation pond"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 60%" }}
          />
        </div>
        <div className="cta-band__scrim" />
        <div className="wrap cta-band__inner">
          <div className="cta-band__text">
            <span className="eyebrow" style={{ color: "#6EE7B7", background: "rgba(16,185,129,0.15)", borderColor: "rgba(16,185,129,0.3)" }}>
              Take Action
            </span>
            <h2 className="cta-band__heading">
              Two hours a week can keep a<br /> station full through May.
            </h2>
            <p className="cta-band__sub">
              Whether it&apos;s carrying water, planting a sapling, or funding a health camp —
              there&apos;s a way to help that fits what you have to give.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link href="/involved#volunteer" className="btn btn--primary">
              Volunteer with Us
            </Link>
            <Link href="/involved#donate" className="btn btn--ghost-light">
              Ways to Donate
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ---- STATS ---- */
        .stats-section {
          padding-top: 80px;
          padding-bottom: 80px;
          background: var(--white);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 990px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .stats-grid { grid-template-columns: 1fr; } }

        .stat-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: var(--radius-lg);
          padding: 30px 24px 26px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 380px;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.25);
        }
        .stat-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #7C3AED, #10B981);
        }
        .stat-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px; height: 50px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(16, 185, 129, 0.12));
          color: var(--purple);
          margin-bottom: 16px;
          flex-shrink: 0;
        }
        .stat-card__value {
          font-family: var(--font-display);
          font-size: 44px;
          font-weight: 800;
          background: linear-gradient(135deg, #7C3AED 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }
        .stat-card__label {
          font-weight: 800;
          font-size: 13.5px;
          color: var(--charcoal);
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          flex-shrink: 0;
          min-height: 38px;
          display: flex;
          align-items: center;
        }
        .stat-card__note-wrap {
          flex: 1;
          margin-top: 10px;
          overflow-y: auto;
          padding-right: 6px;
          /* Sleek custom scrollbar */
          scrollbar-width: thin;
          scrollbar-color: rgba(124, 58, 237, 0.3) rgba(124, 58, 237, 0.05);
        }
        .stat-card__note-wrap::-webkit-scrollbar {
          width: 5px;
        }
        .stat-card__note-wrap::-webkit-scrollbar-track {
          background: rgba(124, 58, 237, 0.05);
          border-radius: 999px;
        }
        .stat-card__note-wrap::-webkit-scrollbar-thumb {
          background: rgba(124, 58, 237, 0.28);
          border-radius: 999px;
        }
        .stat-card__note-wrap::-webkit-scrollbar-thumb:hover {
          background: var(--purple);
        }
        .stat-card__note {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.6;
          white-space: pre-line;
        }

        /* ---- ABOUT STRIP ---- */
        .about-strip__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-strip__grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .about-strip__body h2 { font-size: clamp(2rem, 3.2vw, 2.7rem); margin-top: 6px; }
        .about-strip__text {
          margin-top: 20px;
          font-size: 16.5px;
          color: var(--muted);
          line-height: 1.75;
        }
        .about-strip__chips {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 24px;
        }
        .about-chip {
          font-size: 13px;
          font-weight: 700;
          padding: 7px 18px;
          border-radius: 999px;
          background: var(--white);
          color: var(--purple-dark);
          border: 1px solid rgba(124, 58, 237, 0.15);
          box-shadow: 0 2px 6px rgba(124, 58, 237, 0.04);
        }
        .about-strip__img-wrap { position: relative; }
        .about-strip__img-frame {
          position: relative;
          border-radius: 0 44px 0 44px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--white);
        }
        .about-strip__img {
          width: 100%;
          height: 520px !important;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .about-strip__img-frame:hover .about-strip__img { transform: scale(1.04); }
        .about-strip__img-badge {
          position: absolute;
          bottom: 24px;
          left: -20px;
          background: var(--white);
          border-radius: 18px;
          padding: 18px 24px;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.2;
          border: 2px solid rgba(124, 58, 237, 0.12);
        }
        .about-strip__img-badge strong {
          font-family: var(--font-display);
          font-size: 38px;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .about-strip__img-badge span {
          font-size: 11px;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-align: center;
        }
        @media (max-width: 860px) {
          .about-strip__img { height: 320px !important; }
          .about-strip__img-badge { left: 12px; bottom: 12px; padding: 12px 16px; }
          .about-strip__img-badge strong { font-size: 28px; }
        }

        /* ---- FOCUS SECTION ---- */
        .focus-section__intro { text-align: center; margin-bottom: 56px; }
        .focus-section__intro h2 { font-size: clamp(2rem, 3.4vw, 2.8rem); margin-top: 8px; }
        .focus-section__intro .kicker { margin: 16px auto 0; text-align: center; }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) { .focus-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .focus-grid { grid-template-columns: 1fr; } }

        .focus-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(124, 58, 237, 0.08);
          text-decoration: none;
          color: inherit;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .focus-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(124, 58, 237, 0.25);
        }
        .focus-card__img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }
        .focus-card__img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .focus-card:hover .focus-card__img { transform: scale(1.08); }
        .focus-card__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(24, 19, 43, 0.6) 0%, transparent 60%);
        }
        .focus-card__emoji {
          position: absolute;
          bottom: 14px; left: 16px;
          font-size: 26px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
        }
        .focus-card__body { padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column; gap: 6px; }
        .focus-card__mr {
          font-size: 13px;
          font-weight: 700;
          color: var(--purple);
        }
        .focus-card__title {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 700;
          color: var(--charcoal);
          letter-spacing: -0.01em;
        }
        .focus-card__text {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.65;
          flex: 1;
          margin-top: 4px;
        }
        .focus-card__cta {
          margin-top: 14px;
          font-size: 13.5px;
          font-weight: 800;
          color: var(--purple);
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .focus-card:hover .focus-card__cta { color: var(--green); }

        /* ---- TIMELINE ---- */
        .timeline-section { position: relative; }
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 860px) { .timeline-grid { grid-template-columns: 1fr; gap: 36px; } }

        .timeline-intro h2 { font-size: clamp(2rem, 3.2vw, 2.7rem); margin-top: 8px; }

        .timeline-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .timeline-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          font-weight: 600;
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          transition: background 0.2s;
        }
        .timeline-item.is-done {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(52, 211, 153, 0.35);
          color: rgba(255,255,255,0.98);
        }
        .timeline-item__marker {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
          border: 1.5px solid rgba(255,255,255,0.25);
        }
        .timeline-item.is-done .timeline-item__marker {
          background: linear-gradient(135deg, #10B981, #34D399);
          color: #064E3B;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
        }
        .timeline-item__label { flex: 1; }
        .timeline-item__done-tag {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6EE7B7;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(52, 211, 153, 0.4);
          border-radius: 999px;
          padding: 4px 12px;
          white-space: nowrap;
        }

        /* ---- PRESS ---- */
        .press-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 860px) { .press-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 540px) { .press-grid { grid-template-columns: 1fr; } }

        .press-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .press-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: rgba(124, 58, 237, 0.2);
        }
        .press-card__img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .press-card__img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .press-card:hover .press-card__img { transform: scale(1.06); }
        .press-card__outlet {
          position: absolute;
          top: 14px; left: 14px;
          background: var(--purple-dark);
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .press-card__body { padding: 22px 22px 26px; }
        .press-card__date {
          font-size: 12px;
          font-weight: 700;
          color: var(--green-deep);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .press-card__mr {
          font-weight: 700;
          color: var(--charcoal);
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .press-card__en {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ---- AWARDS ---- */
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 640px) { .awards-grid { grid-template-columns: 1fr; } }

        .award-card {
          display: grid;
          grid-template-columns: 180px 1fr;
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(124, 58, 237, 0.08);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(16, 185, 129, 0.3);
        }
        @media (max-width: 540px) {
          .award-card { grid-template-columns: 1fr; }
          .award-card__img-wrap { height: 180px; }
        }
        .award-card__img-wrap { overflow: hidden; }
        .award-card__img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .award-card:hover .award-card__img { transform: scale(1.06); }
        .award-card__body { padding: 26px; display: flex; flex-direction: column; gap: 10px; justify-content: center; }
        .award-card__title {
          font-size: 19px;
          font-weight: 700;
          color: var(--charcoal);
          letter-spacing: -0.01em;
          margin-top: 4px;
        }
        .award-card__detail {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ---- CTA BAND ---- */
        .cta-band {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .cta-band__bg-img { position: absolute; inset: 0; z-index: 0; }
        .cta-band__scrim {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(105deg, rgba(24, 19, 43, 0.94) 40%, rgba(15, 59, 46, 0.85) 100%);
        }
        .cta-band__inner {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 48px;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 80px;
          color: #fff;
        }
        @media (max-width: 860px) {
          .cta-band__inner { grid-template-columns: 1fr; gap: 32px; }
        }
        .cta-band__heading {
          font-size: clamp(2rem, 3.4vw, 2.7rem);
          color: #fff;
          margin-top: 12px;
          letter-spacing: -0.02em;
        }
        .cta-band__sub {
          margin-top: 16px;
          font-size: 16.5px;
          color: rgba(255,255,255,0.76);
          max-width: 520px;
          line-height: 1.72;
        }
        .cta-band__actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (max-width: 860px) {
          .cta-band__actions { flex-direction: row; flex-wrap: wrap; }
        }
      `}</style>
    </>
  );
}
