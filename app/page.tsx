"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ToastContainer } from 'react-toastify'; // For notifications
import Head from 'next/head'; // For SEO
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { DiLinux } from 'react-icons/di';
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs, FaAndroid, FaGit, FaUbuntu,} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMysql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import Navbar from './components/Navbar';
import CourseSection from './components/CourseSection';
import WhatYouWillLearn from './components/WhatYouLearn';
import CourseReviews from './components/Review';
import Footer from './components/Footer';

const HackingCoursePage = () => {
  const [, setWindowSize] = React.useState({
    height: 0,
    width: 0
  });

  React.useEffect(() => {
    // Update window dimensions only on client side
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });

    // Optional: Add window resize listener
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for visibility-based animations
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true, // Trigger the animation once when the element comes into view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

 

  // Toast notification function

  return (
    <div className="h-full bg-gradient-to-r from-gray-900 to-black">
      <Navbar />
      <Head>
        <title>Hacking Course - Learn Ethical Hacking and Cybersecurity</title>
        <meta name="description" content="Enroll in our Hacking Course and learn ethical hacking, penetration testing, cybersecurity, and more!" />
        <meta name="keywords" content="ethical hacking, cybersecurity, penetration testing, security course" />
        <meta property="og:title" content="Hacking Course - Learn Ethical Hacking" />
        <meta property="og:description" content="Master ethical hacking and cybersecurity skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>

      
      <CourseSection />

   
      {/* Hero Section */}


{/* Course Overview Section */}
<motion.section
  className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 px-8 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: inView ? 1 : 0 }}
  transition={{ duration: 1 }}
  ref={sectionRef}
  id="course-overview"
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.1 }}  // Trigger animation when 10% of section is in view
>
  {/* Background Effect */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0f172a_25%,transparent_25%,transparent_75%,#0f172a_75%,#0f172a)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]" />
  </div>

  <div className="container mx-auto relative z-10">
    <motion.div
      initial={{ y: 20, opacity: 0 }}  // Slightly off-screen, but closer to view
      whileInView={{ y: 0, opacity: 1 }}  // Bring into view immediately
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Course Overview
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed">
        This comprehensive course covers everything from the basics of ethical hacking to advanced penetration testing and cybersecurity practices. Gain hands-on experience with tools and techniques that are essential for modern cybersecurity professionals.
      </p>
    </motion.div>

    {/* Course Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {[
        {
          icon: "🎯",
          title: "Practical Labs",
          description: "Hands-on experience with real-world scenarios"
        },
        {
          icon: "🛡️",
          title: "Security Tools",
          description: "Master industry-standard cybersecurity tools"
        },
        {
          icon: "📊",
          title: "Progress Tracking",
          description: "Monitor your learning journey with detailed analytics"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


{/* Technologies Section */}
<motion.section
  className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 px-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: inView ? 1 : 0 }}
  transition={{ duration: 1 }}
  ref={sectionRef}
  id="technologies"
>
  <div className="container mx-auto">
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
    >
      Technologies You&apos;ll Master
    </motion.h2>

    {/* Technology Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {[
        { title: "Web Technologies", icons: [FaHtml5, FaCss3Alt, FaJs] },
        { title: "Backend & Database", icons: [FaNodeJs, SiMysql, FaGit] },
        { title: "Frameworks", icons: [RiNextjsFill, FaReact, TbBrandReactNative] },
        { title: "Operating Systems", icons: [DiLinux, FaUbuntu, FaAndroid] }
      ].map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-green-400 mb-4">{category.title}</h3>
          <div className="flex justify-center gap-4">
            {category.icons.map((Icon, iconIdx) => (
              <motion.div
                key={iconIdx}
                whileHover={{ scale: 1.2, rotate: 12 }}
                className="text-3xl text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Skill Level Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-2xl mx-auto text-center bg-white/5 p-6 rounded-2xl"
    >
      <h3 className="text-xl font-semibold text-green-400 mb-4">Skill Progression</h3>
      <div className="flex justify-between items-center gap-4">
        <span className="text-gray-400">Beginner</span>
        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5 }}
            className="h-full bg-gradient-to-r from-green-400 to-blue-500"
          />
        </div>
        <span className="text-gray-400">Expert</span>
      </div>
    </motion.div>
  </div>
</motion.section>
      
        <WhatYouWillLearn />  
        <CourseReviews />

      <Footer />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick pauseOnHover />
    </div>
  );
};

export default HackingCoursePage;
