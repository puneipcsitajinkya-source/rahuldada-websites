import Link from "next/link";
import { org } from "@/lib/siteData";

const QUICK_LINKS = [
  { href: "/about",          label: "About Us" },
  { href: "/work",           label: "Our Work" },
  { href: "/gallery",        label: "Gallery" },
  { href: "/involved#donate",label: "Donate" },
  { href: "/involved#volunteer", label: "Volunteer" },
  { href: "/contact",        label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* ---- Decorative top band ---- */}
      <div className="footer-topband">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z" fill="var(--off-white)" />
        </svg>
      </div>

      <div className="wrap footer-grid">
        {/* ---- Brand col ---- */}
        <div className="footer-col footer-col--brand">
          <p className="footer-brand">
            Navchaitanya <span>Yuva Mandal</span>
          </p>
          <p className="footer-tagline mr">
            जल है तो कल है — पाणपोई, वृक्षारोपण व ग्रामविकास
          </p>
          <p className="footer-addr">{org.address}</p>

          {/* Social icons */}
          <div className="footer-social">
            <a href={org.social.facebook} aria-label="Facebook" className="footer-social__link">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href={org.social.instagram} aria-label="Instagram" className="footer-social__link">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href={org.social.youtube} aria-label="YouTube" className="footer-social__link">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--emerald-deep)"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ---- Quick links ---- */}
        <div className="footer-col">
          <p className="footer-heading">Quick Links</p>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Contact col ---- */}
        <div className="footer-col">
          <p className="footer-heading">Contact Us</p>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 15.1 16.1l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {org.phone}
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {org.email}
            </li>
          </ul>

          <p className="footer-heading" style={{ marginTop: 32 }}>Registration</p>
          <ul>
            <li>Registered NGO, est. {org.established}</li>
            <li>Active on ground since {org.workingSince}</li>
            <li>Ghatanji Taluka, Yavatmal</li>
          </ul>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="footer-bottom-wrap">
        <div className="wrap footer-bottom">
          <p>© {new Date().getFullYear()} {org.name}. All rights reserved.</p>
          <p className="footer-legal">
            <Link href="/">Privacy Policy</Link>
            {" · "}
            <Link href="/">Terms</Link>
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: linear-gradient(160deg, var(--emerald-deep) 0%, #061c11 100%);
          color: rgba(255,255,255,0.78);
          position: relative;
          overflow: hidden;
        }
        /* subtle pattern overlay */
        .site-footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(201,146,42,0.06) 0%, transparent 60%),
                            radial-gradient(circle at 10% 80%, rgba(42,144,96,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-topband {
          line-height: 0;
          margin-bottom: -2px;
        }
        .footer-topband svg { width: 100%; height: 60px; display: block; }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.2fr;
          gap: 56px;
          padding: 56px 0 52px;
          border-bottom: 1px solid var(--on-dark-line);
          position: relative;
        }
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-col--brand { grid-column: 1 / -1; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        .footer-brand {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .footer-brand span { color: var(--gold-light); }

        .footer-tagline {
          color: var(--gold-light);
          font-size: 14px;
          margin-bottom: 14px;
          opacity: 0.9;
        }
        .footer-addr {
          color: rgba(255,255,255,0.55);
          font-size: 13.5px;
          line-height: 1.65;
          max-width: 300px;
        }

        .footer-social {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .footer-social__link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .footer-social__link:hover {
          background: var(--gold);
          color: var(--white);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px var(--gold-glow);
          border-color: transparent;
        }

        .footer-heading {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--gold-light);
          font-weight: 800;
          margin-bottom: 18px;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col ul li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,0.68);
          font-size: 14px;
        }
        .footer-col ul li svg { color: var(--gold-light); flex-shrink: 0; }
        .footer-col a {
          color: rgba(255,255,255,0.72);
          font-size: 14px;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-col a:hover { color: var(--gold-light); padding-left: 4px; }

        .footer-bottom-wrap {
          position: relative;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 22px 0 32px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.4);
          flex-wrap: wrap;
        }
        .footer-legal { display: flex; gap: 16px; }
        .footer-legal a { color: rgba(255,255,255,0.4); transition: color 0.2s; }
        .footer-legal a:hover { color: var(--gold-light); }
      `}</style>
    </footer>
  );
}
