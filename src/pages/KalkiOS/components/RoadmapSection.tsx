import React from 'react';

const milestones = [
  {
    id: 1,
    title: 'Concept & Research',
    date: 'Q1 2023',
    description: 'Initial research and concept development for KalkiOS',
    status: 'completed',
    icon: '🔍',
  },
  {
    id: 2,
    title: 'Kernel Development',
    date: 'Q2 2023',
    description: 'Core kernel architecture and system components',
    status: 'completed',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Alpha Release',
    date: 'Q3 2023',
    description: 'First alpha release with basic functionality',
    status: 'completed',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'Beta Testing',
    date: 'Q4 2023',
    description: 'Expanded feature set and public beta testing',
    status: 'current',
    icon: '🧪',
  },
  {
    id: 5,
    title: 'RC 1.0',
    date: 'Q1 2024',
    description: 'Release candidate with full feature set',
    status: 'upcoming',
    icon: '🔜',
  },
  {
    id: 6,
    title: 'Official Launch',
    date: 'Q2 2024',
    description: 'Stable 1.0 release',
    status: 'upcoming',
    icon: '🎉',
  },
];

const RoadmapSection: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 border-green-500/50';
      case 'current':
        return 'bg-cyan-500/20 border-cyan-500/50';
      case 'upcoming':
        return 'bg-gray-800/50 border-gray-700';
      default:
        return 'bg-gray-800/50 border-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'current':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {' '}Roadmap
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our journey to redefine the operating system experience.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-transparent -translate-x-1/2" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative pl-8 pr-8 sm:pl-0 sm:pr-0 sm:flex">
                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'}`}>
                  <div className={`p-6 rounded-xl border ${getStatusColor(milestone.status)} backdrop-blur-sm`}>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{milestone.icon}</span>
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      <span className="ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-500/30">
                        {getStatusText(milestone.status)}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{milestone.description}</p>
                    <div className="text-sm text-cyan-400 font-mono">{milestone.date}</div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 border-4 border-gray-900">
                  <span className="text-lg">{milestone.icon}</span>
                </div>
                
                {/* Mobile dot */}
                <div className="sm:hidden absolute left-0 top-6 -ml-3 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-gray-900 flex items-center justify-center">
                  <span className="text-xs">{milestone.icon}</span>
                </div>
                
                {/* Empty div for spacing on alternating sides */}
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Want to contribute to the future of KalkiOS?
          </p>
          <a
            href="https://github.com/yourusername/kalki-os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.48C19.138 20.19 22 16.428 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
