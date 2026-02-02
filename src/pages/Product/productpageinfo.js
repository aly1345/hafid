// import "./productpageinfo.css";
// import { useState, useEffect, useRef } from 'react';
// import Addcomment from "./productpageaddcomment";
// import { useTranslation } from '../../hooks/useTranslation';

// export default function Productpageinfo({ product, cartlist, setcartlist }) {
//     const { t, currentLanguage } = useTranslation();

//     const [comments, setComments] = useState([]);
//     const [numberofbuttons, setNumberofbuttons] = useState(1);
//     const [commentsnum, setCommentsnum] = useState(0);
//     const [selectedButton, setSelectedButton] = useState(1);

//     const imagesContainerRef = useRef(null);

//     const productImages = (product && product.imgs) || [];
//     // إضافة نسخة مكررة من الصور لإنشاء تأثير لا نهائي
//     const allImages = productImages.length > 0 ? [...productImages] : ['default-image.jpg'];

//     // تحديث الرسوم المتحركة بناءً على عدد الصور الحقيقي
//     useEffect(() => {
//         if (imagesContainerRef.current && productImages.length > 0) {
//             const imageCount = productImages.length;
//             // مدة الرسوم المتحركة تعتمد على عدد الصور الحقيقي (بدون التكرار)
//             const duration = imageCount * 8; // 8 ثواني لكل صورة
//             imagesContainerRef.current.style.animationDuration = `${duration}s`;
//         }
//     }, [productImages]);

//     // حساب النسبة المئوية للحركة بناءً على عدد الصور الحقيقي
//     useEffect(() => {
//         if (productImages.length > 0) {
//             const root = document.documentElement;
//             root.style.setProperty('--image-count', productImages.length);
//         }
//     }, [productImages]);

//     // باقي useEffect كما هو
//     useEffect(() => {
//         if (product && product.comments && Array.isArray(product.comments)) {
//             setComments(product.comments);
//             setCommentsnum(product.comments.length);

//             if (product.comments.length % 10 === 0) {
//                 setNumberofbuttons(product.comments.length / 10);
//             } else {
//                 setNumberofbuttons(Math.ceil(product.comments.length / 10));
//             }
//         }
//     }, [product]);


//     useEffect(() => {
//         if (imagesContainerRef.current) {
//             const container = imagesContainerRef.current;

//             // إعادة تعيين الرسوم المتحركة
//             container.style.animation = 'none';

//             // حساب مدة الرسوم المتحركة بناءً على عدد الصور
//             const imageCount = productImages.length || 1;
//             const duration = imageCount * 8;

//             // إضافة تأثير التحميل البطيء
//             setTimeout(() => {
//                 if (currentLanguage === 'ar') {
//                     // للغة العربية: من اليسار إلى اليمين
//                     container.style.animation = `infiniteSliderArabic ${duration}s infinite linear`;
//                 } else {
//                     // للغة الإنجليزية: من اليمين إلى اليسار
//                     container.style.animation = `infiniteSliderEnglish ${duration}s infinite linear`;
//                 }
//             }, 10);
//         }
//     }, [currentLanguage, productImages]);

//     const firstsevenbuttons = [1, 2, 3, 4, 5, 6, 7];
//     const lastsevenbuttons = [
//         (numberofbuttons - 6),
//         (numberofbuttons - 5),
//         (numberofbuttons - 4),
//         (numberofbuttons - 3),
//         (numberofbuttons - 2),
//         (numberofbuttons - 1),
//         numberofbuttons
//     ];

//     // دالة إضافة المنتج (كما هي)
//     function addproductclicked() {
//         if (!selectedColor || !selectedSize) {
//             alert(t('selectColorAndSize'));
//             return;
//         }

//         const newProduct = {
//             id: product.id,
//             name: product.name,
//             price: currentPrice,
//             color: selectedColor.colorNameInArabic,
//             size: selectedSize,
//             quantity: 1,
//             uniqueId: `${product.id}_${selectedColor.colorNameInArabic}_${selectedSize}`
//         };

//         const isProductAlreadyInCart = cartlist.some(item =>
//             item.uniqueId === newProduct.uniqueId
//         );

//         if (isProductAlreadyInCart) {
//             alert(t('productAlreadyInCart'));
//             return;
//         }

//         setcartlist(prevCart => {
//             const updatedCart = [...prevCart, newProduct];
//             localStorage.setItem('cart', JSON.stringify(updatedCart));
//             return updatedCart;
//         });

//         alert(t('productAddedToCart'));
//     }

//     // مكون التحكم في التعليقات (كما هو)
//     function Controlcomments() {
//         function Makebuttons() {
//             const handleButtonClick = (buttonId) => {
//                 setSelectedButton(buttonId);
//                 window.localStorage.ProductPageBtnSelected = buttonId;
//             };

//             const buttons = [];

//             if (numberofbuttons <= 15) {
//                 for (let i = 1; i <= numberofbuttons; i++) {
//                     buttons.push(
//                         <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                             <button
//                                 className={`button-${selectedButton === i ? 'selected' : ''}`}
//                                 onClick={() => handleButtonClick(i)}
//                             >{i}</button>
//                         </div>
//                     );
//                 }
//             } else {
//                 if (firstsevenbuttons.includes(selectedButton)) {
//                     for (let i = 1; i <= 15; i++) {
//                         if (i < 14) {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                                     <button
//                                         className={`button-${selectedButton === i ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(i)}
//                                     >{i}</button>
//                                 </div>
//                             );
//                         } else if (i === 14) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${numberofbuttons}`} key={numberofbuttons}>
//                                     <button
//                                         className={`button-${selectedButton === numberofbuttons ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(numberofbuttons)}
//                                     >{numberofbuttons}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 } else if (lastsevenbuttons.includes(selectedButton)) {
//                     for (let i = numberofbuttons; i >= (numberofbuttons - 14); i--) {
//                         if (i > (numberofbuttons - 13)) {
//                             buttons.unshift(
//                                 <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                                     <button
//                                         className={`button-${selectedButton === i ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(i)}
//                                     >{i}</button>
//                                 </div>
//                             );
//                         } else if (i === (numberofbuttons - 13)) {
//                             buttons.unshift(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.unshift(
//                                 <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
//                                     <button
//                                         className={`button-${selectedButton === 1 ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(1)}
//                                     >{1}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 } else {
//                     for (let i = 1; i <= 15; i++) {
//                         if (i === 1) {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
//                                     <button
//                                         className={`button-${selectedButton === 1 ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(1)}
//                                     >{1}</button>
//                                 </div>
//                             );
//                         } else if (i === 2) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else if ((i <= 7 && i > 2) || (i <= 13 && i > 8)) {
//                             buttons.push(
//                                 <div className="control-section-button"
//                                     id={`control-section-button-${(selectedButton + i) - 8}`}
//                                     key={(selectedButton + i) - 8}>
//                                     <button
//                                         className={`button-${selectedButton === ((selectedButton + i) - 8) ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick((selectedButton + i) - 8)}
//                                     >{(selectedButton + i) - 8}</button>
//                                 </div>
//                             );
//                         } else if (i === 8) {
//                             buttons.push(
//                                 <div className="control-section-button"
//                                     id={`control-section-button-${selectedButton}`}
//                                     key={selectedButton}>
//                                     <button
//                                         className={"button-selected"}
//                                         onClick={() => handleButtonClick(selectedButton)}
//                                     >{selectedButton}</button>
//                                 </div>
//                             );
//                         } else if (i === 14) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${numberofbuttons}`} key={numberofbuttons}>
//                                     <button
//                                         className={"button-"}
//                                         onClick={() => handleButtonClick(numberofbuttons)}
//                                     >{numberofbuttons}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 }
//             }
//             return buttons;
//         }

//         return (
//             <div className="control-section">
//                 <div className="control-section-buttons">
//                     <Makebuttons />
//                 </div>
//             </div>
//         );
//     }

//     function Productpagecomments() {
//         const currentComments = comments.slice(
//             ((selectedButton * 10) - 10),
//             ((selectedButton * 10))
//         );

//         return (
//             <div className="product-page-comments">
//                 <div className="product-page-comments-title">
//                     <p>{t('comments')} ({commentsnum})</p>
//                 </div>
//                 <div className="product-page-comments-container">
//                     {currentComments.length > 0 ? (
//                         currentComments.map((item, index) => (
//                             <div className="product-page-comment" key={`comment-${index + 1}`}>
//                                 <p className="product-page-comment-id">{item.id}</p>
//                                 <p className="product-page-comment-text">{item.text}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="no-comments">
//                             <p>{t('noComments')}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     }

//     const [selectedColor, setSelectedColor] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);
//     const [currentPrice, setCurrentPrice] = useState((product && product.global_price) || "0 " + t('currency'));
//     const [isCurrentSizeValid, setIsCurrentSizeValid] = useState(false);

//     const handleColorChange = (colorItem) => {
//         setSelectedColor(colorItem);
//         setCurrentPrice(colorItem.price || (product && product.global_price));

//         if (selectedSize && colorItem.sizesAtColor && colorItem.sizesAtColor.includes(selectedSize)) {
//             setIsCurrentSizeValid(true);
//         } else {
//             setSelectedSize(null);
//             setIsCurrentSizeValid(false);
//         }
//     };

//     const handleSizeChange = (size) => {
//         setSelectedSize(size);
//         setIsCurrentSizeValid(true);
//     };

//     const isButtonDisabled = () => {
//         return !selectedColor || !selectedSize || !isCurrentSizeValid;
//     };

//     const getButtonText = () => {
//         if (!selectedColor && !selectedSize) {
//             return t('selectColorAndSize');
//         } else if (selectedColor && !selectedSize) {
//             return t('selectSizeForColor', { color: selectedColor.colorNameInArabic });
//         } else if (selectedColor && selectedSize && isCurrentSizeValid) {
//             return t('addToCartButton');
//         } else {
//             return t('selectColorAndSize');
//         }
//     };

//     return (
//         <div className="container-2" lang={currentLanguage}>
//             <div className="product-page-info">
//                 <div className="product-page-imgs">
//                     <div
//                         className="product-page-imgs-list"
//                         ref={imagesContainerRef}
//                     >
//                         {allImages.map((imgSrc, index) => (
//                             <div key={index} className="product-page-img">
//                                 <img
//                                     alt={`صورة المنتج ${index + 1}`}
//                                     src={imgSrc}
//                                     onError={(e) => {
//                                         e.target.onerror = null;
//                                         e.target.src = "default-image.jpg";
//                                     }}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="breaking-line"></div>
//                 <div className="product-page-des">
//                     <div className="product-page-des-text">
//                         <div className="product-page-name-price">
//                             <div className="product-page-name">
//                                 <p>{product ? product.name : t('productName')}</p>
//                             </div>
//                             <div className="product-page-price">
//                                 <p>{currentPrice}</p>
//                             </div>
//                         </div>
//                         <div className="product-page-description" dir="auto">
//                             <p>{product ? product.description : t('description')}</p>
//                         </div>
//                     </div>
//                     <div className="product-page-color-size" dir="auto">
//                         <div className="product-page-color">
//                             <p>{t('colors')}</p>
//                             {product && product.colors_sizes && product.colors_sizes.length > 0 ? (
//                                 product.colors_sizes.map((item, index) => (
//                                     <div key={index} className="color-option">
//                                         <input
//                                             type="radio"
//                                             id={`color-${item.colorNameInArabic}`}
//                                             name="color"
//                                             value={item.colorNameInArabic}
//                                             onChange={() => handleColorChange(item)}
//                                             checked={selectedColor?.colorNameInArabic === item.colorNameInArabic}
//                                         />
//                                         <label
//                                             htmlFor={`color-${item.colorNameInArabic}`}
//                                             className="color-label"
//                                         >
//                                             {item.colorNameInArabic}
//                                         </label>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>{t('noColors')}</p>
//                             )}
//                         </div>

//                         <div className="product-page-size">
//                             <p>{t('sizes')}</p>
//                             {selectedColor ? (
//                                 selectedColor.sizesAtColor && selectedColor.sizesAtColor.length > 0 ? (
//                                     selectedColor.sizesAtColor.map((size, index) => (
//                                         <div key={index} className="size-option">
//                                             <input
//                                                 type="radio"
//                                                 id={`size-${size}`}
//                                                 name="size"
//                                                 value={size}
//                                                 onChange={() => handleSizeChange(size)}
//                                                 checked={selectedSize === size && isCurrentSizeValid}
//                                             />
//                                             <label htmlFor={`size-${size}`} className="size-label">
//                                                 {size}
//                                             </label>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <p>{t('noSizesForColor')}</p>
//                                 )
//                             ) : (
//                                 <p>{t('selectColorFirst')}</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="product-page-add-product">
//                 <div className="product-page-add-product-button">
//                     <button
//                         disabled={isButtonDisabled()}
//                         className={`product-add-button ${isButtonDisabled() ? 'disabled' : 'enabled'}`}
//                         title={!selectedColor ? t('selectColorFirst') : !selectedSize ? t('selectSizeFirst') : ""}
//                         onClick={addproductclicked}
//                     >
//                         {getButtonText()}
//                     </button>
//                 </div>
//             </div>
//             <Productpagecomments />
//             <Controlcomments />
//             <Addcomment productId={product ? product.id : 1} />
//         </div>
//     );
// }











// import "./productpageinfo.css";
// import { useState, useEffect } from 'react';
// import Addcomment from "./productpageaddcomment";

// export default function Productpageinfo({ product, cartlist, setcartlist }) {

//     // حالة لتخزين تعليقات المنتج
//     const [comments, setComments] = useState([]);
//     const [numberofbuttons, setNumberofbuttons] = useState(1);
//     const [commentsnum, setCommentsnum] = useState(0);
//     const [selectedButton, setSelectedButton] = useState(1);

//     // بيانات المنتج الفعلية
//     const productData = product || {
//         id: 1,
//         name: "اسم المنتج",
//         global_price: "السعر",
//         description: "وصف المنتج",
//         imgs: [],
//         colors_sizes: [],
//         comments: []
//     };


//     // to add product to products list
//     // function addproductclicked() {
//     //     setcartlist([...cartlist, {
//     //         id: product.id,
//     //         price: currentPrice,
//     //         color: selectedColor.colorNameInArabic,
//     //         size: selectedSize
//     //     }])
//     // }

//     // useEffect(() => {
//     //     // تحميل العربة من localStorage عند التحميل الأولي
//     //     const savedCart = localStorage.getItem('cart');
//     //     if (savedCart) {
//     //         try {
//     //             const parsedCart = JSON.parse(savedCart);
//     //             setcartlist(parsedCart);
//     //         } catch (error) {
//     //             console.error('Error loading cart from localStorage:', error);
//     //         }
//     //     }
//     // }, []); // [] للتشغيل مرة واحدة فقط عند التحميل

//     // الحل: حفظ العربة في localStorage عند كل تغيير
//     // useEffect(() => {
//     //     if (cartlist.length > 0) {
//     //         localStorage.setItem('cart', JSON.stringify(cartlist));
//     //     } else {
//     //         localStorage.removeItem('cart'); // إزالة إذا كانت فارغة
//     //     }
//     // }, [cartlist]); // التشغيل عند كل تغيير في cartlist

//     // الحل المحسن لدالة إضافة المنتج
//     function addproductclicked() {
//         // 1. التحقق من أن جميع البيانات موجودة
//         if (!selectedColor || !selectedSize) {
//             alert("يرجى اختيار اللون والمقاس أولاً");
//             return;
//         }

//         // 2. إنشاء كائن المنتج الجديد
//         const newProduct = {
//             id: product.id,
//             name: product.name || productData.name, // إضافة الاسم للمقارنة
//             price: currentPrice,
//             color: selectedColor.colorNameInArabic,
//             size: selectedSize,
//             quantity: 1,
//             // إضافة معرّف فريد للمقارنة (يمكنك إزالته إذا كنت تريد المقارنة فقط بالخصائص الأساسية)
//             uniqueId: `${product.id}_${selectedColor.colorNameInArabic}_${selectedSize}`
//         };

//         // 3. التحقق مما إذا كان المنتج موجوداً مسبقاً بنفس المواصفات
//         const isProductAlreadyInCart = cartlist.some(item =>
//             // الطريقة 1: المقارنة بالمعرّف الفريد
//             item.uniqueId === newProduct.uniqueId

//             // أو الطريقة 2: المقارنة بجميع الخصائص (اختر إحداهما)
//             /*
//             item.id === newProduct.id &&
//             item.color === newProduct.color &&
//             item.size === newProduct.size &&
//             item.price === newProduct.price
//             */
//         );

//         // 4. إذا كان المنتج موجوداً، لا نضيفه
//         if (isProductAlreadyInCart) {
//             alert("هذا المنتج مضاف بالفعل إلى العربة بنفس المواصفات!");
//             return;
//         }

//         // 5. إضافة المنتج إلى العربة
//         setcartlist(prevCart => {
//             const updatedCart = [...prevCart, newProduct];

//             // حفظ فوري في localStorage (اختياري)
//             localStorage.setItem('cart', JSON.stringify(updatedCart));

//             return updatedCart;
//         });

//         // 6. رسالة تأكيد
//         alert("تم إضافة المنتج إلى العربة بنجاح!");

//         // 7. (اختياري) إعادة تعيين التحديدات بعد الإضافة
//         // setSelectedColor(null);
//         // setSelectedSize(null);
//         // setIsCurrentSizeValid(false);
//     }












//     // حساب عدد الأزرار بناءً على عدد التعليقات
//     useEffect(() => {
//         if (productData.comments && Array.isArray(productData.comments)) {
//             setComments(productData.comments);
//             setCommentsnum(productData.comments.length);

//             if (productData.comments.length % 10 === 0) {
//                 setNumberofbuttons(productData.comments.length / 10);
//             } else {
//                 setNumberofbuttons(Math.ceil(productData.comments.length / 10));
//             }
//         }
//     }, [productData]);

//     const firstsevenbuttons = [1, 2, 3, 4, 5, 6, 7];
//     const lastsevenbuttons = [
//         (numberofbuttons - 6),
//         (numberofbuttons - 5),
//         (numberofbuttons - 4),
//         (numberofbuttons - 3),
//         (numberofbuttons - 2),
//         (numberofbuttons - 1),
//         numberofbuttons
//     ];

//     // --------------------------------------------------------------------------------------------

//     function Controlcomments() {
//         function Makebuttons() {
//             const handleButtonClick = (buttonId) => {
//                 setSelectedButton(buttonId);
//                 window.localStorage.ProductPageBtnSelected = buttonId;
//             };

//             const buttons = [];

//             if (numberofbuttons <= 15) {
//                 for (let i = 1; i <= numberofbuttons; i++) {
//                     buttons.push(
//                         <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                             <button
//                                 className={`button-${selectedButton === i ? 'selected' : ''}`}
//                                 onClick={() => handleButtonClick(i)}
//                             >{i}</button>
//                         </div>
//                     );
//                 }
//             } else {
//                 if (firstsevenbuttons.includes(selectedButton)) {
//                     for (let i = 1; i <= 15; i++) {
//                         if (i < 14) {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                                     <button
//                                         className={`button-${selectedButton === i ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(i)}
//                                     >{i}</button>
//                                 </div>
//                             );
//                         } else if (i === 14) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${numberofbuttons}`} key={numberofbuttons}>
//                                     <button
//                                         className={`button-${selectedButton === numberofbuttons ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(numberofbuttons)}
//                                     >{numberofbuttons}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 } else if (lastsevenbuttons.includes(selectedButton)) {
//                     for (let i = numberofbuttons; i >= (numberofbuttons - 14); i--) {
//                         if (i > (numberofbuttons - 13)) {
//                             buttons.unshift(
//                                 <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                                     <button
//                                         className={`button-${selectedButton === i ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(i)}
//                                     >{i}</button>
//                                 </div>
//                             );
//                         } else if (i === (numberofbuttons - 13)) {
//                             buttons.unshift(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.unshift(
//                                 <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
//                                     <button
//                                         className={`button-${selectedButton === 1 ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(1)}
//                                     >{1}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 } else {
//                     for (let i = 1; i <= 15; i++) {
//                         if (i === 1) {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
//                                     <button
//                                         className={`button-${selectedButton === 1 ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick(1)}
//                                     >{1}</button>
//                                 </div>
//                             );
//                         } else if (i === 2) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else if ((i <= 7 && i > 2) || (i <= 13 && i > 8)) {
//                             buttons.push(
//                                 <div className="control-section-button"
//                                     id={`control-section-button-${(selectedButton + i) - 8}`}
//                                     key={(selectedButton + i) - 8}>
//                                     <button
//                                         className={`button-${selectedButton === ((selectedButton + i) - 8) ? 'selected' : ''}`}
//                                         onClick={() => handleButtonClick((selectedButton + i) - 8)}
//                                     >{(selectedButton + i) - 8}</button>
//                                 </div>
//                             );
//                         } else if (i === 8) {
//                             buttons.push(
//                                 <div className="control-section-button"
//                                     id={`control-section-button-${selectedButton}`}
//                                     key={selectedButton}>
//                                     <button
//                                         className={"button-selected"}
//                                         onClick={() => handleButtonClick(selectedButton)}
//                                     >{selectedButton}</button>
//                                 </div>
//                             );
//                         } else if (i === 14) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${numberofbuttons}`} key={numberofbuttons}>
//                                     <button
//                                         className={"button-"}
//                                         onClick={() => handleButtonClick(numberofbuttons)}
//                                     >{numberofbuttons}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 }
//             }
//             return buttons;
//         }

//         return (
//             <div className="control-section">
//                 <div className="control-section-buttons">
//                     <Makebuttons />
//                 </div>
//             </div>
//         );
//     }

//     function Productpagecomments() {
//         const currentComments = comments.slice(
//             ((selectedButton * 10) - 10),
//             ((selectedButton * 10))
//         );

//         return (
//             <div className="product-page-comments">
//                 <div className="product-page-comments-title">
//                     <p>التعليقات ({commentsnum})</p>
//                 </div>
//                 <div className="product-page-comments-container">
//                     {currentComments.length > 0 ? (
//                         currentComments.map((item, index) => (
//                             <div className="product-page-comment" key={`comment-${index + 1}`}>
//                                 <p className="product-page-comment-id">{item.id}</p>
//                                 <p className="product-page-comment-text">{item.text}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="no-comments">
//                             <p>لا توجد تعليقات لهذا المنتج بعد.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     }
//     // --------------------------------------------------------------------------------------------

//     const productImages = productData.imgs || [];
//     const allImages = productImages.length > 0 ? [...productImages] : ['default-image.jpg'];

//     const [selectedColor, setSelectedColor] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);
//     const [currentPrice, setCurrentPrice] = useState(productData.global_price || "0 جنيه");
//     // حالة لتتبع ما إذا كان المقاس الحالي صالح للون الجديد
//     const [isCurrentSizeValid, setIsCurrentSizeValid] = useState(false);


//     const handleColorChange = (colorItem) => {
//         const previousColor = selectedColor;
//         setSelectedColor(colorItem);
//         setCurrentPrice(colorItem.price || productData.global_price);

//         // التحقق مما إذا كان المقاس المحدد متاحاً في اللون الجديد
//         if (selectedSize && colorItem.sizesAtColor && colorItem.sizesAtColor.includes(selectedSize)) {
//             // المقاس الحالي صالح للون الجديد، لا نغير أي شيء
//             setIsCurrentSizeValid(true);
//         } else {
//             // المقاس الحالي غير صالح للون الجديد، نعيد تعيينه
//             setSelectedSize(null);
//             setIsCurrentSizeValid(false);
//         }
//     };

//     const handleSizeChange = (size) => {
//         setSelectedSize(size);
//         setIsCurrentSizeValid(true);
//     };

//     // دالة للتحقق مما إذا كان الزر يجب أن يكون معطلاً
//     const isButtonDisabled = () => {
//         return !selectedColor || !selectedSize || !isCurrentSizeValid;
//     };

//     // الحصول على نص الزر بناءً على الحالة
//     const getButtonText = () => {
//         if (!selectedColor && !selectedSize) {
//             return "اختر اللون والمقاس";
//         } else if (selectedColor && !selectedSize) {
//             return `اختر مقاساً للون ${selectedColor.colorNameInArabic}`;
//         } else if (selectedColor && selectedSize && isCurrentSizeValid) {
//             return "أضف إلى العربة";
//         } else {
//             return "اختر اللون والمقاس";
//         }
//     };

//     return (
//         <div className="container-2">
//             <div className="product-page-info">
//                 <div className="product-page-imgs">
//                     <div className="product-page-imgs-list">
//                         {allImages.map((imgSrc, index) => (
//                             <div key={index} className="product-page-img">
//                                 <img
//                                     alt={`صورة المنتج ${index + 1}`}
//                                     src={imgSrc}
//                                     onError={(e) => {
//                                         e.target.onerror = null;
//                                         e.target.src = "default-image.jpg";
//                                     }}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="breaking-line"></div>
//                 <div className="product-page-des">
//                     <div className="product-page-des-text">
//                         <div className="product-page-name-price">
//                             <div className="product-page-name">
//                                 <p>{productData.name || "اسم المنتج"}</p>
//                             </div>
//                             <div className="product-page-price">
//                                 <p>{currentPrice}</p>
//                             </div>
//                         </div>
//                         <div className="product-page-description">
//                             <p>{productData.description || "لا يوجد وصف للمنتج"}</p>
//                         </div>
//                     </div>
//                     <div className="product-page-color-size">
//                         <div className="product-page-color">
//                             <p>الألوان</p>
//                             {productData.colors_sizes && productData.colors_sizes.length > 0 ? (
//                                 productData.colors_sizes.map((item, index) => (
//                                     <div key={index} className="color-option">
//                                         <input
//                                             type="radio"
//                                             id={`color-${item.colorNameInArabic}`}
//                                             name="color"
//                                             value={item.colorNameInArabic}
//                                             onChange={() => handleColorChange(item)}
//                                             checked={selectedColor?.colorNameInArabic === item.colorNameInArabic}
//                                         />
//                                         <label
//                                             htmlFor={`color-${item.colorNameInArabic}`}
//                                             className="color-label"
//                                         >
//                                             {item.colorNameInArabic}
//                                         </label>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>لا توجد ألوان متاحة</p>
//                             )}
//                         </div>

//                         <div className="product-page-size">
//                             <p>المقاسات</p>
//                             {selectedColor ? (
//                                 selectedColor.sizesAtColor && selectedColor.sizesAtColor.length > 0 ? (
//                                     selectedColor.sizesAtColor.map((size, index) => (
//                                         <div key={index} className="size-option">
//                                             <input
//                                                 type="radio"
//                                                 id={`size-${size}`}
//                                                 name="size"
//                                                 value={size}
//                                                 onChange={() => handleSizeChange(size)}
//                                                 checked={selectedSize === size && isCurrentSizeValid}
//                                             />
//                                             <label htmlFor={`size-${size}`} className="size-label">
//                                                 {size}
//                                             </label>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <p>لا توجد مقاسات متاحة لهذا اللون</p>
//                                 )
//                             ) : (
//                                 <p>يرجى اختيار لون أولاً</p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="product-page-add-product">
//                 <div className="product-page-add-product-button">
//                     <button
//                         disabled={isButtonDisabled()}
//                         className={`product-add-button ${isButtonDisabled() ? 'disabled' : 'enabled'}`}
//                         title={!selectedColor ? "اختر لون أولاً" : !selectedSize ? "اختر مقاس أولاً" : ""}
//                         onClick={addproductclicked}
//                     >
//                         {getButtonText()}
//                     </button>
//                 </div>
//             </div>
//             <Productpagecomments />
//             <Controlcomments />
//             <Addcomment productId={productData.id} />
//         </div>
//     );
// }





















































import "./productpageinfo.css";
import { useState, useEffect, useRef } from 'react';
import Addcomment from "./productpageaddcomment";
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from "../../context/LanguageContext"; // استيراد useLanguage

export default function Productpageinfo({ product, cartlist, setcartlist }) {
    const { t, currentLanguage, isRTL, direction } = useTranslation();

    // استخدام useRef للوصول إلى عنصر الصور
    const imagesContainerRef = useRef(null);

    // حالة لتخزين تعليقات المنتج
    const [comments, setComments] = useState([]);
    const [numberofbuttons, setNumberofbuttons] = useState(1);
    const [commentsnum, setCommentsnum] = useState(0);
    const [selectedButton, setSelectedButton] = useState(1);

    // حالة لتخزين class الأنيميشن
    const [animationClass, setAnimationClass] = useState('animate-ltr');

    // بيانات المنتج الفعلية
    const productData = product || {
        id: 1,
        name: t('productName'),
        global_price: t('price'),
        description: t('productDescription'),
        imgs: [],
        colors_sizes: [],
        comments: []
    };

    const { language, changeLanguage } = useLanguage(); // استخدامه مباشرة

    useEffect(() => {
        if (language == "ar") {
            setAnimationClass('animate-ltr');
        } else {
            setAnimationClass('animate-rtl');
        }
    }, [language]); // التشغيل عند تغيير اللغة

    // معالجة نقر إضافة المنتج (كما هي)
    function addproductclicked() {
        if (!selectedColor || !selectedSize) {
            alert(t('selectColorAndSize'));
            return;
        }

        const newProduct = {
            id: product.id,
            name: product.name || productData.name,
            price: currentPrice,
            color: selectedColor.colorNameInArabic,
            size: selectedSize,
            quantity: 1,
            uniqueId: `${product.id}_${selectedColor.colorNameInArabic}_${selectedSize}`
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

    // حساب عدد الأزرار بناءً على عدد التعليقات
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

    // إنشاء أزرار التحكم (نفس الكود السابق)
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

    const productImages = productData.imgs || [];
    const allImages = productImages.length > 0 ? [...productImages] : ['default-image.jpg'];

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [currentPrice, setCurrentPrice] = useState(productData.global_price || "0 " + t('currency'));
    const [isCurrentSizeValid, setIsCurrentSizeValid] = useState(false);

    const handleColorChange = (colorItem) => {
        setSelectedColor(colorItem);
        setCurrentPrice(colorItem.price || productData.global_price);

        if (selectedSize && colorItem.sizesAtColor && colorItem.sizesAtColor.includes(selectedSize)) {
            setIsCurrentSizeValid(true);
        } else {
            setSelectedSize(null);
            setIsCurrentSizeValid(false);
        }
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setIsCurrentSizeValid(true);
    };

    const isButtonDisabled = () => {
        return !selectedColor || !selectedSize || !isCurrentSizeValid;
    };

    const getButtonText = () => {
        if (!selectedColor && !selectedSize) {
            return t('selectColorAndSize');
        } else if (selectedColor && !selectedSize) {
            return t('selectSizeForColor', { color: selectedColor.colorNameInArabic });
        } else if (selectedColor && selectedSize && isCurrentSizeValid) {
            return t('addToCartButton');
        } else {
            return t('selectColorAndSize');
        }
    };


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
                    <div className="product-page-color-size" dir="auto">
                        <div className="product-page-color">
                            <p>{t('colors')}</p>
                            {productData.colors_sizes && productData.colors_sizes.length > 0 ? (
                                productData.colors_sizes.map((item, index) => (
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
                                ))
                            ) : (
                                <p>{t('noColorsAvailable')}</p>
                            )}
                        </div>

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
                                                checked={selectedSize === size && isCurrentSizeValid}
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
                    </div>
                </div>
            </div>
            <div className="product-page-add-product">
                <div className="product-page-add-product-button">
                    <button
                        disabled={isButtonDisabled()}
                        className={`product-add-button ${isButtonDisabled() ? 'disabled' : 'enabled'}`}
                        title={!selectedColor
                            ? t('selectColorFirst')
                            : !selectedSize
                                ? t('selectSizeFirst')
                                : ""}
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