import React from 'react';

interface JoinSectionProps {
  onDownloadWalletClick?: () => void;
  onDeveloperDocsClick?: () => void;
  onEarlyAccessClick?: () => void;
}

const JoinSection: React.FC<JoinSectionProps> = ({ 
  onDownloadWalletClick, 
  onDeveloperDocsClick, 
  onEarlyAccessClick 
}) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00ffae' }}>Join the Future</h2>
        
        <div className="bg-black bg-opacity-50 p-8 rounded-xl border border-cyan-900/50 backdrop-blur-sm text-center">
          <p className="text-xl mb-8">AECH isn't just a wallet. It's your bank. Your portfolio. Your broker. Your AI. Your future.</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <button
              onClick={onDownloadWalletClick}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-black font-bold text-lg cursor-pointer transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Download Wallet
            </button>
            
            <button
              onClick={onDeveloperDocsClick}
              className="px-8 py-3 bg-transparent border-2 border-cyan-500 rounded-full text-cyan-400 font-bold text-lg cursor-pointer transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Developer Docs
            </button>
            
            <button
              onClick={onEarlyAccessClick}
              className="px-8 py-3 bg-transparent border-2 border-cyan-500 rounded-full text-cyan-400 font-bold text-lg cursor-pointer transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Early Access
            </button>
          </div>
          
          <p className="text-gray-400">Join <span className="text-cyan-400 font-bold">10,000+</span> early adopters who will be using AECH</p>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
