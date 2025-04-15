import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="bg-[#0D0D0D] text-[#F8F4F0] py-16 px-8 md:px-20 lg:px-40">
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-5xl font-bold text-center text-[#F2E9DC] mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h1>

        {/* Education */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#F2E9DC] border-b border-[#a38f7d] pb-2">
            Education & Certifications
          </h2>

          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">Electrical Engineering & Computer Science</h3>
              <p className="text-[#d3cfc7]">University of California, Berkeley</p>
              <p className="text-[#d3cfc7]">2019 - 2023</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Masters in Computational Data Analytics (In Progress)</h3>
              <p className="text-[#d3cfc7]">Georgia Institute of Technology</p>
              <p className="text-[#d3cfc7]">2025 - CURRENT</p>
            </div>
            
            
                <h3 className="text-xl font-semibold">DataCamp Certified Professional Data Scientist (2025)</h3>
              
            
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#F2E9DC] border-b border-[#a38f7d] pb-2">Skills</h2>
          <div>
            <h3 className="text-xl font-semibold text-[#f2e1c2]">Programming Languages</h3>
            <p className="text-[#d3cfc7]">Python (+ data-related libraries), SQL, R, Java, JavaScript, HTML, CSS</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#f2e1c2]">Tools & Technologies</h3>
            <p className="text-[#d3cfc7]">Tableau, Tableau Prep, PostgreSQL, Microsoft SQL Server, SQLite</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#f2e1c2]">Soft Skills</h3>
            <p className="text-[#d3cfc7]">Communication, Presenting, Leading a Team</p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#F2E9DC] border-b border-[#a38f7d] pb-2">Experience</h2>

          <div>
            <h3 className="text-xl font-bold text-[#e7d8c9]">Data Analyst / Data Engineer / Technical Lead</h3>
            <p className="text-[#d3cfc7]">CACI // Corona, CA // January 2024 – Present (Full-Time)</p>
            <ul className="list-disc list-inside text-[#d3cfc7] mt-2">
              <li>Built Tableau dashboard to streamline missile maintenance reporting for engineers at the Naval Weapons Station</li>
              <li>Designed and implemented data pipelines to support analytics and predictive modeling efforts</li>
              <li>Collaborated with subject matter experts across the nation to develop scalable Common Data Environment (CDE) solutions for improved data accessibility and collaboration</li>
              <li>Built a dashboard to visualize combat effectiveness modeling, enabling Pentagon stakeholders to make data-driven decisions on mission-critical investments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#e7d8c9]">Engineering Technician / Supply Chain Data Analyst</h3>
            <p className="text-[#d3cfc7]">CACI // Corona, CA // October 2020 – Current (Part-Time)</p>
            <ul className="list-disc list-inside text-[#d3cfc7] mt-2">
              <li>Analyzed maintenance and reliability data for Navy ship components to improve asset readiness </li>
              <li>Created quarterly reports and presentation highlighting trends in parts health and providing actionable insights</li>
              <li>Developed Python scripts to automate data cleaning and feature engineering for MTBF (Mean Time Between Failures) reports, improving report accuracy and processing speed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#e7d8c9]">Supply Chain Data Analytics Intern</h3>
            <p className="text-[#d3cfc7]">Naval Surface Warfare Center // Corona, CA // June 2020 – August 2020</p>
            <ul className="list-disc list-inside text-[#d3cfc7] mt-2">
              <li>Researched supply chain operations and parts obsolescence during COVID-19, focusing on resilience under uncertainty</li>
              <li>Attended product demos and evaluated multiple supply chain software tools; provided recommendations that were shared with upper leadership in Washington, D.C.</li>
              <li>Developed scripts to automate file organization, improving workflow efficiency for the research team</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;