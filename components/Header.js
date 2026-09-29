"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { org } from "@/lib/siteData";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/involved", label: "Get Involved" },
  {
    href: "/news",
    label: "News",
    children: [
      { href: "/news/press-release", label: "Press Release" },
      { href: "/news/media-coverage", label: "Media Coverage" },
    ],
  },
  { href: "/contact", label: "Contact" },
  { href: "/compliances", label: "Compliances" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

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
            <img src="/images/logo.jpeg" height={50} width={50} alt="Navchaitanya" />

          </span>
          <span className="brand__text">
            <span className="brand__line-1">Navchaitanya</span>
            <span className="brand__line-2">BAHUUDDESHIYA VIKAS</span>
            <span className="brand__line-3">YUVA MANDAL · SHIROLI</span>
          </span>
        </Link>

        {/* ---- Desktop Nav ---- */}
        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <ul>
            {NAV.map((item) =>
              item.children ? (
                <li key={item.href} className="has-dropdown">
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                    <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  {/* Desktop hover dropdown */}
                  <ul className="dropdown-menu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* Mobile expand button */}
                  <button
                    className={`mobile-dropdown-toggle ${mobileDropdown === item.href ? "is-open" : ""}`}
                    aria-label="Expand sub-menu"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileDropdown(mobileDropdown === item.href ? null : item.href);
                    }}
                  >
                    <svg width="12" height="7" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* Mobile sub-menu */}
                  {mobileDropdown === item.href && (
                    <ul className="mobile-submenu">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={() => { setOpen(false); setMobileDropdown(null); }}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
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
          justify-content: center;
          width: fit-content;
        }
        .brand__line-1 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1.05;
          background: linear-gradient(135deg, #2E1065 0%, #7C3AED 55%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }
        .brand__line-2 {
          font-family: var(--font-body);
          font-size: 8.6px;
          font-weight: 800;
          letter-spacing: 0.165em;
          text-transform: uppercase;
          color: #7C3AED;
          line-height: 1.25;
          display: block;
          margin-top: 2px;
          white-space: nowrap;
        }
        .brand__line-3 {
          font-family: var(--font-body);
          font-size: 8.1px;
          font-weight: 800;
          letter-spacing: 0.145em;
          text-transform: uppercase;
          color: #059669;
          line-height: 1.25;
          display: block;
          margin-top: 1px;
          white-space: nowrap;
        }

        /* ---- Desktop Nav links ---- */
        .site-nav {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 1;
          min-width: 0;
        }
        .site-nav ul {
          display: flex;
          gap: 2px;
          list-style: none;
          flex-shrink: 1;
          min-width: 0;
        }
        .site-nav ul li a {
          display: block;
          padding: 8px 12px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.01em;
          color: var(--ink);
          border-radius: var(--radius-pill);
          position: relative;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .site-nav ul li a::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
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
          padding: 10px 20px;
          font-size: 13.5px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ---- Dropdown (Desktop) ---- */
        .has-dropdown {
          position: relative;
        }
        .has-dropdown > a {
          display: flex !important;
          align-items: center;
          gap: 5px;
        }
        .dropdown-arrow {
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .has-dropdown:hover .dropdown-arrow {
          transform: rotate(180deg);
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          min-width: 200px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: 12px;
          box-shadow: 0 12px 36px -6px rgba(124, 58, 237, 0.12), 0 6px 16px rgba(16, 185, 129, 0.06);
          padding: 8px 0;
          list-style: none;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
          z-index: 110;
          flex-direction: column;
        }
        .dropdown-menu::before {
          content: "";
          position: absolute;
          top: 0;
          left: 20px;
          right: 20px;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #10B981);
          border-radius: 0 0 3px 3px;
        }
        .has-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-menu li a {
          display: block;
          padding: 10px 20px !important;
          font-size: 13.5px !important;
          font-weight: 600;
          color: var(--ink);
          transition: background 0.18s, color 0.18s, padding-left 0.18s;
          border-radius: 0 !important;
          white-space: nowrap;
        }
        .dropdown-menu li a::after {
          display: none !important;
        }
        .dropdown-menu li a:hover {
          background: var(--purple-pale) !important;
          color: var(--purple) !important;
          padding-left: 24px !important;
        }
        .dropdown-menu li:first-child a {
          border-radius: 8px 8px 0 0 !important;
        }
        .dropdown-menu li:last-child a {
          border-radius: 0 0 8px 8px !important;
        }

        /* Mobile dropdown toggle (hidden on desktop) */
        .mobile-dropdown-toggle {
          display: none;
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

          /* Hide desktop dropdown, show mobile toggle */
          .dropdown-menu { display: none !important; }
          .dropdown-arrow { display: none; }
          .has-dropdown {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
          }
          .has-dropdown > a {
            flex: 1;
          }
          .mobile-dropdown-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            background: var(--purple-pale);
            border: 1px solid rgba(124, 58, 237, 0.12);
            border-radius: 10px;
            cursor: pointer;
            color: var(--purple);
            transition: background 0.2s, transform 0.2s;
            flex-shrink: 0;
          }
          .mobile-dropdown-toggle:hover {
            background: var(--purple-tint);
          }
          .mobile-dropdown-toggle.is-open svg {
            transform: rotate(180deg);
          }
          .mobile-submenu {
            width: 100%;
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .mobile-submenu li a {
            font-size: 17px !important;
            padding: 12px 12px 12px 28px !important;
            color: var(--muted) !important;
            border-bottom: none !important;
            background: var(--purple-pale);
            border-radius: 10px !important;
          }
          .mobile-submenu li a:hover {
            color: var(--purple) !important;
            background: var(--purple-tint) !important;
          }
        }
      `}</style>
    </header>
  );
}
