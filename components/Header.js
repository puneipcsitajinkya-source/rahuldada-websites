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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header__row">
        {/* ---- Brand ---- */}
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 56 56" width="42" height="42" fill="none">
              <defs>
                <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              <circle cx="28" cy="28" r="26" fill="rgba(124, 58, 237, 0.08)" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1.5" />
              <path
                d="M28 42 C16 42 10 33 10 25 C10 17 20 10 28 10 C36 10 46 17 46 25 C46 33 40 42 28 42Z"
                fill="url(#brandGrad)"
              />
              <path
                d="M22 27 C23 21 28 17 28 17 C28 17 33 21 34 27 C34 32 31 35 28 35 C25 35 22 32 22 27Z"
                fill="#FFFFFF"
                opacity="0.95"
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
            className="btn btn--primary nav-cta"
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
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(124, 58, 237, 0.08);
          transition: box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }
        .site-header.is-scrolled {
          box-shadow: 0 10px 30px -5px rgba(124, 58, 237, 0.08), 0 2px 6px rgba(16, 185, 129, 0.04);
          background: rgba(255, 255, 255, 0.96);
          border-bottom-color: rgba(124, 58, 237, 0.12);
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
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .brand:hover .brand__mark { transform: rotate(-8deg) scale(1.08); }

        .brand__text {
          display: flex;
          flex-direction: column;
          line-height: 1.18;
        }
        .brand__text strong {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 700;
          color: var(--charcoal);
          letter-spacing: -0.02em;
        }
        .brand__text small {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #7C3AED, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
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
          padding: 8px 16px;
          font-weight: 600;
          font-size: 14.5px;
          letter-spacing: 0.01em;
          color: var(--ink);
          border-radius: var(--radius-pill);
          position: relative;
          transition: color 0.2s, background 0.2s;
        }
        .site-nav ul li a::after {
          content: "";
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 4px;
          height: 2px;
          background: linear-gradient(90deg, #7C3AED, #10B981);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s ease;
          transform-origin: center;
        }
        .site-nav ul li a:hover {
          color: var(--purple);
          background: var(--purple-pale);
        }
        .site-nav ul li a:hover::after { transform: scaleX(1); }

        .nav-cta {
          padding: 10px 24px;
          font-size: 14px;
        }

        /* ---- Mobile toggle ---- */
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: var(--purple-pale);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-radius: 10px;
          padding: 10px;
          cursor: pointer;
        }
        .nav-toggle span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--charcoal);
          border-radius: 2px;
          transition: transform 0.28s ease, opacity 0.2s ease;
          transform-origin: center;
        }
        .nav-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: var(--purple); }
        .nav-toggle.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: var(--purple); }

        /* ---- Mobile breakpoint ---- */
        @media (max-width: 900px) {
          .nav-toggle { display: flex; }
          .site-nav {
            position: fixed;
            top: 76px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(24px);
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 28px;
            gap: 12px;
            transform: translateX(100%);
            transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
            overflow-y: auto;
            border-top: 1px solid rgba(124, 58, 237, 0.08);
          }
          .site-nav.is-open { transform: translateX(0); }
          .site-nav ul { flex-direction: column; gap: 6px; width: 100%; }
          .site-nav ul li a {
            font-size: 20px;
            padding: 14px 12px;
            border-radius: 12px;
            border-bottom: 1px solid rgba(124, 58, 237, 0.06);
          }
          .site-nav ul li a::after { display: none; }
          .nav-cta { margin-top: 20px; width: 100%; justify-content: center; font-size: 16px; padding: 15px; }
        }
      `}</style>
    </header>
  );
}
