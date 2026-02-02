import "./heartproduct.css";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// التعديل:
import { useTranslation } from '../../hooks/useTranslation';

export default function Heartproduct({ data, wishlist, setWishlist }) {
    const { t } = useTranslation();
    const proLink = `/product/${data.id}`;

    const handleRemoveFromWishlist = () => {
        if (wishlist && setWishlist) {
            const updatedWishlist = wishlist.filter(id => id !== data.id);
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        }
    };

    return (
        <div className="heart-product">
            <div className="heart-product-img">
                <Link to={proLink}>
                    <img src={data.mainimg} alt={t('viewProduct')} />
                </Link>
            </div>
            <div className="heart-product-info">
                <div className="heart-product-name-price">
                    <div className="heart-product-name">
                        <p>{data.name}</p>
                    </div>
                    <div className="heart-product-price">
                        <p> <span>{t('currency')}</span>{data.price}</p>
                    </div>
                </div>
                <div className="heart-product-content-clicked">
                    <div className="heart-product-content">
                        <p>{data.content}</p>
                    </div>
                    <div className="heart-product-clicked">
                        <div className="heart-clicked" onClick={handleRemoveFromWishlist} title={t('remove')}>
                            <FaRegHeart className="heart-clicked-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}