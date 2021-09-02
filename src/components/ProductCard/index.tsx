import Button from '../Button';
import CarCard from '../../assets/images/car-card.png';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="product-card">
        <div className="card-top-container">
          <img src={CarCard} alt="Nome do carro" />
        </div>
        <div className="card-bottom-container">
          <h1>Audi Supra TT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, omnis?
          </p>
          <div className="product-button-container">
            <Button texto={'COMPRAR'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
