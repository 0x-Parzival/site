import React from 'react';

const Ecosystem: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>AECH Ecosystem</h2>
        
        <div className="bg-black bg-opacity-50 p-8 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>AECH Coin Utility</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Transaction fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Governance voting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Staking rewards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>AI profit sharing</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Partners</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Major banks worldwide</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Leading blockchains</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Payment processors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>AI research institutes</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#00ffcc' }}>Developer Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>AECH SDK</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>REST API</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>GraphQL endpoint</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Smart contract templates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
