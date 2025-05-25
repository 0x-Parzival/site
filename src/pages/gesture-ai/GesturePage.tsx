import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import DemoSection from './components/DemoSection';
import ContactSection from './components/ContactSection';
import BackgroundParticles from './components/BackgroundParticles';

export default function GesturePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundParticles />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <DemoSection />
        <ContactSection />
      </div>
    </div>
  );
}
