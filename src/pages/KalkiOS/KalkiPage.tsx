// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InterfaceMockup from './components/InterfaceMockup';
import ScreenshotsCarousel from './components/ScreenshotsCarousel';
import RoadmapSection from './components/RoadmapSection';
import DownloadSection from './components/DownloadSection';

const KalkiPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="min-h-screen bg-matrix-black text-neon-green font-mono">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16">
            <img src="/images/kalkios-logo.png" alt="Kalki OS Logo" className="w-48 h-48 mx-auto mb-8" />
            <h1 className="text-6xl font-bold mb-4">KALKI OS</h1>
            <p className="text-xl mb-8">
              The Avatar of Digital Rebirth
            </p>
          </div>
        </div>
      </div>
      <HeroSection />
      <FeaturesSection />
      <InterfaceMockup />
      <ScreenshotsCarousel />
      <RoadmapSection />
      <DownloadSection />
    </motion.div>
  );
};

export default KalkiPage;
