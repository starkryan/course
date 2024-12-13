import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaCode, FaGlobe, FaMobile, FaLaptop, FaVideo, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';

interface LessonProps {
  
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const hackingCategories = [
  {
    title: 'Website Penetration',
    icon: FaGlobe,
    description: 'Learn web application security, SQL injection, XSS attacks, and security assessment techniques.',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Mobile Security',
    icon: FaMobile,
    description: 'Explore mobile app vulnerabilities, reverse engineering, and mobile platform security testing.',
    color: 'from-green-600 to-green-800'
  },
  {
    title: 'System Exploitation',
    icon: FaLaptop,
    description: 'Master system vulnerabilities, privilege escalation, and network security testing.',
    color: 'from-purple-600 to-purple-800'
  },
  {
    title: 'CCTV & IoT Security',
    icon: FaVideo,
    description: 'Understand surveillance system vulnerabilities and IoT device security assessment.',
    color: 'from-red-600 to-red-800'
  }
];

const Lesson: React.FC<LessonProps> = ({  title, duration, difficulty }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800  shadow-2xl"
    >
      {/* Header section remains the same */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-indigo-600 p-3 rounded-lg">
          <FaShieldAlt className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white ">Chapter </h2>
          <p className="text-gray-400">{title}</p>
        </div>
      </div>

      {/* Info cards remain the same */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
          <FaLock className="text-indigo-400" />
          <span className="text-gray-300">Security Focus</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
          <span className="text-gray-300">{duration}</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
          <FaCode className="text-indigo-400" />
          <span className="text-gray-300">{difficulty}</span>
        </div>
      </div>

      {/* New Hacking Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {hackingCategories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl bg-gradient-to-r ${category.color} cursor-pointer`}
          >
            <div className="flex items-center space-x-4 mb-3">
              <category.icon className="w-8 h-8 text-white" />
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <p className="text-gray-100 text-sm">{category.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-gray-200">4 Lessons</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black bg-opacity-30 px-4 py-2 rounded-lg text-sm text-white hover:bg-opacity-40"
              >
                Start Learning
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overview section */}
      <div className="prose prose-invert max-w-none">
        <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
        <p className="text-gray-300">
          Master the art of ethical hacking across multiple platforms and systems. This comprehensive
          course covers website vulnerabilities, mobile security, system exploitation, and IoT device
          security. Learn industry-standard tools and methodologies used by security professionals.
        </p>
      </div>

      {/* Main CTA button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium 
                   hover:bg-indigo-700 transition-colors duration-200"
      >
         <Link 
          href="https://pmny.in/PAYUMN/vIGl9oaANtbt"
          className="relative flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer" to={''}            >
              <span className="text-white font-medium text-base md:text-lg">Start Learning</span>
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
      </motion.button>
    </motion.div>
  );
};

export default Lesson;
