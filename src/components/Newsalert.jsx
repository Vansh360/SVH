import React, { useState, useEffect } from "react";
import "./NewsAlert.css";

const DEFAULT_NEWS = [
  "📢 Admissions open for Session 2026–27 — Apply before 30th April",
  "🏆 Congratulations to our students for 100% result in HSC Board Exams 2025",
  "📅 Annual Sports Day scheduled on 15th May 2026 — All students must participate",
  "📚 New Science Lab inaugurated — state-of-the-art equipment for practical learning",
  "🎉 Sarvodaya Vidyalaya ranked Top 10 schools in Nagpur District",
  "📝 Unit Test schedule for June 2026 is now available on the Notice Board",
];

function getNotices() {
  const stored = JSON.parse(localStorage.getItem("notices") || "[]");
  return stored.length > 0 ? stored : DEFAULT_NEWS;
}

export default function NewsAlert() {
  const [paused, setPaused] = useState(false);
  const [newsEnabled, setNewsEnabled] = useState(
    localStorage.getItem("newsAlertEnabled") !== "false"
  );
  const [newsItems, setNewsItems] = useState(getNotices); // ← state, not inline read

  useEffect(() => {
    const handleToggle = () => {
      setNewsEnabled(localStorage.getItem("newsAlertEnabled") !== "false");
    };

    // ← listen for notice updates from admin panel
    const handleNoticesUpdate = () => {
      setNewsItems(getNotices());
    };

    window.addEventListener("newsAlertToggled", handleToggle);
    window.addEventListener("noticesUpdated", handleNoticesUpdate); // ← new

    return () => {
      window.removeEventListener("newsAlertToggled", handleToggle);
      window.removeEventListener("noticesUpdated", handleNoticesUpdate);
    };
  }, []);

  if (!newsEnabled) return null;

  const doubled = [...newsItems, ...newsItems];
  const duration = Math.max(20, newsItems.length * 7);

  return (
    <div className="news-ticker-wrap">
      <div className="ticker-label">
        <span>🔴</span> Latest News
      </div>
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