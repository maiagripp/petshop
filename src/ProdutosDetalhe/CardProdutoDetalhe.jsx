import './style.css';
import { Link } from 'react-router-dom';

const CardProdutoDetalhe = ({ nome, preco }) => {
  return (
    <div className="detalhes">
      <div className="card">
        <h3>{nome}</h3>
        <p>R$ {preco}</p>
      </div>
      <Link to={`/produtos/`}>
        <button className="btn-voltar"> Voltar</button>
      </Link>
    </div>
  );
};

export default CardProdutoDetalhe;
