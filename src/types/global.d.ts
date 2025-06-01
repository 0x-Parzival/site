// Type definitions for chart.js
declare module 'chart.js' {
  const Chart: any;
  export default Chart;
}

// Type definitions for react-responsive
declare module 'react-responsive' {
  import * as React from 'react';
  
  interface MediaQueryProps {
    query?: string;
    children?: React.ReactNode | ((matches: boolean) => React.ReactNode);
    [key: string]: any;
  }
  
  const useMediaQuery: (settings: { query: string }) => boolean;
  
  const ReactResponsive: React.FC<MediaQueryProps>;
  
  export default ReactResponsive;
  export { useMediaQuery };
}
