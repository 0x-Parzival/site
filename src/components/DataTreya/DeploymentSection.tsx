import React, { useState } from 'react';

interface DeploymentTarget {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'deploying' | 'error';
}

const initialTargets: DeploymentTarget[] = [
  { id: 'docker', name: 'Docker Containers', description: 'Lightweight, containerized deployments.', status: 'active' },
  { id: 'vms', name: 'Virtual Machines', description: 'Isolated environments with dedicated resources.', status: 'inactive' },
  { id: 'cloud', name: 'Cloud Platforms', description: 'Scalable infrastructure on AWS, Azure, GCP.', status: 'deploying' },
];

const DeploymentSection: React.FC = () => {
  const [targets, setTargets] = useState<DeploymentTarget[]>(initialTargets);

  const toggleTargetStatus = (id: string) => {
    setTargets(prevTargets =>
      prevTargets.map(target => {
        if (target.id === id) {
          if (target.status === 'active' || target.status === 'deploying') {
            return { ...target, status: 'inactive' };
          } else {
            // Simulate a deploying state before becoming active
            const newStatus = 'deploying';
            setTimeout(() => {
                setTargets(currentTargets => currentTargets.map(t => t.id === id ? {...t, status: 'active'} : t));
            }, 2000); // Simulate deployment time
            return { ...target, status: newStatus };
          }
        }
        return target;
      })
    );
  };

  const getStatusColor = (status: DeploymentTarget['status']) => {
    switch (status) {
      case 'active': return 'text-neon-green';
      case 'inactive': return 'text-gray-500';
      case 'deploying': return 'text-yellow-400 animate-pulse';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">Deployment Simulation</h2>
      <p className="text-center text-lg text-neon-green/80 mb-10 max-w-3xl mx-auto">
        Visualize and simulate the status of DATA-TREYA agent deployments across various environments. This complements the 'Sacred Node' for initial deployment configuration.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {targets.map(target => (
          <div
            key={target.id}
            className="bg-[#0f0f0f] border border-neon-green/60 p-6 rounded-xl shadow-lg hover:shadow-neon-green/20 transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-neon-green">{target.name}</h3>
              {/* Toggle Switch */}
              <label htmlFor={`toggle-${target.id}`} className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id={`toggle-${target.id}`}
                    className="sr-only"
                    checked={target.status === 'active' || target.status === 'deploying'}
                    onChange={() => toggleTargetStatus(target.id)}
                  />
                  <div className={`block w-14 h-8 rounded-full ${target.status === 'active' || target.status === 'deploying' ? 'bg-neon-green' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${target.status === 'active' || target.status === 'deploying' ? 'transform translate-x-6' : ''}`}></div>
                </div>
              </label>
            </div>
            <p className="text-neon-green/70 mb-4 h-12">{target.description}</p>
            <div className="text-right">
              <span className={`font-semibold ${getStatusColor(target.status)}`}>
                Status: {target.status.charAt(0).toUpperCase() + target.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeploymentSection;
