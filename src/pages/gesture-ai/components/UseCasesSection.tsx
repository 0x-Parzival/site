import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  {
    title: 'Virtual Reality',
    description: 'Control VR environments with natural hand movements',
    icon: '🥽'
  },
  {
    title: 'Smart Home',
    description: 'Control your home devices with simple gestures',
    icon: '🏠'
  },
  {
    title: 'Gaming',
    description: 'Enhanced gaming experience with gesture controls',
    icon: '🎮'
  },
  {
    title: 'Accessibility',
    description: 'Making technology accessible to everyone',
    icon: '♿'
  },
  {
    title: 'Robotics',
    description: 'Control robotic systems with hand movements',
    icon: '🤖'
  },
  {
    title: 'Healthcare',
    description: 'Touchless control in medical environments',
    icon: '🏥'
  }
];

export default function UseCasesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Use Cases
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8"
          />
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                {useCase.title}
              </h3>
              <p className="text-gray-400">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
