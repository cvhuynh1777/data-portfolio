import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-10">My Resume</h1>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Electrical Engineering & Computer Science</h3>
          <p className="text-gray-400">University of California, Berkeley</p>
          <p className="text-gray-400">2019 - 2023</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Masters in Computational Data Analytics (In-Progress)</h3>
          <p className="text-gray-400">Georgia Institute of Technology</p>
          <p className="text-gray-400">2025 - CURRENT</p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li><strong>Certified Data Scientist</strong> - Datacamp (2025)</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-4">Skills</h2>

        {/* Programming Languages */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-200">Programming Languages</h3>
          <p className="text-gray-300"><strong>Python</strong>, SQL, Java, C++, JavaScript</p>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-200">Tools & Technologies</h3>
          <p className="text-gray-300"><strong>Tableau</strong>, Power BI, Pandas, NumPy, Scikit-learn, TensorFlow</p>
        </div>

        {/* Data Engineering */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-200">Data Engineering</h3>
          <p className="text-gray-300"><strong>ETL Pipelines</strong>, Data Cleaning, Data Warehousing, Apache Spark</p>
        </div>

        {/* Soft Skills */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-blue-200">Soft Skills</h3>
          <p className="text-gray-300"><strong>Communication</strong>, Problem-Solving, Leadership, Critical Thinking</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-300 border-b pb-2 mb-4">Experience</h2>

        {/* Job 1 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Data Analyst / Data Engineer / Technical Lead</h3>
          <p className="text-gray-400">CACI // Corona, CA // Jan 2024 – Present</p>
          <p className="text-gray-300">
            Leading data-driven projects, developing <strong>Python-based ETL pipelines</strong>, and building <strong>Tableau dashboards</strong> to support analytics and decision-making for stakeholders, including the Pentagon.
          </p>
        </div>

        {/* Job 2 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Engineering Technician / Supply Chain Data Analyst</h3>
          <p className="text-gray-400">CACI // Corona, CA // Oct 2020 – Current</p>
          <p className="text-gray-300">
            Conducted <strong>data analysis on supply chain operations</strong>, developed <strong>predictive models for ship maintenance</strong>, and created <strong>quarterly health reports</strong> to optimize logistics and component reliability.
          </p>
        </div>

        {/* Job 3 */}
        <div>
          <h3 className="text-xl font-semibold">Supply Chain Data Analytics Intern</h3>
          <p className="text-gray-400">Naval Surface Warfare Center // Corona, CA // June 2020 – Aug 2020</p>
          <p className="text-gray-300">
            Assisted in <strong>evaluating and optimizing supply chain software</strong>, developed <strong>data-driven testing criteria</strong>, and analyzed performance metrics to improve decision-making efficiency.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
