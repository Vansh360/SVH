import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      title: "Discipline",
      desc: "We believe discipline builds character and improves learning habits.",
      icon: "✅",
    },
    {
      title: "Excellence",
      desc: "We encourage students to aim high and achieve their best performance.",
      icon: "🏆",
    },
    {
      title: "Innovation",
      desc: "We promote smart learning, technology and creative thinking.",
      icon: "💡",
    },
    {
      title: "Respect",
      desc: "We teach students to respect teachers, parents and society.",
      icon: "🤝",
    },
  ];

  const facilities = [
    { name: "Smart Classrooms", icon: "🖥️" },
    { name: "Science Laboratory", icon: "🔬" },
    { name: "Computer Lab", icon: "💻" },
    { name: "Library", icon: "📚" },
    { name: "Sports Ground", icon: "⚽" },
    { name: "CCTV Security", icon: "📷" },
    { name: "Transportation", icon: "🚌" },
    { name: "Activity Rooms", icon: "🎭" },
  ];

  const timeline = [
    { year: "2000", text: "School foundation laid with quality education vision." },
    { year: "2010", text: "New campus expansion and modern learning facilities." },
    { year: "2018", text: "Smart classrooms and digital learning introduced." },
    { year: "2024", text: "Improved sports infrastructure and co-curricular programs." },
  ];

  return (
    <>
      {/* ✅ About Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>About Sarvodaya Vidyalaya Junior Science College Hingna</h1>
          <p>
           Sarvodaya Vidyalaya Junior Science College is committed to delivering quality education,
            skill development and overall growth for every student.
          </p>
        </div>
      </div>

      {/* ✅ About Cards */}
      <section>
        <div className="title">
          <h2>Who We Are</h2>
          <p>Building bright futures with knowledge and values</p>
        </div>

        <div className="card-container">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To provide quality education and develop confident, disciplined
              and responsible students with strong moral values.
            </p>
          </div>

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To be a leading educational institution recognized for excellence
              in academics, discipline, sports and creativity.
            </p>
          </div>

          <div className="card">
            <h3>Our Objective</h3>
            <p>
              To focus on academics along with personality development through
              events, competitions, and activities.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Principal Message */}
      <section>
        <div className="title">
          <h2>Principal’s Message</h2>
          <p>Guidance, Discipline and Growth</p>
        </div>

        <div className="principal-box">
          <div className="principal-left">
            <div className="principal-photo">👩‍🏫</div>
            <h3>Principal</h3>
            <p className="principal-name">Mrs. A. Sharma</p>
          </div>

          <div className="principal-right">
            <p>
              “Our goal is to provide the best learning environment where each
              student can explore their strengths. We focus on academic
              excellence, strong discipline and co-curricular development.
              Together, we shape responsible citizens for tomorrow.”
            </p>
            <p className="principal-sign">— Principal</p>
          </div>
        </div>
      </section>

      {/* ✅ Values Section */}
      <section>
        <div className="title">
          <h2>Our Core Values</h2>
          <p>Values that shape every student’s journey</p>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Facilities */}
      <section>
        <div className="title">
          <h2>Facilities</h2>
          <p>Modern infrastructure for better learning</p>
        </div>

        <div className="facility-grid">
          {facilities.map((f, i) => (
            <div className="facility-card" key={i}>
              <span className="facility-icon">{f.icon}</span>
              <p>{f.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Timeline */}
      <section>
        <div className="title">
          <h2>Our Journey</h2>
          <p>Milestones in our growth</p>
        </div>

        <div className="timeline">
          {timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-year">{t.year}</div>
              <div className="timeline-text">{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section>
        <div className="cta-box">
          <h2>Ready to JoinSarvodaya Vidyalaya Junior Science College Hingna</h2>
          <p>Apply today and start your bright future with us.</p>

          <Link to="/contact#admission">
            <button className="cta-btn">Apply for Admission</button>
          </Link>
        </div>
      </section>
    </>
  );
}
