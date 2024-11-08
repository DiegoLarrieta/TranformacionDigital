import React from 'react';
import BotonNavegacion from '../../../components/Button/BotonNavegacion';
import BorregoAvatar from '../../../components/AvatarBorrego';
import MainContent from '../../../components/Main/MainContent';
import CodeSecurityPractice  from '../../../components/CodeSecurityPractice';

const Modulo1Lectura = () => {
  return (
    
      <main className="min-h-screen p-4 bg-background"> 
        <div className="container">
          <BorregoAvatar  etapa="inicio" />
          <CodeSecurityPractice />
        </div>
      </main>
  );
};

export default Modulo1Lectura;
