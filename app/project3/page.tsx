"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Updated to include Hadoop MapReduce assignment cards above analytics sections
const topics = [
  { id: 'histogram', label: 'Histogram of Box Office Revenue' },
  { id: 'avgGenreRevenue', label: 'Average Revenue by Genre' },
  { id: 'revenueVsYear', label: 'Revenue vs. Year Scatter Plot' },
  { id: 'boxplotByGenre', label: 'Revenue Distribution by Genre' },
  { id: 'genreDistribution', label: 'Genre Distribution (Pie Chart)' },
  { id: 'avgOverTime', label: 'Average Revenue Over Time' },
  { id: 'correlationHeatmap', label: 'Correlation Heatmap' },
  { id: 'pairplot', label: 'Pairplot of Key Metrics' },
  { id: 'ratingRegression', label: 'Rating vs. Revenue Regression' },
  { id: 'densityPlot', label: 'Density Plot of Revenue' },
];

export default function Project3Page() {
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
          <span className="text-2xl font-bold text-gray-900">Movie Recommendation System</span>
          <div className="space-x-6">
            <Link href="/" className="text-gray-800 hover:underline">Home</Link>
            <Link href="/projects" className="text-gray-800 hover:underline">Projects</Link>
            <Link href="/about" className="text-gray-800 hover:underline">About</Link>
          </div>
        </motion.nav>

        <div className="flex gap-8">
          {/* Sidebar + Reports */}
          <div className="w-1/4 self-start sticky top-6 flex flex-col space-y-6">
            <aside className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Topics</h3>
              <ul className="space-y-2">
                {topics.map(topic => (
                  <li key={topic.id}>
                    <a href={`#${topic.id}`} className="text-gray-700 hover:text-indigo-600 hover:underline">
                      {topic.label}
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
                href="https://drive.google.com/uc?export=download&id=1GEe2kovnuAWcIcXKHvpd_6p1CIJCJJAp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mb-2 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition duration-200 text-center"
              >
                📄 Theory 3 Report
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1fx_TcEQKDxOp9_XSAFM6As7IyegCQOHl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 transition duration-200 text-center"
              >
                🧪 Lab 3 Report
              </a>
            </motion.div>
          </div>

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {/* Hadoop & MapReduce Assignment Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-6 border rounded-2xl bg-white shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Assignment 3: Large-Scale Movie Recommendation Analysis with Hadoop MapReduce
              </h2>
              <p className="text-gray-600 mb-4">
                This assignment focuses on harnessing Hadoop MapReduce to process and analyze a large-scale movie recommendation dataset, enabling scalable aggregation of user ratings and movie metadata.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Conceptual Framework: MapReduce for Movie Insights
              </h3>
              <p className="text-gray-600 mb-3">
                Utilizing Hadoop MapReduce for distributed handling of movie ratings and metadata to derive key recommendations metrics.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Motivation:</strong> Vast volumes of user ratings, movie metadata, and genre information require scalable, fault-tolerant processing.</li>
                <li><strong>MapReduce Paradigm:</strong> Mapper emits key-value pairs (e.g., {'<Genre, Rating>'}), Reducer aggregates to compute average ratings, rating counts, and genre popularity.</li>
                <li><strong>Objective:</strong> Extract actionable insights like top-rated genres, popular movies by release year, and user rating distributions at scale.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 border rounded-2xl bg-white shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Implementation & Experimental Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Execution via Hadoop Streaming with custom Python mappers and reducers on HDFS-stored movie recommendations data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Dataset & Environment</h4>
                  <p className="text-sm text-gray-600">
                    Movielens dataset (Movie ID, Title, Genres, User ID, Rating, Timestamp) processed on a pseudo-distributed Hadoop cluster with data in HDFS.
                  </p>
                  <div className="p-3 bg-gray-100 rounded-md">
                    <p className="text-sm font-medium text-gray-900">Schema Example:</p>
                    <p className="text-xs text-gray-600">(UserID, MovieID, Rating, Timestamp, Genres)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">MapReduce Pipeline</h4>
                  <p className="text-sm text-gray-600">
                    Hadoop Streaming runs mapper.py and reducer.py to calculate metrics like average rating per genre, total ratings per movie, and rating distributions.
                  </p>
                  {/* Updated code block color */}
                  <pre className="text-xs text-gray-600 bg-gray-100 p-2 rounded overflow-x-auto">
                    <code>
                      jar hadoop-streaming.jar \
                      -input /user/hadoop/movies.csv \
                      -output /user/hadoop/movie_output \
                      -mapper mapper.py \
                      -reducer reducer.py
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Analytics Graph Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topics.map((topic, idx) => (
                <section key={topic.id} id={topic.id} className="bg-white p-6 rounded-2xl shadow-lg">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-semibold mb-4 text-gray-900"
                  >
                    {topic.label}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4"
                  >
                    <Image
                      src={`/analysis/${{
                        histogram: 'graph1_histogram_boxoffice',
                        avgGenreRevenue: 'graph2_bar_avg_boxoffice_genre',
                        revenueVsYear: 'graph3_scatter_year_boxoffice',
                        boxplotByGenre: 'graph4_boxplot_boxoffice_genre',
                        genreDistribution: 'graph5_pie_genre_distribution',
                        avgOverTime: 'graph6_line_avg_boxoffice_year',
                        correlationHeatmap: 'graph7_heatmap_correlation',
                        pairplot: 'graph8_pairplot',
                        ratingRegression: 'graph9_regplot_rating_boxoffice',
                        densityPlot: 'graph10_density_boxoffice',
                      }[topic.id]}.png`}
                      alt={topic.label}
                      width={900}
                      height={400}
                      className="rounded-md border w-full h-auto object-cover"
                    />
                  </motion.div>
                  <p className="text-sm text-gray-600">
                    {/* descriptions omitted for brevity */}
                  </p>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}