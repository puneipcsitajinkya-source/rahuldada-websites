import Link from "next/link";
import { org } from "@/lib/siteData";

export const metadata = { title: "Press Releases — " + org.name };

/* ---- Year-wise dummy press release data ---- */
const pressReleases = {
  2025: [
    {
      id: "pr-2025-03",
      date: "15 Aug 2025",
      title: "Navchaitanya Launches Tribal Education Scholarship Programme",
      summary:
        "The Mandal announces a scholarship initiative covering tuition, books, and uniforms for 50 tribal students across Ghatanji taluka.",
      category: "Education",
    },
    {
      id: "pr-2025-02",
      date: "26 Jan 2025",
      title: "Republic Day Plantation Drive — 1,000 Trees Planted in Shiroli",
      summary:
        "In partnership with the Forest Department, Navchaitanya completes a record-breaking single-day plantation drive involving 200+ volunteers.",
      category: "Environment",
    },
    {
      id: "pr-2025-01",
      date: "05 Jan 2025",
      title: "Annual Report 2024 Published — Highlights Key Milestones",
      summary:
        "The annual transparency report covers all programmes, financials, and community impact metrics for the fiscal year 2023–24.",
      category: "Governance",
    },
  ],
  2024: [
    {
      id: "pr-2024-04",
      date: "02 Oct 2024",
      title: "Gandhi Jayanti Health Camp Serves 800+ Villagers",
      summary:
        "A free multi-speciality health camp organised in collaboration with district hospitals provided check-ups, medicines, and referrals to over 800 residents.",
      category: "Health",
    },
    {
      id: "pr-2024-03",
      date: "14 Aug 2024",
      title: "Paanpoi Summer Programme Reaches 12 Villages",
      summary:
        "The flagship water-awareness programme expanded to 12 villages this summer, educating 600+ students on rainwater harvesting and conservation.",
      category: "Water",
    },
    {
      id: "pr-2024-02",
      date: "22 Apr 2024",
      title: "Earth Day — Navchaitanya Adopts 5 km Riverbank for Clean-Up",
      summary:
        "Youth volunteers from 8 villages participate in a riverbank restoration project along the Penganga tributary.",
      category: "Environment",
    },
    {
      id: "pr-2024-01",
      date: "12 Feb 2024",
      title: "MoU Signed with Agricultural University for Farmer Training",
      summary:
        "A formal partnership with Dr. PDKV Akola will bring seasonal agri-training workshops to marginal farmers in Yavatmal district.",
      category: "Agriculture",
    },
  ],
  2023: [
    {
      id: "pr-2023-03",
      date: "15 Nov 2023",
      title: "Navchaitanya Receives Taluka-Level Social Service Award",
      summary:
        "The Ghatanji Tahsildar's office felicitates the Mandal for outstanding contribution to community development and disaster relief during the 2023 floods.",
      category: "Recognition",
    },
    {
      id: "pr-2023-02",
      date: "05 Jun 2023",
      title: "World Environment Day — 500 Saplings Distributed Door-to-Door",
      summary:
        "Native fruit-bearing saplings were delivered to households across 6 villages with care instructions and a one-year survival pledge.",
      category: "Environment",
    },
    {
      id: "pr-2023-01",
      date: "26 Jan 2023",
      title: "First-Ever Digital Literacy Workshop for Rural Women",
      summary:
        "A 3-day workshop trained 45 women on smartphone banking, government portal access, and basic internet safety in Shiroli and nearby villages.",
      category: "Education",
    },
  ],
  2022: [
    {
      id: "pr-2022-02",
      date: "02 Oct 2022",
      title: "Blood Donation Camp Collects 120 Units in Single Day",
      summary:
        "The Mandal's annual blood donation drive, organised with the Red Cross, collected 120 units — the highest-ever single-camp total for the taluka.",
      category: "Health",
    },
    {
      id: "pr-2022-01",
      date: "15 Mar 2022",
      title: "Navchaitanya Completes Registration Under New CSR Framework",
      summary:
        "The organisation successfully updates its compliance documentation, becoming eligible for corporate CSR partnerships under Section 135.",
      category: "Governance",
    },
  ],
};

const years = Object.keys(pressReleases)
  .map(Number)
  .sort((a, b) => b - a);

const categoryColors = {
  Education: { bg: "#F5F3FF", color: "#7C3AED" },
  Environment: { bg: "#ECFDF5", color: "#059669" },
  Governance: { bg: "#FEF3C7", color: "#D97706" },
  Health: { bg: "#FEE2E2", color: "#DC2626" },
  Water: { bg: "#E0F2FE", color: "#0284C7" },
  Agriculture: { bg: "#FEF9C3", color: "#A16207" },
  Recognition: { bg: "#FDE68A", color: "#92400E" },
};

export default function PressReleasePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="pr-hero">
        <div className="pr-hero__gradient" aria-hidden="true" />
        <div className="pr-hero__orb pr-hero__orb--1" aria-hidden="true" />
        <div className="pr-hero__orb pr-hero__orb--2" aria-hidden="true" />
        <div className="wrap pr-hero__inner">
          <Link href="/news" className="pr-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to News
          </Link>
          <span className="eyebrow">Press Releases</span>
          <h1>Official Announcements</h1>
          <p className="kicker">
            Year-wise archive of press releases covering programme launches,
            milestones, partnerships, and community impact reports.
          </p>
        </div>
      </section>

      {/* ---- Year-wise Timeline ---- */}
      <section className="pr-timeline">
        <div className="wrap">
          {/* Year quick-nav */}
          <div className="pr-year-nav">
            {years.map((year) => (
              <a key={year} href={`#year-${year}`} className="pr-year-chip">
                {year}
              </a>
            ))}
          </div>

          {/* Timeline content */}
          {years.map((year) => (
            <div key={year} id={`year-${year}`} className="pr-year-block">
              <div className="pr-year-label">
                <span>{year}</span>
              </div>
              <div className="pr-list">
                {pressReleases[year].map((pr) => {
                  const cat = categoryColors[pr.category] || { bg: "#F3F4F6", color: "#6B7280" };
                  return (
                    <article key={pr.id} className="pr-card">
                      <div className="pr-card__placeholder">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="12" fill="#F5F3FF"/>
                          <path d="M14 20h20M14 26h14M14 32h8" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
                          <rect x="30" y="14" width="4" height="20" rx="2" fill="#EDE9FE"/>
                        </svg>
                      </div>
                      <div className="pr-card__body">
                        <div className="pr-card__meta">
                          <time>{pr.date}</time>
                          <span
                            className="pr-card__category"
                            style={{ background: cat.bg, color: cat.color }}
                          >
                            {pr.category}
                          </span>
                        </div>
                        <h3 className="pr-card__title">{pr.title}</h3>
                        <p className="pr-card__summary">{pr.summary}</p>
                        <span className="pr-card__read">
                          Read Full Release →
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* ---- Press Release Hero ---- */
        .pr-hero {
          position: relative; overflow: hidden;
          padding: 100px 0 72px; text-align: center;
          background: linear-gradient(160deg, #FAF8FE 0%, #F5F3FF 40%, #ECFDF5 100%);
        }
        .pr-hero__gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%);
        }
        .pr-hero__orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; }
        .pr-hero__orb--1 { width: 420px; height: 420px; background: #7C3AED; top: -140px; right: -80px; }
        .pr-hero__orb--2 { width: 280px; height: 280px; background: #10B981; bottom: -100px; left: -60px; }
        .pr-hero__inner {
          position: relative; z-index: 2; max-width: 680px; margin: 0 auto;
        }
        .pr-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.85rem; font-weight: 600; color: var(--muted);
          text-decoration: none; margin-bottom: 20px;
          transition: color 0.2s;
        }
        .pr-back:hover { color: var(--purple); }
        .pr-hero__inner .eyebrow {
          display: inline-block;
          font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #7C3AED; background: rgba(124,58,237,0.08);
          padding: 6px 18px; border-radius: 100px; margin-bottom: 18px;
        }
        .pr-hero__inner h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800; line-height: 1.12; color: #18132B; margin: 0 0 14px;
        }
        .pr-hero__inner .kicker {
          font-size: 1.05rem; line-height: 1.7; color: #5E5680; max-width: 540px; margin: 0 auto;
        }

        /* ---- Year Quick-Nav ---- */
        .pr-year-nav {
          display: flex; gap: 10px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 48px; padding-top: 8px;
        }
        .pr-year-chip {
          display: inline-block;
          padding: 8px 22px; border-radius: 100px;
          font-size: 0.9rem; font-weight: 700;
          color: var(--purple); background: var(--purple-pale);
          border: 1px solid rgba(124,58,237,0.1);
          text-decoration: none; transition: all 0.2s ease;
        }
        .pr-year-chip:hover {
          background: var(--purple); color: #fff;
          box-shadow: 0 4px 16px rgba(124,58,237,0.25);
        }

        /* ---- Timeline Section ---- */
        .pr-timeline {
          padding: 56px 0 100px;
          background: var(--white);
        }

        /* ---- Year Block ---- */
        .pr-year-block {
          margin-bottom: 56px;
        }
        .pr-year-block:last-child { margin-bottom: 0; }
        .pr-year-label {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
        }
        .pr-year-label span {
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 1.6rem; font-weight: 800; color: var(--purple);
          background: linear-gradient(135deg, #F5F3FF, #ECFDF5);
          border: 2px solid rgba(124,58,237,0.12);
          border-radius: 16px; padding: 10px 28px;
          box-shadow: 0 4px 16px rgba(124,58,237,0.06);
        }
        .pr-year-label::after {
          content: ""; flex: 1; height: 2px;
          background: linear-gradient(90deg, rgba(124,58,237,0.12), transparent);
          border-radius: 2px;
        }

        /* ---- Press Release Card ---- */
        .pr-list {
          display: flex; flex-direction: column; gap: 20px;
        }
        .pr-card {
          display: flex; gap: 24px; align-items: flex-start;
          padding: 28px 32px; border-radius: 16px;
          background: var(--white);
          border: 1px solid rgba(124,58,237,0.06);
          box-shadow: var(--shadow-sm);
          transition: transform 0.24s cubic-bezier(0.16,1,0.3,1), box-shadow 0.24s ease, border-color 0.24s ease;
        }
        .pr-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: rgba(124,58,237,0.14);
        }
        .pr-card__placeholder {
          flex-shrink: 0;
          width: 64px; height: 64px;
          display: flex; align-items: center; justify-content: center;
          background: var(--purple-pale); border-radius: 14px;
        }
        .pr-card__body { flex: 1; min-width: 0; }
        .pr-card__meta {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 8px; flex-wrap: wrap;
        }
        .pr-card__meta time {
          font-size: 0.82rem; font-weight: 600; color: var(--muted-light);
          letter-spacing: 0.02em;
        }
        .pr-card__category {
          display: inline-block;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px;
        }
        .pr-card__title {
          font-size: 1.08rem; font-weight: 700; color: var(--charcoal);
          margin: 0 0 8px; line-height: 1.4;
        }
        .pr-card__summary {
          font-size: 0.9rem; line-height: 1.65; color: var(--muted);
          margin: 0 0 12px;
        }
        .pr-card__read {
          font-size: 0.82rem; font-weight: 700; color: var(--purple);
          transition: letter-spacing 0.2s;
        }
        .pr-card:hover .pr-card__read { letter-spacing: 0.03em; }

        @media (max-width: 700px) {
          .pr-hero { padding: 80px 0 56px; }
          .pr-card {
            flex-direction: column; gap: 16px;
            padding: 22px 20px;
          }
          .pr-card__placeholder { width: 52px; height: 52px; }
          .pr-year-label span { font-size: 1.3rem; padding: 8px 20px; }
        }
      `}</style>
    </>
  );
}
