import React, { useState } from "react";
import "./NewsAlert.css";

/* Default news items — shown when admin has not added any notices yet */
const DEFAULT_NEWS = [
  "📢 Admissions open for Session 2026–27 — Apply before 30th April",
  "🏆 Congratulations to our students for 100% result in HSC Board Exams 2025",
  "📅 Annual Sports Day scheduled on 15th May 2026 — All students must participate",
  "📚 New Science Lab inaugurated — state-of-the-art equipment for practical learning",
  "🎉 Sarvodaya Vidyalaya ranked Top 10 schools in Nagpur District",
  "📝 Unit Test schedule for June 2026 is now available on the Notice Board",
];

export default function NewsAlert() {
  const [paused, setPaused] = useState(false);

  /* Read notices added by Admin from localStorage — fallback to defaults */
  const stored = JSON.parse(localStorage.getItem("notices") || "[]");
  const newsItems = stored.length > 0 ? stored : DEFAULT_NEWS;

  /* Duplicate so scroll loops seamlessly */
  const doubled = [...newsItems, ...newsItems];

  /* Auto speed — more items = slightly faster */
  const duration = Math.max(20, newsItems.length * 7);

  return (
    <div className="news-ticker-wrap">

      {/* Gold label */}
      <div className="ticker-label">
        <span>🔴</span> Latest News
      </div>

      {/* Scrolling track */}
      <div className="ticker-track-wrap">
        <div
          className="ticker-track"
          style={{
            "--ticker-duration": `${duration}s`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((item, i) => (
            <React.Fragment key={i}>
              <span className="ticker-item">
                <span className="ticker-dot" />
                {item}
              </span>
              <span className="ticker-sep">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Pause / Play button */}
      <button
        className="ticker-pause-btn"
        onClick={() => setPaused((p) => !p)}
        title={paused ? "Play" : "Pause"}
      >
        {paused ? "▶" : "⏸"}
      </button>

    </div>
  );
}