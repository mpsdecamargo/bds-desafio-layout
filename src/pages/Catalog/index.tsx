import ProductCard from "../../components/ProductCard";
import ProductSearch from "../../components/ProductSearch";

const Catalog = () => {
    return (
        <div className="my-4">
            <ProductSearch />

            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
            </div>
    
        </div>
    );
}

export default Catalog;