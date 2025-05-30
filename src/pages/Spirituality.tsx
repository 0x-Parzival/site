import { useState, useRef, useEffect } from 'react';
import { FiBookOpen, FiX, FiDownload, FiHeart, FiExternalLink } from 'react-icons/fi';
import ParticleBackground from '../components/ParticleBackground';

interface PDFItem {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  thumbnail: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

interface NGO {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  focus: string[];
}

const Spirituality = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [showInteractive, setShowInteractive] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'resources', label: 'Resources' },
  ];
  
  const interactiveElements = [
    { 
      id: 'timeline', 
      title: 'Timeline', 
      subtitle: 'Historical context',
      content: 'Explore the chronological events and historical periods covered in the Bhagavad Puran.'
    },
    { 
      id: 'characters', 
      title: 'Characters', 
      subtitle: 'Key figures',
      content: 'Learn about the main deities, sages, and personalities featured in the text.'
    },
    { 
      id: 'themes', 
      title: 'Themes', 
      subtitle: 'Major concepts',
      content: 'Discover the central philosophical and spiritual themes of the Bhagavad Puran.'
    },
    { 
      id: 'maps', 
      title: 'Maps', 
      subtitle: 'Sacred geography',
      content: 'View the sacred places and pilgrimage sites mentioned in the text.'
    }
  ];
  
  const handleInteractiveClick = (elementId: string) => {
    setActiveResource(elementId);
    setShowInteractive(true);
  };
  
  const closeInteractive = () => {
    setShowInteractive(false);
    // Small delay to allow the animation to complete
    setTimeout(() => setActiveResource(null), 300);
  };

  // Sample data - replace with your actual data
  const [pdfs] = useState<PDFItem[]>([
    {
      id: '1',
      title: 'Analysis of Logical and Illogical Aspects in the Bhagwatam Puran',
      description: 'An interactive exploration of the Bhagwatam Puran through analytical and spiritual lenses',
      fileUrl: '#',
      thumbnail: 'https://astrotalk.com/astrology-blog/wp-content/uploads/2020/07/main-qimg-8009d816c05d0551887f4454cc07c601.png'
    },
    {
      id: '2',
      title: 'The Seven Spiritual Laws of Success',
      description: 'Practical guide to achieving your goals through spiritual principles',
      fileUrl: '/pdfs/seven-spiritual-laws.pdf',
      thumbnail: '/images/books/seven-laws.jpg'
    },
  ]);

  const [blogs] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Finding Inner Peace in a Chaotic World',
      excerpt: 'Exploring mindfulness techniques to maintain calm in daily life...',
      date: 'May 15, 2024',
      readTime: '5 min read',
      image: '/images/blog/inner-peace.jpg'
    },
    {
      id: '2',
      title: 'The Journey of Self-Discovery',
      excerpt: 'Understanding your true self through spiritual practices...',
      date: 'April 28, 2024',
      readTime: '7 min read',
      image: '/images/blog/self-discovery.jpg'
    },
    // Add more blog posts as needed
  ]);

  const [ngos] = useState<NGO[]>([
    {
      id: '1',
      name: 'Spiritual Education Foundation',
      description: 'Dedicated to providing spiritual education and resources to communities in need.',
      website: 'https://example.org',
      logo: '/images/ngos/sef-logo.png',
      focus: ['Education', 'Meditation', 'Community']
    },
    {
      id: '2',
      name: 'Compassion in Action',
      description: 'Helping underprivileged communities through spiritual and material support.',
      website: 'https://example.org',
      logo: '/images/ngos/cia-logo.png',
      focus: ['Humanitarian Aid', 'Community Development']
    },
    // Add more NGOs as needed
  ]);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add glow effect to text
  const glowText = {
    textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff',
  };

  // Add glow effect to borders
  const glowBorder = {
    boxShadow: '0 0 15px rgba(0, 217, 255, 0.5)',
    border: '1px solid rgba(0, 217, 255, 0.3)',
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Particle Background */}
      <div className="fixed inset-0 -z-10">
        <ParticleBackground opacity={0.5} />
      </div>
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00d9ff] to-[#ff00f7] sm:text-5xl md:text-6xl font-['Orbitron'] tracking-wider" style={glowText}>
            SPIRITUAL EXPLORATIONS
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-light tracking-wider">
            Journey through ancient wisdom with a modern analytical perspective
          </p>
        </div>

        {/* PDF Downloads Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <FiDownload className="mr-2 text-indigo-600" />
              Spiritual Resources
            </h2>
          </div>
          <div className="mt-6 grid gap-6">
            {pdfs.map((pdf) => (
              <div 
                key={pdf.id} 
                className="relative bg-black/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] overflow-hidden group"
                style={{
                  ...glowBorder,
                  zIndex: 10,
                  position: 'relative',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff10] to-[#ff00f710] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-1/4">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={pdf.thumbnail} 
                        alt={pdf.title}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#00d9ff] tracking-wide">{pdf.title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{pdf.description}</p>
                    <div className="mt-4">
                      <button
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center text-sm font-medium text-[#ff00f7] hover:text-[#00d9ff] transition-all duration-200 group-hover:tracking-wider"
                      >
                        <span className="relative">
                          <span className="absolute -inset-0.5 bg-gradient-to-r from-[#ff00f7] to-[#00d9ff] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></span>
                          <span className="relative px-4 py-1.5 bg-black/80 rounded-lg flex items-center">
                            <FiBookOpen className="mr-1.5 h-4 w-4" />
                            Read Now
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <div className="h-10 w-1 bg-gradient-to-b from-[#00d9ff] to-[#ff00f7] rounded-r"></div>
            <h2 className="text-2xl font-bold text-[#00d9ff] ml-3 font-['Orbitron']">
              Latest Blog Posts
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-black/20 backdrop-blur-sm border border-[#00d9ff]/20 rounded-xl overflow-hidden hover:border-[#ff00f7]/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[#00d9ff]/20 to-[#ff00f7]/20 flex items-center justify-center">
                  <FiHeart className="h-16 w-16 text-[#ff00f7] opacity-70" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{blog.date}</span>
                    <span className="mx-2 text-[#00d9ff]">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#00d9ff] mb-3">{blog.title}</h3>
                  <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                  <a
                    href="#"
                    className="text-[#ff00f7] hover:text-[#00d9ff] font-medium transition-colors duration-200 inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NGOs Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <FiHeart className="mr-2 text-red-600" />
            Supporting Organizations
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ngos.map((ngo) => (
              <div key={ngo.id} className="bg-black/20 backdrop-blur-sm border border-[#00d9ff]/20 rounded-xl p-5 hover:border-[#ff00f7]/50 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#00ff88] to-[#00d9ff] rounded-lg p-3">
                    <FiExternalLink className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 flex-1">
                    <h3 className="text-lg font-medium text-[#00d9ff]">{ngo.name}</h3>
                    <p className="mt-1 text-sm text-gray-300">{ngo.description}</p>
                    <div className="mt-2">
                      <a
                        href={ngo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#00ff88] hover:text-[#00d9ff] transition-colors duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ngo.focus.map((focus, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for Interactive Content */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto">
          <div 
            ref={modalRef}
            className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900/95 rounded-xl border border-[#00d9ff]/30 overflow-y-auto p-8"
            style={{
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
              zIndex: 1000,
            }}
          >
            <h2 className="text-3xl font-bold text-center text-[#00d9ff] mb-6">Bhagwatam Puran Analysis</h2>
            <div className="border-b border-gray-700 mb-6">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-[#00d9ff] text-[#00d9ff]'
                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="prose prose-invert max-w-none">
              {activeTab === 'overview' && (
                <>
                  <p className="text-gray-300 mb-4">
                    The Bhagwatam Puran is one of the most important texts in the Vaishnava tradition, 
                    consisting of 18,000 verses across 12 cantos. This interactive analysis explores both 
                    the logical philosophical frameworks and the mystical elements of the text.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#00d9ff] mt-8 mb-4">Key Features</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Comprehensive analysis of all 12 cantos</li>
                    <li>Interactive charts and visualizations</li>
                    <li>Detailed exploration of philosophical concepts</li>
                    <li>Comparison with modern scientific understanding</li>
                  </ul>
                </>
              )}
              
              {activeTab === 'analysis' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#00d9ff] mb-4">Textual Analysis</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-black/30 rounded-lg border border-[#00d9ff]/20">
                      <h4 className="font-semibold text-[#00d9ff] mb-2">Logical Aspects</h4>
                      <p className="text-gray-300 text-sm">
                        The text presents a coherent philosophical system that aligns with Vedic thought,
                        particularly in its exploration of metaphysics, ethics, and the nature of reality.
                      </p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg border border-[#00d9ff]/20">
                      <h4 className="font-semibold text-[#00d9ff] mb-2">Mystical Elements</h4>
                      <p className="text-gray-300 text-sm">
                        The text contains numerous accounts of supernatural events and miracles that
                        challenge modern empirical understanding but hold deep symbolic meaning.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'resources' && (
                <div>
                  <h3 className="text-xl font-semibold text-[#00d9ff] mb-4">Additional Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-[#00d9ff] hover:underline">
                        Complete Text (Sanskrit with English Translation)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#00d9ff] hover:underline">
                        Commentary by Srila Prabhupada
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#00d9ff] hover:underline">
                        Academic Papers on Bhagavatam Studies
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              
              <div className="mt-8 p-6 bg-black/30 rounded-lg border border-[#00d9ff]/20 relative">
                <h4 className="text-lg font-semibold text-[#00d9ff] mb-3">Interactive Elements</h4>
                <p className="text-gray-300 mb-4">
                  Click on the elements below to explore more details and interactive content.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {interactiveElements.map((element) => (
                    <button
                      key={element.id}
                      onClick={() => handleInteractiveClick(element.id)}
                      className="p-3 bg-black/40 rounded border border-[#00d9ff]/10 hover:border-[#00d9ff]/50 transition-all duration-200 hover:bg-black/60 text-left"
                    >
                      <h5 className="text-[#00d9ff] text-sm font-medium">{element.title}</h5>
                      <p className="text-xs text-gray-400">{element.subtitle}</p>
                    </button>
                  ))}
                </div>
                
                {/* Interactive Content Overlay */}
                <div 
                  className={`absolute inset-0 bg-black/90 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 flex flex-col ${
                    showInteractive ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {activeResource && (
                    <>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-[#00d9ff]">
                          {interactiveElements.find(e => e.id === activeResource)?.title}
                        </h3>
                        <button 
                          onClick={closeInteractive}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FiX className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-gray-300 mb-4">
                          {interactiveElements.find(e => e.id === activeResource)?.content}
                        </p>
                        {/* Add more detailed content here based on the activeResource */}
                      </div>
                      <div className="mt-4 flex justify-end space-x-3">
                        <button 
                          onClick={closeInteractive}
                          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                          Close
                        </button>
                        <button 
                          onClick={() => {
                            closeInteractive();
                            setActiveTab('resources');
                          }}
                          className="px-4 py-2 text-sm font-medium text-[#00d9ff] hover:text-white bg-[#00d9ff]/10 hover:bg-[#00d9ff]/20 rounded-md transition-colors"
                        >
                          Explore More
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-50 text-gray-300 hover:text-white transition-colors"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spirituality;