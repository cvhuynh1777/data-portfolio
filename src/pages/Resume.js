import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-[#0D0D0D] text-[#F8F4F0] py-16 px-6 md:px-20 lg:px-40 space-y-12"
    >
      <motion.h1
        className="text-5xl font-bold text-center text-pink-400"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h1>

      {/* Education */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-pink-300">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-pink-500/30"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-[#F2E9DC]">
              Georgia Tech
            </h3>
            <p className="text-pink-400">M.S. Computational Data Analytics</p>
            <p className="text-sm text-[#d3cfc7]">2025 – Present</p>
          </motion.div>
          <motion.div
            className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-pink-500/30"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-[#F2E9DC]">
              UC Berkeley
            </h3>
            <p className="text-pink-400">
              B.S. Electrical Engineering & CS
            </p>
            <p className="text-sm text-[#d3cfc7]">2019 – 2023</p>
          </motion.div>
          <motion.div
            className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-pink-500/30 md:col-span-2"
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-[#F2E9DC]">
              DataCamp Certified Professional
            </h3>
            <p className="text-pink-400">Data Scientist Certification</p>
            <p className="text-sm text-[#d3cfc7]">2025</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-pink-300">Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-[#1e1e1e] p-4 rounded-lg border border-pink-500/20">
            <h4 className="text-pink-400 font-semibold">Languages</h4>
            <p className="text-[#d3cfc7] text-sm">
              Python, R, SQL, Java, JavaScript, HTML, CSS
            </p>
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-lg border border-pink-500/20">
            <h4 className="text-pink-400 font-semibold">Tools</h4>
            <p className="text-[#d3cfc7] text-sm">
              Tableau, PostgreSQL, SQLite, FastAPI, NiFi
            </p>
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-lg border border-pink-500/20">
            <h4 className="text-pink-400 font-semibold">Soft Skills</h4>
            <p className="text-[#d3cfc7] text-sm">
              Leadership, Communication, Presenting
            </p>
          </div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-pink-300">Experience</h2>
        <div className="space-y-4">
          <motion.div
            className="bg-[#1e1e1e] p-6 rounded-xl border border-pink-500/20 shadow-md"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold text-[#F2E9DC]">
              CACI // Data Engineer
            </h3>
            <p className="text-sm text-[#d3cfc7]">
              Corona, CA // 2024 – Present
            </p>
            <p className="text-[#d3cfc7] mt-2 text-sm">
              Built dashboards, data pipelines, and CDE solutions supporting analytics for defense systems.
            </p>
          </motion.div>
          <motion.div
            className="bg-[#1e1e1e] p-6 rounded-xl border border-pink-500/20 shadow-md"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold text-[#F2E9DC]">
              CACI // Engineering Technician
            </h3>
            <p className="text-sm text-[#d3cfc7]">
              Corona, CA // 2020 – Current
            </p>
            <p className="text-[#d3cfc7] mt-2 text-sm">
              Analyzed Navy maintenance data, automated reports, and improved MTBF processing.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
