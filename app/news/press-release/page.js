"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { org } from "@/lib/siteData";
import {
  pressCoverageMeta,
  pressYearFilters,
  pressClippings,
  officialPressReleases,
} from "@/lib/pressData";

const categoryColors = {
  Education: { bg: "#F5F3FF", color: "#7C3AED", border: "rgba(124, 58, 237, 0.2)" },
  Environment: { bg: "#ECFDF5", color: "#059669", border: "rgba(16, 185, 129, 0.2)" },
  Governance: { bg: "#FEF3C7", color: "#D97706", border: "rgba(217, 119, 6, 0.2)" },
  Health: { bg: "#FEE2E2", color: "#DC2626", border: "rgba(220, 38, 38, 0.2)" },
  Water: { bg: "#E0F2FE", color: "#0284C7", border: "rgba(2, 132, 199, 0.2)" },
  Agriculture: { bg: "#FEF9C3", color: "#A16207", border: "rgba(161, 98, 7, 0.2)" },
  Recognition: { bg: "#FDE68A", color: "#92400E", border: "rgba(146, 64, 14, 0.2)" },
};

const releaseYears = Object.keys(officialPressReleases)
  .map(Number)
  .sort((a, b) => b - a);

export default function PressReleasePage() {
  const [activeMainTab, setActiveMainTab] = useState("clippings"); // "clippings" | "releases"
  const [selectedYear, setSelectedYear] = useState(pressYearFilters[0]?.id || "2026–27");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedReleaseYear, setSelectedReleaseYear] = useState(releaseYears[0] || 2025);

  // Filter newspaper clippings
  const filteredClippings = useMemo(() => {
    return pressClippings.filter((item) => {
      const matchYear = item.fiscalYear === selectedYear;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.displayDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fiscalYear.toLowerCase().includes(searchQuery.toLowerCase());
      return matchYear && matchSearch;
    });
  }, [selectedYear, searchQuery]);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") {
        setLightbox(null);
        setIsZoomed(false);
      }
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, filteredClippings]);

  const navigateLightbox = (direction) => {
    if (!lightbox) return;
    const currentIndex = filteredClippings.findIndex((img) => img.id === lightbox.id);
    if (currentIndex === -1) return;
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredClippings.length - 1;
    if (nextIndex >= filteredClippings.length) nextIndex = 0;
    setLightbox(filteredClippings[nextIndex]);
    setIsZoomed(false);
  };

  const currentReleases = officialPressReleases[selectedReleaseYear] || [];

  return (
    <>
      {/* ============================================================
          HERO BANNER
      ============================================================ */}

      {/* ============================================================
          MAIN CONTENT SECTION
      ============================================================ */}
      <section className="section section--white pr-main-section">
        <div className="wrap">
          {/* Main Tab Switcher */}


          {/* ──────────────────────────────────────────────────────────
              TAB 1: NEWSPAPER CLIPPINGS
          ────────────────────────────────────────────────────────── */}
          {activeMainTab === "clippings" && (
            <div role="tabpanel" aria-labelledby="tab-clippings" className="pr-panel">
              {/* Filter Controls Row */}
              <div className="pr-controls-card">
                <div className="pr-filter-years">
                  <span className="pr-filter-label">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Fiscal Year:
                  </span>
                  <div className="pr-year-pills" role="tablist" aria-label="Fiscal year filters">
                    {pressYearFilters.map((yf) => (
                      <button
                        key={yf.id}
                        role="tab"
                        aria-selected={selectedYear === yf.id}
                        className={`pr-year-pill ${selectedYear === yf.id ? "is-active" : ""}`}
                        onClick={() => setSelectedYear(yf.id)}
                      >
                        {yf.label} ({yf.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Bar */}
                <div className="pr-search-box">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by date or keyword..."
                    aria-label="Search clippings"
                    className="pr-search-input"
                  />
                  {searchQuery && (
                    <button
                      className="pr-search-clear"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Status Header */}
              <div className="pr-status-header">
                <div>
                  <h2 className="pr-status-title">
                    <span className="pr-status-emoji">📰</span>
                    Regional Press Documentation
                    <span className="pr-year-tag">
                      Year: {selectedYear}
                    </span>
                  </h2>
                  <p className="pr-status-desc">
                    Verified Marathi press reports from Lokmat, Sakal, Deshonnati, Pudhari and regional news agencies.
                  </p>
                </div>
                <div className="pr-status-count">
                  <span>Showing <strong>{filteredClippings.length}</strong> Clippings in {selectedYear}</span>
                  <span className="pr-status-hint">💡 Click clipping to view in high-res reader</span>
                </div>
              </div>

              {/* Empty State */}
              {filteredClippings.length === 0 && (
                <div className="pr-empty">
                  <div className="pr-empty__icon">🗞️</div>
                  <h3>No Newspaper Clippings Found</h3>
                  <p>No clippings match your selected year filter or search query.</p>
                  <button
                    className="btn btn--primary"
                    onClick={() => {
                      setSelectedYear(pressYearFilters[0]?.id || "2026–27");
                      setSearchQuery("");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Newspaper Clippings Grid */}
              <div className="pr-grid">
                {filteredClippings.map((item, index) => (
                  <button
                    key={item.id || index}
                    className="pr-card"
                    onClick={() => {
                      setLightbox(item);
                      setIsZoomed(false);
                    }}
                    aria-label={`Open newspaper clipping: ${item.alt}`}
                  >
                    <div className="pr-card__img-wrap">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="pr-card__img"
                        loading={index < 6 ? "eager" : "lazy"}
                      />
                      <div className="pr-card__overlay">
                        <span className="pr-card__zoom-btn">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          Read Clipping
                        </span>
                      </div>
                      <span className="pr-card__badge-corner">#{index + 1}</span>
                    </div>

                    <div className="pr-card__content">
                      <div className="pr-card__tags">
                        <span className="pr-card__tag-date">
                          📅 {item.displayDate}
                        </span>
                        <span className="pr-card__tag-year">
                          FY {item.fiscalYear}
                        </span>
                      </div>
                      <p className="pr-card__caption" title={item.alt}>
                        {item.alt}
                      </p>
                      <div className="pr-card__meta">
                        <span className="pr-card__press-label">
                          <span className="pr-card__dot" /> Marathi Daily Clipping
                        </span>
                        <span className="pr-card__action">
                          Expand &rarr;
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ──────────────────────────────────────────────────────────
              TAB 2: OFFICIAL PRESS RELEASES
          ────────────────────────────────────────────────────────── */}
          {activeMainTab === "releases" && (
            <div role="tabpanel" aria-labelledby="tab-releases" className="pr-panel">
              {/* Year Filter Pills for Releases */}
              <div className="pr-controls-card">
                <div className="pr-filter-years">
                  <span className="pr-filter-label">Select Year:</span>
                  <div className="pr-year-pills" role="tablist" aria-label="Release years">
                    {releaseYears.map((yr) => (
                      <button
                        key={yr}
                        role="tab"
                        aria-selected={selectedReleaseYear === yr}
                        className={`pr-year-pill ${selectedReleaseYear === yr ? "is-active" : ""}`}
                        onClick={() => setSelectedReleaseYear(yr)}
                      >
                        {yr} ({officialPressReleases[yr]?.length || 0})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Header */}
              <div className="pr-status-header">
                <div>
                  <h2 className="pr-status-title">
                    <span className="pr-status-emoji">📢</span>
                    Official Mandal Statements &amp; Circulars
                    <span className="pr-year-tag">Year {selectedReleaseYear}</span>
                  </h2>
                  <p className="pr-status-desc">
                    Formal press notes, project milestone announcements, and public disclosures issued by Navchaitanya Yuva Mandal.
                  </p>
                </div>
                <div className="pr-status-count">
                  <span>{currentReleases.length} Official Announcements</span>
                </div>
              </div>

              {/* Release List */}
              <div className="pr-releases-list">
                {currentReleases.map((pr) => {
                  const tagStyle = categoryColors[pr.category] || {
                    bg: "#F5F3FF",
                    color: "#7C3AED",
                    border: "rgba(124, 58, 237, 0.2)",
                  };
                  return (
                    <article key={pr.id} className="pr-release-item">
                      <div className="pr-release-header">
                        <div className="pr-release-meta">
                          <span className="pr-release-date">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            {pr.date}
                          </span>
                          <span
                            className="pr-release-cat"
                            style={{
                              backgroundColor: tagStyle.bg,
                              color: tagStyle.color,
                              borderColor: tagStyle.border,
                            }}
                          >
                            {pr.category}
                          </span>
                        </div>
                        <span className="pr-release-badge">Official Release</span>
                      </div>

                      <h3 className="pr-release-title">{pr.title}</h3>
                      <p className="pr-release-summary">{pr.summary}</p>

                      <div className="pr-release-footer">
                        <span className="pr-release-id">Doc Ref: {pr.id.toUpperCase()}</span>
                        <div className="pr-release-desk">
                          <span>Navchaitanya Press Desk · Shiroli, Ghatanji</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================
              MEDIA DESK & PRESS CONTACT BANNER
          ============================================================ */}
          <div className="pr-desk-banner">
            <div className="pr-desk-banner__content">
              <span className="pr-desk-eyebrow">Journalists &amp; Media Partners</span>
              <h3>Media Contact &amp; Press Enquiries</h3>
              <p>
                For official statements, media interviews, high-resolution photography archives, or on-ground reporting access in Shiroli and surrounding talukas of Yavatmal:
              </p>
              <div className="pr-desk-contacts">
                <a href={`mailto:${org.email}`} className="pr-desk-item">
                  <span className="pr-desk-item__icon">✉️</span>
                  <div>
                    <span className="pr-desk-item__label">Press Desk Email</span>
                    <strong className="pr-desk-item__value">{org.email}</strong>
                  </div>
                </a>
                <a href="tel:+919421770995" className="pr-desk-item">
                  <span className="pr-desk-item__icon">📞</span>
                  <div>
                    <span className="pr-desk-item__label">Media Contact Phone</span>
                    <strong className="pr-desk-item__value">+91 9421770995 / 9403955764</strong>
                  </div>
                </a>
                <div className="pr-desk-item pr-desk-item--addr">
                  <span className="pr-desk-item__icon">📍</span>
                  <div>
                    <span className="pr-desk-item__label">Registered Office</span>
                    <strong className="pr-desk-item__value">{org.address}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="pr-desk-actions">
              <Link href="/news/media-coverage" className="btn btn--outline pr-desk-btn">
                <span>View Media Coverage</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/gallery" className="btn btn--secondary pr-desk-btn">
                <span>Field Activity Gallery</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTERACTIVE FULLSCREEN LIGHTBOX READER
      ============================================================ */}
      {lightbox && (
        <div
          className="pr-lightbox-backdrop"
          onClick={() => {
            setLightbox(null);
            setIsZoomed(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Newspaper clipping reader modal"
        >
          {/* Top Controls Bar */}
          <div className="pr-lb-topbar" onClick={(e) => e.stopPropagation()}>
            <div className="pr-lb-topbar__info">
              <span className="pr-lb-topbar__pill">📰 Marathi Daily Clipping</span>
              <span className="pr-lb-topbar__date">📅 {lightbox.displayDate}</span>
              <span className="pr-lb-topbar__fy">FY {lightbox.fiscalYear}</span>
            </div>

            <div className="pr-lb-topbar__actions">
              <button
                className={`pr-lb-btn ${isZoomed ? "is-active" : ""}`}
                onClick={() => setIsZoomed(!isZoomed)}
                title={isZoomed ? "Zoom Out to Fit" : "Zoom In (150%)"}
                aria-label="Toggle zoom"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  {isZoomed ? (
                    <line x1="8" y1="11" x2="14" y2="11" />
                  ) : (
                    <>
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </>
                  )}
                </svg>
                <span>{isZoomed ? "Fit Screen" : "Zoom 150%"}</span>
              </button>

              <a
                href={lightbox.src}
                target="_blank"
                rel="noopener noreferrer"
                className="pr-lb-btn pr-lb-btn--link"
                title="Open original high-res image in new tab"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Open Raw</span>
              </a>

              <button
                className="pr-lb-btn pr-lb-btn--close"
                onClick={() => {
                  setLightbox(null);
                  setIsZoomed(false);
                }}
                aria-label="Close reader"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation - Previous */}
          <button
            className="pr-lb-nav pr-lb-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            aria-label="Previous clipping"
            title="Previous (Left arrow)"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Navigation - Next */}
          <button
            className="pr-lb-nav pr-lb-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            aria-label="Next clipping"
            title="Next (Right arrow)"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Main Content Area */}
          <div
            className={`pr-lb-content ${isZoomed ? "is-zoomed" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pr-lb-img-container">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className={`pr-lb-img ${isZoomed ? "is-zoomed" : ""}`}
              />
            </div>

            {/* Bottom Footer Caption */}
            <div className="pr-lb-footer">
              <div className="pr-lb-caption-col">
                <p className="pr-lb-caption">{lightbox.alt}</p>
                <span className="pr-lb-subcaption">
                  Archive File: {lightbox.originalName} · Documented: {lightbox.displayDate}
                </span>
              </div>
              <div className="pr-lb-counter">
                {filteredClippings.findIndex((img) => img.id === lightbox.id) + 1} / {filteredClippings.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          SCOPED STYLES
      ============================================================ */}
      <style>{`
        /* ---- HERO SECTION ---- */
        .pr-hero {
          position: relative;
          overflow: hidden;
          padding: 60px 0 70px;
          text-align: center;
          background: linear-gradient(160deg, #FAF8FE 0%, #F5F3FF 45%, #ECFDF5 100%);
          border-bottom: 1px solid rgba(124, 58, 237, 0.08);
        }
        .pr-hero__gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
        }
        .pr-hero__orb {
          position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.2;
        }
        .pr-hero__orb--1 {
          width: 420px; height: 420px;
          background: #7C3AED; top: -120px; right: -80px;
        }
        .pr-hero__orb--2 {
          width: 320px; height: 320px;
          background: #10B981; bottom: -80px; left: -60px;
        }
        .pr-hero__inner {
          position: relative; z-index: 2; max-width: 860px; margin: 0 auto;
        }

        .pr-breadcrumbs {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #7A729A;
          margin-bottom: 20px;
        }
        .pr-breadcrumb-link {
          color: #7A729A;
          text-decoration: none;
          transition: color 0.15s;
        }
        .pr-breadcrumb-link:hover {
          color: #7C3AED;
        }
        .pr-breadcrumb-sep {
          opacity: 0.5;
        }
        .pr-breadcrumb-current {
          color: #18132B;
          font-weight: 600;
        }

        .pr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.08);
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .pr-eyebrow__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #7C3AED;
          box-shadow: 0 0 8px #7C3AED;
        }

        .pr-hero__title {
          font-size: clamp(2.1rem, 5.2vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          color: #18132B;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .highlight-text {
          color: #7C3AED;
          background: linear-gradient(135deg, #7C3AED 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pr-hero__mr {
          font-size: 1.15rem;
          color: #059669;
          font-weight: 600;
          margin: 0 0 14px;
        }
        .pr-hero__kicker {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #5E5680;
          max-width: 680px;
          margin: 0 auto 32px;
        }

        /* Metrics Bar */
        .pr-metrics-bar {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(124, 58, 237, 0.12);
          border-radius: 100px;
          padding: 10px 28px;
          box-shadow: 0 10px 28px rgba(124, 58, 237, 0.06);
          gap: 20px;
        }
        .pr-metric {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pr-metric__num {
          font-size: 1.3rem;
          font-weight: 800;
          color: #7C3AED;
        }
        .pr-metric__label {
          font-size: 12.5px;
          font-weight: 600;
          color: #4A4068;
        }
        .pr-metric-sep {
          width: 1px;
          height: 20px;
          background: rgba(124, 58, 237, 0.15);
        }

        /* ---- MAIN SECTION ---- */
        .pr-main-section {
          padding: 40px 0 90px;
          background: #FAFAFC;
        }

        /* Main Tabs */
        .pr-tab-container {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }
        .pr-tabs {
          display: inline-flex;
          background: #EDE9FE;
          padding: 5px;
          border-radius: 100px;
          gap: 4px;
        }
        .pr-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          border-radius: 100px;
          border: none;
          background: transparent;
          color: #5E5680;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .pr-tab:hover {
          color: #18132B;
        }
        .pr-tab.is-active {
          background: #FFFFFF;
          color: #7C3AED;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.12);
        }
        .pr-tab__badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 100px;
          background: rgba(124, 58, 237, 0.12);
          color: #7C3AED;
        }
        .pr-tab.is-active .pr-tab__badge {
          background: #7C3AED;
          color: #FFFFFF;
        }

        /* Controls Card */
        .pr-controls-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          background: #FFFFFF;
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: 16px;
          padding: 16px 20px;
          margin-bottom: 28px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }
        .pr-filter-years {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .pr-filter-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 700;
          color: #4A4068;
        }
        .pr-year-pills {
          display: inline-flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pr-year-pill {
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid #E5E7EB;
          background: #F9FAFB;
          color: #4B5563;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s;
        }
        .pr-year-pill:hover {
          border-color: #C4B5FD;
          color: #7C3AED;
          background: #FAF8FE;
        }
        .pr-year-pill.is-active {
          border-color: #7C3AED;
          background: #7C3AED;
          color: #FFFFFF;
          box-shadow: 0 4px 10px rgba(124, 58, 237, 0.2);
        }

        .pr-search-box {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 260px;
        }
        .pr-search-box svg {
          position: absolute;
          left: 12px;
          color: #9CA3AF;
          pointer-events: none;
        }
        .pr-search-input {
          width: 100%;
          padding: 9px 34px 9px 36px;
          border-radius: 100px;
          border: 1px solid #E5E7EB;
          background: #F9FAFB;
          font-size: 13.5px;
          color: #1F2937;
          outline: none;
          transition: all 0.18s;
        }
        .pr-search-input:focus {
          border-color: #7C3AED;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }
        .pr-search-clear {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #9CA3AF;
          cursor: pointer;
          font-size: 12px;
        }

        /* Status Header */
        .pr-status-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E5E7EB;
        }
        .pr-status-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #18132B;
          margin: 0 0 6px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .pr-status-emoji {
          font-size: 1.4rem;
        }
        .pr-year-tag {
          font-size: 12px;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          padding: 4px 10px;
          border-radius: 100px;
        }
        .pr-status-desc {
          font-size: 13.5px;
          color: #5E5680;
          margin: 0;
        }
        .pr-status-count {
          text-align: right;
          font-size: 13px;
          color: #4A4068;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pr-status-hint {
          font-size: 12px;
          color: #7C3AED;
          font-weight: 600;
        }

        /* Clippings Grid */
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 24px;
        }

        /* Newspaper Card */
        .pr-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          overflow: hidden;
          text-align: left;
          cursor: pointer;
          transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.24s ease, border-color 0.24s;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }
        .pr-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(124, 58, 237, 0.12);
          border-color: #C4B5FD;
        }
        .pr-card__img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #F3F4F6;
          overflow: hidden;
        }
        .pr-card__img {
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease;
        }
        .pr-card:hover .pr-card__img {
          transform: scale(1.04);
        }
        .pr-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(24, 19, 43, 0.75) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .pr-card:hover .pr-card__overlay {
          opacity: 1;
        }
        .pr-card__zoom-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          color: #7C3AED;
          font-size: 13px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 100px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          transform: translateY(6px);
          transition: transform 0.2s ease;
        }
        .pr-card:hover .pr-card__zoom-btn {
          transform: translateY(0);
        }
        .pr-card__badge-corner {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(24, 19, 43, 0.75);
          backdrop-filter: blur(4px);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .pr-card__content {
          padding: 16px 18px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pr-card__tags {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .pr-card__tag-date {
          font-size: 12px;
          font-weight: 700;
          color: #7C3AED;
          background: #F5F3FF;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .pr-card__tag-year {
          font-size: 11.5px;
          font-weight: 600;
          color: #059669;
          background: #ECFDF5;
          padding: 3px 8px;
          border-radius: 100px;
        }
        .pr-card__caption {
          font-size: 13.5px;
          line-height: 1.5;
          color: #1F2937;
          font-weight: 600;
          margin: 0 0 14px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pr-card__meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid #F3F4F6;
          font-size: 12px;
          color: #6B7280;
        }
        .pr-card__press-label {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pr-card__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
        }
        .pr-card__action {
          color: #7C3AED;
          font-weight: 700;
          transition: transform 0.15s;
        }
        .pr-card:hover .pr-card__action {
          transform: translateX(3px);
        }

        /* Empty State */
        .pr-empty {
          text-align: center;
          padding: 60px 20px;
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px dashed #D1D5DB;
        }
        .pr-empty__icon {
          font-size: 42px;
          margin-bottom: 12px;
        }
        .pr-empty h3 {
          font-size: 1.25rem;
          color: #18132B;
          margin: 0 0 8px;
        }
        .pr-empty p {
          color: #6B7280;
          margin: 0 0 20px;
        }

        /* ---- TAB 2: OFFICIAL RELEASES ---- */
        .pr-releases-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .pr-release-item {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px 28px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pr-release-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(124, 58, 237, 0.08);
          border-color: #DDD6FE;
        }
        .pr-release-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pr-release-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .pr-release-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #6B7280;
        }
        .pr-release-cat {
          font-size: 12px;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 100px;
          border: 1px solid;
        }
        .pr-release-badge {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #059669;
          background: #ECFDF5;
          padding: 3px 10px;
          border-radius: 6px;
        }
        .pr-release-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #18132B;
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .pr-release-summary {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #4B5563;
          margin: 0 0 18px;
        }
        .pr-release-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #F3F4F6;
          font-size: 12.5px;
          color: #9CA3AF;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pr-release-id {
          font-family: monospace;
          font-weight: 600;
          color: #7C3AED;
          background: #F5F3FF;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .pr-release-desk {
          color: #6B7280;
          font-weight: 500;
        }

        /* ---- MEDIA DESK BANNER ---- */
        .pr-desk-banner {
          margin-top: 60px;
          background: linear-gradient(135deg, #1E1736 0%, #151026 100%);
          color: #FFFFFF;
          border-radius: 24px;
          padding: 44px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
          box-shadow: 0 20px 48px rgba(24, 19, 43, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
        }
        .pr-desk-banner__content {
          max-width: 680px;
        }
        .pr-desk-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #A78BFA;
          margin-bottom: 8px;
        }
        .pr-desk-banner h3 {
          font-size: 1.65rem;
          font-weight: 800;
          margin: 0 0 10px;
          color: #FFFFFF;
        }
        .pr-desk-banner p {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #CBD5E1;
          margin: 0 0 24px;
        }
        .pr-desk-contacts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .pr-desk-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 14px;
          text-decoration: none;
          color: inherit;
          transition: background 0.2s, border-color 0.2s;
        }
        .pr-desk-item:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(167, 139, 250, 0.4);
        }
        .pr-desk-item--addr {
          grid-column: 1 / -1;
        }
        .pr-desk-item__icon {
          font-size: 20px;
        }
        .pr-desk-item__label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94A3B8;
          margin-bottom: 2px;
        }
        .pr-desk-item__value {
          display: block;
          font-size: 13.5px;
          font-weight: 600;
          color: #F8FAFC;
        }
        .pr-desk-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 200px;
        }
        .pr-desk-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 100px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn--outline.pr-desk-btn {
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          background: transparent;
        }
        .btn--outline.pr-desk-btn:hover {
          background: #FFFFFF;
          color: #18132B;
        }
        .btn--secondary.pr-desk-btn {
          background: #7C3AED;
          color: #FFFFFF;
          border: none;
        }
        .btn--secondary.pr-desk-btn:hover {
          background: #6D28D9;
        }

        /* ---- LIGHTBOX MODAL ---- */
        .pr-lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(10, 8, 20, 0.94);
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 20px 20px;
          animation: prLbFadeIn 0.2s ease-out;
        }
        @keyframes prLbFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Lightbox Topbar */
        .pr-lb-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(20, 16, 36, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          z-index: 20;
        }
        .pr-lb-topbar__info {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: #FFFFFF;
          flex-wrap: wrap;
        }
        .pr-lb-topbar__pill {
          background: rgba(124, 58, 237, 0.3);
          color: #DDD6FE;
          padding: 4px 12px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 12px;
        }
        .pr-lb-topbar__date {
          color: #6EE7B7;
          font-weight: 600;
        }
        .pr-lb-topbar__fy {
          color: #94A3B8;
        }

        .pr-lb-topbar__actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pr-lb-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .pr-lb-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .pr-lb-btn.is-active {
          background: #7C3AED;
          border-color: #A78BFA;
        }
        .pr-lb-btn--close {
          width: 36px;
          height: 36px;
          padding: 0;
          justify-content: center;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
        }
        .pr-lb-btn--close:hover {
          background: rgba(239, 68, 68, 0.5);
        }

        /* Lightbox Navigation */
        .pr-lb-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 15;
        }
        .pr-lb-nav:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: translateY(-50%) scale(1.1);
        }
        .pr-lb-nav--prev { left: 20px; }
        .pr-lb-nav--next { right: 20px; }

        /* Lightbox Image Container */
        .pr-lb-content {
          max-width: 980px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          transition: max-width 0.3s ease;
        }
        .pr-lb-content.is-zoomed {
          max-width: 1300px;
        }

        .pr-lb-img-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-height: 72vh;
          width: 100%;
        }
        .pr-lb-img {
          max-width: 100%;
          max-height: 72vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #1E1736;
          transition: transform 0.3s ease;
        }
        .pr-lb-img.is-zoomed {
          max-height: none;
          max-width: 100%;
          transform: scale(1.3);
          transform-origin: top center;
          margin-top: 20px;
        }

        /* Lightbox Footer */
        .pr-lb-footer {
          margin-top: 14px;
          width: 100%;
          max-width: 980px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.9);
          padding: 8px 12px;
          background: rgba(20, 16, 36, 0.6);
          border-radius: 10px;
          gap: 16px;
        }
        .pr-lb-caption-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pr-lb-caption {
          font-size: 14.5px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0;
        }
        .pr-lb-subcaption {
          font-size: 12px;
          color: #94A3B8;
        }
        .pr-lb-counter {
          font-size: 13px;
          font-weight: 800;
          color: #A78BFA;
          white-space: nowrap;
          padding: 4px 10px;
          background: rgba(124, 58, 237, 0.25);
          border-radius: 100px;
        }

        /* ---- RESPONSIVE DESIGN ---- */
        @media (max-width: 768px) {
          .pr-hero { padding: 40px 0 50px; }
          .pr-metrics-bar {
            flex-direction: column;
            border-radius: 20px;
            padding: 16px 24px;
            gap: 10px;
          }
          .pr-metric-sep {
            width: 100%;
            height: 1px;
          }
          .pr-controls-card {
            flex-direction: column;
            align-items: stretch;
          }
          .pr-search-box {
            width: 100%;
          }
          .pr-status-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .pr-status-count {
            text-align: left;
          }
          .pr-desk-banner {
            padding: 28px 22px;
          }
          .pr-desk-actions {
            width: 100%;
          }
          .pr-lb-nav--prev { left: 8px; width: 42px; height: 42px; }
          .pr-lb-nav--next { right: 8px; width: 42px; height: 42px; }
          .pr-lb-topbar { padding: 0 12px; }
          .pr-lb-topbar__fy { display: none; }
          .pr-lb-btn span { display: none; }
          .pr-lb-btn { padding: 6px; }
        }
      `}</style>
    </>
  );
}
