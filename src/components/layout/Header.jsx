import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Close mobile menu first

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace("#", ""));
        if (element) {
          const headerHeight = 80;
          const elementPosition =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      // Already on home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace("#", ""));
        if (element) {
          const headerHeight = 80;
          const elementPosition =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  const productCategories = [
    { name: "Industrial", href: "#products" },
    { name: "Cosmetics", href: "#products" },
    { name: "Agricultural", href: "#products" },
    { name: "Construction", href: "#products" },
    { name: "Nutraceuticals", href: "#products" },
    { name: "Pharmaceuticals", href: "#products" },
    { name: "Customized Chemicals", href: "#products" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <button
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 300);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex flex-col items-start cursor-pointer"
            >
              <img
                src="/images/COZ_CHEM_BLACK.png"
                alt="COZ CHEM Logo"
                className="h-12 w-auto"
              />
              <span className="font-bold text-gray-900 mt-1 tracking-wide">
                CLUB of Chemical Producers
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center text-gray-800 hover:text-brand-orange transition-colors duration-200 font-bold text-lg px-2 py-2"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {productCategories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => scrollToSection(category.href)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-brand-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-blue transition-colors duration-200"
          >
            Get Quote
          </motion.button> */}

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
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white rounded-lg mt-2 shadow-lg"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-brand-orange transition-colors duration-200 font-semibold text-lg"
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
