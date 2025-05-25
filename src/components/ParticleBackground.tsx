import { useCallback } from 'react';
import { useParticles } from '../context/ParticlesContext';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  opacity?: number;
}

export default function ParticleBackground({ opacity: propOpacity }: ParticleBackgroundProps) {
  const { opacity: contextOpacity } = useParticles();
  const opacity = propOpacity !== undefined ? propOpacity : contextOpacity;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    fullScreen: { enable: false, zIndex: -1 },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 }
      },
      color: { value: '#8b5cf6' },
      shape: { type: 'circle' },
      opacity: {
        value: opacity,
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
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: { default: 'bounce' as const }
      }
    },
    interactivity: {
      detectsOn: 'window' as const,
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
        resize: { enable: true }
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.8 } },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      <Particles
        id="tsparticles"
        // @ts-ignore - Bypass type checking for the initialization prop
        initParticlesEngine={particlesInit}
        options={options as any}
      />
    </div>
  );
}
