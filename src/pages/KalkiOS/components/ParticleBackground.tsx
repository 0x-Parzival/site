import { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from 'tsparticles-engine';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // @ts-ignore - Bypass type checking for Engine type mismatch
    await loadSlim(engine);
  }, []);

  // Minimal working configuration with type assertion
  const particleOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
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
        straight: false
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        resize: { enable: true }
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.8 } }
      }
    },
    detectRetina: true
  } as const; // Using const assertion to infer literal types

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none">
      <Particles
        id="tsparticles"
        // @ts-ignore - Bypass type checking for the init prop
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
