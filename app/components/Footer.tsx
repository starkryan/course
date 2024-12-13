import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaTwitter, 
  FaLinkedin, 
  FaDiscord,
  FaHeart
} from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Release Notes", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Status", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "License", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <HiCursorClick className="text-2xl text-green-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  CURSOR
                </span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Empowering the next generation of ethical hackers with cutting-edge
                tools and comprehensive learning resources.
              </p>
              {/* Newsletter Subscription */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2">Stay Updated</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 rounded-lg px-4 py-2 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase mb-4 text-gray-300">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm flex items-center"
            >
              © {currentYear} Cursor. Made with{" "}
              <FaHeart className="text-red-500 mx-1" /> by Developers
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-6"
            >
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaDiscord, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;