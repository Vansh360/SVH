// import React from "react";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // ✅ HERO SLIDER DATA
  const slides = [
    {
      title: "Welcome to Sarvodaya Vidyalaya Junior Science College Hingna",
      desc: "Quality education with modern classrooms, experienced teachers, and a safe environment.",
      btnText: "Admissions Open",
      link: "/contact#admission",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Smart Learning, Bright Future",
      desc: "Interactive teaching methods, smart classes and skill-based learning for every student.",
      btnText: "Explore Academics",
      link: "/academics",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Sports & Activities",
      desc: "We focus on physical fitness, creativity and personality development through activities.",
      btnText: "View Gallery",
      link: "/gallery",
      img: "https://images.unsplash.com/photo-1519452630492-64a7a44b0f8e?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide Change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // ✅ COUNTER ANIMATION
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    awards: 0,
    classrooms: 0,
  });

  useEffect(() => {
    let s = 0,
      t = 0,
      a = 0,
      c = 0;

    const interval = setInterval(() => {
      s = Math.min(s + 25, 1200);
      t = Math.min(t + 2, 80);
      a = Math.min(a + 1, 25);
      c = Math.min(c + 1, 50);

      setCounts({
        students: s,
        teachers: t,
        awards: a,
        classrooms: c,
      });

      if (s === 1200 && t === 80 && a === 25 && c === 50) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Notices
  const notices = [
    "Admissions Open for 2026-27 ✅ Apply Now",
    "Unit Test will start from 5 Feb",
    "Annual Function on 10 Feb 🎉",
    "PTM Meeting scheduled on Saturday",
  ];

  // Events
  const events = [
    { date: "05 Feb", title: "Unit Test Begins", desc: "Prepare well and attend regularly." },
    { date: "10 Feb", title: "Annual Function", desc: "Cultural performances and awards." },
    { date: "15 Feb", title: "Science Exhibition", desc: "Innovative student projects showcase." },
    { date: "20 Feb", title: "Sports Day", desc: "Indoor & outdoor activities for all." },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Parent - Rahul Sharma",
      msg: "Teachers are supportive and the education quality is excellent.",
    },
    {
      name: "Student - Ananya",
      msg: "I love the activities and the smart learning environment.",
    },
    {
      name: "Parent - Neha Verma",
      msg: "Very disciplined school with great focus on academics and sports.",
    },
  ];

  return (
    <>
      {/* ✅ HERO SLIDER */}
      <div
        className="hero hero-slider"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slides[current].img})`,
        }}
      >
        <div>
          <h1>{slides[current].title}</h1>
          <p>{slides[current].desc}</p>

          <Link to={slides[current].link}>
            <button>{slides[current].btnText}</button>
          </Link>

          {/* Slider controls */}
          <div className="slider-controls">
            <button
              className="slider-btn"
              onClick={() =>
                setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
              }
            >
              ◀
            </button>

            <div className="dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === current ? "activeDot" : ""}`}
                  onClick={() => setCurrent(i)}
                ></span>
              ))}
            </div>

            <button
              className="slider-btn"
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* ✅ QUICK INFO BOXES */}
      <section>
        <div className="quick-grid">
          <div className="quick-card">
            <h3>📌 Admissions</h3>
            <p>Apply now for Session 2026-27</p>
            <Link to="/contact#admission" className="quick-link">
              Apply Now →
            </Link>
          </div>

          <div className="quick-card">
            <h3>⏰ Timings</h3>
            <p>Mon - Sat: 8:00 AM to 2:30 PM</p>
            <span className="quick-muted">Sunday Holiday</span>
          </div>

          <div className="quick-card">
            <h3>📞 Contact</h3>
            <p>Call us for admissions & support</p>
            <span className="quick-muted">+91 98765 43210</span>
          </div>

          <div className="quick-card">
            <h3>🏫 Facilities</h3>
            <p>Labs, Library, Smart Classes, Sports</p>
            <Link to="/about" className="quick-link">
              View More →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ NOTICE BOARD + EVENTS */}
      <section>
        <div className="two-col">
          <div className="box">
            <h2 className="box-title">📢 Notice Board</h2>
            <ul className="notice-list">
              {notices.map((n, i) => (
                <li key={i}>• {n}</li>
              ))}
            </ul>
          </div>

          <div className="box">
            <h2 className="box-title">📅 Upcoming Events</h2>
            <div className="events-list">
              {events.map((e, i) => (
                <div className="event-item" key={i}>
                  <div className="event-date">{e.date}</div>
                  <div>
                    <h4>{e.title}</h4>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ COUNTERS */}
      <section>
        <div className="title">
          <h2>Our Achievements</h2>
          <p>We are proud of our students and staff</p>
        </div>

        <div className="counter-grid">
          <div className="counter-card">
            <h3>{counts.students}+</h3>
            <p>Students</p>
          </div>

          <div className="counter-card">
            <h3>{counts.teachers}+</h3>
            <p>Teachers</p>
          </div>

          <div className="counter-card">
            <h3>{counts.awards}+</h3>
            <p>Awards</p>
          </div>

          <div className="counter-card">
            <h3>{counts.classrooms}+</h3>
            <p>Classrooms</p>
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS */}
      <section>
        <div className="title">
          <h2>Testimonials</h2>
          <p>What parents and students say about us</p>
        </div>

        <div className="card-container">
          {testimonials.map((t, i) => (
            <div className="card" key={i}>
              <h3>{t.name}</h3>
              <p>“{t.msg}”</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
