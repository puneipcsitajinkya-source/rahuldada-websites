import Image from "next/image";
import Link from "next/link";
import ArcDivider from "@/components/ArcDivider";
import { impactStats, focusAreas, timeline2026, press, awards, org } from "@/lib/siteData";

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <Image
          src="/images/bird-paanpoi-hero.jpeg"
          alt="A bird perched on the rim of a hand-made clay water bowl, hung in a tree"
          fill
          priority
          className="hero__img"
          sizes="100vw"
        />
        <div className="hero__scrim" />
        <div className="wrap hero__content">
          <p className="eyebrow eyebrow--light">
           Shiroli, Yavatmal · since {org.established}
          </p>
          <h1 className="hero__title">
            Water for the thirsty.<br />Roots for the rains still to come.
          </h1>
          <p className="hero__lede">
            Every summer, as ponds crack dry and the mercury climbs past 44°C, we hang
            clay water bowls on ten routes for birds who have nowhere left to drink —
            and every monsoon, we plant the trees that will shade the next generation.
          </p>
          <div className="hero__actions">
            <Link href="/involved#donate" className="btn btn--clay">Donate</Link>
            <Link href="/involved#volunteer" className="btn btn--ghost-light">Become a volunteer</Link>
            <Link href="/work" className="btn btn--ghost-light">See our work</Link>
          </div>
        </div>
        <div className="hero__arc"><ArcDivider color="var(--sand)" /></div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="section section--sand stats">
        <div className="wrap">
          <div className="grid grid--4">
            {impactStats.map((s) => (
              <div key={s.label} className="stat">
                <p className="stat__value">{s.value}</p>
                <p className="stat__label">{s.label}</p>
                <p className="stat__note">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT STRIP ---------------- */}
      <section className="section section--cream about-strip">
        <div className="wrap about-strip__grid">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>A youth mandal that started with a question about water</h2>
            <p className="kicker">
              Registered in {org.established} and active on the ground since {org.workingSince},
              Navchaitanya Bahuuddeshiya Vikas Yuva Mandal works out of Shiroli village in
              Ghatanji taluka — organising villagers, students and farmers around the
              resources their region depends on: water, trees and the birds and soil that
              share them.
            </p>
            <Link href="/about" className="btn btn--outline" style={{ marginTop: 28 }}>
              Read our story
            </Link>
          </div>
          <div className="about-strip__img">
            <Image
              src="/images/tree-grown-roadside.jpeg"
              alt="A volunteer standing beside a tree that has grown tall along a village road"
              width={640}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* ---------------- FOCUS AREAS ---------------- */}
      <section className="section section--leaf focus">
        <div className="wrap">
          <p className="eyebrow">Our focus areas</p>
          <h2>Six threads, one village at a time</h2>
          <p className="kicker">
            Each programme grew out of something we saw missing on the ground —
            not a template borrowed from elsewhere.
          </p>

          <div className="grid grid--3 focus__grid">
            {focusAreas.map((f) => (
              <Link key={f.slug} href={`/work#${f.slug}`} className="focus-card card">
                <div className="focus-card__img">
                  <Image src={f.image} alt={f.title} width={420} height={280} />
                </div>
                <div className="focus-card__body">
                  <p className="focus-card__mr mr">{f.marathi}</p>
                  <h3>{f.title}</h3>
                  <p>{f.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="section section--sand timeline">
        <div className="wrap timeline__grid">
          <div>
            <p className="eyebrow">This year</p>
            <h2>2026 activity so far</h2>
            <p className="kicker">A running log, not a promise — updated as the season moves.</p>
          </div>
          <ol className="timeline__list">
            {timeline2026.map((t, i) => (
              <li key={t.label} className={t.done ? "is-done" : ""}>
                <span className="timeline__mark">{t.done ? "✓" : i + 1}</span>
                <span>{t.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- PRESS ---------------- */}
      <section className="section section--cream press">
        <div className="wrap">
          <p className="eyebrow">In the news</p>
          <h2>What local papers have covered</h2>
          <div className="grid grid--3" style={{ marginTop: 40 }}>
            {press.map((p) => (
              <article key={p.headlineEn} className="press-card card">
                <div className="press-card__img">
                  <Image src={p.image} alt={p.headlineEn} width={420} height={300} />
                </div>
                <div className="press-card__body">
                  <p className="tag-pill">{p.outlet} · {p.date}</p>
                  <p className="press-card__mr mr">{p.headlineMr}</p>
                  <p className="press-card__en">{p.headlineEn}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- AWARDS ---------------- */}
      <section className="section section--leaf awards">
        <div className="wrap">
          <p className="eyebrow">Recognition</p>
          <h2>Honours along the way</h2>
          <div className="grid grid--2" style={{ marginTop: 36 }}>
            {awards.map((a) => (
              <div key={a.title} className="award-card card">
                <div className="award-card__img">
                  <Image src={a.image} alt={a.title} width={400} height={280} />
                </div>
                <div className="award-card__body">
                  <p className="tag-pill">{a.year}</p>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section section--forest cta-band">
        <div className="wrap cta-band__inner">
          <div>
            <h2>Two hours a week can keep a station full through May.</h2>
            <p className="kicker">
              Whether it&apos;s carrying water, planting a sapling, or funding a health camp —
              there&apos;s a way to help that fits what you have to give.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link href="/involved#volunteer" className="btn btn--clay">Volunteer with us</Link>
            <Link href="/involved#donate" className="btn btn--ghost-light">Ways to donate</Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .hero__img { object-fit: cover; z-index: 0; }
        .hero__scrim {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(15,46,31,0.35) 0%, rgba(15,46,31,0.55) 45%, rgba(15,46,31,0.92) 100%);
          z-index: 1;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          padding-bottom: 100px;
          padding-top: 140px;
          color: var(--cream);
        }
        .eyebrow--light { color: var(--clay-light); }
        .eyebrow--light::before { background: var(--clay-light); }
        .hero__title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: var(--cream);
          max-width: 780px;
        }
        .hero__lede {
          margin-top: 22px;
          max-width: 560px;
          font-size: 17px;
          color: rgba(251,247,239,0.85);
        }
        .hero__actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
        .hero__arc { position: absolute; left: 0; right: 0; bottom: -1px; z-index: 2; line-height: 0; }

        .stats { padding-top: 56px; padding-bottom: 56px; }
        .stat__value { font-family: var(--font-display); font-size: 44px; color: var(--clay); }
        .stat__label { font-weight: 700; margin-top: 4px; }
        .stat__note { font-size: 14px; color: rgba(22,36,28,0.65); margin-top: 8px; }

        .about-strip__grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
        .about-strip__img img { border-radius: 6px 32px 6px 32px; object-fit: cover; width: 100%; height: 440px; }
        @media (max-width: 860px) {
          .about-strip__grid { grid-template-columns: 1fr; }
          .about-strip__img { order: -1; }
          .about-strip__img img { height: 280px; }
        }

        .focus__grid { margin-top: 40px; }
        .focus-card { display: block; transition: transform .2s ease, box-shadow .2s ease; }
        .focus-card:hover { transform: translateY(-4px); box-shadow: 0 18px 30px -18px rgba(15,46,31,0.35); }
        .focus-card__img { height: 190px; overflow: hidden; }
        .focus-card__img img { width: 100%; height: 100%; object-fit: cover; }
        .focus-card__body { padding: 22px 22px 26px; }
        .focus-card__mr { color: var(--clay); font-weight: 600; font-size: 14px; margin-bottom: 6px; }
        .focus-card__body h3 { font-size: 20px; margin-bottom: 8px; }
        .focus-card__body p:not(.focus-card__mr) { font-size: 14.5px; color: rgba(22,36,28,0.75); }

        .timeline__grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 40px; }
        .timeline__list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .timeline__list li {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; background: var(--cream);
          border: 1px solid var(--line); border-radius: 4px 16px 4px 16px;
          font-weight: 600;
        }
        .timeline__mark {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--leaf-tint); color: var(--forest); font-size: 14px; flex-shrink: 0;
        }
        .timeline__list li.is-done .timeline__mark { background: var(--forest); color: var(--cream); }
        @media (max-width: 860px) { .timeline__grid { grid-template-columns: 1fr; } }

        .press-card__img { height: 190px; overflow: hidden; }
        .press-card__img img { width: 100%; height: 100%; object-fit: cover; }
        .press-card__body { padding: 20px 20px 24px; }
        .press-card__mr { margin-top: 12px; font-weight: 600; color: var(--forest-deep); font-size: 15px; }
        .press-card__en { margin-top: 8px; font-size: 14px; color: rgba(22,36,28,0.72); }

        .award-card { display: grid; grid-template-columns: 160px 1fr; }
        .award-card__img { height: 100%; }
        .award-card__img img { width: 100%; height: 100%; object-fit: cover; }
        .award-card__body { padding: 20px; }
        .award-card__body h3 { font-size: 18px; margin: 8px 0 8px; }
        .award-card__body p:not(.tag-pill) { font-size: 14px; color: rgba(22,36,28,0.72); }
        @media (max-width: 560px) { .award-card { grid-template-columns: 1fr; } .award-card__img { height: 160px; } }

        .cta-band__inner { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 32px; align-items: center; }
        .cta-band__actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: flex-start; }
        @media (max-width: 860px) { .cta-band__inner { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
