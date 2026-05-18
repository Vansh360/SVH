import React, { useState, useEffect } from "react";
import "./Principal.css";

/* ── FALLBACK defaults (shown if admin hasn't saved yet) ── */
const DEFAULTS = {
  name:          "Dr. Sunita Sharma",
  role:          "Principal",
  photo:         "/principal.jpg",
  qualification: "M.Sc., B.Ed., Ph.D.",
  experience:    "25+ Years",
  joined:        "Since 2010",
  school:        "Sarvodaya Vidyalaya",
  message:       `Welcome to Sarvodaya Vidyalaya Junior Science College, Hingna — a place where knowledge meets character, and education goes beyond textbooks. It gives me immense pride and joy to address you as the Principal of this esteemed institution.

Our school has been a beacon of learning for over two decades, nurturing thousands of students who have gone on to make their mark in every field — from science and medicine to arts and administration. We believe that every child is unique and carries within them an extraordinary potential waiting to be discovered.

At Sarvodaya Vidyalaya, we do not just teach subjects — we build values. Our dedicated faculty works tirelessly to create an environment where curiosity is encouraged, discipline is practiced, and creativity is celebrated. We combine modern teaching methods with time-tested values to prepare students not just for examinations, but for life.

To our students: Dream big, work hard, and never stop learning. Your success is our mission and your character is our pride. To our parents: Thank you for entrusting us with your most precious responsibility. Together, we will ensure your child blossoms into a confident and compassionate individual.`,
  quote:         "Education is not the filling of a pail, but the lighting of a fire. Our goal is to ignite that fire in every student.",
  stat1num:      "25+",  stat1label: "Years Experience",
  stat2num:      "5000+",stat2label: "Students Guided",
  stat3num:      "100%", stat3label: "Board Results",
  stat4num:      "30+",  stat4label: "Awards Won",
};

export default function Principal() {
  const [imgFailed, setImgFailed] = useState(false);
  const [info, setInfo] = useState(DEFAULTS);

  /* Read from localStorage — updated whenever admin saves */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("principalInfo") || "{}");
    if (Object.keys(saved).length > 0) {
      setInfo({ ...DEFAULTS, ...saved });
    }
  }, []);

  /* Split message into paragraphs by newline */
  const paragraphs = (info.message || "").split("\n").filter(p => p.trim() !== "");

  const stats = [
    { num: info.stat1num, label: info.stat1label },
    { num: info.stat2num, label: info.stat2label },
    { num: info.stat3num, label: info.stat3label },
    { num: info.stat4num, label: info.stat4label },
  ];

  return (
    <div className="principal-page">

      {/* ── HERO ── */}
      <div className="principal-hero">
        <div className="hero-label">Leadership</div>
        <h1 className="hero-title">
          Principal's <span>Message</span>
        </h1>
        <p className="hero-sub">A word from the heart of our institution</p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="principal-main">
        <div className="principal-grid">

          {/* ── LEFT: PHOTO CARD ── */}
          <div className="principal-photo-card">
            <div className="photo-frame">
              {!imgFailed ? (
                <img
                  src={info.photo || "/principal.jpg"}
                  alt={info.name}
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="photo-placeholder">
                  <div className="photo-avatar">👩‍💼</div>
                  <div className="photo-avatar-text">Photo Coming Soon</div>
                </div>
              )}
            </div>
            <div className="photo-bar" />

            <div className="principal-info">
              <div className="principal-name">{info.name}</div>
              <div className="principal-role">{info.role}</div>
              <div className="principal-divider" />
              <div className="principal-meta">
                <div className="meta-item">
                  <div className="meta-icon">🎓</div>
                  <div>
                    <strong>Qualification</strong>
                    {info.qualification}
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon">📅</div>
                  <div>
                    <strong>Experience</strong>
                    {info.experience}
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon">🏫</div>
                  <div>
                    <strong>Joined</strong>
                    {info.joined}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: MESSAGE ── */}
          <div className="principal-message-card">
            <div className="msg-label">From the Desk of the Principal</div>
            <div className="msg-title">Dear Students, Parents &amp; Well-wishers,</div>
            <span className="msg-quote-mark">"</span>

            <div className="msg-body">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {info.quote && (
                <div className="msg-highlight">{info.quote}</div>
              )}
              <p>
                I invite you to walk through our corridors of learning with pride,
                purpose, and passion. Together, let us make {info.school} a center
                of excellence that the entire community can be proud of.
              </p>
            </div>

            {/* Signature */}
            <div className="msg-signature">
              <div className="sig-avatar">{(info.name || "P").charAt(0)}</div>
              <div className="sig-text">
                <div className="sig-name">{info.name}</div>
                <div className="sig-role">{info.role} — {info.school}</div>
              </div>
            </div>
          </div>

        </div>

        {/* ── STATS STRIP ── */}
        <div className="principal-stats">
          {stats.map((s, i) => (
            <div className="p-stat" key={i}>
              <div className="p-stat-num">{s.num}</div>
              <div className="p-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
} 