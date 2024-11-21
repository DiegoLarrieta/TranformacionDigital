import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContent from '../Main/MainContent';
import ProgressBar from '../ProgressBar/ProgressBar';
import { routes } from '../../routes/AppRoutes';

const ModulosLayout: React.FC = () => {
  return (
    <MainContent>
      {/* Renderiza el contenido dinámico */}
      <div className="modulos-content">
        <Outlet />
      </div>
      {/* Barra de progreso por debajo del contenido */}
      <ProgressBar routes={routes} />
    </MainContent>
  );
};

export default ModulosLayout;
