import { motion } from "framer-motion";
import { FaLaptop, FaLock, FaBug, FaShieldAlt, FaNetworkWired, FaCode } from "react-icons/fa";

const features = [
  {
    icon: FaLaptop,
    title: "Penetration Testing",
    description: "Learn how to perform ethical hacking to identify security vulnerabilities in systems.",
    color: "green",
    delay: 0.2
  },
  {
    icon: FaLock,
    title: "Cryptography",
    description: "Understand encryption, decryption, and secure communication techniques used in cybersecurity.",
    color: "blue",
    delay: 0.4
  },
  {
    icon: FaBug,
    title: "Vulnerability Exploitation",
    description: "Master how to exploit vulnerabilities to test the security of systems and networks.",
    color: "red",
    delay: 0.6
  },
  {
    icon: FaShieldAlt,
    title: "Security Hardening",
    description: "Learn to implement robust security measures to protect against cyber threats.",
    color: "purple",
    delay: 0.8
  },
  {
    icon: FaNetworkWired,
    title: "Network Security",
    description: "Master the techniques of securing networks and detecting network-based attacks.",
    color: "yellow",
    delay: 1.0
  },
  {
    icon: FaCode,
    title: "Secure Coding",
    description: "Develop applications with security best practices and prevent common vulnerabilities.",
    color: "cyan",
    delay: 1.2
  }
];

export default function WhatYouWillLearn() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0f172a_25%,transparent_25%,transparent_75%,#0f172a_75%,#0f172a),linear-gradient(45deg,#0f172a_25%,transparent_25%,transparent_75%,#0f172a_75%,#0f172a)] bg-[length:40px_40px] bg-[position:0_0,20px_20px] animate-pulse" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              What You Will Learn 🕵️‍♂️
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Master the essential skills needed to become a proficient ethical hacker and cybersecurity expert
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay }}
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              {/* Card Content */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/90 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`text-5xl text-${feature.color}-500 mb-6`}
                >
                  <feature.icon />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: feature.delay }}
                    className={`h-full bg-${feature.color}-500`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            Start Learning Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}