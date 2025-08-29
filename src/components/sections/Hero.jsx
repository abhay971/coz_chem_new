import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, ArrowRight, X } from 'lucide-react';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-8">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium">
                <span>Leading Chemical Innovation</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">
                <span>Committed to</span>
                <br />
                <span>Chemistry</span>
                <br />
                <span>Excellence</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Delivering innovative specialty chemical solutions that drive progress across industries. 
                From pharmaceuticals to agriculture, we power the future with precision chemistry.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(243, 126, 58, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Chemical Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main circular element representing molecules */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Central molecule */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-brand-blue/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-brand-blue rounded-full shadow-lg"></div>
                </motion.div>

                {/* Orbiting elements */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-orange rounded-full shadow-lg"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-brand-green rounded-full shadow-lg"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-orange rounded-full shadow-lg"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-green rounded-full shadow-lg"></div>
                </motion.div>

                {/* Additional floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-brand-orange/20 rounded-full"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-12 -left-12 w-20 h-20 bg-brand-green/20 rounded-full"
                ></motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                preload="metadata"
              >
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;