import React, { useEffect, useState } from 'react';
import GlobalCursor from '../components/GlobalCursor';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window !== 'undefined') {
      setMounted(true);
      
      // Add a class to the body when cursor is active
      document.body.classList.add('custom-cursor-active');
      
      return () => {
        document.body.classList.remove('custom-cursor-active');
      };
    }
  }, []);

  return (
    <>
      {mounted && <GlobalCursor />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
