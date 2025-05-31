import React, { useCallback, useEffect, useState } from 'react';
// Dynamically import Particles and loadSlim
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false);
  const [ParticlesComponent, setParticlesComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Particles and loadSlim for client-side execution
    Promise.all([
      import('@tsparticles/react').then(mod => {
        // Make sure to call initParticlesEngine once
        mod.initParticlesEngine(async (engine) => {
          // Dynamically import the slim version of tsparticles engine
          await import('@tsparticles/slim').then(slimMod => slimMod.loadSlim(engine));
        }).then(() => {
          setInit(true);
        });
        return mod.Particles; // Return the Particles component
      })
    ]).then(([ParticlesModule]) => {
      setParticlesComponent(() => ParticlesModule);
    }).catch(err => {
      console.error("Failed to load tsparticles:", err);
    });
  }, []);

  if (!init || !ParticlesComponent) {
    return null; // Or a fallback loader
  }

  const particlesOptions = {
    background: {
      color: {
        value: '#0d0d0d', // matrix-black, should be transparent if overlaid
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
        push: {
          quantity: 2,
        },
      },
    },
    particles: {
      color: {
        value: '#39ff14', // neon-green
      },
      links: {
        color: '#39ff14', // neon-green
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 0.5, // Slower speed
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Fewer particles
      },
      opacity: {
        value: 0.3, // More subtle
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  // @ts-ignore - particlesOptions might not perfectly match type due to dynamic nature
  return <ParticlesComponent id="tsparticles" options={particlesOptions} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ParticleBackground;
