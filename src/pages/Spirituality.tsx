import { useState, lazy, Suspense } from 'react';
import { FiBookOpen, FiDownload, FiHeart, FiExternalLink } from 'react-icons/fi';
import ParticleBackground from '../components/ParticleBackground';

// Lazy load components
const BhagwatamAnalysis = lazy(() => import('../components/BhagwatamAnalysis'));
const TelepathyTelekinesisAnalysis = lazy(() => import('../components/TelepathyTelekinesisAnalysis'));

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
  const [showBhagwatamPopup, setShowBhagwatamPopup] = useState(false);
  const [showTelepathyPopup, setShowTelepathyPopup] = useState(false);

  const handleReadNow = (pdfId: string) => {
    if (pdfId === '1') {
      setShowBhagwatamPopup(true);
    } else if (pdfId === '2') {
      setShowTelepathyPopup(true);
    } else {
      // Open other PDFs in a new tab
      window.open('#', '_blank');
    }
  };

  // Sample data
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
      title: 'Interactive Exploration: Telepathy & Telekinesis',
      description: 'A comprehensive analysis of telepathic and telekinetic phenomena through scientific and historical lenses',
      fileUrl: '#',
      thumbnail: 'https://www.verywellmind.com/thmb/0QnUeQzW9B3PbLpeFgox2T1Tj8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-telekinesis-4582442_final-5c7d6c3e4cedfd0001c2d6c7.png'
    },
    {
      id: '2',
      title: 'The Seven Spiritual Laws of Success',
      description: 'Practical guide to achieving your goals through spiritual principles',
      fileUrl: '/pdfs/seven-spiritual-laws.pdf',
      thumbnail: '/images/books/seven-laws.jpg'
    }
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
            BOOKS AND REPORTS
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
                          onClick={() => handleReadNow(pdf.id)}
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
      
      {/* Analysis Popups */}
{showBhagwatamPopup && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="text-white text-lg">Loading Analysis...</div>
        </div>}>
          <BhagwatamAnalysis onClose={() => setShowBhagwatamPopup(false)} />
        </Suspense>
      )}
      
      {showTelepathyPopup && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="text-white text-lg">Loading Analysis...</div>
        </div>}>
          <TelepathyTelekinesisAnalysis onClose={() => setShowTelepathyPopup(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default Spirituality;