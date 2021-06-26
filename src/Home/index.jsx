import './style.css';
import Lola from '../imagens/Lola.png';

const Home = () => {
  return (
    <div className="home">
      <h1>PetFeliz</h1>

      <p>Nós somos a PetFeliz.</p>
      <p>
        Temos os melhores produtos para fazer do seu melhor amigo, um PETFELIZ.
      </p>

      <img className="img-lola" src={Lola} alt="lola" />
    </div>
  );
};

export default Home;
