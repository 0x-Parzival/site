import React, { useState, useEffect } from 'react';
import { FiX, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

interface TelepathyTelekinesisExplorerProps {
  onClose: () => void;
}

const TelepathyTelekinesisExplorer: React.FC<TelepathyTelekinesisExplorerProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedConcept, setSelectedConcept] = useState<any>(null);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'scientific', label: 'Scientific Research' },
    { id: 'techniques', label: 'Techniques' },
    { id: 'history', label: 'Historical Accounts' },
    { id: 'resources', label: 'Resources' }
  ];
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl h-[90vh] overflow-hidden rounded-2xl border-2 border-blue-400/50 bg-blue-900/20 backdrop-blur-lg shadow-xl shadow-blue-500/20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-blue-400/30 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-100">Telepathy & Telekinesis Explorer</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-400/20 transition-colors text-blue-200 hover:text-white"
            aria-label="Close"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-blue-400/20 bg-blue-900/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-100 border-b-2 border-blue-400'
                  : 'text-blue-300 hover:text-blue-100 hover:bg-blue-800/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction Tab */}
          {activeTab === 'introduction' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-200 mb-6">Understanding Telepathy & Telekinesis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-800/30 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                  <h4 className="text-lg font-semibold text-blue-200 mb-3">Telepathy</h4>
                  <p className="text-blue-100 text-sm">
                    The direct transmission of thoughts, feelings, or mental states between individuals without using any known human sensory channels or physical interaction.
                  </p>
                </div>
                <div className="bg-blue-800/30 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                  <h4 className="text-lg font-semibold text-blue-200 mb-3">Telekinesis</h4>
                  <p className="text-blue-100 text-sm">
                    The ability to move or manipulate objects at a distance by mental power or other non-physical means, without direct physical interaction.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-800/20 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                <h4 className="text-lg font-semibold text-blue-200 mb-3">Key Distinctions</h4>
                <ul className="space-y-3 text-blue-100 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Telepathy involves mind-to-mind communication, while telekinesis involves mind-to-matter interaction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>Both phenomena challenge conventional scientific understanding of space, time, and consciousness.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>They appear in various cultural, spiritual, and scientific contexts throughout history.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Other tabs content... */}
          {activeTab === 'scientific' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-200 mb-6">Scientific Research</h3>
              <div className="bg-blue-800/20 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                <p className="text-blue-100 text-sm">
                  Scientific research on telepathy and telekinesis remains controversial, with studies showing mixed results. 
                  Some parapsychology research suggests possible evidence for these phenomena, while mainstream science 
                  remains skeptical due to lack of reproducible results under controlled conditions.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'techniques' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-200 mb-6">Development Techniques</h3>
              <div className="bg-blue-800/20 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                <p className="text-blue-100 text-sm">
                  Various techniques have been proposed to develop telepathic and telekinetic abilities, including 
                  meditation, visualization exercises, and mental focus training. However, the effectiveness of these 
                  methods remains scientifically unverified.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'history' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-200 mb-6">Historical Accounts</h3>
              <div className="bg-blue-800/20 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                <p className="text-blue-100 text-sm">
                  Reports of telepathic and telekinetic phenomena appear throughout history in various cultures. 
                  Many spiritual traditions include stories of individuals with extraordinary mental abilities, 
                  though these accounts are often intertwined with mythology and religious narratives.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-200 mb-6">Further Resources</h3>
              <div className="bg-blue-800/20 rounded-lg p-5 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                <p className="text-blue-100 text-sm">
                  For those interested in exploring these topics further, consider these resources:
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center text-blue-300">
                    <span className="text-blue-400 mr-2">•</span>
                    <a href="#" className="hover:text-blue-100 transition-colors">Books on Parapsychology</a>
                  </li>
                  <li className="flex items-center text-blue-300">
                    <span className="text-blue-400 mr-2">•</span>
                    <a href="#" className="hover:text-blue-100 transition-colors">Scientific Studies on Psi Phenomena</a>
                  </li>
                  <li className="flex items-center text-blue-300">
                    <span className="text-blue-400 mr-2">•</span>
                    <a href="#" className="hover:text-blue-100 transition-colors">Meditation and Mental Training Guides</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-sm text-center border-t border-blue-400/20 text-blue-300">
          Interactive Exploration of Telepathy & Telekinesis • Use tabs to navigate different sections
        </div>
      </div>
    </div>
  );
};

export default TelepathyTelekinesisExplorer;
