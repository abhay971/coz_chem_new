import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center">
              <img 
                src="/images/COZ_CHEM_BLACK.png" 
                alt="COZ CHEM Logo" 
                className="h-12 w-auto"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-brand-orange transition-colors duration-200 font-medium"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Industrial Chemicals</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Pharmaceutical</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Agricultural</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Research Chemicals</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-brand-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Get Quote
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-brand-orange"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white rounded-lg mt-2 shadow-lg"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-brand-orange transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full bg-brand-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;