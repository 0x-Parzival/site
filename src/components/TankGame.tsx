import React, { useEffect, useRef, useState, useCallback } from 'react';
import './TankGame.css';

interface Bullet {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
}

const TankGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const tankRef = useRef<HTMLDivElement>(null);
  const cannonRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const bulletIdRef = useRef(0);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Track cursor/touch position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile) return;
      
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      setCursorPosition({ x, y });
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!isMobile || !cannonRef.current || !tankRef.current) return;
      
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      fireBullet(x, y);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isMobile]);

  // Auto-fire on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const autoFire = setInterval(() => {
      if (cannonRef.current && tankRef.current) {
        fireBullet(cursorPosition.x, cursorPosition.y);
      }
    }, 5000);
    
    return () => clearInterval(autoFire);
  }, [cursorPosition, isMobile]);

  // Update cannon rotation based on cursor position
  useEffect(() => {
    if (!cannonRef.current || !tankRef.current) return;
    
    const cannon = cannonRef.current;
    const tank = tankRef.current;
    const tankRect = tank.getBoundingClientRect();
    
    // Calculate angle between tank and cursor
    const tankCenterX = tankRect.left + tankRect.width / 2;
    const tankBottomY = tankRect.bottom;
    
    const dx = cursorPosition.x - tankCenterX;
    const dy = cursorPosition.y - tankBottomY;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    
    // Update cannon rotation
    cannon.style.transform = `rotate(${angle}deg)`;
  }, [cursorPosition]);
  
  // Fire a bullet
  const fireBullet = useCallback((targetX: number, targetY: number) => {
    if (!tankRef.current) return;
    
    const tank = tankRef.current;
    const tankRect = tank.getBoundingClientRect();
    const tankCenterX = tankRect.left + tankRect.width / 2;
    const tankBottomY = tankRect.bottom;
    
    const dx = targetX - tankCenterX;
    const dy = targetY - tankBottomY;
    const angle = Math.atan2(dy, dx);
    
    const bullet: Bullet = {
      id: bulletIdRef.current++,
      x: tankCenterX,
      y: tankBottomY,
      angle,
      speed: 10,
    };
    
    setBullets(prev => [...prev, bullet]);
  }, []);
  
  // Create bullet hit effect
  const createHitEffect = useCallback((x: number, y: number) => {
    if (!gameContainerRef.current) return;
    
    const hit = document.createElement('div');
    hit.className = 'bullet-hit';
    hit.style.left = `${x}px`;
    hit.style.top = `${y}px`;
    gameContainerRef.current.appendChild(hit);
    
    // Remove the hit effect after animation
    setTimeout(() => {
      hit.remove();
    }, 1000);
  }, []);

  // Update bullet positions and check for hits
  useEffect(() => {
    const BULLET_HIT_DISTANCE = 30; // Pixels from cursor to count as a hit
    
    const moveBullets = () => {
      setBullets(prevBullets => {
        const newBullets = [];
        
        for (const bullet of prevBullets) {
          const newX = bullet.x + Math.cos(bullet.angle) * bullet.speed;
          const newY = bullet.y + Math.sin(bullet.angle) * bullet.speed;
          
          // Check if bullet is off screen
          if (
            newX < 0 || 
            newX > window.innerWidth || 
            newY < 0 || 
            newY > window.innerHeight
          ) {
            continue;
          }
          
          // Check for cursor hit
          const dx = newX - cursorPosition.x;
          const dy = newY - cursorPosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < BULLET_HIT_DISTANCE) {
            createHitEffect(newX, newY);
            continue; // Remove bullet on hit
          }
          
          newBullets.push({
            ...bullet,
            x: newX,
            y: newY,
          });
        }
        
        return newBullets;
      });
      
      animationFrameId = requestAnimationFrame(moveBullets);
    };
    
    let animationFrameId = requestAnimationFrame(moveBullets);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPosition, createHitEffect]);

  useEffect(() => {
    if (!gameContainerRef.current || !cannonRef.current) return;

    const gameContainer = gameContainerRef.current;
    const cannon = cannonRef.current;
    const tank = tankRef.current;
    if (!tank) return;


    // Fire missile on click
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      
      const missile = document.createElement('div');
      missile.className = 'missile';
      gameContainer.appendChild(missile);

      // Start at cannon base
      const rect = cannon.getBoundingClientRect();
      const containerRect = gameContainer.getBoundingClientRect();
      
      const startX = rect.left - containerRect.left + rect.width / 2;
      const startY = rect.top - containerRect.top + rect.height;
      
      missile.style.left = `${startX}px`;
      missile.style.top = `${startY}px`;

      // Target position relative to container
      const targetX = e.clientX - containerRect.left;
      const targetY = e.clientY - containerRect.top;

      const dx = targetX - startX;
      const dy = targetY - startY;
      const steps = 50;
      let count = 0;

      const interval = setInterval(() => {
        count++;
        missile.style.left = startX + (dx * count) / steps + 'px';
        missile.style.top = startY + (dy * count) / steps + 'px';

        if (count >= steps) {
          clearInterval(interval);
          missile.remove();
          explode(targetX, targetY, gameContainer);
        }
      }, 10);
    };

  }, []);

  const explode = (x: number, y: number, container: HTMLElement) => {
    const blast = document.createElement('div');
    blast.className = 'explosion';
    blast.style.left = `${x - 15}px`;
    blast.style.top = `${y - 15}px`;
    container.appendChild(blast);
    setTimeout(() => blast.remove(), 400);
  };

  // Only show on home page
  const isHomePage = window.location.pathname === '/';
  
  if (!isHomePage) return null;
  
  return (
    <>
      <div ref={cursorRef} className="rocket-cursor"></div>
      <div ref={gameContainerRef} className="tank-game-container home-page">
        <div ref={tankRef} id="tank">
          <div ref={cannonRef} id="cannon"></div>
        </div>
        {bullets.map(bullet => (
          <div
            key={bullet.id}
            className="bullet"
            style={{
              left: `${bullet.x}px`,
              top: `${bullet.y}px`,
              transform: `translate(-50%, -50%) rotate(${bullet.angle}rad)`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default TankGame;
