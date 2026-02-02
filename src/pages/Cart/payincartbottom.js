import "./payincartbottom.css";
import { Link } from "react-router-dom";
import { useTranslation } from '../../hooks/useTranslation';

export default function Payincartbottom() {
    const { t } = useTranslation();

    return (
        <div className="pay-in-cart-bottom">
            <div className="pay-in-cart-bottom-text">
                <p>{t('goToPayment')}</p>
            </div>
            <div className="pay-in-cart-bottom-button">
                <Link to="/pay">
                    <button>{t('complete')}</button>
                </Link>
            </div>
        </div>
    );
};