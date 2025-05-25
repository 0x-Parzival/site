// @ts-nocheck
import React from 'react';

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-pink-900/50 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        </div>
        
        {/* Particle effect using CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}