import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Clock, 
  Globe, 
  Award, 
  Leaf, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mainFeatures = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified processes ensure the highest quality standards in every product we deliver.',
      color: 'brand-blue',
      stats: '99.9% Purity Rate',
      benefits: ['Rigorous Testing', 'Quality Certificates', 'Batch Traceability']
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Global supply chain network ensures rapid delivery to over 50 countries worldwide.',
      color: 'brand-orange',
      stats: '48hr Avg Delivery',
      benefits: ['Express Shipping', 'Real-time Tracking', 'Emergency Supply']
    },
    {
      icon: Leaf,
      title: 'Sustainable Chemistry',
      description: 'Committed to environmentally responsible practices and green chemistry principles.',
      color: 'brand-green',
      stats: '50% Reduced Carbon',
      benefits: ['Eco-friendly Processes', 'Waste Minimization', 'Green Alternatives']
    }
  ];

  const additionalFeatures = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Multiple awards for innovation and excellence in chemical manufacturing.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Over 200 skilled chemists and engineers with decades of combined experience.'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Serving clients across 50+ countries with local support and expertise.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Continuous R&D investment to stay ahead of industry trends and needs.'
    }
  ];

  const benefits = [
    'Reduced Production Costs',
    'Improved Product Quality',
    'Faster Time to Market',
    'Regulatory Compliance',
    'Technical Support',
    'Custom Solutions'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4">
              Why Choose COZ CHEM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Features That Drive
              <span className="text-black"> Success</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our comprehensive approach to chemical solutions combines cutting-edge technology 
              with proven expertise to deliver exceptional results for our clients.
            </p>
          </motion.div>

          {/* Main Features */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-${feature.color}/10 group-hover:bg-${feature.color}/20 rounded-2xl flex items-center justify-center transition-colors duration-300`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-black transition-colors">
                        {feature.title}
                      </h3>
                      <div className={`text-sm font-semibold text-${feature.color} bg-${feature.color}/10 px-3 py-1 rounded-full inline-block`}>
                        {feature.stats}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 text-${feature.color} mr-2 flex-shrink-0`} />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-8 bg-${feature.color} rounded-full flex items-center justify-center`}>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Features Grid */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Additional <span className="text-black">Advantages</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beyond our core strengths, we offer comprehensive support and services 
                that set us apart in the chemical industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-brand-orange" />
                    <span className="text-brand-orange font-semibold">Client Benefits</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    What You Gain by 
                    <span className="text-black"> Partnering with Us</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our clients experience measurable improvements in their operations, 
                    from cost savings to enhanced product quality and faster market entry.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  See Case Studies
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>

              {/* Right Content - Benefits List */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-brand-green/20 group-hover:bg-brand-green/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <CheckCircle className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-black font-medium transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-xl text-gray-300">
                Numbers that speak to our commitment and success in the chemical industry.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '25+', label: 'Years of Excellence', icon: Award },
                { value: '1000+', label: 'Happy Clients', icon: Users },
                { value: '99.9%', label: 'Quality Rate', icon: Shield },
                { value: '50+', label: 'Countries Served', icon: Globe }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 group-hover:bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <stat.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;