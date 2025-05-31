import React from 'react';

interface EyeDetail {
  eye: string;
  name: string;
  functionDesc: string;
  visual: string;
}

const eyeDetails: EyeDetail[] = [
  {
    eye: '👁️',
    name: 'Left Eye (Past)',
    functionDesc: 'Deep Log Analysis & Pattern Learning',
    visual: 'Scrollable timeline of threat logs',
  },
  {
    eye: '👁️',
    name: 'Center Eye (Present)',
    functionDesc: 'Real-Time Monitoring & Defense',
    visual: 'Live terminal feed with threat blocks',
  },
  {
    eye: '👁️',
    name: 'Right Eye (Future)',
    functionDesc: 'Predictive AI Engine',
    visual: 'Threat heatmaps & forecasts',
  },
];

const TriEyeModel: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">The Tri-Eye Model</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {eyeDetails.map((detail) => (
          <div key={detail.name} className="border border-neon-green p-6 rounded-lg hover:shadow-lg hover:shadow-neon-green/30 transition-shadow">
            <div className="text-5xl mb-4 text-center">{detail.eye}</div>
            <h3 className="text-2xl font-bold mb-3 text-center">{detail.name}</h3>
            <p className="text-lg mb-2"><strong className="text-neon-green/80">Function:</strong> {detail.functionDesc}</p>
            <p className="text-lg"><strong className="text-neon-green/80">Visual:</strong> {detail.visual}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TriEyeModel;
