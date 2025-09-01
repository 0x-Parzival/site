import React, { useEffect, useRef, CSSProperties } from 'react';

interface TextEffectProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

const TextEffect: React.FC<TextEffectProps> = ({ text, className = '', style = {} }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text into spans
    const letters = Array.from(text).map(char => 
      char === ' ' ? ' ' : `<span>${char}</span>`
    ).join('');
    
    element.innerHTML = letters;
    
    const spans = Array.from(element.querySelectorAll('span'));
    
    // Add hover effect using CSS transitions
    const handleMouseEnter = (e: Event) => {
      spans.forEach((span, index) => {
        if (span.textContent !== ' ') {
          span.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 40}ms`;
          span.style.transform = 'translateZ(6rem)';
          span.style.opacity = '0.75';
          span.style.color = '#00ff9d';
        }
      });
    };
    
    const handleMouseLeave = (e: Event) => {
      spans.forEach(span => {
        if (span.textContent !== ' ') {
          span.style.transition = 'all 0.5s ease-out';
          span.style.transform = '';
          span.style.opacity = '';
          span.style.color = '';
        }
      });
    };
    
    // Add event listeners with proper typing
    element.addEventListener('mouseenter', handleMouseEnter as EventListener);
    element.addEventListener('mouseleave', handleMouseLeave as EventListener);
    
    // Cleanup
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      element.removeEventListener('mouseleave', handleMouseLeave as EventListener);
    };
  }, [text]);

  return (
    <div 
      ref={textRef} 
      className={`text-effect ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#fff',
        textShadow: '0 0 10px rgba(255,255,255,0.5)',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        ...style
      }}
    >
      {text}
    </div>
  );
};

export default TextEffect;
