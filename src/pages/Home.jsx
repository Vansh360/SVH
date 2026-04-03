// // import React from "react";

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// export default function Home() {
//   const notices = JSON.parse(localStorage.getItem("notices")) || [];
//    const events = JSON.parse(localStorage.getItem("events")) || [];
// //    <div className="events-list">
// //   {events.length === 0 ? (
// //     <p>No upcoming events.</p>
// //   ) : (
// //     events.map((e, i) => (
// //       <div key={i} className="event-item">
// //         📅 {e}
// //       </div>
// //     ))
// //   )} 
// // </div>

//   // ✅ HERO SLIDER DATA
//   const slides = [
//     {
//       title: "Welcome to Sarvodaya Vidyalaya Junior Science College Hingna",
//       desc: "Quality education with modern classrooms, experienced teachers, and a safe environment.",
//       btnText: "Admissions Open",
//       link: "/contact#admission",
//       img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
//     },
//     {
//       title: "Smart Learning, Bright Future",
//       desc: "Interactive teaching methods, smart classes and skill-based learning for every student.",
//       btnText: "Explore Academics",
//       link: "/academics",
//       img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
//     },
//     {
//       title: "Sports & Activities",
//       desc: "We focus on physical fitness, creativity and personality development through activities.",
//       btnText: "View Gallery",
//       link: "/gallery",
//       img: "https://images.unsplash.com/photo-1519452630492-64a7a44b0f8e?auto=format&fit=crop&w=1600&q=80",
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   // Auto Slide Change
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   // ✅ COUNTER ANIMATION
//   const [counts, setCounts] = useState({
//     students: 0,
//     teachers: 0,
//     awards: 0,
//     classrooms: 0,
//   });

//   useEffect(() => {
//     let s = 0,
//       t = 0,
//       a = 0,
//       c = 0;

//     const interval = setInterval(() => {
//       s = Math.min(s + 25, 1200);
//       t = Math.min(t + 2, 80);
//       a = Math.min(a + 1, 25);
//       c = Math.min(c + 1, 50);

//       setCounts({
//         students: s,
//         teachers: t,
//         awards: a,
//         classrooms: c,
//       });

//       if (s === 1200 && t === 80 && a === 25 && c === 50) {
//         clearInterval(interval);
//       }
//     }, 40);

//     return () => clearInterval(interval);
//   }, []);

// //   Notices
// //   {savedNotices.map((n, i) => (
// //   <li key={i}>• {n}</li>
// // ))}


//   // Events
//   // const events = [
//   //   { date: "05 Feb", title: "Unit Test Begins", desc: "Prepare well and attend regularly." },
//   //   { date: "10 Feb", title: "Annual Function", desc: "Cultural performances and awards." },
//   //   { date: "15 Feb", title: "Science Exhibition", desc: "Innovative student projects showcase." },
//   //   { date: "20 Feb", title: "Sports Day", desc: "Indoor & outdoor activities for all." },
//   // ];

//   // Testimonials
//   const testimonials = [
//     {
//       name: "Parent - Rahul Sharma",
//       msg: "Teachers are supportive and the education quality is excellent.",
//     },
//     {
//       name: "Student - Ananya",
//       msg: "I love the activities and the smart learning environment.",
//     },
//     {
//       name: "Parent - Neha Verma",
//       msg: "Very disciplined school with great focus on academics and sports.",
//     },
//   ];

//   return (
//     <>
//       {/* ✅ HERO SLIDER */}
//       {/* <div
//         className="hero hero-slider" */}
//   //       <div
//   key={current}
//   className="hero hero-slider fade-slide"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slides[current].img})`,
//         }}
//       >
//         <div>
//           <h1>{slides[current].title}</h1>
//           <p>{slides[current].desc}</p>

//           <Link to={slides[current].link}>
//             <button>{slides[current].btnText}</button>
//           </Link>

//           {/* Slider controls */}
//           <div className="slider-controls">
//             <button
//               className="slider-btn"
//               onClick={() =>
//                 setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//               }
//             > 
//               ◀
//             </button>

//             <div className="dots">
//               {slides.map((_, i) => (
//                 <span
//                   key={i}
//                   className={`dot ${i === current ? "activeDot" : ""}`}
//                   onClick={() => setCurrent(i)}
//                 ></span>
//               ))}
//             </div>

//             <button
//               className="slider-btn"
//               onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
//             >
//               ▶
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ QUICK INFO BOXES */}
//       <section>
//         <div className="quick-grid">
//           <div className="quick-card">
//             <h3>📌 Admissions</h3>
//             <p>Apply now for Session 2026-27</p>
//             <Link to="/contact#admission" className="quick-link">
//               Apply Now →
//             </Link>
//           </div>

//           <div className="quick-card">
//             <h3>⏰ Timings</h3>
//             <p>Mon - Sat: 8:00 AM to 2:30 PM</p>
//             <span className="quick-muted">Sunday Holiday</span>
//           </div>

//           <div className="quick-card">
//             <h3>📞 Contact</h3>
//             <p>Call us for admissions & support</p>
//             <span className="quick-muted">+91 98765 43210</span>
//           </div>

//           <div className="quick-card">
//             <h3>🏫 Facilities</h3>
//             <p>Labs, Library, Smart Classes, Sports</p>
//             <Link to="/about" className="quick-link">
//               View More →
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* ✅ NOTICE BOARD + EVENTS */}
//       <section>
//         <div className="two-col">
//           <div className="box">
//             <h2 className="box-title">📢 Notice Board</h2>
//             <ul className="notice-list">
//               {notices.map((n, i) => (
//                 <li key={i}>• {n}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="box">
//             <h2 className="box-title">📅 Upcoming Events</h2>
//             <div className="events-list">
//   {events.length === 0 ? (
//     <p>No upcoming events.</p>
//   ) : (
//     events.map((e, i) => (
//       <div key={i} className="event-item">
//         📅 {e}
//       </div>
//     ))
//   )} 
// </div>

//           </div>
//         </div>
//       </section>

//       {/* ✅ COUNTERS */}
//       <section>
//         <div className="title">
//           <h2>Our Achievements</h2>
//           <p>We are proud of our students and staff</p>
//         </div>

//         <div className="counter-grid">
//           <div className="counter-card">
//             <h3>{counts.students}+</h3>
//             <p>Students</p>
//           </div>

//           <div className="counter-card">
//             <h3>{counts.teachers}+</h3>
//             <p>Teachers</p>
//           </div>

//           <div className="counter-card">
//             <h3>{counts.awards}+</h3>
//             <p>Awards</p>
//           </div>

//           <div className="counter-card">
//             <h3>{counts.classrooms}+</h3>
//             <p>Classrooms</p>
//           </div>
//         </div>
//       </section>

//       {/* ✅ TESTIMONIALS */}
//       <section>
//         <div className="title">
//           <h2>Testimonials</h2>
//           <p>What parents and students say about us</p>
//         </div>

//         <div className="card-container">
//           {testimonials.map((t, i) => (
//             <div className="card" key={i}>
//               <h3>{t.name}</h3>
//               <p>“{t.msg}”</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }


import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy: #0a1628;
    --navy-mid: #142240;
    --gold: #c9922a;
    --gold-light: #e8b84b;
    --cream: #faf7f2;
    --white: #ffffff;
    --text-muted: #6b7a99;
    --border: rgba(201,146,42,0.2);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--navy);
  }

  /* ── HERO ── */
  .hero-wrap {
    position: relative;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    background: var(--navy);
  }

  .hero-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 1s ease;
    background-size: cover;
    background-position: center;
  }
  .hero-slide.active { opacity: 1; }
  .hero-slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(10,22,40,0.88) 0%,
      rgba(10,22,40,0.55) 60%,
      rgba(10,22,40,0.3) 100%
    );
  }

  .hero-content {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8vw;
    max-width: 900px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(201,146,42,0.15);
    border: 1px solid var(--gold);
    color: var(--gold-light);
    padding: 6px 16px;
    border-radius: 40px;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 24px;
    width: fit-content;
    animation: fadeUp 0.8s ease both;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 4rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.15;
    margin-bottom: 20px;
    animation: fadeUp 0.9s 0.1s ease both;
  }

  .hero-title span { color: var(--gold-light); }

  .hero-desc {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: rgba(255,255,255,0.75);
    max-width: 560px;
    line-height: 1.75;
    margin-bottom: 36px;
    font-weight: 300;
    animation: fadeUp 1s 0.2s ease both;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    animation: fadeUp 1s 0.3s ease both;
  }

  .btn-primary {
    background: var(--gold);
    color: var(--white);
    padding: 14px 32px;
    border-radius: 6px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }

  .btn-outline {
    background: transparent;
    color: var(--white);
    padding: 14px 32px;
    border-radius: 6px;
    border: 1.5px solid rgba(255,255,255,0.4);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold-light); }

  /* Slider nav */
  .slide-nav {
    position: absolute;
    bottom: 40px;
    left: 8vw;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .slide-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: all 0.3s;
    border: none;
  }
  .slide-dot.active {
    background: var(--gold);
    width: 28px;
    border-radius: 4px;
  }

  .slide-arrows {
    position: absolute;
    right: 6vw;
    bottom: 32px;
    z-index: 20;
    display: flex;
    gap: 10px;
  }
  .arrow-btn {
    width: 44px; height: 44px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.08);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    backdrop-filter: blur(4px);
  }
  .arrow-btn:hover { background: var(--gold); border-color: var(--gold); }

  /* ── QUICK INFO BAR ── */
  .info-bar {
    background: var(--navy);
    padding: 0 5vw;
  }
  .info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .info-item {
    padding: 30px 24px;
    border-right: 1px solid rgba(255,255,255,0.06);
    transition: background 0.3s;
  }
  .info-item:last-child { border-right: none; }
  .info-item:hover { background: rgba(201,146,42,0.06); }
  .info-icon { font-size: 1.4rem; margin-bottom: 10px; }
  .info-label {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: var(--white);
    margin-bottom: 4px;
  }
  .info-sub {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.5;
  }
  .info-link {
    display: inline-block;
    margin-top: 8px;
    font-size: 0.8rem;
    color: var(--gold);
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  .info-link:hover { color: var(--gold-light); }

  /* ── SECTION WRAPPER ── */
  .section { padding: 90px 6vw; }
  .section-alt { background: var(--white); }

  .section-label {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    color: var(--navy);
    line-height: 1.2;
    margin-bottom: 14px;
  }
  .section-sub {
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 520px;
    line-height: 1.7;
  }

  /* ── NOTICE + EVENTS ── */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 50px;
  }

  .board-card {
    background: var(--white);
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.07);
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  }

  .board-header {
    background: var(--navy);
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .board-header h3 {
    font-family: 'Playfair Display', serif;
    color: var(--white);
    font-size: 1.1rem;
  }
  .board-header span { font-size: 1.2rem; }

  .notice-list {
    list-style: none;
    padding: 20px 28px;
    max-height: 280px;
    overflow-y: auto;
  }
  .notice-list::-webkit-scrollbar { width: 4px; }
  .notice-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

  .notice-item {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    font-size: 0.88rem;
    color: #334;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.6;
  }
  .notice-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
    margin-top: 7px;
  }

  .event-list { padding: 20px 28px; }
  .event-item {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .event-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: rgba(201,146,42,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .event-text { font-size: 0.88rem; color: #334; line-height: 1.5; }
  .event-empty { color: var(--text-muted); font-size: 0.9rem; padding: 20px 0; }

  /* ── STATS ── */
  .stats-section {
    background: var(--navy);
    padding: 80px 6vw;
    position: relative;
    overflow: hidden;
  }
  .stats-section::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    margin-top: 60px;
  }
  .stat-card {
    padding: 40px 30px;
    border: 1px solid rgba(255,255,255,0.06);
    text-align: center;
    transition: background 0.3s;
  }
  .stat-card:hover { background: rgba(201,146,42,0.07); }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 900;
    color: var(--gold-light);
    display: block;
    line-height: 1;
    margin-bottom: 10px;
  }
  .stat-label {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* ── TESTIMONIALS ── */
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 50px;
  }
  .testi-card {
    background: var(--white);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 16px;
    padding: 36px 32px;
    position: relative;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .testi-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
  }
  .testi-quote {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    color: var(--gold);
    line-height: 1;
    position: absolute;
    top: 20px; left: 28px;
    opacity: 0.25;
  }
  .testi-text {
    font-size: 0.95rem;
    color: #445;
    line-height: 1.8;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
  }
  .testi-name {
    font-weight: 600;
    font-size: 0.88rem;
    color: var(--navy);
    letter-spacing: 0.02em;
  }
  .testi-role {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-top: 2px;
  }
  .testi-avatar {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--navy));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .info-grid { grid-template-columns: 1fr 1fr; }
    .info-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .two-col { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .info-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .stat-num { font-size: 2.2rem; }
    .hero-title { font-size: 1.8rem; }
  }
`;

export default function Home() {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  const events = JSON.parse(localStorage.getItem("events")) || [];

  const slides = [
    {
      title: <>Welcome to <span>Sarvodaya Vidyalaya</span> Junior Science College</>,
      desc: "Quality education with modern classrooms, experienced teachers, and a nurturing environment for every student to thrive.",
      btnText: "Admissions Open",
      link: "/contact#admission",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: <>Smart Learning, <span>Bright Future</span> Ahead</>,
      desc: "Interactive teaching methods, smart classrooms, and skill-based learning designed for the leaders of tomorrow.",
      btnText: "Explore Academics",
      link: "/academics",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: <>Sports, Arts & <span>Overall Development</span></>,
      desc: "We nurture physical fitness, creativity, and strong character through diverse co-curricular activities.",
      btnText: "View Gallery",
      link: "/gallery",
      img: "https://images.unsplash.com/photo-1519452635266-abab4954c08b?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => { setCurrent(i); resetTimer(); };
  const prev = () => { setCurrent((p) => (p - 1 + slides.length) % slides.length); resetTimer(); };
  const next = () => { setCurrent((p) => (p + 1) % slides.length); resetTimer(); };

  // Counter animation
  const targets = { students: 1200, teachers: 80, awards: 25, classrooms: 50 };
  const [counts, setCounts] = useState({ students: 0, teachers: 0, awards: 0, classrooms: 0 });

  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 2000;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        students: Math.floor(ease * targets.students),
        teachers: Math.floor(ease * targets.teachers),
        awards: Math.floor(ease * targets.awards),
        classrooms: Math.floor(ease * targets.classrooms),
      });
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const testimonials = [
    { name: "Rahul Sharma", role: "Parent", msg: "The teachers are genuinely supportive and the education quality is outstanding. My child has grown so much here." },
    { name: "Ananya Desai", role: "Student", msg: "I love the interactive smart classes and all the activities. Coming to school every day feels exciting." },
    { name: "Neha Verma", role: "Parent", msg: "A very disciplined school with great focus on academics, sports, and overall personality development." },
  ];

  return (
    <>
      <style>{styles}</style>

      {/* ── HERO ── */}
      <div className="hero-wrap">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.img})` }}
          />
        ))}

        <div className="hero-content">
          <div className="hero-badge">
            <span>✦</span> Est. Since Hingna · Session 2026–27
          </div>
          <h1 className="hero-title">{slides[current].title}</h1>
          <p className="hero-desc">{slides[current].desc}</p>
          <div className="hero-actions">
            <Link to={slides[current].link}>
              <button className="btn-primary">{slides[current].btnText}</button>
            </Link>
            <Link to="/about">
              <button className="btn-outline">Learn More</button>
            </Link>
          </div>
        </div>

        <div className="slide-nav">
          {slides.map((_, i) => (
            <button key={i} className={`slide-dot ${i === current ? "active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>

        <div className="slide-arrows">
          <button className="arrow-btn" onClick={prev}>◀</button>
          <button className="arrow-btn" onClick={next}>▶</button>
        </div>
      </div>

      {/* ── QUICK INFO BAR ── */}
      <div className="info-bar">
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">📌</div>
            <div className="info-label">Admissions</div>
            <div className="info-sub">Session 2026–27 now open for enrollment</div>
            <Link to="/contact#admission" className="info-link">Apply Now →</Link>
          </div>
          <div className="info-item">
            <div className="info-icon">⏰</div>
            <div className="info-label">School Timings</div>
            <div className="info-sub">Mon – Sat: 8:00 AM to 2:30 PM</div>
            <span className="info-link" style={{ color: "var(--text-muted)", cursor: "default" }}>Sunday Holiday</span>
          </div>
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-label">Contact Us</div>
            <div className="info-sub">We're here for admissions & support</div>
            <span className="info-link">+91 98765 43210</span>
          </div>
          <div className="info-item">
            <div className="info-icon">🏫</div>
            <div className="info-label">Facilities</div>
            <div className="info-sub">Labs · Library · Smart Classes · Sports</div>
            <Link to="/about" className="info-link">View More →</Link>
          </div>
        </div>
      </div>

      {/* ── NOTICE + EVENTS ── */}
      <section className="section section-alt">
        <div className="section-label">Stay Updated</div>
        <div className="section-title">Notice Board & Events</div>
        <div className="section-sub">Stay informed about school announcements, important dates, and upcoming events.</div>

        <div className="two-col">
          <div className="board-card">
            <div className="board-header">
              <span>📢</span>
              <h3>Notice Board</h3>
            </div>
            <ul className="notice-list">
              {notices.length === 0 ? (
                <li className="notice-item"><div className="notice-dot"></div>No notices at this time.</li>
              ) : (
                notices.map((n, i) => (
                  <li key={i} className="notice-item">
                    <div className="notice-dot"></div>
                    {n}
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="board-card">
            <div className="board-header">
              <span>📅</span>
              <h3>Upcoming Events</h3>
            </div>
            <div className="event-list">
              {events.length === 0 ? (
                <div className="event-empty">No upcoming events scheduled.</div>
              ) : (
                events.map((e, i) => (
                  <div key={i} className="event-item">
                    <div className="event-icon">📅</div>
                    <div className="event-text">{e}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ color: "var(--gold)" }}>By the Numbers</div>
          <div className="section-title" style={{ color: "var(--white)" }}>Our Achievements</div>
          <div className="section-sub" style={{ color: "rgba(255,255,255,0.55)" }}>We are proud of the community we have built over the years.</div>

          <div className="stats-grid">
            {[
              { num: counts.students, label: "Students Enrolled", suffix: "+" },
              { num: counts.teachers, label: "Expert Teachers", suffix: "+" },
              { num: counts.awards, label: "Awards Won", suffix: "+" },
              { num: counts.classrooms, label: "Classrooms", suffix: "+" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-num">{s.num}{s.suffix}</span>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-alt">
        <div className="section-label">Voices of Trust</div>
        <div className="section-title">What Our Community Says</div>
        <div className="section-sub">Hear from the parents and students who are part of the Sarvodaya family.</div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-quote">"</div>
              <div className="testi-avatar">{t.name[0]}</div>
              <p className="testi-text">{t.msg}</p>
              <div className="testi-name">{t.name}</div>
              <div className="testi-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}