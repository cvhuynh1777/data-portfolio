import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">My Portfolio</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Component
const Home = () => (
  <div className="home">
    <h2>Welcome to My Portfolio</h2>
    <p>Explore my resume, projects, and case studies.</p>
  </div>
);

export default App;
