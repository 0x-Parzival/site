interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: 'Real-time Recognition',
    description: 'Advanced computer vision algorithms for instant gesture detection and response.',
    icon: '⚡'
  },
  {
    title: 'Cross-platform',
    description: 'Works seamlessly across web, mobile, and desktop applications.',
    icon: '🌐'
  },
  {
    title: 'Custom Gestures',
    description: 'Train and customize gestures for your specific needs.',
    icon: '✨'
  },
  {
    title: 'Privacy First',
    description: 'All processing happens locally on your device, ensuring data privacy.',
    icon: '🔒'
  }
];
