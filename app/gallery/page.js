import Image from "next/image";
import { galleryImages, org } from "@/lib/siteData";

export const metadata = { title: "Gallery — " + org.name };

export default function GalleryPage() {
  return (
    <>
      <section className="gallery-hero section--forest section">
        <div className="wrap">
          <p className="eyebrow">Gallery</p>
          <h1>The work, mostly in its own words</h1>
          <p className="kicker">
            Field photos and press clippings from paanpoi rounds, plantation drives,
            water-conservation sites and community events.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap gallery-grid">
          {galleryImages.map((img) => (
            <figure key={img.src} className="gallery-item">
              <Image src={img.src} alt={img.alt} width={480} height={480} />
              <figcaption>
                <span className="tag-pill">{img.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <style>{`
        .gallery-hero { padding-top: 140px; padding-bottom: 70px; }
        .gallery-hero h1 { color: var(--cream); font-size: clamp(2rem, 4.2vw, 3rem); margin-top: 6px; max-width: 720px; }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .gallery-item {
          position: relative;
          margin: 0;
          border-radius: 4px 18px 4px 18px;
          overflow: hidden;
          background: var(--leaf-tint);
        }
        .gallery-item img { width: 100%; height: 240px; object-fit: cover; transition: transform .35s ease; }
        .gallery-item:hover img { transform: scale(1.06); }
        .gallery-item figcaption {
          position: absolute; bottom: 10px; left: 10px;
        }
        @media (max-width: 980px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 680px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } .gallery-item img { height: 180px; } }
      `}</style>
    </>
  );
}
