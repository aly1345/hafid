// import { FaRegHeart } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import "./homeproduct.css";
// import { Link } from "react-router-dom";


// export default function Homeproduct(props) {
//     return (

//         <div className="home-product">
//             <Link to="/product-1">
//                 <div className="home-product-img">
//                     <img src={props.img} alt="صورة المنتج" />
//                 </div>
//             </Link>
//             <div className="home-product-info">
//                 <div className="home-product-name-price">
//                     <p>{props.name}</p>
//                     <p>{props.price}</p>
//                 </div>
//                 <div className="home-product-cart-heart">
//                     <div className="home-product-cart-icon">
//                         <FaCartShopping />
//                     </div>
//                     <div className="home-product-heart-icon">
//                         <FaRegHeart />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// -------------------------------------------------------------------------------------------------------------------------------


import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./homeproduct.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Homeproduct(props) {
    // إنشاء رابط ديناميكي بناءً على ID المنتج
    const productLink = `/product/${props.id}`;

    // التحقق من حالة المنتج عند التحميل أو تغيير wishlist
    useEffect(() => {
        const heartElement = document.getElementById(`heart-${props.id}`);
        if (heartElement && props.wishlist) {
            if (props.wishlist.includes(props.id)) {
                heartElement.classList.add('wishlist-active');
            } else {
                heartElement.classList.remove('wishlist-active');
            }
        }
    }, [props.wishlist, props.id]);

    function heartclick() {
        if (props.wishlist && props.setWishlist) {
            const isProductInWishlist = props.wishlist.includes(props.id);
            let updatedWishlist;

            if (isProductInWishlist) {
                // إزالة المنتج إذا كان موجوداً
                updatedWishlist = props.wishlist.filter(id => id !== props.id);
                console.log("Product removed from wishlist:", props.id);
            } else {
                // إضافة المنتج إذا لم يكن موجوداً
                updatedWishlist = [...props.wishlist, props.id];
                console.log("Product added to wishlist:", props.id);
            }

            // تحديث state
            props.setWishlist(updatedWishlist);

            // حفظ في localStorage
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

            console.log("Updated wishlist:", updatedWishlist);
        }
    }


    return (
        <div className="home-product" id={props.id}>

            <div className="home-product-img">
                <Link to={productLink}>
                    <img src={props.img} alt="صورة المنتج" />
                </Link>
            </div>

            <div className="home-product-info">
                <div className="home-product-name-price">
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                </div>
                <div className="home-product-cart-heart">
                    <div className="home-product-cart-icon">
                        <Link to={productLink}>
                            <FaCartShopping />
                        </Link>
                    </div>
                    <div className={`home-product-heart-icon ${props.wishlist && props.wishlist.includes(props.id) ? 'wishlist-active' : ''}`}
                        id={`heart-${props.id}`}
                        onClick={heartclick}>
                        <FaRegHeart />
                    </div>
                </div>
            </div>

        </div >
    );
}






// -------------------------------------------------------------------------------------------------------------------------------








// import "./homeproduct.css";
// import { FaRegHeart, FaHeart } from "react-icons/fa"; // استيراد القلبين
// import { useWishlist } from "../../../context/WishlistContext";
// import { Link } from 'react-router-dom';

// export default function Homeproduct({ id, name, price, img }) {
//     const { isInWishlist, toggleWishlist } = useWishlist();

//     // دالة للتعامل مع الضغط على القلب
//     const handleHeartClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         const product = { id, name, price, img };
//         toggleWishlist(product);
//     };

//     return (
//         <Link to={`/product/${id}`} className="home-product-link">
//             <div className="home-product">
//                 <div className="home-product-img">
//                     <img src={img} alt={name} />
//                 </div>
//                 <div className="home-product-info">
//                     <div className="home-product-name">
//                         <p>{name}</p>
//                     </div>
//                     <div className="home-product-price">
//                         <p><span>جنيه مصري</span> {price}</p>
//                     </div>
//                 </div>
//                 <div className="home-product-heart" onClick={handleHeartClick}>
//                     {isInWishlist(id) ? (
//                         <FaHeart className="heart-icon filled" />
//                     ) : (
//                         <FaRegHeart className="heart-icon" />
//                     )}
//                 </div>
//             </div>
//         </Link>
//     );
// }