import Button from '../Button';
import Input from '../Input';
import './styles.css';

const ProductSearch = () => {

    return (
        <div className="base-card">
            <div className="search-container">
                <div className="search-button-container">
                    <Button texto={"BUSCAR"} />
                </div>
                <div className="input-container">
                    <Input />
                </div>
            </div>
        </div>

    );
}

export default ProductSearch;
