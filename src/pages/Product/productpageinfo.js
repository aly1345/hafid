import "./productpageinfo.css";
import { useState, useEffect, useRef } from 'react';
import Addcomment from "./productpageaddcomment";
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from "../../context/LanguageContext";

export default function Productpageinfo({ product, cartlist, setcartlist }) {
    const { t, currentLanguage, isRTL, direction } = useTranslation();
    const imagesContainerRef = useRef(null);
    const { language, changeLanguage } = useLanguage();


    const [comments, setComments] = useState([]);
    const [numberofbuttons, setNumberofbuttons] = useState(1);
    const [commentsnum, setCommentsnum] = useState(0);
    const [selectedButton, setSelectedButton] = useState(1);
    const [animationClass, setAnimationClass] = useState('animate-ltr');
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentPrice, setCurrentPrice] = useState("0 " + t('currency'));
    const [isCurrentSizeValid, setIsCurrentSizeValid] = useState(false);

    const productData = product || {
        id: 1,
        name: t('productName'),
        global_price: t('price'),
        description: t('productDescription'),
        imgs: [],
        colors_sizes: [],
        comments: []
    };

    const hasColors = productData.colors_sizes && productData.colors_sizes.length > 0;

    const hasSizes = () => {
        if (!hasColors) return false;

        if (selectedColor) {
            return selectedColor.sizesAtColor && selectedColor.sizesAtColor.length > 0;
        }

        return productData.colors_sizes.some(color =>
            color.sizesAtColor && color.sizesAtColor.length > 0
        );
    };

    const productImages = productData.imgs || [];
    const allImages = productImages.length > 0 ? [...productImages] : ['default-image.jpg'];

    const firstsevenbuttons = [1, 2, 3, 4, 5, 6, 7];
    const lastsevenbuttons = [
        (numberofbuttons - 6),
        (numberofbuttons - 5),
        (numberofbuttons - 4),
        (numberofbuttons - 3),
        (numberofbuttons - 2),
        (numberofbuttons - 1),
        numberofbuttons
    ];

    useEffect(() => {
        if (language == "ar") {
            setAnimationClass('animate-ltr');
        } else {
            setAnimationClass('animate-rtl');
        }
    }, [language]);

    function addproductclicked() {
        if (hasColors && !selectedColor) {
            alert(t('selectColorFirst'));
            return;
        }

        if (hasSizes() && !selectedSize) {
            alert(t('selectSizeFirst'));
            return;
        }

        const newProduct = {
            id: product.id,
            name: product.name || productData.name,
            price: currentPrice,
            color: selectedColor ? selectedColor.colorNameInArabic : "",
            size: selectedSize || "",
            quantity: 1,
            uniqueId: `${product.id}_${selectedColor ? selectedColor.colorNameInArabic : 'no-color'}_${selectedSize || 'no-size'}`
        };

        const isProductAlreadyInCart = cartlist.some(item =>
            item.uniqueId === newProduct.uniqueId
        );

        if (isProductAlreadyInCart) {
            alert(t('productAlreadyInCart'));
            return;
        }

        setcartlist(prevCart => {
            const updatedCart = [...prevCart, newProduct];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });

        alert(t('productAddedToCart'));
    }

    useEffect(() => {
        if (productData.comments && Array.isArray(productData.comments)) {
            setComments(productData.comments);
            setCommentsnum(productData.comments.length);

            if (productData.comments.length % 10 === 0) {
                setNumberofbuttons(productData.comments.length / 10);
            } else {
                setNumberofbuttons(Math.ceil(productData.comments.length / 10));
            }
        }
    }, [productData]);

    useEffect(() => {
        if (hasColors && productData.colors_sizes[0].price) {
            setCurrentPrice(productData.colors_sizes[0].price);
        } else {
            setCurrentPrice(productData.global_price || "0 " + t('currency'));
        }
    }, [productData]);

    const handleColorChange = (colorItem) => {
        setSelectedColor(colorItem);

        if (colorItem.price) {
            setCurrentPrice(colorItem.price);
        } else if (productData.global_price) {
            setCurrentPrice(productData.global_price);
        }

        if (colorItem.sizesAtColor && colorItem.sizesAtColor.length > 0) {
            if (selectedSize && !colorItem.sizesAtColor.includes(selectedSize)) {
                setSelectedSize(null);
                setIsCurrentSizeValid(false);
            } else if (selectedSize && colorItem.sizesAtColor.includes(selectedSize)) {
                setIsCurrentSizeValid(true);
            }
        } else {
            setIsCurrentSizeValid(true);
            setSelectedSize(null);
        }
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setIsCurrentSizeValid(true);
    };

    const isButtonDisabled = () => {
        if (hasColors && !selectedColor) {
            return true;
        }

        if (hasSizes() && !selectedSize) {
            return true;
        }

        if (selectedColor && selectedSize) {
            if (selectedColor.sizesAtColor && selectedColor.sizesAtColor.length > 0) {
                return !selectedColor.sizesAtColor.includes(selectedSize);
            }
        }

        return false;
    };

    const getButtonText = () => {
        if (hasColors && !selectedColor) {
            return t('selectColorFirst');
        }

        if (hasSizes() && !selectedSize) {
            return t('selectSizeFirst');
        }

        if (selectedColor && selectedSize && !isCurrentSizeValid) {
            return t('invalidSizeForColor');
        }

        return t('addToCartButton');
    };

    function Controlcomments() {
        function Makebuttons() {
            const handleButtonClick = (buttonId) => {
                setSelectedButton(buttonId);
                window.localStorage.ProductPageBtnSelected = buttonId;
            };

            const buttons = [];

            if (numberofbuttons <= 15) {
                for (let i = 1; i <= numberofbuttons; i++) {
                    buttons.push(
                        <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
                            <button
                                className={`button-${selectedButton === i ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(i)}
                            >{i}</button>
                        </div>
                    );
                }
            } else {
                if (firstsevenbuttons.includes(selectedButton)) {
                    for (let i = 1; i <= 15; i++) {
                        if (i < 14) {
                            buttons.push(
                                <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
                                    <button
                                        className={`button-${selectedButton === i ? 'selected' : ''}`}
                                        onClick={() => handleButtonClick(i)}
                                    >{i}</button>
                                </div>
                            );
                        } else if (i === 14) {
                            buttons.push(
                                <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
                                    <p>...</p>
                                </div>
                            );
                        } else {
                            buttons.push(
                                <div className="control-section-button" id={`control-section-button-${numberofbuttons}`} key={numberofbuttons}>
                                    <button
                                        className={`button-${selectedButton === numberofbuttons ? 'selected' : ''}`}
                                        onClick={() => handleButtonClick(numberofbuttons)}
                                    >{numberofbuttons}</button>
                                </div>
                            );
                        }
                    }
                } else if (lastsevenbuttons.includes(selectedButton)) {
                    for (let i = numberofbuttons; i >= (numberofbuttons - 14); i--) {
                        if (i > (numberofbuttons - 13)) {
                            buttons.unshift(
                                <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
                                    <button
                                        className={`button-${selectedButton === i ? 'selected' : ''}`}
                                        onClick={() => handleButtonClick(i)}
                                    >{i}</button>
                                </div>
                            );
                        } else if (i === (numberofbuttons - 13)) {
                            buttons.unshift(
                                <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
                                    <p>...</p>
                                </div>
                            );
                        } else {
                            buttons.unshift(
                                <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
                                    <button
                                        className={`button-${selectedButton === 1 ? 'selected' : ''}`}
                                        onClick={() => handleButtonClick(1)}
                                    >{1}</button>
                                </div>
                            );
                        }
                    }
                } else {
                    for (let i = 1; i <= 15; i++) {
                        if (i === 1) {
                            buttons.push(
                                <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
                                    <button
                                        className={`button-${selectedButton === 1 ? 'selected' : ''}`}
                                        onClick={() => handleButtonClick(1)}
                                    >{1}</button>
                                </div>
                            );
                        } else if (i === 2) {
                            buttons.push(
                                <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
                                    <p>...</p>
                                </div>
                            );
                        } else if ((i <= 7 && i > 2) || (i <= 13 && i > 8)) {
                            buttons.push(
                                <div className="control-section-button"
                                    id={`control-section-button-${(selectedButton + i) - 8}`}
                                    key={(selectedButton + i) - 8}>
                                    <button
                                        className={`button-${selectedButton === ((selectedButton + i) - 8) ? 'selected' : ''}`}
                                        onClick={() => handleButtonClick((selectedButton + i) - 8)}
                                    >{(selectedButton + i) - 8}</button>
                                </div>
                            );
                        } else if (i === 8) {
                            buttons.push(
                                <div className="control-section-button"
                                    id={`control-section-button-${selectedButton}`}
                                    key={selectedButton}>
                                    <button
                                        className={"button-selected"}
                                        onClick={() => handleButtonClick(selectedButton)}
                                    >{selectedButton}</button>
                                </div>
                            );
                        } else if (i === 14) {
                            buttons.push(
                                <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
                                    <p>...</p>
                                </div>
                            );
                        } else {
                            buttons.push(
                                <div className="control-section-button" id={`control-section-button-${numberofbuttons}`} key={numberofbuttons}>
                                    <button
                                        className={"button-"}
                                        onClick={() => handleButtonClick(numberofbuttons)}
                                    >{numberofbuttons}</button>
                                </div>
                            );
                        }
                    }
                }
            }
            return buttons;
        }

        return (
            <div className="control-section">
                <div className="control-section-buttons">
                    <Makebuttons />
                </div>
            </div>
        );
    }

    function Productpagecomments() {
        const currentComments = comments.slice(
            ((selectedButton * 10) - 10),
            ((selectedButton * 10))
        );

        return (
            <div className="product-page-comments">
                <div className="product-page-comments-title">
                    <p>{t('comments')} ({commentsnum})</p>
                </div>
                <div className="product-page-comments-container">
                    {currentComments.length > 0 ? (
                        currentComments.map((item, index) => (
                            <div className="product-page-comment" key={`comment-${index + 1}`}>
                                <p className="product-page-comment-id">{item.id}</p>
                                <p className="product-page-comment-text">{item.text}</p>
                            </div>
                        ))
                    ) : (
                        <div className="no-comments">
                            <p>{t('noComments')}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="container-2" dir={direction} lang={currentLanguage}>
            <div className="product-page-info">
                <div className="product-page-imgs">
                    <div
                        className={`product-page-imgs-list ${animationClass}`}
                        ref={imagesContainerRef}
                    >
                        {allImages.map((imgSrc, index) => (
                            <div key={index} className="product-page-img">
                                <img
                                    alt={t('productImageAlt', { number: index + 1 })}
                                    src={imgSrc}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "default-image.jpg";
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="breaking-line"></div>
                <div className="product-page-des">
                    <div className="product-page-des-text">
                        <div className="product-page-name-price">
                            <div className="product-page-name">
                                <p>{productData.name || t('productName')}</p>
                            </div>
                            <div className="product-page-price">
                                <p>{currentPrice}</p>
                            </div>
                        </div>
                        <div className="product-page-description" dir="auto">
                            <p>{productData.description || t('noDescription')}</p>
                        </div>
                    </div>

                    {hasColors && (
                        <div className="product-page-color-size" dir="auto">
                            <div className="product-page-color">
                                <p>{t('colors')}</p>
                                {productData.colors_sizes.map((item, index) => (
                                    <div key={index} className="color-option">
                                        <input
                                            type="radio"
                                            id={`color-${item.colorNameInArabic}`}
                                            name="color"
                                            value={item.colorNameInArabic}
                                            onChange={() => handleColorChange(item)}
                                            checked={selectedColor?.colorNameInArabic === item.colorNameInArabic}
                                        />
                                        <label
                                            htmlFor={`color-${item.colorNameInArabic}`}
                                            className="color-label"
                                        >
                                            {item.colorNameInArabic}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {hasSizes() && (
                                <div className="product-page-size">
                                    <p>{t('sizes')}</p>
                                    {selectedColor ? (
                                        selectedColor.sizesAtColor && selectedColor.sizesAtColor.length > 0 ? (
                                            selectedColor.sizesAtColor.map((size, index) => (
                                                <div key={index} className="size-option">
                                                    <input
                                                        type="radio"
                                                        id={`size-${size}`}
                                                        name="size"
                                                        value={size}
                                                        onChange={() => handleSizeChange(size)}
                                                        checked={selectedSize === size}
                                                    />
                                                    <label htmlFor={`size-${size}`} className="size-label">
                                                        {size}
                                                    </label>
                                                </div>
                                            ))
                                        ) : (
                                            <p>{t('noSizesForColor')}</p>
                                        )
                                    ) : (
                                        <p>{t('selectColorFirst')}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="product-page-add-product">
                <div className="product-page-add-product-button">
                    <button
                        disabled={isButtonDisabled()}
                        className={`product-add-button ${isButtonDisabled() ? 'disabled' : 'enabled'}`}
                        title={getButtonText()}
                        onClick={addproductclicked}
                    >
                        {getButtonText()}
                    </button>
                </div>
            </div>
            <Productpagecomments />
            <Controlcomments />
            <Addcomment productId={productData.id} />
        </div>
    );
}