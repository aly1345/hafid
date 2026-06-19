// import './homepagetopheader.css';
// import { FaRegHeart } from "react-icons/fa";
// import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import LanguageSwitcher from '../../../components/LanguageSwitcher/LanguageSwitcher';
// import { useTranslation } from '../../../hooks/useTranslation';

// export default function Homepagetopheader({ sharedState, setSharedState, searchQuery, setSearchQuery, wishlist, setWishlist, cartlist, setcartlist }) {
//     const { t, currentLanguage } = useTranslation();

//     const handleMainButtonClick = (buttonId) => {
//         const buttons = document.querySelectorAll('.btn');
//         const dropdownbuttons = document.querySelectorAll('.drop-down-option-button');

//         buttons.forEach(btn => {
//             btn.classList.remove('active');
//         });

//         document.getElementById(buttonId).classList.add('active');
//         setSharedState(buttonId);

//         // للاكسسوارات (btn-7)
//         if (buttonId === "btn-7") {
//             document.getElementsByClassName("drop-down-menu")[0].id = "visible";
//         }
//         // لكوتشي اطفالي (btn-6) - ليس له قائمة منسدلة
//         else if (buttonId === "btn-6") {
//             document.getElementsByClassName("drop-down-menu")[0].id = "hidden";
//             dropdownbuttons.forEach(btn => {
//                 btn.classList.remove('active');
//             });
//         }
//         else {
//             document.getElementsByClassName("drop-down-menu")[0].id = "hidden";
//             dropdownbuttons.forEach(btn => {
//                 btn.classList.remove('active');
//             });
//         }
//     };

//     const handleDropdownButtonClick = (buttonId) => {
//         const dropdownbuttons = document.querySelectorAll('.drop-down-option-button');

//         dropdownbuttons.forEach(btn => {
//             btn.classList.remove('active');
//         });

//         document.getElementById(buttonId).classList.add('active');
//         setSharedState(buttonId);
//         document.getElementsByClassName("drop-down-menu")[0].id = "hidden";
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim()) {
//             setSharedState(`search-${searchQuery.trim()}`);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleSearch(e);
//         }
//     };

//     return (
//         <>
//             <div className="home-page-top-header">
//                 <div className='home-page-top-header-background'>
//                     <div className='home-page-top-header-container'>
//                         <div className='home-page-nav-bar'>
//                             <div className='home-page-logo'>
//                                 <div className='logo-text-container'>
//                                     <h1 className='logo-arabic'>{t('siteName')}</h1>
//                                     <h2 className='logo-english'>{t('siteNameEnglish')}</h2>
//                                 </div>
//                             </div>

//                             <div className='home-page-search-bar'>
//                                 <form onSubmit={handleSearch} className='search-form'>
//                                     <div className='search-input-wrapper'>
//                                         <input
//                                             type="text"
//                                             className='search-input'
//                                             placeholder={t('searchPlaceholder')}
//                                             value={searchQuery}
//                                             onChange={(e) => setSearchQuery(e.target.value)}
//                                             onKeyPress={handleKeyPress}
//                                             dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
//                                         />
//                                         <button
//                                             type="submit"
//                                             className='search-button'
//                                             data-lang={currentLanguage}
//                                         >
//                                             <FaMagnifyingGlass className='search-icon' />
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>

//                             <div className='home-page-icons'>
//                                 <LanguageSwitcher />
//                                 <div className='home-page-heart-icon'>
//                                     <Link to='/heart'>
//                                         <FaRegHeart className='home-page-heart-icon-link' />
//                                         <span>{wishlist.length}</span>
//                                     </Link>
//                                 </div>
//                                 <div className='home-page-cart-icon'>
//                                     <Link to='/cart'>
//                                         <FaCartShopping className='home-page-cart-icon-link' />
//                                         <span>{cartlist.length}</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='home-page-top-header-collections'>
//                     <div className='home-page-top-header-collections-container'>
//                         <div className='collections-main-name'>
//                             <p>{t('categories')}:</p>
//                         </div>

//                         {/* زر كل المنتجات */}
//                         <div className='collections-option-all collection-1'>
//                             <button
//                                 className='btn active'
//                                 id='btn-1'
//                                 onClick={() => handleMainButtonClick('btn-1')}
//                             >{t('allProducts')}</button>
//                         </div>

//                         {/* كوتشي رجالي */}
//                         <div className='collections-option collection-2'>
//                             <button
//                                 className='btn'
//                                 id='btn-2'
//                                 onClick={() => handleMainButtonClick('btn-2')}
//                             >{t('mensSneakers')}</button>
//                         </div>

//                         {/* كوتشي شبابي وبناتي */}
//                         <div className='collections-option collection-3'>
//                             <button
//                                 className='btn'
//                                 id='btn-3'
//                                 onClick={() => handleMainButtonClick('btn-3')}
//                             >{t('youthSneakers')}</button>
//                         </div>

//                         {/* كوتشي اطفالي - قسم رئيسي جديد */}
//                         <div className='collections-option collection-6' id='collection-option-children'>
//                             <button
//                                 className='btn'
//                                 id='btn-6'
//                                 onClick={() => handleMainButtonClick('btn-6')}
//                             >{t('kidsSneakers')}</button>
//                         </div>

//                         {/* حذاء رجالي */}
//                         <div className='collections-option collection-4'>
//                             <button
//                                 className='btn'
//                                 id='btn-4'
//                                 onClick={() => handleMainButtonClick('btn-4')}
//                             >{t('mensShoes')}</button>
//                         </div>

//                         {/* حذاء نسائي */}
//                         <div className='collections-option collection-5'>
//                             <button
//                                 className='btn'
//                                 id='btn-5'
//                                 onClick={() => handleMainButtonClick('btn-5')}
//                             >{t('womensShoes')}</button>
//                         </div>

//                         {/* الاكسسوارات - قسم رئيسي جديد برقم 7 */}
//                         <div className='collections-option collection-7' id='collection-option-drop-down'>
//                             <button
//                                 className='btn'
//                                 id='btn-7'
//                                 onClick={() => handleMainButtonClick('btn-7')}
//                             >{t('accessories')}</button>
//                             <div className='drop-down-menu' id='hidden'>
//                                 {/* زر كل الاكسسوارات */}
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-0'
//                                         onClick={() => handleDropdownButtonClick('btn-7-0')}
//                                     >{t('allAccessories')}</button>
//                                 </div>

//                                 {/* الاقسام الحالية */}
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-1'
//                                         onClick={() => handleDropdownButtonClick('btn-7-1')}
//                                     >{t('backpacks')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-2'
//                                         onClick={() => handleDropdownButtonClick('btn-7-2')}
//                                     >{t('crossBags')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-3'
//                                         onClick={() => handleDropdownButtonClick('btn-7-3')}
//                                     >{t('wallets')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-4'
//                                         onClick={() => handleDropdownButtonClick('btn-7-4')}
//                                     >{t('bracelets')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-5'
//                                         onClick={() => handleDropdownButtonClick('btn-7-5')}
//                                     >{t('watches')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-6'
//                                         onClick={() => handleDropdownButtonClick('btn-7-6')}
//                                     >{t('shoeCleaners')}</button>
//                                 </div>

//                                 {/* الاقسام الجديدة */}
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-7'
//                                         onClick={() => handleDropdownButtonClick('btn-7-7')}
//                                     >{t('socks')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-8'
//                                         onClick={() => handleDropdownButtonClick('btn-7-8')}
//                                     >{t('belts')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-9'
//                                         onClick={() => handleDropdownButtonClick('btn-7-9')}
//                                     >{t('rings')}</button>
//                                 </div>
//                                 <div className='drop-down-menu-option'>
//                                     <button
//                                         className='drop-down-option-button'
//                                         id='btn-7-10'
//                                         onClick={() => handleDropdownButtonClick('btn-7-10')}
//                                     >{t('necklaces')}</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='handle-fixed'></div>
//         </>
//     );
// }




















import './homepagetopheader.css';
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../../../hooks/useTranslation';
import { useState, useEffect } from 'react';

export default function Homepagetopheader({ sharedState, setSharedState, searchQuery, setSearchQuery, wishlist, setWishlist, cartlist, setcartlist }) {
    const { t, currentLanguage } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('btn-1');

    const handleMainButtonClick = (buttonId) => {
        setSharedState(buttonId);
        setActiveButton(buttonId);

        // إذا كان الزر هو accessories (btn-7)، نفتح القائمة المنبثقة ولا نغلق القائمة الرئيسية
        if (buttonId === "btn-7") {
            setIsAccessoriesOpen(!isAccessoriesOpen);
            // لا نغلق القائمة الرئيسية هنا
        } else {
            // لأي زر آخر غير accessories، نغلق القائمة المنبثقة إذا كانت مفتوحة
            setIsAccessoriesOpen(false);

            // في وضع الموبايل، نغلق القائمة الرئيسية بعد اختيار قسم (باستثناء accessories)
            if (isMobile) {
                setIsMenuOpen(false);
            }
        }
    };

    const handleDropdownButtonClick = (buttonId) => {
        setSharedState(buttonId);
        setActiveButton(buttonId);
        setIsAccessoriesOpen(false);

        // في وضع الموبايل، نغلق القائمة الرئيسية بعد اختيار قسم من قائمة accessories
        if (isMobile) {
            setIsMenuOpen(false);
        }
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsAccessoriesOpen(false); // إغلاق قائمة الاكسسوارات عند فتح/إغلاق القائمة الرئيسية
    };

    // مراقبة تغيير حجم الشاشة
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsMenuOpen(false);
                setIsAccessoriesOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // إغلاق القائمة فقط عند الضغط خارجها في الموبايل
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && isMenuOpen) {
                const menu = document.querySelector('.home-page-top-header-collections');
                const hamburger = document.querySelector('.hamburger-menu');

                // إذا كان الضغط خارج القائمة وخارج زر الهامبرغر
                if (menu && !menu.contains(event.target) &&
                    hamburger && !hamburger.contains(event.target)) {
                    setIsMenuOpen(false);
                    setIsAccessoriesOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, isMenuOpen]);

    // مصفوفة أقسام الاكسسوارات لتسهيل إضافتها
    const accessoriesItems = [
        { id: 'btn-7-0', key: 'allAccessories' },
        { id: 'btn-7-1', key: 'backpacks' },
        { id: 'btn-7-2', key: 'crossBags' },
        { id: 'btn-7-3', key: 'wallets' },
        { id: 'btn-7-4', key: 'bracelets' },
        { id: 'btn-7-5', key: 'watches' },
        { id: 'btn-7-6', key: 'shoeCleaners' },
        { id: 'btn-7-7', key: 'socks' },
        { id: 'btn-7-8', key: 'belts' },
        { id: 'btn-7-9', key: 'rings' },
        { id: 'btn-7-10', key: 'necklaces' }
    ];

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
                                            dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
                                        />
                                        <button
                                            type="submit"
                                            className='search-button'
                                            data-lang={currentLanguage}
                                        >
                                            <FaMagnifyingGlass className='search-icon' />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className='home-page-icons'>
                                <LanguageSwitcher />
                                <div className='hamburger-menu' onClick={toggleMenu}>
                                    {isMenuOpen ? <HiX /> : <HiMenu />}
                                </div>
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

                <div className={`home-page-top-header-collections ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className='home-page-top-header-collections-container'>
                        <div className='collections-main-name'>
                            <p>{t('categories')}:</p>
                        </div>

                        <div className='collections-option-all collection-1'>
                            <button
                                className={`btn ${activeButton === 'btn-1' ? 'active' : ''}`}
                                id='btn-1'
                                onClick={() => handleMainButtonClick('btn-1')}
                            >{t('allProducts')}</button>
                        </div>

                        <div className='collections-option collection-2'>
                            <button
                                className={`btn ${activeButton === 'btn-2' ? 'active' : ''}`}
                                id='btn-2'
                                onClick={() => handleMainButtonClick('btn-2')}
                            >{t('mensSneakers')}</button>
                        </div>

                        <div className='collections-option collection-3'>
                            <button
                                className={`btn ${activeButton === 'btn-3' ? 'active' : ''}`}
                                id='btn-3'
                                onClick={() => handleMainButtonClick('btn-3')}
                            >{t('youthSneakers')}</button>
                        </div>

                        <div className='collections-option collection-6' id='collection-option-children'>
                            <button
                                className={`btn ${activeButton === 'btn-6' ? 'active' : ''}`}
                                id='btn-6'
                                onClick={() => handleMainButtonClick('btn-6')}
                            >{t('kidsSneakers')}</button>
                        </div>

                        <div className='collections-option collection-4'>
                            <button
                                className={`btn ${activeButton === 'btn-4' ? 'active' : ''}`}
                                id='btn-4'
                                onClick={() => handleMainButtonClick('btn-4')}
                            >{t('mensShoes')}</button>
                        </div>

                        <div className='collections-option collection-5'>
                            <button
                                className={`btn ${activeButton === 'btn-5' ? 'active' : ''}`}
                                id='btn-5'
                                onClick={() => handleMainButtonClick('btn-5')}
                            >{t('womensShoes')}</button>
                        </div>

                        <div className='collections-option collection-7' id='collection-option-drop-down'>
                            <button
                                className={`btn ${activeButton === 'btn-7' ? 'active' : ''}`}
                                id='btn-7'
                                onClick={() => handleMainButtonClick('btn-7')}
                            >{t('accessories')}</button>

                            <div className={`drop-down-menu ${isAccessoriesOpen ? 'visible' : ''}`}>
                                {accessoriesItems.map((item) => (
                                    <div className='drop-down-menu-option' key={item.id}>
                                        <button
                                            className={`drop-down-option-button ${activeButton === item.id ? 'active' : ''}`}
                                            id={item.id}
                                            onClick={() => handleDropdownButtonClick(item.id)}
                                        >{t(item.key)}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='handle-fixed'></div>
        </>
    );
}