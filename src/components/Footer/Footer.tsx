import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Se prohíbe la reproducción total o parcial sin previo y expreso consentimiento por escrito.</p>
        <p>D.R.© Instituto Tecnológico y de Estudios Superiores de Monterrey, México, 2024.</p>
      </div>
      <div className="footer-right">
        <a href="https://tec.mx/es/aviso-privacidad-centro-virtual-aprendizaje" className="footer-link" target="_blank"   >Políticas de Privacidad </a>
        <a href="https://tec.mx/es/politicas-de-privacidad-del-tecnologico-de-monterrey" className="footer-link" target="_blank" >Aviso de Privacidad</a>
        <a href="/creditos" className="footer-link">Créditos</a>
      </div>
    </footer>
  );
};

export default Footer;