import React from 'react';
import HeroSection from '../components/DataTreya/HeroSection';
import AboutSection from '../components/DataTreya/AboutSection';
import ConsoleSection from '../components/DataTreya/ConsoleSection';
import ThreatFeed from '../components/DataTreya/ThreatFeed';
import DeploymentSection from '../components/DataTreya/DeploymentSection';
import Footer from '../components/DataTreya/Footer';
import TriEyeModel from '../components/DataTreya/TriEyeModel';
import AgentConsole from '../components/DataTreya/AgentConsole';
import VisualThreatGrid from '../components/DataTreya/VisualThreatGrid';
import DeploymentInterface from '../components/DataTreya/DeploymentInterface';
import FeaturesSection from '../components/DataTreya/FeaturesSection';
import Testimonials from '../components/DataTreya/Testimonials';
import TechStack from '../components/DataTreya/TechStack';
import ParticleBackground from '../components/DataTreya/ParticleBackground'; // Import ParticleBackground

const DataTreyaPage: React.FC = () => {
  return (
    <div className="bg-matrix-black text-neon-green font-mono min-h-screen relative overflow-hidden">
      {/* Particle Background with lower z-index */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Main Content with higher z-index */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 py-16">
            <HeroSection />
            <TriEyeModel />
            <AgentConsole />
            <VisualThreatGrid />
            <DeploymentInterface />
            <FeaturesSection />
            <Testimonials />
            <TechStack />
            <AboutSection />
            <ConsoleSection />
            <ThreatFeed />
            <DeploymentSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTreyaPage;
