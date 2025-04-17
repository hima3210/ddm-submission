"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaProjectDiagram, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const datasets = [
    {
      title: 'MovieLens 100K',
      description: '100,000 ratings from 943 users on 1682 movies, a stable benchmark for recommender systems.',
      link: 'https://www.kaggle.com/datasets/prajitdatta/movielens-100k-dataset'
    },
    {
      title: 'MovieLens Latest Full',
      description: '27,753,444 ratings and 1,108,997 tag applications across 58,098 movies.',
      link: 'https://www.kaggle.com/datasets/grouplens/movielens-latest-full'
    },
    {
      title: 'Netflix Prize Data',
      description: '~100M ratings for 17,770 movies by 480,189 users from Netflix’s recommendation competition.',
      link: 'https://www.kaggle.com/datasets/netflix-inc/netflix-prize-data'
    },
    {
      title: 'TMDB 5000 Movie Dataset',
      description: 'Metadata for ~5,000 movies: budgets, revenues, genres, cast & crew details.',
      link: 'https://www.kaggle.com/datasets/kryusufkaya/tmdb-5000-movies'
    },
    {
      title: 'IMDb 5000 Movie Dataset',
      description: '5,000+ movie records covering 28 attributes like director, cast, genres, language, and budget.',
      link: 'https://www.kaggle.com/datasets/deepmatrix/imdb-5000-movie-dataset'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navbar */}
        <motion.nav
          className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl font-bold text-gray-900">
            Movie Recommendation System
          </span>
          <div className="space-x-6">
            <Link href="/" className="text-gray-800 hover:underline">Home</Link>
            <Link href="/projects" className="text-gray-800 hover:underline">Projects</Link>
            <Link href="/about" className="text-gray-800 hover:underline">About</Link>
          </div>
        </motion.nav>

        {/* Profiles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Student Card */}
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg flex items-start gap-6 h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-500 shrink-0">
              <Image src="/images/student.jpeg" alt="Vadlamudi Himasree" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Student Profile</h2>
              <p className="mt-2 text-lg font-medium text-indigo-600">Vadlamudi Himasree</p>
              <p className="mt-1 text-sm text-gray-600">Roll No.: 242CS037</p>
              <Link
                href="https://in.linkedin.com/in/hima32"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-indigo-600 hover:underline"
              >
                <FaLinkedin className="mr-2" /> View LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* Instructor Card */}
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg flex items-start gap-6 h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-500 shrink-0">
              <Image src="/images/instructor.jpg" alt="Dr. Chandrasekaran K" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Course Instructor</h2>
              <p className="mt-2 text-lg font-medium text-indigo-600">Dr. Chandrasekaran K</p>
              <p className="mt-1 text-sm text-gray-600">
                Department of Computer Science & Engineering<br />
                National Institute of Technology Karnataka, Surathkal
              </p>
              <Link
                href="https://cse.nitk.ac.in/faculty/chandrasekaran-k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-indigo-600 hover:underline"
              >
                View Profile
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mb-16'
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {[1, 2, 3].map((idx) => (
              <Link href={`/project${idx}`} key={idx}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <FaProjectDiagram className="text-indigo-500 text-2xl" />
                      <h3 className="ml-3 text-xl font-semibold text-gray-900">Project {idx}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {idx === 1
                        ? 'Statistical data analysis and visualization techniques were employed to derive insights.'
                        : idx === 2
                        ? 'AI-driven distributed data management using ML and AI models for movie recommendation.'
                        : 'Hadoop MapReduce operations performed on HDFS to process large-scale data.'}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-indigo-600 hover:underline">
                      Explore Details <FaArrowRight className="ml-2" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Dataset Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Dataset Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
            {datasets.map((dataset) => (
              <a
                href={dataset.link}
                key={dataset.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-shadow flex flex-col h-full"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dataset.title}</h3>
                  <p className="text-gray-600 flex-1 mb-2">{dataset.description}</p>
                  {/* Column names removed as requested */}
                  <span className="mt-auto inline-flex items-center text-indigo-600 hover:underline">
                    View Dataset <FaArrowRight className="ml-2" />
                  </span>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
