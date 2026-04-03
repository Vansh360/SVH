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

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0a1628;
    --navy-mid:   #142240;
    --navy-light: #1e3060;
    --gold:       #c9922a;
    --gold-light: #e8b84b;
    --gold-dim:   rgba(201,146,42,0.12);
    --cream:      #faf7f2;
    --white:      #ffffff;
    --muted:      #6b7a99;
    --border:     rgba(0,0,0,0.07);
  }

  /* ── PAGE WRAPPER ── */
  .contact-page {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
  }

  /* ── HERO BANNER ── */
  .contact-hero {
    background: var(--navy);
    padding: 64px 6vw 56px;
    position: relative;
    overflow: hidden;
  }
  .contact-hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,146,42,0.14) 0%, transparent 70%);
    pointer-events: none;
  }
  .contact-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.4;
  }
  .hero-label {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.15;
    margin-bottom: 14px;
  }
  .hero-title span { color: var(--gold-light); }
  .hero-sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
    max-width: 480px;
    line-height: 1.7;
  }

  /* ── MAIN CONTENT GRID ── */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 32px;
    padding: 52px 6vw;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ── LEFT COLUMN ── */
  .left-col { display: flex; flex-direction: column; gap: 24px; }

  /* info cards */
  .info-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px 26px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .info-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.09);
    transform: translateY(-3px);
  }
  .info-card-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }
  .info-icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .info-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
  }
  .info-card-body {
    font-size: 0.875rem;
    color: var(--muted);
    line-height: 1.7;
  }
  .info-card-body strong { color: var(--navy); font-weight: 500; }

  /* social connect card */
  .social-card {
    background: var(--navy);
    border-radius: 16px;
    padding: 26px;
    box-shadow: 0 4px 24px rgba(10,22,40,0.18);
  }
  .social-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 16px;
  }
  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .social-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 16px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.22s;
    border: 1px solid transparent;
  }
  .social-btn .s-icon {
    width: 28px; height: 28px;
    border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem;
    flex-shrink: 0;
  }
  .social-btn.facebook { background: rgba(24,119,242,0.12); color: #4a9ff5; border-color: rgba(24,119,242,0.2); }
  .social-btn.facebook .s-icon { background: rgba(24,119,242,0.18); }
  .social-btn.facebook:hover { background: rgba(24,119,242,0.22); border-color: rgba(24,119,242,0.4); }

  .social-btn.twitter { background: rgba(29,161,242,0.1); color: #5bb8f5; border-color: rgba(29,161,242,0.2); }
  .social-btn.twitter .s-icon { background: rgba(29,161,242,0.15); }
  .social-btn.twitter:hover { background: rgba(29,161,242,0.2); border-color: rgba(29,161,242,0.4); }

  .social-btn.instagram { background: rgba(225,48,108,0.1); color: #f06292; border-color: rgba(225,48,108,0.2); }
  .social-btn.instagram .s-icon { background: rgba(225,48,108,0.15); }
  .social-btn.instagram:hover { background: rgba(225,48,108,0.2); border-color: rgba(225,48,108,0.4); }

  .whatsapp-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-radius: 10px;
    background: rgba(37,211,102,0.12);
    border: 1px solid rgba(37,211,102,0.25);
    color: #4ddb7c;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 12px;
    transition: all 0.22s;
  }
  .whatsapp-btn:hover { background: rgba(37,211,102,0.2); border-color: rgba(37,211,102,0.4); }

  /* map */
  .map-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .map-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .map-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--navy);
  }
  .map-card iframe {
    display: block;
    width: 100%;
    height: 200px;
    border: none;
  }

  /* ── RIGHT COLUMN — FORM ── */
  .form-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 40px 38px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.06);
    height: fit-content;
  }
  .form-header { margin-bottom: 32px; }
  .form-label-tag {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 8px;
  }
  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--navy);
    line-height: 1.25;
    margin-bottom: 8px;
  }
  .form-desc {
    font-size: 0.875rem;
    color: var(--muted);
    line-height: 1.6;
  }

  /* form fields */
  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
  .field-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .field-group label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--navy);
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .field-input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: var(--navy);
    background: #fafbfc;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .field-input::placeholder { color: #b0bac8; }
  .field-input:focus {
    border-color: var(--gold);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.1);
  }

  textarea.field-input {
    resize: vertical;
    min-height: 110px;
    line-height: 1.6;
  }

  /* stream selector */
  .stream-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }
  .stream-option { position: relative; }
  .stream-option input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0; height: 0;
  }
  .stream-label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 14px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--muted);
    background: #fafbfc;
    transition: all 0.2s;
  }
  .stream-label .stream-dot {
    width: 14px; height: 14px;
    border-radius: 50%;
    border: 2px solid #cbd5e0;
    flex-shrink: 0;
    transition: all 0.2s;
  }
  .stream-option input:checked + .stream-label {
    border-color: var(--gold);
    background: var(--gold-dim);
    color: var(--navy);
  }
  .stream-option input:checked + .stream-label .stream-dot {
    background: var(--gold);
    border-color: var(--gold);
  }

  /* submit button */
  .submit-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: var(--navy);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    position: relative;
    overflow: hidden;
    transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .submit-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--gold) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .submit-btn:hover {
    background: var(--navy-mid);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(10,22,40,0.25);
  }
  .submit-btn:hover::before { opacity: 0.15; }
  .submit-btn:active { transform: translateY(0); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* success / error messages */
  .form-msg {
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .form-msg.success { background: #edf7ee; color: #2e7d32; border: 1px solid #c8e6c9; }
  .form-msg.error   { background: #fdecea; color: #c62828; border: 1px solid #ffcdd2; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr; padding: 36px 5vw; }
    .field-row { grid-template-columns: 1fr; }
    .form-card { padding: 28px 22px; }
  }
  @media (max-width: 500px) {
    .stream-row { grid-template-columns: 1fr; }
    .contact-hero { padding: 44px 5vw 40px; }
  }
`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    stream: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://svv-school-backend.onrender.com/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", stream: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="contact-page">

        {/* ── HERO ── */}
        <div className="contact-hero">
          <div className="hero-label">Get in Touch</div>
          <h1 className="hero-title">Contact &amp; <span>Admissions</span></h1>
          <p className="hero-sub">
            Reach out to us for admissions, queries, or general information. We're happy to help.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="contact-grid">

          {/* ── LEFT — Info, Social, Map ── */}
          <div className="left-col">

            {/* Contact Info */}
            <div className="info-card">
              <div className="info-card-head">
                <div className="info-icon">📞</div>
                <div className="info-card-title">Phone &amp; Email</div>
              </div>
              <div className="info-card-body">
                <strong>+91 98765 43210</strong><br />
                info@sarvodayavk.edu.in<br /><br />
                <strong>Office Hours:</strong> Mon – Sat, 8:00 AM – 2:30 PM
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-head">
                <div className="info-icon">📍</div>
                <div className="info-card-title">Our Address</div>
              </div>
              <div className="info-card-body">
                Sarvodaya Vidyalaya Junior Science College<br />
                <strong>Hingna, Nagpur, Maharashtra – 441110</strong><br />
                Near Main Bus Stop, Hingna Road
              </div>
            </div>

            {/* Social Connect */}
            <div className="social-card">
              <div className="social-card-title">🌐 Connect With Us</div>
              <div className="social-buttons">
                <a
                  href="https://www.facebook.com/YOUR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn facebook"
                >
                  <span className="s-icon">f</span> Facebook
                </a>
                <a
                  href="https://twitter.com/YOUR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn twitter"
                >
                  <span className="s-icon">𝕏</span> Twitter / X
                </a>
                <a
                  href="https://www.instagram.com/YOUR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                >
                  <span className="s-icon">◎</span> Instagram
                </a>
              </div>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="map-card">
              <div className="map-header">
                <span>📍</span>
                <h3>Our Location</h3>
              </div>
              <iframe
                src="https://www.google.com/maps?q=Hingna,Nagpur,Maharashtra&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="School Location Map"
              />
            </div>

          </div>

          {/* ── RIGHT — Admission Form ── */}
          <div className="form-card" id="admission">
            <div className="form-header">
              <div className="form-label-tag">Admissions 2026–27</div>
              <div className="form-title">Apply for Admission</div>
              <p className="form-desc">
                Fill in the details below and our team will get back to you within 24 hours.
              </p>
            </div>

            {status === "success" && (
              <div className="form-msg success">
                ✅ Admission form submitted successfully! We'll contact you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-msg error">
                ❌ Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Name + Phone */}
              <div className="field-row">
                <div className="field-group" style={{ marginBottom: 0 }}>
                  <label>Student Name</label>
                  <input
                    className="field-input"
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-group" style={{ marginBottom: 0 }}>
                  <label>Phone Number</label>
                  <input
                    className="field-input"
                    type="text"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="field-group">
                <label>Email Address</label>
                <input
                  className="field-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Stream selector */}
              <div className="field-group">
                <label>Select Stream</label>
                <div className="stream-row">
                  {["Science", "Commerce", "Arts", "Not decided"].map((s) => (
                    <div className="stream-option" key={s}>
                      <input
                        type="radio"
                        id={`stream-${s}`}
                        name="stream"
                        value={s}
                        checked={form.stream === s}
                        onChange={handleChange}
                      />
                      <label className="stream-label" htmlFor={`stream-${s}`}>
                        <span className="stream-dot" />
                        {s}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="field-group">
                <label>Message / Query</label>
                <textarea
                  className="field-input"
                  name="message"
                  placeholder="Any questions or additional information..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>⏳ Submitting...</>
                ) : (
                  <>📋 Submit Admission Form</>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </>
  );
}
