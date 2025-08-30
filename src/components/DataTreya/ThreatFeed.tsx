import React, { useState, useEffect, useRef } from 'react';
// Dynamically import react-globe.gl for Next.js compatibility (client-side only)
// import Globe from 'react-globe.gl';
import 'xterm/css/xterm.css'; // Already imported in ConsoleSection, but good for standalone use if needed

// Sample data for arcs (representing attacks)
const generateRandomArcsData = () => {
  const N_ARCS = 10;
  const MAX_LAT = 40; // Focus on northern hemisphere for this example
  const MAX_LNG = 120;
  const MAX_ALT = 0.8; // Max altitude of the arc
  const arcs = [];

  for (let i = 0; i < N_ARCS; i++) {
    arcs.push({
      startLat: (Math.random() - 0.5) * MAX_LAT * 2,
      startLng: (Math.random() - 0.5) * MAX_LNG * 2,
      endLat: (Math.random() - 0.5) * MAX_LAT * 2,
      endLng: (Math.random() - 0.5) * MAX_LNG * 2,
      color: `rgba(57, 255, 20, ${Math.random() * 0.6 + 0.2})`, // neon-green with random opacity
      stroke: Math.random() * 1 + 0.5, // Random stroke width
    });
  }

  return arcs;
};


const ThreatFeed: React.FC = () => {
  const globeRef = useRef<any>(null); // For potential interactions if Globe instance is needed
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [globeComponent, setGlobeComponent] = useState<React.ComponentType<any> | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Dynamically import Globe component
    import('react-globe.gl').then(module => {
      setGlobeComponent(() => module.default); // react-globe.gl uses default export
    });
  }, []);

  useEffect(() => {
    setArcsData(generateRandomArcsData());
    // Update dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight < 400 ? 400 : containerRef.current.offsetHeight, // Min height
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Rotate globe
  useEffect(() => {
    if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.9;
        // Set initial zoom
        globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
    }
  }, [globeComponent]); // Depend on globeComponent to ensure globeRef.current is set

  if (!globeComponent) {
    return (
        <section className="py-16 px-4 h-[500px] flex items-center justify-center">
            <div className="text-neon-green text-xl">Loading Threat Globe...</div>
        </section>
    );
  }

  const Globe = globeComponent; // Assign to a const variable that starts with an uppercase letter

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-neon-green">Live Threat Feed</h2>
      <div ref={containerRef} className="max-w-5xl mx-auto h-[500px] md:h-[600px] border border-neon-green/50 rounded-lg overflow-hidden shadow-xl shadow-neon-green/20 relative">
        {dimensions.width > 0 && ( // Only render globe when dimensions are known
            <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="#0d0d0d" // matrix-black
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Darker earth texture
            // globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg" // Alternative dark
            arcsData={arcsData}
            arcColor="color" // Use 'color' property from data
            arcStroke="stroke" // Use 'stroke' property from data
            arcDashLength={0.5}
            arcDashGap={0.2}
            arcDashAnimateTime={2000} // Animation speed for dashes
            arcAltitudeAutoScale={0.4}
            atmosphereColor="#39ff14" // neon-green atmosphere
            atmosphereAltitude={0.2}
            />
        )}
      </div>
      <p className="text-center mt-4 text-neon-green/70">
        Visualizing simulated global cyber threat origins. (Powered by react-globe.gl)
      </p>
    </section>
  );
};

export default ThreatFeed;
