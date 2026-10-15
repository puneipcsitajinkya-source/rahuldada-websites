"use client";

import { useState } from "react";
import Link from "next/link";

/* Featured Video requested by user */
export const featuredVideoData = {
  id: "videos-09",
  src: "/gallery/videos/videos-09.mp4",
  title: "Field Survey & Wildlife Documentation",
  originalName: "1 May 2026 3.mp4",
  thumbnail: "/gallery/bird-conservation/bird-conservation-01.jpeg",
  category: "videos",
  fiscalYear: "2026–27",
  calendarYear: "2026",
  displayDate: "1 May 2026",
  marathiTitle: "क्षेत्रीय सर्वेक्षण आणि वन्यजीव संवर्धन दस्तऐवजीकरण",
  summary:
    "Comprehensive on-ground footage captured during Navchaitanya Mandal's environmental field survey in the Shiroli & Ghatanji taluka landscape. The documentation records natural water catchments, summer bird water paanpoi installations, and wildlife habitat conditions across the rural terrain.",
};

/* Media coverage articles & broadcasts */
const mediaItems = [
  {
    id: "mc-video-09",
    date: "1 May 2026",
    source: "Navchaitanya Ground Media Archive",
    type: "Video",
    title: "1 May 2026",
    summary:
      " ",
    videoSrc: "/gallery/videos/videos-09.mp4",
    isFeatured: true,
  },
  {
    id: "mc-video-10",
    date: "13 April 2021",
    source: "Navchaitanya Ground Media Archive",
    type: "Video",
    title: "13 April 2021",
    summary:
      " ",
    videoSrc: "/gallery/videos/newsvideo.mp4",
    isFeatured: true,
  }
];

const typeIcons = {
  Video: "🎥",
  TV: "📺",
  Newspaper: "📰",
  Online: "🌐",
};

const typeColors = {
  Video: { bg: "#EDE9FE", color: "#7C3AED", border: "rgba(124, 58, 237, 0.25)" },
  TV: { bg: "#FEE2E2", color: "#DC2626", border: "rgba(220, 38, 38, 0.2)" },
  Newspaper: { bg: "#ECFDF5", color: "#059669", border: "rgba(16, 185, 129, 0.2)" },
  Online: { bg: "#E0F2FE", color: "#0284C7", border: "rgba(2, 132, 199, 0.2)" },
};

export default function MediaCoverageClient() {
  const [activeFilter, setActiveFilter] = useState("all"); // "all" | "Video" | "TV" | "Newspaper" | "Online"
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.type === activeFilter);

  return (
    <>
      {/* ============================================================
          HERO BANNER
      ============================================================ */}
      <section className="mc-hero">
        <div className="mc-hero__gradient" aria-hidden="true" />
        <div className="mc-hero__orb mc-hero__orb--1" aria-hidden="true" />
        <div className="mc-hero__orb mc-hero__orb--2" aria-hidden="true" />






        <h1>Media Coverage</h1>



      </section>

      {/* ============================================================
          ALL MEDIA COVERAGE DIRECTORY
      ============================================================ */}
      <section className="mc-coverage-section">
        <div className="wrap">
          {/* Grid */}
          <div className="mc-grid">
            {filteredItems.map((item) => {
              const tc = typeColors[item.type] || {
                bg: "#F3F4F6",
                color: "#6B7280",
                border: "rgba(0,0,0,0.06)",
              };
              const isVideoItem = Boolean(item.videoSrc);

              return (
                <article key={item.id} className="mc-card">
                  {/* Card Visual / Thumbnail */}
                  {isVideoItem ? (
                    <div
                      className="mc-card__video-preview"
                      onClick={() => setActiveVideoModal(item)}
                    >
                      <video
                        src={`${item.videoSrc}#t=1`}
                        preload="metadata"
                        muted
                        playsInline
                        className="mc-card__video-frame"
                      />
                      <div className="mc-card__play-badge">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <span className="mc-card__format-tag">HD Video</span>
                    </div>
                  ) : (
                    <div className="mc-card__placeholder">
                      <span className="mc-card__placeholder-icon">
                        {typeIcons[item.type] || "📄"}
                      </span>
                      <span className="mc-card__placeholder-source">{item.source}</span>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="mc-card__body">
                    <div className="mc-card__meta-bar">
                      <span
                        className="mc-type-chip"
                        style={{
                          background: tc.bg,
                          color: tc.color,
                          borderColor: tc.border,
                        }}
                      >
                        {typeIcons[item.type] || "🎥"} {item.type}
                      </span>
                      <time className="mc-card__date">📅 {item.date}</time>
                    </div>

                    <div className="mc-card__source-name">{item.source}</div>

                    <h3 className="mc-card__title">{item.title}</h3>

                    <p className="mc-card__summary">{item.summary}</p>

                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          VIDEO LIGHTBOX MODAL
      ============================================================ */}
      {activeVideoModal && (
        <div
          className="video-lightbox-backdrop"
          onClick={() => setActiveVideoModal(null)}
          role="dialog"
          aria-label="Video Player Lightbox"
        >
          <button
            type="button"
            className="video-lightbox-close"
            onClick={() => setActiveVideoModal(null)}
            aria-label="Close Video Player"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="video-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideoModal.src || activeVideoModal.videoSrc}
              controls
              autoPlay
              className="video-lightbox-player"
            >
              Your browser does not support HTML5 video playback.
            </video>
            <div className="video-lightbox-caption-bar">
              <div>
                <h3 className="video-lightbox-title">{activeVideoModal.title}</h3>
                <p className="video-lightbox-sub">
                  📅 {activeVideoModal.displayDate || activeVideoModal.date} · {activeVideoModal.source || "Navchaitanya Ground Archive"}
                </p>
              </div>
              <button
                type="button"
                className="video-lightbox-close-btn"
                onClick={() => setActiveVideoModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ============================================================
          INLINE STYLES
      ============================================================ */}
      <style>{`
        /* ---- HERO ---- */
        .mc-hero {
          position: relative;
          overflow: hidden;
          padding: 80px 0 60px;
          text-align: center;
          background: linear-gradient(160deg, #FAF8FE 0%, #F5F3FF 45%, #ECFDF5 100%);
        }
        .mc-hero__gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%);
        }
        .mc-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.16;
        }
        .mc-hero__orb--1 {
          width: 380px; height: 380px; background: #7C3AED; top: -120px; right: -60px;
        }
        .mc-hero__orb--2 {
          width: 320px; height: 320px; background: #10B981; bottom: -80px; left: -40px;
        }
        .mc-hero__inner {
          position: relative; z-index: 2; max-width: 780px; margin: 0 auto;
        }
        .mc-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-bottom: 20px; font-size: 0.88rem; font-weight: 600;
        }
        .mc-back {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--muted); text-decoration: none; transition: color 0.2s;
        }
        .mc-back:hover { color: var(--purple); }
        .mc-breadcrumb__divider { color: var(--muted-light); }
        .mc-breadcrumb__curr { color: var(--purple-dark); font-weight: 700; }

        .mc-hero__inner h1 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800; line-height: 1.15; color: #18132B; margin: 0 0 16px;
        }
        .mc-hero__inner .kicker {
          font-size: 1.1rem; line-height: 1.7; color: #5E5680; max-width: 660px; margin: 0 auto 28px;
        }
        .mc-hero__tags {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
        }
        .mc-pill {
          font-size: 12.5px; font-weight: 700; color: #4B3880;
          background: #FFFFFF; border: 1px solid rgba(124,58,237,0.14);
          padding: 6px 16px; border-radius: 100px;
          box-shadow: 0 2px 8px rgba(124,58,237,0.06);
        }

        /* ---- FEATURED VIDEO SPOTLIGHT ---- */
        .featured-video-section {
          padding: 60px 0 80px;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(124,58,237,0.08);
        }
        .section-header-block {
          text-align: center; margin-bottom: 36px;
        }
        .section-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
          color: #7C3AED; background: #F5F3FF;
          border: 1px solid rgba(124,58,237,0.2);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 12px;
        }
        .section-badge__dot {
          width: 8px; height: 8px; border-radius: 50%; background: #7C3AED;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 800; color: #18132B; margin-bottom: 8px;
        }
        .section-subtitle {
          font-size: 1.05rem; color: #7C3AED; font-weight: 600;
        }

        .featured-video-card {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 36px;
          background: #FAF8FE;
          border: 1px solid rgba(124,58,237,0.14);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 16px 40px rgba(124,58,237,0.08);
          align-items: center;
        }
        @media (max-width: 960px) {
          .featured-video-card {
            grid-template-columns: 1fr;
            padding: 24px;
            gap: 24px;
          }
        }

        .featured-video-card__player-box {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #18132B;
          box-shadow: 0 12px 30px rgba(24,19,43,0.25);
          aspect-ratio: 16 / 9;
        }
        .featured-video-card__video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .featured-video-card__badge-live {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(24,19,43,0.85);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(8px);
          z-index: 2;
        }
        .live-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #10B981;
        }

        .featured-video-card__info {
          display: flex; flex-direction: column;
        }
        .featured-meta-row {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;
        }
        .featured-tag {
          font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 6px;
        }
        .featured-tag--purple { background: #EDE9FE; color: #6D28D9; }
        .featured-tag--gold { background: #FEF3C7; color: #B45309; }
        .featured-tag--year { background: #ECFDF5; color: #047857; }

        .featured-video-card__heading {
          font-size: 1.6rem; font-weight: 800; color: #18132B; margin-bottom: 4px; line-height: 1.25;
        }
        .featured-video-card__mr-heading {
          font-size: 1.05rem; font-weight: 600; color: #7C3AED; margin-bottom: 14px;
        }
        .featured-video-card__desc {
          font-size: 0.95rem; line-height: 1.65; color: #4A4468; margin-bottom: 22px;
        }

        .featured-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(124,58,237,0.1);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 24px;
        }
        .spec-item { display: flex; flex-direction: column; gap: 2px; }
        .spec-label { font-size: 11px; font-weight: 700; color: #8F88B0; text-transform: uppercase; letter-spacing: 0.05em; }
        .spec-value { font-size: 12.5px; font-weight: 700; color: #18132B; }

        .featured-video-card__actions {
          display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
        }
        .btn-play-action {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #FFFFFF; font-size: 14px; font-weight: 700;
          padding: 12px 22px; border-radius: 12px; border: none; cursor: pointer;
          box-shadow: 0 6px 18px rgba(124,58,237,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-play-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(124,58,237,0.4);
        }
        .btn-gallery-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13.5px; font-weight: 700; color: #059669;
          background: #ECFDF5; border: 1px solid rgba(16,185,129,0.3);
          padding: 11px 18px; border-radius: 12px; text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .btn-gallery-link:hover {
          background: #10B981; color: #FFFFFF;
        }

        /* ---- DIRECTORY & GRID ---- */
        .mc-coverage-section {
          padding: 70px 0 100px;
          background: #FAF8FE;
        }
        .mc-directory-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          flex-wrap: wrap; gap: 20px; margin-bottom: 40px;
        }
        .mc-dir-title {
          font-size: 2rem; font-weight: 800; color: #18132B; margin-bottom: 6px;
        }
        .mc-dir-sub {
          font-size: 0.95rem; color: #6D6690;
        }

        .mc-filter-bar {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .filter-btn {
          font-size: 13px; font-weight: 700; color: #5E5680;
          background: #FFFFFF; border: 1px solid rgba(124,58,237,0.12);
          padding: 8px 16px; border-radius: 100px; cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover {
          border-color: #7C3AED; color: #7C3AED;
        }
        .filter-btn--active {
          background: #7C3AED; color: #FFFFFF !important; border-color: #7C3AED;
          box-shadow: 0 4px 12px rgba(124,58,237,0.25);
        }

        .mc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
        }
        @media (max-width: 640px) {
          .mc-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        .mc-card {
          background: #FFFFFF;
          border: 1px solid rgba(124,58,237,0.1);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(124,58,237,0.04);
          display: flex; flex-direction: column;
          transition: transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease;
        }
        .mc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(124,58,237,0.1);
          border-color: rgba(124,58,237,0.25);
        }

        .mc-card__video-preview {
          position: relative;
          height: 190px;
          width: 100%;
          background: #18132B;
          cursor: pointer;
          overflow: hidden;
        }
        .mc-card__video-frame {
          width: 100%; height: 100%; object-fit: cover; opacity: 0.88;
          transition: transform 0.4s ease, opacity 0.3s;
        }
        .mc-card__video-preview:hover .mc-card__video-frame {
          transform: scale(1.06); opacity: 1;
        }
        .mc-card__play-badge {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          color: #FFFFFF; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(124,58,237,0.45);
          transition: transform 0.25s;
        }
        .mc-card__play-badge svg { margin-left: 3px; }
        .mc-card__video-preview:hover .mc-card__play-badge {
          transform: translate(-50%, -50%) scale(1.12);
        }
        .mc-card__format-tag {
          position: absolute; bottom: 10px; right: 10px;
          background: rgba(24,19,43,0.85); color: #FFF;
          font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px;
        }

        .mc-card__placeholder {
          height: 160px;
          background: linear-gradient(135deg, #FAF8FE 0%, #F5F3FF 50%, #ECFDF5 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px;
        }
        .mc-card__placeholder-icon { font-size: 38px; }
        .mc-card__placeholder-source {
          font-size: 12px; font-weight: 700; color: #7C3AED;
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .mc-card__body {
          padding: 22px; flex: 1; display: flex; flex-direction: column;
        }
        .mc-card__meta-bar {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 10px;
        }
        .mc-type-chip {
          font-size: 11px; font-weight: 700; padding: 2px 9px;
          border-radius: 100px; border: 1px solid;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .mc-card__date { font-size: 12px; font-weight: 600; color: #8F88B0; }
        .mc-card__source-name {
          font-size: 12.5px; font-weight: 700; color: #059669; margin-bottom: 6px;
        }
        .mc-card__title {
          font-size: 1.05rem; font-weight: 700; color: #18132B; margin: 0 0 10px; line-height: 1.4;
        }
        .mc-card__summary {
          font-size: 0.9rem; line-height: 1.6; color: #5E5680; margin: 0 0 18px; flex: 1;
        }
        .mc-card__footer {
          border-top: 1px solid rgba(124,58,237,0.06);
          padding-top: 14px;
        }
        .mc-card__action-btn {
          background: none; border: none; padding: 0;
          font-size: 13px; font-weight: 700; color: #7C3AED; cursor: pointer;
          transition: letter-spacing 0.2s;
        }
        .mc-card__action-btn:hover { letter-spacing: 0.02em; text-decoration: underline; }
        .mc-card__action-link {
          font-size: 13px; font-weight: 700; color: #059669; text-decoration: none;
          transition: letter-spacing 0.2s;
        }
        .mc-card__action-link:hover { letter-spacing: 0.02em; }
        .mc-card__archived { font-size: 12px; font-weight: 600; color: #8F88B0; }

        /* ---- CTA SECTION ---- */
        .mc-cta-section {
          padding: 20px 0 80px;
          background: #FAF8FE;
        }
        .mc-cta-box {
          background: linear-gradient(135deg, #18132B 0%, #2A1F4E 60%, #0F3B2E 100%);
          border-radius: 24px;
          padding: 44px 48px;
          color: #FFFFFF;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 32px;
          box-shadow: 0 20px 50px rgba(24,19,43,0.3);
        }
        @media (max-width: 800px) {
          .mc-cta-box { padding: 32px 24px; flex-direction: column; align-items: flex-start; }
        }
        .mc-cta-text { max-width: 620px; }
        .mc-cta-text h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.1rem);
          color: #FFFFFF; margin: 12px 0 10px;
        }
        .mc-cta-text p {
          font-size: 0.95rem; line-height: 1.65; color: rgba(255,255,255,0.78);
        }
        .mc-cta-actions {
          display: flex; flex-direction: column; gap: 12px; min-width: 220px;
        }
        .btn-cta-primary {
          display: inline-block; text-align: center;
          background: #10B981; color: #FFFFFF; font-weight: 700; font-size: 14px;
          padding: 13px 22px; border-radius: 12px; text-decoration: none;
          box-shadow: 0 6px 20px rgba(16,185,129,0.35);
          transition: transform 0.2s, background 0.2s;
        }
        .btn-cta-primary:hover {
          background: #059669; transform: translateY(-2px);
        }
        .btn-cta-secondary {
          display: inline-block; text-align: center;
          background: rgba(255,255,255,0.12); color: #FFFFFF; font-weight: 700; font-size: 14px;
          padding: 12px 22px; border-radius: 12px; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.22);
          transition: background 0.2s;
        }
        .btn-cta-secondary:hover { background: rgba(255,255,255,0.2); }

        /* ---- LIGHTBOX MODAL ---- */
        .video-lightbox-backdrop {
          position: fixed; inset: 0;
          background: rgba(10, 8, 20, 0.92);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
        }
        .video-lightbox-close {
          position: absolute; top: 20px; right: 24px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
          color: #FFF; width: 44px; height: 44px; border-radius: 50%;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .video-lightbox-close:hover { background: rgba(255,255,255,0.25); }

        .video-lightbox-content {
          width: 100%; max-width: 900px;
          background: #18132B; border-radius: 20px; overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.6);
        }
        .video-lightbox-player {
          width: 100%; aspect-ratio: 16 / 9; max-height: 72vh; display: block;
          background: #000;
        }
        .video-lightbox-caption-bar {
          padding: 18px 24px;
          display: flex; justify-content: space-between; align-items: center;
          background: #130F23; border-top: 1px solid rgba(255,255,255,0.08);
        }
        .video-lightbox-title {
          font-size: 1.15rem; font-weight: 700; color: #FFF; margin: 0 0 4px;
        }
        .video-lightbox-sub { font-size: 0.85rem; color: rgba(255,255,255,0.65); }
        .video-lightbox-close-btn {
          background: rgba(255,255,255,0.1); color: #FFF; border: none;
          padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 13px;
          cursor: pointer;
        }
        .video-lightbox-close-btn:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </>
  );
}
