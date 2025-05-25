declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    key?: string | number;
    layout?: boolean | 'position' | 'size' | 'preserve-aspect';
    layoutId?: string;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
    onClick?: (event: React.MouseEvent) => void;
  }

  export const motion: {
    [key: string]: React.ForwardRefExoticComponent<
      MotionProps & React.RefAttributes<HTMLElement>
    >;
  };

  export const AnimatePresence: React.FC<{
    children: React.ReactNode;
    initial?: boolean;
    custom?: any;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
  }>;
}
