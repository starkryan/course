import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaShieldAlt, FaRobot, FaCertificate, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Rubik } from 'next/font/google';
import { useInView } from "react-intersection-observer";
import VanillaTilt from 'vanilla-tilt';


const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Custom hook for Vanilla-tilt
const useTilt = (options = {}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current && window.matchMedia("(hover: hover)").matches) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
        ...options,
      });
    }
   
  }, [options]);

  return tiltRef;
};

const CourseSection = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiltRef = useTilt();
  const cardRef1 = useTilt({ max: 15, scale: 1.05 });
  const cardRef2 = useTilt({ max: 15, scale: 1.05 });

  return (
    <section className={`text-center py-8 md:py-20 relative overflow-hidden  ${rubik.className} z-0`}>
  

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center justify-center px-4 sm:px-6">
        {/* Image Section */}
        <motion.div
          ref={tiltRef}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative group mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[600px] z-0 mt-16 sm:mt-20 md:mt-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <Image
            src="/log.png"
            alt="Ethical Hacking"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl relative transform transition duration-500 group-hover:scale-[1.02] w-full h-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-3 md:space-y-6 px-3 md:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 flex items-center justify-center md:justify-start bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
            
            <span className="leading-tight">Master Ethical Hacking <span className="block md:inline">with</span><span className="block md:inline text-green-700"> AI</span></span>
            
          </h2>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 md:p-6 shadow-2xl">
            <TypeAnimation
              sequence={[
                "AI-Powered Penetration Testing 🛡️",
                2000,
                "Machine Learning Security 🤖",
                2000,
                "Cybersecurity Analytics 🔒",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-semibold text-gray-100 block"
            />
          </div>

          {/* <p className="text-gray-300 text-base md:text-lg leading-relaxed font-rubik px-2 md:px-0">
            Dive into the future of cybersecurity with our AI-enhanced ethical hacking course. 
            Learn cutting-edge techniques in penetration testing
          </p> */}

          {/* Feature Cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            <motion.div
              ref={cardRef1}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center backdrop-blur-sm bg-white/10 p-3 md:p-6 rounded-xl shadow-lg border border-white/10"
            >
              <FaRobot className="text-green-400 text-2xl md:text-3xl mr-2 md:mr-3" />
              <span className="text-gray-100 font-medium text-sm md:text-base">AI-Powered Labs</span>
            </motion.div>

            <motion.div
              ref={cardRef2}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center backdrop-blur-sm bg-white/10 p-3 md:p-6 rounded-xl shadow-lg border border-white/10"
            >
              <FaCertificate className="text-green-400 text-2xl md:text-3xl mr-2 md:mr-3" />
              <span className="text-gray-100 font-medium text-sm md:text-base">Industry Certification</span>
            </motion.div>
          </div> */}

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full sm:w-auto px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl overflow-hidden group mt-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Link 
              href="https://pmny.in/PAYUMN/vIGl9oaANtbt" 
              className="relative flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white font-medium text-base md:text-lg">Enroll Now - ₹999</span>
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;