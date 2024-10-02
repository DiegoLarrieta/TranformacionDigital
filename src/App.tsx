//Componente principal que renderiza las paginas
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MisCursos from './components/MisCursos/MisCursos';
import Objetivos from './components/Objetivos/Objetivos';
import Politicas from './components/Politicas/Politicas';
import Contactanos from './components/Contactanos/Contactanos';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/mis-cursos" element={<MisCursos />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </Router>
  );
}

export default App;
