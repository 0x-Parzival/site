import { useEffect } from 'react';

export default function SkillQuest() {
  useEffect(() => {
    window.location.href = '/skill-quest/index.html';
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading Skill Quest...</h1>
        <p className="text-xl text-gray-300">Redirecting to Skill Quest</p>
      </div>
    </div>
  );
}
