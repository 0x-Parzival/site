// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InterfaceMockup from './components/InterfaceMockup';
import ScreenshotsCarousel from './components/ScreenshotsCarousel';
import RoadmapSection from './components/RoadmapSection';
import DownloadSection from './components/DownloadSection';
import useMobileDetect from '../../hooks/useMobileDetect';

const KalkiPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isMobile } = useMobileDetect();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Don't render anything on the server to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background with z-index 0 */}
      {/* Global ParticleBackground is applied at App level */}
      
      {/* Content with z-index 10 */}
      <div className="relative z-10">
        <AnimatePresence>
          <motion.div 
            ref={ref}
            key="kalkios-content"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className={isMobile ? 'touch-device' : 'non-touch-device'}
          >
            <HeroSection isMobile={isMobile} />
            <FeaturesSection isMobile={isMobile} />
            <InterfaceMockup isMobile={isMobile} />
            <ScreenshotsCarousel isMobile={isMobile} />
            <RoadmapSection isMobile={isMobile} />
            <DownloadSection isMobile={isMobile} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KalkiPage;
