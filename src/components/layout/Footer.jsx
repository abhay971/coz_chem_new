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

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Media", href: "#" },
      { name: "Investor Relations", href: "#" },
    ],
    products: [
      { name: "Construction", href: "#" },
      { name: "Agricultural", href: "#" },
      { name: "Industrial", href: "#" },
      { name: "Research Chemicals", href: "#" },
      { name: "Custom Synthesis", href: "#" },
    ],
    services: [
      { name: "Quality Control", href: "#" },
      { name: "Technical Support", href: "#" },
      { name: "Regulatory Affairs", href: "#" },
      { name: "Supply Chain", href: "#" },
      { name: "R&D Collaboration", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Safety Data Sheets", href: "#" },
      { name: "Technical Papers", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Downloads", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
  ];

  const certifications = [
    { icon: Award, text: "ISO 9001:2015" },
    { icon: Shield, text: "REACH Compliant" },
    { icon: FileText, text: "GMP Certified" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="/images/COZ_CHEM.png"
                  alt="COZ CHEM Logo"
                  className="h-10 w-auto max-w-48"
                />
              </div>

              <p className="text-gray-300 leading-relaxed">
                Leaders in Specialty Chemicals.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
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
                {section === "company"
                  ? "Company"
                  : section === "products"
                  ? "Products"
                  : section === "services"
                  ? "Services"
                  : "Resources"}
              </h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <cert.icon className="w-4 h-4 text-brand-green" />
                  <span className="text-gray-300 text-sm font-medium">
                    {cert.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-brand-blue" />
              <span className="text-gray-300 text-sm">
                Serving 50+ Countries
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 COZ CHEM. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
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
