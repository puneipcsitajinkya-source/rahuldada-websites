import Link from "next/link";
import { org } from "@/lib/siteData";

export const metadata = { title: "Media Coverage — " + org.name };

/* ---- Dummy media coverage data ---- */
const mediaCoverage = [
  {
    id: "mc-01",
    date: "20 Aug 2025",
    source: "Lokmat Times",
    type: "Newspaper",
    title: "Ghatanji's Youth-Led NGO Sets Benchmark in Tribal Education",
    summary:
      "Lokmat Times features Navchaitanya's scholarship programme that has enabled 50 tribal students to continue education beyond 10th standard.",
    link: "#",
  },
  {
    id: "mc-02",
    date: "05 Jul 2025",
    source: "ABP Majha",
    type: "TV",
    title: "ABP Majha Covers Navchaitanya's Plantation Drive in Shiroli",
    summary:
      "A 4-minute TV feature showcasing the 1,000-tree Republic Day plantation drive and interviews with local volunteers and forest officials.",
    link: "#",
  },
  {
    id: "mc-03",
    date: "12 Mar 2025",
    source: "The Hitavada",
    type: "Newspaper",
    title: "Yavatmal NGO Partners with Agricultural University for Farmer Training",
    summary:
      "The Hitavada reports on the MoU between Navchaitanya and Dr. PDKV Akola for seasonal agri-training workshops across the district.",
    link: "#",
  },
  {
    id: "mc-04",
    date: "18 Nov 2024",
    source: "Sakal",
    type: "Newspaper",
    title: "Navchaitanya Awarded Taluka-Level Social Service Recognition",
    summary:
      "Sakal covers the felicitation ceremony by the Ghatanji Tahsildar's office recognising the Mandal's contribution during the 2023 floods.",
    link: "#",
  },
  {
    id: "mc-05",
    date: "08 Oct 2024",
    source: "Zee 24 Taas",
    type: "TV",
    title: "Health Camp in Ghatanji Serves Over 800 Villagers — Zee 24 Taas Report",
    summary:
      "A news segment covering the Gandhi Jayanti free health camp organised in partnership with district hospitals.",
    link: "#",
  },
  {
    id: "mc-06",
    date: "22 Jun 2024",
    source: "Maharashtra Times",
    type: "Newspaper",
    title: "Paanpoi Programme Teaches Rainwater Harvesting to 600+ Students",
    summary:
      "Maharashtra Times highlights how the flagship Paanpoi summer programme expanded to 12 villages, educating students on water conservation.",
    link: "#",
  },
  {
    id: "mc-07",
    date: "10 Jan 2024",
    source: "Dainik Bhaskar",
    type: "Newspaper",
    title: "Navchaitanya's Blood Drive Sets Record — 120 Units in One Day",
    summary:
      "Dainik Bhaskar reports on the annual blood donation camp organised with the Red Cross, which collected the highest-ever single-camp total for the taluka.",
    link: "#",
  },
  {
    id: "mc-08",
    date: "15 Jun 2023",
    source: "News18 Lokmat",
    type: "Online",
    title: "500 Saplings Distributed Door-to-Door on World Environment Day",
    summary:
      "News18 Lokmat digital covers the door-to-door sapling distribution drive with a one-year survival pledge by volunteers.",
    link: "#",
  },
];

const typeIcons = {
  Newspaper: "📰",
  TV: "📺",
  Online: "🌐",
};

const typeColors = {
  Newspaper: { bg: "#F5F3FF", color: "#7C3AED" },
  TV: { bg: "#FEE2E2", color: "#DC2626" },
  Online: { bg: "#E0F2FE", color: "#0284C7" },
};

export default function MediaCoveragePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="mc-hero">
        <div className="mc-hero__gradient" aria-hidden="true" />
        <div className="mc-hero__orb mc-hero__orb--1" aria-hidden="true" />
        <div className="mc-hero__orb mc-hero__orb--2" aria-hidden="true" />
        <div className="wrap mc-hero__inner">
          <Link href="/news" className="mc-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to News
          </Link>
          <span className="eyebrow">Media Coverage</span>
          <h1>Navchaitanya in the News</h1>
          <p className="kicker">
            Newspaper features, TV reports, and online articles covering our
            work across education, environment, health, and community development.
          </p>
        </div>
      </section>

      {/* ---- Coverage Grid ---- */}
      <section className="mc-section">
        <div className="wrap">
          <div className="mc-grid">
            {mediaCoverage.map((item) => {
              const tc = typeColors[item.type] || { bg: "#F3F4F6", color: "#6B7280" };
              return (
                <article key={item.id} className="mc-card">
                  {/* Placeholder image area */}
                  <div className="mc-card__image">
                    <div className="mc-card__placeholder">
                      <span className="mc-card__placeholder-icon">
                        {typeIcons[item.type] || "📄"}
                      </span>
                      <span className="mc-card__placeholder-text">{item.source}</span>
                    </div>
                  </div>
                  <div className="mc-card__body">
                    <div className="mc-card__meta">
                      <time>{item.date}</time>
                      <span
                        className="mc-card__type"
                        style={{ background: tc.bg, color: tc.color }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <div className="mc-card__source">{item.source}</div>
                    <h3 className="mc-card__title">{item.title}</h3>
                    <p className="mc-card__summary">{item.summary}</p>
                    <a href={item.link} className="mc-card__link">
                      View Coverage →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        /* ---- Media Coverage Hero ---- */
        .mc-hero {
          position: relative; overflow: hidden;
          padding: 100px 0 72px; text-align: center;
          background: linear-gradient(160deg, #ECFDF5 0%, #F5F3FF 50%, #FAF8FE 100%);
        }
        .mc-hero__gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%);
        }
        .mc-hero__orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; }
        .mc-hero__orb--1 { width: 400px; height: 400px; background: #10B981; top: -130px; left: -70px; }
        .mc-hero__orb--2 { width: 320px; height: 320px; background: #7C3AED; bottom: -100px; right: -60px; }
        .mc-hero__inner {
          position: relative; z-index: 2; max-width: 680px; margin: 0 auto;
        }
        .mc-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.85rem; font-weight: 600; color: var(--muted);
          text-decoration: none; margin-bottom: 20px;
          transition: color 0.2s;
        }
        .mc-back:hover { color: var(--green); }
        .mc-hero__inner .eyebrow {
          display: inline-block;
          font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #059669; background: rgba(16,185,129,0.08);
          padding: 6px 18px; border-radius: 100px; margin-bottom: 18px;
        }
        .mc-hero__inner h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800; line-height: 1.12; color: #18132B; margin: 0 0 14px;
        }
        .mc-hero__inner .kicker {
          font-size: 1.05rem; line-height: 1.7; color: #5E5680; max-width: 540px; margin: 0 auto;
        }

        /* ---- Coverage Grid ---- */
        .mc-section {
          padding: 56px 0 100px;
          background: var(--white);
        }
        .mc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
        }

        /* ---- Media Card ---- */
        .mc-card {
          display: flex; flex-direction: column;
          border-radius: 18px; overflow: hidden;
          background: var(--white);
          border: 1px solid rgba(124,58,237,0.06);
          box-shadow: var(--shadow-sm);
          transition: transform 0.26s cubic-bezier(0.16,1,0.3,1), box-shadow 0.26s ease, border-color 0.26s ease;
        }
        .mc-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(16,185,129,0.16);
        }

        /* Placeholder image */
        .mc-card__image {
          width: 100%; height: 180px;
          background: linear-gradient(135deg, #F5F3FF 0%, #ECFDF5 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .mc-card__placeholder {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .mc-card__placeholder-icon {
          font-size: 40px;
          opacity: 0.7;
        }
        .mc-card__placeholder-text {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--muted-light);
        }

        /* Card body */
        .mc-card__body {
          padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column;
        }
        .mc-card__meta {
          display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
        }
        .mc-card__meta time {
          font-size: 0.78rem; font-weight: 600; color: var(--muted-light);
        }
        .mc-card__type {
          display: inline-block;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 2px 9px; border-radius: 100px;
        }
        .mc-card__source {
          font-size: 0.82rem; font-weight: 700; color: var(--green);
          margin-bottom: 6px; letter-spacing: 0.02em;
        }
        .mc-card__title {
          font-size: 1.02rem; font-weight: 700; color: var(--charcoal);
          margin: 0 0 8px; line-height: 1.4;
        }
        .mc-card__summary {
          font-size: 0.88rem; line-height: 1.6; color: var(--muted);
          margin: 0 0 16px; flex: 1;
        }
        .mc-card__link {
          font-size: 0.82rem; font-weight: 700; color: var(--green);
          text-decoration: none; transition: letter-spacing 0.2s;
        }
        .mc-card:hover .mc-card__link { letter-spacing: 0.03em; }

        @media (max-width: 700px) {
          .mc-hero { padding: 80px 0 56px; }
          .mc-grid { grid-template-columns: 1fr; gap: 20px; }
          .mc-card__image { height: 140px; }
          .mc-card__body { padding: 20px 18px 24px; }
        }
      `}</style>
    </>
  );
}
