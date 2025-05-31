import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function BhagwatamPopup({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('introduction');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Initialize all sections as closed
  useEffect(() => {
    setOpenSections({
      'structure': false,
      'narratives': false,
      'characters': false,
      'teachings': false,
      'context': false,
    });
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl h-[90vh] overflow-hidden rounded-2xl border-2 border-blue-400/50 bg-blue-900/20 backdrop-blur-lg text-white shadow-xl shadow-blue-500/20 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-blue-400/30 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-100">Interactive Bhagwatam Puran Analysis</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-400/20 transition-colors text-blue-200 hover:text-white"
            aria-label="Close"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-green-400/20 bg-green-900/30">
          {['introduction', 'overview', 'logical', 'illogical', 'scholarly', 'conclusion'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab 
                  ? 'text-blue-100 border-b-2 border-blue-400' 
                  : 'text-blue-300 hover:text-blue-100 hover:bg-blue-800/30'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto">
            {activeTab === 'introduction' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-200 mb-4">Welcome to the Interactive Analysis</h3>
                <div className="space-y-4 text-blue-100">
                  <p>
                    This interactive analysis explores the Bhagwatam Puran, a cornerstone of Vaishnavism, through a modern analytical lens. 
                    Navigate through the tabs to discover its structure, key teachings, and insights into its logical and philosophical dimensions.
                  </p>
                  <div className="p-4 bg-blue-800/30 rounded-lg border border-blue-400/20">
                    <h4 className="font-semibold text-blue-200 mb-2">About the Bhagwatam Puran</h4>
                    <p className="text-sm">
                      Also known as the Srimad Bhagavatam, this text is a central scripture in Vaishnavism, comprising twelve cantos with approximately 18,000 verses. 
                      It primarily promotes devotion (bhakti) towards Krishna while integrating various philosophical themes from different schools of Hindu thought.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-200 mb-4">Overview & Context</h3>
                <div className="space-y-4">
                  <div 
                    className="bg-blue-800/30 rounded-lg border border-blue-400/20 overflow-hidden"
                  >
                    <button 
                      onClick={() => toggleSection('structure')}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-700/20 transition-colors"
                    >
                      <span className="font-medium text-blue-100">Structure of the Puran</span>
                      <span className="text-blue-300">{openSections.structure ? '▲' : '▼'}</span>
                    </button>
                    {openSections.structure && (
                      <div className="p-4 pt-0 border-t border-blue-400/20">
                        <p className="text-blue-100 text-sm">
                          The Bhagwatam Puran is structured into twelve cantos (skandhas), divided into 332-335 chapters with around 18,000 verses. 
                          The tenth canto, detailing Krishna's life, is particularly significant and widely studied.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Other sections follow the same pattern */}
                  {['narratives', 'characters', 'teachings', 'context'].map((section) => (
                    <div key={section} className="bg-blue-800/30 rounded-lg border border-blue-400/20 overflow-hidden">
                      <button 
                        onClick={() => toggleSection(section)}
                        className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-700/20 transition-colors"
                      >
                        <span className="font-medium text-blue-100">
                          {section === 'narratives' && 'Main Narratives'}
                          {section === 'characters' && 'Key Characters'}
                          {section === 'teachings' && 'Philosophical Teachings'}
                          {section === 'context' && 'Historical Context'}
                        </span>
                        <span className="text-blue-300">{openSections[section] ? '▲' : '▼'}</span>
                      </button>
                      {openSections[section] && (
                        <div className="p-4 pt-0 border-t border-blue-400/20">
                          <p className="text-blue-100 text-sm">
                            {section === 'narratives' && 'The Puran unfolds through dialogues between sage Shukadeva and King Parikshit, featuring stories of Vishnu\'s avatars and Krishna\'s divine pastimes.'}
                            {section === 'characters' && 'Key figures include Krishna (the supreme personality), King Parikshit (the seeker), Shukadeva (the enlightened sage), and various devotees like Prahlada and Dhruva.'}
                            {section === 'teachings' && 'Core teachings include Bhakti Yoga (path of devotion), concepts of Dharma (righteousness), Karma (action), and the nature of the self (Atman) and ultimate reality (Brahman).'}
                            {section === 'context' && 'Composed between 500-1000 CE, with strong influences from South Indian Bhakti traditions, particularly the Alvar saints, reflecting the cultural and religious milieu of its time.'}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional tabs content can be added following the same pattern */}
            {['logical', 'illogical', 'scholarly', 'conclusion'].map((tab) => (
              activeTab === tab && (
                <div key={tab} className="p-4 bg-blue-800/20 rounded-lg border border-blue-400/20">
                  <h3 className="text-lg font-semibold text-blue-200 mb-3">
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Content
                  </h3>
                  <p className="text-blue-100 text-sm">
                    This section would contain detailed analysis of {tab} aspects of the Bhagwatam Puran, 
                    including key concepts, interpretations, and scholarly perspectives.
                  </p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-blue-400/20 text-center text-sm text-blue-300">
          Interactive Analysis of the Bhagwatam Puran • Use tabs to navigate different sections
        </div>
      </div>
    </div>
  );
}
