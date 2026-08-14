import Image from "next/image";
import ArcDivider from "@/components/ArcDivider";
import { org, awards } from "@/lib/siteData";

export const metadata = { title: "About Us — " + org.name };

const committee = [
  {
    name: "Subhash Mankar",
    role: "Guiding Mentor",
    initials: "SM",
    note: "Credited by local press as the mentor behind the Mandal's on-ground work.",
  },
  {
    name: "Rahul Jivane",
    role: "Field Coordinator",
    initials: "RJ",
    note: "Leads the summer paanpoi programme and plantation drives; felicitated by the Ghatanji Tahsildar's office.",
  },
];

const values = [
  { icon: "🌱", title: "Ground-up", text: "Every programme grew from something we saw missing in the villages we live in." },
  { icon: "🤝", title: "Community-led", text: "Farmers, students, and youth volunteers drive every initiative — not outside consultants." },
  { icon: "📊", title: "Transparent", text: "We report what happened on the ground, not what we planned in a meeting room." },
  { icon: "🌍", title: "Long-term", text: "We plant trees we won't stand under, and build water structures the next village will use." },
];

export default function AboutPage() {
  return (
    <>
      {/* ---- Hero (Light Theme: Purple + Light Green) ---- */}
      <section className="about-hero">
        <div className="about-hero__gradient" aria-hidden="true" />
        <div className="about-hero__orb about-hero__orb--1" aria-hidden="true" />
        <div className="about-hero__orb about-hero__orb--2" aria-hidden="true" />
        <div className="about-hero__grid" aria-hidden="true" />
        <div className="about-hero__shimmer" aria-hidden="true" />
        <div className="wrap about-hero__inner">
          <span className="eyebrow anim-hero-1">About Us</span>
          <h1 className="anim-hero-2">Twenty years of showing up, village by village</h1>
          <p className="kicker anim-hero-3">
            {org.name} is a registered non-government organisation working from
            Shiroli in Ghatanji taluka, Yavatmal district — organised by young
            volunteers who grew up in the villages they now work in.
          </p>
          <div className="about-hero__meta anim-hero-4">
            <div className="about-hero__meta-item">
              <strong>Est. {org.established}</strong>
              <span>Registered</span>
            </div>
            <div className="about-hero__meta-divider" />
            <div className="about-hero__meta-item">
              <strong>Since {org.workingSince}</strong>
              <span>Field Active</span>
            </div>
            <div className="about-hero__meta-divider" />
            <div className="about-hero__meta-item">
              <strong>3 Awards</strong>
              <span>Recognised</span>
            </div>
          </div>
        </div>
      </section>
      <ArcDivider color="var(--parchment)" />

      {/* ---- Journey / History ---- */}
      <section className="section section--parchment">
        <div className="wrap history-grid">
          <div className="history-body">
            <span className="eyebrow">Our Journey</span>
            <h2>From registration to the roads we&apos;ve since planted</h2>
            <p className="history-text">
              The Mandal was registered in {org.established} and began active field work
              in {org.workingSince}. What started as small village-level clean-up and
              plantation efforts grew, over two decades, into a standing programme:
              water conservation structures, a summer bird-water network spanning ten
              routes, school and roadside plantation drives, and rural health and
              livelihood work carried out with volunteers from Shiroli and the
              surrounding villages.
            </p>
            <p className="history-text">
              The work has been recognised locally — including felicitation by the
              Ghatanji Tahsildar&apos;s office on Independence Day, and awards from
              Krishithon and Baliraja Sevabhavi Pratishthan — but the day-to-day is
              still the same as it was at the start: a handful of volunteers, a
              scooter, and ten litres of water to carry.
            </p>
          </div>
          <div className="history-img-wrap">
            <div className="history-img-frame">
              <Image
                src="/images/event-field-visit.jpeg"
                alt="Members of the Mandal in discussion during a field visit"
                width={640}
                height={760}
                className="history-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Mission / Vision ---- */}
      <section className="section section--white">
        <div className="wrap">
          <div className="mv-intro">
            <span className="eyebrow">Our Purpose</span>
            <h2>Mission &amp; Vision</h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-card__icon">🎯</div>
              <span className="tag-pill">Mission</span>
              <p className="mv-card__text">
                Creating awareness among rural communities regarding conservation and
                judicious use of natural resources, while promoting sustainable
                livelihoods through appropriate, optimised technologies.
              </p>
            </div>
            <div className="mv-card mv-card--vision">
              <div className="mv-card__icon">🔭</div>
              <span className="tag-pill tag-pill--green">Vision</span>
              <p className="mv-card__text">
                To reduce poverty among rural communities through the restoration,
                conservation and sustainable management of natural resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="section section--parchment">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow">What Guides Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Committee ---- */}
      <section className="section section--white">
        <div className="wrap">
          <span className="eyebrow">People Behind the Work</span>
          <h2>Executive Committee</h2>
          <div className="committee-grid" style={{ marginTop: 40 }}>
            {committee.map((c) => (
              <div key={c.name} className="committee-card">
                <div className="committee-card__avatar">{c.initials}</div>
                <div className="committee-card__body">
                  <h3 className="committee-card__name">{c.name}</h3>
                  <p className="committee-card__role">{c.role}</p>
                  <p className="committee-card__note">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="committee-footnote">
            Full committee listing to be updated with photos, positions and years of
            experience for each member.
          </p>
        </div>
      </section>

      {/* ---- Awards ---- */}
      <section className="section section--parchment">
        <div className="wrap">
          <span className="eyebrow">Recognition</span>
          <h2>Honours Received</h2>
          <div className="about-awards-grid" style={{ marginTop: 40 }}>
            {awards.map((a) => (
              <div key={a.title} className="about-award-card">
                <div className="about-award-card__img-wrap">
                  <Image src={a.image} alt={a.title} width={420} height={300} className="about-award-card__img" />
                </div>
                <div className="about-award-card__body">
                  <span className="tag-pill tag-pill--green">{a.year}</span>
                  <h3 className="about-award-card__title">{a.title}</h3>
                  <p className="about-award-card__detail">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ---- About Hero ---- */
        .about-hero {
          background: #FAF8FE;
          padding-top: 140px;
          padding-bottom: 84px;
          position: relative;
          overflow: hidden;
        }
        .about-hero__gradient {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 75% 65% at 25% 35%, rgba(124, 58, 237, 0.16) 0%, transparent 65%),
            radial-gradient(ellipse 60% 75% at 80% 45%, rgba(52, 211, 153, 0.22) 0%, transparent 60%),
            linear-gradient(180deg, #FFFFFF 0%, #FAF8FE 100%);
          animation: heroGradientShift 16s ease-in-out infinite alternate;
        }
        .about-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;
        }
        .about-hero__orb--1 {
          width: 480px; height: 480px; top: -80px; right: 5%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%);
          animation: orbFloat1 19s ease-in-out infinite;
        }
        .about-hero__orb--2 {
          width: 320px; height: 320px; bottom: -30px; left: 15%;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
          animation: orbFloat3 15s ease-in-out infinite;
        }
        .about-hero__grid {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(124, 58, 237, 0.05) 1.2px, transparent 1.2px);
          background-size: 34px 34px;
          animation: gridPan 40s linear infinite;
          pointer-events: none;
        }
        .about-hero__shimmer {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(115deg, transparent 30%, rgba(52, 211, 153, 0.06) 50%, transparent 70%);
          background-size: 300% 300%;
          animation: heroShimmer 12s linear infinite;
          pointer-events: none;
        }
        .about-hero__inner { position: relative; z-index: 3; }
        .about-hero h1 {
          color: var(--charcoal);
          font-size: clamp(2.4rem, 4.8vw, 3.5rem);
          max-width: 800px;
          margin-top: 8px;
        }
        .about-hero .kicker { color: var(--muted); }
        .about-hero__meta {
          display: flex;
          align-items: center;
          gap: 0;
          margin-top: 40px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(124, 58, 237, 0.12);
          border-radius: 20px;
          padding: 20px 32px;
          width: fit-content;
          backdrop-filter: blur(12px);
          box-shadow: var(--shadow-sm);
        }
        .about-hero__meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 32px;
          gap: 4px;
        }
        .about-hero__meta-item strong {
          font-family: var(--font-display);
          font-size: 26px;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .about-hero__meta-item span {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .about-hero__meta-divider {
          width: 1px;
          height: 48px;
          background: rgba(124, 58, 237, 0.15);
        }
        @media (max-width: 600px) {
          .about-hero__meta { flex-direction: column; gap: 16px; width: 100%; }
          .about-hero__meta-item { padding: 0; }
          .about-hero__meta-divider { width: 60%; height: 1px; }
        }

        /* ---- History ---- */
        .history-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 860px) { .history-grid { grid-template-columns: 1fr; gap: 40px; } }
        .history-body h2 { font-size: clamp(2rem, 3.2vw, 2.6rem); margin-top: 8px; }
        .history-text { margin-top: 18px; font-size: 16.5px; color: var(--muted); line-height: 1.75; }
        .history-img-frame {
          border-radius: 0 44px 0 44px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--white);
        }
        .history-img { width: 100% !important; height: 480px !important; object-fit: cover; display: block; }
        @media (max-width: 860px) { .history-img { height: 300px !important; } }

        /* ---- Mission / Vision ---- */
        .mv-intro { text-align: center; margin-bottom: 48px; }
        .mv-intro h2 { font-size: clamp(2rem, 3.2vw, 2.6rem); margin-top: 8px; }
        .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 640px) { .mv-grid { grid-template-columns: 1fr; } }

        .mv-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: var(--radius-lg);
          padding: 44px 40px;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border-top: 5px solid var(--purple);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease;
        }
        .mv-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .mv-card--vision { border-top-color: var(--green); }
        .mv-card__icon { font-size: 38px; margin-bottom: 18px; }
        .mv-card .tag-pill { margin-bottom: 16px; display: inline-block; }
        .mv-card__text {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 600;
          color: var(--charcoal);
          line-height: 1.5;
          margin-top: 14px;
        }

        /* ---- Values ---- */
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr; } }

        .value-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: var(--radius-md);
          padding: 32px 26px;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .value-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: rgba(124, 58, 237, 0.2); }
        .value-card__icon { font-size: 34px; margin-bottom: 16px; display: block; }
        .value-card__title {
          font-size: 19px;
          font-weight: 700;
          color: var(--charcoal);
          margin-bottom: 10px;
        }
        .value-card__text { font-size: 14.5px; color: var(--muted); line-height: 1.65; }

        /* ---- Committee ---- */
        .committee-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 640px) { .committee-grid { grid-template-columns: 1fr; } }

        .committee-card {
          display: flex;
          gap: 22px;
          align-items: flex-start;
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: var(--radius-lg);
          padding: 30px;
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--purple);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .committee-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .committee-card__avatar {
          width: 58px; height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.25);
        }
        .committee-card__body { flex: 1; }
        .committee-card__name { font-size: 21px; font-weight: 700; color: var(--charcoal); }
        .committee-card__role {
          font-size: 12.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--purple);
          margin-top: 4px;
        }
        .committee-card__note { margin-top: 10px; font-size: 14.5px; color: var(--muted); line-height: 1.6; }
        .committee-footnote { margin-top: 24px; font-size: 13.5px; color: var(--muted-light); font-style: italic; }

        /* ---- About Awards ---- */
        .about-awards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 640px) { .about-awards-grid { grid-template-columns: 1fr; } }

        .about-award-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(124, 58, 237, 0.08);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .about-award-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: rgba(16, 185, 129, 0.3); }
        .about-award-card__img-wrap { overflow: hidden; height: 230px; }
        .about-award-card__img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .about-award-card:hover .about-award-card__img { transform: scale(1.06); }
        .about-award-card__body { padding: 26px; }
        .about-award-card__title { font-size: 19px; font-weight: 700; color: var(--charcoal); margin: 10px 0; }
        .about-award-card__detail { font-size: 14px; color: var(--muted); line-height: 1.6; }
      `}</style>
    </>
  );
}
