// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Router>
      <div className="relative text-[#F8F4F0] min-h-screen overflow-hidden">
        {/* Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] animate-gradient-x -z-20" />

        {/* Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              color: { value: "#ff80bf" },
              links: {
                color: "#ff80bf",
                distance: 120,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 0.5 },
              number: { density: { enable: true, area: 800 }, value: 50 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            detectRetina: true,
          }}
        />

        {/* Morphing Blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

        {/* Navbar */}
        <nav className="fixed w-full top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#1e1e1e]/80 backdrop-blur-md shadow-lg border-b border-[#333]">
          <div className="text-pink-400 font-bold text-lg tracking-wider">
            Christina Huynh
          </div>
          <ul className="flex space-x-6 text-[#fefae0] font-medium">
            {["home", "resume", "projects"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="relative group transition-colors duration-300 hover:text-pink-400"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content (smooth scroll only) */}
        <main className="pt-24 space-y-20 relative z-10">
          <section id="home" className="scroll-mt-20">
            <Home />
          </section>

          <section id="resume" className="scroll-mt-20">
            <Resume />
          </section>

          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
