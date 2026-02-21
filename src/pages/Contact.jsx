// import React from "react";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function Contact() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash === "#admission") {
//       const el = document.getElementById("admission");
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("Form Submitted ✅ We will contact you soon!");
//     e.target.reset();
//   }

//   return (
//     <section>
//       <div className="title">
//         <h2>Contact Us</h2>
//         <p>We are here to help you</p>
//       </div>

//       <div id="admission"></div>

//       <div className="title">
//         <h2>Admission Form</h2>
//         <p>Fill this form to apply for admission</p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Student Name" required />
//         <input type="email" placeholder="Email" required />
//         <textarea rows="4" placeholder="Enter Class & Message" required />
//         <button type="submit">Submit Admission</button>
//       </form>

//       <br /><br />

//       <div className="title">
//         <h2>School Address</h2>
//         <p>Nagpur, Maharashtra, India</p>
//         <p><b>Phone:</b> +91 98765 43210</p>
//         <p><b>Email:</b> abc@gmail.com</p>
//       </div>
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
      const res = await fetch("http://localhost:5000/api/admission", {
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