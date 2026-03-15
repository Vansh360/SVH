// import React from "react";

// export default function Academics() {
//   return (
//     <section>
//       <div className="title">
//         <h2>Academics</h2>
//         <p>Quality education from primary to higher secondary</p>
//       </div>

//       <div className="card-container">
//         <div className="card">
//           <h3>Primary Section (1st - 5th)</h3>
//           <p>Strong basics with fun activities and interactive learning.</p>
//         </div>

//         <div className="card">
//           <h3>Middle School (6th - 8th)</h3>
//           <p>Concept-based learning with regular tests and practice sessions.</p>
//         </div>

//         <div className="card">
//           <h3>Secondary School (9th - 10th)</h3>
//           <p>Board exam preparation with doubt solving support.</p>
//         </div>

//         <div className="card">
//           <h3>Higher Secondary (11th - 12th)</h3>
//           <p>Science & Commerce streams with mentoring and guidance.</p>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Academics() {
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    setAcademics(JSON.parse(localStorage.getItem("academics")) || []);
  }, []);

  return (
    <section>
      <div className="title">
        <h2>Academics</h2>
        <p>Quality education from primary to higher secondary</p>
      </div>

      <div className="card-container">

        <div className="card">
          <h3>Primary Section (1st - 5th)</h3>
          <p>
            Focus on building strong basics in reading, writing, and mathematics
            through interactive learning, storytelling, and fun activities.
          </p>
        </div>

        <div className="card">
          <h3>Middle School (6th - 8th)</h3>
          <p>
            Concept-based learning with emphasis on science, mathematics,
            languages, and social studies along with regular tests and projects.
          </p>
        </div>

        <div className="card">
          <h3>Secondary School (9th - 10th)</h3>
          <p>
            Intensive preparation for board examinations with experienced
            teachers, doubt-solving sessions, and revision classes.
          </p>
        </div>

        <div className="card">
          <h3>Higher Secondary (11th - 12th)</h3>
          <p>
            Science and Commerce streams with career guidance, practical
            learning, and mentorship programs.
          </p>
        </div>

        <div className="card">
          <h3>Subjects Offered</h3>
          <p>
            English, Mathematics, Science, Social Studies, Computer Science,
            Hindi, Physical Education, and Environmental Studies.
          </p>
        </div>

        <div className="card">
          <h3>Teaching Methodology</h3>
          <p>
            Smart classrooms, project-based learning, group discussions,
            digital presentations, and practical demonstrations.
          </p>
        </div>

        <div className="card">
          <h3>Examination System</h3>
          <p>
            Regular class tests, unit tests, mid-term examinations, and annual
            examinations to monitor student progress.
          </p>
        </div>

        <div className="card">
          <h3>Academic Support</h3>
          <p>
            Extra doubt-solving classes, remedial sessions, and personalized
            mentoring for students needing additional guidance.
          </p>
        </div>

      </div>

    {/* </section> */}
  
      <div className="title">
        <h2>Academics</h2>
        <p>Our courses and curriculum</p>
      </div>

      <div className="card-container">
        {academics.length === 0 ? (
          <p>No academic information added yet.</p>
        ) : (
          academics.map((a, i) => (
            <div className="card" key={i}>
              <p>{a}</p>
            </div>
          ))
        )}
      </div>

    </section>
  );
}