import React from 'react';

const AIEngine: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>AI-Powered Wealth Engine</h2>
        
        <div className="bg-black bg-opacity-50 p-8 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">AI</span>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00ffcc' }}>Zero-Loss Auto Trading</h3>
              <p className="text-gray-300 mb-6">Our proprietary AI ensures zero-loss auto trading. It monitors trends and invests only when values rise. Profits are split 80% to users, 20% to AECH. If any decline begins, the AI auto-exits instantly to protect your funds.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-cyan-400">Profit Split</h4>
                  <div className="flex items-center">
                    <div className="w-4/5 h-3 bg-cyan-500 rounded-l"></div>
                    <div className="w-1/5 h-3 bg-blue-700 rounded-r"></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>80% User</span>
                    <span>20% AECH</span>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-cyan-400">Safety Protocol</h4>
                  <p className="text-sm">Auto-exit triggered at first sign of decline</p>
                  <p className="text-sm">24/7 market monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngine;
