// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const [notice, setNotice] = useState("");
//   const [event, setEvent] = useState("");

//   const [notices, setNotices] = useState([]);
//   const [events, setEvents] = useState([]);

//   // Protect Route
//   useEffect(() => {
//     if (!localStorage.getItem("adminAuth")) {
//       navigate("/admin");
//     }

//     setNotices(JSON.parse(localStorage.getItem("notices")) || []);
//     setEvents(JSON.parse(localStorage.getItem("events")) || []);
//   }, [navigate]);

//   // Add Notice
//   const addNotice = () => {
//     if (!notice.trim()) return;

//     const newData = [...notices, notice];
//     setNotices(newData);
//     localStorage.setItem("notices", JSON.stringify(newData));
//     setNotice("");
//   };

//   // Add Event
//   const addEvent = () => {
//     if (!event.trim()) return;

//     const newData = [...events, event];
//     setEvents(newData);
//     localStorage.setItem("events", JSON.stringify(newData));
//     setEvent("");
//   };

//   // ✅ DELETE NOTICE
//   const deleteNotice = (index) => {
//     const updated = notices.filter((_, i) => i !== index);
//     setNotices(updated);
//     localStorage.setItem("notices", JSON.stringify(updated));
//   };

//   // ✅ DELETE EVENT
//   const deleteEvent = (index) => {
//     const updated = events.filter((_, i) => i !== index);
//     setEvents(updated);
//     localStorage.setItem("events", JSON.stringify(updated));
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("adminAuth");
//     navigate("/admin");
//   };

//   return (
//     <section>
//       <div className="title">
//         <h2>Admin Dashboard</h2>
//         <button className="logout-btn" onClick={logout}>
//           Logout
//         </button>
//       </div>

//       {/* Notices */}
//       <div className="admin-box">
//         <h3>Manage Notices</h3>

//         <input
//           type="text"
//           placeholder="Enter Notice"
//           value={notice}
//           onChange={(e) => setNotice(e.target.value)}
//         />

//         <button onClick={addNotice}>Add Notice</button>

//         <ul>
//           {notices.map((n, i) => (
//             <li key={i}>
//               {n}
//               <button
//                 onClick={() => deleteNotice(i)}
//                 style={{ marginLeft: "10px", color: "red" }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Events */}
//       <div className="admin-box">
//         <h3>Manage Events</h3>

//         <input
//           type="text"
//           placeholder="Enter Event"
//           value={event}
//           onChange={(e) => setEvent(e.target.value)}
//         />

//         <button onClick={addEvent}>Add Event</button>

//         <ul>
//           {events.map((e, i) => (
//             <li key={i}>
//               {e}
//               <button
//                 onClick={() => deleteEvent(i)}
//                 style={{ marginLeft: "10px", color: "red" }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:        #0a1628;
    --navy-mid:    #142240;
    --navy-light:  #1e3060;
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

  /* ── BASE ── */
  .adm-wrap {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
  }

  /* ── TOP BAR ── */
  .adm-topbar {
    background: var(--navy);
    padding: 0 5vw;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, transparent, var(--gold), transparent) 1;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  }
  .adm-topbar-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .adm-logo-box {
    width: 38px; height: 38px;
    border-radius: 9px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--white);
    box-shadow: 0 2px 10px rgba(201,146,42,0.3);
  }
  .adm-topbar-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--white);
  }
  .adm-topbar-sub {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.05em;
  }
  .adm-topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .adm-time {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
    font-weight: 400;
  }
  .adm-logout-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    background: rgba(229,62,62,0.12);
    border: 1px solid rgba(229,62,62,0.25);
    color: #fc8181;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .adm-logout-btn:hover {
    background: rgba(229,62,62,0.22);
    border-color: rgba(229,62,62,0.45);
    color: #feb2b2;
  }

  /* ── BODY ── */
  .adm-body {
    padding: 36px 5vw;
    max-width: 1280px;
    margin: 0 auto;
  }

  /* ── PAGE HEADING ── */
  .adm-page-heading {
    margin-bottom: 32px;
  }
  .adm-page-label {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 6px;
  }
  .adm-page-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--navy);
  }

  /* ── STAT CARDS ── */
  .adm-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }
  .adm-stat {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .adm-stat:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .adm-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  .adm-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.7rem;
    font-weight: 900;
    color: var(--navy);
    line-height: 1;
  }
  .adm-stat-label {
    font-size: 0.75rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 3px;
  }

  /* ── SECTION GRID ── */
  .adm-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }
  .adm-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  /* ── PANEL CARD ── */
  .adm-panel {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .adm-panel-head {
    background: var(--navy);
    padding: 16px 22px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .adm-panel-head h3 {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--white);
    flex: 1;
  }
  .adm-panel-badge {
    background: var(--gold-dim);
    border: 1px solid rgba(201,146,42,0.3);
    color: var(--gold-light);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 20px;
  }
  .adm-panel-body { padding: 20px 22px; }

  /* ── INPUT ROW ── */
  .adm-input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
  }
  .adm-input {
    flex: 1;
    padding: 10px 14px;
    border: 1.5px solid #e2e8f0;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    color: var(--navy);
    background: #fafbfc;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .adm-input::placeholder { color: #b0bac8; }
  .adm-input:focus {
    border-color: var(--gold);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.1);
  }

  /* ── BUTTONS ── */
  .adm-btn-add {
    background: var(--navy);
    color: var(--white);
    border: none;
    padding: 10px 18px;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-btn-add:hover { background: var(--navy-mid); transform: translateY(-1px); }

  .adm-btn-gold {
    background: var(--gold);
    color: var(--white);
    border: none;
    padding: 10px 18px;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .adm-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }

  .adm-btn-del {
    background: var(--danger-dim);
    border: 1px solid rgba(229,62,62,0.18);
    color: var(--danger);
    padding: 5px 11px;
    border-radius: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    white-space: nowrap;
  }
  .adm-btn-del:hover { background: rgba(229,62,62,0.16); border-color: rgba(229,62,62,0.4); }

  /* ── ITEM LIST ── */
  .adm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .adm-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 14px;
    background: #f8fafc;
    border: 1px solid #edf2f7;
    border-radius: 9px;
    font-size: 0.85rem;
    color: var(--navy);
    transition: background 0.15s;
  }
  .adm-list-item:hover { background: #f0f4f8; }
  .adm-list-item span { flex: 1; line-height: 1.4; }
  .adm-list-empty {
    text-align: center;
    padding: 20px;
    font-size: 0.83rem;
    color: var(--muted);
  }

  /* ── GALLERY GRID ── */
  .adm-gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 14px;
  }
  .adm-gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--border);
    aspect-ratio: 1;
    background: #f0f4f8;
  }
  .adm-gallery-item img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .adm-gallery-del {
    position: absolute;
    top: 6px; right: 6px;
    background: rgba(229,62,62,0.85);
    color: white;
    border: none;
    width: 26px; height: 26px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.18s;
  }
  .adm-gallery-del:hover { background: var(--danger); }

  /* file upload zone */
  .adm-file-zone {
    border: 2px dashed #cbd5e0;
    border-radius: 10px;
    padding: 18px 14px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    background: #fafbfc;
    margin-bottom: 10px;
  }
  .adm-file-zone:hover { border-color: var(--gold); background: var(--gold-dim); }
  .adm-file-zone input { display: none; }
  .adm-file-zone-label {
    font-size: 0.82rem;
    color: var(--muted);
    cursor: pointer;
    display: block;
  }
  .adm-file-zone-label strong { color: var(--gold); }
  .adm-file-selected {
    font-size: 0.78rem;
    color: var(--success);
    margin-top: 4px;
    font-weight: 500;
  }

  /* ── ADMISSIONS TABLE ── */
  .adm-table-wrap {
    overflow-x: auto;
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid var(--border);
  }
  .adm-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.84rem;
  }
  .adm-table thead tr {
    background: var(--navy);
  }
  .adm-table thead th {
    padding: 13px 16px;
    text-align: left;
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    white-space: nowrap;
  }
  .adm-table tbody tr {
    border-bottom: 1px solid #f0f4f8;
    transition: background 0.15s;
  }
  .adm-table tbody tr:hover { background: #f8fafc; }
  .adm-table tbody tr:last-child { border-bottom: none; }
  .adm-table td {
    padding: 12px 16px;
    color: var(--navy);
    vertical-align: top;
    line-height: 1.5;
  }
  .adm-table td.muted { color: var(--muted); font-size: 0.82rem; }

  .adm-search-row {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 0;
  }
  .adm-search-row .adm-input { margin: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .adm-stats { grid-template-columns: repeat(2, 1fr); }
    .adm-grid-3 { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 700px) {
    .adm-stats { grid-template-columns: repeat(2, 1fr); }
    .adm-grid-3, .adm-grid-2 { grid-template-columns: 1fr; }
    .adm-body { padding: 24px 4vw; }
    .adm-gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [notice,   setNotice]   = useState("");
  const [event,    setEvent]    = useState("");
  const [academic, setAcademic] = useState("");

  const [notices,   setNotices]   = useState([]);
  const [events,    setEvents]    = useState([]);
  const [academics, setAcademics] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [gallery,   setGallery]   = useState([]);

  const [imageFile, setImageFile] = useState(null);
  const [search,    setSearch]    = useState("");
  const [clock,     setClock]     = useState("");

  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://svv-school-backend.onrender.com";

  // Clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Auth + localStorage load
  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) navigate("/admin");
    setNotices(  JSON.parse(localStorage.getItem("notices"))   || []);
    setEvents(   JSON.parse(localStorage.getItem("events"))    || []);
    setAcademics(JSON.parse(localStorage.getItem("academics")) || []);
    setGallery(  JSON.parse(localStorage.getItem("gallery"))   || []);
  }, [navigate]);

  // Fetch admissions
  useEffect(() => {
    fetch(`${API_URL}/api/admissions`)
      .then(r => r.json())
      .then(d => setAdmissions(d))
      .catch(err => console.log(err));
  }, []);

  /* ── CRUD helpers ── */
  const addItem = (val, list, setList, key, clear) => {
    if (!val.trim()) return;
    const updated = [...list, val.trim()];
    setList(updated);
    localStorage.setItem(key, JSON.stringify(updated));
    clear("");
  };
  const delItem = (i, list, setList, key) => {
    const updated = list.filter((_, idx) => idx !== i);
    setList(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  const addNotice   = () => addItem(notice,   notices,   setNotices,   "notices",   setNotice);
  const addEvent    = () => addItem(event,    events,    setEvents,    "events",    setEvent);
  const addAcademic = () => addItem(academic, academics, setAcademics, "academics", setAcademic);

  const deleteNotice   = i => delItem(i, notices,   setNotices,   "notices");
  const deleteEvent    = i => delItem(i, events,    setEvents,    "events");
  const deleteAcademic = i => delItem(i, academics, setAcademics, "academics");

  const uploadImage = () => {
    if (!imageFile) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const b64 = reader.result;
      const updated = [...gallery, b64];
      setGallery(updated);
      localStorage.setItem("gallery", JSON.stringify(updated));
      setImageFile(null);
    };
    reader.readAsDataURL(imageFile);
  };

  const deleteGallery = i => {
    const updated = gallery.filter((_, idx) => idx !== i);
    setGallery(updated);
    localStorage.setItem("gallery", JSON.stringify(updated));
  };

  const logout = () => { localStorage.removeItem("adminAuth"); navigate("/admin"); };

  const exportCSV = () => {
    const rows = admissions.map(a => `${a.name},${a.email},${a.phone},${a.message}`);
    const csv  = "Name,Email,Phone,Message\n" + rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = window.URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "admissions.csv"; a.click();
  };

  const filteredAdmissions = admissions.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ── REUSABLE PANEL ── */
  const Panel = ({ icon, title, count, children }) => (
    <div className="adm-panel">
      <div className="adm-panel-head">
        <span>{icon}</span>
        <h3>{title}</h3>
        <span className="adm-panel-badge">{count}</span>
      </div>
      <div className="adm-panel-body">{children}</div>
    </div>
  );

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
            <button className="adm-logout-btn" onClick={logout}>
              ⬠ Logout
            </button>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="adm-body">

          <div className="adm-page-heading">
            <div className="adm-page-label">Control Panel</div>
            <div className="adm-page-title">Manage School Content</div>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="adm-stats">
            {[
              { icon: "📢", label: "Notices",    num: notices.length },
              { icon: "📅", label: "Events",     num: events.length },
              { icon: "📚", label: "Academics",  num: academics.length },
              { icon: "🎓", label: "Admissions", num: admissions.length },
            ].map(s => (
              <div className="adm-stat" key={s.label}>
                <div className="adm-stat-icon">{s.icon}</div>
                <div>
                  <div className="adm-stat-num">{s.num}</div>
                  <div className="adm-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── NOTICES / EVENTS / ACADEMICS ── */}
          <div className="adm-grid-3">

            {/* Notices */}
            <Panel icon="📢" title="Notices" count={notices.length}>
              <div className="adm-input-row">
                <input
                  className="adm-input"
                  type="text"
                  placeholder="Enter notice..."
                  value={notice}
                  onChange={e => setNotice(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addNotice()}
                />
                <button className="adm-btn-add" onClick={addNotice}>+ Add</button>
              </div>
              <ul className="adm-list">
                {notices.length === 0 && <div className="adm-list-empty">No notices yet</div>}
                {notices.map((n, i) => (
                  <li className="adm-list-item" key={i}>
                    <span>{n}</span>
                    <button className="adm-btn-del" onClick={() => deleteNotice(i)}>✕</button>
                  </li>
                ))}
              </ul>
            </Panel>

            {/* Events */}
            <Panel icon="📅" title="Events" count={events.length}>
              <div className="adm-input-row">
                <input
                  className="adm-input"
                  type="text"
                  placeholder="Enter event..."
                  value={event}
                  onChange={e => setEvent(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addEvent()}
                />
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

            {/* Academics */}
            <Panel icon="📚" title="Academics" count={academics.length}>
              <div className="adm-input-row">
                <input
                  className="adm-input"
                  type="text"
                  placeholder="Enter academic info..."
                  value={academic}
                  onChange={e => setAcademic(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addAcademic()}
                />
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

          {/* ── GALLERY ── */}
          <div style={{ marginBottom: "20px" }}>
            <Panel icon="🖼️" title="Gallery" count={gallery.length}>
              <label className="adm-file-zone">
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setImageFile(e.target.files[0])}
                />
                <span className="adm-file-zone-label">
                  {imageFile
                    ? <span className="adm-file-selected">✅ {imageFile.name}</span>
                    : <>📁 <strong>Click to choose</strong> an image to upload</>
                  }
                </span>
              </label>
              <button
                className="adm-btn-gold"
                onClick={uploadImage}
                disabled={!imageFile}
                style={{ opacity: imageFile ? 1 : 0.5, cursor: imageFile ? "pointer" : "not-allowed" }}
              >
                ⬆ Upload Image
              </button>
              <div className="adm-gallery-grid">
                {gallery.length === 0 && (
                  <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "20px", color: "var(--muted)", fontSize: "0.83rem" }}>
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

          {/* ── ADMISSIONS TABLE ── */}
          <Panel icon="🎓" title="Admission Requests" count={filteredAdmissions.length}>
            <div className="adm-search-row">
              <input
                className="adm-input"
                type="text"
                placeholder="🔍  Search student by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="adm-btn-gold" onClick={exportCSV}>
                ⬇ Export CSV
              </button>
            </div>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmissions.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center", padding: "28px", color: "var(--muted)" }}>
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
                        <td>{a.message || <span style={{ color: "var(--muted)" }}>—</span>}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Panel>

        </div>
      </div>
    </>
  );
}