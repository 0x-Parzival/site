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
    };
    background?: {
      color: {
        value: string;
      };
    };
    fpsLimit?: number;
    interactivity?: {
      events?: {
        onHover?: {
          enable: boolean;
          mode: string;
        };
        resize?: boolean | {
          enable: boolean;
          delay?: number;
        };
      };
      modes?: {
        repulse?: {
          distance: number;
          duration: number;
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
      };
      shape?: {
        type: string;
      };
      size?: {
        value: number | { min: number; max: number };
      };
    };
    detectRetina?: boolean;
    [key: string]: any;
  }

  export * from 'tsparticles-engine/types/Enums';
  export * from 'tsparticles-engine/types/Options/Interfaces';
}
