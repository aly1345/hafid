import "./Herosection.css";
// التعديل:
import { useTranslation } from '../../../hooks/useTranslation';

export default function Herosection() {
    const { t } = useTranslation();

    return (
        <div className="hero-section">
            <p>{t('heroSection')}</p>
        </div>
    )
}