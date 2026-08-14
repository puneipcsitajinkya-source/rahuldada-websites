import Image from "next/image";
import { galleryImages, org } from "@/lib/siteData";

export const metadata = { title: "Gallery — " + org.name };

export default function GalleryPage() {
  return (
    <>
      {/* ---- Hero (Light Theme: Purple + Light Green) ---- */}
      <section className="gallery-hero">
        <div className="gallery-hero__gradient" aria-hidden="true" />
        <div className="gallery-hero__orb gallery-hero__orb--1" aria-hidden="true" />
        <div className="gallery-hero__orb gallery-hero__orb--2" aria-hidden="true" />
        <div className="gallery-hero__grid" aria-hidden="true" />
        <div className="gallery-hero__shimmer" aria-hidden="true" />
        <div className="wrap gallery-hero__inner">
          <span className="eyebrow anim-hero-1">Gallery</span>
          <h1 className="anim-hero-2">The work, mostly in its own words</h1>
          <p className="kicker anim-hero-3">
            Field photos and press clippings from paanpoi rounds, plantation drives,
            water-conservation sites and community events.
          </p>
        </div>
      </section>

      {/* ---- Grid ---- */}
      <section className="section section--parchment">
        <div className="wrap">
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <figure key={img.src} className={`gallery-item ${i === 0 ? "gallery-item--wide" : ""}`}>
                <div className="gallery-item__img-wrap">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={480}
                    className="gallery-item__img"
                  />
                  <div className="gallery-item__overlay">
                    <p className="gallery-item__alt">{img.alt}</p>
                  </div>
                </div>
                <figcaption className="gallery-item__caption">
                  <span className="tag-pill tag-pill--green">{img.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .gallery-hero {
          background: #FAF8FE;
          padding-top: 140px;
          padding-bottom: 84px;
          position: relative;
          overflow: hidden;
        }
        .gallery-hero__gradient {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 70% 70% at 20% 30%, rgba(124, 58, 237, 0.16) 0%, transparent 65%),
            radial-gradient(ellipse 55% 80% at 85% 45%, rgba(52, 211, 153, 0.22) 0%, transparent 60%),
            linear-gradient(180deg, #FFFFFF 0%, #FAF8FE 100%);
          animation: heroGradientShift 15s ease-in-out infinite alternate;
        }
        .gallery-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;
        }
        .gallery-hero__orb--1 {
          width: 440px; height: 440px; top: -80px; right: 5%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%);
          animation: orbFloat2 21s ease-in-out infinite;
        }
        .gallery-hero__orb--2 {
          width: 320px; height: 320px; bottom: -30px; left: 10%;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
          animation: orbFloat3 16s ease-in-out infinite;
        }
        .gallery-hero__grid {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(124, 58, 237, 0.05) 1.2px, transparent 1.2px);
          background-size: 34px 34px;
          animation: gridPan 40s linear infinite;
          pointer-events: none;
        }
        .gallery-hero__shimmer {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(115deg, transparent 30%, rgba(52, 211, 153, 0.06) 50%, transparent 70%);
          background-size: 300% 300%;
          animation: heroShimmer 11s linear infinite;
          pointer-events: none;
        }
        .gallery-hero__inner { position: relative; z-index: 3; }
        .gallery-hero h1 {
          color: var(--charcoal);
          font-size: clamp(2.4rem, 4.6vw, 3.4rem);
          margin-top: 8px;
          max-width: 760px;
        }
        .gallery-hero .kicker { color: var(--muted); }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 270px;
          gap: 20px;
        }
        .gallery-item--wide { grid-column: span 2; }
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-item--wide { grid-column: span 1; }
        }
        @media (max-width: 540px) {
          .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
        }

        .gallery-item {
          position: relative;
          margin: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--white);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(124, 58, 237, 0.08);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease;
        }
        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .gallery-item__img-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .gallery-item__img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .gallery-item:hover .gallery-item__img { transform: scale(1.08); }

        .gallery-item__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(24, 19, 43, 0.88) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 18px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-item__overlay { opacity: 1; }
        .gallery-item__alt {
          font-size: 13.5px;
          color: #fff;
          line-height: 1.5;
          font-weight: 600;
        }

        .gallery-item__caption {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
        }
      `}</style>
    </>
  );
}
