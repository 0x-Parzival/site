import { useState, useEffect } from 'react';
import { FiX, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

interface BhagwatamAnalysisProps {
  onClose: () => void;
}

interface MiracleEvent {
  name: string;
  description: string;
  canto: string;
}

interface CosmologyFeature {
  id: string;
  title: string;
  puranicDescription: string;
  modernScience: string;
  interpretation: string;
}

const BhagwatamAnalysis: React.FC<BhagwatamAnalysisProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedCosmology, setSelectedCosmology] = useState<CosmologyFeature | null>(null);

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

  const miracles: MiracleEvent[] = [
    {
      name: "Krishna's birth with chains falling and doors opening",
      description: "Divine intervention signifying the arrival of the Supreme Being; overcoming material limitations.",
      canto: "10.3"
    },
    {
      name: "Krishna killing demons (Putana, Trinavarta, etc.) as a baby and child",
      description: "Triumph of good over evil; demonstration of divine power in protecting devotees; inner struggle against negative forces.",
      canto: "10.6-10.17"
    },
    {
      name: "Krishna lifting Govardhan Hill on his little finger",
      description: "Divine protection and refuge for devotees; power of devotion and surrender.",
      canto: "10.24-25"
    },
    {
      name: "Yashoda seeing the universe in Krishna's mouth",
      description: "Manifestation of Krishna's cosmic form; the entire universe contained within the divine.",
      canto: "10.8"
    },
    {
      name: "Liberation of Ajamila by chanting the Lord's name at the time of death",
      description: "Power of the divine name to purify and liberate from karmic bondage; divine grace and forgiveness.",
      canto: "6.1-3"
    }
  ];

  const cosmologyFeatures: CosmologyFeature[] = [
    {
      id: 'earth-shape',
      title: 'Shape of Earth',
      puranicDescription: 'Flat, disk-shaped (Bhu-mandala) with concentric islands and oceans',
      modernScience: 'Spherical (oblate spheroid)',
      interpretation: 'Interpretation as a polar projection map of a sphere; different levels of description.'
    },
    {
      id: 'universe-structure',
      title: 'Universe Structure',
      puranicDescription: 'Geocentric with Mount Meru as the central axis; vertical hierarchy of lokas (realms)',
      modernScience: 'Heliocentric solar system within a galaxy; no central axis or vertical hierarchy of realms',
      interpretation: 'Symbolic representation of different levels of consciousness or spiritual realms; theological framework rather than literal astronomy.'
    },
    {
      id: 'planetary-arrangement',
      title: 'Planetary Arrangement',
      puranicDescription: 'Planets orbit Bhu-mandala; specific distances and arrangements differ from modern astronomy',
      modernScience: 'Planets orbit the Sun at varying distances according to Kepler\'s laws',
      interpretation: 'Symbolic or different frame of reference; description of a different cosmic model.'
    },
    {
      id: 'time-scale',
      title: 'Scale of Time',
      puranicDescription: 'Vast cyclical periods (yugas, kalpas) with specific durations (millions/billions of years)',
      modernScience: 'Universe age estimated at 13.8 billion years; cyclical theories exist but with different scales',
      interpretation: 'Cyclical view of time resonates, but specific durations differ; theological significance of vast cosmic timescales.'
    }
  ];

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'overview', label: 'Overview' },
    { id: 'logical', label: 'Logical Aspects' },
    { id: 'illogical', label: 'Illogical Aspects' },
    { id: 'scholarly', label: 'Scholarly Views' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

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

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-blue-400/20">
          {tabs.map(tab => (
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
        <div className="flex-1 overflow-y-auto p-6">
          {/* Introduction Tab */}
          {activeTab === 'introduction' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">Welcome to the Interactive Analysis</h3>
              <div className="space-y-4 text-blue-100">
                <p>
                  The Bhagwatam Puran, also known as the Srimad Bhagavatam, stands as a central scripture within Vaishnavism and holds a significant position in Hindu sacred literature. Traditionally attributed to Veda Vyasa, this voluminous text comprises twelve books (cantos) containing approximately 18,000 verses.
                </p>
                <div className="p-4 bg-blue-800/30 rounded-lg border border-blue-400/20">
                  <h4 className="font-semibold text-blue-200 mb-2">About the Bhagwatam Puran</h4>
                  <p className="text-sm">
                    The text primarily promotes devotion (bhakti) towards Krishna, an avatar of Vishnu, while integrating various philosophical themes from different schools of Hindu thought. The Puran's importance stems from its comprehensive nature, encompassing a wide range of topics including cosmology, philosophy, ethics, and the life of Krishna, thereby serving as a rich source for understanding Vaishnavism.
                  </p>
                </div>
                <p>
                  This interactive analysis explores the Bhagwatam Puran through multiple lenses, examining its structure, teachings, and the interplay between its logical aspects and elements that may require faith-based interpretation.
                </p>
              </div>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">Overview & Context</h3>
              <p className="text-blue-100">
                The Bhagwatam Puran is a complex text with multiple layers of meaning. This section provides an overview of its structure, main narratives, and key philosophical concepts.
              </p>
              
              <div className="space-y-4">
                <div 
                  className="bg-blue-800/30 rounded-lg border border-blue-400/20 overflow-hidden"
                >
                  <button 
                    onClick={() => toggleSection('structure')}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-700/20 transition-colors"
                  >
                    <span className="font-medium text-blue-100">Structure of the Puran</span>
                    {expandedSections.structure ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedSections.structure && (
                    <div className="p-4 pt-0 border-t border-blue-400/20">
                      <p className="text-blue-100 text-sm">
                        The Bhagwatam Puran is structured into twelve cantos (skandhas), divided into 332-335 chapters with around 18,000 verses. The first nine skandhas focus on Vishnu and Bhakti Yoga, while the tenth and eleventh cantos center on Krishna's life and teachings. The twelfth canto discusses the future and the age of Kali.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 overflow-hidden">
                  <button 
                    onClick={() => toggleSection('narratives')}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-700/20 transition-colors"
                  >
                    <span className="font-medium text-blue-100">Main Narratives</span>
                    {expandedSections.narratives ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedSections.narratives && (
                    <div className="p-4 pt-0 border-t border-blue-400/20">
                      <p className="text-blue-100 text-sm">
                        The main narratives unfold through dialogues between sage Shukadeva Gosvami and King Parikshit. Key stories include the creation of the universe, tales of Vishnu's avatars (especially Krishna), and the lives of great devotees like Prahlada and Dhruva. The text weaves together mythology, philosophy, and theology into a comprehensive spiritual guide.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 overflow-hidden">
                  <button 
                    onClick={() => toggleSection('philosophy')}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-700/20 transition-colors"
                  >
                    <span className="font-medium text-blue-100">Philosophical Teachings</span>
                    {expandedSections.philosophy ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {expandedSections.philosophy && (
                    <div className="p-4 pt-0 border-t border-blue-400/20">
                      <ul className="list-disc pl-5 space-y-2 text-blue-100 text-sm">
                        <li><span className="font-medium">Bhakti Yoga:</span> The path of devotion as the primary means of spiritual realization</li>
                        <li><span className="font-medium">Dharma:</span> Righteous living and moral integrity</li>
                        <li><span className="font-medium">Karma and Reincarnation:</span> The cycle of action, reaction, and rebirth</li>
                        <li><span className="font-medium">Maya:</span> The illusory nature of material existence</li>
                        <li><span className="font-medium">Moksha:</span> Liberation from the cycle of birth and death</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Logical Aspects Tab */}
          {activeTab === 'logical' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">Logical Aspects</h3>
              <p className="text-blue-100">
                The Bhagwatam Puran contains numerous elements that align with logical reasoning and universal human values.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Ethical Teachings</h4>
                  <p className="text-blue-100 text-sm mb-3">
                    The text provides moral guidance that aligns with universal values such as compassion, justice, and social harmony. Stories like that of Prahlada illustrate the triumph of virtue over evil and the power of steadfast commitment to one's beliefs.
                  </p>
                </div>

                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Psychological Insights</h4>
                  <p className="text-blue-100 text-sm mb-3">
                    The Puran offers profound observations about human nature, emotions, and the pursuit of happiness. It promotes practices like mindfulness and meditation, which are now recognized in modern psychology for their benefits to mental health and emotional well-being.
                  </p>
                </div>

                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Philosophical Frameworks</h4>
                  <p className="text-blue-100 text-sm">
                    The text integrates concepts from various schools of Indian philosophy, including Vedanta, Samkhya, and Yoga. These philosophical systems provide logical frameworks for understanding consciousness, the self, and ultimate reality.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Illogical Aspects Tab */}
          {activeTab === 'illogical' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">Potentially Illogical Aspects</h3>
              <p className="text-blue-100">
                From a modern scientific perspective, certain elements of the Bhagwatam Puran may appear illogical or require faith-based acceptance.
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-3">Miraculous Events</h4>
                  <div className="space-y-3">
                    {miracles.map((miracle, index) => (
                      <div key={index} className="bg-blue-800/20 rounded-lg border border-blue-400/20 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-blue-100">{miracle.name}</h5>
                            <p className="text-blue-200 text-sm mt-1">Canto: {miracle.canto}</p>
                          </div>
                        </div>
                        <p className="text-blue-100 text-sm mt-2">{miracle.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-3">Cosmological Descriptions</h4>
                  <p className="text-blue-100 text-sm mb-4">
                    The Puran's cosmological model differs significantly from modern scientific understanding. Below is a comparison of key features:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cosmologyFeatures.map((feature) => (
                      <div 
                        key={feature.id}
                        onClick={() => setSelectedCosmology(feature)}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedCosmology?.id === feature.id 
                            ? 'bg-blue-700/30 border-blue-400' 
                            : 'bg-blue-800/20 border-blue-400/20 hover:bg-blue-800/30'
                        }`}
                      >
                        <h5 className="font-medium text-blue-100">{feature.title}</h5>
                      </div>
                    ))}
                  </div>

                  {selectedCosmology && (
                    <div className="mt-6 bg-blue-800/20 rounded-lg border border-blue-400/20 p-4">
                      <h5 className="font-semibold text-blue-200 mb-3">{selectedCosmology.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h6 className="font-medium text-blue-200 mb-1">Puranic Description:</h6>
                          <p className="text-blue-100">{selectedCosmology.puranicDescription}</p>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-200 mb-1">Modern Science:</h6>
                          <p className="text-blue-100">{selectedCosmology.modernScience}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-400/20">
                        <h6 className="font-medium text-blue-200 mb-1">Interpretation:</h6>
                        <p className="text-blue-100 text-sm">{selectedCosmology.interpretation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Scholarly Views Tab */}
          {activeTab === 'scholarly' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">Scholarly Interpretations</h3>
              <p className="text-blue-100">
                Scholars approach the Bhagwatam Puran through various interpretive frameworks to understand its deeper meanings.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Symbolism and Allegory</h4>
                  <p className="text-blue-100 text-sm">
                    Many scholars view the Puran's narratives as containing deeper symbolic meanings. For example, Krishna's interactions with the gopis are often interpreted as representing the soul's longing for union with the divine, while his battles with demons symbolize the inner struggle against negative tendencies.
                  </p>
                </div>

                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Levels of Interpretation</h4>
                  <p className="text-blue-100 text-sm">
                    The text accommodates multiple levels of understanding, from literal readings of the narratives to sophisticated philosophical interpretations. This multivalent approach allows the Puran to speak to audiences with different levels of spiritual and intellectual development.
                  </p>
                </div>

                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Historical Context</h4>
                  <p className="text-blue-100 text-sm">
                    Modern scholarship places the composition of the Bhagwatam Puran between 500-1000 CE, with strong influences from South Indian Bhakti traditions. Understanding this historical context helps in appreciating how the text both reflected and shaped the religious landscape of its time.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Conclusion Tab */}
          {activeTab === 'conclusion' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">Conclusion</h3>
              
              <div className="space-y-4 text-blue-100">
                <p>
                  The Bhagwatam Puran presents a rich tapestry of narratives, philosophical teachings, and cosmological descriptions that have inspired devotees and scholars for centuries. Our analysis reveals a text that operates on multiple levels, containing elements that resonate with logical reasoning alongside aspects that require faith-based acceptance.
                </p>
                
                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">Key Insights</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The text's ethical teachings and psychological insights demonstrate a profound understanding of human nature and social dynamics.</li>
                    <li>Its philosophical frameworks provide systematic approaches to understanding consciousness and ultimate reality.</li>
                    <li>Miraculous events and cosmological descriptions may be interpreted symbolically or as products of their historical context.</li>
                    <li>The text's multivalent nature allows for various levels of interpretation, from literal to allegorical.</li>
                  </ul>
                </div>
                
                <p>
                  Approaching the Bhagwatam Puran requires balancing respect for its spiritual significance with critical engagement with its content. Whether viewed as divine revelation, philosophical treatise, or cultural artifact, the text continues to offer valuable insights into the human condition and the search for ultimate meaning.
                </p>
                
                <div className="bg-blue-800/30 rounded-lg border border-blue-400/20 p-4 mt-6">
                  <h4 className="font-semibold text-blue-200 mb-2">Further Reading</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-blue-300 hover:text-blue-100 flex items-center">
                        <span>Bhagavata Purana (Complete Translation)</span>
                        <FiExternalLink className="ml-1" size={14} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-300 hover:text-blue-100 flex items-center">
                        <span>Scholarly Studies on the Bhagavatam</span>
                        <FiExternalLink className="ml-1" size={14} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-300 hover:text-blue-100 flex items-center">
                        <span>Philosophical Commentaries</span>
                        <FiExternalLink className="ml-1" size={14} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-blue-400/20 text-center text-sm text-blue-300">
          Interactive Analysis of the Bhagwatam Puran • Use tabs to navigate different sections
        </div>
      </div>
    </div>
  );
};

export default BhagwatamAnalysis;
