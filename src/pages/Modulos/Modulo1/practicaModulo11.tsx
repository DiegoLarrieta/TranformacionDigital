import React from "react";
import CompletarOraciones from "../../../components/PracticeModules/completarOraciones/completarOraciones";

const ModuloPractica11: React.FC = () => {

  const sentences = [
    { text: "El <", placeholder: "_____", answer: "div", continuation: "> permite crear secciones en el código" },
    { text: "El lenguaje ", placeholder: "_____", answer: "CSS", continuation: "nos ayuda a proporcionar estilos para los componentes" },
    { text: "Por otra parte", placeholder: "_____", answer: "javascript", continuation: "nos ayuda a darle lógica a nuestros elementos" },
  ];

  return (
    <div>
      <CompletarOraciones sentences={sentences} />
    </div>
  );
};

export default ModuloPractica11;
