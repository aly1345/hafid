import { useLanguage } from '../context/LanguageContext';
import translations from '../translations/translations';

export const useTranslation = () => {
    const { language } = useLanguage();

    const t = (key, params = {}) => {
        let text = translations[language]?.[key] || key;

        Object.keys(params).forEach(param => {
            text = text.replace(`{{${param}}}`, params[param]);
        });

        return text;
    };

    return { t, language };
};