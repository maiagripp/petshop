import './style.css';
import Cookie from '../imagens/Cookie.jpg';
import { Link } from 'react-router-dom';

const Pagina404 = () => {
  return (
    <div className="pagina404">
      <h1 className="title-notfound">Ops... Nossos super-sensores não encontraram nada por aqui</h1>
      <img className="img-cookie" src={Cookie} alt="not-found" />

      <button className="btn-home">
        <Link to="/">Voltar para a home</Link>
      </button>
    </div>
  );
};

export default Pagina404;
