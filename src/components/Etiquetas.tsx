import React, { useState } from 'react';
import { Code2, Layout, Link as LinkIcon } from 'lucide-react';

interface TagItem {
  number: string;
  tag: string;
  description: string;
}

interface TagData {
  [key: string]: TagItem[];
}

const HtmlTags: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('structure');

  const tagData: TagData = {
    structure: [
      {
        number: '02',
        tag: '<head></head>',
        description: 'Contiene el encabezado del documento. Dentro de este se colocan etiquetas que proporcionan datos sobre la página, por ejemplo, el título de la página. No se coloca ningún tipo de contenido en esta sección.'
      },
      {
        number: '03',
        tag: '<title></title>',
        description: 'Contiene el título de la página, este es el nombre que se despliega en la pestaña de tu navegador.'
      },
      {
        number: '04',
        tag: '<link>',
        description: 'Especifica una conexión con un archivo externo. Un uso común de este elemento es para agregar archivos CSS para estilizar nuestra página.'
      }
    ]
  };

  return (
    <div className="container">
      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'structure' ? 'active' : ''}`}
          onClick={() => setActiveTab('structure')}
        >
          <Layout className="w-5 h-5" />
          <span>Estructura HTML</span>
        </button>
      </div>

      <div className="content-card">
        <div className="tag-list">
          {tagData[activeTab].map((item: TagItem) => (
            <div
              key={item.number}
              className="tag-item"
            >
              <div className="tag-number">{item.number}</div>
              <div className="tag-content">
                <div className="tag-name">{item.tag}</div>
                <p className="tag-description">{item.description}</p>
                
                <div className="example-browser">
                  <div className="browser-header">
                    <div className="browser-dot dot-red"></div>
                    <div className="browser-dot dot-yellow"></div>
                    <div className="browser-dot dot-green"></div>
                  </div>
                  <div className="browser-content">
                    {item.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HtmlTags;