import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [notice, setNotice] = useState("");
  const [event, setEvent] = useState("");

  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);

  // Protect Route
  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) {
      navigate("/admin");
    }

    setNotices(JSON.parse(localStorage.getItem("notices")) || []);
    setEvents(JSON.parse(localStorage.getItem("events")) || []);
  }, []);

  // Add Notice
  const addNotice = () => {
    if (!notice) return;

    const newData = [...notices, notice];
    setNotices(newData);

    localStorage.setItem("notices", JSON.stringify(newData));
    setNotice("");
  };

  // Add Event
  const addEvent = () => {
    if (!event) return;

    const newData = [...events, event];
    setEvents(newData);

    localStorage.setItem("events", JSON.stringify(newData));
    setEvent("");
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <section>
      <div className="title">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Notices */}
      <div className="admin-box">
        <h3>Manage Notices</h3>

        <input
          type="text"
          placeholder="Enter Notice"
          value={notice}
          onChange={(e) => setNotice(e.target.value)}
        />

        <button onClick={addNotice}>Add Notice</button>

        <ul>
          {notices.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>

      {/* Events */}
      <div className="admin-box">
        <h3>Manage Events</h3>

        <input
          type="text"
          placeholder="Enter Event"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>

        <ul>
          {events.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
