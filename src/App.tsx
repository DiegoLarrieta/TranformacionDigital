
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'; // Asegúrate de ajustar la ruta de importación
import Footer from './components/Footer/Footer';
import MainContent from './components/Main/MainContent';
import AppRoutes from './routes/AppRoutes'; // Importa las rutas exportadas
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
          <MainContent>
            <AppRoutes /> {/* Aquí se renderizarán las rutas */}
          </MainContent>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
