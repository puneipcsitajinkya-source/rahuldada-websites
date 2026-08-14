import Image from "next/image";
import { galleryImages, org } from "@/lib/siteData";

export const metadata = { title: "Gallery — " + org.name };

const TAGS = ["All", "Birds", "Trees", "Water", "Events", "Awards", "Press", "Nursery", "Awareness"];

export default function GalleryPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="gallery-hero">
        <div className="gallery-hero__bg" />
        <div className="wrap gallery-hero__inner">
          <span className="eyebrow">Gallery</span>
          <h1>The work, mostly in its own words</h1>
          <p className="kicker">
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
                  <span className="tag-pill">{img.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .gallery-hero {
          background: linear-gradient(135deg, var(--emerald-deep) 0%, var(--emerald) 100%);
          padding-top: 130px;
          padding-bottom: 72px;
          position: relative;
          overflow: hidden;
        }
        .gallery-hero__bg {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(201,146,42,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .gallery-hero__inner { position: relative; z-index: 1; }
        .gallery-hero h1 {
          color: #fff;
          font-size: clamp(2rem, 4.2vw, 3rem);
          margin-top: 8px;
          max-width: 720px;
        }
        .gallery-hero .kicker { color: rgba(255,255,255,0.72); }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 260px;
          gap: 16px;
        }
        .gallery-item--wide { grid-column: span 2; }

        .gallery-item {
          position: relative;
          margin: 0;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--emerald-tint);
          box-shadow: var(--shadow-sm);
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
          transition: transform 0.45s ease;
        }
        .gallery-item:hover .gallery-item__img { transform: scale(1.08); }

        .gallery-item__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(9,46,30,0.85) 0%, transparent 55%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-item__overlay { opacity: 1; }
        .gallery-item__alt {
          font-size: 13px;
          color: rgba(255,255,255,0.88);
          line-height: 1.5;
          font-weight: 600;
        }

        .gallery-item__caption {
          position: absolute;
          top: 12px;
          left: 12px;
        }

        @media (max-width: 980px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
          .gallery-item--wide { grid-column: span 2; }
        }
        @media (max-width: 680px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
          .gallery-item--wide { grid-column: span 2; }
        }
        @media (max-width: 440px) {
          .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 220px; }
          .gallery-item--wide { grid-column: span 1; }
        }
      `}</style>
    </>
  );
}
