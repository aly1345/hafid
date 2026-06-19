import './topcartpage.css';
import logo from "../../img/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
// التعديل:
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';

export default function Topcartpage({ wishlist, setWishlist }) {
    const { t } = useTranslation();

    return (
        <div className='top-cart-page'>
            <div className="cart-page-top-header">
                <div className='container'>
                    <div className='cart-page-nav-bar'>
                        {/* <div className='cart-page-logo'>
                            <img alt='logo' src={logo} />
                        </div> */}

                        <div className='cart-page-logo'>
                            <div className='logo-text-container'>
                                <h1 className='logo-arabic'>{t('siteName')}</h1>
                                <h2 className='logo-english'>{t('siteNameEnglish')}</h2>
                            </div>
                        </div>
                        {/* <div className='cart-page-nav-bar-center'>
                            <p>{t('siteNameEnglish')} <span>-</span><br /> {t('siteName')}</p>
                        </div> */}
                        <div className='cart-page-icons'>
                            <LanguageSwitcher />
                            <div className='heart-cart-page-icon'>
                                <Link to='/heart'>
                                    <FaRegHeart className='heart-cart-page-icon-link' />
                                    <span>{wishlist.length}</span>
                                </Link>
                            </div>
                            <div className='home-cart-page-icon'>
                                <Link to='/'>
                                    <AiFillHome className='home-cart-page-icon-link' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='handle-fixed'></div>
        </div>
    );
}