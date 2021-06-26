import http from '../http';
import CardServico from '../CardServico';
import './style.css';

import { useEffect, useState } from 'react';

const Servicos = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    http.get('servicos').then((response) => setServicos(response.data));
  }, []);

  return (
    <div className="servicos">
      <h1 className="servicos-title">Serviços</h1>
      <ul>
        {servicos.map((servico) => (
          <CardServico
            key={servico.id}
            id={servico.id}
            nome={servico.nome}
            preco={servico.preco}
          />
        ))}
      </ul>
    </div>
  );
};

export default Servicos;
