"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ArcDivider from "@/components/ArcDivider";

const SLIDES = [
  {
    id: "slide-1",
    image: "/images/heroone.jpeg",
    tag: "Water Conservation & Land Revitalisation",
    icon: "💧",
    alt: "Navchaitanya Ground Action - Barren Land for Water Conservation",
    title: "Breathing life into barren land",
    desc: "Repurposing dry, unutilised land for water conservation to capture every drop of rain.",
    caption: "Breathing life into barren land — repurposing dry, unutilised land for water conservation to capture every drop of rain.",
  },
  {
    id: "slide-2",
    image: "/images/herotwo.jpeg",
    tag: "Farm Pond Excavation & Groundwork",
    icon: "🚜",
    alt: "Navchaitanya Ground Action - Farm Pond Excavation and Construction",
    title: "Laying the groundwork",
    desc: "Excavation of a farm pond to harvest rainwater and replenish groundwater levels.",
    caption: "Laying the groundwork — excavation of a farm pond to harvest rainwater and replenish groundwater levels.",
  },
  {
    id: "slide-3",
    image: "/images/herothree.jpeg",
    tag: "Rainwater Harvesting & Farm Ponds",
    icon: "🌊",
    alt: "Navchaitanya Ground Action - Farm Pond Filled with Harvested Rainwater",
    title: "Water conservation in action",
    desc: "A completed farm pond brimmed with harvested rainwater, revitalising the surrounding fields.",
    caption: "Water conservation in action — a completed farm pond brimmed with harvested rainwater, revitalising the surrounding fields.",
  },
  {
    id: "slide-4",
    image: "/images/herofour.jpeg",
    tag: "Paanpoi & Wildlife Hydration",
    icon: "🐦",
    alt: "Navchaitanya Ground Action - Clay Water Bowl for Birds and Wildlife",
    title: "A lifeline during the dry season",
    desc: "Birds and a garden lizard sharing an earthen water bath in the forest.",
    caption: "A lifeline during the dry season — birds and a garden lizard sharing an earthen water bath in the forest.",
  },
  {
    id: "slide-5",
    image: "/images/herofive.jpeg",
    tag: "Upcycling & Wildlife Support",
    icon: "♻️",
    alt: "Navchaitanya Ground Action - Upcycled Bottle Bird Feeder",
    title: "Supporting local wildlife",
    desc: "An upcycled plastic bottle repurposed into a feeding station for birds.",
    caption: "Supporting local wildlife — an upcycled plastic bottle repurposed into a feeding station for birds.",
  },
  {
    id: "slide-6",
    image: "/images/herosix.jpeg",
    tag: "Youth & Campus Tree Plantation",
    icon: "🌱",
    alt: "Navchaitanya Ground Action - School Girls Tree Plantation Drive",
    title: "Sowing seeds for a greener tomorrow",
    desc: "Schoolgirls actively taking part in a campus tree plantation drive.",
    caption: "Sowing seeds for a greener tomorrow — schoolgirls actively taking part in a campus tree plantation drive.",
  },
  {
    id: "slide-7",
    image: "/images/heroseven.jpeg",
    tag: "Community Awareness & Street Play",
    icon: "🎭",
    alt: "Navchaitanya Ground Action - Street Play for Social and Government Schemes Awareness",
    title: "Raising awareness through art",
    desc: "Folk artists performing a street play to educate the community on government welfare initiatives.",
    caption: "Raising awareness through art — folk artists performing a street play to educate the community on government welfare initiatives.",
  }
];

const AUTOPLAY_DELAY = 5000; // 5 seconds per slide for comfortable reading

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  // Continuous automatic rotation with pause on hover
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <section
      className="hero-slider-wrap"
      aria-label="Grassroots Action Slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slides */}
      <div className="hero-slides">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.id}
              className={`hero-slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <div className="hero-slide__img-box">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  quality={92}
                  className="hero-slide__img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Cinematic Dual Gradient Scrim (ensures razor-sharp text readability) */}
      <div className="hero-scrim" aria-hidden="true" />

      {/* Floating Premium Content Layer */}
      <div className="hero-content-container">
        <div className="wrap hero-content-wrap">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={`caption-${slide.id}`}
                className={`hero-caption-card ${isActive ? "is-active" : ""}`}
                aria-hidden={!isActive}
              >
                {/* Frosted Glass Eyebrow Badge */}
                <div className="hero-badge">
                  <span className="hero-badge__dot" aria-hidden="true" />
                  <span className="hero-badge__icon" aria-hidden="true">{slide.icon}</span>
                  <span className="hero-badge__tag">{slide.tag}</span>
                  <span className="hero-badge__divider" aria-hidden="true">•</span>
                  <span className="hero-badge__counter">
                    {String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="hero-title">
                  {slide.title}
                </h1>

                {/* Subtitle / Descriptive Ground Impact */}
                <p className="hero-desc">
                  {slide.desc}
                </p>

                {/* CTA Action Buttons */}
                <div className="hero-actions">
                  <Link href="/work" className="hero-btn hero-btn--primary">
                    <span>Explore Our Work</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link href="/gallery" className="hero-btn hero-btn--ghost">
                    <span>View Ground Gallery</span>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls Bar: Prev / Next Buttons + Slide Indicators */}
      <div className="hero-controls-bar">
        <div className="wrap hero-controls-wrap">
          {/* Arrow Navigation */}
          <div className="hero-arrows">
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
              title="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={nextSlide}
              aria-label="Next slide"
              title="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Segmented Pill Indicators with Active Progress */}
          <div className="hero-indicators" role="tablist" aria-label="Slides">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={`dot-${slide.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  className={`hero-indicator ${isActive ? "is-active" : ""}`}
                  onClick={() => goToSlide(idx)}
                >
                  <span className="hero-indicator__bar" />
                  <span className="hero-indicator__num">{String(idx + 1).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>

          {/* Autoplay Pause Hint */}
          <div className="hero-pause-indicator" aria-hidden="true">
            <span className={`hero-pause-dot ${isPaused ? "is-paused" : ""}`} />
            <span className="hero-pause-text">{isPaused ? "Paused on hover" : "Auto-playing"}</span>
          </div>
        </div>
      </div>

      {/* Bottom Arc Divider into the next white section */}
      <div className="hero-bottom-arc">
        <ArcDivider color="var(--white)" />
      </div>

      <style jsx>{`
        .hero-slider-wrap {
          position: relative;
          width: 100%;
          height: 86vh;
          min-height: 600px;
          max-height: 920px;
          overflow: hidden;
          background: #0f0c1e;
          user-select: none;
        }

        @media (max-width: 900px) {
          .hero-slider-wrap {
            height: 88vh;
            min-height: 560px;
          }
        }

        @media (max-width: 640px) {
          .hero-slider-wrap {
            height: 92vh;
            min-height: 540px;
          }
        }

        /* ---- Background Slides ---- */
        .hero-slides {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-slide.is-active {
          opacity: 1;
          visibility: visible;
          z-index: 1;
        }

        .hero-slide__img-box {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Cinematic subtle ken-burns slow zoom */
        .hero-slide__img {
          transform: scale(1);
          transition: transform 7s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .hero-slide.is-active .hero-slide__img {
          transform: scale(1.08);
        }

        /* ---- Cinematic Multi-layer Scrim ---- */
        .hero-scrim {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(
              180deg,
              rgba(15, 12, 30, 0.55) 0%,
              rgba(15, 12, 30, 0.3) 30%,
              rgba(15, 12, 30, 0.78) 68%,
              rgba(15, 12, 30, 0.96) 100%
            ),
            linear-gradient(
              90deg,
              rgba(15, 12, 30, 0.88) 0%,
              rgba(15, 12, 30, 0.6) 48%,
              rgba(15, 12, 30, 0.25) 100%
            );
        }

        @media (max-width: 768px) {
          .hero-scrim {
            background:
              linear-gradient(
                180deg,
                rgba(15, 12, 30, 0.6) 0%,
                rgba(15, 12, 30, 0.5) 40%,
                rgba(15, 12, 30, 0.88) 75%,
                rgba(15, 12, 30, 0.98) 100%
              );
          }
        }

        /* ---- Floating Content Layer ---- */
        .hero-content-container {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          pointer-events: none;
          padding-top: 10px;
          padding-bottom: 95px;
        }

        .hero-content-wrap {
          position: relative;
          width: 100%;
          pointer-events: auto;
        }

        .hero-caption-card {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          max-width: 780px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(22px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .hero-caption-card.is-active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
          position: relative;
        }

        /* ---- Eyebrow Badge ---- */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 7px 16px;
          border-radius: var(--radius-pill);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
          margin-bottom: 18px;
          color: #ffffff;
        }

        .hero-badge__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGreen 2.2s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.7; }
        }

        .hero-badge__icon {
          font-size: 14px;
          line-height: 1;
        }

        .hero-badge__tag {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
        }

        .hero-badge__divider {
          color: rgba(255, 255, 255, 0.35);
          font-size: 12px;
        }

        .hero-badge__counter {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.08em;
        }

        /* ---- Headline Typography ---- */
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.1rem, 4.2vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 16px 0;
          text-shadow: 0 3px 25px rgba(0, 0, 0, 0.55);
          max-width: 740px;
        }

        /* ---- Description Body ---- */
        .hero-desc {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 1.4vw, 1.22rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 28px 0;
          max-width: 640px;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
          font-weight: 400;
        }

        /* ---- Action Buttons ---- */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: var(--radius-pill);
          font-family: var(--font-body);
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .hero-btn--primary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #059669 100%);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.45), 0 2px 6px rgba(5, 150, 105, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(124, 58, 237, 0.6), 0 4px 10px rgba(5, 150, 105, 0.4);
          filter: brightness(1.08);
        }

        .hero-btn--primary svg {
          transition: transform 0.25s ease;
        }

        .hero-btn--primary:hover svg {
          transform: translateX(4px);
        }

        .hero-btn--ghost {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.26);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .hero-btn--ghost:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-2px);
          color: #ffffff;
        }

        /* ---- Bottom Controls Bar ---- */
        .hero-controls-bar {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 34px;
          z-index: 6;
          pointer-events: none;
        }

        .hero-controls-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          pointer-events: auto;
        }

        /* Prev / Next circular arrows */
        .hero-arrows {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .hero-arrow-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.45);
          transform: scale(1.08);
          color: #a78bfa;
        }

        /* Segmented Indicators */
        .hero-indicators {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 12, 30, 0.5);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .hero-indicator {
          background: transparent;
          border: none;
          padding: 6px 4px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: all 0.25s ease;
        }

        .hero-indicator__bar {
          width: 22px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.28);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }

        .hero-indicator.is-active .hero-indicator__bar {
          width: 38px;
          background: linear-gradient(90deg, #a78bfa, #34d399);
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.7);
        }

        .hero-indicator__num {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.45);
          transition: color 0.25s ease;
          line-height: 1;
        }

        .hero-indicator.is-active .hero-indicator__num {
          color: #ffffff;
        }

        .hero-indicator:hover .hero-indicator__bar {
          background: rgba(255, 255, 255, 0.55);
        }

        /* Pause indicator */
        .hero-pause-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(15, 12, 30, 0.5);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-pause-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 6px #34d399;
        }

        .hero-pause-dot.is-paused {
          background: #f59e0b;
          box-shadow: 0 0 6px #f59e0b;
        }

        @media (max-width: 900px) {
          .hero-pause-indicator {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-content-container {
            padding-bottom: 110px;
            padding-top: 15px;
          }

          .hero-title {
            font-size: 1.85rem;
            margin-bottom: 12px;
          }

          .hero-desc {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }

          .hero-actions {
            gap: 10px;
          }

          .hero-btn {
            padding: 11px 20px;
            font-size: 13.5px;
            width: 100%;
            justify-content: center;
          }

          .hero-controls-bar {
            bottom: 24px;
          }

          .hero-indicator__bar {
            width: 14px;
            height: 3px;
          }

          .hero-indicator.is-active .hero-indicator__bar {
            width: 22px;
          }

          .hero-indicator__num {
            display: none;
          }

          .hero-arrow-btn {
            width: 36px;
            height: 36px;
          }
        }

        /* ---- Bottom Arc Divider ---- */
        .hero-bottom-arc {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          z-index: 5;
          line-height: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
