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

  // ✅ DELETE NOTICE
  const deleteNotice = (index) => {
    const updated = notices.filter((_, i) => i !== index);
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
  };

  // ✅ DELETE EVENT
  const deleteEvent = (index) => {
    const updated = events.filter((_, i) => i !== index);
    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
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
              <button
                onClick={() => deleteNotice(i)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
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
              <button
                onClick={() => deleteEvent(i)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
// import React, { useEffect, useState } from "react";

// export default function AdminDashboard() {
//   const [admissions, setAdmissions] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/admissions")
//       .then((res) => res.json())
//       .then((data) => setAdmissions(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admission Records</h2>

//       {admissions.length === 0 ? (
//         <p>No admission data found.</p>
//       ) : (
//         <table border="1" cellPadding="10" cellSpacing="0">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Message</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {admissions.map((a) => (
//               <tr key={a.id}>
//                 <td>{a.name}</td>
//                 <td>{a.email}</td>
//                 <td>{a.phone}</td>
//                 <td>{a.message}</td>
//                 <td>{new Date(a.created_at).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const [notice, setNotice] = useState("");
//   const [event, setEvent] = useState("");

//   const [notices, setNotices] = useState([]);
//   const [events, setEvents] = useState([]);

//   // Protect dashboard
//   useEffect(() => {
//     if (!localStorage.getItem("adminAuth")) {
//       navigate("/admin");
//     }

//     setNotices(JSON.parse(localStorage.getItem("notices")) || []);
//     setEvents(JSON.parse(localStorage.getItem("events")) || []);
//   }, []);

//   // Add Notice
//   const addNotice = () => {
//     if (!notice) return;

//     const newData = [...notices, notice];
//     setNotices(newData);

//     localStorage.setItem("notices", JSON.stringify(newData));
//     setNotice("");
//   };

//   // Add Event
//   const addEvent = () => {
//     if (!event) return;

//     const newData = [...events, event];
//     setEvents(newData);

//     localStorage.setItem("events", JSON.stringify(newData));
//     setEvent("");
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("adminAuth");
//     navigate("/admin");
//   };

//   return (
//     <div className="admin-dashboard">

//       <h2>Admin Dashboard</h2>

//       <button onClick={logout}>Logout</button>

//       {/* Notices */}
//       <div className="admin-box">

//         <h3>Notices</h3>

//         <input
//           type="text"
//           placeholder="New Notice"
//           value={notice}
//           onChange={(e) => setNotice(e.target.value)}
//         />

//         <button onClick={addNotice}>Add</button>
//        
//         <ul>
//           {notices.map((n, i) => (
//             <li key={i}>{n}</li>
//           ))}
//         </ul>

//       </div>

//       {/* Events */}
//       <div className="admin-box">

//         <h3>Events</h3>

//         <input
//           type="text"
//           placeholder="New Event"
//           value={event}
//           onChange={(e) => setEvent(e.target.value)}
//         />

//         <button onClick={addEvent}>Add</button>
//        
//         <ul>
//           {events.map((e, i) => (
//             <li key={i}>{e}</li>
//           ))}
//         </ul>

//       </div>

//     </div>
//   );
// }

