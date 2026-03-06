// import React, { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     studentName: "",
//     dob: "",
//     gender: "",
//     classApplying: "",
//     parentName: "",
//     phone: "",
//     email: "",
//     address: "",
//     previousSchool: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/admission", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         alert("Admission form submitted successfully ✅");
//         setForm({
//           studentName: "",
//           dob: "",
//           gender: "",
//           classApplying: "",
//           parentName: "",
//           phone: "",
//           email: "",
//           address: "",
//           previousSchool: "",
//           message: "",
//         });
//       } else {
//         alert("Failed to submit admission form ❌");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Server error ❌");
//     }
//   };

//   return (
//     <section id="admission">
//       <div className="title">
//         <h2>Student Admission Form</h2>
//         <p>Fill the form below to apply for admission</p>
//       </div>

//       <form onSubmit={handleSubmit} className="admission-form">
//         <input
//           type="text"
//           name="studentName"
//           placeholder="Student Full Name"
//           value={form.studentName}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="date"
//           name="dob"
//           value={form.dob}
//           onChange={handleChange}
//           required
//         />

//         <select
//           name="gender"
//           value={form.gender}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>

//         <select
//           name="classApplying"
//           value={form.classApplying}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Class Applying For</option>
//           <option value="FYJC Science">FYJC Science</option>
//           <option value="SYJC Science">SYJC Science</option>
//         </select>

//         <input
//           type="text"
//           name="parentName"
//           placeholder="Parent / Guardian Name"
//           value={form.parentName}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Contact Number"
//           value={form.phone}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="address"
//           placeholder="Residential Address"
//           value={form.address}
//           onChange={handleChange}
//           rows="3"
//           required
//         />

//         <input
//           type="text"
//           name="previousSchool"
//           placeholder="Previous School Name"
//           value={form.previousSchool}
//           onChange={handleChange}
//         />

//         <textarea
//           name="message"
//           placeholder="Additional Message / Remarks"
//           value={form.message}
//           onChange={handleChange}
//           rows="3"
//         />

//         <button type="submit">Submit Admission</button>
//       </form>
//     </section>
//   );
// }



import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://svv-backend.onrender.com/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Admission form submitted successfully ✅");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to submit form ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <section id="admission">
      <h2>Admission Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">Submit Admission</button>
      </form>
    </section>
  );
}