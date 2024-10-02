import React from 'react';

const Contactanos: React.FC = () => {
  return (
    <div>
      <h1>Contáctanos</h1>
      <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contactanos;
