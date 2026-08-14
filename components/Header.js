"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { org } from "@/lib/siteData";

const NAV = [
  { href: "/about",    label: "About" },
  { href: "/work",     label: "Our Work" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/involved", label: "Get Involved" },
  { href: "/contact",  label: "Contact" },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header__row">
        {/* ---- Brand ---- */}
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 56 56" width="44" height="44" fill="none">
              {/* Stylised leaf + water drop */}
              <circle cx="28" cy="28" r="27" fill="rgba(201,146,42,0.15)" />
              <path
                d="M28 44 C14 44 8 34 8 26 C8 18 18 10 28 10 C38 10 48 18 48 26 C48 34 42 44 28 44Z"
                fill="var(--emerald-mid)"
                opacity="0.9"
              />
              <path
                d="M20 28 C22 22 28 18 28 18 C28 18 34 22 36 28 C36 34 32 38 28 38 C24 38 20 34 20 28Z"
                fill="var(--gold)"
              />
            </svg>
          </span>
          <span className="brand__text">
            <strong>Navchaitanya</strong>
            <small>Yuva Mandal · Shiroli</small>
          </span>
        </Link>

        {/* ---- Desktop Nav ---- */}
        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/involved#donate"
            className="btn btn--gold nav-cta"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>
        </nav>

        {/* ---- Mobile Toggle ---- */}
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        /* ---- Header shell ---- */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(9, 46, 30, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .site-header.is-scrolled {
          box-shadow: 0 4px 32px rgba(9,46,30,0.35);
          background: rgba(9, 46, 30, 0.99);
        }

        .site-header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        /* ---- Brand ---- */
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .brand__mark {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .brand:hover .brand__mark { transform: rotate(-8deg) scale(1.08); }

        .brand__text {
          display: flex;
          flex-direction: column;
          line-height: 1.18;
        }
        .brand__text strong {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }
        .brand__text small {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-light);
          font-weight: 600;
        }

        /* ---- Desktop Nav links ---- */
        .site-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .site-nav ul {
          display: flex;
          gap: 6px;
          list-style: none;
        }
        .site-nav ul li a {
          display: block;
          padding: 8px 14px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.82);
          border-radius: 8px;
          position: relative;
          transition: color 0.2s, background 0.2s;
        }
        .site-nav ul li a::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 5px;
          height: 2px;
          background: var(--gold-light);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s ease;
          transform-origin: center;
        }
        .site-nav ul li a:hover { color: #ffffff; background: rgba(255,255,255,0.07); }
        .site-nav ul li a:hover::after { transform: scaleX(1); }

        .nav-cta { padding: 11px 26px; font-size: 14px; }

        /* ---- Mobile toggle ---- */
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        .nav-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: rgba(255,255,255,0.85);
          border-radius: 2px;
          transition: transform 0.28s ease, opacity 0.2s ease;
          transform-origin: center;
        }
        .nav-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-toggle.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ---- Mobile breakpoint ---- */
        @media (max-width: 900px) {
          .nav-toggle { display: flex; }
          .site-nav {
            position: fixed;
            top: 76px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(9, 46, 30, 0.98);
            backdrop-filter: blur(24px);
            flex-direction: column;
            align-items: flex-start;
            padding: 40px 28px;
            gap: 8px;
            transform: translateX(100%);
            transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
          }
          .site-nav.is-open { transform: translateX(0); }
          .site-nav ul { flex-direction: column; gap: 4px; width: 100%; }
          .site-nav ul li a {
            font-size: 22px;
            padding: 14px 6px;
            border-radius: 0;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .site-nav ul li a::after { display: none; }
          .nav-cta { margin-top: 24px; width: 100%; justify-content: center; font-size: 16px; padding: 16px; }
        }
      `}</style>
    </header>
  );
}
