import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Extend the Vanta effect type to include the destroy method
interface VantaEffect {
  destroy: () => void;
  [key: string]: any; // Allow other properties
}

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function DocumentaryPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;
    
    const initVanta = async () => {
      if (!vantaRef.current) return;
      
      try {
        const [three, vantaModule] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.cells.min')
        ]);
        
        effect = (vantaModule as any).default({
          el: vantaRef.current,
          THREE: three.default || three,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x0,
          color2: 0x1e00ff
        });
        
        vantaEffect.current = effect;
      } catch (error) {
        console.error('Error initializing Vanta effect:', error);
      }
    };
    
    initVanta();
    
    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      <div ref={vantaRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
        <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-white mb-6">Ben Viatte - To India On Foot</h1>
          <p className="text-white/80 text-lg mb-6">
            This is the detailed page for Ben Viatte's documentary. You can add more content here.
          </p>
          <motion.button 
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back
          </motion.button>
        </div>
      </div>
    </div>
  );
}
