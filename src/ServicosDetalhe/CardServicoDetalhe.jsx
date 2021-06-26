import './style.css';
import { Link } from 'react-router-dom';

const CardServicoDetalhe = ({ nome, preco }) => {
  return (
    <div className="detalhes">
      <div className="card">
        <h3>{nome}</h3>
        <p>{preco}</p>
      </div>
      <Link to={`/servicos/`}>
        <button className="btn-voltar"> Voltar</button>
      </Link>
    </div>
  );
};

export default CardServicoDetalhe;
