import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

export default function TIOFDocumentary() {
  const navigate = useNavigate();
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
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
        <motion.div 
          className="bg-black/50 backdrop-blur-md rounded-xl p-8 max-w-4xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 text-center">To India On Foot</h1>
          <h2 className="text-2xl text-gray-300 mb-8 text-center">A Journey by Ben Viatte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">About the Documentary</h3>
              <p className="text-gray-300 mb-6">
                Join Ben Viatte on an extraordinary journey from Europe to India, traversing thousands of kilometers on foot. 
                Experience the challenges, the people, and the breathtaking landscapes along this incredible adventure.
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-black/30 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Documentary Trailer</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Journey Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Started in Paris, France</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Crossed 14 countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Over 10,000 km on foot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>4 years of adventure</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow the Journey</h3>
                <div className="flex space-x-4">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Watch Trailer
                  </button>
                  <button 
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
