// @ts-nocheck
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ParticlesContextType {
  opacity: number;
  setOpacity: (opacity: number) => void;
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
}

const defaultContext: ParticlesContextType = {
  opacity: 0.6,
  setOpacity: () => {},
  isEnabled: true,
  setIsEnabled: () => {},
};

const ParticlesContext = createContext<ParticlesContextType>(defaultContext);

export const useParticles = () => useContext(ParticlesContext);

interface ParticlesProviderProps {
  children: ReactNode;
}

export const ParticlesProvider: React.FC<ParticlesProviderProps> = ({ children }) => {
  const [opacity, setOpacity] = useState<number>(defaultContext.opacity);
  const [isEnabled, setIsEnabled] = useState<boolean>(defaultContext.isEnabled);

  const value = {
    opacity,
    setOpacity,
    isEnabled,
    setIsEnabled,
  };

  return (
    <ParticlesContext.Provider value={value}>
      {children}
    </ParticlesContext.Provider>
  );
};

export default ParticlesContext;