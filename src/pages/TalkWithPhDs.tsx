import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMessageSquare, 
  FiX, 
  FiCheck, 
  FiStar, 
  FiTwitter, 
  FiLinkedin, 
  FiGithub, 
  FiMail,
  FiUsers,
  FiCode,
  FiSearch,
  FiRefreshCw
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

// Styled components for the nand.aka page
// Type definitions
// Product type will be defined later in the file

type ExpertType = 'ai' | 'human';

type HeroProps = {
  onProductSelect: (product: Product) => void;
};

type ExpertTypeSelectorProps = {
  activeTab: ExpertType;
  onTabChange: (tab: ExpertType) => void;
};

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Section = ({ children, id = '', className = '' }: { children: React.ReactNode; id?: string; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <Container>
      {children}
    </Container>
  </section>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline'; } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2';
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

type PricingCardProps = {
  title: string;
  price: number | string;
  period: string;
  description?: string;
  features: string[];
  buttonText?: string;
  isPopular?: boolean;
  className?: string;
  onSelect?: () => void;
};

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description = '', 
  features, 
  buttonText = 'Get Started',
  isPopular = false,
  className = '',
  onSelect
}: PricingCardProps) => (
  <div className={`relative h-full flex flex-col ${className}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}
    <div className={`flex-1 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border ${isPopular ? 'border-cyan-500/50' : 'border-gray-800'} flex flex-col`}>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button 
          variant={isPopular ? 'secondary' : 'outline'} 
          className="w-full"
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
);



// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'book-a-call') {
      setShowEmailModal(true);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setShowEmailModal(false);
    setEmail('');
  };
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <a 
                href="/" 
                className="font-mono text-cyan-400 text-xl font-bold flex items-center hover:text-cyan-300 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="mr-2">⎔</span> Home
              </a>
              <a 
                href="#"
                className="hidden md:block font-mono text-white text-xl font-bold flex items-center"
              >
                nand.aka
              </a>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['home', 'experts', 'book-a-call', 'about', 'contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm uppercase tracking-wider"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.replace('-', ' ')}
                </a>
              ))}
            </nav>
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                {['home', 'experts', 'book-a-call', 'about', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.replace('-', ' ')}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Email Subscription Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
          >
            <button 
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FiX className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Enter your email to get notified when we launch new features.</p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95"
              >
                Notify Me
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

// Under Construction Modal
const UnderConstructionModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-2">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiMessageSquare className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Coming Soon!</h3>
          <p className="text-gray-300 mb-6">Our service is currently under construction. Leave your email and we'll notify you when we launch.</p>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              aria-label="Email address"
            />
            <button 
              className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                // Add your form submission logic here
                onClose();
              }}
            >
              Notify Me
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 3D Hologram Cube Component
const HologramCube = () => {
  const cubeSize = 200; // Size of the cube in pixels
  const halfSize = cubeSize / 2;
  
  return (
    <div className="relative w-64 h-64 mx-auto my-12" style={{ 
      perspective: '1000px',
      transformStyle: 'preserve-3d',
      zIndex: 10 // Ensure it's above the particle background
    }}>
      <div 
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'spin 15s linear infinite',
          transform: 'rotateX(-15deg) rotateY(25deg)',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* Front */}
        <div 
          className="absolute flex items-center justify-center text-white/80 text-sm font-mono"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            border: '2px solid rgba(34, 211, 238, 0.7)',
            background: 'rgba(34, 211, 238, 0.15)',
            transform: `translateZ(${halfSize}px)`,
            backfaceVisibility: 'visible',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
            transformStyle: 'preserve-3d'
          }}
        >
          nand.aka
        </div>
        
        {/* Back */}
        <div 
          className="absolute flex items-center justify-center text-white/80 text-sm font-mono"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            border: '2px solid rgba(192, 132, 252, 0.7)',
            background: 'rgba(192, 132, 252, 0.15)',
            transform: `rotateY(180deg) translateZ(${halfSize}px)`,
            backfaceVisibility: 'visible',
            boxShadow: '0 0 15px rgba(192, 132, 252, 0.5)',
            transformStyle: 'preserve-3d'
          }}
        >
          nand.aka
        </div>
        
        {/* Left */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            border: '2px solid rgba(236, 72, 153, 0.7)',
            background: 'rgba(236, 72, 153, 0.15)',
            transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
            backfaceVisibility: 'visible',
            boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent to-pink-500/20" />
        </div>
        
        {/* Right */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            border: '2px solid rgba(34, 211, 238, 0.7)',
            background: 'rgba(34, 211, 238, 0.15)',
            transform: `rotateY(90deg) translateZ(${halfSize}px)`,
            backfaceVisibility: 'visible',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-cyan-500/20" />
        </div>
        
        {/* Top */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            border: '2px solid rgba(192, 132, 252, 0.7)',
            background: 'rgba(192, 132, 252, 0.15)',
            transform: `rotateX(90deg) translateZ(${halfSize}px)`,
            backfaceVisibility: 'visible',
            boxShadow: '0 0 15px rgba(192, 132, 252, 0.5)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-purple-500/20" />
        </div>
        
        {/* Bottom */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            width: `${cubeSize}px`,
            height: `${cubeSize}px`,
            border: '2px solid rgba(236, 72, 153, 0.7)',
            background: 'rgba(236, 72, 153, 0.15)',
            transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
            backfaceVisibility: 'visible',
            boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-transparent to-pink-500/20" />
        </div>
        
        {/* Inner Glow */}
        <div 
          className="absolute"
          style={{
            width: `${cubeSize * 1.5}px`,
            height: `${cubeSize * 1.5}px`,
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 70%)',
            transform: 'translateZ(-100px)',
            borderRadius: '50%',
            filter: 'blur(10px)',
            left: '50%',
            top: '50%',
            marginLeft: `${-cubeSize * 0.75}px`,
            marginTop: `${-cubeSize * 0.75}px`,
            zIndex: -1
          }}
        />
      </div>
      
      <style jsx global>{`
        @keyframes spin {
          from { 
            transform: rotateY(0deg) rotateX(-15deg) rotateY(25deg); 
          }
          to { 
            transform: rotateY(360deg) rotateX(-15deg) rotateY(25deg); 
          }
        }
        
        /* Ensure content is above particle background */
        .relative.z-10 {
          position: relative;
          z-index: 10 !important;
        }
        
        /* Fix for particle.js container */
        #particles-js {
          position: absolute !important;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1 !important;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

// Product type definition
type Product = {
  id: string;
  name: string;
  price: number | string;
  image: string;
  description: string;
};

// Product Purchase Modal props type
type ProductPurchaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

// Product Purchase Modal component
const ProductPurchaseModal: React.FC<ProductPurchaseModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-48 h-48 object-cover rounded-lg mx-auto mb-6"
          />
          
          <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
          <p className="text-cyan-400 text-3xl font-bold mb-6">${product.price}</p>
          
          <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">UPI ID:</span>
              <span className="text-white font-mono">your.upi@example</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Name:</span>
              <span className="text-white">Your Name</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95">
              Download Invoice
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg border border-white/20 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Hero Section
const Hero = ({ onProductSelect }: HeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Background Pattern - Behind particles */}
      <div className="absolute inset-0 opacity-5" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjEgM2MxLjY1NyAwIDMgMS4zNDMgMyAzdjMuNjA5YzAgLjg4My0uNzE3IDEuNTk4LTEuNiAxLjU5OGgtNC44Yy0uODgzIDAtMS42LS43MTUtMS42LTEuNlY2YzAtMS42NTcgMS4zNDMtMyAzLTN6TTMgMjFjMC0xLjY1NyAxLjM0My0zIDMtM2gzLjYwOWMuODgzIDAgMS42LjcxNyAxLjYgMS42djQuOGMwIC44ODMtLjcxNyAxLjYtMS42IDEuNkg2Yy0xLjY1NyAwLTMtMS4zNDMtMy0zek0yMSAzN2MxLjY1NyAwIDMtMS4zNDMgMy0zdi0zLjYwOWMwLS44ODMuNzE3LTEuNiAxLjYtMS42aDQuOGMuODgzIDAgMS42LjcxNyAxLjYgMS42VjM0YzAgMS42NTctMS4zNDMgMy0zIDNoLTMuNjA5Yy0uODgzIDAtMS42LS43MTctMS42LTEuNnYtLjJIMjF6TTM3IDIxYzAtMS42NTctMS4zNDMtMy0zLTNoLTMuNjA5Yy0uODgzIDAtMS42LjcxNy0xLjYgMS42djQuOGMwIC44ODMuNzE3IDEuNiAxLjYgMS42SDM0YzEuNjU3IDAgMy0xLjM0MyAzLTN6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      {/* Particle.js container - Middle layer */}
      <div id="particles-js" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 md:mb-12"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <HologramCube />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
          >
            Welcome to nand.aka
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto px-4"
          >
            Your AI-Powered Digital Companion for intelligent conversations and personalized assistance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8"
          >
            <button
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 text-base sm:text-lg"
              onClick={() => window.open('https://github.com/yourusername/nand.aka', '_blank')}
              aria-label="View on GitHub"
            >
              <FiGithub className="w-5 h-5" />
              View on GitHub
            </button>
            
            <button
              onClick={() => scrollToSection('pricing')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 text-base sm:text-lg"
            >
              <FiStar className="w-5 h-5" />
              View Pricing
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Scroll down"
            >
              <span className="mb-2 text-sm font-medium">Learn more</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
      
      <UnderConstructionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ProductPurchaseModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </section>
  );
};

// Expert Type Selector
const ExpertTypeSelector = ({ activeTab, onTabChange }: ExpertTypeSelectorProps) => {
  const [selected, setSelected] = useState<'ai' | 'human'>('ai');

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose Your Expert</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Select between our advanced AI experts or connect with experienced human professionals.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <button
            onClick={() => setSelected('ai')}
            className={`p-8 rounded-2xl text-left transition-all transform hover:scale-[1.02] ${
              selected === 'ai' 
                ? 'bg-gradient-to-br from-cyan-900/50 to-purple-900/50 border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20'
                : 'bg-gray-800/80 border border-gray-700 hover:border-cyan-500/40 hover:bg-gray-800/90'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-xl mr-4 transition-colors ${
                selected === 'ai' 
                  ? 'bg-cyan-600 shadow-md shadow-cyan-500/30' 
                  : 'bg-gray-700 group-hover:bg-cyan-600/70'
              }`}>
                <FiCode className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI Experts</h3>
            </div>
            <p className="text-gray-300 text-base">
              Instant access to advanced AI experts available 24/7. Fast, efficient, and always learning.
            </p>
          </button>

          <button
            onClick={() => setSelected('human')}
            className={`p-8 rounded-2xl text-left transition-all transform hover:scale-[1.02] ${
              selected === 'human'
                ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500/40 shadow-lg shadow-purple-500/20'
                : 'bg-gray-800/80 border border-gray-700 hover:border-purple-500/40 hover:bg-gray-800/90'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-xl mr-4 transition-colors ${
                selected === 'human' 
                  ? 'bg-purple-600 shadow-md shadow-purple-500/30' 
                  : 'bg-gray-700 group-hover:bg-purple-600/70'
              }`}>
                <FiUsers className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Human Experts</h3>
            </div>
            <p className="text-gray-300 text-base">
              Connect with vetted professionals and industry experts for personalized guidance.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

// AI Expert Form
const AIExpertForm = () => {
  const [duration, setDuration] = useState(30);
  const [query, setQuery] = useState('');
  const [expertType, setExpertType] = useState('general');

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Book an AI Expert</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get instant help from our advanced AI experts available 24/7.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="mb-8">
              <label className="block text-gray-200 text-lg font-medium mb-3">Select AI Type</label>
              <select 
                value={expertType}
                onChange={(e) => setExpertType(e.target.value)}
                className="w-full bg-gray-900/70 border-2 border-gray-700 rounded-xl px-5 py-3.5 text-white text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all hover:border-cyan-500/30"
              >
                <option value="general">General AI Assistant</option>
                <option value="tech">Tech Support AI</option>
                <option value="creative">Creative Writing AI</option>
                <option value="analytics">Data Analytics AI</option>
              </select>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="block text-gray-200 text-lg font-medium">Session Duration</label>
                <span className="text-cyan-400 font-medium">{duration} minutes</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="120" 
                step="15"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>15 min</span>
                <span>120 min</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-200 text-lg font-medium mb-3">What would you like to discuss?</label>
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your question or topic in detail..."
                rows={4}
                className="w-full bg-gray-900/70 border-2 border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all hover:border-cyan-500/30 resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <p className="text-gray-400">Estimated Cost</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ${(duration * 0.5).toFixed(2)}
                </p>
                <p className="text-sm text-gray-400">${(0.5).toFixed(2)} per minute</p>
              </div>
              <button 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3.5 px-10 rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full md:w-auto text-lg"
              >
                Book AI Session - ${(duration * 0.5).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Human Experts Grid
const HumanExperts = () => {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(200);

  const experts = [
    {
      id: 0,
      name: 'nand.aka',
      title: 'AI-Powered Digital Companion',
      expertise: ['Conversational AI', 'Personal Growth', 'Knowledge Base'],
      rate: 0,
      rating: 4.9,
      reviews: 128,
      available: true,
      image: '/images/nand.aka.png',
      category: 'ai',
      isSoftware: true,
      url: 'http://localhost:3002/nand.aka'
    },
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist',
      expertise: ['Machine Learning', 'Computer Vision', 'Neural Networks'],
      rate: 150,
      rating: 4.9,
      reviews: 128,
      available: true,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      category: 'ai'
    },
    {
      id: 2,
      name: 'James Rodriguez',
      title: 'Senior Data Scientist',
      expertise: ['Data Analysis', 'Python', 'Big Data'],
      rate: 120,
      rating: 4.8,
      reviews: 94,
      available: true,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      category: 'data'
    },
    {
      id: 3,
      name: 'Priya Patel',
      title: 'UX/UI Designer',
      expertise: ['User Research', 'Figma', 'Prototyping'],
      rate: 95,
      rating: 4.7,
      reviews: 76,
      available: false,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      category: 'design'
    },
    {
      id: 4,
      name: 'Michael Johnson',
      title: 'Blockchain Developer',
      expertise: ['Solidity', 'Smart Contracts', 'Ethereum'],
      rate: 180,
      rating: 4.9,
      reviews: 112,
      available: true,
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      category: 'blockchain'
    },
    {
      id: 5,
      name: 'Dr. Emily Zhang',
      title: 'ML Research Lead',
      expertise: ['Deep Learning', 'NLP', 'Reinforcement Learning'],
      rate: 220,
      rating: 5.0,
      reviews: 156,
      available: true,
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      category: 'ai'
    },
    {
      id: 6,
      name: 'David Kim',
      title: 'Cloud Architect',
      expertise: ['AWS', 'DevOps', 'Microservices'],
      rate: 160,
      rating: 4.8,
      reviews: 88,
      available: true,
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      category: 'cloud'
    },
    {
      id: 7,
      name: 'Sophia Williams',
      title: 'Product Manager',
      expertise: ['Agile', 'Roadmapping', 'User Stories'],
      rate: 140,
      rating: 4.7,
      reviews: 65,
      available: true,
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      category: 'product'
    },
    {
      id: 8,
      name: 'Carlos Mendez',
      title: 'Cybersecurity Expert',
      expertise: ['Pen Testing', 'Security Audits', 'Threat Modeling'],
      rate: 200,
      rating: 4.9,
      reviews: 104,
      available: true,
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      category: 'security'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experts' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'product', name: 'Product' },
    { id: 'security', name: 'Security' },
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesCategory = category === 'all' || expert.category === category;
    const matchesPrice = expert.rate <= priceRange;
    return matchesCategory && matchesPrice;
  });

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our Human Experts</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Connect with vetted professionals and industry leaders for personalized 1:1 guidance.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto mb-12 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="w-full">
              <label className="block text-gray-300 text-sm font-medium mb-2">Filter by Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === cat.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-300 text-sm font-medium">Max Rate: <span className="text-cyan-400">${priceRange}/hr</span></label>
                <span className="text-xs text-gray-400">${priceRange}</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$50</span>
                <span>$300+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {filteredExperts.map((expert) => {
            const isSoftware = expert.isSoftware;
            const cardContent = (
              <>
                <div className="relative h-56 bg-gray-900">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className={`w-full h-full object-${isSoftware ? 'contain' : 'cover'} p-4 group-hover:scale-105 transition-transform duration-500`}
                  />
                  {!expert.available && !isSoftware && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="bg-red-500/90 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                        Currently Unavailable
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center">
                      <div className="flex items-center bg-amber-500/90 text-white px-2 py-1 rounded-md text-xs font-medium">
                        <FiStar className="mr-1" fill="currentColor" />
                        {expert.rating} <span className="text-gray-300 ml-1">({expert.reviews})</span>
                      </div>
                      {!isSoftware && (
                        <div className="ml-auto bg-cyan-500/90 text-white text-xs font-medium px-2.5 py-1 rounded-md">
                          ${expert.rate}/hr
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {expert.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{expert.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.expertise.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-700/60 text-cyan-300 text-xs px-2.5 py-1 rounded-full border border-gray-600/50 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {isSoftware ? (
                    <a
                      href={expert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 text-center rounded-xl font-medium text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      Open {expert.name}
                    </a>
                  ) : (
                    <button 
                      className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                        expert.available 
                          ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-500/20'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!expert.available}
                    >
                      {expert.available ? 'Book Session' : 'Unavailable'}
                    </button>
                  )}
                </div>
              </>
            );

            return (
              <motion.div 
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative group bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border ${
                  isSoftware 
                    ? 'border-purple-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10' 
                    : 'border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10'
                } transition-all duration-300`}
              >
                {isSoftware ? (
                  <a href={expert.url} target="_blank" rel="noopener noreferrer" className="block">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
              <FiSearch className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No experts found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your filters or check back later for new expert additions.
            </p>
            <button 
              onClick={() => {
                setCategory('all');
                setPriceRange(200);
              }}
              className="mt-4 text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center"
            >
              <FiRefreshCw className="mr-2" /> Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Find Experts', href: '#experts' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
  ];

  const expertiseAreas = [
    'AI & Machine Learning',
    'Data Science',
    'Web Development',
    'UI/UX Design',
    'Blockchain',
    'Cybersecurity'
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <FiTwitter className="w-4 h-4" />, href: '#' },
    { name: 'LinkedIn', icon: <FiLinkedin className="w-4 h-4" />, href: '#' },
    { name: 'GitHub', icon: <FiGithub className="w-4 h-4" />, href: '#' },
    { name: 'Email', icon: <FiMail className="w-4 h-4" />, href: 'mailto:hello@expertstalk.com' },
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FiMessageSquare className="text-cyan-400 text-2xl mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ExpertsTalk
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting you with top-tier AI and human experts to solve complex problems and drive innovation forward.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500">
              Expertise Areas
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {expertiseAreas.map((area) => (
                <div key={area} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2"></span>
                  <a 
                    href={`#${area.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors py-1"
                  >
                    {area}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <FiMail className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:hello@expertstalk.com" className="hover:text-cyan-400 transition-colors">
                  hello@expertstalk.com
                </a>
              </li>
              <li className="flex items-start">
                <FiMessageSquare className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Support
                </a>
              </li>
              <li className="pt-4">
                <h5 className="text-white font-medium mb-2">Newsletter</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 text-white text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                  />
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 rounded-r-lg text-sm font-medium transition-all">
                    Join
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} ExpertsTalk. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const TalkWithPhDs = () => {
  const [activeTab, setActiveTab] = React.useState<'ai' | 'human'>('ai');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = React.useState(false);
  const [isUnderConstructionOpen, setIsUnderConstructionOpen] = React.useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsPurchaseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main>
        <Hero onProductSelect={handleProductSelect} />
        
        <Section id="how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get expert guidance in minutes, not days. Choose between our AI assistant or connect with human experts.
            </p>
          </div>
          
          <ExpertTypeSelector activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="mt-12">
            {activeTab === 'ai' ? <AIExpertForm /> : <HumanExperts />}
          </div>
        </Section>
        
        <Section id="features" className="bg-gray-800/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get the best of both worlds with AI and human expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<FiMessageSquare />}
              title="AI-Powered Assistance"
              description="Get instant answers to your questions with our advanced AI trained on expert knowledge."
            />
            <FeatureCard
              icon={<FaDiscord />}
              title="Human Experts"
              description="Connect with verified PhDs and industry experts for personalized guidance."
            />
            <FeatureCard
              icon={<FiMessageSquare />}
              title="Flexible Options"
              description="Choose between quick AI responses or in-depth human consultations."
            />
          </div>
        </Section>
        
        <Section id="pricing">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price={9}
              period="month"
              description="Perfect for individuals getting started"
              features={["10 AI queries/month", "Basic support", "Email assistance"]}
              isPopular={false}
              onSelect={() => handleProductSelect({
                id: 'starter',
                name: 'Starter Plan',
                price: '9',
                description: 'Perfect for individuals getting started',
                image: '/images/plans/starter.jpg'
              })}
            />
            <PricingCard
              title="Pro"
              price={29}
              period="month"
              description="Ideal for professionals and small teams"
              features={["50 AI queries/month", "Priority support", "1 human consultation"]}
              isPopular={true}
              onSelect={() => handleProductSelect({
                id: 'pro',
                name: 'Pro Plan',
                price: '29',
                description: 'Ideal for professionals and small teams',
                image: '/images/plans/pro.jpg'
              })}
            />
            <PricingCard
              title="Enterprise"
              price={99}
              period="month"
              description="For teams and businesses with advanced needs"
              features={["Unlimited AI queries", "24/7 support", "5 human consultations"]}
              isPopular={false}
              onSelect={() => handleProductSelect({
                id: 'enterprise',
                name: 'Enterprise Plan',
                price: '99',
                description: 'For teams and businesses with advanced needs',
                image: '/images/plans/enterprise.jpg'
              })}
            />
          </div>
        </Section>
      </main>
      
      <Footer />
      
      <ProductPurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        product={selectedProduct}
      />
      
      <UnderConstructionModal
        isOpen={isUnderConstructionOpen}
        onClose={() => setIsUnderConstructionOpen(false)}
      />
    </div>
  );
};

export default TalkWithPhDs;
