import React from 'react';

const WalletFeatures: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>One Wallet. One Identity.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Multi-layered Identity</h3>
            <p className="text-gray-300 mb-4">Powered by biometric and zk-proof technology, your AECH wallet is secure, unique, and non-duplicable. You carry your financial universe wherever you go.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Biometric authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Zero-knowledge proofs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Multi-signature security</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Transaction Timeline</h3>
            <p className="text-gray-300 mb-4">View your complete financial history in an intuitive 3D timeline. Filter by currency, date, or transaction type.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>3D visualization of transactions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Advanced filtering options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Export to any format</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletFeatures;
