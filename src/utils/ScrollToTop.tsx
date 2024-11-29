import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
      //console.log(`Navigated to: ${pathname}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // Cambia a 'smooth' si necesitas animación
    });
  }, [pathname]); // Ejecuta cada vez que cambia la ruta

  return <>{children}</>;
};

export default ScrollToTop;
