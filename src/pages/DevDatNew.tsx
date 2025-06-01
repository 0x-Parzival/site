import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiLock, FiShield, FiCpu, FiSmartphone, FiMonitor, FiCode, FiUser, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import '../styles/devdat.css';
import { HowItWorksSection } from '../components/devdat/DevDatSections';
import { SecuritySection } from '../components/devdat/DevDatSections';
import { AISyncSection } from '../components/devdat/DevDatSections';
import { PricingSection } from '../components/devdat/DevDatSections';
import { Footer } from '../components/devdat/DevDatSections';

// Types
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
};

type AIAssistant = {
  name: string;
  role: string;
  description: string;
  color: string;
};

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  featured: boolean;
};

// Data
const features: Feature[] = [
  {
    icon: <FiUser className="w-8 h-8 text-cyan-400" />,
    title: "Universal Personalization",
    description: "Log in anywhere, instantly transform device UX, settings, apps, and accounts to your preference.",
  },
  {
    icon: <FiLock className="w-8 h-8 text-purple-400" />,
    title: "Encrypted Data Vault",
    description: "All your data stored and synced securely with end-to-end encryption.",
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-cyan-400" />,
    title: "Cross-Platform Sync",
    description: "Supports all devices, OS, and browsers — no barriers.",
  },
  {
    icon: <FiCpu className="w-8 h-8 text-purple-400" />,
    title: "AI Assistant Integration",
    description: "Automatically connect your favorite AI assistants for seamless daily flow.",
  },
  {
    icon: <FiCode className="w-8 h-8 text-cyan-400" />,
    title: "Instant Account Customization",
    description: "Auto-login and personalize your accounts on any site, every time.",
  },
  {
    icon: <FiShield className="w-8 h-8 text-purple-400" />,
    title: "Auto-Revert on Logout",
    description: "When you leave, device resets securely to original state. No trace left behind.",
  },
];

const steps: Step[] = [
  { number: "01", title: "Install dev.dat Container", description: "Setup once on your preferred devices." },
  { number: "02", title: "Secure Login & Data Sync", description: "Authenticate and load your encrypted profile instantly." },
  { number: "03", title: "Device Transformation", description: "Personalized environment & account settings load dynamically." },
  { number: "04", title: "AI Assistant Activation", description: "Connects your chosen AI personalities for maximum efficiency." },
  { number: "05", title: "Secure Logout & Revert", description: "Clean exit: device returns to default with no data residue." }
];

const aiAssistants: AIAssistant[] = [
  {
    name: "NAND",
    role: "Cybersecurity Guardian",
    description: "Keeps your digital presence secure and monitors for threats in real-time.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "AKA",
    role: "Productivity Coach",
    description: "Helps you stay organized and productive across all your devices.",
    color: "from-purple-500 to-pink-600"
  }
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    features: ["Basic container", "Up to 2 devices", "Community support", "Basic AI features"],
    buttonText: "Get Started",
    featured: false
  },
  {
    name: "Pro",
    price: "9.99",
    period: "per month",
    features: ["Unlimited devices", "Priority support", "Full AI integration", "Advanced security features", "Custom themes"],
    buttonText: "Go Pro",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "custom",
    features: ["Custom solutions", "Dedicated support", "Advanced compliance", "Team management", "SLA"],
    buttonText: "Contact Sales",
    featured: false
  }
];

// Header Props
type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

// Header Component
const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              dev.dat
            </motion.div>
          </div>
          
          <nav className={`${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-gray-900/95 p-4' : 'hidden'} md:flex md:items-center md:space-x-8`}>
            {['Features', 'Security', 'AI Sync', 'How It Works', 'Pricing'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors block md:inline-block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="cyber-button">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="px-4 py-3 space-y-4">
              {['Features', 'Security', 'AI Sync', 'How It Works', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 cyber-button">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Digital Identity. Everywhere. Instantly.
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            dev.dat transforms any device into your device — encrypted, personalized, seamless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="cyber-button flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <FiArrowRight className="w-5 h-5" />
            </button>
            <button className="cyber-button secondary">
              Watch Demo
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="cyber-card relative z-10 p-1 rounded-2xl overflow-hidden">
            <div className="h-8 bg-gray-800 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="h-4 w-3/4 bg-gray-800 rounded mb-4"></div>
                  <div className="h-4 w-1/2 bg-gray-800 rounded mb-6"></div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-gray-800 rounded w-full"></div>
                    ))}
                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                      <FiUser className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-gray-300">Personalized UI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <section id="features" className="section">
      <div className="cyber-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title gradient-text">Features That Power Your Digital Life</h2>
          <p className="text-xl text-gray-400">Everything you need to take control of your digital identity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="cyber-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function DevDatNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SecuritySection />
        <AISyncSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
