import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [dark, setDark]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [noticeHidden, setNoticeHidden] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const location  = useLocation();
  const prevY     = useRef(0);

  useEffect(() => {
    setOpen(false);
    setAcademicsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setNoticeHidden(y > 60 && y > prevY.current);
      prevY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleDarkMode() {
    const newMode = !dark;
    setDark(newMode);
    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }

  const isActive       = (path) => location.pathname === path;
  const isActivePrefix = (path) => location.pathname.startsWith(path);

  const academicsLinks = [
    { label: "Science Stream",  path: "/academics/science" },
    { label: "Commerce Stream", path: "/academics/commerce" },
    { label: "Examination",     path: "/academics/examination" },
    { label: "Timetable",       path: "/academics/timetable" },
    { label: "Results",         path: "/academics/results" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy:       #0a1628;
          --navy-mid:   #142240;
          --navy-dark:  #070f1c;
          --gold:       #c9922a;
          --gold-light: #e8b84b;
          --gold-dim:   rgba(201,146,42,0.13);
          --white:      #ffffff;
          --muted:      rgba(255,255,255,0.45);
          --border-dim: rgba(255,255,255,0.07);
        }

        .notice-bar {
          background: linear-gradient(90deg, var(--gold) 0%, #a87520 50%, var(--gold) 100%);
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
          color: var(--white);
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          overflow: hidden;
          transition: height 0.35s ease, opacity 0.35s ease, padding 0.35s ease;
          will-change: height;
        }
        .notice-bar.hidden {
          height: 0;
          opacity: 0;
          padding: 0;
          pointer-events: none;
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'DM Sans', sans-serif;
        }

        .nav {
          background: var(--navy);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4vw;
          height: 68px;
          gap: 10px;
          transition: background 0.3s, box-shadow 0.3s;
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(90deg, transparent, var(--gold), transparent) 1;
        }
        .nav.scrolled {
          background: rgba(10,22,40,0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.45);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo a {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img-box {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--gold), #7a4e10);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 14px rgba(201,146,42,0.28);
          flex-shrink: 0;
        }
        .logo-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .logo-initials {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--white);
        }
        .logo div h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.25;
          white-space: nowrap;
          margin: 0;
        }
        .logo div p {
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin: 2px 0 0 0;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 2px;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .nav-links li { position: relative; }

        .nav-links li a,
        .nav-links li .dropdown-title {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--muted);
          text-decoration: none;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .nav-links li a:hover,
        .nav-links li .dropdown-title:hover {
          color: var(--white);
          background: rgba(255,255,255,0.06);
        }
        .nav-links li a.activeLink {
          color: var(--gold-light);
          background: var(--gold-dim);
        }
        .nav-links li a.activeLink::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 10px; right: 10px;
          height: 1.5px;
          border-radius: 2px;
          background: var(--gold);
        }

        .dropdown { position: relative; }
        .dropdown-title {
          display: inline-flex !important;
          align-items: center;
          gap: 4px;
          padding: 7px 10px !important;
          border-radius: 7px !important;
          font-size: 0.82rem !important;
          font-weight: 500 !important;
          color: var(--muted) !important;
          text-decoration: none !important;
          background: none;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .dropdown-title:hover {
          color: var(--white) !important;
          background: rgba(255,255,255,0.06) !important;
        }
        .dropdown-title.activeLink {
          color: var(--gold-light) !important;
          background: var(--gold-dim) !important;
        }
        .dropdown-title.activeLink::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 10px; right: 10px;
          height: 1.5px;
          border-radius: 2px;
          background: var(--gold);
        }
        .dropdown-chevron {
          font-size: 0.48rem;
          opacity: 0.5;
          transition: transform 0.25s, opacity 0.2s;
        }
        .dropdown:hover .dropdown-chevron { transform: rotate(180deg); opacity: 1; }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          min-width: 200px;
          background: var(--navy-mid);
          border: 1px solid rgba(201,146,42,0.2);
          border-radius: 12px;
          padding: 8px;
          list-style: none;
          margin: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 20px 50px rgba(0,0,0,0.55);
          z-index: 400;
        }
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -6px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: var(--navy-mid);
          border-left: 1px solid rgba(201,146,42,0.2);
          border-top: 1px solid rgba(201,146,42,0.2);
        }
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-menu li a {
          display: flex !important;
          align-items: center;
          gap: 10px;
          padding: 9px 13px !important;
          border-radius: 7px !important;
          font-size: 0.82rem !important;
          color: rgba(255,255,255,0.58) !important;
        }
        .dropdown-menu li a::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.18s;
        }
        .dropdown-menu li a:hover::before,
        .dropdown-menu li a.activeLink::before { opacity: 1; }
        .dropdown-menu li a.activeLink {
          color: var(--gold-light) !important;
          background: var(--gold-dim) !important;
        }
        .dd-sep {
          height: 1px;
          background: var(--border-dim);
          margin: 5px 8px;
        }

        .right-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .darkBtn {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.7);
          padding: 7px 12px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .darkBtn:hover {
          background: rgba(255,255,255,0.12);
          border-color: var(--gold);
          color: var(--white);
        }

        .menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          background: none;
          cursor: pointer;
          font-size: 1.2rem;
          color: var(--white);
          transition: border-color 0.2s, background 0.2s;
          padding: 0;
        }
        .menu-btn:hover { border-color: var(--gold); background: var(--gold-dim); }

        .top-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .top-bar span {
          font-size: 0.78rem;
          color: var(--muted);
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .top-bar span:hover { color: var(--gold-light); }

        .top-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .enquire-btn {
          background: var(--gold);
          color: var(--white);
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(201,146,42,0.28);
          transition: background 0.25s, transform 0.2s;
        }
        .enquire-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

        .disclosure-btn {
          background: transparent;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 8px 14px;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .disclosure-btn:hover {
          border-color: var(--gold);
          color: var(--gold-light);
        }

        .mobile-panel {
          background: var(--navy-mid);
          border-top: 1px solid var(--border-dim);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.42s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-panel.active { max-height: 900px; }

        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 6vw;
          font-size: 0.9rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          color: rgba(255,255,255,0.68);
          text-decoration: none;
          border-bottom: 1px solid var(--border-dim);
          cursor: pointer;
          user-select: none;
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }
        .mob-link:hover, .mob-link.activeLink {
          color: var(--gold-light);
          background: var(--gold-dim);
          padding-left: calc(6vw + 5px);
        }
        .mob-link-split { display: flex; align-items: center; padding-right: 4vw; }
        .mob-link-split a { flex: 1; }
        .mob-chevron { font-size: 0.48rem; opacity: 0.5; transition: transform 0.25s; }
        .mob-chevron.open { transform: rotate(180deg); opacity: 1; }

        .mob-sub {
          max-height: 0;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          transition: max-height 0.3s ease;
        }
        .mob-sub.open { max-height: 320px; }

        .mob-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 6vw 10px calc(6vw + 16px);
          font-size: 0.82rem;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.48);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          transition: color 0.2s, background 0.2s;
        }
        .mob-sub-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          opacity: 0.4;
          transition: opacity 0.2s;
        }
        .mob-sub-link:hover, .mob-sub-link.activeLink {
          color: var(--gold-light);
          background: var(--gold-dim);
        }
        .mob-sub-link:hover::before,
        .mob-sub-link.activeLink::before { opacity: 1; }

        .mob-cta-wrap { padding: 14px 6vw 20px; }
        .mob-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--gold);
          color: var(--white);
          padding: 13px;
          border-radius: 9px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(201,146,42,0.25);
          transition: background 0.25s;
        }
        .mob-cta:hover { background: var(--gold-light); }

        body.dark .nav          { background: #050d1a; }
        body.dark .nav.scrolled { background: rgba(5,13,26,0.97); }
        body.dark .notice-bar   { background: linear-gradient(90deg, #a07018, #7a5210, #a07018); }
        body.dark .mobile-panel { background: #0b1a30; }

        @media (max-width: 1180px) {
          .top-bar span { display: none; }
        }
        @media (max-width: 1060px) {
          .top-bar { display: none; }
          .nav-links { display: none !important; }
          .menu-btn { display: flex; }
        }
        @media (max-width: 600px) {
          .notice-bar { font-size: 0.7rem; }
          .darkBtn span { display: none; }
          .logo div p { display: none; }
          .nav { height: 60px; padding: 0 4vw; }
        }
      `}</style>

      <header className="header">

        {/* ── NOTICE BAR ── */}
        <div className={`notice-bar ${noticeHidden ? "hidden" : ""}`}>
          📢 Admissions Open! Apply Now &nbsp;|&nbsp; New Session 2026–27
        </div>

        {/* ── MAIN NAV ── */}
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>

          {/* Logo */}
          <div className="logo">
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              <LogoImage />
              <div>
                <h3>SVV School</h3>
                <p>Nagpur, Maharashtra</p>
              </div>
            </Link>
          </div>

          {/* ── DESKTOP NAV LINKS ── */}
          <ul className="nav-links" style={{ display: "flex" }}>

            <li>
              <Link className={isActive("/") ? "activeLink" : ""} to="/">Home</Link>
            </li>

            <li>
              <Link className={isActive("/about") ? "activeLink" : ""} to="/about">About</Link>
            </li>

            {/* Academics — clickable Link + hover dropdown */}
            <li className="dropdown">
              <Link
                to="/academics"
                className={`dropdown-title ${isActivePrefix("/academics") ? "activeLink" : ""}`}
              >
                Academics <span className="dropdown-chevron">▼</span>
              </Link>
              <ul className="dropdown-menu">
                {academicsLinks.map((d, i) => (
                  <React.Fragment key={d.path}>
                    {i === 2 && <li><div className="dd-sep" /></li>}
                    <li>
                      <Link
                        to={d.path}
                        className={location.pathname === d.path ? "activeLink" : ""}
                      >
                        {d.label}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </li>

            <li>
              <Link className={isActive("/teachers") ? "activeLink" : ""} to="/teachers">Teachers</Link>
            </li>

            {/* ✅ PRINCIPAL LINK — DESKTOP */}
            <li>
              <Link className={isActive("/principal") ? "activeLink" : ""} to="/principal">Principal</Link>
            </li>

            <li>
              <Link className={isActive("/management") ? "activeLink" : ""} to="/management">Management</Link>
            </li>

            <li>
              <Link className={isActive("/gallery") ? "activeLink" : ""} to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link className={isActive("/success") ? "activeLink" : ""} to="/success">Success</Link>
            </li>

            <li>
              <Link className={isActive("/contact") ? "activeLink" : ""} to="/contact">Contact</Link>
            </li>

          </ul>

          {/* Right Controls */}
          <div className="right-controls">
            <button className="darkBtn" onClick={toggleDarkMode}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
            <button className="menu-btn" onClick={() => setOpen(!open)}>
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* Top Bar — Brochure + CTA Buttons */}
          <div className="top-bar">
            <span>📥 Download Brochure</span>
            <div className="top-buttons">
              <Link to="/contact#admission">
                <button className="enquire-btn">Enquire Now</button>
              </Link>
              <Link to="/disclosure">
                <button className="disclosure-btn">Public Disclosure</button>
              </Link>
            </div>
          </div>

        </nav>

        {/* ── MOBILE MENU ── */}
        <div className={`mobile-panel ${open ? "active" : ""}`}>

          <Link to="/" className={`mob-link ${isActive("/") ? "activeLink" : ""}`}>Home</Link>
          <Link to="/about" className={`mob-link ${isActive("/about") ? "activeLink" : ""}`}>About</Link>

          {/* Academics — link + separate chevron toggle */}
          <div className={`mob-link mob-link-split ${isActivePrefix("/academics") ? "activeLink" : ""}`}>
            <Link
              to="/academics"
              style={{ flex: 1, color: "inherit", textDecoration: "none" }}
            >
              Academics
            </Link>
            <span
              className={`mob-chevron ${academicsOpen ? "open" : ""}`}
              onClick={(e) => { e.stopPropagation(); setAcademicsOpen((o) => !o); }}
              style={{ padding: "4px 8px", cursor: "pointer" }}
            >▼</span>
          </div>
          <div className={`mob-sub ${academicsOpen ? "open" : ""}`}>
            {academicsLinks.map((d) => (
              <Link
                key={d.path}
                to={d.path}
                className={`mob-sub-link ${location.pathname === d.path ? "activeLink" : ""}`}
              >
                {d.label}
              </Link>
            ))}
          </div>

          <Link to="/teachers"   className={`mob-link ${isActive("/teachers")   ? "activeLink" : ""}`}>Teachers</Link>

          {/* ✅ PRINCIPAL LINK — MOBILE */}
          <Link to="/principal"  className={`mob-link ${isActive("/principal")  ? "activeLink" : ""}`}>Principal</Link>

          <Link to="/management" className={`mob-link ${isActive("/management") ? "activeLink" : ""}`}>Management</Link>
          <Link to="/gallery"    className={`mob-link ${isActive("/gallery")    ? "activeLink" : ""}`}>Gallery</Link>
          <Link to="/success"    className={`mob-link ${isActive("/success")    ? "activeLink" : ""}`}>Success</Link>
          <Link to="/contact"    className={`mob-link ${isActive("/contact")    ? "activeLink" : ""}`}>Contact</Link>

          <div className="mob-cta-wrap">
            <Link to="/contact#admission" className="mob-cta">📋 Apply for Admission</Link>
          </div>

        </div>

      </header>
    </>
  );
}

/* ── Logo image with fallback initials ── */
function LogoImage() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="logo-img-box">
      {failed ? (
        <div className="logo-initials">SVK</div>
      ) : (
        <img src="/logo.png" alt="School Logo" onError={() => setFailed(true)} />
      )}
    </div>
  );
}