import React from 'react';

const CurrencySection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>Infinite Connectivity</h2>
        
        <div className="bg-black bg-opacity-50 p-8 rounded-xl border border-cyan-900/50 backdrop-blur-sm mb-10">
          <p className="text-center text-xl mb-8">AECH integrates <span className="font-bold" style={{ color: '#00ffcc' }}>LayerZero, Chainlink CCIP</span>, and bank APIs to enable ultra-fast currency conversion. You can go from INR to BTC to USD to SOL in seconds, without ever leaving your wallet.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['BTC', 'ETH', 'SOL', 'USD', 'EUR', 'INR', 'JPY'].map((currency) => (
              <div key={currency} className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center font-bold">
                {currency}
              </div>
            ))}
          </div>
          
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8"></div>
          
          <div className="text-center">
            <p className="text-lg">Supported by <span className="font-bold text-cyan-400">37</span> blockchains and <span className="font-bold text-cyan-400">142</span> banking partners worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencySection;
