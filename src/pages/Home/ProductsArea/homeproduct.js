import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./homeproduct.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Homeproduct(props) {

    const productLink = `/product/${props.id}`;


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

                updatedWishlist = props.wishlist.filter(id => id !== props.id);
                console.log("Product removed from wishlist:", props.id);
            } else {

                updatedWishlist = [...props.wishlist, props.id];
                console.log("Product added to wishlist:", props.id);
            }


            props.setWishlist(updatedWishlist);


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
