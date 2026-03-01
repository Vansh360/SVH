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

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [notice, setNotice] = useState("");
  const [event, setEvent] = useState("");
  const [academic, setAcademic] = useState("");

  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [academics, setAcademics] = useState([]);

  // Protect Route
  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) {
      navigate("/admin");
    }

    setNotices(JSON.parse(localStorage.getItem("notices")) || []);
    setEvents(JSON.parse(localStorage.getItem("events")) || []);
    setAcademics(JSON.parse(localStorage.getItem("academics")) || []);
  }, [navigate]);

  // Add Notice
  const addNotice = () => {
    if (!notice.trim()) return;
    const newData = [...notices, notice];
    setNotices(newData);
    localStorage.setItem("notices", JSON.stringify(newData));
    setNotice("");
  };

  // Add Event
  const addEvent = () => {
    if (!event.trim()) return;
    const newData = [...events, event];
    setEvents(newData);
    localStorage.setItem("events", JSON.stringify(newData));
    setEvent("");
  };

  // Add Academic
  const addAcademic = () => {
    if (!academic.trim()) return;
    const newData = [...academics, academic];
    setAcademics(newData);
    localStorage.setItem("academics", JSON.stringify(newData));
    setAcademic("");
  };

  // Delete functions
  const deleteNotice = (index) => {
    const updated = notices.filter((_, i) => i !== index);
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
  };

  const deleteEvent = (index) => {
    const updated = events.filter((_, i) => i !== index);
    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
  };

  const deleteAcademic = (index) => {
    const updated = academics.filter((_, i) => i !== index);
    setAcademics(updated);
    localStorage.setItem("academics", JSON.stringify(updated));
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
            <li key={i}>
              {n}
              <button onClick={() => deleteNotice(i)}>Delete</button>
            </li>
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
            <li key={i}>
              {e}
              <button onClick={() => deleteEvent(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Academics */}
      <div className="admin-box">
        <h3>Manage Academics</h3>
        <input
          type="text"
          placeholder="Enter Academic Info"
          value={academic}
          onChange={(e) => setAcademic(e.target.value)}
        />
        <button onClick={addAcademic}>Add Academic</button>

        <ul>
          {academics.map((a, i) => (
            <li key={i}>
              {a}
              <button onClick={() => deleteAcademic(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}