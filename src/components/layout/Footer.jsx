import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  FileText,
  Shield,
  Award,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
    ],
    productsCol1: [
      { name: "Industrial", href: "#products" },
      { name: "Agricultural", href: "#products" },
      { name: "Construction", href: "#products" },
    ],
    productsCol2: [
      { name: "Cosmetics", href: "#products" },
      { name: "Nutraceuticals", href: "#products" },
      { name: "Pharmaceuticals", href: "#products" },
      // { name: "Customized Chemicals", href: "#products" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
  ];

  const certifications = [
    { icon: Award, text: "ISO 9001" },
    { icon: Award, text: "ISO 14001" },
    { icon: Award, text: "ISO 22000" },
    { icon: Award, text: "ISO 45001" },
    { icon: Shield, text: "cGMP" },
    { icon: FileText, text: "State FDA" },
    { icon: FileText, text: "USFDA" },
    { icon: FileText, text: "EDQM" },
    { icon: Shield, text: "ANVISA" },
    { icon: Award, text: "FSSAI" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 sm:gap-8">
          {/* Company Info - Logo on Left */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <img
                  src="/images/COZ_CHEM.png"
                  alt="COZ CHEM Logo"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>

              <p className="text-gray-300 tracking-wide font-bold mb-6 text-sm sm:text-base">
                CLUB of Chemical Producers
              </p>
            </motion.div>
          </div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white capitalize mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.href === "#" ? (
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 text-sm sm:text-base"
                    >
                      {link.name}
                    </motion.a>
                  ) : (
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 text-left w-full text-sm sm:text-base"
                    >
                      {link.name}
                    </motion.button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Section - Two Columns with Less Gap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 sm:col-span-2 lg:col-span-2 flex flex-col items-start lg:items-center"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white capitalize mb-3 sm:mb-4 lg:-ml-12">
              Products
            </h3>
            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 w-full lg:w-auto">
              {/* Products Column 1 */}
              <ul className="space-y-2">
                {footerLinks.productsCol1.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 text-left w-full text-sm sm:text-base"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>

              {/* Products Column 2 */}
              <ul className="space-y-2">
                {footerLinks.productsCol2.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 text-left w-full text-sm sm:text-base"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:col-span-2 lg:col-span-2 flex flex-col items-start lg:items-center"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white capitalize mb-3 sm:mb-4">
              Certifications
            </h3>
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 w-full lg:w-auto">
              <ul className="space-y-2">
                {certifications.slice(0, 5).map((cert, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 flex items-center space-x-2 text-sm sm:text-base"
                    >
                      <cert.icon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-green flex-shrink-0" />
                      <span>{cert.text}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {certifications.slice(5, 10).map((cert, index) => (
                  <li key={index + 5}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 flex items-center space-x-2 text-sm sm:text-base"
                    >
                      <cert.icon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-green flex-shrink-0" />
                      <span>{cert.text}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Global Reach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-4 sm:py-6 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-brand-blue" />
              <span className="text-gray-300 text-xs sm:text-sm">
                Serving 50+ Countries
              </span>
            </div>
            {/* Terms of Service */}
            <motion.a
              href="#"
              whileHover={{ x: -5 }}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-4 sm:py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © 2025 COZ CHEM. All rights reserved.
              </p>
            </div>

            {/* A COZ Club Logo Company */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">A</span>
              <motion.a
                href="https://www.cozclub.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center"
              >
                <img
                  src="/images/coz_club.png"
                  alt="COZ Club Logo"
                  className="h-6 sm:h-7 md:h-8 w-auto"
                />
              </motion.a>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">Company</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
