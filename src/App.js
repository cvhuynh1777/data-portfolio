import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-10 py-5 bg-gray-800 shadow-lg">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </li>
            <li>
              <a href="#resume" className="hover:text-blue-400 transition">Resume</a>
            </li>
          </ul>
        </nav>

        {/* Scrollable Home */}
        <Home />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="pt-28 space-y-32 scroll-smooth">
      {/* ===== Hero Section ===== */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur-3xl"></div>

        <motion.h2 
          className="text-6xl font-extrabold text-white z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-400">Christina Huynh</span> 👋
        </motion.h2>

        <motion.p 
          className="mt-4 text-lg text-gray-300 max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a data enthusiast passionate about turning raw data into meaningful insights. Scroll down to explore my work!
        </motion.p>

        <motion.div 
          className="mt-6 flex space-x-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#resume">
            <motion.button 
              className="px-6 py-3 border border-blue-600 rounded-lg text-blue-400 font-semibold text-lg hover:bg-blue-600 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
            </motion.button>
          </a>
          <a href="#projects">
            <motion.button 
              className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold text-lg hover:bg-blue-500 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
          </a>
        </motion.div>
      </section>

      {/* ===== Resume Section (Now First) ===== */}
      <section id="resume" className="scroll-mt-20">
        <Resume />
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
    </div>
  );
};


export default App;
