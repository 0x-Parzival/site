import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Placeholder for hash - in a real app, this might be injected at build time
  const lastReleaseHash = "a1b2c3d4e5f67890deadbeefcafe1234567890ab";

  return (
    <footer className="bg-[#0a0a0a] text-neon-green/70 py-12 px-4 border-t-2 border-neon-green/30">
      <div className="max-w-6xl mx-auto text-center">

        {/* ASCII Art */}
        <pre className="text-neon-green font-mono text-lg mb-6 leading-tight select-none">
          {'   /\'}
          {'  (👁️)'}
          {'  /🐾\'}
          {'DATA-TREYA'}
        </pre>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 font-mono">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">GitHub</a>
          <a href="#" className="hover:text-neon-green transition-colors">Docs</a> {/* Placeholder Link */}
          <a href="#" className="hover:text-neon-green transition-colors">Black Mirror</a> {/* Placeholder Link */}
          <a href="#" className="hover:text-neon-green transition-colors">Dark Web</a> {/* Placeholder Link */}
          <a href="#" className="hover:text-neon-green transition-colors">License</a> {/* Placeholder Link */}
        </nav>

        <div className="text-xs text-neon-green/50 mb-2">
          <p>Hash of Last Release: <span className="font-semibold">{lastReleaseHash.substring(0,12)}...</span></p>
        </div>

        <p className="text-sm">
          &copy; {currentYear} DATA-TREYA Initiative. All rights reserved (or are they?).
        </p>
        <p className="text-xs text-neon-green/50 mt-1">
          Enter the void at your own risk.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
