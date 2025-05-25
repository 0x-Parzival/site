declare module 'tsparticles-slim' {
  import type { Engine } from 'tsparticles-engine';
  
  export function loadSlim(engine: Engine): Promise<void>;
  
  export * from 'tsparticles-engine';
  export * from 'tsparticles-slim/Options/Interfaces';
}
