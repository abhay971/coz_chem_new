import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Users,
  Globe,
  Zap,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    {
      icon: Award,
      value: "25+",
      label: "Years of Excellence",
      color: "brand-orange",
    },
    { icon: Users, value: "100+", label: "Manufacturers", color: "brand-blue" },
    {
      icon: Globe,
      value: "50+",
      label: "Global Markets",
      color: "brand-green",
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Approval Rating",
      color: "brand-orange",
    },
  ];

  const values = [
    // {
    //   title: "Innovation",
    //   description:
    //     "Pioneering next-generation chemical solutions through cutting-edge research and development.",
    //   icon: Zap,
    // },
    {
      title: "Quality",
      description:
        "Maintaining the highest standards in manufacturing and quality assurance.",
      icon: Award,
    },
    {
      title: "Reliability",
      description:
        "Building long-term relationships with clients through trust and reliability.",
      icon: Users,
    },
    {
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices and sustainable chemistry.",
      icon: Globe,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-5xl mx-auto"
          >
            {/* <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-4">
              About COZ CHEM
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Club of Chemical Producers
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-0">
              With over two decades of expertise, we deliver innovative chemical
              solutions that power global industries.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-${stat.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-black">
                Transformation through Chemistry
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  We specialize in developing custom chemical solutions that
                  meet the unique needs of our clients across construction,
                  agricultural, and industrial sectors.
                </p>

                <div className="space-y-4">
                  {[
                    "Global supply chain with local expertise",
                    "Environmental sustainability at our core",
                    "ISO 9001, 14001, 22000, 45001, cGMP, State FDA, USFDA, EDQM, ANVISA, FSSAI certified quality management systems",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="accent-card-orange p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <div>
                    <h4 className="text-xl font-bold">Growing Impact</h4>
                    {/* <p className="text-gray-600">
                      Expanding our reach globally
                    </p> */}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our Chemicals empower companies worldwide, driving
                  breakthrough innovations across the industrial, agricultural,
                  construction and pharmaceutical sectors with cutting edge
                  technology and sustainable solutions.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Values */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-black mt-0">
                Our Core Values
              </h3>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="group flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-brand-blue/10 group-hover:bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <value.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-black transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          {/* <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Partner with Industry Leaders?
            </h3>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              Discover how our innovative chemical solutions can transform your
              business. Let's create the future together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
