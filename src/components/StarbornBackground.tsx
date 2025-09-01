import React, { useEffect, useRef, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const StarbornBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const cellsRef = useRef<{x: number, y: number, vx: number, vy: number}[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Initialize points for stars
  const initPoints = useCallback((width: number, height: number) => {
    const points: Point[] = [];
    const colors = ['#4fc3dc', '#ff2d75', '#00ff9d', '#ff8a00', '#f0f0f0'];
    
    // Create stars
    for (let i = 0; i < 200; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Create cells (points for the cell effect)
    const cells = [];
    for (let i = 0; i < 100; i++) {
      cells.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }
    
    pointsRef.current = points;
    cellsRef.current = cells;
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = canvas;
    const points = pointsRef.current;
    const cells = cellsRef.current;
    
    // Clear canvas with semi-transparent black for trail effect
    ctx.fillStyle = 'rgba(10, 10, 25, 0.1)';
    ctx.fillRect(0, 0, width, height);
    
    // Draw cells
    ctx.strokeStyle = 'rgba(53, 86, 242, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      
      // Update position
      cell.x += cell.vx;
      cell.y += cell.vy;
      
      // Bounce off edges
      if (cell.x < 0 || cell.x > width) cell.vx *= -1;
      if (cell.y < 0 || cell.y > height) cell.vy *= -1;
      
      // Draw connections to nearby cells
      for (let j = i + 1; j < cells.length; j++) {
        const otherCell = cells[j];
        const dx = cell.x - otherCell.x;
        const dy = cell.y - otherCell.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(53, 86, 242, ${1 - distance / 150})`;
          ctx.moveTo(cell.x, cell.y);
          ctx.lineTo(otherCell.x, otherCell.y);
          ctx.stroke();
        }
      }
    }
    
    // Draw stars
    for (const point of points) {
      // Update position
      point.x += point.vx;
      point.y += point.vy;
      
      // Wrap around edges
      if (point.x < 0) point.x = width;
      if (point.x > width) point.x = 0;
      if (point.y < 0) point.y = height;
      if (point.y > height) point.y = 0;
      
      // Draw star
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      ctx.fillStyle = point.color;
      ctx.fill();
      
      // Add glow effect
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, point.radius * 2
      );
      gradient.addColorStop(0, point.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(
        point.x - point.radius * 2,
        point.y - point.radius * 2,
        point.radius * 4,
        point.radius * 4
      );
    }
    
    // Continue animation
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // Handle mouse move for interactive effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  // Setup and cleanup
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints(canvas.width, canvas.height);
    };
    
    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, handleMouseMove, initPoints]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        display: 'block',
        backgroundColor: '#0a0a19'
      }}
    />
  );
};

export default StarbornBackground;
