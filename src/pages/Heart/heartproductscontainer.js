import "./heartproductscontainer.css";
import Heartproduct from "./heartproduct";
import products from "../../productsdata";
import { useTranslation } from '../../hooks/useTranslation';

export default function Heartproductscontainer({ wishlist, setWishlist }) {
    const { t } = useTranslation();

    const filteredProducts = products.filter(product =>
        wishlist && wishlist.includes(product.id)
    );

    if (filteredProducts.length === 0) {
        return (
            <div className="heart-product-container">
                <div className="container">
                    <div className="no-favorites-message">
                        <h3>{t('emptyWishlist')}</h3>
                        <p>{t('addToWishlistMessage')}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="heart-product-container">
            <div className="container">
                <div className="heart-products-container">
                    {filteredProducts.map(product => (
                        <Heartproduct
                            key={product.id}
                            data={product}
                            wishlist={wishlist}
                            setWishlist={setWishlist}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}