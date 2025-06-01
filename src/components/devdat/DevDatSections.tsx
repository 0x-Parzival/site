import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, 
  FiShield, 
  FiCpu, 
  FiArrowRight, 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiLock, 
  FiUser 
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

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

// How It Works Section
export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="cyber-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-xl text-gray-400">Get started with dev.dat in just a few simple steps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="cyber-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-4 text-cyan-400">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Security Section
export const SecuritySection = () => {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All your data is encrypted before it leaves your device and can only be decrypted by you.",
      icon: <FiShield className="w-6 h-6" />
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "We never store your encryption keys or have access to your data.",
      icon: <FiLock className="w-6 h-6" />
    },
    {
      title: "Biometric Authentication",
      description: "Secure access with fingerprint or face recognition for an extra layer of security.",
      icon: <FiUser className="w-6 h-6" />
    }
  ];

  return (
    <section id="security" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="cyber-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Security First</h2>
          <p className="text-xl text-gray-400">Your data is protected with enterprise-grade security</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="cyber-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4 text-cyan-400">
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

// AI Sync Section
export const AISyncSection = () => {
  const [activeAssistant, setActiveAssistant] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAssistant((prev) => (prev + 1) % aiAssistants.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ai-sync" className="py-20 relative overflow-hidden">
      <div className="cyber-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">AI-Powered Assistance</h2>
          <p className="text-xl text-gray-400">Your personal AI assistants that work across all your devices</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aiAssistants.map((assistant, index) => (
              <motion.div
                key={assistant.name}
                className={`cyber-card p-6 cursor-pointer transition-all duration-300 ${
                  activeAssistant === index ? 'border-l-4 border-cyan-500' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveAssistant(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: activeAssistant === index ? 1 : 0.7,
                  x: 0,
                  borderLeftWidth: activeAssistant === index ? '4px' : '0px'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full mr-3 bg-gradient-to-r ${assistant.color}`}></div>
                  <h3 className="text-xl font-semibold">{assistant.name}</h3>
                  <span className="ml-2 text-sm text-gray-400">• {assistant.role}</span>
                </div>
                <p className="text-gray-400">{assistant.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="cyber-card p-8 h-full flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full mr-3 bg-gradient-to-r ${
                  aiAssistants[activeAssistant].color
                }`}></div>
                <h3 className="text-xl font-semibold">
                  {aiAssistants[activeAssistant].name}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                {aiAssistants[activeAssistant].description}
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="font-mono text-sm text-cyan-400">
                  <p>$ dev.dat connect {aiAssistants[activeAssistant].name.toLowerCase()}</p>
                  <p className="text-green-400">✓ Connected to {aiAssistants[activeAssistant].name}</p>
                  <p className="mt-2">$ _</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Try these commands:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">optimize performance</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">schedule meeting</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">find documents</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section
export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="cyber-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Choose the plan that works best for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`cyber-card p-8 relative overflow-hidden ${
                plan.featured ? 'border-2 border-cyan-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-4 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.featured
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 pt-20 pb-12 relative overflow-hidden">
      <div className="cyber-bg"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">dev.dat</h3>
            <p className="text-gray-400">Your digital identity, everywhere.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaDiscord className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-cyan-400 transition-colors">How It Works</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-cyan-400 transition-colors">Security</a></li>
              <li><a href="#ai-sync" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Sync</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest updates and news</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} dev.dat. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
