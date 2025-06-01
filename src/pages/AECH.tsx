// @ts-nocheck
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { 
  FiPieChart, 
  FiAward, 
  FiZap, 
  FiGlobe, 
  FiLayers, 
  FiShield, 
  FiLock, 
  FiUserCheck, 
  FiKey, 
  FiDollarSign, 
  FiCheck, 
  FiUsers 
} from 'react-icons/fi';
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
                  <p className="text-gray-300">AECH is a revolutionary AI-driven 3D blockchain-based financial operating system that unifies all your financial assets—crypto, fiat, and AI investments—into one ultra-secure wallet. It seamlessly connects traditional banks, global currencies (INR, USD, EUR, etc.), blockchain assets, and intelligent automation in a single AI-governed ecosystem.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Why 3D Blockchain?</h3>
                  <p className="text-gray-300">AECH introduces a proprietary 3D blockchain cube structure where:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>X-Axis</strong> represents Crypto Assets</li>
                    <li><strong>Y-Axis</strong> represents Fiat Currencies</li>
                    <li><strong>Z-Axis</strong> represents AI Investments & Data</li>
                  </ul>
                  This multi-dimensional architecture enables unmatched security, seamless interoperability, and fully traceable financial activity across all domains.</p>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>One Wallet to Rule All Assets</h3>
                  <p className="text-gray-300 mb-3">The AECH wallet unifies:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Traditional bank accounts (INR, USD, etc.)</li>
                    <li>Major cryptocurrencies (BTC, ETH, SOL, ADA, etc.)</li>
                    <li>AI-powered assets & real-time analytics</li>
                  </ul>
                  <p className="text-gray-300 mt-3">The <strong>AECH Coin</strong> acts as the universal intermediary, enabling instant conversion, seamless transfers, and governance participation.</p>
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
          
          {/* Wallet Features */}
          <section className="py-20 px-6 bg-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: '#00ffae' }}>Wallet Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiPieChart /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Unified Dashboard</h3>
                  <p className="text-gray-300">Visualize all your assets across fiat, crypto, and AI in real-time with an intelligent UI powered by adaptive machine learning.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiAward /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Zero-Loss AI Trader</h3>
                  <p className="text-gray-300">Your personal AI trader uses deep reinforcement learning to ensure optimized investments across DeFi, CeFi, and TradFi with no loss, ever.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiZap /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Instant Global Conversion</h3>
                  <p className="text-gray-300">Convert between INR ↔ BTC ↔ USD ↔ AECH Coin ↔ ETH instantly with intelligent routing across banks, blockchains, and exchanges.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiGlobe /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Cross-Chain & Cross-Border</h3>
                  <p className="text-gray-300">Works with all major blockchains: Ethereum, Solana, Cardano, Bitcoin, Polygon, and more. Supports 10,000+ banks & payment processors globally.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiLayers /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">DeFi Access Without Complexity</h3>
                  <p className="text-gray-300">One-click access to staking, farming, lending, and yield protocols with optimized yield aggregation via the AI layer.</p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">Ready to Experience AECH?</h3>
                  <p className="text-gray-300 mb-6">Join our waitlist to be among the first to access the future of finance.</p>
                  <button 
                    onClick={() => setShowEarlyAccessPopup(true)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-lg hover:opacity-90 transition-all duration-300 w-full"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Security */}
          <section className="py-20 px-6 bg-gradient-to-b from-black/50 to-transparent">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: '#00ffae' }}>Unbreakable Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiShield /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Quantum-Resistant Encryption</h3>
                  <p className="text-gray-300">Post-quantum cryptography ensures your assets remain secure against emerging quantum computing threats, future-proofing your investments.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiLock /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Multi-Dimensional Key Sharding</h3>
                  <p className="text-gray-300">Your private keys are fragmented across the blockchain cube, making them impossible to extract without full spatial validation.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiUserCheck /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Biometric Multi-Factor Auth</h3>
                  <p className="text-gray-300">Facial, fingerprint, and voice recognition combined with AI threat detection for maximum security without compromising convenience.</p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl mb-4 text-cyan-400"><FiKey /></div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Non-Clonable AECH Identity</h3>
                  <p className="text-gray-300">Each user has a non-replicable cryptographic identity that cannot be forged or stolen, ensuring complete ownership and control.</p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <p className="text-gray-400 mb-6">AECH's security infrastructure is built on military-grade encryption and decentralized validation</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">End-to-End Encrypted</span>
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">Zero-Knowledge Proofs</span>
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">Decentralized Storage</span>
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">Smart Contract Audited</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Ecosystem */}
          <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: '#00ffae' }}>AECH Ecosystem</h2>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <FiDollarSign size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-300">AECH Coin Utility</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">Transaction gas across all chains</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">Governance voting and ecosystem proposals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">Staking and yield farming</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">AI trader revenue sharing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <FiUsers size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-300">Partners</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">Global banks, centralized and decentralized exchanges</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">AI labs and quantum research institutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <FiCheck className="text-cyan-400" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-300">Web3 projects, stablecoin providers, and liquidity bridges</span>
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
