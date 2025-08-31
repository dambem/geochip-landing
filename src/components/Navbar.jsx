import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/geochiporange.png'
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Commission' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <nav className="relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            {/* Logo Section */}
            <motion.a 
              href="#"
              className="flex items-center gap-4 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
             <img 
                src={logo}
                alt="GeoChip Logo"
                className="h-8 w-8"
              />

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-xl font-medium text-gray-900 tracking-tight group-hover:text-amber-700 transition-colors">
                  GeoChip
                </span>
                <span className="text-xs text-gray-500 tracking-wider uppercase">
                  By Damian Bemben
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Main Navigation Links */}
              <div className="flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm text-gray-700 hover:text-amber-700 transition-colors"
                    onHoverStart={() => setHoveredLink(index)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    {link.label}
                    {hoveredLink === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-700"
                        layoutId="navbar-hover"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>



            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-gray-900 rounded-full"
                animate={{ 
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-900 rounded-full mt-1.5"
                animate={{ 
                  opacity: mobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-900 rounded-full mt-1.5"
                animate={{ 
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/98 backdrop-blur-lg border-t border-amber-100"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-gray-700 hover:text-amber-700 transition-colors py-2 text-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  

                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Handcrafted in Southampton
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


    </header>
  );
}

export default Navbar;