"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { photoCategories, videoList, yearFilters } from "@/lib/galleryData";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("photo"); // "photo" | "video"
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeYear, setActiveYear] = useState("all");
  const [lightbox, setLightbox] = useState(null); // current image object
  const [activeVideo, setActiveVideo] = useState(null); // current video object

  // Flattened all images
  const allImages = useMemo(() => photoCategories.flatMap((cat) => cat.images), []);

  // Filter images based on Category AND Year
  const filteredImages = useMemo(() => {
    return allImages.filter((img) => {
      const matchCat = activeCategory === "all" || img.category === activeCategory;
      const matchYear = activeYear === "all" || img.fiscalYear === activeYear;
      return matchCat && matchYear;
    });
  }, [allImages, activeCategory, activeYear]);

  // Dynamic counts for Year Filters based on selected Category
  const dynamicYearCounts = useMemo(() => {
    const counts = { all: 0 };
    yearFilters.forEach((yf) => {
      if (yf.id !== "all") counts[yf.id] = 0;
    });

    allImages.forEach((img) => {
      if (activeCategory === "all" || img.category === activeCategory) {
        counts.all += 1;
        if (counts[img.fiscalYear] !== undefined) {
          counts[img.fiscalYear] += 1;
        }
      }
    });
    return counts;
  }, [allImages, activeCategory]);

  const currentCategoryMeta =
    activeCategory === "all"
      ? {
        title: "All Photographs",
        marathi: "सर्व छायाचित्रे",
        emoji: "📸",
        desc: "Complete visual archive of Navchaitanya Yuva Mandal across Vidarbha.",
      }
      : photoCategories.find((c) => c.id === activeCategory);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, filteredImages]);

  const navigateLightbox = (direction) => {
    if (!lightbox) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === lightbox.id);
    if (currentIndex === -1) return;
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredImages.length - 1;
    if (nextIndex >= filteredImages.length) nextIndex = 0;
    setLightbox(filteredImages[nextIndex]);
  };

  return (
    <>
      {/* ============================================================
          HERO BANNER
      ============================================================ */}
      <section className="gallery-hero">

      </section>

      {/* ============================================================
          MAIN GALLERY SECTION
      ============================================================ */}
      <section className="section section--white gallery-main-section">
        <div className="wrap">
          {/* Main Tab Switcher — Photos / Videos */}
          <div className="gallery-tabs" role="tablist" aria-label="Gallery type">
            <button
              role="tab"
              aria-selected={activeTab === "photo"}
              className={`gallery-tab ${activeTab === "photo" ? "is-active" : ""}`}
              onClick={() => setActiveTab("photo")}
              id="tab-photo"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              Photos ({allImages.length})
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "video"}
              className={`gallery-tab ${activeTab === "video" ? "is-active" : ""}`}
              onClick={() => setActiveTab("video")}
              id="tab-video"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
              Videos ({videoList.length})
            </button>
          </div>

          {/* ── PHOTO TAB ── */}
          {activeTab === "photo" && (
            <div role="tabpanel" aria-labelledby="tab-photo" className="gallery-panel">
              {/* Category Filter Pills */}
              <div className="gallery-filter-group">
                <div className="gallery-filter-label">Category:</div>
                <div className="gallery-cats" role="tablist" aria-label="Photo category filters">
                  <button
                    role="tab"
                    aria-selected={activeCategory === "all"}
                    className={`gallery-cat-pill ${activeCategory === "all" ? "is-active" : ""}`}
                    onClick={() => setActiveCategory("all")}
                  >
                    <span className="gallery-cat-pill__emoji">✨</span>
                    All ({allImages.length})
                  </button>
                  {photoCategories.map((cat) => (
                    <button
                      key={cat.id}
                      role="tab"
                      aria-selected={activeCategory === cat.id}
                      className={`gallery-cat-pill ${activeCategory === cat.id ? "is-active" : ""}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span className="gallery-cat-pill__emoji">{cat.emoji}</span>
                      {cat.title} ({cat.images.length})
                    </button>
                  ))}
                </div>
              </div>

              {/* Date / Year Filter Pills */}
              <div className="gallery-filter-group gallery-filter-group--dates">
                <div className="gallery-filter-label">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Year / Date:
                </div>
                <div className="gallery-date-pills" role="tablist" aria-label="Date filters">
                  {yearFilters.map((yf) => {
                    const count = dynamicYearCounts[yf.id] ?? 0;
                    return (
                      <button
                        key={yf.id}
                        role="tab"
                        aria-selected={activeYear === yf.id}
                        className={`gallery-date-pill ${activeYear === yf.id ? "is-active" : ""}`}
                        onClick={() => setActiveYear(yf.id)}
                      >
                        {yf.label} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Category Header */}
              {currentCategoryMeta && (
                <div className="gallery-cat-header">
                  <div>
                    <h2 className="gallery-cat-header__title">
                      <span className="gallery-cat-header__emoji">{currentCategoryMeta.emoji}</span>
                      {currentCategoryMeta.title}
                      {activeYear !== "all" && (
                        <span className="gallery-year-badge">Year: {activeYear}</span>
                      )}
                    </h2>
                    <p className="gallery-cat-header__mr mr">{currentCategoryMeta.marathi}</p>
                    {currentCategoryMeta.desc && (
                      <p className="gallery-cat-header__desc">{currentCategoryMeta.desc}</p>
                    )}
                  </div>
                  <span className="gallery-cat-header__count">
                    Showing {filteredImages.length} Photographs
                  </span>
                </div>
              )}

              {/* Empty State */}
              {filteredImages.length === 0 && (
                <div className="gallery-empty">
                  <p>No photographs found for this category and year combination.</p>
                  <button
                    className="gallery-cat-pill"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveYear("all");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Image Grid */}
              <div className="gallery-grid">
                {filteredImages.map((img, i) => (
                  <button
                    key={img.id || i}
                    className="gallery-card"
                    onClick={() => setLightbox(img)}
                    aria-label={`View photo: ${img.alt}`}
                  >
                    <div className="gallery-card__img-wrap">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="gallery-card__img"
                        loading={i < 9 ? "eager" : "lazy"}
                      />
                      <div className="gallery-card__overlay">
                        <span className="gallery-card__zoom-btn">
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          View
                        </span>
                      </div>
                    </div>
                    <div className="gallery-card__caption">
                      <div className="gallery-card__tags">
                        <span className="gallery-card__tag">
                          {photoCategories.find((c) => c.id === img.category)?.title || "Activity"}
                        </span>
                        {img.displayDate && (
                          <span className="gallery-card__date-tag">
                            📅 {img.displayDate}
                          </span>
                        )}
                      </div>
                      <p className="gallery-card__text">{img.alt}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── VIDEO TAB ── */}
          {activeTab === "video" && (
            <div role="tabpanel" aria-labelledby="tab-video" className="gallery-panel">
              <div className="gallery-cat-header">
                <div>
                  <h2 className="gallery-cat-header__title">
                    <span className="gallery-cat-header__emoji">🎬</span>
                    Field Documentation Videos
                  </h2>
                  <p className="gallery-cat-header__mr mr">व्हिडिओ दस्तऐवजीकरण</p>
                  <p className="gallery-cat-header__desc">
                    Ground video footage of water catchment works, monsoon planting, and bird water refills.
                  </p>
                </div>
                <span className="gallery-cat-header__count">
                  {videoList.length} Videos Available
                </span>
              </div>

              <div className="gallery-grid gallery-grid--video">
                {videoList.map((vid, i) => (
                  <div
                    key={vid.id || i}
                    className="video-card"
                    onClick={() => setActiveVideo(vid)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play video: ${vid.title}`}
                  >
                    <div className="video-card__thumb-wrap">
                      <Image
                        src={vid.thumbnail}
                        alt={vid.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="video-card__thumb"
                      />
                      <div className="video-card__play">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <span className="video-card__duration">Video #{i + 1}</span>
                    </div>
                    <div className="video-card__body">
                      <h3 className="video-card__title">{vid.title}</h3>
                      <p className="video-card__meta">
                        {vid.displayDate ? `📅 ${vid.displayDate} · ` : ""}Click to stream video directly
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          PHOTO LIGHTBOX MODAL
      ============================================================ */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image viewer modal"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close photo viewer"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img-wrapper">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-footer">
              <div className="lightbox-caption-box">
                <p className="lightbox-caption">{lightbox.alt}</p>
                {lightbox.displayDate && (
                  <span className="lightbox-date-badge">📅 Date: {lightbox.displayDate} ({lightbox.fiscalYear})</span>
                )}
              </div>
              <span className="lightbox-counter">
                {filteredImages.findIndex((img) => img.id === lightbox.id) + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          VIDEO PLAYER MODAL
      ============================================================ */}
      {activeVideo && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-label="Video Player"
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video player"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="video-modal-player"
            >
              Your browser does not support HTML5 video playback.
            </video>
            <div className="lightbox-footer">
              <h3 className="lightbox-caption" style={{ fontWeight: 700 }}>
                {activeVideo.title}
                {activeVideo.displayDate && ` (Date: ${activeVideo.displayDate})`}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          STYLES
      ============================================================ */}
      <style>{`
        /* ---- HERO ---- */
        .gallery-hero {
          position: relative;
          min-height: 40px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .gallery-hero__bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #18132B 0%, #2A1F4E 50%, #0F3B2E 100%);
          z-index: 0;
        }
        .gallery-hero__bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(124, 58, 237, 0.22) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 80% 20%, rgba(16, 185, 129, 0.18) 0%, transparent 70%);
          animation: heroGradientShift 8s ease-in-out infinite;
        }
        .gallery-hero__content {
          position: relative;
          z-index: 1;
          padding-top: 110px;
          padding-bottom: 70px;
          text-align: center;
          max-width: 780px;
          margin: 0 auto;
        }
        .gallery-hero .eyebrow {
          color: #6EE7B7;
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .gallery-hero .eyebrow::before { background: #34D399; }
        .gallery-hero__title {
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          color: #fff;
          margin-top: 12px;
          letter-spacing: -0.02em;
        }
        .gallery-hero__sub {
          font-size: 16.5px;
          color: rgba(255, 255, 255, 0.78);
          margin-top: 16px;
          line-height: 1.7;
          max-width: 660px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ---- TABS ---- */
        .gallery-main-section { padding-top: 0; padding-bottom: 90px; }
        .gallery-tabs {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: -28px;
          position: relative;
          z-index: 2;
          margin-bottom: 34px;
        }
        .gallery-tab {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 34px;
          border: 2px solid var(--line);
          border-radius: var(--radius-pill);
          background: var(--white);
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          color: var(--muted);
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-tab:hover {
          border-color: rgba(124, 58, 237, 0.35);
          color: var(--purple);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .gallery-tab.is-active {
          background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.28);
        }

        /* ---- FILTER GROUPS ---- */
        .gallery-filter-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .gallery-filter-group--dates {
          margin-bottom: 36px;
          padding: 12px 20px;
          background: #F8F7FC;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(124, 58, 237, 0.1);
        }
        .gallery-filter-label {
          font-size: 12.5px;
          font-weight: 800;
          color: var(--charcoal);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* ---- CATEGORY PILLS ---- */
        .gallery-cats {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .gallery-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border: 1.5px solid var(--line);
          border-radius: var(--radius-pill);
          background: var(--white);
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-cat-pill:hover {
          border-color: rgba(124, 58, 237, 0.3);
          color: var(--purple);
          background: var(--purple-pale);
          transform: translateY(-2px);
        }
        .gallery-cat-pill.is-active {
          background: var(--purple-tint);
          border-color: var(--purple);
          color: var(--purple-dark);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.16);
        }
        .gallery-cat-pill__emoji { font-size: 16px; }

        /* ---- DATE PILLS ---- */
        .gallery-date-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .gallery-date-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: var(--radius-pill);
          background: var(--white);
          font-size: 13px;
          font-weight: 700;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .gallery-date-pill:hover {
          color: var(--purple);
          border-color: var(--purple);
          background: #fff;
        }
        .gallery-date-pill.is-active {
          background: var(--purple);
          color: #fff;
          border-color: var(--purple);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        /* ---- CATEGORY HEADER ---- */
        .gallery-cat-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 28px;
          padding-bottom: 18px;
          border-bottom: 2px solid var(--line);
          gap: 20px;
        }
        .gallery-cat-header__title {
          font-size: clamp(1.4rem, 2.6vw, 1.9rem);
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--charcoal);
          flex-wrap: wrap;
        }
        .gallery-year-badge {
          font-size: 13px;
          padding: 4px 12px;
          background: #ECFDF5;
          color: #059669;
          border: 1px solid #10B981;
          border-radius: var(--radius-pill);
          font-weight: 700;
        }
        .gallery-cat-header__emoji { font-size: 30px; }
        .gallery-cat-header__mr {
          font-size: 14px;
          color: var(--purple);
          font-weight: 700;
          margin-top: 4px;
        }
        .gallery-cat-header__desc {
          font-size: 14px;
          color: var(--muted);
          margin-top: 6px;
          max-width: 600px;
          line-height: 1.55;
        }
        .gallery-cat-header__count {
          font-size: 13px;
          font-weight: 800;
          color: var(--muted-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .gallery-empty {
          text-align: center;
          padding: 60px 20px;
          color: var(--muted);
          font-size: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        /* ---- PHOTO GRID ---- */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        @media (max-width: 960px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .gallery-grid { grid-template-columns: 1fr; } }

        /* ---- PHOTO CARD ---- */
        .gallery-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          text-align: left;
          font-family: inherit;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
        }
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(24, 19, 43, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
        }
        .gallery-card__img-wrap {
          position: relative;
          height: 230px;
          width: 100%;
          background: #f1f5f9;
          overflow: hidden;
        }
        .gallery-card__img {
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-card:hover .gallery-card__img {
          transform: scale(1.07);
        }
        .gallery-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(24, 19, 43, 0.6) 0%, transparent 60%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 2;
        }
        .gallery-card:hover .gallery-card__overlay { opacity: 1; }
        .gallery-card__zoom-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.92);
          color: var(--purple-dark);
          font-size: 13px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: var(--radius-pill);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
        }
        .gallery-card__caption {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .gallery-card__tags {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }
        .gallery-card__text {
          font-size: 13.5px;
          color: var(--charcoal);
          font-weight: 600;
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .gallery-card__tag {
          font-size: 11.5px;
          color: var(--purple);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .gallery-card__date-tag {
          font-size: 11.5px;
          color: var(--muted);
          font-weight: 600;
          background: #F3F4F6;
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* ---- VIDEO CARD ---- */
        .gallery-grid--video {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 960px) { .gallery-grid--video { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .gallery-grid--video { grid-template-columns: 1fr; } }

        .video-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
          cursor: pointer;
        }
        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(24, 19, 43, 0.12);
          border-color: rgba(124, 58, 237, 0.3);
        }
        .video-card__thumb-wrap {
          position: relative;
          height: 210px;
          width: 100%;
          background: #18132B;
          overflow: hidden;
        }
        .video-card__thumb {
          object-fit: cover;
          opacity: 0.85;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
        }
        .video-card:hover .video-card__thumb {
          transform: scale(1.07);
          opacity: 0.95;
        }
        .video-card__play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.45);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }
        .video-card__play svg { margin-left: 3px; }
        .video-card:hover .video-card__play {
          transform: translate(-50%, -50%) scale(1.14);
        }
        .video-card__duration {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(24, 19, 43, 0.85);
          color: #fff;
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          backdrop-filter: blur(6px);
          z-index: 2;
        }
        .video-card__body { padding: 16px 18px 18px; }
        .video-card__title {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--charcoal);
          line-height: 1.4;
        }
        .video-card__meta {
          font-size: 12.5px;
          color: var(--purple);
          font-weight: 600;
          margin-top: 6px;
        }

        /* ---- LIGHTBOX & MODALS ---- */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 12, 28, 0.94);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.22s ease;
        }
        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          z-index: 10;
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.08);
        }
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          z-index: 10;
        }
        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }
        .lightbox-nav--prev { left: 24px; }
        .lightbox-nav--next { right: 24px; }

        .lightbox-content {
          max-width: 950px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lightbox-img-wrapper {
          position: relative;
          max-height: 75vh;
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: var(--radius-md);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        .lightbox-footer {
          margin-top: 16px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
        }
        .lightbox-caption-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 80%;
        }
        .lightbox-caption {
          font-size: 14.5px;
          color: #fff;
          line-height: 1.45;
        }
        .lightbox-date-badge {
          font-size: 12.5px;
          color: #6EE7B7;
          font-weight: 600;
        }
        .lightbox-counter {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 700;
        }

        .video-modal-content {
          max-width: 880px;
          width: 100%;
          background: #000;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .video-modal-player {
          width: 100%;
          max-height: 70vh;
          outline: none;
        }
        .video-modal-content .lightbox-footer {
          padding: 14px 20px;
          background: #141024;
          margin-top: 0;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 768px) {
          .lightbox-nav--prev { left: 10px; }
          .lightbox-nav--next { right: 10px; }
          .gallery-cat-header { flex-direction: column; align-items: flex-start; }
          .gallery-tabs { margin-top: -24px; }
          .gallery-tab { padding: 12px 22px; font-size: 14px; }
        }
      `}</style>
    </>
  );
}
