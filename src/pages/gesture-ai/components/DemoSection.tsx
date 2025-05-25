import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMousePointer, FiVolume2 } from 'react-icons/fi';

export default function DemoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              See It In Action
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Experience the power of gesture recognition technology in real-time.
          </motion.p>
        </div>

        {/* Demo Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-purple-500/20"
        >
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-900/20 to-black/20">
            {/* Replace this div with actual video content */}
            <div className="flex items-center justify-center">
              <p className="text-gray-400">Demo video coming soon</p>
            </div>
          </div>
        </motion.div>

        {/* Controls Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-white">Gesture Controls</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Mouse Control */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg mr-4">
                  <FiMousePointer className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Mouse Control</h4>
              </div>
              <p className="text-gray-400 mb-4">Control your cursor with hand gestures. Move, click, and drag without touching your mouse.</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">Active</span>
                <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                  Configure
                </button>
              </div>
            </div>
            
            {/* Volume Control */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-pink-500/10 rounded-lg mr-4">
                  <FiVolume2 className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Volume Control</h4>
              </div>
              <p className="text-gray-400 mb-4">Adjust your system volume with simple hand gestures. Swipe up/down to control the volume level.</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm rounded-full">Active</span>
                <button className="text-sm text-pink-400 hover:text-pink-300 transition-colors">
                  Configure
                </button>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
              Try Live Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
