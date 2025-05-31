import React, { useState } from 'react';

interface ThreatNode {
  id: number;
  x: number; // Simplified position for grid
  y: number;
  geo: string;
  vector: string;
  action: string;
}

const initialThreats: ThreatNode[] = [
  { id: 1, x: 1, y: 1, geo: 'North America', vector: 'DDoS', action: 'Isolate & Scrub' },
  { id: 2, x: 3, y: 2, geo: 'Eastern Europe', vector: 'Malware', action: 'Quarantine & Analyze' },
  { id: 3, x: 2, y: 4, geo: 'East Asia', vector: 'Phishing', action: 'Block & Alert Users' },
  { id: 4, x: 4, y: 5, geo: 'South America', vector: 'Ransomware', action: 'Restore from Backup' },
  { id: 5, x: 5, y: 1, geo: 'Western Europe', vector: 'APT', action: 'Monitor & Trace' },
];

const VisualThreatGrid: React.FC = () => {
  const [hoveredThreat, setHoveredThreat] = useState<ThreatNode | null>(null);
  const gridSize = 6; // 6x6 grid for simplicity

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Visual Threat Grid (The Trinetra Radar)</h2>
      <div className="max-w-3xl mx-auto aspect-square border border-neon-green/50 p-4 rounded-lg relative">
        {/* Simplified grid representation */}
        <div className={`grid grid-cols-${gridSize} gap-1 w-full h-full`}>
          {Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const threat = initialThreats.find(t => (t.y - 1) * gridSize + (t.x -1) === index);
            return (
              <div
                key={index}
                className={`aspect-square border border-neon-green/20 ${threat ? 'bg-red-500/50 animate-pulse' : 'bg-transparent'} flex items-center justify-center text-xs`}
                onMouseEnter={() => threat && setHoveredThreat(threat)}
                onMouseLeave={() => threat && setHoveredThreat(null)}
              >
                {threat ? 'X' : ''}
              </div>
            );
          })}
        </div>

        {/* Hover Info Box */}
        {hoveredThreat && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-matrix-black border border-neon-green p-6 rounded-lg shadow-xl w-80 z-10">
            <h4 className="text-xl font-bold mb-3 text-neon-green">Threat Detected</h4>
            <p><strong>Geo-location:</strong> {hoveredThreat.geo}</p>
            <p><strong>Threat Vector:</strong> {hoveredThreat.vector}</p>
            <p><strong>Suggested Action:</strong> {hoveredThreat.action}</p>
          </div>
        )}
      </div>
      <p className="text-center mt-4 text-neon-green/70">Hover over 'X' markers to view threat details. (Simplified hex grid representation)</p>
    </section>
  );
};

export default VisualThreatGrid;
