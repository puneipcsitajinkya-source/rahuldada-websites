import Image from "next/image";
import ArcDivider from "@/components/ArcDivider";
import { org, awards } from "@/lib/siteData";

export const metadata = { title: "About Us — " + org.name };

const committee = [
  { name: "Subhash Mankar", role: "Guiding Mentor", note: "Credited by local press as the mentor behind the Mandal's on-ground work." },
  { name: "Rahul Jivane", role: "Field Coordinator", note: "Leads the summer paanpoi programme and plantation drives; felicitated by the Ghatanji Tahsildar's office." },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero section--forest section">
        <div className="wrap">
          <p className="eyebrow">About us</p>
          <h1>Twenty years of showing up, village by village</h1>
          <p className="kicker">
            {org.name} is a registered non-government organisation working from
            Shiroli in Ghatanji taluka, Yavatmal district — organised by young
            volunteers who grew up in the villages they now work in.
          </p>
        </div>
      </section>
      <ArcDivider color="var(--sand)" />

      <section className="section section--sand history">
        <div className="wrap history__grid">
          <div>
            <p className="eyebrow">Our journey</p>
            <h2>From registration to the roads we&apos;ve since planted</h2>
            <p style={{ marginTop: 18, color: "rgba(22,36,28,0.78)" }}>
              The Mandal was registered in {org.established} and began active field work
              in {org.workingSince}. What started as small village-level clean-up and
              plantation efforts grew, over two decades, into a standing programme:
              water conservation structures, a summer bird-water network spanning ten
              routes, school and roadside plantation drives, and rural health and
              livelihood work carried out with volunteers from Shiroli and the
              surrounding villages.
            </p>
            <p style={{ marginTop: 16, color: "rgba(22,36,28,0.78)" }}>
              The work has been recognised locally — including felicitation by the
              Ghatanji Tahsildar&apos;s office on Independence Day, and awards from
              Krishithon and Baliraja Sevabhavi Pratishthan — but the day-to-day is
              still the same as it was at the start: a handful of volunteers, a
              scooter, and ten litres of water to carry.
            </p>
          </div>
          <div className="history__img">
            <Image
              src="/images/event-field-visit.jpeg"
              alt="Members of the Mandal in discussion during a field visit"
              width={640}
              height={760}
            />
          </div>
        </div>
      </section>

      <section className="section section--leaf mission-vision">
        <div className="wrap grid grid--2">
          <div className="mv-card card">
            <p className="tag-pill">Mission</p>
            <p className="mv-card__text">
              Creating awareness among rural communities regarding conservation and
              judicious use of natural resources, while promoting sustainable
              livelihoods through appropriate, optimised technologies.
            </p>
          </div>
          <div className="mv-card card">
            <p className="tag-pill">Vision</p>
            <p className="mv-card__text">
              To reduce poverty among rural communities through the restoration,
              conservation and sustainable management of natural resources.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream committee">
        <div className="wrap">
          <p className="eyebrow">People behind the work</p>
          <h2>Executive committee</h2>
          <div className="grid grid--2" style={{ marginTop: 36 }}>
            {committee.map((c) => (
              <div key={c.name} className="committee-card card">
                <h3>{c.name}</h3>
                <p className="committee-card__role">{c.role}</p>
                <p className="committee-card__note">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="committee-note">
            Full committee listing to be updated with photos, positions and years of
            experience for each member.
          </p>
        </div>
      </section>

      <section className="section section--leaf about-awards">
        <div className="wrap">
          <p className="eyebrow">Recognition</p>
          <h2>Honours received</h2>
          <div className="grid grid--2" style={{ marginTop: 32 }}>
            {awards.map((a) => (
              <div key={a.title} className="card about-award">
                <Image src={a.image} alt={a.title} width={420} height={300} />
                <div className="about-award__body">
                  <p className="tag-pill">{a.year}</p>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-hero { padding-top: 140px; padding-bottom: 90px; }
        .about-hero h1 { color: var(--cream); font-size: clamp(2rem, 4.4vw, 3.1rem); max-width: 760px; margin-top: 6px; }

        .history__grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: start; }
        .history__img img { border-radius: 6px 32px 6px 32px; object-fit: cover; width: 100%; height: 460px; }
        @media (max-width: 860px) {
          .history__grid { grid-template-columns: 1fr; }
          .history__img img { height: 280px; }
        }

        .mv-card { padding: 32px; }
        .mv-card__text { font-family: var(--font-display); font-size: 21px; margin-top: 14px; color: var(--forest-deep); line-height: 1.4; }

        .committee-card { padding: 28px; }
        .committee-card h3 { font-size: 20px; }
        .committee-card__role { color: var(--clay); font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 6px; }
        .committee-card__note { margin-top: 12px; font-size: 14.5px; color: rgba(22,36,28,0.72); }
        .committee-note { margin-top: 24px; font-size: 13.5px; color: rgba(22,36,28,0.55); font-style: italic; }

        .about-award { overflow: hidden; }
        .about-award img { width: 100%; height: 230px; object-fit: cover; }
        .about-award__body { padding: 22px; }
        .about-award__body h3 { font-size: 18px; margin: 8px 0; }
        .about-award__body p:not(.tag-pill) { font-size: 14px; color: rgba(22,36,28,0.72); }
      `}</style>
    </>
  );
}
