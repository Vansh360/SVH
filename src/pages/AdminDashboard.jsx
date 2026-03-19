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

  const [admissions, setAdmissions] = useState([]);
  const [search, setSearch] = useState("");

//   const [gallery, setGallery] = useState([]);
// const [image, setImage] = useState("");

const [gallery, setGallery] = useState([]);
const [imageFile, setImageFile] = useState(null);

  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://svv-school-backend.onrender.com";

 useEffect(() => {
  if (!localStorage.getItem("adminAuth")) {
    navigate("/admin");
  }

  setNotices(JSON.parse(localStorage.getItem("notices")) || []);
  setEvents(JSON.parse(localStorage.getItem("events")) || []);
  setAcademics(JSON.parse(localStorage.getItem("academics")) || []);
  setGallery(JSON.parse(localStorage.getItem("gallery")) || []);
}, [navigate]);

   useEffect(() => {

fetch(`${API_URL}/api/admissions`)
  .then(res => res.json())
  .then(data => setAdmissions(data))
  .catch(err => console.log(err));

},[]);

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

  // Delete Functions
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
const uploadImage = () => {
  if (!imageFile) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    const base64Image = reader.result;

    const newGallery = [...gallery, base64Image];
    setGallery(newGallery);

    localStorage.setItem("gallery", JSON.stringify(newGallery));
  };

  reader.readAsDataURL(imageFile);
};
  // Export CSV
  const exportCSV = () => {
    console.log(admissions);
    const rows = admissions.map(
      (a) => `${a.name},${a.email},${a.phone},${a.message}`
    );

    const csv = "Name,Email,Phone,Message\n" + rows.join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "admissions.csv";
    a.click();
  };

  const filteredAdmissions = admissions.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <section style={{ padding: "30px" }}>
    <section className="admin-container">
      <div className="title">
        <h2>Admin Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>

      {/* Dashboard Stats */}
     <div className="dashboard-stats">
  <div className="stat-card">📢 Notices: {notices.length}</div>
  <div className="stat-card">📅 Events: {events.length}</div>
  <div className="stat-card">📚 Academics: {academics.length}</div>
  <div className="stat-card">🎓 Admissions: {admissions.length}</div>
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

      {/* Academics */}
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
        {/* Gallery */}
<div className="admin-box">
  <h3>Manage Gallery</h3>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setImageFile(e.target.files[0])}
  />

  <button onClick={uploadImage}>Upload Image</button>

  <div style={{marginTop:"15px"}}>

    {gallery.map((img, i) => (
      <div key={i} style={{marginBottom:"10px"}}>

        <img src={img} alt="" width="120" />

        <button
          onClick={() => {
            const updated = gallery.filter((_, index) => index !== i);
            setGallery(updated);
            localStorage.setItem("gallery", JSON.stringify(updated));
          }}
        >
          Delete
        </button>

      </div>
    ))}

  </div>
</div>
      {/* Admission Requests */}
      <div className="admin-box">
        <h3>Admission Requests</h3>

        <input
          type="text"
          placeholder="Search student"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={exportCSV}>Export CSV</button>

        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {filteredAdmissions.map((a, i) => (
              <tr key={i}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>{a.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}