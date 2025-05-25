declare module 'react-tsparticles' {
  import { ComponentType } from 'react';
  import { Engine, ISourceOptions } from 'tsparticles-engine';

  export interface IParticlesProps {
    id?: string;
    width?: string;
    height?: string;
    options?: ISourceOptions;
    style?: React.CSSProperties;
    className?: string;
    canvasClassName?: string;
    container?: React.RefObject<HTMLElement>;
    init?: (engine: Engine) => Promise<void>;
    loaded?: (container?: any) => Promise<void>;
  }

  const Particles: ComponentType<IParticlesProps>;
  
  export default Particles;
  export * from 'tsparticles-engine';
  export { loadSlim } from 'tsparticles-slim';
  export { loadFull } from 'tsparticles';
}
