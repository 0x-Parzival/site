import { useEffect, useRef } from "react";

// @ts-ignore
import * as THREE from "three";
// @ts-ignore
import CELLS from "vanta/dist/vanta.cells.min";

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = CELLS({
        el: vantaRef.current,
        THREE: THREE,
        color1: 0x00ffff,    // Cyan
        color2: 0x9b59b6,    // Purple
        size: 1.5,
        speed: 1.2,
        scale: 1.0,
        minHeight: 200.0,
        minWidth: 200.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative w-full h-full">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}