import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0a1628;
    --navy-mid:   #142240;
    --gold:       #c9922a;
    --gold-light: #e8b84b;
    --gold-dim:   rgba(201,146,42,0.12);
    --cream:      #faf7f2;
    --white:      #ffffff;
    --muted:      #6b7a99;
    --border:     rgba(201,146,42,0.2);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--navy); }

  /* ════════════════════════════════
     HERO
  ════════════════════════════════ */
  .hero-wrap {
    position: relative;
    height: 100vh;
    min-height: 620px;
    overflow: hidden;
    background: var(--navy);
  }
  .hero-slide {
    position: absolute; inset: 0;
    opacity: 0; transition: opacity 1.2s ease;
    background-size: cover; background-position: center;
  }
  .hero-slide.active { opacity: 1; }
  .hero-slide::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.3) 100%);
  }
  .hero-content {
    position: absolute; inset: 0; z-index: 10;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 8vw; max-width: 900px;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,146,42,0.15); border: 1px solid var(--gold);
    color: var(--gold-light); padding: 6px 16px; border-radius: 40px;
    font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase;
    font-weight: 500; margin-bottom: 24px; width: fit-content;
    animation: fadeUp 0.8s ease both;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 900;
    color: var(--white); line-height: 1.15; margin-bottom: 20px;
    animation: fadeUp 0.9s 0.1s ease both;
  }
  .hero-title span { color: var(--gold-light); }
  .hero-desc {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: rgba(255,255,255,0.75); max-width: 560px;
    line-height: 1.75; margin-bottom: 36px; font-weight: 300;
    animation: fadeUp 1s 0.2s ease both;
  }
  .hero-actions {
    display: flex; gap: 16px; flex-wrap: wrap;
    animation: fadeUp 1s 0.3s ease both;
  }
  .btn-primary {
    background: var(--gold); color: var(--white); padding: 14px 32px;
    border-radius: 6px; border: none; font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 600; cursor: pointer;
    transition: background 0.3s, transform 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
  .btn-outline {
    background: transparent; color: var(--white); padding: 14px 32px;
    border-radius: 6px; border: 1.5px solid rgba(255,255,255,0.4);
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500;
    cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold-light); }

  .slide-nav {
    position: absolute; bottom: 40px; left: 8vw; z-index: 20;
    display: flex; align-items: center; gap: 12px;
  }
  .slide-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(255,255,255,0.35); cursor: pointer;
    transition: all 0.3s; border: none;
  }
  .slide-dot.active { background: var(--gold); width: 28px; border-radius: 4px; }
  .slide-arrows {
    position: absolute; right: 6vw; bottom: 32px; z-index: 20; display: flex; gap: 10px;
  }
  .arrow-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.08); color: white;
    font-size: 1rem; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(4px);
  }
  .arrow-btn:hover { background: var(--gold); border-color: var(--gold); }

  /* ════════════════════════════════
     QUICK INFO BAR
  ════════════════════════════════ */
  .info-bar { background: var(--navy); padding: 0 5vw; }
  .info-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .info-item {
    padding: 28px 22px; border-right: 1px solid rgba(255,255,255,0.06);
    transition: background 0.3s;
  }
  .info-item:last-child { border-right: none; }
  .info-item:hover { background: rgba(201,146,42,0.06); }
  .info-icon { font-size: 1.4rem; margin-bottom: 10px; }
  .info-label { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--white); margin-bottom: 4px; }
  .info-sub { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }
  .info-link {
    display: inline-block; margin-top: 8px; font-size: 0.8rem;
    color: var(--gold); font-weight: 600; text-decoration: none; letter-spacing: 0.04em;
  }
  .info-link:hover { color: var(--gold-light); }

  /* ════════════════════════════════
     SECTION COMMONS
  ════════════════════════════════ */
  .section { padding: 90px 6vw; }
  .section-alt { background: var(--white); }
  .section-dark { background: var(--navy); }

  .section-label {
    font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); font-weight: 600; margin-bottom: 10px;
    display: flex; align-items: center; gap: 10px;
  }
  .section-label::before {
    content: ''; display: block; width: 24px; height: 2px;
    background: var(--gold); border-radius: 2px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 700;
    color: var(--navy); line-height: 1.2; margin-bottom: 12px;
  }
  .section-title-white { color: var(--white); }
  .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; line-height: 1.7; }
  .section-sub-white { color: rgba(255,255,255,0.55); }
  .section-head { margin-bottom: 48px; }
  .section-head-center { text-align: center; }
  .section-head-center .section-label { justify-content: center; }
  .section-head-center .section-label::before { display: none; }
  .section-head-center .section-sub { margin: 0 auto; }

  /* ════════════════════════════════
     NOTICE + EVENTS
  ════════════════════════════════ */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .board-card {
    background: var(--white); border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.07); overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  }
  .board-header {
    background: var(--navy); padding: 18px 26px;
    display: flex; align-items: center; gap: 12px;
  }
  .board-header h3 { font-family: 'Playfair Display', serif; color: var(--white); font-size: 1.05rem; }
  .board-header span { font-size: 1.2rem; }
  .notice-list {
    list-style: none; padding: 18px 26px;
    max-height: 270px; overflow-y: auto;
  }
  .notice-list::-webkit-scrollbar { width: 4px; }
  .notice-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .notice-item {
    padding: 11px 0; border-bottom: 1px solid rgba(0,0,0,0.05);
    font-size: 0.87rem; color: #334; display: flex;
    align-items: flex-start; gap: 10px; line-height: 1.6;
  }
  .notice-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold); flex-shrink: 0; margin-top: 7px;
  }
  .event-list { padding: 18px 26px; }
  .event-item {
    display: flex; gap: 16px; align-items: center;
    padding: 11px 0; border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .event-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: var(--gold-dim); display: flex; align-items: center;
    justify-content: center; font-size: 1.1rem; flex-shrink: 0;
  }
  .event-text { font-size: 0.87rem; color: #334; line-height: 1.5; }
  .event-empty { color: var(--muted); font-size: 0.88rem; padding: 18px 0; }

  /* ════════════════════════════════
     WHY CHOOSE US
  ════════════════════════════════ */
  .why-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .why-card {
    background: var(--white); border: 1px solid rgba(0,0,0,0.07);
    border-radius: 18px; padding: 34px 28px;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 14px rgba(0,0,0,0.04);
    position: relative; overflow: hidden;
  }
  .why-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.35s ease;
  }
  .why-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .why-card:hover::before { transform: scaleX(1); }
  .why-icon {
    width: 54px; height: 54px; border-radius: 14px;
    background: var(--gold-dim); display: flex; align-items: center;
    justify-content: center; font-size: 1.5rem; margin-bottom: 18px;
  }
  .why-title {
    font-family: 'Playfair Display', serif; font-size: 1.05rem;
    font-weight: 700; color: var(--navy); margin-bottom: 10px;
  }
  .why-desc { font-size: 0.86rem; color: var(--muted); line-height: 1.7; }

  /* ════════════════════════════════
     STATS
  ════════════════════════════════ */
  .stats-section {
    background: var(--navy); padding: 80px 6vw;
    position: relative; overflow: hidden;
  }
  .stats-section::before {
    content: ''; position: absolute; top: -120px; right: -120px;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%);
  }
  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 2px; margin-top: 50px;
  }
  .stat-card {
    padding: 40px 28px; border: 1px solid rgba(255,255,255,0.06);
    text-align: center; transition: background 0.3s;
  }
  .stat-card:hover { background: rgba(201,146,42,0.07); }
  .stat-num {
    font-family: 'Playfair Display', serif; font-size: 3rem;
    font-weight: 900; color: var(--gold-light); display: block;
    line-height: 1; margin-bottom: 10px;
  }
  .stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; }

  /* ════════════════════════════════
     ACADEMIC STREAMS
  ════════════════════════════════ */
  .streams-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .stream-card {
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 4px 28px rgba(0,0,0,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative; min-height: 320px;
    display: flex; flex-direction: column; justify-content: flex-end;
  }
  .stream-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
  .stream-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
  }
  .stream-bg::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 60%, transparent 100%);
  }
  .stream-body { position: relative; z-index: 1; padding: 32px 30px; }
  .stream-badge {
    display: inline-block; background: var(--gold); color: white;
    font-size: 0.7rem; font-weight: 700; padding: 4px 12px;
    border-radius: 20px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px;
  }
  .stream-title {
    font-family: 'Playfair Display', serif; font-size: 1.5rem;
    font-weight: 900; color: white; margin-bottom: 12px; line-height: 1.2;
  }
  .stream-subjects { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .stream-tag {
    background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.85); font-size: 0.75rem; padding: 4px 12px; border-radius: 20px;
  }
  .stream-link {
    display: inline-flex; align-items: center; gap: 6px;
    color: var(--gold-light); font-size: 0.84rem; font-weight: 600;
    text-decoration: none; transition: gap 0.2s;
  }
  .stream-link:hover { gap: 10px; color: var(--gold-light); }

  /* ════════════════════════════════
     PRINCIPAL MESSAGE
  ════════════════════════════════ */
  .principal-wrap {
    display: grid; grid-template-columns: 380px 1fr; gap: 60px; align-items: center;
  }
  .principal-img-wrap {
    position: relative;
  }
  .principal-img {
    width: 100%; aspect-ratio: 3/4; object-fit: cover;
    border-radius: 20px; display: block;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }
  .principal-img-fallback {
    width: 100%; aspect-ratio: 3/4;
    background: linear-gradient(135deg, var(--navy), var(--navy-mid));
    border-radius: 20px; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }
  .principal-img-fallback span:first-child { font-size: 4rem; }
  .principal-img-fallback span:last-child { color: rgba(255,255,255,0.4); font-size: 0.85rem; }
  .principal-badge-wrap {
    position: absolute; bottom: -18px; right: -18px;
    background: var(--gold); border-radius: 14px; padding: 16px 20px;
    box-shadow: 0 8px 24px rgba(201,146,42,0.35); text-align: center;
  }
  .principal-badge-num {
    font-family: 'Playfair Display', serif; font-size: 1.6rem;
    font-weight: 900; color: white; line-height: 1;
  }
  .principal-badge-label { font-size: 0.7rem; color: rgba(255,255,255,0.8); margin-top: 2px; }
  .principal-quote {
    font-family: 'Playfair Display', serif; font-size: 1.15rem;
    font-style: italic; color: var(--navy); line-height: 1.7;
    border-left: 3px solid var(--gold); padding-left: 20px;
    margin: 24px 0; opacity: 0.85;
  }
  .principal-message {
    font-size: 0.92rem; color: var(--muted); line-height: 1.85; margin-bottom: 28px;
  }
  .principal-name {
    font-family: 'Playfair Display', serif; font-size: 1.2rem;
    font-weight: 700; color: var(--navy);
  }
  .principal-role { font-size: 0.82rem; color: var(--gold); font-weight: 600; margin-top: 2px; }

  /* ════════════════════════════════
     GALLERY PREVIEW
  ════════════════════════════════ */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 220px 220px;
    gap: 12px;
  }
  .gallery-item {
    border-radius: 14px; overflow: hidden; position: relative;
    background: #e0e8f0; cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .gallery-item:first-child {
    grid-column: span 2; grid-row: span 2;
  }
  .gallery-item:hover { transform: scale(1.02); box-shadow: 0 12px 36px rgba(0,0,0,0.18); }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .gallery-item-overlay {
    position: absolute; inset: 0;
    background: rgba(10,22,40,0.0); transition: background 0.3s;
    display: flex; align-items: center; justify-content: center;
  }
  .gallery-item:hover .gallery-item-overlay { background: rgba(10,22,40,0.35); }
  .gallery-overlay-icon { color: white; font-size: 1.6rem; opacity: 0; transition: opacity 0.3s; }
  .gallery-item:hover .gallery-overlay-icon { opacity: 1; }
  .gallery-empty-item {
    border-radius: 14px; background: #f0f4f8;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.82rem; color: var(--muted); border: 2px dashed #dde3ec;
  }
  .gallery-cta { text-align: center; margin-top: 36px; }

  /* ════════════════════════════════
     SUCCESS STORIES
  ════════════════════════════════ */
  .success-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .success-card {
    background: var(--white); border: 1px solid rgba(0,0,0,0.07);
    border-radius: 18px; padding: 28px; text-align: center;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .success-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .success-avatar {
    width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 14px;
    object-fit: cover; border: 3px solid var(--gold);
    display: block;
  }
  .success-avatar-fallback {
    width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 14px;
    background: linear-gradient(135deg, var(--gold), var(--navy));
    display: flex; align-items: center; justify-content: center;
    color: white; font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 700; border: 3px solid var(--gold);
  }
  .success-name { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .success-achievement { font-size: 0.84rem; color: var(--muted); line-height: 1.6; margin-bottom: 10px; }
  .success-year {
    display: inline-block; background: var(--gold-dim); color: var(--gold);
    font-size: 0.72rem; font-weight: 700; padding: 3px 12px;
    border-radius: 20px; border: 1px solid rgba(201,146,42,0.3);
  }
  .success-empty { text-align: center; padding: 50px; color: var(--muted); font-size: 0.9rem; }

  /* ════════════════════════════════
     TESTIMONIALS
  ════════════════════════════════ */
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .testi-card {
    background: var(--white); border: 1px solid rgba(0,0,0,0.07);
    border-radius: 16px; padding: 34px 30px; position: relative;
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .testi-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .testi-quote {
    font-family: 'Playfair Display', serif; font-size: 4rem;
    color: var(--gold); line-height: 1; position: absolute;
    top: 18px; left: 26px; opacity: 0.2;
  }
  .testi-text { font-size: 0.92rem; color: #445; line-height: 1.8; margin-bottom: 22px; position: relative; z-index: 1; }
  .testi-name { font-weight: 600; font-size: 0.88rem; color: var(--navy); }
  .testi-role { font-size: 0.76rem; color: var(--muted); margin-top: 2px; }
  .testi-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--navy));
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 0.9rem; margin-bottom: 12px;
  }

  /* ════════════════════════════════
     FACILITIES
  ════════════════════════════════ */
  .facilities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .facility-card {
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 28px 22px; text-align: center;
    transition: background 0.3s, transform 0.3s;
  }
  .facility-card:hover { background: rgba(201,146,42,0.08); transform: translateY(-4px); }
  .facility-icon { font-size: 2rem; margin-bottom: 14px; }
  .facility-name { font-family: 'Playfair Display', serif; font-size: 0.95rem; color: white; margin-bottom: 6px; }
  .facility-desc { font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.6; }

  /* ════════════════════════════════
     CTA BANNER
  ════════════════════════════════ */
  .cta-banner {
    background: linear-gradient(135deg, var(--gold) 0%, #a87020 50%, var(--gold) 100%);
    background-size: 200% 100%; animation: shimmer 6s linear infinite;
    padding: 70px 6vw; text-align: center; position: relative; overflow: hidden;
  }
  .cta-banner::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
  .cta-title {
    font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 900; color: white; margin-bottom: 14px; position: relative;
  }
  .cta-desc { font-size: 1rem; color: rgba(255,255,255,0.85); max-width: 540px; margin: 0 auto 32px; line-height: 1.7; position: relative; }
  .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-white {
    background: white; color: var(--gold); padding: 14px 36px;
    border-radius: 6px; border: none; font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 700; cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; display: inline-block;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
  .btn-white-outline {
    background: transparent; color: white; padding: 14px 36px;
    border-radius: 6px; border: 2px solid rgba(255,255,255,0.6);
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-white-outline:hover { background: rgba(255,255,255,0.15); border-color: white; }

  /* ════════════════════════════════
     LOCATION
  ════════════════════════════════ */
  .location-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .map-wrap {
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 12px 40px rgba(0,0,0,0.1); height: 380px;
  }
  .map-wrap iframe { width: 100%; height: 100%; border: none; display: block; }
  .location-info { }
  .contact-detail {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .contact-detail:last-child { border-bottom: none; }
  .contact-icon {
    width: 42px; height: 42px; border-radius: 10px; background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; flex-shrink: 0;
  }
  .contact-label { font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px; }
  .contact-value { font-size: 0.9rem; color: var(--navy); font-weight: 500; }
  .social-row { display: flex; gap: 12px; margin-top: 24px; }
  .social-btn {
    width: 42px; height: 42px; border-radius: 10px;
    background: var(--navy); color: white; border: none;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; cursor: pointer; text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }
  .social-btn:hover { background: var(--gold); transform: translateY(-2px); }

  /* ════════════════════════════════
     ANIMATIONS
  ════════════════════════════════ */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ════════════════════════════════
     RESPONSIVE
  ════════════════════════════════ */
  @media (max-width: 1100px) {
    .why-grid { grid-template-columns: 1fr 1fr; }
    .facilities-grid { grid-template-columns: repeat(2, 1fr); }
    .principal-wrap { grid-template-columns: 300px 1fr; gap: 40px; }
  }
  @media (max-width: 900px) {
    .info-grid { grid-template-columns: 1fr 1fr; }
    .info-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .two-col, .streams-grid, .principal-wrap, .location-wrap { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .testimonials-grid, .success-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
    .gallery-item:first-child { grid-column: span 2; grid-row: span 1; }
    .principal-img-wrap { max-width: 360px; margin: 0 auto; }
    .principal-badge-wrap { bottom: -14px; right: 20px; }
  }
  @media (max-width: 600px) {
    .section { padding: 60px 5vw; }
    .info-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .why-grid, .facilities-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
    .gallery-item:first-child { grid-column: 1; }
    .hero-title { font-size: 1.9rem; }
    .success-grid { grid-template-columns: 1fr 1fr; }
  }
`;

// ── Slides data ──
const SLIDES = [
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

const WHY_ITEMS = [
  { icon: "🏫", title: "Modern Infrastructure", desc: "State-of-the-art classrooms, science labs, computer labs, and a well-stocked library to support comprehensive learning." },
  { icon: "👨‍🏫", title: "Expert Faculty", desc: "Highly qualified and experienced teachers dedicated to bringing out the best in every student through personalized attention." },
  { icon: "🏆", title: "Proven Results", desc: "Consistent 100% board exam results and numerous district and state-level toppers over the past decade." },
  { icon: "⚽", title: "Sports & Activities", desc: "Comprehensive sports program including cricket, football, athletics, and indoor games with trained coaches." },
  { icon: "💻", title: "Smart Classrooms", desc: "Digital learning tools, projectors, and interactive boards make lessons engaging, visual, and effective." },
  { icon: "🎨", title: "Arts & Culture", desc: "Vibrant cultural programs, drawing, music, and drama help students discover their creative potential." },
];

const FACILITIES = [
  { icon: "🔬", name: "Science Labs", desc: "Physics, Chemistry & Biology labs with modern equipment" },
  { icon: "💻", name: "Computer Lab", desc: "60+ systems with high-speed internet access" },
  { icon: "📚", name: "Library", desc: "5000+ books, journals & digital resources" },
  { icon: "⚽", name: "Sports Ground", desc: "Cricket, football, athletics & indoor courts" },
  { icon: "🎭", name: "Auditorium", desc: "500-seat auditorium for events & programs" },
  { icon: "🚌", name: "Transport", desc: "Safe school bus service across all routes" },
  { icon: "🍽️", name: "Canteen", desc: "Hygienic, nutritious meals for students" },
  { icon: "🏥", name: "Medical Room", desc: "First-aid & health checkup facility" },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma",  role: "Parent",  msg: "The teachers are genuinely supportive and the education quality is outstanding. My child has grown tremendously here." },
  { name: "Ananya Desai",  role: "Student", msg: "I love the interactive smart classes and all the activities. Coming to school every day feels exciting and rewarding." },
  { name: "Neha Verma",    role: "Parent",  msg: "A very disciplined school with great focus on academics, sports, and overall personality development." },
];

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
];

export default function Home() {
  const notices     = JSON.parse(localStorage.getItem("notices")     || "[]");
  const events      = JSON.parse(localStorage.getItem("events")      || "[]");
  const successList = JSON.parse(localStorage.getItem("successList") || "[]");
  const galleryData = JSON.parse(localStorage.getItem("gallery")     || "[]");
  const principalInfo = JSON.parse(localStorage.getItem("principalInfo") || "{}");
  const contactInfo   = JSON.parse(localStorage.getItem("contactInfo")   || "{}");

  // Gallery: prefer admin-uploaded images, fall back to stock
  const galleryImgs = galleryData.length > 0
    ? galleryData.slice(0, 5)
    : GALLERY_IMGS;

  // ── Slider ──
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 5000);
  };
  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, []);
  const goTo = i => { setCurrent(i); resetTimer(); };
  const prev = () => { setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length); resetTimer(); };
  const next = () => { setCurrent(p => (p + 1) % SLIDES.length); resetTimer(); };

  // ── Counter animation ──
  const targets = { students: 1200, teachers: 80, awards: 25, classrooms: 50 };
  const [counts, setCounts] = useState({ students: 0, teachers: 0, awards: 0, classrooms: 0 });
  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 2200;
    const animate = now => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        students:   Math.floor(ease * targets.students),
        teachers:   Math.floor(ease * targets.teachers),
        awards:     Math.floor(ease * targets.awards),
        classrooms: Math.floor(ease * targets.classrooms),
      });
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <div className="hero-wrap">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.img})` }} />
        ))}
        <div className="hero-content">
          <div className="hero-badge"><span>✦</span> Est. Since Hingna · Session 2026–27</div>
          <h1 className="hero-title">{SLIDES[current].title}</h1>
          <p className="hero-desc">{SLIDES[current].desc}</p>
          <div className="hero-actions">
            <Link to={SLIDES[current].link}><button className="btn-primary">{SLIDES[current].btnText}</button></Link>
            <Link to="/about"><button className="btn-outline">Learn More</button></Link>
          </div>
        </div>
        <div className="slide-nav">
          {SLIDES.map((_, i) => (
            <button key={i} className={`slide-dot ${i === current ? "active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <div className="slide-arrows">
          <button className="arrow-btn" onClick={prev}>◀</button>
          <button className="arrow-btn" onClick={next}>▶</button>
        </div>
      </div>

      {/* ══════════════════════════════
          QUICK INFO BAR
      ══════════════════════════════ */}
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
            <div className="info-sub">{contactInfo.officeHours || "Mon – Sat: 8:00 AM to 2:30 PM"}</div>
            <span className="info-link" style={{ color: "var(--muted)", cursor: "default" }}>Sunday Holiday</span>
          </div>
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-label">Contact Us</div>
            <div className="info-sub">We're here for admissions & support</div>
            <span className="info-link">{contactInfo.phone || "+91 98765 43210"}</span>
          </div>
          <div className="info-item">
            <div className="info-icon">🏫</div>
            <div className="info-label">Facilities</div>
            <div className="info-sub">Labs · Library · Smart Classes · Sports</div>
            <Link to="/about" className="info-link">View More →</Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          NOTICE BOARD + EVENTS
      ══════════════════════════════ */}
      <section className="section section-alt">
        <div className="section-head">
          <div className="section-label">Stay Updated</div>
          <div className="section-title">Notice Board & Events</div>
          <div className="section-sub">Stay informed about school announcements, important dates, and upcoming events.</div>
        </div>
        <div className="two-col">
          <div className="board-card">
            <div className="board-header"><span>📢</span><h3>Notice Board</h3></div>
            <ul className="notice-list">
              {notices.length === 0
                ? <li className="notice-item"><div className="notice-dot" />No notices at this time.</li>
                : notices.map((n, i) => (
                    <li key={i} className="notice-item"><div className="notice-dot" />{n}</li>
                  ))
              }
            </ul>
          </div>
          <div className="board-card">
            <div className="board-header"><span>📅</span><h3>Upcoming Events</h3></div>
            <div className="event-list">
              {events.length === 0
                ? <div className="event-empty">No upcoming events scheduled.</div>
                : events.map((e, i) => (
                    <div key={i} className="event-item">
                      <div className="event-icon">📅</div>
                      <div className="event-text">{e}</div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="section">
        <div className="section-head">
          <div className="section-label">Our Strengths</div>
          <div className="section-title">Why Choose Sarvodaya Vidyalaya?</div>
          <div className="section-sub">We go beyond textbooks — shaping confident, skilled, and well-rounded individuals.</div>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map((w, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{w.icon}</div>
              <div className="why-title">{w.title}</div>
              <div className="why-desc">{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          STATS
      ══════════════════════════════ */}
      <div className="stats-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-head">
            <div className="section-label" style={{ color: "var(--gold)" }}>By the Numbers</div>
            <div className="section-title section-title-white">Our Achievements</div>
            <div className="section-sub section-sub-white">We are proud of the community we have built over the years.</div>
          </div>
          <div className="stats-grid">
            {[
              { num: counts.students,   label: "Students Enrolled", suffix: "+" },
              { num: counts.teachers,   label: "Expert Teachers",   suffix: "+" },
              { num: counts.awards,     label: "Awards Won",        suffix: "+" },
              { num: counts.classrooms, label: "Classrooms",        suffix: "+" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-num">{s.num}{s.suffix}</span>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          ACADEMIC STREAMS
      ══════════════════════════════ */}
      <section className="section section-alt">
        <div className="section-head">
          <div className="section-label">Academics</div>
          <div className="section-title">Our Academic Streams</div>
          <div className="section-sub">Choose the stream that best fits your passion and career goals.</div>
        </div>
        <div className="streams-grid">
          <div className="stream-card">
            <div className="stream-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=800&q=80)" }} />
            <div className="stream-body">
              <div className="stream-badge">11th & 12th</div>
              <div className="stream-title">Science Stream</div>
              <div className="stream-subjects">
                {["Physics", "Chemistry", "Biology", "Mathematics", "English"].map(s => (
                  <span key={s} className="stream-tag">{s}</span>
                ))}
              </div>
              <Link to="/academics/science" className="stream-link">Explore Science Stream →</Link>
            </div>
          </div>
          <div className="stream-card">
            <div className="stream-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)" }} />
            <div className="stream-body">
              <div className="stream-badge">11th & 12th</div>
              <div className="stream-title">Commerce Stream</div>
              <div className="stream-subjects">
                {["Accountancy", "Economics", "Business Studies", "Mathematics", "English"].map(s => (
                  <span key={s} className="stream-tag">{s}</span>
                ))}
              </div>
              <Link to="/academics/commerce" className="stream-link">Explore Commerce Stream →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRINCIPAL MESSAGE
      ══════════════════════════════ */}
      <section className="section">
        <div className="principal-wrap">
          <div className="principal-img-wrap">
            {principalInfo.photo && principalInfo.photo !== "/principal.jpg" ? (
              <img src={principalInfo.photo} alt="Principal" className="principal-img"
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
            ) : null}
            <div className="principal-img-fallback" style={{ display: principalInfo.photo && principalInfo.photo !== "/principal.jpg" ? "none" : "flex" }}>
              <span>👩‍💼</span>
              <span>Principal Photo</span>
            </div>
            <div className="principal-badge-wrap">
              <div className="principal-badge-num">{principalInfo.experience || "25+"}</div>
              <div className="principal-badge-label">Years of Excellence</div>
            </div>
          </div>
          <div>
            <div className="section-label">From the Principal's Desk</div>
            <div className="section-title">{principalInfo.name || "Our Principal"}</div>
            <div style={{ fontSize: "0.82rem", color: "var(--gold)", fontWeight: 600, marginBottom: "16px" }}>
              {principalInfo.qualification || "M.Sc., B.Ed."} · {principalInfo.role || "Principal"}
            </div>
            {principalInfo.quote && (
              <div className="principal-quote">"{principalInfo.quote}"</div>
            )}
            <div className="principal-message">
              {principalInfo.message
                ? principalInfo.message.split("\n").slice(0, 3).map((line, i) => (
                    <p key={i} style={{ marginBottom: "10px" }}>{line}</p>
                  ))
                : (
                  <p>At Sarvodaya Vidyalaya, we believe every child carries within them a unique spark. Our mission is to nurture that spark through quality education, discipline, and a love for learning. We are committed to creating an environment where students not only excel academically but also grow as responsible human beings.</p>
                )
              }
            </div>
            <Link to="/principal">
              <button className="btn-primary">Read Full Message →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FACILITIES
      ══════════════════════════════ */}
      <div className="stats-section" style={{ padding: "80px 6vw" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-head">
            <div className="section-label" style={{ color: "var(--gold)" }}>Infrastructure</div>
            <div className="section-title section-title-white">World-Class Facilities</div>
            <div className="section-sub section-sub-white">Everything students need to learn, grow, and thrive — all under one roof.</div>
          </div>
          <div className="facilities-grid">
            {FACILITIES.map((f, i) => (
              <div key={i} className="facility-card">
                <div className="facility-icon">{f.icon}</div>
                <div className="facility-name">{f.name}</div>
                <div className="facility-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          GALLERY PREVIEW
      ══════════════════════════════ */}
      <section className="section section-alt">
        <div className="section-head section-head-center">
          <div className="section-label">Our Campus Life</div>
          <div className="section-title" style={{ textAlign: "center" }}>A Glimpse of Our School</div>
          <div className="section-sub" style={{ textAlign: "center" }}>Moments that capture the spirit, energy, and joy of life at Sarvodaya Vidyalaya.</div>
        </div>
        <div className="gallery-grid">
          {galleryImgs.slice(0, 5).map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img} alt={`School ${i + 1}`} />
              <div className="gallery-item-overlay">
                <span className="gallery-overlay-icon">🔍</span>
              </div>
            </div>
          ))}
          {galleryImgs.length < 5 && Array.from({ length: 5 - galleryImgs.length }).map((_, i) => (
            <div key={`empty-${i}`} className="gallery-empty-item">📷</div>
          ))}
        </div>
        <div className="gallery-cta">
          <Link to="/gallery"><button className="btn-primary">View Full Gallery →</button></Link>
        </div>
      </section>

      {/* ══════════════════════════════
          SUCCESS STORIES
      ══════════════════════════════ */}
      <section className="section">
        <div className="section-head">
          <div className="section-label">Pride of Sarvodaya</div>
          <div className="section-title">Student Success Stories</div>
          <div className="section-sub">Our students go on to achieve great things. Here are some of their inspiring journeys.</div>
        </div>
        {successList.length === 0 ? (
          <div className="success-empty">
            🏆 Success stories will appear here once added from the admin dashboard.
          </div>
        ) : (
          <div className="success-grid">
            {successList.slice(0, 6).map((s, i) => (
              <div key={i} className="success-card">
                {s.img ? (
                  <img src={s.img} alt={s.name} className="success-avatar"
                    onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                ) : null}
                <div className="success-avatar-fallback" style={{ display: s.img ? "none" : "flex" }}>
                  {s.name?.[0] || "S"}
                </div>
                <div className="success-name">{s.name}</div>
                <div className="success-achievement">{s.achievement}</div>
                <span className="success-year">{s.year}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <Link to="/success"><button className="btn-primary">View All Stories →</button></Link>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="section section-alt">
        <div className="section-head section-head-center">
          <div className="section-label">Voices of Trust</div>
          <div className="section-title" style={{ textAlign: "center" }}>What Our Community Says</div>
          <div className="section-sub" style={{ textAlign: "center" }}>Hear from the parents and students who are part of the Sarvodaya family.</div>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
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

      {/* ══════════════════════════════
          LOCATION & CONTACT
      ══════════════════════════════ */}
      <section className="section">
        <div className="section-head">
          <div className="section-label">Find Us</div>
          <div className="section-title">Visit Our School</div>
          <div className="section-sub">We'd love to welcome you. Come see our campus and meet our team.</div>
        </div>
        <div className="location-wrap">
          <div className="map-wrap">
            <iframe
              src={contactInfo.mapSrc || "https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed"}
              title="School Location"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="location-info">
            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Address</div>
                <div className="contact-value">{contactInfo.address || "Hingna Road, Near Main Bus Stop"}, {contactInfo.city || "Hingna, Nagpur – 441110"}</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">{contactInfo.phone || "+91 98765 43210"}</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">{contactInfo.email || "info@sarvodayavk.edu.in"}</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">⏰</div>
              <div>
                <div className="contact-label">Office Hours</div>
                <div className="contact-value">{contactInfo.officeHours || "Mon – Sat, 8:00 AM – 2:30 PM"}</div>
              </div>
            </div>
            <div className="social-row">
              {contactInfo.facebookUrl && (
                <a href={contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook">📘</a>
              )}
              {contactInfo.instagramUrl && (
                <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">📸</a>
              )}
              {contactInfo.twitterUrl && (
                <a href={contactInfo.twitterUrl} target="_blank" rel="noopener noreferrer" className="social-btn" title="Twitter">🐦</a>
              )}
              {contactInfo.whatsappNum && (
                <a href={`https://wa.me/${contactInfo.whatsappNum}`} target="_blank" rel="noopener noreferrer" className="social-btn" title="WhatsApp">💬</a>
              )}
              {!contactInfo.facebookUrl && !contactInfo.instagramUrl && !contactInfo.twitterUrl && !contactInfo.whatsappNum && (
                <>
                  <a href="#" className="social-btn" title="Facebook">📘</a>
                  <a href="#" className="social-btn" title="Instagram">📸</a>
                  <a href="#" className="social-btn" title="WhatsApp">💬</a>
                </>
              )}
            </div>
            <div style={{ marginTop: "24px" }}>
              <Link to="/contact"><button className="btn-primary">Contact Us →</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <div className="cta-banner">
        <div className="cta-title">Admissions Open for Session 2026–27</div>
        <div className="cta-desc">
          Secure your child's future at Sarvodaya Vidyalaya. Limited seats available for Science and Commerce streams. Apply today before the deadline!
        </div>
        <div className="cta-actions">
          <Link to="/contact#admission"><button className="btn-white">Apply for Admission</button></Link>
          <Link to="/contact"><button className="btn-white-outline">Contact Admissions</button></Link>
        </div>
      </div>

    </>
  );
}