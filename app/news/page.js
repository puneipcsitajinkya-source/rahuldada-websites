import Link from "next/link";
import { org } from "@/lib/siteData";

export const metadata = { title: "News — " + org.name };

export default function NewsPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="news-hero">
        <div className="news-hero__gradient" aria-hidden="true" />
        <div className="news-hero__orb news-hero__orb--1" aria-hidden="true" />
        <div className="news-hero__orb news-hero__orb--2" aria-hidden="true" />
        <div className="wrap news-hero__inner">
          <span className="eyebrow">News &amp; Media</span>
          <h1>Stay Updated with Navchaitanya</h1>
          <p className="kicker">
            Read our official press releases, view media coverage, and stay informed
            about the impact we're making across Yavatmal district.
          </p>
        </div>
      </section>

      {/* ---- Cards ---- */}
      <section className="news-cards-section">
        <div className="wrap">
          <div className="news-cards">
            <Link href="/news/press-release" className="news-card news-card--pr">
              <div className="news-card__icon">📰</div>
              <h2>Press Release</h2>
              <p>
                Official announcements, programme launches, and milestone reports
                — organised year by year.
              </p>
              <span className="news-card__cta">
                View Press Releases
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
            <Link href="/news/media-coverage" className="news-card news-card--mc">
              <div className="news-card__icon">📺</div>
              <h2>Media Coverage</h2>
              <p>
                News articles, TV features, and interviews covering our work in
                education, agriculture, and community development.
              </p>
              <span className="news-card__cta">
                View Media Coverage
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ---- News Hero ---- */
        .news-hero {
          position: relative;
          overflow: hidden;
          padding: 100px 0 80px;
          text-align: center;
          background: linear-gradient(160deg, #FAF8FE 0%, #F5F3FF 40%, #ECFDF5 100%);
        }
        .news-hero__gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%);
        }
        .news-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.18;
        }
        .news-hero__orb--1 {
          width: 400px; height: 400px;
          background: #7C3AED; top: -120px; right: -60px;
        }
        .news-hero__orb--2 {
          width: 300px; height: 300px;
          background: #10B981; bottom: -80px; left: -40px;
        }
        .news-hero__inner {
          position: relative; z-index: 2; max-width: 680px; margin: 0 auto;
        }
        .news-hero__inner .eyebrow {
          display: inline-block;
          font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #7C3AED; background: rgba(124,58,237,0.08);
          padding: 6px 18px; border-radius: 100px; margin-bottom: 20px;
        }
        .news-hero__inner h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800; line-height: 1.12; color: #18132B; margin: 0 0 16px;
        }
        .news-hero__inner .kicker {
          font-size: 1.1rem; line-height: 1.7; color: #5E5680; max-width: 560px; margin: 0 auto;
        }

        /* ---- Cards Section ---- */
        .news-cards-section {
          padding: 60px 0 100px;
          background: var(--white);
        }
        .news-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          max-width: 800px;
          margin: 0 auto;
        }
        .news-card {
          display: flex;
          flex-direction: column;
          padding: 40px 36px;
          border-radius: 20px;
          border: 1px solid rgba(124,58,237,0.08);
          background: var(--white);
          text-decoration: none;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
          box-shadow: var(--shadow-sm);
        }
        .news-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(124,58,237,0.18);
        }
        .news-card__icon {
          font-size: 42px; margin-bottom: 18px;
        }
        .news-card h2 {
          font-size: 1.4rem; font-weight: 800; color: var(--charcoal); margin: 0 0 10px;
        }
        .news-card p {
          font-size: 0.95rem; line-height: 1.7; color: var(--muted); margin: 0 0 24px; flex: 1;
        }
        .news-card__cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 700; font-size: 0.9rem;
          color: var(--purple); transition: gap 0.2s ease;
        }
        .news-card:hover .news-card__cta { gap: 12px; }

        .news-card--pr:hover { border-color: rgba(124,58,237,0.22); }
        .news-card--mc:hover { border-color: rgba(16,185,129,0.22); }
        .news-card--mc .news-card__cta { color: var(--green); }

        @media (max-width: 700px) {
          .news-hero { padding: 80px 0 60px; }
          .news-cards { gap: 20px; }
          .news-card { padding: 28px 24px; }
        }
      `}</style>
    </>
  );
}
