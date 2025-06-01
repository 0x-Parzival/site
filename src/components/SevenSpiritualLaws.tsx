import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';

interface SevenSpiritualLawsProps {
  onClose: () => void;
}

const SevenSpiritualLaws: React.FC<SevenSpiritualLawsProps> = ({ onClose }) => {
  const laws = [
    {
      title: 'The Law of Pure Potentiality',
      description: 'Our essential nature is pure consciousness, the infinite source of everything that exists in the physical world. When we discover our essential nature, we align with the power that manifests everything in the universe.'
    },
    {
      title: 'The Law of Giving and Receiving',
      description: 'The universe operates through dynamic exchange. Giving and receiving are different aspects of the flow of energy in the universe. In our willingness to give that which we seek, we keep the abundance of the universe circulating in our lives.'
    },
    {
      title: 'The Law of Karma (Cause and Effect)',
      description: 'Every action generates a force of energy that returns to us in like kind. When we choose actions that bring happiness and success to others, the fruit of our karma is happiness and success.'
    },
    {
      title: 'The Law of Least Effort',
      description: 'Nature\'s intelligence functions with effortless ease. When we harness the forces of harmony, joy, and love, we create success and good fortune with effortless ease.'
    },
    {
      title: 'The Law of Intention and Desire',
      description: 'Inherent in every intention and desire is the mechanics for its fulfillment. When we become quiet and introduce our intentions into the womb of creation, we harness the universe\'s infinite organizing power.'
    },
    {
      title: 'The Law of Detachment',
      description: 'In detachment lies the wisdom of uncertainty. In the wisdom of uncertainty lies the freedom from our past, from the known, which is the prison of past conditioning.'
    },
    {
      title: 'The Law of Dharma (Purpose in Life)',
      description: 'Everyone has a purpose in life. When we blend our unique talent with service to others, we experience the ecstasy and exultation of our own spirit, which is the ultimate goal of all goals.'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-indigo-500/30"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 backdrop-blur-sm p-6 rounded-t-xl border-b border-indigo-500/30 z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                The Seven Spiritual Laws of Success
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>
            </div>
            <p className="mt-2 text-indigo-200">
              Based on the book by Deepak Chopra - A practical guide to achieving your goals through spiritual principles
            </p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Introduction */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-indigo-500/20">
              <h3 className="text-xl font-semibold text-indigo-200 mb-3">Introduction</h3>
              <p className="text-gray-300 leading-relaxed">
                The Seven Spiritual Laws of Success by Deepak Chopra presents a spiritual approach to achieving success. Unlike traditional success paradigms that emphasize hard work and competition, these laws focus on understanding our true nature and aligning with the infinite organizing power of the universe.
              </p>
            </div>

            {/* The Seven Laws */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-indigo-200 mb-6">
                The Seven Spiritual Laws
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {laws.map((law, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-lg border border-indigo-500/20 hover:border-indigo-400/40 transition-colors group"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/70 flex items-center justify-center text-indigo-300 text-lg font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-200 group-hover:text-indigo-100 transition-colors">
                          {law.title}
                        </h4>
                        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                          {law.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Practical Application */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 rounded-lg border border-indigo-500/30 mt-8">
              <h3 className="text-xl font-semibold text-indigo-200 mb-3">Practical Application</h3>
              <p className="text-gray-300 mb-4">
                To apply these laws in daily life, Deepak Chopra suggests the following practices:
              </p>
              <ul className="space-y-3 text-gray-300 pl-5 list-disc">
                <li>Practice meditation to experience pure consciousness (Law 1)</li>
                <li>Give something to everyone you meet (Law 2)</li>
                <li>Witness your choices and their consequences (Law 3)</li>
                <li>Practice acceptance and responsibility (Law 4)</li>
                <li>Practice present-moment awareness (Law 5)</li>
                <li>Practice detachment from outcomes (Law 6)</li>
                <li>Nurture the divine within you (Law 7)</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-indigo-500/20">
              <h3 className="text-xl font-semibold text-indigo-200 mb-3">Conclusion</h3>
              <p className="text-gray-300 leading-relaxed">
                The Seven Spiritual Laws of Success teach us that success is not just about material wealth, but about aligning with the infinite intelligence of the universe. By understanding and applying these laws, we can create success with effortless ease while experiencing joy and fulfillment in the process.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 backdrop-blur-sm p-4 rounded-b-xl border-t border-indigo-500/30 flex justify-between items-center">
            <div className="flex space-x-4">
              <a 
                href="/pdfs/seven-spiritual-laws.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiDownload size={18} />
                <span>Download PDF</span>
              </a>
              <a 
                href="https://www.deepakchopra.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={18} />
                <span>Visit Author</span>
              </a>
            </div>
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SevenSpiritualLaws;
