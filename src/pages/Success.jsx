import React from "react";

const successData = [
  {
    name: "Rahul Verma",
    achievement: "Selected in IIT Bombay",
    year: "2025",
    img: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Kulkarni",
    achievement: "MHT-CET Topper (99%)",
    year: "2024",
    img: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Amit Patil",
    achievement: "Placed at Google",
    year: "2023",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Priya Sharma",
    achievement: "NEET Rank under 500",
    year: "2025",
    img: "https://randomuser.me/api/portraits/women/30.jpg"
  }
];

export default function Success() {
  return (
    <div className="page">
      <div className="container">
      <h2 className="page-title">Success Stories</h2>

      <div className="card-container">
        {successData.map((s, index) => (
          <div className="card success-card" key={index}>
            <img src={s.img} alt={s.name} />
            <h3>{s.name}</h3>
            <p>{s.achievement}</p>
            <span className="year">{s.year}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}