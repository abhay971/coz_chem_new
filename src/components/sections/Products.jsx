import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FlaskRound,
  Leaf,
  Pill,
  Factory,
  Beaker,
  Microscope,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Building2,
} from "lucide-react";

const Products = () => {
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
        delayChildren: 0.2,
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

  const products = [
    {
      id: 1,
      title: "Industrial Chemicals",
      description:
        "Advanced catalytic solutions for manufacturing and chemical processing across various industries. ",
      icon: Factory,
      color: "brand-orange",
      image: "/product_img/Industrial Catalysts.jpg",
      features: ["Long-lasting", "Cost-Effective", "Enhanced Efficiency"],
      stats: { industries: "25+", efficiency: "40%+" },
    },
    {
      id: 2,
      title: "Agricultural Chemicals",
      description:
        "Innovative crop protection and nutrition solutions for sustainable agriculture.",
      icon: Leaf,
      color: "brand-green",
      image: "/product_img/Agricultural Chemicals.jpeg",
      features: ["Eco-Friendly", "High Efficacy", "Crop Specific"],
      stats: { coverage: "1M+ acres", products: "50+" },
    },
    {
      id: 3,
      title: "Construction Chemicals",
      description:
        "Durable concrete additives, sealants, and specialty chemicals for construction projects.",
      icon: Building2,
      color: "brand-blue",
      image: "/product_img/Research Chemicals.png",
      features: ["High Strength", "Quick Setting", "Weather Resistant"],
      stats: { projects: "500+", structures: "1000+" },
    },
    {
      id: 4,
      title: "Pharmaceutical Chemicals",
      description:
        "High-grade pharmaceutical intermediates and API compounds for drug manufacturing.",
      icon: Pill,
      color: "brand-purple",
      image: "/product_img/Pharmaceutical Intermediates.jpg",
      features: ["FDA Compliant", "USP Grade", "Batch Certification"],
      stats: { pharma: "50+", apis: "200+" },
    },
  ];

  const services = [
    {
      title: "Custom Synthesis",
      description:
        "Tailored chemical synthesis services for unique molecular requirements.",
      icon: FlaskRound,
      highlights: [
        "Scale-up Support",
        "Product Innovation",
        "Timeline Guarantee",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Comprehensive testing and validation services for chemical products.",
      icon: Shield,
      highlights: [
        "Advanced Analytics",
        "Certificate of Analysis",
        "Regulatory Compliance",
      ],
    },
    {
      title: "Process Optimization",
      description:
        "Efficiency improvements and cost reduction for chemical processes.",
      icon: Zap,
      highlights: [
        "Cost Reduction",
        "Yield Enhancement",
        "Environmental Impact",
      ],
    },
    {
      title: "R&D Collaboration",
      description:
        "Joint research programs for breakthrough chemical innovations.",
      icon: Beaker,
      highlights: ["Expert Team", "IP Protection", "State-of-art Facility"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-4">
              Our Products & Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Chemical Portfolio
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From industrial to agricultural and construction to
              pharmaceutical, we provide best-in-the-class chemical products and
              services that drive innovation and growth.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                className="group card-professional rounded-2xl overflow-hidden"
              >
                {/* Product Image/Icon */}
                <div className="h-48 bg-gray-50 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon
                        className={`w-8 h-8 text-${product.color}`}
                      />
                    </div>
                  </div>

                  {/* Floating stats */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 min-w-[120px]">
                      <div className="text-xs text-gray-600 space-y-1">
                        {Object.entries(product.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key}:</span>
                            <span className="font-semibold text-gray-900">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Animated molecules */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute top-1/2 right-1/4 w-6 h-6 bg-${product.color} rounded-full`}
                    />
                    <motion.div
                      animate={{
                        rotate: [360, 0],
                        x: [0, -15, 0],
                        y: [0, 15, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                      }}
                      className={`absolute bottom-1/3 left-1/3 w-4 h-4 bg-${product.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 transition-colors"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-gray-100">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="group/btn inline-flex items-center text-brand-blue font-semibold hover:text-brand-orange transition-colors"
                    >
                      Reach Us
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional <span className="text-black">Services</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We also offer services to support your chemical needs from{" "}
                <br />
                <span>conceptualization to commercialization.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center transition-colors">
                      <service.icon className="w-6 h-6 text-brand-green" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-black transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-xs text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2 transition-transform"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          {/* <motion.div
            variants={itemVariants}
            className="accent-card-blue rounded-2xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-4 text-black">
              Need Custom Chemical Solutions?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to develop tailored solutions for
              your specific requirements. Let's discuss your project today.
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
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
