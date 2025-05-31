import React from 'react';
import HeroSection from '@/components/DataTreya/HeroSection';
import AboutSection from '@/components/DataTreya/AboutSection';
import ConsoleSection from '@/components/DataTreya/ConsoleSection';
import ThreatFeed from '@/components/DataTreya/ThreatFeed';
import DeploymentSection from '@/components/DataTreya/DeploymentSection';
import Footer from '@/components/DataTreya/Footer';
import TriEyeModel from '@/components/DataTreya/TriEyeModel';
import AgentConsole from '@/components/DataTreya/AgentConsole';
import VisualThreatGrid from '@/components/DataTreya/VisualThreatGrid';
import DeploymentInterface from '@/components/DataTreya/DeploymentInterface';
import FeaturesSection from '@/components/DataTreya/FeaturesSection';
import Testimonials from '@/components/DataTreya/Testimonials';
import TechStack from '@/components/DataTreya/TechStack';
import ParticleBackground from '@/components/DataTreya/ParticleBackground'; // Import ParticleBackground

const DataTreyaPage: React.FC = () => {
  return (
    <div className="bg-matrix-black text-neon-green font-mono min-h-screen relative"> {/* Ensure relative positioning for z-index context */}
      <ParticleBackground /> {/* Add ParticleBackground here */}
      <div className="relative z-10"> {/* Content wrapper with higher z-index */}
        <HeroSection />
        <TriEyeModel />
        <AgentConsole />
      <VisualThreatGrid />
      <DeploymentInterface />
      <FeaturesSection />
      <Testimonials />
      <TechStack />
      {/* Original components - will clarify with user later if these are still needed */}
      <AboutSection />
      <ConsoleSection />
      <ThreatFeed />
      <DeploymentSection />
      <Footer />
      </div>
    </div>
  );
};

export default DataTreyaPage;
