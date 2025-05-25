import { useState } from 'react';
import { FiDownload, FiBookOpen, FiHeart, FiExternalLink } from 'react-icons/fi';

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
  // Sample data - replace with your actual data
  const [pdfs] = useState<PDFItem[]>([
    {
      id: '1',
      title: 'The Power of Now',
      description: 'A guide to spiritual enlightenment by Eckhart Tolle',
      fileUrl: '/pdfs/power-of-now.pdf',
      thumbnail: '/images/books/power-of-now.jpg'
    },
    {
      id: '2',
      title: 'The Seven Spiritual Laws of Success',
      description: 'Practical guide to achieving your goals through spiritual principles',
      fileUrl: '/pdfs/seven-spiritual-laws.pdf',
      thumbnail: '/images/books/seven-laws.jpg'
    },
    // Add more PDFs as needed
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

  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00d9ff] to-[#ff00f7] sm:text-5xl md:text-6xl font-['Orbitron']">
            Spiritual Journey
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore spiritual wisdom, insightful blogs, and organizations making a difference.
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
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pdfs.map((pdf) => (
              <div key={pdf.id} className="bg-black/20 backdrop-blur-sm border border-[#00d9ff]/20 rounded-xl p-5 hover:border-[#ff00f7]/50 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#00d9ff] to-[#ff00f7] rounded-lg p-3">
                    <FiBookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 flex-1">
                    <h3 className="text-lg font-medium text-[#00d9ff]">{pdf.title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{pdf.description}</p>
                    <div className="mt-4">
                      <a
                        href={pdf.fileUrl}
                        download
                        className="inline-flex items-center text-sm font-medium text-[#ff00f7] hover:text-[#00d9ff] transition-colors duration-200"
                      >
                        <FiDownload className="mr-1.5 h-4 w-4" />
                        Download PDF
                      </a>
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
    </div>
  );
};

export default Spirituality;