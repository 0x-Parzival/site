import React, { useState, useRef, useEffect } from 'react';

interface ConsoleSectionProps {
  className?: string;
}

const ConsoleSection: React.FC<ConsoleSectionProps> = () => {
  const [output, setOutput] = useState<string[]>([
    'Welcome to DataTreya Terminal v2.1.0',
    'Type "help" for available commands',
    ''
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    const newOutput = [...output, `datatreya@system:~$ ${command}`];
    
    switch (command.trim().toLowerCase()) {
      case 'help':
        newOutput.push(
          'Available commands:',
          '  help     - Show this help message',
          '  clear    - Clear the terminal',
          '  status   - Show system status',
          '  scan     - Run security scan'
        );
        break;
      case 'clear':
        setOutput(['']);
        setCurrentInput('');
        return;
      case 'status':
        newOutput.push(
          'System Status: OPERATIONAL',
          'Security Level: HIGH',
          'Active Connections: 42'
        );
        break;
      case 'scan':
        newOutput.push(
          'Initiating security scan...',
          'Scanning ports... [OK]',
          'Checking vulnerabilities... [OK]',
          'Scan complete. No threats detected.'
        );
        break;
      case '':
        break;
      default:
        newOutput.push(`Command not found: ${command.trim()}`);
    }
    
    newOutput.push('');
    setOutput(newOutput);
    setCurrentInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <section className="py-16 px-4 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-neon-green">System Console</h2>
      <div className="max-w-5xl mx-auto">
        <div 
          ref={consoleRef}
          className="bg-black border border-neon-green rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm text-neon-green shadow-xl shadow-neon-green/20"
          onClick={() => inputRef.current?.focus()}
        >
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-neon-green">datatreya@system:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-neon-green flex-1 font-mono"
              autoFocus
            />
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-neon-green/70">
        This is a simulated terminal interface. It's distinct from the Agent Console.
      </p>
    </section>
  );
};

export default ConsoleSection;
