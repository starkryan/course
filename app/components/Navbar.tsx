import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const { ref } = useInView({ threshold: 0.1 });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "PRICING", href: "#pricing" },
    { name: "FEATURES", href: "#features" },
    { name: "BLOG", href: "#blog" },
    { name: "FORUM", href: "#forum" },
    { name: "DOCS", href: "#docs" },
    { name: "CAREERS", href: "#careers" },
  ];

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? "py-2 bg-black/80 backdrop-blur-lg" 
          : "py-4 bg-gradient-to-r from-gray-900 to-black"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              CURSOR
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm relative ${
                  activeItem === item.name.toLowerCase() 
                    ? "text-white" 
                    : "text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveItem(item.name.toLowerCase())}
              >
                {activeItem === item.name.toLowerCase() && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              SIGN IN
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              DOWNLOAD
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoMdClose /> : <CiMenuFries />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 space-y-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-2 text-sm border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  SIGN IN
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-2 text-sm bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
                >
                  DOWNLOAD
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;