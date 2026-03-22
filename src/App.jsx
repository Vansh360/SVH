// import React from "react";
// import { HashRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import BackToTop from "./components/BackToTop";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Academics from "./pages/Academics";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";

// export default function App() {
//   return (
//     <HashRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/academics" element={<Academics />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminLogin />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//       </Routes>

//       <BackToTop />
//       <Footer />
//     </HashRouter>
//   );
// }

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

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

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

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

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <BackToTop />
      <Footer />
    </HashRouter>
  );
}