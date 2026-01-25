import React from "react";

export default function Academics() {
  return (
    <section>
      <div className="title">
        <h2>Academics</h2>
        <p>Quality education from primary to higher secondary</p>
      </div>

      <div className="card-container">
        <div className="card">
          <h3>Primary Section (1st - 5th)</h3>
          <p>Strong basics with fun activities and interactive learning.</p>
        </div>

        <div className="card">
          <h3>Middle School (6th - 8th)</h3>
          <p>Concept-based learning with regular tests and practice sessions.</p>
        </div>

        <div className="card">
          <h3>Secondary School (9th - 10th)</h3>
          <p>Board exam preparation with doubt solving support.</p>
        </div>

        <div className="card">
          <h3>Higher Secondary (11th - 12th)</h3>
          <p>Science & Commerce streams with mentoring and guidance.</p>
        </div>
      </div>
    </section>
  );
}
