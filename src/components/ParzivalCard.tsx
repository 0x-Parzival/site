import React, { useEffect } from "react";
import { motion } from 'framer-motion';

export default function ParzivalCard() {
  return (
    <div className="w-64 h-80 mx-auto mb-8 relative">
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotateY: [0, 360],
          scale: [1, 1.02, 1],
          boxShadow: [
            '0 0 15px rgba(52, 211, 153, 0.3)',
            '0 0 30px rgba(52, 211, 153, 0.6)',
            '0 0 15px rgba(52, 211, 153, 0.3)'
          ]
        }}
        transition={{
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          },
          boxShadow: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden border border-emerald-500/20 bg-black/20 backdrop-blur-xs">
          <img
            src="/images/0x-Parzival.png"
            alt="0xParzival"
            className="w-full h-full object-contain p-2"
          />
        </div>
        
        {/* Hologram effect layers */}
        <motion.div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'linear-gradient(45deg, rgba(52, 211, 153, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%)',
            mixBlendMode: 'overlay',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none" 
             style={{
               boxShadow: 'inset 0 0 20px rgba(52, 211, 153, 0.1)',
               mixBlendMode: 'screen'
             }}
        />
      </motion.div>
    </div>
  );
}
