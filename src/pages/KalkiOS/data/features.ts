interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Quantum Kernel',
    description: 'Leveraging quantum computing principles for unprecedented performance and efficiency.',
    icon: '⚛️',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 2,
    title: 'Zero-Latency Shell',
    description: 'Instant command execution with predictive input and AI-assisted completions.',
    icon: '⚡',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    id: 3,
    title: 'AI Self-Healing',
    description: 'Continuously monitors and repairs system components in real-time.',
    icon: '🤖',
    gradient: 'from-green-400 to-teal-500',
  },
  {
    id: 4,
    title: 'Parzival Kernel v3',
    description: 'Next-generation microkernel architecture with built-in security and scalability.',
    icon: '🛡️',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 5,
    title: 'Neural Interface',
    description: 'Seamless integration with neural networks for intuitive control.',
    icon: '🧠',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Holographic Display',
    description: 'Advanced 3D rendering engine for immersive visual experiences.',
    icon: '👁️',
    gradient: 'from-blue-400 to-indigo-600',
  },
];
