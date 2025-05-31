// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InterfaceMockup from './components/InterfaceMockup';
import ScreenshotsCarousel from './components/ScreenshotsCarousel';
import RoadmapSection from './components/RoadmapSection';
import DownloadSection from './components/DownloadSection';
import useMobileDetect from '../../hooks/useMobileDetect';

const KalkiPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isMobile } = useMobileDetect();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-matrix-black text-neon-green font-mono relative">
      <div className="container mx-auto px-4 py-8 z-10">
        {/* Header with Logo */}
        <div className="text-center mb-16">
          <img src="/images/kalkios-logo.png" alt="Kalki OS Logo" className="w-48 h-48 mx-auto mb-8" />
          <h1 className="text-6xl font-bold mb-4">KALKI OS</h1>
          <p className="text-xl mb-8">
            The Avatar of Digital Rebirth
          </p>
        </div>

        {/* Philosophy and Identity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">💎 Philosophy and Identity</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Avatar of Reboot</h3>
              <p>
                Just as Kalki ends the corrupted age to reset the cycle, Kalki OS wipes away legacy vulnerabilities and digital chaos to bring forth structured, AI-guarded order.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Cyber-Dharma</h3>
              <p>
                Promotes digital justice, ethical hacking, and sovereign control of information.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Shambhala Protocols</h3>
              <p>
                The system core is encrypted using principles of balance—between speed and privacy, AI and human input, decentralization and control.
              </p>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🧩 Core Components</h2>
          
          {/* Vyoma Kernel */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">1. Vyoma Kernel (व्योम)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>A lightweight AI-compatible microkernel optimized for parallel AI execution, secure containers, and zero-day resilience.</li>
              <li>Written in Rust for memory safety and performance.</li>
              <li>Modular to allow swapping security modules on-the-fly without rebooting.</li>
            </ul>
          </div>

          {/* Padma Shell */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">2. Padma Shell (पद्म)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Command-line interface inspired by Sanskrit syntax.</li>
              <li>Supports natural language queries and symbolic commands.</li>
              <li>Adaptive — learns your behavior, auto-suggests operations.</li>
              <li>Example Commands:</li>
            </ul>
            <pre className="bg-matrix-black p-4 rounded">
              <code>padma&gt; avatar.initiate --mode=incognito</code>
              <code>padma&gt; shakti.deploy --target=network-grid</code>
              <code>padma&gt; veda.scan --depth=max --ai-assist=true</code>
            </pre>
          </div>

          {/* Data-Treya Agent */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">3. Data-Treya Agent</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Built-in AI sentinel agent.</li>
              <li>Real-time threat analysis, network sniffing, AI-predicted attack prevention.</li>
              <li>Runs as a system daemon in stealth mode.</li>
              <li>Integrates with I2P, Tor, and dark-net threat databases.</li>
            </ul>
          </div>

          {/* Maya UI */}
          <div>
            <h3 className="text-2xl font-bold mb-2">4. Maya UI</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>3D matrix-style interface with particle effects and holographic windows.</li>
              <li>Encrypted workspace that auto-destructs in compromise mode (Anitya Protocol).</li>
              <li>Neon-glow tiles and hex grid layout with gesture-based navigation.</li>
            </ul>
          </div>
        </section>

        {/* Security Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔐 Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shakti Firewall */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Shakti Firewall</h3>
              <p>AI adaptive firewall that learns attack patterns and evolves rules in real-time.</p>
            </div>

            {/* Kaal-Nemesis Daemon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Kaal-Nemesis Daemon</h3>
              <p>Root-level anomaly detector that monitors system memory, hardware signals, and BIOS-level inconsistencies.</p>
            </div>

            {/* ChakraVault */}
            <div>
              <h3 className="text-2xl font-bold mb-2">ChakraVault</h3>
              <p>Quantum-encrypted data vault that requires biometric + AI behavioral validation for file interactions.</p>
            </div>

            {/* Anitya Mode */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Anitya Mode</h3>
              <p>Panic protocol that wipes all volatile storage, runs burn chain on SSD cells, and pushes decoys to surveillance layers when triggered.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KalkiPage;
