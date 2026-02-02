import './topheartpage.css';
import logo from "../../img/logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// التعديل:
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';

export default function Topheartpage({ cartlist, setcartlist }) {
    const { t } = useTranslation();

    return (
        <>
            <div className="heart-page-top-header">
                <div className='container'>
                    <div className='heart-page-nav-bar'>
                        {/* <div className='heart-page-logo'>
                            <img alt='logo' src={logo} />
                        </div> */}
                        <div className='heart-page-logo'>
                            <div className='logo-text-container'>
                                <h1 className='logo-arabic'>{t('siteName')}</h1>
                                <h2 className='logo-english'>{t('siteNameEnglish')}</h2>
                            </div>
                        </div>
                        {/* <div className='heart-page-nav-bar-center'>
                            <p>{t('siteNameEnglish')} <span>-</span><br /> {t('siteName')}</p>
                        </div> */}
                        <div className='heart-page-icons'>
                            <LanguageSwitcher className='Language-switcher' />
                            <div className='heart-page-home-icon'>
                                <Link to='/'>
                                    <AiFillHome className='heart-page-home-icon-link' />
                                </Link>
                            </div>
                            <div className='heart-page-cart-icon'>
                                <Link to='/cart'>
                                    <FaCartShopping className='heart-page-cart-icon-link' />
                                    <span>{cartlist.length}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='handle-fixed'></div>
        </>
    );
}