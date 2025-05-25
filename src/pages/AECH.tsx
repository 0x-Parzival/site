// @ts-nocheck
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from '../components/AECH/HeroSection';
import JoinSection from '../components/AECH/JoinSection';

// Define types for the popup component props
interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

// Popup Component for Early Access and Download Wallet
const SubscriptionPopup: React.FC<SubscriptionPopupProps> = ({ isOpen, onClose, title }) => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log(`Thank you for subscribing with ${email}! We'll notify you when AECH is ready.`);
    
    // Show thank you message using React state
    setShowThankYou(true);
    
    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setEmail('');
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 border border-cyan-500/50 rounded-xl p-8 max-w-md w-full z-50 backdrop-blur-md animate-fadeIn"
          >
            {showThankYou ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#00ffc8' }}>Thank You!</h3>
                <p className="text-gray-300">We'll notify you when AECH is ready.</p>
              </div>
            ) : (
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center mb-6">
                <img src="/images/aechlogo.png" alt="AECH Logo" className="h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold" style={{ color: '#00ffc8' }}>{title}</h3>
                <p className="text-gray-300 mt-2">AECH is currently under construction. Subscribe to get notified when we launch.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-black/50 border border-cyan-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  Subscribe Now
                </button>
              </form>
              
              <div className="mt-6 text-center text-gray-400 text-sm">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </div>
            </div>
            )}
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const AECH: React.FC = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showEarlyAccessPopup, setShowEarlyAccessPopup] = useState(false);
  
  const scrollToAbout = () => {
    // For TypeScript compatibility, we'll just log this action
    console.log('Scrolling to About section...');
    // In a real app with proper TypeScript support, you would use:
    // document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
  };
  
  const redirectToDiscord = () => {
    // For TypeScript compatibility, we'll just log this action
    // In a real app, you would implement proper navigation
    console.log('Redirecting to Discord...');
    // This is just a placeholder - in a real app you would use proper routing
    // or navigation libraries that are TypeScript-friendly
  };

  return (
    <>
      <div className="min-h-screen w-full relative overflow-x-hidden" style={{
        fontFamily: "'Orbitron', sans-serif",
        background: "radial-gradient(circle at top, #0f0f0f, #000)",
        color: "#00ffd5",
      }}>
        {/* Background Particles */}
        {/* Global ParticleBackground is applied at App level */}
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <HeroSection
            onGetStartedClick={scrollToAbout}
            onJoinFutureClick={redirectToDiscord}
          />
        
          {/* About AECH */}
          <section id="about-section" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>About AECH</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>What is AECH?</h3>
                  <p className="text-gray-300">AECH is a revolutionary 3D blockchain-based financial operating system that unifies all your financial assets into a single, secure wallet. It bridges the gap between traditional banking, cryptocurrencies, and AI-powered investments.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Why 3D Blockchain?</h3>
                  <p className="text-gray-300">Our proprietary 3D blockchain cube stores data in a spatially-indexed structure, with each axis representing Fiat, Crypto, and AI respectively. This enables unprecedented interoperability and security across financial systems.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>One Wallet for All</h3>
                  <p className="text-gray-300">With AECH, you only need one wallet linked to all your bank accounts, crypto wallets, and fiat currencies. AECH Coin serves as the central currency, enabling seamless conversion between any currency across any blockchain or bank.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* 3D Block Cube Visualizer */}
          <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>3D Blockchain Cube</h2>
              
              <div className="max-w-3xl mx-auto relative rounded-xl overflow-hidden">
                <div className="flex justify-center">
                  <img 
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2lidGRwemlzbXZ5MDgxNHlzM21za2UzYTR1ZGthYnZrbDRvcnJkbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fJsVWkibe5gEQPputm/giphy.gif" 
                    alt="3D Blockchain Visualization" 
                    className="rounded-xl border border-cyan-900/50 shadow-2xl shadow-cyan-500/20"
                    style={{
                      maxWidth: '400px',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '1/1',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Features */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>Wallet Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Unified Dashboard</h3>
                  <p className="text-gray-300">View all your assets, investments, and transactions in one place. Real-time updates and AI-powered insights help you make informed decisions.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Instant Conversions</h3>
                  <p className="text-gray-300">Convert any currency to any other currency instantly with minimal fees. AECH's 3D blockchain ensures the best rates across all exchanges and banks.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>AI Investment Advisor</h3>
                  <p className="text-gray-300">Our proprietary AI analyzes market trends, your spending habits, and risk tolerance to provide personalized investment recommendations.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Cross-Chain Compatibility</h3>
                  <p className="text-gray-300">AECH works with all major blockchains including Ethereum, Solana, Cardano, and Bitcoin. New chains are added regularly through governance votes.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Bank Integration</h3>
                  <p className="text-gray-300">Link your traditional bank accounts for seamless transfers between crypto and fiat. AECH is compatible with over 10,000 banks worldwide.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>DeFi Protocols</h3>
                  <p className="text-gray-300">Access the best yields across DeFi with one click. Stake, farm, and earn passive income without navigating complex protocols manually.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Security */}
          <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>Unbreakable Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Quantum Encryption</h3>
                  <p className="text-gray-300">AECH utilizes post-quantum cryptography to ensure your assets remain secure even against quantum computer attacks.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Multi-Dimensional Keys</h3>
                  <p className="text-gray-300">Your private keys are split across multiple dimensions of the blockchain cube, making them impossible to extract without proper authorization.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Biometric Security</h3>
                  <p className="text-gray-300">Multi-factor authentication using fingerprint, facial recognition, and voice patterns. Your wallet is as unique as you are.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Non-Duplicable Identity</h3>
                  <p className="text-gray-300">Your AECH identity cannot be copied or stolen. Our proprietary technology ensures that only you can access your financial universe.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Ecosystem */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>AECH Ecosystem</h2>
              
              <div className="bg-black bg-opacity-50 p-8 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>AECH Coin Utility</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Transaction fees</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Governance voting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Staking rewards</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>AI profit sharing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Partners</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Major banks worldwide</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Leading blockchains</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Payment processors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>AI research institutes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Developer Tools</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>AECH SDK</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>REST API</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>GraphQL endpoint</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Smart contract templates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Join AECH */}
          <JoinSection
            onDownloadWalletClick={() => setShowDownloadPopup(true)}
            onDeveloperDocsClick={redirectToDiscord}
            onEarlyAccessClick={() => setShowEarlyAccessPopup(true)}
          />
          
          {/* Footer */}
          <footer className="py-10 px-6 bg-black/80">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold" style={{ color: '#00ffc8' }}>AECH</h2>
                  <p className="text-gray-400">The 3D Financial Universe</p>
                </div>
                
                <div className="flex gap-6">
                  <a href="https://twitter.com" className="text-cyan-400 hover:text-cyan-300">Twitter</a>
                  <a href="https://discord.com" className="text-cyan-400 hover:text-cyan-300">Discord</a>
                  <a href="https://github.com" className="text-cyan-400 hover:text-cyan-300">GitHub</a>
                  <a href="https://medium.com" className="text-cyan-400 hover:text-cyan-300">Medium</a>
                </div>
              </div>
              
              <div className="h-[1px] w-full bg-gray-800 mb-8"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; 2025 AECH Inc. All rights reserved.</p>
                <p>Built with ❤️ by 0xParzival</p>
                <div className="flex gap-4">
                  <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
                  <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      
      {/* Popups */}
      <SubscriptionPopup 
        isOpen={showDownloadPopup} 
        onClose={() => setShowDownloadPopup(false)} 
        title="Download AECH Wallet" 
      />
      
      <SubscriptionPopup 
        isOpen={showEarlyAccessPopup} 
        onClose={() => setShowEarlyAccessPopup(false)} 
        title="Get Early Access" 
      />
    </>
  );
};

export default AECH;
