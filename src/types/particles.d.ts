declare namespace particlesJS {
  interface ISourceOptions {
    particles: {
      number: {
        value: number;
        density: {
          enable: boolean;
          value_area: number;
        };
      };
      color: {
        value: string;
      };
      shape: {
        type: string;
      };
      opacity: {
        value: number;
        random: boolean;
      };
      size: {
        value: number;
        random: boolean;
      };
      line_linked: {
        enable: boolean;
        distance: number;
        color: string;
        opacity: number;
        width: number;
      };
      move: {
        enable: boolean;
        speed: number;
        direction: string;
        random: boolean;
        straight: boolean;
        out_mode: string;
        bounce: boolean;
      };
    };
    interactivity: {
      detect_on: string;
      events: {
        onhover: {
          enable: boolean;
          mode: string;
        };
        onclick: {
          enable: boolean;
          mode: string;
        };
        resize: boolean;
      };
    };
    retina_detect: boolean;
  }

  function load(id: string, config: ISourceOptions): void;
}

declare global {
  interface Window {
    particlesJS: typeof particlesJS;
    pJSDom: Array<{
      pJS: {
        fn: {
          vendors: {
            destroypJS: () => void;
          };
        };
      };
    }>;
  }
}
