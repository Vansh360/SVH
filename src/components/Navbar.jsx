import React from "react";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Load dark mode
  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
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

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="notice-bar">
        📢 Admissions Open! Apply Now | New Session 2026-27
      </div>

      <nav className="nav">
        <div className="logo">Sarvodaya Vidyalaya Junior Science College Hingna</div>

        <div className="right-controls">
          <button className="darkBtn" onClick={toggleDarkMode}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link className={isActive("/") ? "activeLink" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={isActive("/about") ? "activeLink" : ""} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className={isActive("/academics") ? "activeLink" : ""}
              to="/academics"
            >
              Academics
            </Link>
          </li>
          <li>
            <Link
              className={isActive("/gallery") ? "activeLink" : ""}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={isActive("/contact") ? "activeLink" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
