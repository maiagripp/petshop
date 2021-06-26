import http from '../http/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardServicoDetalhe from './CardServicoDetalhe';

const Servico = () => {
  const { id } = useParams();
  const [servico, setServico] = useState({});

  useEffect(() => {
    http.get('servicos/' + id).then((response) => setServico(response.data));
  }, [id]);

  return (
    <CardServicoDetalhe
      nome={servico.nome}
      preco={servico.preco}
      id={servico.id}
    />
  );
};

export default Servico;
