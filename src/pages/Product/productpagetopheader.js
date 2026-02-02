import './productpagetopheader.css';
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
// التعديل:
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';

export default function Productpagetopheader({ wishlist, setWishlist, cartlist, setcartlist }) {
    const { t } = useTranslation();

    return (
        <>
            <div className="product-page-top-header">
                <div className='product-page-container'>
                    <div className='product-page-nav-bar'>
                        <div className='product-page-logo'>
                            <div className='logo-text-container'>
                                <h1 className='logo-arabic'>{t('siteName')}</h1>
                                <h2 className='logo-english'>{t('siteNameEnglish')}</h2>
                            </div>
                        </div>
                        {/* <div className='product-page-nav-bar-center'>
                            <p>{t('siteNameEnglish')} <span>-</span><br /> {t('siteName')}</p>
                        </div> */}
                        <div className='product-page-icons'>
                            <LanguageSwitcher />
                            <div className='product-page-home-icon'>
                                <Link to='/'>
                                    <AiFillHome className='product-page-home-icon-link' />
                                </Link>
                            </div>
                            <div className='product-page-heart-icon'>
                                <Link to='/heart'>
                                    <FaRegHeart className='product-page-heart-icon-link' />
                                    <span>{wishlist.length}</span>
                                </Link>
                            </div>
                            <div className='product-page-cart-icon'>
                                <Link to='/cart'>
                                    <FaCartShopping className='product-page-cart-icon-link' />
                                    <span>{cartlist.length}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-page-handle-fixed'></div>
        </>
    );
}