import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>About AECH</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>What is AECH?</h3>
            <p className="text-gray-300">AECH is a revolutionary 3D blockchain-based financial operating system that unifies all your financial assets into a single, secure wallet. It bridges the gap between traditional banking, cryptocurrencies, and AI-powered investments.</p>
          </div>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Why 3D Blockchain?</h3>
            <p className="text-gray-300">Our proprietary 3D blockchain cube stores data in a spatially-indexed structure, with each axis representing Fiat, Crypto, and AI respectively. This enables unprecedented interoperability and security across financial systems.</p>
          </div>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>One Wallet for All</h3>
            <p className="text-gray-300">With AECH, you only need one wallet linked to all your bank accounts, crypto wallets, and fiat currencies. AECH Coin serves as the central currency, enabling seamless conversion between any currency across any blockchain or bank.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
