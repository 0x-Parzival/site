import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Screenshot {
  id: number;
  title: string;
  description: string;
  color: string;
  border: string;
}

const screenshots: Screenshot[] = [
  {
    id: 1,
    title: 'Desktop Environment',
    description: 'Clean and intuitive desktop with customizable widgets and app launcher',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
  },
  {
    id: 2,
    title: 'Terminal',
    description: 'Powerful terminal with syntax highlighting and AI-assisted commands',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/30',
  },
  {
    id: 3,
    title: 'File Manager',
    description: 'Modern file management with cloud integration and quick previews',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/30',
  },
];

// Define animation variants type
type AnimationVariants = {
  enter: (custom: number) => { x: string; opacity: number };
  center: { x: string; opacity: number };
  exit: (custom: number) => { x: string; opacity: number };
};

const variants: AnimationVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const ScreenshotsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const currentScreenshot = screenshots[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Visual
            </span>{' '}
            Experience
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-8" />
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A glimpse into the stunning and functional interface of KalkiOS.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  variants={{
                    enter: {
                      x: direction > 0 ? '100%' : '-100%',
                      opacity: 0
                    },
                    center: {
                      x: '0%',
                      opacity: 1
                    },
                    exit: {
                      x: direction < 0 ? '100%' : '-100%',
                      opacity: 0
                    }
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 }
                  }}
                  className={`absolute inset-0 flex items-center justify-center rounded-2xl overflow-hidden ${currentScreenshot.border} shadow-2xl bg-gradient-to-br ${currentScreenshot.color} backdrop-blur-sm`}
                >
                  <div className="h-full flex flex-col w-full">
                    <div className="flex items-center p-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 text-center text-sm text-gray-400">
                        {currentScreenshot.title}
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {currentIndex === 0 ? '🖥️' : currentIndex === 1 ? '💻' : '📁'}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {currentScreenshot.title}
                        </h3>
                        <p className="text-gray-400">
                          {currentScreenshot.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-700'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;
