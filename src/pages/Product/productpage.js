import "./productpage.css";
import Productpagetopheader from "./productpagetopheader";
import Productpageinfo from "./productpageinfo";
import { useParams } from "react-router-dom";
import productsdata from "../../productsdata";
import { useState, useEffect } from "react";

export default function Productpage({ wishlist, setWishlist, cartlist, setcartlist }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const foundProduct = productsdata.find(item => item.id.toString() === id);

        if (foundProduct) {
            setProduct(foundProduct);
            setError(null);
        } else {
            setError("المنتج غير موجود");
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className="product-page">
                <Productpagetopheader
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                    cartlist={cartlist}
                    setcartlist={setcartlist}
                />
                <div className="loading-container">
                    <p>جاري تحميل المنتج...</p>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="product-page">
                <Productpagetopheader
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                    cartlist={cartlist}
                    setcartlist={setcartlist}
                />
                <div className="error-container">
                    <h2>المنتج غير موجود</h2>
                    <p>عذرًا، المنتج الذي تبحث عنه غير موجود أو تم إزالته.</p>
                    <a href="/" className="back-to-home">العودة للصفحة الرئيسية</a>
                </div>
            </div>
        );
    }

    return (
        <div className="product-page">
            <Productpagetopheader
                wishlist={wishlist}
                setWishlist={setWishlist}
                cartlist={cartlist}
                setcartlist={setcartlist}
            />
            <Productpageinfo
                product={product}
                cartlist={cartlist}
                setcartlist={setcartlist}
            />
        </div>
    );
}