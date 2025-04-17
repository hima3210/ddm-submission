"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topics = [
  { id: 'descriptive', label: 'Descriptive Statistics' },
  { id: 'correlation', label: 'Correlation Analysis' },
  { id: 'anova', label: 'ANOVA Analysis' },
  { id: 'chisquare', label: 'Chi-Square Test' },
  { id: 'zscore', label: 'Z-Score Normalization' },
  { id: 'genre', label: 'Genre-Based Analysis' },
  { id: 'rating', label: 'Global Rating Distribution' },
  { id: 'user', label: 'User Behavior Analysis' },
];

export default function Project1Page() {
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
          {/* Sidebar + Reports Column */}
          <div className="w-1/4 self-start sticky top-6 flex flex-col space-y-6">
            {/* Topics Card */}
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

            {/* Report Downloads Card below topics */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Reports</h3>
              <a
                href="https://drive.google.com/uc?export=download&id=1QI9phIdFB9ICtEgfUrKWLpl6eeazwC16"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mb-2 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition duration-200 text-center"
              >
                📄 Theory Report
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1QftTmMD1EhBA2md0MIpbc46Q6hSB71U5"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 transition duration-200 text-center"
              >
                🧪 Lab Report
              </a>
            </motion.div>
          </div>

          {/* Main Content: Graph Sections */}
          <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map(topic => (
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
                    src={`/analysis/enhanced_graph${topics.indexOf(topic) + 1}_${topic.id}.png`}
                    alt={`${topic.label}`}
                    width={900}
                    height={400}
                    className="rounded-md border w-full h-auto object-cover"
                  />
                </motion.div>

                <p className="text-sm text-gray-600">
                  {(() => {
                    switch (topic.id) {
                      case 'descriptive':
                        return (
                          'Bottom 10 Movies by Average Rating: highlights the least favored films in the dataset, showing which titles consistently underperform (avg. ~3.4). ' +
                          'We can infer a small cluster of movies struggling to engage audiences—useful targets for further qualitative review or improved content curation.'
                        );
                      case 'correlation':
                        return (
                          'Scatter plot of Movie_10 vs. Movie_20 ratings (r = -0.09): shows almost no linear relationship between users’ scores on these two items. ' +
                          'This suggests viewers treat these films independently, so cross-recommendations between them may have limited impact.'
                        );
                      case 'anova':
                        return (
                          'ANOVA of Movie_5 ratings across age groups: compares medians and variability for <18, 18–25, 26–35, 36–50, 50+. ' +
                          'Although overall central tendencies are similar, slight variation indicates age-based preference shifts—further statistical testing could confirm significance.'
                        );
                      case 'chisquare':
                        return (
                          'Chi-Square genre preferences by gender: stacked bar chart of counts for Action, Comedy, Drama, Horror, Sci-Fi. ' +
                          'Male and female distributions appear similar but differ for certain genres (e.g., higher male interest in Sci-Fi). ' +
                          'Use chi-square test to verify whether these differences are statistically significant.'
                        );
                      case 'zscore':
                        return (
                          'User 0’s Z-score normalized ratings: standardizes their scores to mean 0 and unit variance, visualizing deviations. ' +
                          'Peaks indicate films rated much higher than their average; troughs show unusually low scores. ' +
                          'This normalization helps compare different users on the same scale.'
                        );
                      case 'genre':
                        return (
                          'Average ratings per genre: bar chart of mean scores for Action, Comedy, Drama, Horror, Sci-Fi. ' +
                          'Horror and Drama show slightly higher satisfaction (~3.48), while Comedy is marginally lower (~3.45). ' +
                          'Implications: tailor genre-based recommendations to capitalize on popular categories.'
                        );
                      case 'rating':
                        return (
                          'Global Rating Distribution: histogram + KDE across all users/movies, revealing a mild right skew and concentration around 3–4 ratings. ' +
                          'Suggests central tendency bias; normalization or weighting may improve algorithm sensitivity to outliers.'
                        );
                      case 'user':
                        return (
                          'Sorted average ratings per user: line chart showing rating behavior from strict (avg ~3.02) to lenient (avg ~3.82). ' +
                          'User-specific bias is evident—incorporate user normalization or bias correction in collaborative filters.'
                        );
                      default:
                        return '';
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
