import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TextEffect from '../components/TextEffect';

type Variants = {
  hidden: {
    opacity: number;
    y?: number;
    rotateX?: number;
    transition?: {
      type?: string;
      damping?: number;
      stiffness?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
  visible: {
    opacity: number;
    y?: number;
    rotateX?: number;
    transition?: {
      type?: string;
      damping?: number;
      stiffness?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
};

interface ButtonProps {
  label: string;
  path: string;
  color?: string;  // Made optional with default value in component
  image: string;
  logo?: string;
  neonColor?: string;
}

const Button = ({ label, path, color = 'from-gray-600 to-blue-600', image, logo, neonColor = '#00f7ff' }: ButtonProps) => {
  const [isFiring, setIsFiring] = useState(false);
  
  // Fire missile function
  const fireMissile = () => {
    console.log('Firing missile!'); // Debug log
    setIsFiring(false); // Reset to ensure animation can trigger again
    // Force reflow
    void document.body.offsetHeight;
    // Set firing to true to show the effect
    setIsFiring(true);
    // Auto-hide after animation completes (slightly shorter than interval)
    setTimeout(() => {
      setIsFiring(false);
    }, 900);
  };

  // Set up interval for automatic firing every 2 seconds
  useEffect(() => {
    // Initial fire after a short delay to ensure component is mounted
    const initialTimer = setTimeout(() => {
      fireMissile();
    }, 500);
    
    // Set up interval for automatic firing every second
    const interval = setInterval(() => {
      fireMissile();
    }, 1000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, []);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(path);
  };

  return (
    <div 
      className="flex flex-col items-center cursor-pointer transform transition-all duration-300 group"
      onClick={(e) => {
        e.stopPropagation();
        fireMissile();
        handleButtonClick();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        fireMissile();
      }}
      style={{
        width: '320px',  // Slightly wider to accommodate the glow
        margin: '0 10px' // Add some margin between buttons
      }}
    >
      <div 
        className="relative overflow-hidden group/button"
        style={{
          width: '300px',
          height: '168.75px',
          background: `linear-gradient(135deg, ${color.split(' ')[0]}cc, ${color.split(' ')[2]}cc)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '0.5rem',
          boxShadow: `0 0 20px ${neonColor}66, 0 0 40px ${neonColor}33`,
          position: 'relative',
          border: `2px solid ${neonColor}88`,
          transition: 'all 0.3s ease',
          overflow: 'visible',
        }}
      >
        {/* Tank firing effect - Enhanced */}
        {isFiring && (
          <div className="absolute -top-3 -right-3 w-6 h-6 z-50"
               style={{
                 background: `radial-gradient(circle, white 0%, ${neonColor} 30%, ${neonColor}00 70%)`,
                 filter: 'blur(2px)',
                 animation: 'tankFire 0.7s ease-out forwards',
                 borderRadius: '50%',
                 boxShadow: `
                   0 0 15px white,
                   0 0 30px ${neonColor},
                   0 0 60px ${neonColor}88,
                   0 0 90px ${neonColor}44
                 `,
                 transform: 'translateZ(0)'
               }}>
            <div className="absolute inset-0" 
                 style={{
                   background: `radial-gradient(circle, white 0%, ${neonColor} 40%, transparent 70%)`,
                   filter: 'blur(1px)',
                   animation: 'pulse 0.2s ease-in-out infinite alternate',
                   transform: 'translateZ(0)'
                 }}>
            </div>
          </div>
        )}
        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{
            boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}88`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}></div>
        </div>
        {/* Image container - matches button size exactly */}
        <div className="relative w-full h-full">
          {image && (
            <img
              src={image}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          )}
          
          {/* Glowing overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Glowing corners */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 rounded-tl-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300"
                 style={{
                   borderColor: neonColor,
                   boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}88`
                 }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 rounded-tr-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300"
                 style={{
                   borderColor: neonColor,
                   boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}88`
                 }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 rounded-bl-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300"
                 style={{
                   borderColor: neonColor,
                   boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}88`
                 }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 rounded-br-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300"
                 style={{
                   borderColor: neonColor,
                   boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}88`
                 }}></div>
          </div>
        </div>
      </div>
      
      {/* Add keyframe animation */}
      <style jsx>{`
        @keyframes tankFire {
          0% { 
            opacity: 1;
            transform: scale(1);
          }
          70% {
            opacity: 1;
            transform: scale(1.5);
          }
          100% { 
            opacity: 0;
            transform: scale(0.5);
          }
        }
        
        @keyframes pulse {
          from { opacity: 0.8; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes bulletTravel {
          0% { 
            left: -10px; 
            opacity: 0;
            transform: translateY(-50%) scale(0.5);
          }
          10% { 
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          100% { 
            left: calc(100% + 10px); 
            opacity: 0;
            transform: translateY(-50%) scale(0.5);
          }
        }
      `}</style>
      <h3 className="mt-4 text-xl font-bold text-white text-center w-full px-2">
        <span className="relative inline-block">
          {label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </h3>
    </div>
  );
};

const buttons: ButtonProps[] = [
  {
    label: 'Who am I',
    path: '/whoami',
    color: 'from-pink-600 to-purple-700',
    image: '/images/Untitled design(6).png'
  },
  {
    label: 'Documentaries',
    path: '/documentaries',
    color: 'from-green-600 to-teal-700',
    image: '/images/Untitled design(7).png',
    neonColor: '#10b981' // Teal neon color
  }
];

export default function Home() {
  const text = 'SPIRITUALAI.ORG';
  
  const container: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 32,
      rotateX: -90,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="min-h-screen w-full overflow-y-auto relative">
      <div className="text-center text-white py-2 sm:py-4 relative z-10 px-2">
        <div className="mb-2">
          <div className="hidden md:block text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-center relative min-h-[3rem] sm:min-h-[4rem] overflow-hidden">
            <motion.div 
              className="inline-block"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {text.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="whitespace-nowrap inline-block text-white cursor-pointer font-mono font-black tracking-wider text-4xl sm:text-5xl md:text-7xl"
                  style={{
                    letterSpacing: '0.1em',
                    position: 'relative',
                    display: 'inline-block',
                    transform: 'scale(0.9)'
                  }}
                  variants={child}
                  onClick={() => {
                    // Play Om sound on click
                    const audio = new Audio('/sounds/om.mp3');
                    audio.play().catch(e => console.log('Audio play failed:', e));
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
            <style jsx>{`
              #spiritualai-text {
                position: relative;
                display: inline-block;
              }
              
              .glitch-text {
                position: relative;
              }
              
              .glitch-text::before,
              .glitch-text::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: inherit;
                -webkit-background-clip: inherit;
                background-clip: inherit;
                color: inherit;
              }
              
              .glitch-text::before {
                left: 2px;
                text-shadow: -2px 0 #ff00c1;
                clip: rect(44px, 450px, 56px, 0);
                animation: glitch-anim 5s infinite linear alternate-reverse;
              }
              
              .glitch-text::after {
                left: -2px;
                text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
                clip: rect(44px, 450px, 56px, 0);
                animation: glitch-anim2 5s infinite linear alternate-reverse;
              }
              
              @keyframes glitch-anim {
                0% { clip: rect(31px, 9999px, 94px, 0); }
                10% { clip: rect(112px, 9999px, 76px, 0); }
                20% { clip: rect(85px, 9999px, 77px, 0); }
                30% { clip: rect(27px, 9999px, 97px, 0); }
                40% { clip: rect(64px, 9999px, 98px, 0); }
                50% { clip: rect(61px, 9999px, 85px, 0); }
                60% { clip: rect(99px, 9999px, 114px, 0); }
                70% { clip: rect(34px, 9999px, 115px, 0); }
                80% { clip: rect(98px, 9999px, 129px, 0); }
                90% { clip: rect(43px, 9999px, 96px, 0); }
                100% { clip: rect(82px, 9999px, 64px, 0); }
              }
              
              @keyframes glitch-anim2 {
                0% { clip: rect(65px, 9999px, 119px, 0); }
                10% { clip: rect(76px, 9999px, 66px, 0); }
                20% { clip: rect(26px, 9999px, 33px, 0); }
                30% { clip: rect(75px, 9999px, 104px, 0); }
                40% { clip: rect(10px, 9999px, 25px, 0); }
                50% { clip: rect(98px, 9999px, 70px, 0); }
                60% { clip: rect(11px, 9999px, 4px, 0); }
                70% { clip: rect(33px, 9999px, 99px, 0); }
                80% { clip: rect(87px, 9999px, 132px, 0); }
                90% { clip: rect(53px, 9999px, 34px, 0); }
                100% { clip: rect(50px, 9999px, 78px, 0); }
              }
              
              @keyframes tankFire {
                0% {
                  transform: scale(0.8) translate(0, 0);
                  opacity: 1;
                }
                20% {
                  transform: scale(1.2) translate(-5px, -5px);
                  opacity: 0.9;
                }
                100% {
                  transform: scale(1.5) translate(-30px, -30px);
                  opacity: 0;
                }
              }
              
              @keyframes pulse {
                from {
                  transform: scale(0.8);
                  opacity: 0.8;
                }
                to {
                  transform: scale(1.2);
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:block text-lg md:text-xl text-center font-mono mb-12"
        >
          <div className="inline-block">
            <TextEffect text="[" className="text-cyan-400 inline" />
            <TextEffect text="SYSTEM" className="text-purple-400 inline" />
            <TextEffect text="]" className="text-cyan-400 inline" />
            <TextEffect text=" INITIALIZING NEURAL INTERFACE" className="text-gray-400 inline" />
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {buttons
            .filter(button => ![
              'Who is She', 
              'Nand Aka', 
              'Dev Dat', 
              'Experts Talk', 
              'Talk with PhDs', 
              'Tantra Meditations',
              'Spirituality',
              'Data Treya',
              'AI Agency',
              'Ghibli Store'
            ].includes(button.label))
            .map((button, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-xs transform transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Button {...button} />
              </motion.div>
            ))}
        </div>
      </div>
      
      {/* Extra spacing at the bottom */}
      <div className="mt-20 py-16 w-full relative z-10">
        {/* Empty div for spacing */}
      </div>
    </div>
  );
}
