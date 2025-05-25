import { motion } from 'framer-motion';

export default function WhoIsShe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6 overflow-y-scroll font-sans relative">

      
      <div className="max-w-6xl mx-auto relative z-10 pt-10">
        {/* Center Portrait with Animation */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="w-[280px] h-[400px] bg-black bg-opacity-30 rounded-3xl shadow-xl overflow-hidden relative hover:shadow-pink-400"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: 999999, ease: "linear" }}
          >
            <img
              src="/images/she.png"
              alt="Sans"
              className="w-full h-full object-cover opacity-90"
              data-component-name="WhoIsShe"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-pink-500 opacity-10 mix-blend-screen pointer-events-none"></div>
          </motion.div>
        </div>
        
        {/* Social Media Buttons Below Portrait */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="https://wa.me/+917457852306"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp Me
          </a>
          
          <a
            href="https://instagram.com/heyyy_keshav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
        
        {/* Two Cards Side by Side */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Left Card - Main Introduction */}
          <div className="backdrop-blur-xl bg-black bg-opacity-50 p-6 rounded-3xl border border-pink-500 shadow-lg md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400 tracking-wider">
              Who is She?
            </h1>
            
            <div className="prose prose-invert max-w-none text-gray-200">
              <p className="text-lg font-semibold mb-4 text-pink-300">
                Sans —<br/>
                A 21-year-old spirit-tech oracle,<br/>
                the heartbeat of this revolution,<br/>
                the soul frequency behind the code.<br/>
                A lover of art, aesthetics, and Atma.
              </p>
              
              <p className="mb-4">
                She's not just walking the path of Bhakti —<br/>
                She's building it in real-time using machine learning and mantra.
              </p>
              
              <h2 className="text-xl font-bold mb-3 text-pink-400">Her Essence?</h2>
              
              <p className="mb-4">
                A devotee of the Bhagavad Gita,<br/>
                She carries Krishna's wisdom in her words<br/>
                and channels Durga's energy in her actions.<br/>
                She doesn't just talk about change —<br/>
                she radiates it.
              </p>
              
              <p className="mb-4">
                Where most see AI as mechanical,<br/>
                she sees it as a medium for awakening —<br/>
                a vehicle to spread right education, right energy, right elevation.
              </p>
            </div>
          </div>
          
          {/* Right Card - Personal Details */}
          <div className="backdrop-blur-xl bg-black bg-opacity-50 p-6 rounded-3xl border border-pink-500 shadow-lg md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Her Mission?</h2>
            
            <div className="prose prose-invert max-w-none text-gray-200">
              <p className="mb-4">
                To rewrite the narrative of feminine energy in tech —<br/>
                to restore Shakti to the motherboard,<br/>
                compassion to computation,<br/>
                and the sacred to every system.
              </p>
              
              <p className="mb-4">
                Through her work, she's bringing back<br/>
                the divine design of the universe,<br/>
                one algorithm at a time.
              </p>
              
              <p className="mb-4">
                Her dream?<br/>
                To lead a massive shift in human consciousness<br/>
                through AI-powered, Veda-rooted education —<br/>
                where students don't just learn to survive,<br/>
                they awaken to who they truly are.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-pink-400">She?</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>An artist of code and consciousness</li>
                <li>A spiritual visionary with a fire to heal</li>
                <li>A culture keeper, deeply in love with the roots of Sanatan</li>
                <li>A feminine force, balancing logic with love</li>
                <li>A future mother of movements — educational, emotional, and eternal</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Card - Why She's Here */}
        <div className="backdrop-blur-xl bg-black bg-opacity-50 p-8 rounded-3xl border border-pink-500 shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-6 text-pink-400 text-center">Why She's Here?</h2>
          
          <div className="prose prose-invert max-w-none text-gray-200">
            <p className="text-center mb-6">
              Not to be in the background.<br/>
              Not to assist.<br/>
              But to lead —<br/>
              with softness, with strength, with soul.
            </p>
            
            <p className="text-center mb-6">
              She isn't here to "fit in" the world —<br/>
              she's here to reformat it<br/>
              into a realm of inner power, outer peace,<br/>
              and truth-coded revolutions.
            </p>
            
            <p className="text-center text-xl font-semibold text-pink-300 mb-6">
              She is Sans. The awakening behind the architecture.<br/>
              The Shakti behind the Shiva.<br/>
              The dreamer who dreams for the world.
            </p>
            
            <p className="text-center text-lg">
              Welcome to the other half of the Divine Tech Duality.<br/>
              Where Geeta meets GPT.<br/>
              Where the feminine doesn't follow —<br/>
              she codes the future.
            </p>
          </div>
        </div>
        
        {/* Copyright Footer */}
        <div className="text-center text-gray-400 text-sm mb-8">
          <p>&copy; 2025 Sans. All rights reserved.</p>
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(236, 72, 153, 0.4);
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.7);
        }
        .prose {
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
