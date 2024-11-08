// MainContent.tsx
import React from 'react';
import './MainContent.css';

const MainContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-content">
      {children} {/* Renderiza los children */}
    </div>
  );
};

export default MainContent;
