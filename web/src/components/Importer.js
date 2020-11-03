import React from 'react';
import { message } from 'antd';

const Importer = (props) => {
  const handleImport = () => {
    message.info("Arquivo foi importado!");
  }

  return (
    <div>
      <h1>Importar arquivo CSV</h1>
      <button onClick={handleImport}>Importar agora</button>
    </div>
  );
}

export default Importer;
