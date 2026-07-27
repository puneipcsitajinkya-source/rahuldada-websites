"use client";

import Link from "next/link";
import { useState } from "react";
import { org } from "@/lib/siteData";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="40" height="40">
              <path
                d="M6 22 C6 34 16 42 24 42 C32 42 42 34 42 22 C36 26 30 20 24 26 C18 20 12 26 6 22 Z"
                fill="var(--clay)"
              />
              <circle cx="24" cy="16" r="6.5" fill="var(--forest)" />
            </svg>
          </span>
          <span className="brand__text">
            <strong>Navchaitanya</strong>
            <small>Yuva Mandal, Shiroli</small>
          </span>
        </Link>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/involved#donate" className="btn btn--clay nav-cta" onClick={() => setOpen(false)}>
            Donate
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(251, 247, 239, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .site-header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 78px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand__text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .brand__text strong {
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--forest-deep);
        }
        .brand__text small {
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--clay);
          text-transform: uppercase;
          font-weight: 600;
        }
        .site-nav ul {
          display: flex;
          gap: 28px;
          list-style: none;
        }
        .site-nav a {
          font-weight: 600;
          font-size: 15px;
          color: var(--ink);
          position: relative;
        }
        .site-nav a:hover { color: var(--clay); }
        .site-nav { display: flex; align-items: center; gap: 24px; }
        .nav-toggle { display: none; }
        @media (max-width: 880px) {
          .nav-toggle {
            display: flex;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            padding: 8px;
            cursor: pointer;
          }
          .nav-toggle span { width: 24px; height: 2px; background: var(--forest-deep); }
          .site-nav {
            position: fixed;
            inset: 78px 0 0 0;
            background: var(--cream);
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
            transform: translateX(100%);
            transition: transform 0.25s ease;
          }
          .site-nav.is-open { transform: translateX(0); }
          .site-nav ul { flex-direction: column; gap: 22px; }
          .site-nav a { font-size: 20px; }
          .nav-cta { margin-top: 20px; }
        }
      `}</style>
    </header>
  );
}
