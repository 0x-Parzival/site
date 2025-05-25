// Type definitions for tsparticles

declare module 'tsparticles-engine' {
  export interface Engine {
    // Add Engine interface properties if needed
  }

  export interface Container {
    // Add Container interface properties if needed
  }

  export interface ISourceOptions {
    fullScreen?: {
      enable: boolean;
      zIndex?: number;
    };
    background?: {
      color: {
        value: string;
      };
    };
    fpsLimit?: number;
    interactivity?: {
      detectsOn?: string;
      events?: {
        onHover?: {
          enable: boolean;
          mode: string;
        };
        onClick?: {
          enable: boolean;
          mode: string;
        };
        resize?: boolean | {
          enable: boolean;
          delay?: number;
        };
      };
      modes?: {
        grab?: {
          distance: number;
          lineLinked?: {
            opacity: number;
          };
        };
        repulse?: {
          distance: number;
          duration: number;
        };
        push?: {
          particles_nb: number;
        };
      };
    };
    particles?: {
      color?: {
        value: string;
      };
      links?: {
        color: string;
        distance: number;
        enable: boolean;
        opacity: number;
        width: number;
      };
      move?: {
        direction: string;
        enable: boolean;
        outModes?: {
          default: string;
        };
        random: boolean;
        speed: number;
        straight: boolean;
      };
      number?: {
        density?: {
          enable: boolean;
          value_area: number;
        };
        value: number;
      };
      opacity?: {
        value: number;
        random?: boolean;
        animation?: {
          enable: boolean;
          speed: number;
          minimumValue: number;
          sync: boolean;
        };
      };
      shape?: {
        type: string;
      };
      size?: {
        value: number | { min: number; max: number };
        random?: boolean;
        animation?: {
          enable: boolean;
          speed: number;
          minimumValue: number;
          sync: boolean;
        };
      };
    };
    detectRetina?: boolean;
    [key: string]: any;
  }
}

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
  export { loadFull } from 'tsparticles';
  export { loadSlim } from 'tsparticles-slim';
}
