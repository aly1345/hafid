import "./cartproduct.css";
import { Link } from "react-router-dom";
import { useTranslation } from '../../hooks/useTranslation';

export default function Cartproduct({ product, quantity, onIncrease, onDecrease, onRemove }) {
    const { t } = useTranslation();
    const pLink = `/product/${product.id}`;

    return (
        <div className="cart-product">
            <div className="cart-product-remove">
                <button onClick={onRemove} className="remove-btn" title={t('remove')}>×</button>
            </div>
            <div className="cart-product-img">
                <Link to={pLink}>
                    <img
                        src={product.imgs?.[0] || "default-image.jpg"}
                        alt={product.name || t('productName')}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "default-image.jpg";
                        }}
                    />
                </Link>
            </div>
            <div className="cart-product-info">
                <div className="cart-product-name-price">
                    <div className="cart-product-name">
                        <p>{product.name || t('productName')}</p>
                    </div>
                    <div className="cart-product-price">
                        <p><span>{t('currency')}</span>{product.selectedPrice || product.global_price || "0"}</p>
                    </div>
                </div>
                <div className="cart-product-content-number">
                    <div className="cart-product-content">
                        <p>{`${t('color')} = ${product.selectedColor || t('notSpecified')}`}</p>
                        <p>{`${t('size')} = ${product.selectedSize || t('notSpecified')}`}</p>
                    </div>
                    <div className="cart-product-number">
                        <button onClick={onIncrease} title={t('increase')}>+</button>
                        <p>{quantity || 1}</p>
                        <button onClick={onDecrease} title={t('decrease')}>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
