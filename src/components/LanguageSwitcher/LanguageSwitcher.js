import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button className="language-switcher" onClick={toggleLanguage}>
            {language === 'ar' ? 'EN' : 'العربية'}
        </button>
    );
};

export default LanguageSwitcher;