import React, { useState } from 'react';
import { message, Input } from 'antd';
import api from '../services/api';

const Importer = (props) => {

  const handleImport = async () => {
    if (url !== "") {
      const batchName = name ? name : `newfile-${Math.floor(Math.random() * 1000 + 1)}`;
      await api.post('/importdata', {
        name: batchName,
        filePath: url
      });
      setName("");
      setUrl("");
      message.info(`Arquivo foi importado: ${url}`);
    } else {
      message.info('Você deve inserir uma URL para o arquivo CSV');
    }
  }

  const [ url, setUrl ] = useState("");
  const [ name, setName ] = useState("");

  const inputStyles = {
    maxWidth: 450,
    display: "block",
    marginBottom: 20,
    marginTop: 20,
  }

  return (
    <div>
      <h1>Importar arquivo CSV</h1>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do grupo de pontos a serem importados"
        style={inputStyles}
      />
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL onde está o arquivo CSV de destino"
        style={inputStyles}
      />
      <button onClick={handleImport}>Importar agora</button>
    </div>
  );
}

export default Importer;
