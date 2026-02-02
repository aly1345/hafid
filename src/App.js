import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "./pages/Cart/cartpage";
import Heartpage from "./pages/Heart/heartpage";
import Homepage from "./pages/Home/homepage";
import Paypage from "./pages/Pay/paypage";
import Productpage from "./pages/Product/productpage";
import { useState, useEffect } from "react";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { language } = useLanguage();

  const [wishlist, setWishlist] = useState([]);
  const [cartlist, setcartlist] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        return parsedCart;
      } catch (error) {
        console.error('Error loading cart:', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartlist));
  }, [cartlist]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        }
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
        localStorage.removeItem('wishlist');
      }
    }
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setcartlist(parsedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  return (
    <div lang={language}>
      <Routes>
        <Route path="/cart" element={
          <Cartpage
            wishlist={wishlist}
            setWishlist={setWishlist}
            cartlist={cartlist}
            setcartlist={setcartlist}
          />} />

        <Route path="/heart" element={
          <Heartpage
            wishlist={wishlist}
            setWishlist={setWishlist}
            cartlist={cartlist}
            setcartlist={setcartlist}
          />} />

        <Route path="/" element={
          <Homepage
            wishlist={wishlist}
            setWishlist={setWishlist}
            cartlist={cartlist}
            setcartlist={setcartlist}
          />} />

        <Route path="/pay" element={
          <Paypage
            cartlist={cartlist}
            setcartlist={setcartlist}
          />} />

        <Route path="/product/:id" element={
          <Productpage
            wishlist={wishlist}
            setWishlist={setWishlist}
            cartlist={cartlist}
            setcartlist={setcartlist}
          />} />
      </Routes>
    </div>
  )
}

export default App;