import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="pt-28 min-h-screen flex flex-col items-center justify-center text-center px-8 md:px-20 lg:px-40 bg-[#0D0D0D] text-[#F8F4F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#264653] to-[#2a9d8f] opacity-30 blur-3xl -z-10"></div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-[#F2E9DC]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi, I'm <span className="text-[#E6B17E]">Christina Huynh</span> 👋
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#d3cfc7] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm a Master's student passionate about turning raw data into meaningful insights. Scroll down to explore my work!
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#resume"
            className="bg-[#E6B17E] text-[#0D0D0D] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="border border-[#E6B17E] text-[#E6B17E] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#E6B17E] hover:text-[#0D0D0D] transition-colors"
          >
            See Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
