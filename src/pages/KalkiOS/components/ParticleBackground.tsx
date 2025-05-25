import React, { useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect';

const ParticleBackground: React.FC = () => {
  // Initialize the particles engine
  useIsomorphicLayoutEffect(() => {
    const init = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    };

    init();
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log('Particles container loaded:', container);
    }
  }, []);

  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#8b5cf6',
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false
        }
      },
      links: {
        color: '#8b5cf6',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        } as any // Temporary type assertion to fix the type error
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.8
          }
        },
        push: {
          quantity: 4
        },
      }
    },
    detectRetina: true,
  } as const; // Using const assertion to preserve literal types

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none" style={{ zIndex: 0 }}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
