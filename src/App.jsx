import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import NewsAlert from "./components/Newsalert";

// Existing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// New Pages (ADD THESE FILES)
import Teachers from "./pages/Teachers";
import Management from "./pages/Management";
import Success from "./pages/Success";
import Principal from "./pages/Principal";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
       <NewsAlert />  
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ New HR Required Pages */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/management" element={<Management />} />
        <Route path="/success" element={<Success />} />
        <Route path="/principal" element={<Principal />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <BackToTop />
      <Footer />
    </HashRouter>
  );
}