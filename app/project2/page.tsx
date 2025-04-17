"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topics = [
  { id: 'descriptive', label: 'Scatter: True vs Predicted', img: '/analysis/1_scatter_true_vs_pred.png' },
  { id: 'histogram', label: 'Histogram of Ratings', img: '/analysis/2_rating_histogram.png' },
  { id: 'rmse', label: 'RMSE Distribution per User', img: '/analysis/3_rmse_distribution.png' },
  { id: 'cosine', label: 'Cosine Similarity Heatmap', img: '/analysis/4_cosine_similarity_heatmap.png' },
  { id: 'top10', label: 'Top 10 Movies by Avg Rating', img: '/analysis/5_top_10_avg_rating.png' },
  { id: 'knn', label: 'KNN: RMSE vs Neighbors', img: '/analysis/6_knn_rmse_vs_k.png' },
  { id: 'boxplot', label: 'User Rating Boxplot', img: '/analysis/7_user_rating_boxplot.png' },
  { id: 'accuracy', label: 'Prediction Accuracy per Rating', img: '/analysis/8_accuracy_per_rating.png' },
];

export default function Project2Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navbar */}
        <motion.nav
          className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-lg mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl font-bold text-gray-900">Movie Recommendation Analysis</span>
          <div className="space-x-6">
            <Link href="/" className="text-gray-800 hover:underline">Home</Link>
            <Link href="/projects" className="text-gray-800 hover:underline">Projects</Link>
            <Link href="/about" className="text-gray-800 hover:underline">About</Link>
          </div>
        </motion.nav>

        <div className="flex gap-8">
          {/* Sidebar: Topics + Reports */}
          <div className="w-1/4 self-start sticky top-6 flex flex-col space-y-6">
            <aside className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Topics</h3>
              <ul className="space-y-2">
                {topics.map(t => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-gray-700 hover:text-indigo-600 hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Reports</h3>
              <a
                href="https://drive.google.com/uc?export=download&id=1EMEmT5wVc76IvlWdT7YmBVjLzYc8LUsb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mb-2 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition duration-200 text-center"
              >
                📄 Theory 2 Report
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1C8KMkXWGKV4uqneP2P0r64-mXalsAdIY"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 transition duration-200 text-center"
              >
                🧪 Lab 2 Report
              </a>
            </motion.div>
          </div>

          {/* Main Content: Large Cards + Graph Sections */}
          <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large Feature Card: KNN Collaborative Filtering */}
            <motion.div
              className="col-span-1 md:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Collaborative Filtering with KNN</h2>
              <p className="text-gray-600">
                We implemented a K-Nearest Neighbors model to predict user ratings by finding similar users based on cosine similarity of their rating vectors.
              </p>
            </motion.div>

            {/* Large Feature Card: Neural Collaborative Filtering */}
            <motion.div
              className="col-span-1 md:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Neural Collaborative Filtering</h2>
              <p className="text-gray-600">
                We developed a neural network hybrid that learns user and item embeddings, stacking dense layers to capture complex interactions and improve recommendation accuracy.
              </p>
            </motion.div>

            {/* Graph Sections */}
            {topics.map(t => (
              <section key={t.id} id={t.id} className="bg-white p-6 rounded-2xl shadow-lg">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-semibold mb-4 text-gray-900"
                >
                  {t.label}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-4"
                >
                  <Image
                    src={t.img}
                    alt={t.label}
                    width={900}
                    height={400}
                    className="rounded-md border w-full h-auto object-cover"
                  />
                </motion.div>

                <p className="text-sm text-gray-600">
                  {(() => {
                    switch (t.id) {
                      case 'descriptive': return 'Scatter: True Ratings vs Predicted — compares ground truth to model outputs, revealing prediction spread.';
                      case 'histogram': return 'Histogram of Movie Ratings — shows global rating distribution with concentration around 3–4.';
                      case 'rmse': return 'RMSE Distribution per User — quantifies per-user prediction error, highlighting variability.';
                      case 'cosine': return 'Cosine Similarity Heatmap — visualizes user-user similarity subset for collaborative filtering.';
                      case 'top10': return 'Top 10 Movies by Avg Rating — identifies highest-rated titles to benchmark recommendations.';
                      case 'knn': return 'KNN RMSE vs Neighbors — explores effect of neighbor count on prediction error.';
                      case 'boxplot': return 'Boxplot of Ratings for Random Users — illustrates user rating behavior and outliers.';
                      case 'accuracy': return 'Prediction Accuracy per Rating — measures correct predictions per rating level.';
                      
                      default: return '';
                    }
                  })()}
                </p>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}