import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/40 to-black/50 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 text-sm font-mono text-cyan-400 bg-cyan-900/30 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
              v0.1.0 ALPHA
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            KalkiOS
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Last Operating System
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience the future of computing with our quantum-inspired, AI-powered operating system.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Download Alpha
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-500/30 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all">
              View on GitHub
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center text-sm text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer">
            <span>Scroll to explore</span>
            <svg className="w-4 h-4 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
