import "./productscontainer.css";
import Cartproduct from "./cartproduct";
import products from "../../productsdata";
import { useEffect, useState } from "react";
import { useTranslation } from '../../hooks/useTranslation';

export default function Productscontainer({ cartlist, setcartlist }) {
    const { t } = useTranslation();
    const [productsToShow, setProductsToShow] = useState([]);

    useEffect(() => {
        if (cartlist.length > 0) {
            const cartproductsid = cartlist.map(item => item.id);
            const filteredProducts = products.filter(product =>
                cartproductsid.includes(product.id)
            );

            const enrichedProducts = filteredProducts.map(product => {
                const cartItemsForProduct = cartlist.filter(item => item.id === product.id);

                if (cartItemsForProduct.length > 0) {
                    return cartItemsForProduct.map(cartItem => ({
                        ...product,
                        selectedColor: cartItem.color,
                        selectedSize: cartItem.size,
                        selectedPrice: cartItem.price,
                        quantity: cartItem.quantity || 1,
                        cartItemId: cartItem.uniqueId || `${product.id}_${cartItem.color}_${cartItem.size}`,
                        originalCartItem: cartItem
                    }));
                }
                return null;
            }).flat().filter(item => item !== null);

            setProductsToShow(enrichedProducts);
        } else {
            setProductsToShow([]);
        }
    }, [cartlist]);

    const increaseQuantity = (cartItemId) => {
        setcartlist(prevCart =>
            prevCart.map(item =>
                item.uniqueId === cartItemId
                    ? {
                        ...item,
                        quantity: (item.quantity || 1) + 1
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (cartItemId) => {
        setcartlist(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.uniqueId === cartItemId) {
                    const newQuantity = (item.quantity || 1) - 1;
                    if (newQuantity > 0) {
                        return { ...item, quantity: newQuantity };
                    }
                    return null;
                }
                return item;
            }).filter(item => item !== null);

            return updatedCart;
        });
    };

    const removeFromCart = (cartItemId) => {
        setcartlist(prevCart =>
            prevCart.filter(item => item.uniqueId !== cartItemId)
        );
    };

    const getItemQuantity = (cartItemId) => {
        const item = cartlist.find(item => item.uniqueId === cartItemId);
        return item ? (item.quantity || 1) : 1;
    };

    return (
        <div className="product-container">
            <div className="container">
                <div className="products-container">
                    {productsToShow.length > 0 ? (
                        <>
                            <div className="cart-products-list">
                                {productsToShow.map((product) => (
                                    <Cartproduct
                                        key={product.cartItemId}
                                        product={product}
                                        quantity={getItemQuantity(product.cartItemId)}
                                        onIncrease={() => increaseQuantity(product.cartItemId)}
                                        onDecrease={() => decreaseQuantity(product.cartItemId)}
                                        onRemove={() => removeFromCart(product.cartItemId)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <p>{t('emptyCart')}</p>
                            <p>{t('addToCartMessage')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}



