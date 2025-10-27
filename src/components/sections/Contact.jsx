import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  Globe,
  Shield,
  Award,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      primary: "+91 92741 66689",
      // secondary: "Chat with us instantly",
      color: "brand-green",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 92741 66689",
      // secondary: "+1 (555) 987-6543",
      color: "brand-orange",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "contactcozchem@gmail.com",
      // secondary: "support@cozchem.com",
      color: "brand-blue",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "5 Laxmi Society,",
      secondary: "O.P. Road, Vadodara-390007, Gujarat, India.",
      color: "brand-green",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Always Available",
      // secondary: "Emergency Support 24/7",
      color: "brand-blue",
    },
  ];

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Chemical Park Drive, Innovation City",
      phone: "+1 (555) 123-4567",
      email: "ny@cozchem.com",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Chemistry Avenue, London",
      phone: "+44 20 1234 5678",
      email: "uk@cozchem.com",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Innovation Boulevard, Singapore",
      phone: "+65 6123 4567",
      email: "sg@cozchem.com",
    },
  ];

  const formFields = [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "company", label: "Company Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            {/* <div className="inline-flex items-center px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium mb-4">
              Get In Touch
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let Chemistry meet Commerce
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you need custom synthesis, bulk chemicals, or technical
              consultation, our team of experts is here to help you find the
              perfect solution.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {formFields.map((field) => (
                      <div
                        key={field.name}
                        className={
                          field.name === "company" || field.name === "phone"
                            ? "md:col-span-1"
                            : ""
                        }
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-brand-orange">*</span>
                          )}
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type={field.type}
                          required={field.required}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a product category</option>
                      <option value="industrial">Industrial</option>
                      <option value="cosmetics">Cosmetics</option>
                      <option value="agricultural">Agricultural</option>
                      <option value="construction">Construction</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="pharmaceutical">Pharmaceutical</option>
                      <option value="custom">Custom Chemicals</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-brand-orange">*</span>
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your requirements, quantities, and any specific needs..."
                    ></motion.textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-brand-orange text-white font-semibold py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div
                        className={`w-12 h-12 bg-${info.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {info.primary}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {info.secondary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              {/* <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="accent-card-blue p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageSquare className="w-6 h-6" />
                    <h4 className="font-semibold">Need Immediate Help?</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Our technical support team is available 24/7 for urgent
                    inquiries.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-brand-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Emergency Support
                  </motion.button>
                </motion.div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Globe, label: "Global", color: "brand-blue" },
                    { icon: Shield, label: "Secure", color: "brand-green" },
                    { icon: Award, label: "Certified", color: "brand-orange" },
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className={`bg-${badge.color}/10 text-${badge.color} p-3 rounded-lg text-center`}
                    >
                      <badge.icon className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">{badge.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Global Offices */}
          {/* <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Global <span className="text-black">Presence</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                With offices worldwide, we provide local expertise and support
                wherever you are.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-brand-blue" />
                      <h4 className="text-xl font-bold text-black">
                        {office.city}
                      </h4>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{office.country}</p>
                      <p>{office.address}</p>
                      <p className="font-medium text-black">{office.phone}</p>
                      <p className="font-medium text-black">{office.email}</p>
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-brand-orange font-semibold hover:text-orange-600 transition-colors"
                    >
                      Get Directions
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* CTA Section */}
          {/* <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-12 text-center shadow-xl"
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-600">
                Join over 1000+ companies worldwide who trust COZ CHEM for their chemical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Request Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
