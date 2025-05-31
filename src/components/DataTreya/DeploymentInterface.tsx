import React, { useState } from 'react';

const DeploymentInterface: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [deploymentType, setDeploymentType] = useState('Self-host');
  const [environment, setEnvironment] = useState('Kubernetes');
  const [learningMode, setLearningMode] = useState('Auto');

  const handleDeploy = () => {
    // Logic to handle deployment configuration
    console.log({ deploymentType, environment, learningMode });
    setShowModal(false);
    // Could show a success message or animation here
  };

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Sacred Node Deployment</h2>

      {/* Glowing triangular frame placeholder */}
      <div className="relative w-64 h-56 mx-auto mb-8 flex items-center justify-center">
        {/* Triangle shape using borders or SVG could be more precise */}
        <div
          className="absolute w-0 h-0
          border-l-[100px] border-l-transparent
          border-r-[100px] border-r-transparent
          border-b-[173px] border-b-neon-green opacity-30 animate-pulse"
          style={{ filter: 'blur(10px)' }}
        ></div>
        <div
          className="absolute w-0 h-0
          border-l-[100px] border-l-transparent
          border-r-[100px] border-r-transparent
          border-b-[173px] border-b-neon-green"
        ></div>
        <button
          onClick={() => setShowModal(true)}
          className="relative text-matrix-black bg-neon-green px-10 py-4 rounded font-bold text-xl z-10
                     hover:bg-opacity-80 transition-colors shadow-lg shadow-neon-green/50"
        >
          DEPLOY PORTAL
        </button>
      </div>
      <p className="text-neon-green/80 mb-12">Initiate deployment sequence through the Sacred Node.</p>

      {/* Deployment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-matrix-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a0a0a] p-8 rounded-lg border border-neon-green shadow-xl shadow-neon-green/30 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6 text-neon-green">Configure Deployment</h3>

            {/* Deployment Type */}
            <div className="mb-4">
              <label htmlFor="deploymentType" className="block text-sm font-medium text-neon-green/80 mb-1">Deployment Type</label>
              <select
                id="deploymentType"
                value={deploymentType}
                onChange={(e) => setDeploymentType(e.target.value)}
                className="w-full p-2 bg-matrix-black border border-neon-green rounded text-neon-green focus:ring-neon-green focus:border-neon-green"
              >
                <option value="Self-host">Self-host</option>
                <option value="Cloud">Cloud</option>
              </select>
            </div>

            {/* Environment */}
            <div className="mb-4">
              <label htmlFor="environment" className="block text-sm font-medium text-neon-green/80 mb-1">Environment</label>
              <select
                id="environment"
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                className="w-full p-2 bg-matrix-black border border-neon-green rounded text-neon-green focus:ring-neon-green focus:border-neon-green"
              >
                <option value="Kubernetes">Kubernetes</option>
                <option value="AWS">AWS</option>
                <option value="Local">Local VM</option>
              </select>
            </div>

            {/* Learning Mode */}
            <div className="mb-6">
              <label htmlFor="learningMode" className="block text-sm font-medium text-neon-green/80 mb-1">Learning Mode</label>
              <select
                id="learningMode"
                value={learningMode}
                onChange={(e) => setLearningMode(e.target.value)}
                className="w-full p-2 bg-matrix-black border border-neon-green rounded text-neon-green focus:ring-neon-green focus:border-neon-green"
              >
                <option value="Auto">[Auto] - Autonomous Learning</option>
                <option value="Manual">[Manual] - Supervised Learning</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="border border-neon-green text-neon-green px-6 py-2 rounded hover:bg-neon-green hover:text-matrix-black transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeploy}
                className="bg-neon-green text-matrix-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition-colors"
              >
                Initiate Deployment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeploymentInterface;
