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
            <ul className="list-disc list-inside text-[#d3cfc7] pt-2">
              <h3 className="text-xl font-semibold">DataCamp Certified Professional Data Scientist (2025)</h3>
            </ul>
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
              <li>Led and contributed to data-driven projects</li>
              <li>Designed, developed, and maintained robust data pipelines to support analytics and reporting needs</li>
              <li>Conducted exploratory data analysis, data validation, and cleaning to ensure data integrity and usability</li>
              <li>Developed Python scripts to automate data processing and pipeline workflows</li>
              <li>Communicated with statisticians to integrate predictive models into data pipelines</li>
              <li>Built and maintained dashboards in Tableau</li>
              <li>Presented technical findings to stakeholders, including representatives from the Pentagon</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#e7d8c9]">Engineering Technician / Supply Chain Data Analyst</h3>
            <p className="text-[#d3cfc7]">CACI // Corona, CA // October 2020 – Current (Part-Time)</p>
            <ul className="list-disc list-inside text-[#d3cfc7] mt-2">
              <li>Analyzed supply chain and ship data to assess the reliability and maintenance needs of critical components</li>
              <li>Developed reports to predict whether ship parts required replacement</li>
              <li>Created quarterly parts health analysis reports and presentations</li>
              <li>Conducted data validation, cleaning, and exploratory analysis</li>
              <li>Supported planning in logistics and maintenance with data insights</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#e7d8c9]">Supply Chain Data Analytics Intern</h3>
            <p className="text-[#d3cfc7]">Naval Surface Warfare Center // Corona, CA // June 2020 – August 2020</p>
            <ul className="list-disc list-inside text-[#d3cfc7] mt-2">
              <li>Contributed to a research project focused on evaluating and optimizing supply chain management software tools</li>
              <li>Developed testing criteria to assess software performance and reliability</li>
              <li>Analyzed operations to identify performance metrics and KPIs</li>
              <li>Provided data-driven insights to improve efficiency</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;