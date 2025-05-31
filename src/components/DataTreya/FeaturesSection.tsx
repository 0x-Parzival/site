import React from 'react';

interface Feature {
  icon: string; // Placeholder for icon/visual
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🧬', // Placeholder icon
    title: 'Adaptive Adversarial Training',
    description: 'Continuously learns from attack patterns to evolve defenses.',
  },
  {
    icon: '🧠', // Placeholder icon
    title: 'AI-based Predictive Firewall',
    description: 'Anticipates and blocks threats before they materialize using advanced AI models.',
  },
  {
    icon: '🕷️', // Placeholder icon
    title: 'Stealth Malware Detection',
    description: 'Uncovers hidden and polymorphic malware that evades traditional scanners.',
  },
  {
    icon: '⛓', // Placeholder icon
    title: 'Blockchain-integrated Event Log',
    description: 'Ensures tamper-proof logging of all security events for unparalleled auditability.',
  },
  {
    icon: '📡', // Placeholder icon
    title: 'Deep Packet Inspection + Decryption',
    description: 'Analyzes encrypted traffic for hidden threats without compromising privacy (simulated).',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-matrix-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">Why Data-Treya?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-neon-green/70 p-6 rounded-xl
                       bg-[#0f0f0f] hover:bg-neon-green/10
                       transition-all duration-300 ease-in-out
                       hover:shadow-lg hover:shadow-neon-green/30 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-neon-green">{feature.title}</h3>
            <p className="text-neon-green/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
