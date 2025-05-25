import React from 'react';

const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>Security & Identity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>zk-Proofs</h3>
            <p className="text-gray-300">Verify transactions without revealing sensitive information. Our zero-knowledge proof system ensures maximum privacy while maintaining full compliance.</p>
          </div>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Biometric Security</h3>
            <p className="text-gray-300">Multi-factor authentication using fingerprint, facial recognition, and voice patterns. Your wallet is as unique as you are.</p>
          </div>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Non-Duplicable Identity</h3>
            <p className="text-gray-300">Your AECH identity cannot be copied or stolen. Our proprietary technology ensures that only you can access your financial universe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
