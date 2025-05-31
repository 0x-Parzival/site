import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = '> Watching. Learning. Defending.';
  const typingSpeed = 100; // milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullSubtitle.length) {
        setSubtitle((prev) => prev + fullSubtitle[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      {/* Background: Flowing Matrix code + slow pulsing circular grid - Placeholder for now */}
      <div className="absolute inset-0 bg-matrix-black z-0">
        {/* TODO: Implement Matrix code rain and pulsing grid */}
      </div>

      <div className="z-10">
        {/* Logo: Neon Trinetra-eye fused with a black dog’s silhouette in a triangle. - Placeholder for now */}
        <div className="mb-8">
          {/* TODO: Add actual logo SVG or image */}
          <img src="/images/data-treya-logo.png" alt="DATA-TREYA Logo" className="h-32 w-32 mx-auto" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          DATA-TREYA
        </h1>
        <p className="text-2xl md:text-4xl mb-8">
          The Autonomous AI Guardian of the Digital Realms
        </p>

        <div className="h-10 text-xl md:text-2xl mb-12 font-mono">
          <span>{subtitle}</span>
          <span className="animate-ping">_</span>
        </div>

        <div className="space-x-4">
          <button className="bg-neon-green text-matrix-black px-8 py-3 font-bold rounded hover:bg-opacity-80 transition-colors">
            [Launch Sentinel]
          </button>
          <button className="border-2 border-neon-green text-neon-green px-8 py-3 font-bold rounded hover:bg-neon-green hover:text-matrix-black transition-colors">
            [Simulate Breach]
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
