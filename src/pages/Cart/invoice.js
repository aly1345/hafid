import "./invoice.css";
// التعديل:
import { useTranslation } from '../../hooks/useTranslation';

export default function Invoice({ cartlist, setcartlist }) {
    const { t } = useTranslation();
    let total = 0;

    let myinvoicerow = cartlist.map((product, index) => {
        let productname = product.name;
        let priceString = String(product.price || "0");
        let productprice = parseFloat(priceString.replace(/[^\d.]/g, '')) || 0;
        let productquantity = Number(product.quantity || 1);
        let totalprice = productprice * productquantity;
        total += totalprice;

        return (
            <tr key={product.uniqueId || index}>
                <td>{productname}</td>
                <td>{productprice.toFixed(2)} {t('currency')}</td>
                <td>{productquantity}</td>
                <td>{totalprice.toFixed(2)} {t('currency')}</td>
            </tr>
        );
    });

    return (
        <div className="invoice">
            <div className="invoice-table">
                <table>
                    <caption>{t('invoice')}</caption>
                    <thead>
                        <tr>
                            <th>{t('product')}</th>
                            <th>{t('price')}</th>
                            <th>{t('quantity')}</th>
                            <th>{t('totalPrice')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myinvoicerow}
                        <tr className="total-row">
                            <td colSpan="3">{t('total')}</td>
                            <td>{total.toFixed(2)} {t('currency')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}