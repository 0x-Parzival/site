import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AIAgency = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the AI Agency site
    window.location.href = '/ai-agency/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Redirecting to AI Agency...</h1>
        <p className="text-gray-400">If you are not redirected automatically, 
          <button 
            onClick={() => window.location.href = '/ai-agency/index.html'}
            className="text-blue-400 hover:underline ml-1"
          >
            click here
          </button>.
        </p>
      </div>
    </div>
  );
};

export default AIAgency;
