import "./productpageaddcomment.css";
import { useTranslation } from '../../hooks/useTranslation';

export default function Addcomment() {
    const { t } = useTranslation();

    return (
        <div className="add-comment">
            <div className="add-comment-container">
                <div className="add-comment-input-text">
                    <input
                        type="text"
                        placeholder={t('addCommentPlaceholder')}
                    />
                </div>
                <div className="add-comment-button">
                    <button>{t('addComment')}</button>
                </div>
            </div>
        </div>
    )
}