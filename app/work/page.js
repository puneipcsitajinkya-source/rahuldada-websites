import Image from "next/image";
import Link from "next/link";
import { focusAreas, org } from "@/lib/siteData";

export const metadata = { title: "Our Work — " + org.name };

export default function WorkPage() {
  return (
    <>
      <section className="work-hero section--forest section">
        <div className="wrap">
          <p className="eyebrow">Our work</p>
          <h1>Six focus areas, all rooted in the same villages</h1>
          <p className="kicker">
            None of this started as a plan drawn up in an office — each programme
            grew out of a need we saw first-hand in Shiroli and the villages around it.
          </p>
        </div>
      </section>

      {focusAreas.map((f, i) => (
        <section
          id={f.slug}
          key={f.slug}
          className={`section work-block ${i % 2 === 0 ? "section--sand" : "section--leaf"}`}
        >
          <div className={`wrap work-block__grid ${i % 2 === 1 ? "is-reversed" : ""}`}>
            <div className="work-block__img">
              <Image src={f.image} alt={f.title} width={640} height={480} />
            </div>
            <div className="work-block__body">
              <p className="eyebrow">{f.marathi}</p>
              <h2>{f.title}</h2>
              <p className="kicker">{f.summary}</p>
              <ul className="work-block__points">
                {f.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--forest work-cta">
        <div className="wrap work-cta__inner">
          <h2>Want to see any of this up close?</h2>
          <p className="kicker">Join a paanpoi round or a plantation drive — most run on weekends.</p>
          <Link href="/involved#volunteer" className="btn btn--clay" style={{ marginTop: 20 }}>
            Volunteer with us
          </Link>
        </div>
      </section>

      <style>{`
        .work-hero { padding-top: 140px; padding-bottom: 80px; }
        .work-hero h1 { color: var(--cream); font-size: clamp(2rem, 4.2vw, 3rem); max-width: 780px; margin-top: 6px; }

        .work-block__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: center; }
        .work-block__grid.is-reversed { direction: rtl; }
        .work-block__grid.is-reversed > * { direction: ltr; }
        .work-block__img img { border-radius: 6px 32px 6px 32px; object-fit: cover; width: 100%; height: 380px; }
        .work-block__points { list-style: none; margin-top: 22px; display: flex; flex-direction: column; gap: 10px; }
        .work-block__points li {
          padding-left: 28px;
          position: relative;
          font-weight: 600;
          font-size: 15px;
        }
        .work-block__points li::before {
          content: "";
          position: absolute; left: 0; top: 7px;
          width: 14px; height: 8px;
          border-left: 2px solid var(--clay);
          border-bottom: 2px solid var(--clay);
          transform: rotate(-45deg);
        }
        @media (max-width: 860px) {
          .work-block__grid, .work-block__grid.is-reversed { grid-template-columns: 1fr; direction: ltr; }
          .work-block__img img { height: 260px; }
        }

        .work-cta__inner { text-align: center; }
        .work-cta h2 { color: var(--cream); }
        .work-cta .kicker { margin: 14px auto 0; text-align: center; }
      `}</style>
    </>
  );
}
