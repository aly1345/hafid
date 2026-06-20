import "./footer.css";
import { FaFacebookSquare, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoWhatsapp } from "react-icons/bi";
import { useTranslation } from '../../../hooks/useTranslation';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-content-wrapper">
                <div className="footer-company-info">
                    <div className="footer-logo">
                        <h2 className="logo-text">hafid-<span className="logo-highlight">elmalek</span></h2>
                        <p className="company-tagline">{t('footerTagline')}</p>
                    </div>
                    <div className="footer-description">
                        <p className="description-text">
                            {t('footerDescription')}
                        </p>
                    </div>
                    <div className="footer-contact-details">
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>{t('egyptAddress')}</span>
                        </div>
                        <div className="contact-item">
                            <FaPhoneAlt className="contact-icon" />
                            <span>{t('egyptPhone')}</span>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <span>{t('email')}</span>
                        </div>
                    </div>
                </div>
                <div className="footer-social-section">
                    <h3 className="social-title">{t('contactUs')}</h3>
                    <p className="social-subtitle">{t('followUs')}</p>

                    <div className="social-links-grid">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="social-link facebook">
                            <div className="social-icon-wrapper">
                                <FaFacebookSquare className="social-icon" />
                            </div>
                            <span className="social-text">{t('facebook')}</span>
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="social-link instagram">
                            <div className="social-icon-wrapper">
                                <FaInstagram className="social-icon" />
                            </div>
                            <span className="social-text">{t('instagram')}</span>
                        </a>

                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                            className="social-link tiktok">
                            <div className="social-icon-wrapper">
                                <FaTiktok className="social-icon" />
                            </div>
                            <span className="social-text">{t('tiktok')}</span>
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="social-link twitter">
                            <div className="social-icon-wrapper">
                                <FaXTwitter className="social-icon" />
                            </div>
                            <span className="social-text">{t('twitter')}</span>
                        </a>

                        <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer"
                            className="social-link whatsapp">
                            <div className="social-icon-wrapper">
                                <BiLogoWhatsapp className="social-icon" />
                            </div>
                            <span className="social-text">{t('whatsappSocial')}</span>
                        </a>

                        <a href="tel:+201234567890" className="social-link phone">
                            <div className="social-icon-wrapper">
                                <FaPhoneAlt className="social-icon" />
                            </div>
                            <span className="social-text">{t('callUs')}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                    <p> {t('allRightsReserved')} © {currentYear} hafidelmalk Egypt</p>
                </div>
                <div className="payment-methods">
                    <span className="payment-text">{t('paymentMethods')}</span>
                    <div className="payment-icons">
                        <span className="payment-icon">💰</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}