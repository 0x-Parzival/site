import React, { useEffect, useRef } from 'react';
// Attempt to import xterm dynamically to avoid SSR issues if not strictly necessary server-side
// For a Next.js app, dynamic import is often preferred for client-side libraries
// import { Terminal } from 'xterm';
// import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css'; // Import xterm.css

const ConsoleSection: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<any>(null); // Using 'any' for Terminal type to simplify if dynamic import is tricky

  useEffect(() => {
    // Dynamically import Terminal and FitAddon only on the client-side
    Promise.all([
      import('@xterm/xterm').then(mod => mod.Terminal),
      import('@xterm/addon-fit').then(mod => mod.FitAddon)
    ]).then(([Terminal, FitAddon]) => {
      if (terminalRef.current && !xtermRef.current) {
        const term = new Terminal({
          cursorBlink: true,
          theme: {
            background: '#0d0d0d',
            foreground: '#39ff14',
            cursor: '#39ff14',
            selectionBackground: '#39ff14',
            selectionForeground: '#0d0d0d',
          },
          fontFamily: 'Fira Code, monospace',
          fontSize: 14,
          rows: 20,
        });

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);

        term.open(terminalRef.current);
        fitAddon.fit();

        // Example usage:
        term.writeln('DATA-TREYA System Log Initialized...');
        term.writeln('Welcome to the Matrix Console.');
        term.writeln('Monitoring network traffic...');
        term.writeln('');
        term.prompt = () => {
          term.write('\r\n$ ');
        };
        term.prompt();

        term.onKey((e: { key: string; domEvent: KeyboardEvent }) => {
          const ev = e.domEvent;
          if (ev.key === 'Enter') {
            // For simplicity, this example doesn't handle command history or complex input
            // It just echoes the command and gives a generic response
            // term.write('
'); // New line already handled by prompt
            // This is a very basic echo, real command processing would be needed
            term.writeln(`> Command executed (not really)`);
            term.prompt();
          } else if (ev.key === 'Backspace') {
            if (term.buffer.active.cursorX > 2) { // Prevent deleting the prompt
              term.write('\b \b');
            }
          } else if (!ev.ctrlKey && !ev.altKey && !ev.metaKey) {
            term.write(e.key);
          }
        });

        xtermRef.current = term; // Store terminal instance

        // Handle resize
        const handleResize = () => {
          fitAddon.fit();
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          term.dispose();
          xtermRef.current = null;
        };
      }
    }).catch(error => {
      console.error("Failed to load xterm.js modules", error);
      if (terminalRef.current) {
        terminalRef.current.innerText = "Error loading terminal. Please ensure xterm.js is installed and working.";
      }
    });
  }, []);

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-neon-green">System Console (xterm.js)</h2>
      <div className="max-w-5xl mx-auto">
        <div ref={terminalRef} className="border border-neon-green rounded-lg overflow-hidden shadow-xl shadow-neon-green/20"></div>
      </div>
      <p className="text-center mt-4 text-neon-green/70">
        This is a simulated terminal using xterm.js. It's distinct from the Agent Console.
      </p>
    </section>
  );
};

export default ConsoleSection;
