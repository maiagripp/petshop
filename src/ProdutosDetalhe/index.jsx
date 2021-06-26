import http from '../http/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProdutoDetalhe from './CardProdutoDetalhe';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState({});

  useEffect(() => {
    http.get('produtos/' + id).then((response) => setProduto(response.data));
  }, [id]);

  return <CardProdutoDetalhe nome={produto.nome} preco={produto.preco} />;
};

export default Produto;
