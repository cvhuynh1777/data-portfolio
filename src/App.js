import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Home from "./pages/Home"; // ⬅️ NEW

function App() {
  return (
    <Router>
    <div className="bg-gradient-to-b from-[#0D0D0D] via-[#151515] to-[#0D0D0D] text-[#fefae0]">


        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-10 py-5 bg-[#1e1e1e] shadow-lg border-b border-[#333]">
          <ul className="flex space-x-6 text-[#fefae0]">
            <li>
              <a href="#home" className="hover:text-[#f4a261] transition duration-300">Home</a>
            </li>
            <li>
              <a href="#resume" className="hover:text-[#f4a261] transition duration-300">Resume</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#f4a261] transition duration-300">Projects</a>
            </li>
          </ul>
        </nav>

        {/* Main content sections */}
        <main className="pt-28 space-y-32 scroll-smooth">
          <section id="home" className="scroll-mt-20"><Home /></section>
          <section id="resume" className="scroll-mt-20"><Resume /></section>
          <section id="projects" className="scroll-mt-20"><Projects /></section>
        </main>
      </div>
    </Router>
  );
}

export default App;
