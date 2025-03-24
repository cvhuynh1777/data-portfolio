import React from "react";
import shotPredictorGif from "../assets/shot_predictor_demo.gif";
import amazonLaptopsGif from "../assets/amazon_laptops.gif";
import reviewSentimentGif from "../assets/reviews_sentiment_analysis.gif";
import nbaChampionGif from "../assets/nba_champion.gif";

function Projects() {
  return (
    <section className="p-6 max-w-6xl mx-auto text-white space-y-16">
      {/* === Reusable Project Card === */}
      <div className="grid gap-12">
        {/* === Project 1 === */}
        <div className="bg-[#111827] rounded-xl p-6 transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300">
          <h2 className="text-3xl font-extrabold mb-2">🏀 NBA Shot Predictor Dashboard</h2>
          <p className="text-gray-300 mb-2">
            A machine learning-powered Tableau dashboard that predicts NBA shot success probabilities using historical game data from 2004–2024.
          </p>
          <p className="text-sm text-gray-400 italic mb-4">
            Built using XGBoost and enriched with interactive court visualizations.
          </p>
          <img
            src={shotPredictorGif}
            alt="NBA Shot Predictor Demo"
            className="w-full rounded-xl shadow-md object-cover mb-4"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://public.tableau.com/app/profile/christina.huynh1211/viz/NBAShotPredictor/NBAShotPredictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              🚀 View Live Dashboard →
            </a>
            <a
              href="https://github.com/cvhuynh1777/nba_shot_analysis_project/blob/main/NBA%20Shot%20Analysis.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              📓 View Case Study Notebook →
            </a>
          </div>
        </div>

        {/* === Project 2 === */}
        <div className="bg-[#111827] rounded-xl p-6 transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300">
          <h2 className="text-3xl font-extrabold mb-2">💻 Amazon Laptops Competitor Analysis</h2>
          <p className="text-gray-300 mb-2">
            Collected and analyzed Amazon laptop listings for competitive insights. Scraped product data with the Amazon API, stored in SQLite, and visualized with Tableau.
          </p>
          <p className="text-sm text-gray-400 italic mb-4">
            Tools: Python, SQLite, Requests, Tableau
          </p>
          <img
            src={amazonLaptopsGif}
            alt="Amazon Laptop Dashboard"
            className="w-full rounded-xl shadow-md object-cover mb-4"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://public.tableau.com/app/profile/christina.huynh1211/viz/AmazonLaptopReviewsDashboard/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              📊 View Tableau Dashboard →
            </a>
            <a
              href="https://github.com/cvhuynh1777/amazon_data_project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              🧠 View GitHub Repo →
            </a>
          </div>
        </div>

        {/* === Project 3 === */}
        <div className="bg-[#111827] rounded-xl p-6 transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300">
          <h2 className="text-3xl font-extrabold mb-2">💬 Review Sentiment Analysis Dashboard</h2>
          <p className="text-gray-300 mb-2">
            Inspired by Mo Chen’s tutorial, I added VADER NLP sentiment scoring to product reviews and built an interactive dashboard.
          </p>
          <p className="text-sm text-gray-400 italic mb-4">
            Tools: Python, VADER, Pandas, Tableau &nbsp; | &nbsp; Skills: NLP, Sentiment Analysis, Dashboard Design
          </p>
          <img
            src={reviewSentimentGif}
            alt="Sentiment Analysis Demo"
            className="w-full rounded-xl shadow-md object-cover mb-4"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://public.tableau.com/app/profile/christina.huynh1211/viz/BA_Reviews_SentimentDashboard/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              📊 View Tableau Dashboard →
            </a>
            <a
              href="https://github.com/cvhuynh1777/airline_review_sentiment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              🧠 View GitHub Repo →
            </a>
          </div>
        </div>

        {/* === Project 4 === */}
        <div className="bg-[#111827] rounded-xl p-6 transition hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 duration-300">
          <h2 className="text-3xl font-extrabold mb-2">🏆 How to Build an NBA Champion</h2>
          <p className="text-gray-300 mb-2">
            Our final project for IEOR 142 (UC Berkeley) explores what it takes to win an NBA championship — from drafting stars to winning playoff games.
          </p>
          <p className="text-sm text-gray-400 italic mb-4">
            IEOR 142 Final — UC Berkeley Machine Learning & Data Analytics
          </p>
          <img
            src={nbaChampionGif}
            alt="NBA Champion Project Demo"
            className="w-full rounded-xl shadow-md object-cover mb-4"
          />
          <a
            href="https://github.com/cvhuynh1777/IEOR142/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            📘 View GitHub Report →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
