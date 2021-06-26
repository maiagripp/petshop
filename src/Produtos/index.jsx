import http from '../http';
import './style.css';
import CardProduto from '../CardProduto';

import { useEffect, useState } from 'react';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    http.get('produtos').then((response) => setProdutos(response.data));
  }, []);

  return (
    <div className="produtos">
      <h1 className="produtos-title">Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
