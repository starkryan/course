import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLock, FaCheckCircle } from 'react-icons/fa';

interface CourseEnrollProps {
  courseId: string;
  courseName: string;
  price: number;
  duration: string;
  enrollmentStatus?: 'open' | 'closed' | 'in-progress';
}

const CourseEnroll: React.FC<CourseEnrollProps> = ({
  courseId,
  courseName,
  price,
  duration,
  enrollmentStatus = 'open'
}) => {
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollment = async () => {
    setIsEnrolling(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEnrolled(true);
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{courseName}</h2>
            <p className="text-gray-400">Course ID: {courseId}</p>
          </div>
          <FaGraduationCap className="text-4xl text-green-500" />
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
            <span className="text-gray-300">Duration</span>
            <span className="text-white font-semibold">{duration}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
            <span className="text-gray-300">Price</span>
            <span className="text-white font-semibold">${price}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
            <span className="text-gray-300">Status</span>
            <span className={`font-semibold ${
              enrollmentStatus === 'open' ? 'text-green-500' : 
              enrollmentStatus === 'closed' ? 'text-red-500' : 'text-yellow-500'
            }`}>
              {enrollmentStatus.charAt(0).toUpperCase() + enrollmentStatus.slice(1)}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={enrollmentStatus !== 'open' || isEnrolling || enrolled}
            onClick={handleEnrollment}
            className={`w-full py-4 rounded-xl font-semibold text-white 
              ${enrolled ? 'bg-green-600' : 
                enrollmentStatus === 'open' ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gray-600'} 
              transition-all duration-300 flex items-center justify-center space-x-2
              ${(enrollmentStatus !== 'open' || isEnrolling || enrolled) ? 'cursor-not-allowed opacity-75' : 'hover:shadow-lg hover:shadow-green-500/20'}`}
          >
            {isEnrolling ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : enrolled ? (
              <>
                <FaCheckCircle />
                <span>Enrolled</span>
              </>
            ) : enrollmentStatus === 'closed' ? (
              <>
                <FaLock />
                <span>Enrollment Closed</span>
              </>
            ) : (
              <span>Enroll Now</span>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseEnroll;