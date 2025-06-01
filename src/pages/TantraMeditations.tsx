import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  keyFigures,
  meditationCategories,
  tantraPrinciples,
  tantraClassifications,
  comparativeApproaches
} from '../data/tantraData';

const TantraMeditations: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={handleBack}
          className="mr-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          ←
        </button>
        <h1 className="text-3xl font-orbitron bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Tantra Meditations
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-4 mb-8">
        {['introduction', 'techniques', 'principles', 'classifications', 'comparison'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="space-y-8">
        {/* Introduction Tab */}
        {activeTab === 'introduction' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-orbitron mb-4">Key Figures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyFigures.map(figure => (
                  <div
                    key={figure.name}
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{figure.icon}</span>
                      <h3 className="text-xl font-semibold">{figure.name}</h3>
                    </div>
                    <p className="text-gray-300">{figure.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* Techniques Tab */}
        {activeTab === 'techniques' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {meditationCategories.map(category => (
              <section
                key={category.name}
                className="bg-gray-800 rounded-lg p-6"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(category.name)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{category.icon}</span>
                    <h2 className="text-2xl font-orbitron">{category.name}</h2>
                  </div>
                  <span className="text-2xl">
                    {expandedSections.includes(category.name) ? '−' : '+'}
                  </span>
                </div>
                {expandedSections.includes(category.name) && (
                  <div className="mt-4 space-y-4">
                    {category.techniques.map((technique, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                      >
                        <p className="text-gray-300">{technique.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </motion.div>
        )}

        {/* Principles Tab */}
        {activeTab === 'principles' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-orbitron mb-4">Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tantraPrinciples.map(principle => (
                  <div
                    key={principle.title}
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{principle.icon}</span>
                      <h3 className="text-xl font-semibold">{principle.title}</h3>
                    </div>
                    <p className="text-gray-300">{principle.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* Classifications Tab */}
        {activeTab === 'classifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {tantraClassifications.map(classification => (
              <section
                key={classification.title}
                className="bg-gray-800 rounded-lg p-6"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(classification.title)}
                >
                  <h2 className="text-2xl font-orbitron">{classification.title}</h2>
                  <span className="text-2xl">
                    {expandedSections.includes(classification.title) ? '−' : '+'}
                  </span>
                </div>
                <p className="text-gray-300 mt-2">{classification.description}</p>
                {expandedSections.includes(classification.title) && (
                  <div className="mt-4 space-y-4">
                    {classification.subcategories?.map(subcategory => (
                      <div
                        key={subcategory.name}
                        className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                      >
                        <h3 className="text-xl font-semibold mb-2">{subcategory.name}</h3>
                        <p className="text-gray-300">{subcategory.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </motion.div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-orbitron mb-4">Comparative Approaches</h2>
              <div className="space-y-6">
                {comparativeApproaches.map(approach => (
                  <div
                    key={approach.approach}
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">{approach.approach}</h3>
                    <div className="space-y-2">
                      <p><span className="font-semibold">Primary Focus:</span> {approach.primaryFocus}</p>
                      <p><span className="font-semibold">Key Techniques:</span> {approach.keyTechniques}</p>
                      <p><span className="font-semibold">Primary Goal:</span> {approach.primaryGoal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TantraMeditations; 