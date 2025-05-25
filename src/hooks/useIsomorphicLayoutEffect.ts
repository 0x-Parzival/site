import { useEffect, useLayoutEffect } from 'react';

// Use useLayoutEffect on the client side and useEffect during SSR to avoid warnings
const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
