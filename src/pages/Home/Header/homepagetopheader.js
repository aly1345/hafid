import './homepagetopheader.css';
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../../../hooks/useTranslation';

export default function Homepagetopheader({ sharedState, setSharedState, searchQuery, setSearchQuery, wishlist, setWishlist, cartlist, setcartlist }) {
    const { t, currentLanguage } = useTranslation();

    const handleMainButtonClick = (buttonId) => {
        const buttons = document.querySelectorAll('.btn');
        const dropdownbuttons = document.querySelectorAll('.drop-down-option-button');

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        document.getElementById(buttonId).classList.add('active');
        setSharedState(buttonId);

        if (buttonId === "btn-6") {
            document.getElementsByClassName("drop-down-menu")[0].id = "visible";
        } else {
            document.getElementsByClassName("drop-down-menu")[0].id = "hidden";
            dropdownbuttons.forEach(btn => {
                btn.classList.remove('active');
            });
        }
    };

    const handleDropdownButtonClick = (buttonId) => {
        const dropdownbuttons = document.querySelectorAll('.drop-down-option-button');

        dropdownbuttons.forEach(btn => {
            btn.classList.remove('active');
        });

        document.getElementById(buttonId).classList.add('active');
        setSharedState(buttonId);
        document.getElementsByClassName("drop-down-menu")[0].id = "hidden";
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            setSharedState(`search-${searchQuery.trim()}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    return (
        <>
            <div className="home-page-top-header">
                <div className='home-page-top-header-background'>
                    <div className='home-page-top-header-container'>
                        <div className='home-page-nav-bar'>
                            <div className='home-page-logo'>
                                <div className='logo-text-container'>
                                    <h1 className='logo-arabic'>{t('siteName')}</h1>
                                    <h2 className='logo-english'>{t('siteNameEnglish')}</h2>
                                </div>
                            </div>

                            <div className='home-page-search-bar'>
                                <form onSubmit={handleSearch} className='search-form'>
                                    <div className='search-input-wrapper'>
                                        <input
                                            type="text"
                                            className='search-input'
                                            placeholder={t('searchPlaceholder')}
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            // إضافة خاصية dir بناءً على اللغة
                                            dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
                                        />
                                        <button
                                            type="submit"
                                            className='search-button'
                                            // إضافة كلاس بناءً على اللغة
                                            data-lang={currentLanguage}
                                        >
                                            <FaMagnifyingGlass className='search-icon' />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className='home-page-icons'>
                                <LanguageSwitcher />
                                <div className='home-page-heart-icon'>
                                    <Link to='/heart'>
                                        <FaRegHeart className='home-page-heart-icon-link' />
                                        <span>{wishlist.length}</span>
                                    </Link>
                                </div>
                                <div className='home-page-cart-icon'>
                                    <Link to='/cart'>
                                        <FaCartShopping className='home-page-cart-icon-link' />
                                        <span>{cartlist.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-page-top-header-collections'>
                    <div className='home-page-top-header-collections-container'>
                        <div className='collections-main-name'>
                            <p>{t('categories')}:</p>
                        </div>
                        <div className='collections-option-all collection-1'>
                            <button
                                className='btn active'
                                id='btn-1'
                                onClick={() => handleMainButtonClick('btn-1')}
                            >{t('allProducts')}</button>
                        </div>
                        <div className='collections-option collection-2'>
                            <button
                                className='btn'
                                id='btn-2'
                                onClick={() => handleMainButtonClick('btn-2')}
                            >{t('mensSneakers')}</button>
                        </div>
                        <div className='collections-option collection-3'>
                            <button
                                className='btn'
                                id='btn-3'
                                onClick={() => handleMainButtonClick('btn-3')}
                            >{t('youthSneakers')}</button>
                        </div>
                        <div className='collections-option collection-4'>
                            <button
                                className='btn'
                                id='btn-4'
                                onClick={() => handleMainButtonClick('btn-4')}
                            >{t('mensShoes')}</button>
                        </div>
                        <div className='collections-option collection-5'>
                            <button
                                className='btn'
                                id='btn-5'
                                onClick={() => handleMainButtonClick('btn-5')}
                            >{t('womensShoes')}</button>
                        </div>
                        <div className='collections-option collection-6' id='collection-option-drop-down'>
                            <button
                                className='btn'
                                id='btn-6'
                                onClick={() => handleMainButtonClick('btn-6')}
                            >{t('accessories')}</button>
                            <div className='drop-down-menu' id='hidden'>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-0'
                                        onClick={() => handleDropdownButtonClick('btn-6-0')}
                                    >{t('allAccessories')}</button>
                                </div>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-1'
                                        onClick={() => handleDropdownButtonClick('btn-6-1')}
                                    >{t('backpacks')}</button>
                                </div>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-2'
                                        onClick={() => handleDropdownButtonClick('btn-6-2')}
                                    >{t('crossBags')}</button>
                                </div>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-3'
                                        onClick={() => handleDropdownButtonClick('btn-6-3')}
                                    >{t('wallets')}</button>
                                </div>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-4'
                                        onClick={() => handleDropdownButtonClick('btn-6-4')}
                                    >{t('bracelets')}</button>
                                </div>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-5'
                                        onClick={() => handleDropdownButtonClick('btn-6-5')}
                                    >{t('watches')}</button>
                                </div>
                                <div className='drop-down-menu-option'>
                                    <button
                                        className='drop-down-option-button'
                                        id='btn-6-6'
                                        onClick={() => handleDropdownButtonClick('btn-6-6')}
                                    >{t('shoeCleaners')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='handle-fixed'></div>
        </>
    );
}