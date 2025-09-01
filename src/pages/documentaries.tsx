import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Vanta effect type with destroy method
interface VantaEffect {
  destroy: () => void;
  setOptions: (options: any) => void;
  [key: string]: any;
}

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Documentaries() {
  const navigate = useNavigate();
  const vantaRef = useRef<HTMLDivElement>(null);
  const [isFiring, setIsFiring] = useState(false);
  const vantaEffect = useRef<VantaEffect | null>(null);

  const fireMissile = () => {
    setIsFiring(false);
    void document.body.offsetHeight;
    setIsFiring(true);
    setTimeout(() => setIsFiring(false), 900);
  };

  const handleBenClick = () => {
    fireMissile();
    setTimeout(() => navigate('/documentary/tiof'), 300);
  };

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
      <div className="absolute top-0 left-0 right-0 z-10">
        <h1 className="text-4xl font-bold text-white text-center py-6 bg-black/30 backdrop-blur-sm">
          Documentaries
        </h1>
      </div>
      
      {/* Documentary Button - Matching Homepage Style */}
      <div className="absolute top-32 left-6 z-10">
        <div 
          className="flex flex-col items-center cursor-pointer transform transition-all duration-300 group"
          onClick={handleBenClick}
          onTouchStart={(e) => {
            e.stopPropagation();
            fireMissile();
          }}
          style={{ width: '320px' }}
        >
          <div className="relative overflow-hidden group/button w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-70 group-hover:opacity-90 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white/40 bg-white/10 backdrop-blur-sm">
                <img 
                  src="https://static.toiimg.com/thumb/msid-122320842,imgsize-369505,width-400,resizemode-4/122320842.jpg"
                  alt="Ben Viatte"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-1">Ben Viatte</h3>
                <p className="text-gray-200">To India On Foot</p>
              </div>
            </div>
            {isFiring && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0"
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 0.7, x: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
