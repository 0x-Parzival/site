import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCode, FiLayers, FiZap } from 'react-icons/fi';

// Header Component
const Header = () => (
  <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 border-b border-gray-800/50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <a href="/" className="font-mono text-cyan-400 text-xl font-bold flex items-center hover:opacity-80 transition-opacity">
        <span className="mr-2">⎔</span> Parzival
      </a>
      <nav className="hidden md:flex space-x-8">
        {['#experts', '#book-ai', '#book-human'].map((item) => (
          <a 
            key={item} 
            href={item} 
            className="text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-wider"
          >
            {item.replace('#', '')}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

// Hero Section
const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
      <div id="particles-js" className="absolute inset-0 z-0"></div>
    </div>
    
    <div className="relative z-10 text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        Connect with the Future
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Book a call with an AI or Human Expert. One call can change everything.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          Book AI Expert
        </button>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(192,132,252,0.5)]">
          Book Human Expert
        </button>
      </motion.div>
    </div>
  </section>
);

// Expert Type Selector
const ExpertTypeSelector = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const expertTypes = [
    {
      id: 'ai',
      title: '🤖 AI Experts',
      features: [
        'Available 24/7',
        'Trained on millions of datasets',
        'Code, strategy, design',
      ],
      icon: <FiZap className="text-4xl mb-4 text-cyan-400" />,
      buttonText: 'Choose AI Expert',
      gradient: 'from-cyan-500/10 to-cyan-900/20',
      borderColor: 'border-cyan-500/30',
      scrollTo: 'book-ai',
    },
    {
      id: 'human',
      title: '🧑‍💼 Human Experts',
      features: [
        'Niche domain expertise',
        'Human empathy, real-world hacks',
        'Mindset, growth, coaching',
      ],
      icon: <FiLayers className="text-4xl mb-4 text-purple-400" />,
      buttonText: 'Choose Human Expert',
      gradient: 'from-purple-500/10 to-purple-900/20',
      borderColor: 'border-purple-500/30',
      scrollTo: 'book-human',
    },
  ];
  
  const handleButtonClick = (tabId: string, scrollTo?: string) => {
    setActiveTab(tabId);
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 px-4 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Choose Your Expert Type
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the type of expertise that best matches your needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border ${type.borderColor} bg-gradient-to-br ${type.gradient} backdrop-blur-sm hover:shadow-lg transition-all relative z-10`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/30 mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{type.title}</h3>
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">▹</span>
                      <span className="text-gray-200 text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleButtonClick(type.id, type.scrollTo)}
                  className={`px-8 py-3 rounded-full font-medium transition-all text-white ${
                    type.id === 'ai' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)]'
                  } hover:scale-105 transform transition-transform duration-200`}
                >
                  {type.buttonText} <FiArrowRight className="inline ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// AI Expert Booking Form
const AIExpertForm = () => {
  const [query, setQuery] = useState('');
  const [duration, setDuration] = useState('30');
  const [expertType, setExpertType] = useState('developer');

  const expertTypes = [
    { id: 'developer', label: 'Developer Bot', icon: <FiCode /> },
    { id: 'designer', label: 'Design Advisor', icon: <FiLayers /> },
    { id: 'strategist', label: 'Strategy Synth', icon: <FiZap /> },
  ];

  return (
    <section id="book-ai" className="py-20 px-4 bg-gradient-to-b from-black/50 to-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Book an AI Expert
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Get instant help from our advanced AI experts, available 24/7 to answer your questions and provide guidance.
        </p>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Select AI Type</label>
              <div className="grid grid-cols-3 gap-4">
                {expertTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setExpertType(type.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${
                      expertType === type.id 
                        ? 'border-cyan-500 bg-cyan-500/10' 
                        : 'border-gray-700 hover:border-cyan-500/50'
                    }`}
                  >
                    <span className="text-2xl mb-2">{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Select Duration</label>
              <div className="grid grid-cols-3 gap-4">
                {['15', '30', '60'].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setDuration(mins)}
                    className={`flex items-center justify-center p-4 rounded-lg border transition-all ${
                      duration === mins 
                        ? 'border-cyan-500 bg-cyan-500/10' 
                        : 'border-gray-700 hover:border-cyan-500/50'
                    }`}
                  >
                    <FiClock className="mr-2" />
                    {mins} min
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="query" className="block text-sm font-medium text-gray-300 mb-2">
                What do you need help with?
              </label>
              <textarea
                id="query"
                rows={4}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Describe what you'd like to discuss..."
              />
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              Get a Live AI Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Human Experts Grid
const HumanExperts = () => {
  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Senior AI Researcher',
      expertise: ['Machine Learning', 'Computer Vision', 'Neural Networks'],
      rate: '$150/hr',
      available: true,
      image: '/images/experts/sarah.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Blockchain Architect',
      expertise: ['Solidity', 'Smart Contracts', 'DeFi'],
      rate: '$200/hr',
      available: true,
      image: '/images/experts/michael.jpg',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      title: 'UX/UI Designer',
      expertise: ['Figma', 'User Research', 'Product Design'],
      rate: '$120/hr',
      available: false,
      image: '/images/experts/emma.jpg',
    },
  ];

  return (
    <section id="book-human" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Book a Human Expert
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Connect with our network of experienced professionals for personalized guidance and mentorship.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <motion.div 
              key={expert.id}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full border-4 border-purple-500 overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(expert.name)}&background=7e22ce&color=fff&size=128`;
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-16 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold">{expert.name}</h3>
                <p className="text-purple-400 mb-4">{expert.title}</p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {expert.expertise.map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold">{expert.rate}</span>
                  <button 
                    disabled={!expert.available}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      expert.available
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {expert.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-black/30 backdrop-blur-lg border-t border-gray-800 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Parzival</h3>
          <p className="text-gray-400">Connecting you with the brightest minds in tech and beyond.</p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Privacy', 'Terms', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Join Us</h4>
          <ul className="space-y-2">
            {['Become an Expert', 'Careers', 'Partnerships'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>
          <div className="flex space-x-4">
            {['twitter', 'github', 'linkedin', 'discord'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label={platform}
              >
                <span className="sr-only">{platform}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg text-sm text-gray-400">
            <p>Type <span className="font-mono text-cyan-400">parzival</span> in the terminal for a surprise!</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Parzival. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main Component
const ExpertsTalk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <div className="relative z-20 bg-gradient-to-b from-transparent to-black/80">
          <div id="experts" className="relative pt-20 pb-32">
            <ExpertTypeSelector />
          </div>
          <div id="book-ai" className="relative py-20 bg-black/50">
            <AIExpertForm />
          </div>
          <div id="book-human" className="relative py-20 bg-gradient-to-b from-black/50 to-gray-900">
            <HumanExperts />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExpertsTalk;
