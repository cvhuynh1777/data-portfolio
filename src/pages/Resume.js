import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-900 text-white min-h-screen space-y-16">
      {/* Hero Title */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
          My Resume
        </h1>
        <p className="text-gray-400 text-lg">
          Technical background • Real-world impact • Always learning
        </p>
      </div>

      {/* === Education + Certifications === */}
      <section className="transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300 bg-[#111827] p-6 rounded-xl">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-4">Education & Certifications</h2>

        {/* UC Berkeley */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">B.S. Electrical Engineering & Computer Science</h3>
          <p className="text-gray-400">University of California, Berkeley</p>
          <p className="text-gray-400">2019 – 2023</p>
        </div>

        {/* Georgia Tech */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">M.S. Computational Data Analytics (In Progress)</h3>
          <p className="text-gray-400">Georgia Institute of Technology</p>
          <p className="text-gray-400">2025 – Current</p>
        </div>

        {/* Certs */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200">Certifications</h3>
          <ul className="list-disc list-inside text-gray-300 mt-1">
            <li><strong>Certified Data Scientist</strong> — Datacamp (2025)</li>
          </ul>
        </div>
      </section>

      {/* === Skills === */}
      <section className="transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300 bg-[#111827] p-6 rounded-xl">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-6">Skills</h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-semibold text-blue-200">Programming Languages</h3>
            <p className="text-gray-300">
              Python (+ data libraries), SQL, R, Java, JavaScript, HTML, CSS
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-200">Tools & Technologies</h3>
            <p className="text-gray-300">
              Tableau, Tableau Prep, PostgreSQL, Microsoft SQL Server, SQLite
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-200">Soft Skills</h3>
            <p className="text-gray-300">
              Communication, Presenting, Leading a Team
            </p>
          </div>
        </div>
      </section>

      {/* === Experience === */}
      <section className="transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300 bg-[#111827] p-6 rounded-xl">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-6">Experience</h2>

        {/* Job 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white">
            Data Analyst / Data Engineer / Technical Lead
          </h3>
          <p className="text-gray-400">CACI // Corona, CA // Jan 2024 – Present (Full-Time)</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 leading-relaxed">
            <li>Led and contributed to data-driven projects for federal clients.</li>
            <li>Designed, developed, and maintained scalable ETL pipelines.</li>
            <li>Performed data validation, cleaning, and exploration using Python and SQL.</li>
            <li>Integrated predictive models into pipelines to enhance business decisions.</li>
            <li>Built Tableau dashboards and automated reporting systems.</li>
            <li>Presented data findings to stakeholders including Pentagon representatives.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white">
            Engineering Technician / Supply Chain Data Analyst
          </h3>
          <p className="text-gray-400">CACI // Corona, CA // Oct 2020 – Current (Part-Time)</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 leading-relaxed">
            <li>Analyzed ship part reliability data to support Navy logistics operations.</li>
            <li>Created predictive reports to identify parts requiring maintenance or replacement.</li>
            <li>Published quarterly analysis reports to inform long-term decision making.</li>
            <li>Supported strategic supply chain planning with insights and metrics.</li>
          </ul>
        </div>

        {/* Job 3 */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Supply Chain Data Analytics Intern
          </h3>
          <p className="text-gray-400">Naval Surface Warfare Center // Corona, CA // Jun – Aug 2020</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 leading-relaxed">
            <li>Assisted in evaluating supply chain management tools and performance metrics.</li>
            <li>Developed testing criteria and dashboards to benchmark tool efficiency.</li>
            <li>Contributed to a research study optimizing naval logistics software.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
