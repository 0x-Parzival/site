import React from 'react';
import ParticleBackground from './ParticleBackground';

const ParticleBackgroundPreview: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center p-8 bg-black/50 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white mb-4">Particle Background Preview</h1>
          <p className="text-gray-300">This is a preview of the particle background component.</p>
          <p className="text-gray-400 text-sm mt-2">Hover over the particles to see the repulse effect</p>
        </div>
      </div>
    </div>
  );
};

export default ParticleBackgroundPreview;
