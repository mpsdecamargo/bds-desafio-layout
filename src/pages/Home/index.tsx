import './styles.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import CarImg from '../../assets/images/car-header1.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={CarImg} alt="Carro" />
        </div>
      </div>
      <div className="home-card bottom-card">
        <div className="button-container">
          <Link to="/products">
            <Button texto={"VER CATÁLOGO"}/>
          </Link>
        </div>
        <div className="bottom-content">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
