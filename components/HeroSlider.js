"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import ArcDivider from "@/components/ArcDivider";

const SLIDES = [
  {
    id: "slide-1",
    image: "/images/heroone.jpeg",
    alt: "Navchaitanya Ground Action - Paanpoi Bird Water Bowl Initiative in Shiroli",
  },
  {
    id: "slide-2",
    image: "/images/herotwo.jpeg",
    alt: "Navchaitanya Ground Action - Rainwater Harvesting and Farm Pond Construction",
  },
  {
    id: "slide-3",
    image: "/images/herothree.jpeg",
    alt: "Navchaitanya Ground Action - Full Water Body and Green Plantation",
  },
  {
    id: "slide-4",
    image: "/images/herofour.jpeg",
    alt: "Navchaitanya Ground Action - Full Water Body and Green Plantation",
  },
  {
    id: "slide-5",
    image: "/images/herofive.jpeg",
    alt: "Navchaitanya Ground Action - Full Water Body and Green Plantation",
  }
];

const AUTOPLAY_DELAY = 2500; // 4.5 seconds

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  // Continuous seamless automatic slide rotation
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  return (
    <section
      className="hero-slider-wrap"
      aria-label="Image Slideshow"
    >
      {/* Background Image Slides (Pure clean images, no buttons, no text) */}
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
                  quality={95}
                  className="hero-slide__img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Arc Divider into the next white section */}
      <div className="hero-bottom-arc">
        <ArcDivider color="var(--white)" />
      </div>

      <style jsx>{`
        .hero-slider-wrap {
          position: relative;
          width: 100%;
          height: 82vh;
          min-height: 520px;
          max-height: 860px;
          overflow: hidden;
          background: #110e20;
          user-select: none;
        }

        @media (max-width: 768px) {
          .hero-slider-wrap {
            height: 60vh;
            min-height: 400px;
          }
        }

        /* ---- Slides Container ---- */
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

        /* Subtle smooth cinematic zoom */
        .hero-slide__img {
          transform: scale(1);
          transition: transform 6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .hero-slide.is-active .hero-slide__img {
          transform: scale(1.06);
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
