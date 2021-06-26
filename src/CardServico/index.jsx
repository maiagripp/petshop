import './style.css';
import { Link } from 'react-router-dom';

const CardServico = ({ nome, preco, id }) => {
  return (
    <div className="cardTodos">
      <h3>{nome}</h3>
      <p>{preco}</p>
      <Link to={`/servicos/${id}`}>Ver detalhes</Link>
    </div>
  );
};

export default CardServico;
