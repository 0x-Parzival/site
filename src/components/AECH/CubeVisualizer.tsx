import React from 'react';

const CubeVisualizer: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>The 3D Blockchain Cube</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="bg-black bg-opacity-70 p-6 rounded-xl border border-cyan-900/50 h-[400px] flex items-center justify-center">
              <img src="/images/aech.png" alt="3D Blockchain Cube" className="max-w-full max-h-full" />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#00ffcc' }}>Revolutionary Spatial Architecture</h3>
            <p className="text-gray-300 mb-6">AECH is built on a revolutionary 3D blockchain cube. Each axis represents Fiat, Crypto, and AI respectively — storing user data, transaction history, and AI-led investments in a spatially-indexed structure.</p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400">•</span>
                <span><span className="font-bold text-cyan-400">X-Axis:</span> Traditional Finance - Banks, Fiat, Credit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400">•</span>
                <span><span className="font-bold text-cyan-400">Y-Axis:</span> Crypto Finance - Blockchains, Tokens, NFTs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400">•</span>
                <span><span className="font-bold text-cyan-400">Z-Axis:</span> AI Finance - Automated Trading, Investments, Analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CubeVisualizer;
