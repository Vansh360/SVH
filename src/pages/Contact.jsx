import React from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#admission") {
      const el = document.getElementById("admission");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted ✅ We will contact you soon!");
    e.target.reset();
  }

  return (
    <section>
      <div className="title">
        <h2>Contact Us</h2>
        <p>We are here to help you</p>
      </div>

      <div id="admission"></div>

      <div className="title">
        <h2>Admission Form</h2>
        <p>Fill this form to apply for admission</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="4" placeholder="Enter Class & Message" required />
        <button type="submit">Submit Admission</button>
      </form>

      <br /><br />

      <div className="title">
        <h2>School Address</h2>
        <p>Nagpur, Maharashtra, India</p>
        <p><b>Phone:</b> +91 98765 43210</p>
        <p><b>Email:</b> abc@gmail.com</p>
      </div>
    </section>
  );
}
