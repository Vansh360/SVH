import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0a1628;
    --navy-mid:   #142240;
    --navy-deep:  #060e1a;
    --gold:       #c9922a;
    --gold-light: #e8b84b;
    --gold-dim:   rgba(201,146,42,0.15);
    --white:      #ffffff;
    --muted:      rgba(255,255,255,0.45);
    --danger:     #fc8181;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .al-root {
    min-height: 100vh;
    display: flex;
    font-family: 'DM Sans', sans-serif;
    background: var(--navy-deep);
    overflow: hidden;
    position: relative;
  }

  /* ── Animated background ── */
  .al-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }
  .al-bg-grad {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,146,42,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 20%, rgba(20,34,64,0.9) 0%, transparent 70%),
      linear-gradient(135deg, #060e1a 0%, #0a1628 50%, #0d1e38 100%);
  }
  .al-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(201,146,42,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,146,42,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  }
  .al-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: orbFloat 8s ease-in-out infinite;
  }
  .al-orb-1 {
    width: 500px; height: 500px;
    top: -150px; left: -100px;
    background: radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%);
    animation-delay: 0s;
  }
  .al-orb-2 {
    width: 400px; height: 400px;
    bottom: -100px; right: -80px;
    background: radial-gradient(circle, rgba(20,34,64,0.6) 0%, transparent 70%);
    animation-delay: -4s;
  }
  @keyframes orbFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%       { transform: translate(30px, -20px) scale(1.05); }
    66%       { transform: translate(-20px, 15px) scale(0.97); }
  }

  /* ── Split layout ── */
  .al-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 6vw;
    position: relative;
    z-index: 1;
  }
  .al-right {
    width: 480px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    position: relative;
    z-index: 1;
  }
  .al-right::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.025);
    border-left: 1px solid rgba(201,146,42,0.12);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* ── Left branding ── */
  .al-brand {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 64px;
    animation: fadeUp 0.6s ease both;
  }
  .al-brand-logo {
    width: 52px; height: 52px;
    border-radius: 13px;
    background: linear-gradient(135deg, var(--gold), #7a4e10);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 900;
    color: var(--white);
    box-shadow: 0 4px 20px rgba(201,146,42,0.35), 0 0 0 1px rgba(201,146,42,0.2);
  }
  .al-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem; font-weight: 700;
    color: var(--white);
    line-height: 1.25;
  }
  .al-brand-sub {
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .al-hero-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
    animation: fadeUp 0.6s ease 0.1s both;
  }
  .al-hero-label::before {
    content: '';
    display: block;
    width: 28px; height: 1.5px;
    background: var(--gold);
    border-radius: 2px;
  }

  .al-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 20px;
    animation: fadeUp 0.6s ease 0.2s both;
  }
  .al-hero-title em {
    font-style: italic;
    color: var(--gold-light);
  }

  .al-hero-desc {
    font-size: 0.92rem;
    color: var(--muted);
    line-height: 1.7;
    max-width: 400px;
    margin-bottom: 52px;
    animation: fadeUp 0.6s ease 0.3s both;
  }

  .al-stats {
    display: flex;
    gap: 36px;
    animation: fadeUp 0.6s ease 0.4s both;
  }
  .al-stat-item { }
  .al-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.7rem; font-weight: 900;
    color: var(--white); line-height: 1;
  }
  .al-stat-label {
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 4px;
  }
  .al-stat-divider {
    width: 1px;
    background: rgba(255,255,255,0.08);
    align-self: stretch;
  }

  /* ── Login card ── */
  .al-card {
    width: 100%;
    max-width: 390px;
    position: relative;
    z-index: 1;
    animation: fadeUp 0.7s ease 0.15s both;
  }

  .al-card-header {
    margin-bottom: 32px;
  }
  .al-card-eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
    display: flex; align-items: center; gap: 8px;
  }
  .al-card-eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
    animation: blink 2s ease-in-out infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }
  .al-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem; font-weight: 900;
    color: var(--white); line-height: 1.2;
    margin-bottom: 6px;
  }
  .al-card-sub {
    font-size: 0.82rem;
    color: var(--muted);
  }

  /* ── Fields ── */
  .al-fields { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }

  .al-field {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .al-field-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  .al-field-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .al-field-icon {
    position: absolute;
    left: 14px;
    font-size: 0.95rem;
    opacity: 0.45;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  .al-field-wrap:focus-within .al-field-icon { opacity: 0.9; }
  .al-input {
    width: 100%;
    padding: 13px 14px 13px 42px;
    background: rgba(255,255,255,0.05);
    border: 1.5px solid rgba(255,255,255,0.1);
    border-radius: 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: var(--white);
    outline: none;
    transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
  }
  .al-input::placeholder { color: rgba(255,255,255,0.22); }
  .al-input:focus {
    border-color: var(--gold);
    background: rgba(201,146,42,0.06);
    box-shadow: 0 0 0 3px rgba(201,146,42,0.12);
  }
  .al-input.error {
    border-color: var(--danger);
    background: rgba(229,62,62,0.06);
    box-shadow: 0 0 0 3px rgba(229,62,62,0.1);
  }

  .al-toggle-pw {
    position: absolute;
    right: 13px;
    background: none;
    border: none;
    color: rgba(255,255,255,0.3);
    cursor: pointer;
    font-size: 0.9rem;
    padding: 4px;
    transition: color 0.2s;
    line-height: 1;
  }
  .al-toggle-pw:hover { color: rgba(255,255,255,0.7); }

  /* ── Error message ── */
  .al-error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    background: rgba(229,62,62,0.1);
    border: 1px solid rgba(229,62,62,0.25);
    border-radius: 9px;
    color: var(--danger);
    font-size: 0.82rem;
    font-weight: 500;
    margin-bottom: 20px;
    animation: shake 0.4s ease;
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }

  /* ── Submit button ── */
  .al-submit {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, var(--gold) 0%, #a87020 100%);
    border: none;
    border-radius: 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--white);
    cursor: pointer;
    letter-spacing: 0.03em;
    position: relative;
    overflow: hidden;
    transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
    box-shadow: 0 4px 20px rgba(201,146,42,0.35);
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .al-submit::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .al-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(201,146,42,0.45);
  }
  .al-submit:hover::before { opacity: 1; }
  .al-submit:active:not(:disabled) { transform: translateY(0); }
  .al-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

  .al-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Divider & footer ── */
  .al-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 22px 0 18px;
  }
  .al-divider-line {
    flex: 1; height: 1px;
    background: rgba(255,255,255,0.07);
  }
  .al-divider-text {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.06em;
    white-space: nowrap;
  }

  .al-footer-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 0.74rem;
    color: rgba(255,255,255,0.22);
    text-align: center;
    line-height: 1.5;
  }
  .al-footer-note span { color: rgba(255,255,255,0.14); font-size: 0.8rem; }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .al-left { display: none; }
    .al-right {
      width: 100%;
      border-left: none;
      padding: 32px 24px;
    }
    .al-right::before { border-left: none; }
  }
  @media (max-width: 480px) {
    .al-right { padding: 24px 18px; }
    .al-card-title { font-size: 1.5rem; }
  }
`;

export default function AdminLogin() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPw,   setShowPw]   = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a brief auth delay for polish
    setTimeout(() => {
      if (email === "admin@dps.com" && password === "admin123") {
        localStorage.setItem("adminAuth", "true");
        navigate("/admin-dashboard");
      } else {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="al-root">

        {/* ── Animated background ── */}
        <div className="al-bg">
          <div className="al-bg-grad" />
          <div className="al-grid" />
          <div className="al-orb al-orb-1" />
          <div className="al-orb al-orb-2" />
        </div>

        {/* ── Left branding panel ── */}
        <div className="al-left">

          <div className="al-brand">
            <div className="al-brand-logo">SVK</div>
            <div>
              <div className="al-brand-name">SVV School</div>
              <div className="al-brand-sub">Nagpur, Maharashtra</div>
            </div>
          </div>

          <div className="al-hero-label">Administration Portal</div>

          <h1 className="al-hero-title">
            Manage Your<br />
            <em>School Content</em><br />
            With Ease
          </h1>

          <p className="al-hero-desc">
            Securely update notices, gallery, admissions, staff profiles,
            and more — all from one unified dashboard built for school administrators.
          </p>

          <div className="al-stats">
            <div className="al-stat-item">
              <div className="al-stat-num">8+</div>
              <div className="al-stat-label">Sections</div>
            </div>
            <div className="al-stat-divider" />
            <div className="al-stat-item">
              <div className="al-stat-num">100%</div>
              <div className="al-stat-label">Secure</div>
            </div>
            <div className="al-stat-divider" />
            <div className="al-stat-item">
              <div className="al-stat-num">Live</div>
              <div className="al-stat-label">Updates</div>
            </div>
          </div>

        </div>

        {/* ── Right login panel ── */}
        <div className="al-right">
          <div className="al-card">

            <div className="al-card-header">
              <div className="al-card-eyebrow">
                <span className="al-card-eyebrow-dot" />
                Secure Access
              </div>
              <div className="al-card-title">Admin Sign In</div>
              <div className="al-card-sub">Enter your credentials to access the dashboard</div>
            </div>

            {error && (
              <div className="al-error">
                ⚠ {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="al-fields">

                <div className="al-field">
                  <label className="al-field-label">Email Address</label>
                  <div className="al-field-wrap">
                    <span className="al-field-icon">✉</span>
                    <input
                      className={`al-input${error ? " error" : ""}`}
                      type="email"
                      placeholder="admin@school.edu.in"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setError(""); }}
                    />
                  </div>
                </div>

                <div className="al-field">
                  <label className="al-field-label">Password</label>
                  <div className="al-field-wrap">
                    <span className="al-field-icon">🔒</span>
                    <input
                      className={`al-input${error ? " error" : ""}`}
                      type={showPw ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={e => { setPassword(e.target.value); setError(""); }}
                    />
                    <button
                      type="button"
                      className="al-toggle-pw"
                      onClick={() => setShowPw(s => !s)}
                      title={showPw ? "Hide password" : "Show password"}
                    >
                      {showPw ? "🙈" : "👁"}
                    </button>
                  </div>
                </div>

              </div>

              <button className="al-submit" type="submit" disabled={loading}>
                {loading ? (
                  <><div className="al-spinner" /> Signing in…</>
                ) : (
                  <>Sign In to Dashboard →</>
                )}
              </button>
            </form>

            <div className="al-divider">
              <div className="al-divider-line" />
              <span className="al-divider-text">RESTRICTED ACCESS</span>
              <div className="al-divider-line" />
            </div>

            <div className="al-footer-note">
              <span>🔐</span>
              This portal is for authorized administrators only.
              Unauthorized access is strictly prohibited.
            </div>

          </div>
        </div>

      </div>
    </>
  );
}