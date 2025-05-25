import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoAmI from './pages/WhoAmI';
import WhoIsShe from './pages/WhoIsShe';
import Gesture from './pages/Gesture';
import AECH from './pages/AECH';
import { GhibliStore } from './pages/GhibliStore.clean';
import TalkWithPhDs from './pages/TalkWithPhDs';
import Spirituality from './pages/Spirituality';
import KalkiOS from './pages/KalkiOS/KalkiPage';
import DevDat from './pages/DevDat';
import ParticleBackgroundPreview from './pages/KalkiOS/components/ParticleBackground.preview';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import HomeButton from './components/HomeButton';
import { ParticlesProvider, useParticles } from './context/ParticlesContext';
import ExpertsTalk from './pages/ExpertsTalk';

function AppContent() {
  const { opacity } = useParticles();

  return (
    <Router>
      <div className="min-h-screen w-full overflow-y-auto relative">
        {/* Global Particle Background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <ParticleBackground opacity={opacity} />
        </div>
        
        {/* Home Button */}
        <div className="fixed top-4 left-4 z-50">
          <HomeButton className="backdrop-blur-sm bg-black/20 p-3 rounded-lg" />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoami" element={<WhoAmI />} />
          <Route path="/whoishe" element={<WhoIsShe />} />
          <Route path="/gesture" element={<Gesture />} />
          <Route path="/aech" element={<AECH />} />
          <Route path="/ghibli-store" element={<GhibliStore />} />
          <Route path="/talk-with-phds" element={<TalkWithPhDs />} />
          <Route path="/nand.aka" element={<TalkWithPhDs />} />
          <Route path="/spirituality" element={<Spirituality />} />
          <Route path="/kalkios" element={<KalkiOS />} />
          <Route path="/kalki" element={<KalkiOS />} />
          <Route path="/dev-dat" element={<DevDat />} />
          <Route path="/particles-preview" element={<ParticleBackgroundPreview />} />
          <Route path="/experts-talk" element={<ExpertsTalk />} />
          <Route path="/talk" element={<ExpertsTalk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ParticlesProvider>
        <AppContent />
      </ParticlesProvider>
    </ThemeProvider>
  );
}
