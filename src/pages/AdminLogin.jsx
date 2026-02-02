import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Credentials
    if (email === "admin@dps.com" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Login!");
    }
  };

  return (
    <section>
      <div className="title">
        <h2>Admin Login</h2>
        <p>Only for Authorized Users</p>
      </div>

      <form className="admin-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </section>
  );
}
