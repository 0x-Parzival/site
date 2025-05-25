import React from 'react';

interface HeroSectionProps {
  onGetStartedClick?: () => void;
  onJoinFutureClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick, onJoinFutureClick }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-4xl mx-auto opacity-100 transform transition-all duration-1000">
        <img src="/images/aechlogo.png" alt="AECH Logo" className="h-24 md:h-32 mx-auto mb-6" />
        <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: '#00ffc8' }}>AECH</h1>
        <p className="text-xl md:text-2xl mb-8">The World's First 3D Blockchain-Based Financial Operating System</p>
        <p className="text-3xl font-bold mb-12" style={{ color: '#00ffae' }}>One Wallet to Rule Them All</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={onGetStartedClick}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-black font-bold text-lg cursor-pointer transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
          
          <button
            onClick={onJoinFutureClick}
            className="px-8 py-3 bg-transparent border-2 border-cyan-500 rounded-full text-cyan-400 font-bold text-lg cursor-pointer transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Join the Future
          </button>
        </div>
        
        <div
          className="mt-16 flex flex-col items-center text-cyan-400 cursor-pointer animate-bounce"
          onClick={onGetStartedClick}
        >
          <p className="mb-2">Scroll Down</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
