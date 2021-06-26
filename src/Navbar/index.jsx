import { Link } from 'react-router-dom';
import './style.css';
import paw from '../imagens/paw.png';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className="logo" src={paw} alt="paw" />
          </Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastre-se</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
