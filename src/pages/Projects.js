import React from "react";
import { motion } from "framer-motion";
import shotPredictorGif from "../assets/shot_predictor_demo.gif";
import splitmateGif from "../assets/splitmate_demo.gif";
import reviewSentimentGif from "../assets/reviews_sentiment_analysis.gif";
import nbaChampionGif from "../assets/nba_champion.gif";
import pulseGif from "../assets/pulse_demo.gif";


function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 max-w-6xl mx-auto space-y-12 bg-[#0D0D0D] text-[#F8F4F0]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <motion.h1
          className="text-5xl font-bold text-center text-[#F2E9DC] mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
        {/* === Project 5 === */}
        <div className="group bg-[#1e1e1e] p-4 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <img
            src={pulseGif}
            alt="Pulse Sentiment Analysis Demo"
            className="w-full rounded-lg transition duration-300 group-hover:opacity-90"
          />
          <h2 className="text-3xl font-extrabold text-white mt-4 transition-colors duration-300 group-hover:text-pink-300">
            Pulse: YouTube Sentiment Explorer
          </h2>
          <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">
            A pastel-themed web app that analyzes YouTube audience sentiment using VADER NLP. Users can check the emotional pulse of trending videos, search topics, or paste any URL for real-time analysis.
          </p>
          <p className="text-sm text-gray-400 italic mt-1">
            Built with Next.js, TailwindCSS, VADER, and Google YouTube Data API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://pulse-app-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 text-lg font-medium transition-colors"
            >
              🌐 View Live App →
            </a>
            <a
              href="https://github.com/cvhuynh1777/PulseApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
            >
              🧠 View GitHub Repo →
            </a>
          </div>
        </div>

        {/* === Project 1 === */}
        <div className="group bg-[#1e1e1e] p-4 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <img
            src={shotPredictorGif}
            alt="NBA Shot Predictor Demo"
            className="w-full rounded-lg transition duration-300 group-hover:opacity-90"
          />
          <h2 className="text-3xl font-extrabold text-white mt-4 transition-colors duration-300 group-hover:text-orange-300">
            NBA Shot Predictor Dashboard
          </h2>
          <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">
            A machine learning-powered Tableau dashboard that predicts NBA shot
            success probabilities using historical game data from 2004–2024.
          </p>
          <p className="text-sm text-gray-400 italic mt-1">
            Built using XGBoost and enriched with interactive court
            visualizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://public.tableau.com/app/profile/christina.huynh1211/viz/NBAShotPredictor/NBAShotPredictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 text-lg font-medium transition-colors"
            >
              📊 View Tableau Dashboard →
            </a>
            <a
              href="https://github.com/cvhuynh1777/nba_shot_analysis_project/blob/main/NBA%20Shot%20Analysis.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
            >
              🧠 View Case Study Notebook →
            </a>
          </div>
        </div>

        {/* === Project 2 === */}
        <div className="group bg-[#1e1e1e] p-4 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <img
            src={splitmateGif}
            alt="SplitMate Demo"
            className="w-full rounded-lg transition duration-300 group-hover:opacity-90"
          />
          <h2 className="text-3xl font-extrabold text-white mt-4 transition-colors duration-300 group-hover:text-orange-300">
            SplitMate: Receipt Splitting AI Assistant
          </h2>
          <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">
            A Streamlit app that uses OCR and Large Language Models to
            automatically parse receipts and suggest equitable splits among
            participants.
          </p>
          <p className="text-sm text-gray-400 italic mt-1">
            Tools: Python, Streamlit, Google Cloud Vision, Hugging Face Zephyr-7B (via huggingface-hub)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://github.com/cvhuynh1777/splitmate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
            >
              🧠 View GitHub Repo →
            </a>
          </div>
        </div>

        {/* === Project 3 === */}
        <div className="group bg-[#1e1e1e] p-4 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <img
            src={reviewSentimentGif}
            alt="Review Sentiment Analysis Demo"
            className="w-full rounded-lg transition duration-300 group-hover:opacity-90"
          />
          <h2 className="text-3xl font-extrabold text-white mt-4 transition-colors duration-300 group-hover:text-orange-300">
            Review Sentiment Analysis Dashboard
          </h2>
          <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">
            Enhanced from Mo Chen’s YouTube dashboard tutorial with VADER NLP
            integration for sentiment analysis. The Jupyter Notebook processes
            product reviews, assigns sentiment scores, and exports a
            Tableau-ready dataset.
          </p>
          <p className="text-sm text-gray-400 italic mt-1">
            Tools: Python, VADER, Pandas, Tableau
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://public.tableau.com/app/profile/christina.huynh1211/viz/BA_Reviews_SentimentDashboard/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 text-lg font-medium transition-colors"
            >
              📊 View Tableau Dashboard →
            </a>
            <a
              href="https://github.com/cvhuynh1777/airline_review_sentiment/blob/main/Reviews%20Sentiment%20Analysis.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-lg font-medium transition-colors"
            >
              🧠 View GitHub Repo →
            </a>
          </div>
        </div>

        {/* === Project 4 === */}
        <div className="group bg-[#1e1e1e] p-4 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <img
            src={nbaChampionGif}
            alt="NBA Champion Project"
            className="w-full rounded-lg transition duration-300 group-hover:opacity-90"
          />
          <h2 className="text-3xl font-extrabold text-white mt-4 transition-colors duration-300 group-hover:text-orange-300">
            How to Build an NBA Champion
          </h2>
          <p className="text-lg text-gray-300 mt-2 transition-colors duration-300 group-hover:text-gray-200">
            A machine learning case study exploring the critical components of
            winning an NBA Championship — from drafting stars to fostering team
            chemistry and playoff performance.
          </p>
          <p className="text-sm text-gray-400 italic mt-1">
            IEOR 142 (Machine Learning & Data Analytics) Final Project — UC
            Berkeley
          </p>
          <div className="pt-2">
            <a
              href="https://github.com/cvhuynh1777/IEOR142/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors"
            >
              🧠 View Report →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
