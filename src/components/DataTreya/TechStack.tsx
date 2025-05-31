import React from 'react';

const techStackItems: { category: string; items: string[] }[] = [
  {
    category: 'Frontend & Visualization',
    items: ['React', 'Tailwind CSS', 'WebGL (for visualizations)'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['PyTorch (for threat models)', 'Scikit-learn (for threat models)'],
  },
  {
    category: 'Backend & Infrastructure',
    items: ['Dockerized Microservices', 'Nginx', 'Tor Gateway (Dark mode access)'],
  },
  {
    category: 'Data Integrity & Logging',
    items: ['Blockchain Audit Trail (e.g., IPFS/Celestia for concepts)'],
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-matrix-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">Under the Hood (Tech Stack)</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {techStackItems.map((techCategory) => (
          <div
            key={techCategory.category}
            className="bg-[#0f0f0f] border border-neon-green/60 p-6 rounded-lg
                       hover:shadow-md hover:shadow-neon-green/25 transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neon-green border-b-2 border-neon-green/30 pb-2">
              {techCategory.category}
            </h3>
            <ul className="space-y-2">
              {techCategory.items.map((item) => (
                <li key={item} className="text-neon-green/80 flex items-center">
                  <span className="text-neon-green mr-2 text-xl">»</span> {/* ASCII-like bullet */}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
