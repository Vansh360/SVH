import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:        #0a1628;
    --navy-mid:    #142240;
    --gold:        #c9922a;
    --gold-light:  #e8b84b;
    --gold-dim:    rgba(201,146,42,0.12);
    --cream:       #faf7f2;
    --white:       #ffffff;
    --muted:       #6b7a99;
    --border:      rgba(0,0,0,0.07);
    --danger:      #e53e3e;
    --danger-dim:  rgba(229,62,62,0.08);
    --success:     #38a169;
    --success-dim: rgba(56,161,105,0.1);
  }

  *, *::before, *::after { box-sizing: border-box; }

  .adm-wrap {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ── TOP BAR ── */
  .adm-topbar {
    background: var(--navy); padding: 0 5vw; height: 64px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, transparent, var(--gold), transparent) 1;
    position: sticky; top: 0; z-index: 200;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
    flex-shrink: 0;
  }
  .adm-topbar-left { display: flex; align-items: center; gap: 14px; }
  .adm-logo-box {
    width: 38px; height: 38px; border-radius: 9px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: 0.9rem; font-weight: 900;
    color: var(--white); box-shadow: 0 2px 10px rgba(201,146,42,0.3);
    flex-shrink: 0;
  }
  .adm-topbar-title { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: var(--white); }
  .adm-topbar-sub { font-size: 0.7rem; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
  .adm-topbar-right { display: flex; align-items: center; gap: 12px; }
  .adm-time { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
  .adm-logout-btn {
    display: flex; align-items: center; gap: 7px;
    background: rgba(229,62,62,0.12); border: 1px solid rgba(229,62,62,0.25);
    color: #fc8181; padding: 8px 16px; border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
  }
  .adm-logout-btn:hover { background: rgba(229,62,62,0.22); color: #feb2b2; }

  /* ── LAYOUT: sidebar + content ── */
  .adm-layout {
    display: flex;
    flex: 1;
    overflow: hidden;
    height: calc(100vh - 64px);
  }

  /* ── SIDEBAR ── */
  .adm-sidebar {
    width: 220px;
    flex-shrink: 0;
    background: var(--navy);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .adm-sidebar-section {
    padding: 18px 14px 6px;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
  }

  .adm-tab-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 11px 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.83rem;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    text-align: left;
    border-radius: 9px;
    margin: 1px 6px;
    width: calc(100% - 12px);
    transition: all 0.18s;
    position: relative;
  }
  .adm-tab-btn:hover {
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.85);
  }
  .adm-tab-btn.active {
    background: var(--gold-dim);
    color: var(--gold-light);
    font-weight: 600;
  }
  .adm-tab-btn.active::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    transform: translateY(-50%);
    width: 3px; height: 60%;
    background: var(--gold);
    border-radius: 0 3px 3px 0;
  }
  .adm-tab-icon { font-size: 1rem; flex-shrink: 0; }
  .adm-tab-badge {
    margin-left: auto;
    background: rgba(201,146,42,0.2);
    color: var(--gold-light);
    font-size: 0.68rem;
    font-weight: 700;
    padding: 1px 7px;
    border-radius: 20px;
    flex-shrink: 0;
  }

  /* ── STATS BAR at bottom of sidebar ── */
  .adm-sidebar-stats {
    margin-top: auto;
    padding: 14px 12px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .adm-sidebar-stat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.35);
  }
  .adm-sidebar-stat strong {
    color: rgba(255,255,255,0.7);
    font-weight: 600;
  }

  /* ── MAIN CONTENT AREA ── */
  .adm-content {
    flex: 1;
    overflow-y: auto;
    padding: 28px 32px;
    background: var(--cream);
  }

  .adm-tab-header {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .adm-tab-header-left {}
  .adm-tab-label {
    font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--gold); font-weight: 600; margin-bottom: 4px;
  }
  .adm-tab-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem; font-weight: 900; color: var(--navy);
  }

  /* GRIDS */
  .adm-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .adm-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

  /* PANEL */
  .adm-panel {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 18px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .adm-panel-head {
    background: var(--navy); padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
  }
  .adm-panel-head h3 {
    font-family: 'Playfair Display', serif; font-size: 0.92rem;
    font-weight: 700; color: var(--white); flex: 1;
  }
  .adm-panel-badge {
    background: var(--gold-dim); border: 1px solid rgba(201,146,42,0.3);
    color: var(--gold-light); font-size: 0.7rem; font-weight: 600;
    padding: 2px 10px; border-radius: 20px;
  }
  .adm-panel-body { padding: 18px 20px; }

  /* INPUTS */
  .adm-input-row { display: flex; gap: 10px; margin-bottom: 14px; }
  .adm-input {
    flex: 1; padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.85rem; color: var(--navy);
    background: #fafbfc; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
  }
  .adm-input::placeholder { color: #b0bac8; }
  .adm-input:focus { border-color: var(--gold); background: var(--white); box-shadow: 0 0 0 3px rgba(201,146,42,0.1); }
  textarea.adm-input { resize: vertical; min-height: 90px; line-height: 1.6; }

  .adm-field-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .adm-field-label { font-size: 0.74rem; font-weight: 600; color: var(--navy); text-transform: uppercase; letter-spacing: 0.04em; }
  .adm-field-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }

  /* BUTTONS */
  .adm-btn-add {
    background: var(--navy); color: var(--white); border: none;
    padding: 10px 18px; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; white-space: nowrap; transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 6px;
  }
  .adm-btn-add:hover { background: var(--navy-mid); transform: translateY(-1px); }

  .adm-btn-gold {
    background: var(--gold); color: var(--white); border: none;
    padding: 10px 18px; border-radius: 9px;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
    cursor: pointer; white-space: nowrap; transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 6px;
  }
  .adm-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }

  .adm-btn-del {
    background: var(--danger-dim); border: 1px solid rgba(229,62,62,0.18);
    color: var(--danger); padding: 5px 11px; border-radius: 7px;
    font-family: 'DM Sans', sans-serif; font-size: 0.75rem; font-weight: 600;
    cursor: pointer; transition: all 0.18s; white-space: nowrap;
  }
  .adm-btn-del:hover { background: rgba(229,62,62,0.16); border-color: rgba(229,62,62,0.4); }

  .adm-save-row { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 10px; }
  .adm-save-badge {
    font-size: 0.75rem; color: var(--success); font-weight: 600;
    background: var(--success-dim); border: 1px solid rgba(56,161,105,0.2);
    padding: 4px 12px; border-radius: 20px; display: flex; align-items: center; gap: 6px;
  }

  /* LIST */
  .adm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .adm-list-item {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: 10px 14px; background: #f8fafc; border: 1px solid #edf2f7;
    border-radius: 9px; font-size: 0.85rem; color: var(--navy); transition: background 0.15s;
  }
  .adm-list-item:hover { background: #f0f4f8; }
  .adm-list-item span { flex: 1; line-height: 1.4; }
  .adm-list-empty { text-align: center; padding: 24px; font-size: 0.83rem; color: var(--muted); }

  /* GALLERY */
  .adm-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 14px; }
  .adm-gallery-item { position: relative; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); aspect-ratio: 1; background: #f0f4f8; }
  .adm-gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .adm-gallery-del {
    position: absolute; top: 6px; right: 6px;
    background: rgba(229,62,62,0.85); color: white; border: none;
    width: 26px; height: 26px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;
    cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.18s;
  }
  .adm-gallery-del:hover { background: var(--danger); }
  .adm-file-zone {
    border: 2px dashed #cbd5e0; border-radius: 10px; padding: 18px 14px;
    text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s;
    background: #fafbfc; margin-bottom: 10px; display: block;
  }
  .adm-file-zone:hover { border-color: var(--gold); background: var(--gold-dim); }
  .adm-file-zone input { display: none; }
  .adm-file-zone-label { font-size: 0.82rem; color: var(--muted); cursor: pointer; display: block; }
  .adm-file-zone-label strong { color: var(--gold); }
  .adm-file-selected { font-size: 0.78rem; color: var(--success); margin-top: 4px; font-weight: 500; }

  /* BROCHURE STATUS */
  .adm-brochure-active {
    margin-top: 14px; padding: 14px 16px;
    background: rgba(56,161,105,0.07); border: 1px solid rgba(56,161,105,0.22);
    border-radius: 10px; display: flex; align-items: center; gap: 12px;
  }
  .adm-brochure-none {
    margin-top: 14px; padding: 14px 16px; background: #f8fafc;
    border: 1.5px dashed #cbd5e0; border-radius: 10px;
    text-align: center; font-size: 0.83rem; color: var(--muted);
  }
  .adm-brochure-icon {
    width: 40px; height: 40px; border-radius: 9px;
    background: rgba(56,161,105,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
  }
  .adm-brochure-info { flex: 1; }
  .adm-brochure-name { font-size: 0.85rem; font-weight: 600; color: var(--navy); }
  .adm-brochure-hint { font-size: 0.75rem; color: var(--success); margin-top: 2px; }

  /* TABLE */
  .adm-table-wrap { overflow-x: auto; margin-top: 16px; border-radius: 12px; border: 1px solid var(--border); }
  .adm-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
  .adm-table thead tr { background: var(--navy); }
  .adm-table thead th { padding: 13px 16px; text-align: left; font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.07em; white-space: nowrap; }
  .adm-table tbody tr { border-bottom: 1px solid #f0f4f8; transition: background 0.15s; }
  .adm-table tbody tr:hover { background: #f8fafc; }
  .adm-table tbody tr:last-child { border-bottom: none; }
  .adm-table td { padding: 12px 16px; color: var(--navy); vertical-align: top; line-height: 1.5; }
  .adm-table td.muted { color: var(--muted); font-size: 0.82rem; }
  .stream-badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 600; background: var(--gold-dim); color: var(--gold); border: 1px solid rgba(201,146,42,0.2); white-space: nowrap; }
  .adm-search-row { display: flex; gap: 10px; align-items: center; margin-bottom: 4px; }

  /* OVERVIEW STAT CARDS */
  .adm-overview-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .adm-ov-card {
    background: var(--white); border: 1px solid var(--border); border-radius: 16px;
    padding: 20px; display: flex; align-items: center; gap: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04); transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .adm-ov-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .adm-ov-icon { width: 46px; height: 46px; border-radius: 12px; background: var(--gold-dim); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
  .adm-ov-num { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 900; color: var(--navy); line-height: 1; }
  .adm-ov-label { font-size: 0.71rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 3px; }
  .adm-ov-hint { font-size: 0.7rem; color: var(--gold); margin-top: 2px; font-weight: 500; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .adm-layout { flex-direction: column; height: auto; overflow: visible; }
    .adm-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; height: auto; overflow-x: auto; padding: 8px; gap: 4px; }
    .adm-sidebar-section { display: none; }
    .adm-tab-btn { width: auto; white-space: nowrap; margin: 0; padding: 8px 14px; }
    .adm-tab-btn.active::before { display: none; }
    .adm-sidebar-stats { display: none; }
    .adm-content { padding: 20px 16px; overflow-y: visible; }
    .adm-grid-3 { grid-template-columns: 1fr 1fr; }
    .adm-overview-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .adm-grid-3, .adm-grid-2 { grid-template-columns: 1fr; }
    .adm-field-row-2 { grid-template-columns: 1fr; }
    .adm-gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .adm-overview-grid { grid-template-columns: repeat(2, 1fr); }
    .adm-content { padding: 16px 12px; }
  }
`;

// ── Panel component OUTSIDE AdminDashboard to prevent re-mount on every keystroke ──
function Panel({ icon, title, count, children }) {
  return (
    <div className="adm-panel">
      <div className="adm-panel-head">
        <span>{icon}</span>
        <h3>{title}</h3>
        {count !== undefined && <span className="adm-panel-badge">{count}</span>}
      </div>
      <div className="adm-panel-body">{children}</div>
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();

  // ── Active tab ──
  const [activeTab, setActiveTab] = useState("overview");

  // ── Content states ──
  const [notice,   setNotice]   = useState("");
  const [event,    setEvent]    = useState("");
  const [academic, setAcademic] = useState("");
  const [notices,    setNotices]    = useState([]);
  const [events,     setEvents]     = useState([]);
  const [academics,  setAcademics]  = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [gallery,    setGallery]    = useState([]);
  const [imageFile,  setImageFile]  = useState(null);
  const [search,     setSearch]     = useState("");
  const [clock,      setClock]      = useState("");
  const [newsEnabled, setNewsEnabled] = useState(true);

  // ── Brochure states ──
  const [brochureName, setBrochureName] = useState(localStorage.getItem("brochureName") || "");
  const [brochureFile, setBrochureFile] = useState(null);
  const [brochureSaved, setBrochureSaved] = useState(false);

  // ── Management states ──
  const [mgmtList, setMgmtList] = useState([]);
  const [mgmtForm, setMgmtForm] = useState({ name: "", role: "", message: "", img: "" });
  const [mgmtSaved, setMgmtSaved] = useState(false);

  // ── Teachers states ──
  const [teacherList, setTeacherList] = useState([]);
  const [teacherForm, setTeacherForm] = useState({ name: "", subject: "", experience: "", img: "" });
  const [teacherSaved, setTeacherSaved] = useState(false);

  // ── Success stories states ──
  const [successList, setSuccessList] = useState([]);
  const [successForm, setSuccessForm] = useState({ name: "", achievement: "", year: "", img: "" });
  const [successSaved, setSuccessSaved] = useState(false);

  // ── Principal states ──
  const [p, setP] = useState({
    name: "", role: "Principal", photo: "/principal.jpg",
    qualification: "", experience: "", joined: "", school: "Sarvodaya Vidyalaya",
    message: "", quote: "",
    stat1num: "25+",  stat1label: "Years Experience",
    stat2num: "5000+",stat2label: "Students Guided",
    stat3num: "100%", stat3label: "Board Results",
    stat4num: "30+",  stat4label: "Awards Won",
  });
  const [pSaved, setPSaved] = useState(false);

  // ── Contact states ──
  const [c, setC] = useState({
    phone: "", email: "", address: "", city: "",
    officeHours: "Mon – Sat, 8:00 AM – 2:30 PM",
    facebookUrl: "", twitterUrl: "", instagramUrl: "", whatsappNum: "",
    mapSrc: "https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed",
  });
  const [cSaved, setCSaved] = useState(false);

  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://svv-school-backend.onrender.com";

  // ── Clock ──
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // ── Load all localStorage ──
  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) navigate("/admin");
    setNotices(  JSON.parse(localStorage.getItem("notices"))   || []);
    setEvents(   JSON.parse(localStorage.getItem("events"))    || []);
    setAcademics(JSON.parse(localStorage.getItem("academics")) || []);
    setGallery(  JSON.parse(localStorage.getItem("gallery"))   || []);
    const savedMgmt = JSON.parse(localStorage.getItem("managementList") || "[]");
    if (savedMgmt.length > 0) setMgmtList(savedMgmt);
    const savedTeachers = JSON.parse(localStorage.getItem("teacherList") || "[]");
    if (savedTeachers.length > 0) setTeacherList(savedTeachers);
    const savedSuccess = JSON.parse(localStorage.getItem("successList") || "[]");
    if (savedSuccess.length > 0) setSuccessList(savedSuccess);
    const saved = JSON.parse(localStorage.getItem("principalInfo") || "{}");
    if (Object.keys(saved).length > 0) setP(prev => ({ ...prev, ...saved }));
    const savedC = JSON.parse(localStorage.getItem("contactInfo") || "{}");
    if (Object.keys(savedC).length > 0) setC(prev => ({ ...prev, ...savedC }));
    const savedNews = localStorage.getItem("newsAlertEnabled");
    if (savedNews !== null) setNewsEnabled(savedNews === "true");
  }, [navigate]);

  // ── Fetch admissions ──
  useEffect(() => {
    fetch(`${API_URL}/api/admissions`)
      .then(r => r.json())
      .then(d => setAdmissions(d))
      .catch(err => console.log(err));
  }, []);

  // ── Notices ──
  const addNotice = () => {
    if (!notice.trim()) return;
    const updated = [...notices, notice.trim()];
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
    setNotice("");
    window.dispatchEvent(new Event("noticesUpdated"));
  };
  const deleteNotice = (i) => {
    const updated = notices.filter((_, idx) => idx !== i);
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
    window.dispatchEvent(new Event("noticesUpdated"));
  };

  // ── Generic ──
  const addItem = (val, list, setList, key, clear) => {
    if (!val.trim()) return;
    const updated = [...list, val.trim()];
    setList(updated); localStorage.setItem(key, JSON.stringify(updated)); clear("");
  };
  const delItem = (i, list, setList, key) => {
    const updated = list.filter((_, idx) => idx !== i);
    setList(updated); localStorage.setItem(key, JSON.stringify(updated));
  };

  const addEvent    = () => addItem(event,    events,    setEvents,    "events",    setEvent);
  const addAcademic = () => addItem(academic, academics, setAcademics, "academics", setAcademic);
  const deleteEvent    = i => delItem(i, events,    setEvents,    "events");
  const deleteAcademic = i => delItem(i, academics, setAcademics, "academics");

  const toggleNewsAlert = () => {
    const next = !newsEnabled;
    setNewsEnabled(next);
    localStorage.setItem("newsAlertEnabled", String(next));
    window.dispatchEvent(new Event("newsAlertToggled"));
  };

  // ── Gallery ──
  const uploadImage = () => {
    if (!imageFile) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = [...gallery, reader.result];
      setGallery(updated); localStorage.setItem("gallery", JSON.stringify(updated)); setImageFile(null);
    };
    reader.readAsDataURL(imageFile);
  };
  const deleteGallery = i => {
    const updated = gallery.filter((_, idx) => idx !== i);
    setGallery(updated); localStorage.setItem("gallery", JSON.stringify(updated));
  };

  // ── Brochure ──
  const uploadBrochure = () => {
    if (!brochureFile) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("brochureData", reader.result);
      localStorage.setItem("brochureName", brochureFile.name);
      setBrochureName(brochureFile.name);
      setBrochureFile(null);
      setBrochureSaved(true);
      setTimeout(() => setBrochureSaved(false), 3000);
      window.dispatchEvent(new Event("brochureUpdated"));
    };
    reader.readAsDataURL(brochureFile);
  };
  const removeBrochure = () => {
    localStorage.removeItem("brochureData");
    localStorage.removeItem("brochureName");
    setBrochureName("");
    setBrochureFile(null);
    window.dispatchEvent(new Event("brochureUpdated"));
  };

  // ── Management ──
  const addMgmt = () => {
    if (!mgmtForm.name.trim() || !mgmtForm.role.trim()) return;
    const updated = [...mgmtList, { ...mgmtForm }];
    setMgmtList(updated); localStorage.setItem("managementList", JSON.stringify(updated));
    setMgmtForm({ name: "", role: "", message: "", img: "" });
    setMgmtSaved(true); setTimeout(() => setMgmtSaved(false), 3000);
  };
  const delMgmt = i => {
    const updated = mgmtList.filter((_, idx) => idx !== i);
    setMgmtList(updated); localStorage.setItem("managementList", JSON.stringify(updated));
  };

  // ── Teachers ──
  const addTeacher = () => {
    if (!teacherForm.name.trim() || !teacherForm.subject.trim()) return;
    const updated = [...teacherList, { ...teacherForm }];
    setTeacherList(updated); localStorage.setItem("teacherList", JSON.stringify(updated));
    setTeacherForm({ name: "", subject: "", experience: "", img: "" });
    setTeacherSaved(true); setTimeout(() => setTeacherSaved(false), 3000);
  };
  const delTeacher = i => {
    const updated = teacherList.filter((_, idx) => idx !== i);
    setTeacherList(updated); localStorage.setItem("teacherList", JSON.stringify(updated));
  };

  // ── Success ──
  const addSuccess = () => {
    if (!successForm.name.trim() || !successForm.achievement.trim()) return;
    const updated = [...successList, { ...successForm }];
    setSuccessList(updated); localStorage.setItem("successList", JSON.stringify(updated));
    setSuccessForm({ name: "", achievement: "", year: "", img: "" });
    setSuccessSaved(true); setTimeout(() => setSuccessSaved(false), 3000);
  };
  const delSuccess = i => {
    const updated = successList.filter((_, idx) => idx !== i);
    setSuccessList(updated); localStorage.setItem("successList", JSON.stringify(updated));
  };

  // ── Save ──
  const savePrincipal = () => {
    localStorage.setItem("principalInfo", JSON.stringify(p));
    setPSaved(true); setTimeout(() => setPSaved(false), 3000);
  };
  const saveContact = () => {
    localStorage.setItem("contactInfo", JSON.stringify(c));
    setCSaved(true); setTimeout(() => setCSaved(false), 3000);
  };

  // ── Logout & CSV ──
  const logout = () => { localStorage.removeItem("adminAuth"); navigate("/admin"); };
  const exportCSV = () => {
    const rows = admissions.map(a =>
      `"${a.name}","${a.email}","${a.phone}","${a.stream || ""}","${a.message || ""}"`
    );
    const csv  = "Name,Email,Phone,Stream,Message\n" + rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = window.URL.createObjectURL(blob);
    const el   = document.createElement("a");
    el.href = url; el.download = "admissions.csv"; el.click();
  };

  const filteredAdmissions = admissions.filter(a =>
    a.name?.toLowerCase().includes(search.toLowerCase())
  );

  // ── Tab definitions ──
  const tabs = [
    { id: "overview",    icon: "📊", label: "Overview" },
    { id: "news",        icon: "📢", label: "News & Alerts",  badge: notices.length },
    { id: "events",      icon: "📅", label: "Events",         badge: events.length },
    { id: "academics",   icon: "📚", label: "Academics",      badge: academics.length },
    { id: "gallery",     icon: "🖼️", label: "Gallery",        badge: gallery.length },
    { id: "brochure",    icon: "📄", label: "Brochure" },
    { id: "admissions",  icon: "🎓", label: "Admissions",     badge: admissions.length },
    { id: "principal",   icon: "👩‍💼", label: "Principal" },
    { id: "contact",     icon: "📍", label: "Contact" },
    { id: "management",  icon: "👔", label: "Management",     badge: mgmtList.length },
    { id: "teachers",    icon: "🧑‍🏫", label: "Teachers",      badge: teacherList.length },
    { id: "success",     icon: "🏆", label: "Success Stories",badge: successList.length },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="adm-wrap">

        {/* ── TOP BAR ── */}
        <div className="adm-topbar">
          <div className="adm-topbar-left">
            <div className="adm-logo-box">SVK</div>
            <div>
              <div className="adm-topbar-title">Admin Dashboard</div>
              <div className="adm-topbar-sub">Sarvodaya Vidyalaya</div>
            </div>
          </div>
          <div className="adm-topbar-right">
            <span className="adm-time">🕐 {clock}</span>
            <button className="adm-logout-btn" onClick={logout}>⬠ Logout</button>
          </div>
        </div>

        {/* ── LAYOUT ── */}
        <div className="adm-layout">

          {/* ── SIDEBAR ── */}
          <div className="adm-sidebar">
            <div className="adm-sidebar-section">Navigation</div>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`adm-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="adm-tab-icon">{tab.icon}</span>
                {tab.label}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="adm-tab-badge">{tab.badge}</span>
                )}
              </button>
            ))}

            {/* Sidebar quick stats */}
            <div className="adm-sidebar-stats">
              <div className="adm-sidebar-stat">
                <span>Total Items</span>
                <strong>{notices.length + events.length + academics.length + gallery.length}</strong>
              </div>
              <div className="adm-sidebar-stat">
                <span>Admissions</span>
                <strong>{admissions.length}</strong>
              </div>
              <div className="adm-sidebar-stat">
                <span>News Ticker</span>
                <strong style={{ color: newsEnabled ? "#68d391" : "#fc8181" }}>
                  {newsEnabled ? "ON" : "OFF"}
                </strong>
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="adm-content">

            {/* ══════════════ OVERVIEW ══════════════ */}
            {activeTab === "overview" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Dashboard</div>
                    <div className="adm-tab-title">Overview</div>
                  </div>
                </div>
                <div className="adm-overview-grid">
                  {[
                    { icon: "📢", label: "Notices",     num: notices.length,    hint: "Click to manage", tab: "news" },
                    { icon: "📅", label: "Events",      num: events.length,     hint: "Click to manage", tab: "events" },
                    { icon: "📚", label: "Academics",   num: academics.length,  hint: "Click to manage", tab: "academics" },
                    { icon: "🖼️", label: "Gallery",     num: gallery.length,    hint: "Click to manage", tab: "gallery" },
                    { icon: "🎓", label: "Admissions",  num: admissions.length, hint: "Click to view",   tab: "admissions" },
                    { icon: "👔", label: "Management",  num: mgmtList.length,   hint: "Click to manage", tab: "management" },
                    { icon: "🧑‍🏫", label: "Teachers",   num: teacherList.length,hint: "Click to manage", tab: "teachers" },
                    { icon: "🏆", label: "Success",     num: successList.length,hint: "Click to manage", tab: "success" },
                  ].map(s => (
                    <div className="adm-ov-card" key={s.label} onClick={() => setActiveTab(s.tab)}>
                      <div className="adm-ov-icon">{s.icon}</div>
                      <div>
                        <div className="adm-ov-num">{s.num}</div>
                        <div className="adm-ov-label">{s.label}</div>
                        <div className="adm-ov-hint">{s.hint} →</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick info cards */}
                <div className="adm-grid-2" style={{ marginTop: "8px" }}>
                  <Panel icon="🔔" title="News Ticker Status" count={newsEnabled ? "ON" : "OFF"}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px" }}>
                      <span style={{ color: "var(--muted)", fontSize: "0.88rem" }}>
                        {newsEnabled ? "Visitors currently see the scrolling news ticker." : "The news ticker is hidden from the website."}
                      </span>
                      <button
                        className={newsEnabled ? "adm-btn-del" : "adm-btn-gold"}
                        onClick={toggleNewsAlert}
                        style={{ minWidth: "110px" }}
                      >
                        {newsEnabled ? "Turn Off" : "Turn On"}
                      </button>
                    </div>
                  </Panel>
                  <Panel icon="📄" title="Brochure Status" count={brochureName ? "Uploaded" : "None"}>
                    <div style={{ fontSize: "0.88rem", color: "var(--muted)" }}>
                      {brochureName
                        ? <span style={{ color: "var(--success)", fontWeight: 600 }}>📄 {brochureName} — Live on navbar</span>
                        : "No brochure uploaded. Go to the Brochure tab to upload a PDF."
                      }
                    </div>
                    <button
                      className="adm-btn-gold"
                      onClick={() => setActiveTab("brochure")}
                      style={{ marginTop: "12px", fontSize: "0.78rem", padding: "7px 14px" }}
                    >
                      Manage Brochure →
                    </button>
                  </Panel>
                </div>
              </div>
            )}

            {/* ══════════════ NEWS & ALERTS ══════════════ */}
            {activeTab === "news" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Content</div>
                    <div className="adm-tab-title">News & Alerts</div>
                  </div>
                  <button
                    className={newsEnabled ? "adm-btn-del" : "adm-btn-gold"}
                    onClick={toggleNewsAlert}
                    style={{ minWidth: "130px" }}
                  >
                    Ticker: {newsEnabled ? "ON — Turn Off" : "OFF — Turn On"}
                  </button>
                </div>
                <Panel icon="📢" title="News Ticker Items" count={notices.length}>
                  <div className="adm-input-row">
                    <input
                      className="adm-input" type="text" placeholder="Enter news item..."
                      value={notice} onChange={e => setNotice(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && addNotice()}
                    />
                    <button className="adm-btn-add" onClick={addNotice}>+ Add</button>
                  </div>
                  <p style={{ marginBottom: "12px", color: "var(--muted)", fontSize: "0.84rem" }}>
                    These messages appear in the scrolling ticker at the top of the public site.
                  </p>
                  <ul className="adm-list">
                    {notices.length === 0 && <div className="adm-list-empty">No news items yet</div>}
                    {notices.map((n, i) => (
                      <li className="adm-list-item" key={i}>
                        <span>{n}</span>
                        <button className="adm-btn-del" onClick={() => deleteNotice(i)}>✕</button>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            )}

            {/* ══════════════ EVENTS ══════════════ */}
            {activeTab === "events" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Content</div>
                    <div className="adm-tab-title">Events</div>
                  </div>
                </div>
                <Panel icon="📅" title="Events" count={events.length}>
                  <div className="adm-input-row">
                    <input className="adm-input" type="text" placeholder="Enter event..."
                      value={event} onChange={e => setEvent(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && addEvent()} />
                    <button className="adm-btn-add" onClick={addEvent}>+ Add</button>
                  </div>
                  <ul className="adm-list">
                    {events.length === 0 && <div className="adm-list-empty">No events yet</div>}
                    {events.map((ev, i) => (
                      <li className="adm-list-item" key={i}>
                        <span>{ev}</span>
                        <button className="adm-btn-del" onClick={() => deleteEvent(i)}>✕</button>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            )}

            {/* ══════════════ ACADEMICS ══════════════ */}
            {activeTab === "academics" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Content</div>
                    <div className="adm-tab-title">Academics</div>
                  </div>
                </div>
                <Panel icon="📚" title="Academics" count={academics.length}>
                  <div className="adm-input-row">
                    <input className="adm-input" type="text" placeholder="Enter academic info..."
                      value={academic} onChange={e => setAcademic(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && addAcademic()} />
                    <button className="adm-btn-add" onClick={addAcademic}>+ Add</button>
                  </div>
                  <ul className="adm-list">
                    {academics.length === 0 && <div className="adm-list-empty">No items yet</div>}
                    {academics.map((a, i) => (
                      <li className="adm-list-item" key={i}>
                        <span>{a}</span>
                        <button className="adm-btn-del" onClick={() => deleteAcademic(i)}>✕</button>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>
            )}

            {/* ══════════════ GALLERY ══════════════ */}
            {activeTab === "gallery" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Media</div>
                    <div className="adm-tab-title">Gallery</div>
                  </div>
                </div>
                <Panel icon="🖼️" title="Gallery" count={gallery.length}>
                  <label className="adm-file-zone">
                    <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
                    <span className="adm-file-zone-label">
                      {imageFile
                        ? <span className="adm-file-selected">✅ {imageFile.name}</span>
                        : <><strong>Click to choose</strong> an image to upload</>
                      }
                    </span>
                  </label>
                  <button
                    className="adm-btn-gold" onClick={uploadImage} disabled={!imageFile}
                    style={{ opacity: imageFile ? 1 : 0.5, cursor: imageFile ? "pointer" : "not-allowed", marginBottom: "8px" }}
                  >
                    ⬆ Upload Image
                  </button>
                  <div className="adm-gallery-grid">
                    {gallery.length === 0 && (
                      <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "30px", color: "var(--muted)", fontSize: "0.83rem" }}>
                        No images uploaded yet
                      </div>
                    )}
                    {gallery.map((img, i) => (
                      <div className="adm-gallery-item" key={i}>
                        <img src={img} alt={`gallery-${i}`} />
                        <button className="adm-gallery-del" onClick={() => deleteGallery(i)}>✕</button>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            )}

            {/* ══════════════ BROCHURE ══════════════ */}
            {activeTab === "brochure" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Media</div>
                    <div className="adm-tab-title">School Brochure</div>
                  </div>
                </div>
                <Panel icon="📄" title="Download Brochure — activates the navbar button" count={brochureName ? "Uploaded" : "None"}>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "14px" }}>
                    Upload a PDF here. Once uploaded, the <strong style={{ color: "var(--navy)" }}>Download Brochure</strong> button
                    in the navbar becomes active for visitors.
                  </p>
                  <label className="adm-file-zone">
                    <input type="file" accept="application/pdf" onChange={e => setBrochureFile(e.target.files[0])} />
                    <span className="adm-file-zone-label">
                      {brochureFile
                        ? <span className="adm-file-selected">✅ {brochureFile.name}</span>
                        : <><strong>Click to choose</strong> a PDF brochure to upload</>
                      }
                    </span>
                  </label>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                    <button
                      className="adm-btn-gold" onClick={uploadBrochure} disabled={!brochureFile}
                      style={{ opacity: brochureFile ? 1 : 0.5, cursor: brochureFile ? "pointer" : "not-allowed" }}
                    >
                      ⬆ Upload Brochure
                    </button>
                    {brochureName && (
                      <button className="adm-btn-del" onClick={removeBrochure}>✕ Remove</button>
                    )}
                    {brochureSaved && <span className="adm-save-badge">✅ Uploaded! Navbar button is now active.</span>}
                  </div>
                  {brochureName ? (
                    <div className="adm-brochure-active">
                      <div className="adm-brochure-icon">📄</div>
                      <div className="adm-brochure-info">
                        <div className="adm-brochure-name">{brochureName}</div>
                        <div className="adm-brochure-hint">✅ Live — visitors can download from the navbar</div>
                      </div>
                    </div>
                  ) : (
                    <div className="adm-brochure-none">
                      No brochure uploaded yet — navbar button will appear dimmed.
                    </div>
                  )}
                </Panel>
              </div>
            )}

            {/* ══════════════ ADMISSIONS ══════════════ */}
            {activeTab === "admissions" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Students</div>
                    <div className="adm-tab-title">Admission Requests</div>
                  </div>
                  <button className="adm-btn-gold" onClick={exportCSV}>⬇ Export CSV</button>
                </div>
                <Panel icon="🎓" title="Admission Requests" count={filteredAdmissions.length}>
                  <div className="adm-search-row">
                    <input className="adm-input" type="text"
                      placeholder="🔍  Search student by name..."
                      value={search} onChange={e => setSearch(e.target.value)} />
                  </div>
                  <div className="adm-table-wrap">
                    <table className="adm-table">
                      <thead>
                        <tr><th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Stream</th><th>Message</th></tr>
                      </thead>
                      <tbody>
                        {filteredAdmissions.length === 0 ? (
                          <tr>
                            <td colSpan="6" style={{ textAlign: "center", padding: "28px", color: "var(--muted)" }}>
                              No admission requests found
                            </td>
                          </tr>
                        ) : (
                          filteredAdmissions.map((a, i) => (
                            <tr key={i}>
                              <td className="muted">{i + 1}</td>
                              <td><strong>{a.name}</strong></td>
                              <td className="muted">{a.email}</td>
                              <td className="muted">{a.phone}</td>
                              <td>
                                {a.stream
                                  ? <span className="stream-badge">{a.stream}</span>
                                  : <span style={{ color: "var(--muted)" }}>—</span>
                                }
                              </td>
                              <td>{a.message || <span style={{ color: "var(--muted)" }}>—</span>}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </Panel>
              </div>
            )}

            {/* ══════════════ PRINCIPAL ══════════════ */}
            {activeTab === "principal" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Staff</div>
                    <div className="adm-tab-title">Principal Info</div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    {pSaved && <span className="adm-save-badge">✅ Saved!</span>}
                    <button className="adm-btn-gold" onClick={savePrincipal}>💾 Save Changes</button>
                  </div>
                </div>
                <Panel icon="👩‍💼" title="Principal Info — reflects on /principal page">
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Full Name</label>
                      <input className="adm-input" placeholder="Dr. Sunita Sharma"
                        value={p.name} onChange={e => setP({ ...p, name: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Role / Title</label>
                      <input className="adm-input" placeholder="Principal"
                        value={p.role} onChange={e => setP({ ...p, role: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Qualification</label>
                      <input className="adm-input" placeholder="M.Sc., B.Ed., Ph.D."
                        value={p.qualification} onChange={e => setP({ ...p, qualification: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Experience</label>
                      <input className="adm-input" placeholder="25+ Years"
                        value={p.experience} onChange={e => setP({ ...p, experience: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Joined Since</label>
                      <input className="adm-input" placeholder="Since 2010"
                        value={p.joined} onChange={e => setP({ ...p, joined: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Photo Path</label>
                      <input className="adm-input" placeholder="/principal.jpg"
                        value={p.photo} onChange={e => setP({ ...p, photo: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-group">
                    <label className="adm-field-label">Message</label>
                    <textarea className="adm-input" style={{ minHeight: "120px" }}
                      placeholder="Write the principal's message here..."
                      value={p.message} onChange={e => setP({ ...p, message: e.target.value })} />
                  </div>
                  <div className="adm-field-group">
                    <label className="adm-field-label">Highlight Quote</label>
                    <input className="adm-input" placeholder="Education is not the filling of a pail..."
                      value={p.quote} onChange={e => setP({ ...p, quote: e.target.value })} />
                  </div>
                  <div className="adm-field-label" style={{ marginBottom: "10px" }}>Achievement Stats</div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 1 Number</label>
                      <input className="adm-input" placeholder="25+" value={p.stat1num} onChange={e => setP({ ...p, stat1num: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 1 Label</label>
                      <input className="adm-input" placeholder="Years Experience" value={p.stat1label} onChange={e => setP({ ...p, stat1label: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 2 Number</label>
                      <input className="adm-input" placeholder="5000+" value={p.stat2num} onChange={e => setP({ ...p, stat2num: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 2 Label</label>
                      <input className="adm-input" placeholder="Students Guided" value={p.stat2label} onChange={e => setP({ ...p, stat2label: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 3 Number</label>
                      <input className="adm-input" placeholder="100%" value={p.stat3num} onChange={e => setP({ ...p, stat3num: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 3 Label</label>
                      <input className="adm-input" placeholder="Board Results" value={p.stat3label} onChange={e => setP({ ...p, stat3label: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 4 Number</label>
                      <input className="adm-input" placeholder="30+" value={p.stat4num} onChange={e => setP({ ...p, stat4num: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Stat 4 Label</label>
                      <input className="adm-input" placeholder="Awards Won" value={p.stat4label} onChange={e => setP({ ...p, stat4label: e.target.value })} />
                    </div>
                  </div>
                </Panel>
              </div>
            )}

            {/* ══════════════ CONTACT ══════════════ */}
            {activeTab === "contact" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Settings</div>
                    <div className="adm-tab-title">Contact Info</div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    {cSaved && <span className="adm-save-badge">✅ Saved!</span>}
                    <button className="adm-btn-gold" onClick={saveContact}>💾 Save Changes</button>
                  </div>
                </div>
                <Panel icon="📍" title="Contact Info — reflects on /contact page">
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Phone Number</label>
                      <input className="adm-input" placeholder="+91 98765 43210"
                        value={c.phone} onChange={e => setC({ ...c, phone: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Email Address</label>
                      <input className="adm-input" placeholder="info@sarvodayavk.edu.in"
                        value={c.email} onChange={e => setC({ ...c, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Address</label>
                      <input className="adm-input" placeholder="Hingna Road, Near Main Bus Stop"
                        value={c.address} onChange={e => setC({ ...c, address: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">City / District</label>
                      <input className="adm-input" placeholder="Hingna, Nagpur – 441110"
                        value={c.city} onChange={e => setC({ ...c, city: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-group">
                    <label className="adm-field-label">Office Hours</label>
                    <input className="adm-input" placeholder="Mon – Sat, 8:00 AM – 2:30 PM"
                      value={c.officeHours} onChange={e => setC({ ...c, officeHours: e.target.value })} />
                  </div>
                  <div className="adm-field-label" style={{ marginBottom: "10px" }}>Social Media Links</div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Facebook URL</label>
                      <input className="adm-input" placeholder="https://facebook.com/yourpage"
                        value={c.facebookUrl} onChange={e => setC({ ...c, facebookUrl: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Twitter / X URL</label>
                      <input className="adm-input" placeholder="https://twitter.com/yourpage"
                        value={c.twitterUrl} onChange={e => setC({ ...c, twitterUrl: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Instagram URL</label>
                      <input className="adm-input" placeholder="https://instagram.com/yourpage"
                        value={c.instagramUrl} onChange={e => setC({ ...c, instagramUrl: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">WhatsApp Number</label>
                      <input className="adm-input" placeholder="919876543210"
                        value={c.whatsappNum} onChange={e => setC({ ...c, whatsappNum: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-group">
                    <label className="adm-field-label">Google Maps Embed URL</label>
                    <input className="adm-input" placeholder="https://www.google.com/maps?q=...&output=embed"
                      value={c.mapSrc} onChange={e => setC({ ...c, mapSrc: e.target.value })} />
                  </div>
                </Panel>
              </div>
            )}

            {/* ══════════════ MANAGEMENT ══════════════ */}
            {activeTab === "management" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Staff</div>
                    <div className="adm-tab-title">Management Team</div>
                  </div>
                </div>
                <Panel icon="👔" title="Management Team — reflects on /management page" count={mgmtList.length}>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Full Name</label>
                      <input className="adm-input" placeholder="Dr. A. Deshmukh"
                        value={mgmtForm.name} onChange={e => setMgmtForm({ ...mgmtForm, name: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Role / Title</label>
                      <input className="adm-input" placeholder="Chairman"
                        value={mgmtForm.role} onChange={e => setMgmtForm({ ...mgmtForm, role: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-group">
                    <label className="adm-field-label">Message / Quote</label>
                    <textarea className="adm-input"
                      placeholder="Our vision is to provide quality education..."
                      value={mgmtForm.message} onChange={e => setMgmtForm({ ...mgmtForm, message: e.target.value })} />
                  </div>
                  <div className="adm-field-group">
                    <label className="adm-field-label">Photo URL</label>
                    <input className="adm-input" placeholder="https://randomuser.me/api/portraits/men/11.jpg"
                      value={mgmtForm.img} onChange={e => setMgmtForm({ ...mgmtForm, img: e.target.value })} />
                  </div>
                  <div className="adm-save-row">
                    {mgmtSaved && <span className="adm-save-badge">✅ Member added!</span>}
                    <button className="adm-btn-gold" onClick={addMgmt}>+ Add Member</button>
                  </div>
                  {mgmtList.length > 0 ? (
                    <ul className="adm-list" style={{ marginTop: "16px" }}>
                      {mgmtList.map((m, i) => (
                        <li className="adm-list-item" key={i}>
                          {m.img && <img src={m.img} alt={m.name} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />}
                          <span><strong>{m.name}</strong> — {m.role}</span>
                          <button className="adm-btn-del" onClick={() => delMgmt(i)}>✕</button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="adm-list-empty">No management members added yet</div>
                  )}
                </Panel>
              </div>
            )}

            {/* ══════════════ TEACHERS ══════════════ */}
            {activeTab === "teachers" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Staff</div>
                    <div className="adm-tab-title">Teachers</div>
                  </div>
                </div>
                <Panel icon="🧑‍🏫" title="Teachers — reflects on /teachers page" count={teacherList.length}>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Full Name</label>
                      <input className="adm-input" placeholder="Mr. Rajesh Sharma"
                        value={teacherForm.name} onChange={e => setTeacherForm({ ...teacherForm, name: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Subject</label>
                      <input className="adm-input" placeholder="Mathematics"
                        value={teacherForm.subject} onChange={e => setTeacherForm({ ...teacherForm, subject: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Experience</label>
                      <input className="adm-input" placeholder="10+ Years"
                        value={teacherForm.experience} onChange={e => setTeacherForm({ ...teacherForm, experience: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Photo URL</label>
                      <input className="adm-input" placeholder="https://randomuser.me/api/portraits/men/32.jpg"
                        value={teacherForm.img} onChange={e => setTeacherForm({ ...teacherForm, img: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-save-row">
                    {teacherSaved && <span className="adm-save-badge">✅ Teacher added!</span>}
                    <button className="adm-btn-gold" onClick={addTeacher}>+ Add Teacher</button>
                  </div>
                  {teacherList.length > 0 ? (
                    <ul className="adm-list" style={{ marginTop: "16px" }}>
                      {teacherList.map((t, i) => (
                        <li className="adm-list-item" key={i}>
                          {t.img && <img src={t.img} alt={t.name} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />}
                          <span><strong>{t.name}</strong> — {t.subject} · {t.experience}</span>
                          <button className="adm-btn-del" onClick={() => delTeacher(i)}>✕</button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="adm-list-empty">No teachers added yet</div>
                  )}
                </Panel>
              </div>
            )}

            {/* ══════════════ SUCCESS STORIES ══════════════ */}
            {activeTab === "success" && (
              <div>
                <div className="adm-tab-header">
                  <div className="adm-tab-header-left">
                    <div className="adm-tab-label">Content</div>
                    <div className="adm-tab-title">Success Stories</div>
                  </div>
                </div>
                <Panel icon="🏆" title="Success Stories — reflects on /success page" count={successList.length}>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Student Name</label>
                      <input className="adm-input" placeholder="Rahul Verma"
                        value={successForm.name} onChange={e => setSuccessForm({ ...successForm, name: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Year</label>
                      <input className="adm-input" placeholder="2025"
                        value={successForm.year} onChange={e => setSuccessForm({ ...successForm, year: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-field-row-2">
                    <div className="adm-field-group">
                      <label className="adm-field-label">Achievement</label>
                      <input className="adm-input" placeholder="Selected in IIT Bombay"
                        value={successForm.achievement} onChange={e => setSuccessForm({ ...successForm, achievement: e.target.value })} />
                    </div>
                    <div className="adm-field-group">
                      <label className="adm-field-label">Photo URL</label>
                      <input className="adm-input" placeholder="https://randomuser.me/api/portraits/men/12.jpg"
                        value={successForm.img} onChange={e => setSuccessForm({ ...successForm, img: e.target.value })} />
                    </div>
                  </div>
                  <div className="adm-save-row">
                    {successSaved && <span className="adm-save-badge">✅ Story added!</span>}
                    <button className="adm-btn-gold" onClick={addSuccess}>+ Add Story</button>
                  </div>
                  {successList.length > 0 ? (
                    <ul className="adm-list" style={{ marginTop: "16px" }}>
                      {successList.map((s, i) => (
                        <li className="adm-list-item" key={i}>
                          {s.img && <img src={s.img} alt={s.name} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />}
                          <span><strong>{s.name}</strong> — {s.achievement} <span style={{ color: "var(--gold)", fontWeight: 600 }}>({s.year})</span></span>
                          <button className="adm-btn-del" onClick={() => delSuccess(i)}>✕</button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="adm-list-empty">No success stories added yet</div>
                  )}
                </Panel>
              </div>
            )}

          </div>{/* end adm-content */}
        </div>{/* end adm-layout */}
      </div>
    </>
  );
}