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
      {/* ---- Hero ---- */}
      <section className="work-hero">
        <div className="work-hero__bg" />
        <div className="wrap work-hero__inner">
          <span className="eyebrow">Our Work</span>
          <h1>Six focus areas, all rooted in the same villages</h1>
          <p className="kicker">
            None of this started as a plan drawn up in an office — each programme
            grew out of a need we saw first-hand in Shiroli and the villages around it.
          </p>
          {/* Jump nav */}
          <div className="work-hero__jumps">
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
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
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
          <Link href="/involved#volunteer" className="btn btn--gold" style={{ marginTop: 28 }}>
            Volunteer with Us
          </Link>
        </div>
      </section>

      <style>{`
        /* ---- Work Hero ---- */
        .work-hero {
          background: linear-gradient(135deg, var(--emerald-deep) 0%, var(--emerald) 100%);
          padding-top: 130px;
          padding-bottom: 72px;
          position: relative;
          overflow: hidden;
        }
        .work-hero__bg {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(circle at 85% 10%, rgba(201,146,42,0.1) 0%, transparent 50%),
            radial-gradient(circle at 5% 90%, rgba(42,144,96,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .work-hero__inner { position: relative; z-index: 1; }
        .work-hero h1 {
          color: #fff;
          font-size: clamp(2rem, 4.4vw, 3.1rem);
          max-width: 780px;
          margin-top: 8px;
        }
        .work-hero .kicker { color: rgba(255,255,255,0.7); }

        .work-hero__jumps {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 36px;
        }
        .work-jump-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.82);
          transition: background 0.2s, color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .work-jump-pill:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--white);
          transform: translateY(-2px);
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

        .work-block__img-wrap { }
        .work-block__img-frame {
          position: relative;
          border-radius: 0 36px 0 36px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
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
          background: rgba(9,46,30,0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
        }

        .work-block__title { font-size: clamp(1.7rem, 2.8vw, 2.2rem); margin-top: 8px; }
        .work-block__summary { font-size: 16px; color: var(--muted); line-height: 1.72; margin-top: 16px; }

        .work-block__points { list-style: none; margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
        .work-block__points li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 14.5px;
          color: var(--charcoal);
        }
        .work-point__check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: var(--emerald-tint);
          color: var(--emerald);
          flex-shrink: 0;
        }

        /* ---- Work CTA ---- */
        .work-cta__inner {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .work-cta__icon { font-size: 48px; margin-bottom: 16px; }
        .work-cta h2 { font-size: clamp(1.8rem, 3vw, 2.4rem); }
        .work-cta .kicker { margin: 14px auto 0; text-align: center; }
      `}</style>
    </>
  );
}
