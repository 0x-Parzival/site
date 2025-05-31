import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface TelepathyTelekinesisAnalysisProps {
  onClose: () => void;
}

export default function TelepathyTelekinesisAnalysis({ onClose }: TelepathyTelekinesisAnalysisProps) {
  const [activeTab, setActiveTab] = useState('introduction');
  const [activeSubTab, setActiveSubTab] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'introduction':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Welcome to the Exploration</h2>
            <p className="text-lg">
              This interactive application provides a comprehensive overview of telepathy and telekinesis, 
              drawing from detailed research. Our goal is to help you explore and understand these fascinating, 
              albeit controversial, topics from multiple perspectives.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-indigo-200 p-4 rounded-lg bg-indigo-50">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">What is Telepathy?</h3>
                <p>Telepathy is defined as the alleged transmission of information from one person's mind to another 
                without the use of any known human sensory channels or physical interaction.</p>
              </div>
              <div className="border border-teal-200 p-4 rounded-lg bg-teal-50">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">What is Telekinesis?</h3>
                <p>Telekinesis (or psychokinesis) is the purported psychic ability to influence a physical system 
                without physical interaction.</p>
              </div>
            </div>
          </div>
        );
      
      case 'phenomena':
        return (
          <div>
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'history' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('history')}
              >
                History
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'vedic' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('vedic')}
              >
                Vedic Wisdom
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'methods' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('methods')}
              >
                Alleged Methods
              </button>
            </div>
            
            {renderPhenomenaContent()}
          </div>
        );
      
      case 'science':
        return (
          <div>
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'inquiry' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('inquiry')}
              >
                Scientific Inquiry
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'skepticism' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('skepticism')}
              >
                Critical Perspectives
              </button>
            </div>
            
            {renderScienceContent()}
          </div>
        );
      
      case 'hub':
        return (
          <div>
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'resources' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('resources')}
              >
                Key Resources
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'theories' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('theories')}
              >
                Theories
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeSubTab === 'compendium' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSubTab('compendium')}
              >
                Resource Compendium
              </button>
            </div>
            
            {renderHubContent()}
          </div>
        );
      
      default:
        return null;
    }
  };

  // Helper functions for each tab's content
  const renderPhenomenaContent = () => {
    switch (activeSubTab) {
      case 'history':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Telepathy in History</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ancient Egypt & Greece: Dreams as conduits for messages</li>
                <li>Indigenous Cultures: Preserved knowledge akin to telepathy</li>
                <li>Early Christian Era: St. Augustine documented accounts of knowing others' thoughts</li>
                <li>19th Century West: Rise of "thought reading" entertainment</li>
                <li>Japanese Culture: "Ishin-denshin" - tacit understanding</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Telekinesis in History</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mahabharata: Shakuni telekinetically manipulating dice</li>
                <li>Religious Accounts: Interpretations of miracles</li>
                <li>Arthurian Legend: Merlin's telekinetic feats</li>
                <li>19th Century Spiritualism: Mediums claiming to move objects</li>
                <li>20th Century: Uri Geller's spoon bending</li>
              </ul>
            </div>
          </div>
        );
      
      // Add other cases for Vedic Wisdom and Alleged Methods
      
      default:
        return (
          <div className="text-center py-8 text-gray-500">
            Select a category to view content
          </div>
        );
    }
  };

  const renderScienceContent = () => {
    // Similar structure to renderPhenomenaContent but for science tab
    return null;
  };

  const renderHubContent = () => {
    // Similar structure to renderPhenomenaContent but for hub tab
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <motion.div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 p-6 pb-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-700">
              Telepathy & Telekinesis: An Interactive Exploration
            </h1>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <FiX size={28} />
            </button>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-1 overflow-x-auto pb-1">
            {['introduction', 'phenomena', 'science', 'hub'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-t-lg font-medium capitalize transition-colors ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-blue-50'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'introduction' ? 'Introduction' : tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 pt-4">
          <AnimatePresence>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
