declare module 'vanta/dist/vanta.cells.min' {
  interface VantaEffect {
    setOptions(options: any): void;
    destroy(): void;
    resize(): void;
  }

  interface VantaBase {
    (options: any): VantaEffect;
  }

  const vanta: {
    cells: VantaBase;
  };

  export default vanta;
}
