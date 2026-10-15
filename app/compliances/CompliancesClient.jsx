"use client";

import { useState } from "react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────
   REAL-TIME COMPLIANCE DATA
   ────────────────────────────────────────────────────────── */

const annualReports = [
  {
    id: "ar-2025-26",
    year: "2025–2026",
    label: "FY 2025–26",
    title: "Annual Activity Report",
    status: "latest",
    size: "Official PDF",
    pdfHref: "/compliances/annual-reports/Annual%20Report%202025-26.pdf",
    fileName: "Annual Report 2025-26.pdf",
  },
  {
    id: "ar-2024-25",
    year: "2024–2025",
    label: "FY 2024–25",
    title: "Annual Activity Report",
    status: "available",
    size: "Official PDF",
    pdfHref: "/compliances/annual-reports/Annual%20Report%202024-25.pdf",
    fileName: "Annual Report 2024-25.pdf",
  },
];

const auditReports = [
  {
    id: "audit-2026",
    year: "2025–2026",
    label: "FY 2025–26 (Audit 2026)",
    title: "Independent Audit Report",
    status: "latest",
    size: "289 KB",
    pdfHref: "/compliances/audit-reports/Audit%202026.pdf",
    fileName: "Audit 2026.pdf",
  },
  {
    id: "audit-2025",
    year: "2024–2025",
    label: "FY 2024–25 (Audit 2025)",
    title: "Independent Audit Report",
    status: "verified",
    size: "265 KB",
    pdfHref: "/compliances/audit-reports/Audit%202025.pdf",
    fileName: "Audit 2025.pdf",
  },
  {
    id: "audit-2023",
    year: "2022–2023",
    label: "FY 2022–23 (Audit 2023)",
    title: "Independent Audit Report",
    status: "verified",
    size: "637 KB",
    pdfHref: "/compliances/audit-reports/Audit%202023.pdf",
    fileName: "Audit 2023.pdf",
  },
  {
    id: "audit-2022",
    year: "2021–2022",
    label: "FY 2021–22 (Audit 2022)",
    title: "Independent Audit Report",
    status: "verified",
    size: "720 KB",
    pdfHref: "/compliances/audit-reports/Audit%202022.pdf",
    fileName: "Audit 2022.pdf",
  },
  {
    id: "audit-2021",
    year: "2020–2021",
    label: "FY 2020–21 (Audit 2021)",
    title: "Independent Audit Report",
    status: "verified",
    size: "652 KB",
    pdfHref: "/compliances/audit-reports/Audit%202021.pdf",
    fileName: "Audit 2021.pdf",
  },
  {
    id: "audit-2020",
    year: "2019–2020",
    label: "FY 2019–20 (Audit 2020)",
    title: "Independent Audit Report",
    status: "verified",
    size: "670 KB",
    pdfHref: "/compliances/audit-reports/Audit%202020.pdf",
    fileName: "Audit 2020.pdf",
  },
];

/* ──────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────── */

export default function CompliancesClient() {
  const [activeTab, setActiveTab] = useState("annual");

  const currentReports = activeTab === "annual" ? annualReports : auditReports;
  const isAnnual = activeTab === "annual";

  return (
    <>
      {/* ====================== COMPACT HERO ====================== */}


      {/* ================ TABBED REPORTS SECTION ================ */}
      <section className="cpl-section">
        <div className="wrap">
          {/* Tab Switcher */}
          <div className="cpl-tabs">
            <button
              type="button"
              className={`cpl-tab ${activeTab === "annual" ? "cpl-tab--active" : ""}`}
              onClick={() => setActiveTab("annual")}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Annual Reports
              <span className="cpl-tab__count">{annualReports.length}</span>
            </button>
            <button
              type="button"
              className={`cpl-tab cpl-tab--green ${activeTab === "audit" ? "cpl-tab--active" : ""}`}
              onClick={() => setActiveTab("audit")}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              Audit Reports
              <span className="cpl-tab__count">{auditReports.length}</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="cpl-tab-content" key={activeTab}>
            <div className="cpl-grid">
              {currentReports.map((report) => (
                <article key={report.id} className="cpl-card">
                  {/* Card Header with Icon */}
                  <div className={`cpl-card__icon-area ${isAnnual ? "cpl-card__icon-area--annual" : "cpl-card__icon-area--audit"}`}>
                    {isAnnual ? (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    )}
                    {report.status === "latest" && (
                      <span className="cpl-card__badge">Latest</span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="cpl-card__body">
                    <div className="cpl-card__top-meta">
                      <span className={`cpl-card__type-chip ${isAnnual ? "cpl-card__type-chip--purple" : "cpl-card__type-chip--green"}`}>
                        {isAnnual ? "Annual Report" : "Audited PDF"}
                      </span>
                      {report.size && (
                        <span className="cpl-card__filesize">{report.size}</span>
                      )}
                    </div>
                    <h2 className="cpl-card__year">{report.year}</h2>
                    <p className="cpl-card__label">{report.label}</p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="cpl-card__footer">
                    <a
                      href={report.pdfHref}
                      download={report.fileName || true}
                      className={`cpl-card__download-btn ${isAnnual ? "" : "cpl-card__download-btn--green"}`}
                    >
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download
                    </a>
                    <a
                      href={report.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cpl-card__view-link ${isAnnual ? "" : "cpl-card__view-link--green"}`}
                    >
                      View PDF →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================ TRUST & TRANSPARENCY NOTE ================ */}
      <section className="cpl-trust-section">
        <div className="wrap">
          <div className="cpl-trust-box">
            <div className="cpl-trust-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="cpl-trust-text">
              <h3>Committed to 100% Financial Transparency</h3>
              <p>
                All financial statements of Navchaitanya Bahuuddeshiya Vikas Yuva Mandal are independently audited and certified by Chartered Accountants. For additional compliance records, please reach out to <Link href="/contact">our governance office</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STYLES ====================== */}
      <style>{`
        /* ---- COMPACT HERO ---- */
        .cpl-hero {
          padding: 42px 0 24px;
          text-align: center;
          background: linear-gradient(180deg, #F8F6FF 0%, #FFFFFF 100%);
          border-bottom: 1px solid rgba(124, 58, 237, 0.06);
        }
        .cpl-hero__inner {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .cpl-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-bottom: 12px;
          font-size: 0.82rem;
          font-weight: 600;
        }
        .cpl-back {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #7C3AED;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .cpl-back:hover {
          opacity: 0.8;
        }
        .cpl-breadcrumb__divider {
          color: #CBD5E1;
        }
        .cpl-breadcrumb__curr {
          color: #64748B;
        }
        .cpl-hero__title {
          font-size: clamp(1.75rem, 3.5vw, 2.35rem);
          font-weight: 800;
          color: #1E1B4B;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .cpl-hero__sub {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #64748B;
          margin: 0 auto;
          max-width: 560px;
        }

        /* ---- TABS SECTION ---- */
        .cpl-section {
          padding: 32px 0 54px;
          background: #FFFFFF;
        }
        .cpl-tabs {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 28px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 4px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }
        .cpl-tab {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #64748B;
          background: transparent;
          border: none;
          border-radius: 9px;
          padding: 9px 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cpl-tab:hover {
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.05);
        }
        .cpl-tab--green:hover {
          color: #059669;
          background: rgba(16, 185, 129, 0.05);
        }
        .cpl-tab--active {
          color: #FFFFFF !important;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%) !important;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.28);
        }
        .cpl-tab--green.cpl-tab--active {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.28);
        }
        .cpl-tab__count {
          font-size: 11px;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 100px;
          min-width: 18px;
          text-align: center;
        }
        .cpl-tab--active .cpl-tab__count {
          background: rgba(255, 255, 255, 0.28);
          color: #FFFFFF;
        }
        .cpl-tab:not(.cpl-tab--active) .cpl-tab__count {
          background: #E2E8F0;
          color: #475569;
        }

        /* ---- TAB CONTENT FADE ---- */
        .cpl-tab-content {
          animation: cplFade 0.25s ease-out;
        }
        @keyframes cplFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ---- COMPACT CARDS GRID ---- */
        .cpl-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
        }
        @media (max-width: 580px) {
          .cpl-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
          }
        }

        /* ---- COMPACT CARD ---- */
        .cpl-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }
        .cpl-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.08);
          border-color: #CBD5E1;
        }

        /* Icon Area */
        .cpl-card__icon-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 14px 12px;
        }
        .cpl-card__icon-area--annual {
          background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%);
          color: #7C3AED;
        }
        .cpl-card__icon-area--audit {
          background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
          color: #059669;
        }
        .cpl-card__badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #7C3AED;
          color: #FFF;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Body */
        .cpl-card__body {
          padding: 12px 14px 8px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .cpl-card__top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 6px;
          margin-bottom: 6px;
        }
        .cpl-card__type-chip {
          font-size: 9.5px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .cpl-card__type-chip--purple {
          background: #F3E8FF;
          color: #6D28D9;
        }
        .cpl-card__type-chip--green {
          background: #DCFCE7;
          color: #047857;
        }
        .cpl-card__filesize {
          font-size: 10px;
          font-weight: 600;
          color: #94A3B8;
        }
        .cpl-card__year {
          font-size: 1.12rem;
          font-weight: 800;
          color: #1E293B;
          margin: 0 0 2px;
          line-height: 1.25;
        }
        .cpl-card__label {
          font-size: 0.76rem;
          font-weight: 600;
          color: #64748B;
          margin: 0;
        }

        /* Footer */
        .cpl-card__footer {
          padding: 9px 14px 12px;
          border-top: 1px solid #F1F5F9;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cpl-card__download-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 11px;
          border-radius: 7px;
          text-decoration: none;
          transition: transform 0.15s, opacity 0.15s;
        }
        .cpl-card__download-btn:hover {
          transform: translateY(-1px);
          opacity: 0.94;
        }
        .cpl-card__download-btn--green {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        }
        .cpl-card__view-link {
          font-size: 11px;
          font-weight: 700;
          color: #7C3AED;
          text-decoration: none;
          margin-left: auto;
          transition: color 0.15s;
        }
        .cpl-card__view-link:hover {
          text-decoration: underline;
        }
        .cpl-card__view-link--green {
          color: #059669;
        }

        /* ---- TRUST BOX ---- */
        .cpl-trust-section {
          padding: 10px 0 50px;
          background: #FFFFFF;
        }
        .cpl-trust-box {
          display: flex;
          align-items: center;
          gap: 20px;
          background: linear-gradient(135deg, #1E1B4B 0%, #172554 100%);
          border-radius: 16px;
          padding: 24px 28px;
          color: #FFFFFF;
          box-shadow: 0 10px 25px rgba(30, 27, 75, 0.15);
        }
        @media (max-width: 640px) {
          .cpl-trust-box {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
        }
        .cpl-trust-icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #34D399;
        }
        .cpl-trust-text h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 4px;
        }
        .cpl-trust-text p {
          font-size: 0.88rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        .cpl-trust-text a {
          color: #34D399;
          font-weight: 700;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
