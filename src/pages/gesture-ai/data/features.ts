import React from 'react';
import { FiZap, FiGlobe, FiLayers, FiShield, FiCode, FiCpu } from 'react-icons/fi';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export const features: Feature[] = [
  {
    title: 'Real-time Recognition',
    description: 'Millisecond response time for seamless control',
    icon: React.createElement(FiZap, { className: 'w-8 h-8 text-cyan-400' }),
    highlight: true
  },
  {
    title: 'Cross-platform',
    description: 'Compatible with web, mobile, desktop, and embedded systems',
    icon: React.createElement(FiGlobe, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Custom Gestures',
    description: 'Create and train personalized gestures for unique use cases',
    icon: React.createElement(FiLayers, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Privacy First',
    description: 'All computation runs locally. Your data never leaves your device.',
    icon: React.createElement(FiShield, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'AI Learning Layer',
    description: 'Learns and adapts to your gesture patterns over time',
    icon: React.createElement(FiCpu, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Developer Friendly',
    description: 'Comprehensive SDK and API for easy integration',
    icon: React.createElement(FiCode, { className: 'w-8 h-8 text-cyan-400' })
  }
];
