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
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
    products: [
      { name: "Industrial", href: "#products" },
      { name: "Agricultural", href: "#products" },
      { name: "Construction", href: "#products" },
      { name: "Pharmaceutical", href: "#products" },
      { name: "Customized Chemicals", href: "#products" },
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
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
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
                  className="h-10 w-auto max-w-48"
                />
              </div>

              <p className="text-gray-300 leading-relaxed font-bold mb-6">
                Club of Chemical Producers
              </p>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white capitalize mb-4">
                {section === "company" ? "Company" : "Products"}
              </h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href === "#" ? (
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 block py-1"
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 text-left w-full"
                      >
                        {link.name}
                      </motion.button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-white capitalize">
                Certifications
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                {certifications.slice(0, 5).map((cert, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 flex items-center space-x-2"
                    >
                      <cert.icon className="w-4 h-4 text-brand-green flex-shrink-0" />
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 flex items-center space-x-2"
                    >
                      <cert.icon className="w-4 h-4 text-brand-green flex-shrink-0" />
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
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-brand-blue" />
              <span className="text-gray-300 text-sm">
                Serving 50+ Countries
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white text-xl font-bold">A</span>
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
                  className="h-8 w-auto"
                />
              </motion.a>
              <span className="text-white text-xl font-bold">Company</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 COZ CHEM. All rights reserved.
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
