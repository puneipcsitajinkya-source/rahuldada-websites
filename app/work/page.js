import Image from "next/image";
import Link from "next/link";
import { focusAreas, org } from "@/lib/siteData";

export const metadata = { title: "Our Work — " + org.name };

const focusIcons = {
  water:               "💧",
  birds:               "🐦",
  trees:               "🌳",
  environment:         "♻️",
  health:              "🏥",
  "rural-development": "🌾",
};

export default function WorkPage() {
  return (
    <>
      {/* ---- Hero (Light Theme: Purple + Light Green) ---- */}
      <section className="work-hero">
        <div className="work-hero__gradient" aria-hidden="true" />
        <div className="work-hero__orb work-hero__orb--1" aria-hidden="true" />
        <div className="work-hero__orb work-hero__orb--2" aria-hidden="true" />
        <div className="work-hero__orb work-hero__orb--3" aria-hidden="true" />
        <div className="work-hero__grid" aria-hidden="true" />
        <div className="work-hero__shimmer" aria-hidden="true" />
        <div className="wrap work-hero__inner">
          <span className="eyebrow anim-hero-1">Our Work</span>
          <h1 className="anim-hero-2">Six focus areas, all rooted in the same villages</h1>
          <p className="kicker anim-hero-3">
            None of this started as a plan drawn up in an office — each programme
            grew out of a need we saw first-hand in Shiroli and the villages around it.
          </p>
          {/* Jump nav */}
          <div className="work-hero__jumps anim-hero-4">
            {focusAreas.map((f) => (
              <a key={f.slug} href={`#${f.slug}`} className="work-jump-pill">
                <span>{focusIcons[f.slug]}</span>
                {f.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Work blocks ---- */}
      {focusAreas.map((f, i) => (
        <section
          id={f.slug}
          key={f.slug}
          className={`section work-block ${i % 2 === 0 ? "section--white" : "section--parchment"}`}
        >
          <div className={`wrap work-block__grid ${i % 2 === 1 ? "is-reversed" : ""}`}>
            <div className="work-block__img-wrap">
              <div className="work-block__img-frame">
                <Image src={f.image} alt={f.title} width={640} height={480} className="work-block__img" />
                <div className="work-block__img-tag">
                  <span>{focusIcons[f.slug]}</span>
                  <span className="mr">{f.marathi}</span>
                </div>
              </div>
            </div>
            <div className="work-block__body">
              <span className="eyebrow">{f.marathi}</span>
              <h2 className="work-block__title">{f.title}</h2>
              <p className="work-block__summary">{f.summary}</p>
              <ul className="work-block__points">
                {f.points.map((pt) => (
                  <li key={pt}>
                    <span className="work-point__check">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* ---- CTA ---- */}
      <section className="section section--emerald work-cta">
        <div className="wrap work-cta__inner">
          <div className="work-cta__icon">👐</div>
          <h2>Want to see any of this up close?</h2>
          <p className="kicker">
            Join a paanpoi round or a plantation drive — most run on weekends.
          </p>
          <Link href="/involved#volunteer" className="btn btn--primary" style={{ marginTop: 28 }}>
            Volunteer with Us
          </Link>
        </div>
      </section>

      <style>{`
        /* ---- Work Hero ---- */
        .work-hero {
          background: #FAF8FE;
          padding-top: 140px;
          padding-bottom: 84px;
          position: relative;
          overflow: hidden;
        }
        /* animated mesh */
        .work-hero__gradient {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 70% 70% at 15% 30%, rgba(124, 58, 237, 0.16) 0%, transparent 65%),
            radial-gradient(ellipse 55% 80% at 85% 40%, rgba(52, 211, 153, 0.22) 0%, transparent 60%),
            linear-gradient(180deg, #FFFFFF 0%, #FAF8FE 100%);
          animation: heroGradientShift 14s ease-in-out infinite alternate;
        }
        .work-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;
        }
        .work-hero__orb--1 {
          width: 480px; height: 480px; top: -100px; right: 2%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%);
          animation: orbFloat2 20s ease-in-out infinite;
        }
        .work-hero__orb--2 {
          width: 360px; height: 360px; bottom: -40px; left: 10%;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
          animation: orbFloat3 17s ease-in-out infinite;
        }
        .work-hero__orb--3 {
          width: 280px; height: 280px; top: 20%; right: 25%;
          background: radial-gradient(circle, rgba(167, 139, 250, 0.18) 0%, transparent 70%);
          animation: orbFloat4 24s ease-in-out infinite;
        }
        .work-hero__grid {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(124, 58, 237, 0.05) 1.2px, transparent 1.2px);
          background-size: 34px 34px;
          animation: gridPan 40s linear infinite;
          pointer-events: none;
        }
        .work-hero__shimmer {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(115deg, transparent 30%, rgba(52, 211, 153, 0.06) 50%, transparent 70%);
          background-size: 300% 300%;
          animation: heroShimmer 10s linear infinite;
          pointer-events: none;
        }
        .work-hero__inner { position: relative; z-index: 3; }
        .work-hero h1 {
          color: var(--charcoal);
          font-size: clamp(2.4rem, 4.6vw, 3.4rem);
          max-width: 820px;
          margin-top: 8px;
          letter-spacing: -0.02em;
        }
        .work-hero .kicker { color: var(--muted); }

        .work-hero__jumps {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 36px;
        }
        .work-jump-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 13.5px;
          font-weight: 700;
          color: var(--ink);
          box-shadow: var(--shadow-sm);
          transition: background 0.25s, color 0.25s, transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          text-decoration: none;
        }
        .work-jump-pill:hover {
          background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%);
          border-color: transparent;
          color: var(--white);
          transform: translateY(-3px);
          box-shadow: var(--shadow-primary);
        }

        /* ---- Work Blocks ---- */
        .work-block__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .work-block__grid.is-reversed { direction: rtl; }
        .work-block__grid.is-reversed > * { direction: ltr; }
        @media (max-width: 860px) {
          .work-block__grid, .work-block__grid.is-reversed { grid-template-columns: 1fr; direction: ltr; gap: 36px; }
        }

        .work-block__img-frame {
          position: relative;
          border-radius: 0 40px 0 40px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--white);
        }
        .work-block__img {
          width: 100% !important;
          height: 380px !important;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .work-block__img-frame:hover .work-block__img { transform: scale(1.05); }
        @media (max-width: 860px) { .work-block__img { height: 260px !important; } }

        .work-block__img-tag {
          position: absolute;
          bottom: 18px;
          right: 18px;
          background: rgba(24, 19, 43, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 12px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .work-block__title { font-size: clamp(1.9rem, 3vw, 2.4rem); margin-top: 8px; }
        .work-block__summary { font-size: 16.5px; color: var(--muted); line-height: 1.72; margin-top: 16px; }

        .work-block__points { list-style: none; margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
        .work-block__points li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 15px;
          color: var(--charcoal);
        }
        .work-point__check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple-tint), var(--green-tint));
          color: var(--purple-dark);
          flex-shrink: 0;
        }

        /* ---- Work CTA ---- */
        .work-cta__inner {
          text-align: center;
          max-width: 620px;
          margin: 0 auto;
        }
        .work-cta__icon { font-size: 48px; margin-bottom: 16px; }
        .work-cta h2 { font-size: clamp(2rem, 3.4vw, 2.6rem); color: #fff; }
        .work-cta .kicker { margin: 14px auto 0; text-align: center; color: rgba(255,255,255,0.8); }
      `}</style>
    </>
  );
}
