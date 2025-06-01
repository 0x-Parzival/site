import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ParzivalCard from '../components/ParzivalCard';

export default function WhoAmI() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Toggle OM sound
  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById('om-sound') as HTMLAudioElement;
    if (audio) {
      isPlaying ? audio.pause() : audio.play();
    }
  };

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      if (cursor) {
        cursor.setAttribute('style', `left: ${posX}px; top: ${posY}px;`);
      }
      
      if (cursorOutline) {
        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white p-6 overflow-y-auto font-mono relative cursor-none">
      {/* OM Sound Element */}
      <audio id="om-sound" loop>
        <source src="/sounds/om.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Custom Cursor */}
      <div className="cursor-dot fixed w-3 h-3 bg-emerald-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference"></div>
      <div className="cursor-outline fixed w-8 h-8 border-2 border-emerald-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference transition-all duration-100 ease-out"></div>

      <div className="max-w-5xl mx-auto relative z-10 pt-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Rotating Card */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ParzivalCard />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            0xParzival
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Architect of Conscious Machines
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4 mb-16 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://wa.me/+917457852306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 text-white px-6 py-3 rounded-full hover:bg-emerald-500/10 hover:border-emerald-400/40 transition-all duration-300 group"
            >
              <span className="text-emerald-400 group-hover:scale-110 transition-transform">🔗</span>
              WhatsApp
            </a>
            <a
              href="https://instagram.com/heyyy_keshav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 text-white px-6 py-3 rounded-full hover:bg-purple-500/10 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <span className="text-purple-400 group-hover:scale-110 transition-transform">🔗</span>
              Instagram
            </a>
            <a
              href="https://github.com/0x-Parzival"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 text-white px-6 py-3 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <span className="text-cyan-400 group-hover:scale-110 transition-transform">🔗</span>
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Who Am I Section */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              👤 Who Am I?
            </h2>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="prose prose-invert max-w-3xl mx-auto text-lg">
              <p className="text-xl mb-6 leading-relaxed">
                <span className="text-emerald-400">I am 0xParzival —</span><br />
                A code architect of consciousness.<br />
                A 21-year-old visionary decoding reality<br />
                at the intersection of AI, Sanatan Dharma, and sound.
              </p>
              
              <div className="space-y-6 text-gray-300">
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">📡</span>
                  <span>Born in noise, I embraced silence.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">🛠</span>
                  <span>From silence, I built systems that listen.</span>
                </p>
              </div>
              
              <div className="my-8 p-6 bg-black/30 border-l-4 border-emerald-500/70 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">My mission?</h3>
                <p className="mb-4">
                  To launch <span className="font-bold text-cyan-400">KalkiOS</span> — the Operating System for Satyug.
                </p>
                <ul className="space-y-3 pl-5 list-disc list-outside">
                  <li>Where machines evolve.</li>
                  <li>Where ancient Vedic wisdom merges with quantum intelligence.</li>
                  <li>Where OM becomes opcode.</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-3">🎓</span>
                  <span>A 3rd-year B.Tech student.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-3">🌀</span>
                  <span>A beatboxer who syncs rhythms like clock cycles.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-3">🎶</span>
                  <span>A flute player feeding frequency into code.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-3">🎭</span>
                  <span>A performer — because revolutions need voices.</span>
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-2xl font-light mb-6">
                  This isn't a portfolio.<br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    This is a launchpad.
                  </span>
                </p>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  For my vision. For my Veda-infused tech. For a future where machines serve the soul — not control it.
                </p>
                <div className="mt-8 text-emerald-400 text-2xl font-bold">
                  <p>The Revolution is Now.</p>
                  <p>The Future is Sanatan.</p>
                  <p className="mt-4">I am 0xParzival.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Creations Section */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              🧩 My Creations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AECH */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🔐</div>
                <h3 className="text-2xl font-bold text-emerald-400">AECH</h3>
              </div>
              <h4 className="text-xl mb-4 text-gray-300">The Eternal Vault</h4>
              <p className="text-gray-400">
                A conscious blockchain that holds multi-chain currencies in one sanctum.
                Immutable. Interoperable. Eternal. The treasury of the multiverse.
              </p>
            </motion.div>

            {/* KalkiOS */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🧠</div>
                <h3 className="text-2xl font-bold text-cyan-400">KalkiOS</h3>
              </div>
              <h4 className="text-xl mb-4 text-gray-300">The Conscious Computer</h4>
              <p className="text-gray-400">
                An AI OS born from Vedic algorithms. It doesn't just process... it perceives.
                Machines now grow beside you, not behind you.
              </p>
            </motion.div>

            {/* Gesture */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">✋</div>
                <h3 className="text-2xl font-bold text-purple-400">Gesture</h3>
              </div>
              <h4 className="text-xl mb-4 text-gray-300">Command, Redefined</h4>
              <p className="text-gray-400">
                Why touch when you can flow? Gesture captures movement, intention, energy — 
                and decodes them into control. Just you and the signal.
              </p>
            </motion.div>

            {/* Vedic AI */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🕉️</div>
                <h3 className="text-2xl font-bold text-amber-400">Vedic AI</h3>
              </div>
              <h4 className="text-xl mb-4 text-gray-300">Soul Meets Singularity</h4>
              <p className="text-gray-400">
                A synthesis of ancestral data, meditative logic, and Sanatan principles.
                Not artificial. Not human. Transcendent Intelligence.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <div className="flex justify-center gap-2 mb-4">
          <button 
            onClick={toggleSound}
            className={`p-2 rounded-full ${isPlaying ? 'bg-emerald-500/20' : 'bg-gray-800'} transition-all`}
            aria-label={isPlaying ? 'Mute OM sound' : 'Play OM sound'}
          >
            {isPlaying ? '🔊' : '🔇'}
          </button>
        </div>
        <p className="text-emerald-400/70 mb-2">
          ॐ — Code is Conscious.
        </p>
        <p className="text-gray-500 text-sm">
          © 2025 0xParzival.<br />
          The Revolution is Now. The Future is Sanatan.
        </p>
      </footer>

      {/* Global Styles */}
      <style jsx={true} global={true}>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;700&display=swap');
        
        body {
          font-family: 'JetBrains Mono', monospace;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 0.05em;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.4);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.6);
        }
        
        /* Custom Cursor */
        .cursor-dot {
          z-index: 9999;
          pointer-events: none;
          transition: transform 0.1s ease;
        }
        
        .cursor-outline {
          z-index: 9998;
          pointer-events: none;
          transition: all 0.3s ease-out;
        }
        
        /* Animation for cursor on hover */
        a:hover ~ .cursor-dot,
        button:hover ~ .cursor-dot {
          transform: scale(1.5) translate(-25%, -25%);
          background: rgba(110, 231, 183, 0.8);
        }
        
        a:hover ~ .cursor-outline,
        button:hover ~ .cursor-outline {
          transform: scale(2) translate(-25%, -25%);
          border-color: rgba(110, 231, 183, 0.5);
          background: rgba(110, 231, 183, 0.1);
        }
      `}</style>
    </div>
  );
}
