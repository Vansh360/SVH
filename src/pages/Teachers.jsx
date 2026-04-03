import React from "react";

const teachers = [
  {
    name: "Mr. Rajesh Sharma",
    subject: "Mathematics",
    experience: "10+ Years",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ms. Sneha Patil",
    subject: "Physics",
    experience: "8 Years",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mr. Imran Khan",
    subject: "Chemistry",
    experience: "12 Years",
    img: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    name: "Mrs. Anjali Deshmukh",
    subject: "Biology",
    experience: "9 Years",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Teachers() {
  return (
    <div className="page">
      <div className="container">
      <h2 className="page-title">Our Teachers</h2>

      <div className="card-container">
        {teachers.map((t, index) => (
          <div className="card teacher-card" key={index}>
            <img src={t.img} alt={t.name} />
            <h3>{t.name}</h3>
            <p><strong>{t.subject}</strong></p>
            <p>{t.experience} Experience</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}