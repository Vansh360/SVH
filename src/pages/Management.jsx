// import React from "react";

// export default function Management() {
//   return (
//     <div>
//       <h2>Management</h2>
//       <p>Our leadership team ensures excellence.</p>
//     </div>
//   );
// }

import React from "react";

const management = [
  {
    name: "Dr. A. Deshmukh",
    role: "Principal",
    message:
      "Our vision is to provide quality education that nurtures creativity, discipline, and leadership among students.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Mrs. S. Kulkarni",
    role: "Vice Principal",
    message:
      "We focus on academic excellence along with co-curricular activities for holistic development.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Mr. R. Patil",
    role: "Director",
    message:
      "Our institution aims to build future-ready students with strong values and modern skills.",
    img: "https://randomuser.me/api/portraits/men/31.jpg",
  },
];

export default function Management() {
  return (
    <div className="page">
      <h2 className="page-title">Management Team</h2>
      <p className="page-subtitle">
        Meet the leaders guiding our institution towards excellence.
      </p>

      <div className="card-container">
        {management.map((m, index) => (
          <div className="card management-card" key={index}>
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <p className="role">{m.role}</p>
            <p className="message">“{m.message}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}