import React from 'react';
import { Code, Database, Laptop, Binary, Cpu, Grid, Hash, Terminal, Blocks, Braces, CircuitBoard, Webhook, LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  icon: LucideIcon;
  delay: number;
  x: number;
  y: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay, x, y }) => (
  <div 
    className="absolute text-purple-600 pointer-events-none"
    style={{
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      left: `${x}vw`,
      top: `${y}vh`,
      opacity: '0.15',
    }}
  >
    <Icon className="w-6 h-6" />
  </div>
);

const IconPattern: React.FC = () => {
  const icons: LucideIcon[] = [Code, Database, Laptop, Binary, Cpu, Grid, Hash, Terminal, Blocks, Braces, CircuitBoard, Webhook];
  
  const createPatternPositions = () => {
    const positions: Array<{
      x: number;
      y: number;
      delay: number;
      icon: LucideIcon;
    }> = [];
    
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 10; j++) {
        positions.push({
          x: (j * 10) + (Math.random() * 5),
          y: (i * 12.5) + (Math.random() * 5),
          delay: Math.random() * 5,
          icon: icons[Math.floor(Math.random() * icons.length)]
        });
      }
    }
    return positions;
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {createPatternPositions().map((pos, index) => (
        <FloatingIcon
          key={index}
          icon={pos.icon}
          delay={pos.delay}
          x={pos.x}
          y={pos.y}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(2deg);
            }
            75% {
              transform: translateY(8px) rotate(-2deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default IconPattern;