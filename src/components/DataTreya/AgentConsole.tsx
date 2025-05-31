import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

const initialLog = [
  "DATA-TREYA Agent Console v3.0",
  "Status: Connected to Neural Core",
  "Awaiting command...",
  "> ",
];

const AgentConsole: React.FC = () => {
  const [log, setLog] = useState<string[]>(initialLog);
  const [command, setCommand] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Placeholder for glitch/scan effects
  const [showEffect, setShowEffect] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const processCommand = (cmd: string) => {
    setIsProcessing(true);
    let response = `Executing: ${cmd}...`;
    let effect: string | null = null;

    if (cmd.startsWith("init --agent=data-treya")) {
      response = "Agent DATA-TREYA initialized. Standby for directives.";
      effect = "glitch";
    } else if (cmd.startsWith("inject --counter=")) {
      const counter = cmd.split("=")[1] || "UNKNOWN_THREAT";
      response = `Counter-measure sequence for ${counter} injected. Monitoring impact.`;
      effect = "scan";
    } else if (cmd.startsWith("analyze --behavior=")) {
      const behavior = cmd.split("=")[1] || "unknown_signature";
      response = `Analyzing behavior: ${behavior}. Cross-referencing with threat database...`;
      effect = "waveform"; // Dog-shaped neon waveform placeholder
    } else if (cmd.trim() === "") {
      response = ""; // No output for empty command
    } else {
      response = `Unknown command: ${cmd}. Type 'help' for available commands.`;
    }

    setLog(prevLog => [...prevLog, cmd, response]);

    if (effect) {
      setShowEffect(effect);
      setTimeout(() => setShowEffect(null), 1000); // Show effect for 1 second
    }

    setTimeout(() => {
      setLog(prevLog => [...prevLog, "> "]);
      setIsProcessing(false);
      setCommand('');
    }, 1000); // Simulate processing time
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isProcessing) {
      processCommand(command);
    }
  };

  useEffect(() => {
    // Auto-scroll to bottom of console
    const consoleOutput = document.getElementById('console-output');
    if (consoleOutput) {
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
  }, [log]);

  return (
    <section className="py-16 px-4 bg-matrix-black">
      <h2 className="text-4xl font-bold text-center mb-8">Agent Console</h2>
      <div className="max-w-4xl mx-auto bg-[#0a0a0a] p-6 rounded-lg border border-neon-green shadow-xl shadow-neon-green/20">
        <div id="console-output" className="h-96 overflow-y-auto mb-4 font-mono text-base pr-2">
          {log.map((line, index) => (
            <div key={index} className={line.startsWith(">") ? "text-neon-green" : "text-neon-green/80"}>
              {line.startsWith(">") ? line : `  ${line}`}
            </div>
          ))}
          {isProcessing && <div className="text-neon-green/70">Processing...</div>}
        </div>
        <div className="flex items-center">
          <span className="text-neon-green mr-2">{">"}</span>
          <input
            type="text"
            value={command}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow bg-transparent text-neon-green focus:outline-none placeholder-neon-green/50"
            placeholder="Enter command..."
            disabled={isProcessing}
          />
        </div>
      </div>
      {/* Placeholder for visual effects */}
      {showEffect === 'glitch' && <div className="fixed inset-0 bg-black bg-opacity-50 text-neon-green text-6xl flex items-center justify-center animate-pulse">GLITCH EFFECT</div>}
      {showEffect === 'scan' && <div className="fixed inset-0 bg-blue-900 bg-opacity-50 text-white text-6xl flex items-center justify-center animate-pulse">SCAN VISUAL</div>}
      {showEffect === 'waveform' && <div className="fixed inset-0 bg-purple-900 bg-opacity-50 text-white text-6xl flex items-center justify-center animate-pulse">DOG-SHAPED NEON WAVEFORM</div>}
    </section>
  );
};

export default AgentConsole;
