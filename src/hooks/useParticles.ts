import { useCallback } from 'react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export const useParticles = () => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    // @ts-ignore - Bypass type checking for Engine type mismatch
    await loadSlim(engine);
  }, []);



  const options = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: '#8b5cf6' },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: 2 },
      links: {
        color: '#8b5cf6',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'out' }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        resize: true
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.8 } }
      }
    },
    detectRetina: true
  };

  // Return the initialization function and options
  return {
    particlesInit,
    options
  };
};
