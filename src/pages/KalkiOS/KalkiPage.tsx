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
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background with z-index 0 */}
      {/* Global ParticleBackground is applied at App level */}
      
      {/* Content with z-index 10 */}
      <div className="relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <HeroSection />
          <FeaturesSection />
          <InterfaceMockup />
          <ScreenshotsCarousel />
          <RoadmapSection />
          <DownloadSection />
        </motion.div>
      </div>
    </div>
  );
};

export default KalkiPage;
