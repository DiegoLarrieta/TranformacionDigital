import React from "react";
import LetraPorLetra from "../../../components/PracticeModules/letraPorLetra/letraPorLetra";
import BotonNavegacion from "../../../components/Button/BotonNavegacion";

const ModuloPractica12: React.FC = () => {

    const preguntas = [
        { question: "¿Qué protocolo utiliza un servidor web?", answer: "HTTPS" },
        { question: "Conjunto de herramientas y librerías que ayudan a los desarrolladores a crear aplicaciones web de manera más rápida.", answer: "FRAMEWORK" },
    ];

  return (
    <div>
      <LetraPorLetra questions={preguntas} />
    </div>
  );
};

export default ModuloPractica12;
