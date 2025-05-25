import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 bg-black/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold" style={{ color: '#00ffc8' }}>AECH</h2>
            <p className="text-gray-400">The 3D Financial Universe</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-cyan-400 hover:text-cyan-300">Twitter</a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300">Discord</a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300">GitHub</a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300">Medium</a>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-gray-800 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 AECH Inc. All rights reserved.</p>
          <p>Built with ❤️ by 0xParzival</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
