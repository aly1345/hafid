import './paypage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Paypage({ cartlist, setcartlist }) {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        whatsapp: ''
    });

    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

    useEffect(() => {
        const savedName = localStorage.getItem('customer_name') || '';
        const savedAddress = localStorage.getItem('customer_address') || '';
        const savedPhone = localStorage.getItem('customer_phone') || '';
        const savedWhatsapp = localStorage.getItem('customer_whatsapp') || '';

        setFormData({
            name: savedName,
            address: savedAddress,
            phone: savedPhone,
            whatsapp: savedWhatsapp
        });
    }, []);

    useEffect(() => {
        if (formData.name.trim() !== '') {
            localStorage.setItem('customer_name', formData.name);
        }
        if (formData.address.trim() !== '') {
            localStorage.setItem('customer_address', formData.address);
        }
        if (formData.phone.trim() !== '') {
            localStorage.setItem('customer_phone', formData.phone);
        }
        if (formData.whatsapp.trim() !== '') {
            localStorage.setItem('customer_whatsapp', formData.whatsapp);
        }
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.address || !formData.phone || !formData.whatsapp) {
            alert(t('requiredField'));
            return;
        }

        const order = {
            customerdata: {
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                whatsapp: formData.whatsapp,
                orderDate: new Date().toISOString()
            },
            cartdata: [...cartlist]
        };

        try {
            const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
            existingOrders.push(order);
            localStorage.setItem('orders', JSON.stringify(existingOrders));
            localStorage.setItem('last_order', JSON.stringify(order));

            setIsOrderSubmitted(true);
            alert(`${t('orderSuccess')} ${t('orderNumber')}: ${Date.now()}`);

            setcartlist([]);
            localStorage.removeItem('cart');

        } catch (error) {
            console.error('Error saving order:', error);
            alert(t('orderError'));
        }
    };

    return (
        <div className="pay-page">
            <div className='note'>
                <p>{t('cashOnDelivery')}</p>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>{t('fullName')}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('enterFullName')}
                        required
                        disabled={isOrderSubmitted}
                    />
                    <label>{t('address')}</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={t('enterAddress')}
                        required
                        disabled={isOrderSubmitted}
                    />
                    <label>{t('phone')}</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('enterPhone')}
                        required
                        disabled={isOrderSubmitted}
                    />
                    <label>{t('whatsapp')}</label>
                    <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder={t('enterWhatsapp')}
                        required
                        disabled={isOrderSubmitted}
                    />

                    <div className='form-submit'>
                        <button
                            type="submit"
                            className={`input-submit ${isOrderSubmitted ? 'submitted' : ''}`}
                            disabled={isOrderSubmitted || cartlist.length === 0}
                        >
                            {isOrderSubmitted ? t('orderCompleted') : t('completePurchase')}
                        </button>
                    </div>
                </form>
            </div>
            <div className='go'>
                <div className='go-text'>
                    <p>{t('goToHomePage')}</p>
                </div>
                <div className='go-button'>
                    <Link to="/">
                        <button>{t('go')}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}