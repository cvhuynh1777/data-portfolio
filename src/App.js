import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-5 bg-gray-800 shadow-lg">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/resume" className="hover:text-blue-400 transition">Resume</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
            <li><Link to="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link></li>
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

// 🎨 Modern Home Page Component
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-5">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
        Hi, I'm [Your Name] 👋
      </h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        I'm a data enthusiast passionate about turning raw data into meaningful insights. 
        Check out my projects and case studies!
      </p>
      <div className="mt-6">
        <Link to="/projects" className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold text-lg hover:bg-blue-500 transition">
          View My Projects
        </Link>
        <Link to="/resume" className="ml-4 px-6 py-3 border border-blue-600 rounded-lg text-blue-400 font-semibold text-lg hover:bg-blue-600 hover:text-white transition">
          View My Resume
        </Link>
      </div>
    </div>
  );
};

export default App;
