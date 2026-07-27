import Link from "next/link";
import { org } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">Navchaitanya <span>Yuva Mandal</span></p>
          <p className="footer-tag mr">जल है तो कल है — पाणपोई, वृक्षारोपण व ग्रामविकास</p>
          <p className="footer-addr">{org.address}</p>
        </div>

        <div>
          <p className="footer-heading">Quick links</p>
          <ul>
            <li><Link href="/work">Our Work</Link></li>
            <li><Link href="/involved#donate">Donate</Link></li>
            <li><Link href="/involved#volunteer">Volunteer</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-heading">Reach us</p>
          <ul>
            <li>{org.phone}</li>
            <li>{org.email}</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} {org.name}. Registered NGO, est. {org.established}.</p>
        <p className="footer-legal"><Link href="/">Privacy Policy</Link> · <Link href="/">Terms</Link></p>
      </div>

      <style>{`
        .site-footer {
          background: var(--forest-deep);
          color: var(--sand);
          padding: 64px 0 0;
        }
        .footer-grid {
          display: grid;
          gap: 40px;
          grid-template-columns: 1.4fr 1fr 1fr;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(251,247,239,0.14);
        }
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
        .footer-brand {
          font-family: var(--font-display);
          font-size: 24px;
          color: var(--cream);
          margin-bottom: 10px;
        }
        .footer-brand span { color: var(--clay-light); }
        .footer-tag { color: var(--clay-light); margin-bottom: 12px; font-size: 15px; }
        .footer-addr { color: rgba(251,247,239,0.72); font-size: 14px; max-width: 320px; }
        .footer-heading {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--clay-light);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .footer-grid ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-grid a { color: rgba(251,247,239,0.85); font-size: 15px; }
        .footer-grid a:hover { color: var(--clay-light); }
        .footer-grid li { color: rgba(251,247,239,0.85); font-size: 15px; }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 22px 0 28px;
          font-size: 13px;
          color: rgba(251,247,239,0.6);
          flex-wrap: wrap;
        }
        .footer-legal a:hover { color: var(--clay-light); }
      `}</style>
    </footer>
  );
}
