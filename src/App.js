import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
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

// 🎨 Modern Animated Home Page
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-5 relative overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur-3xl"></div>

      {/* Animated Intro Text */}
      <motion.h2 
        className="text-6xl font-extrabold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">[Your Name]</span> 👋
      </motion.h2>

      <motion.p 
        className="mt-4 text-lg text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I’m a data enthusiast passionate about turning raw data into meaningful insights.
        Check out my projects and case studies!
      </motion.p>

      {/* Animated Buttons */}
      <motion.div 
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="/projects">
          <motion.button 
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold text-lg hover:bg-blue-500 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Projects
          </motion.button>
        </Link>

        <Link to="/resume">
          <motion.button 
            className="px-6 py-3 border border-blue-600 rounded-lg text-blue-400 font-semibold text-lg hover:bg-blue-600 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Resume
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default App;
