import Homepagetopheader from "./Header/homepagetopheader";
import Homeproductsshow from "./ProductsArea/homeproductsshow";
import Homepagebtnbar from "./ProductsArea/controlproducts";
import Herosection from "./HeroSection/Herosection";
import Footer from "./Footer/footer";
import { useState } from "react";

export default function Homepage({ wishlist, setWishlist, cartlist, setcartlist }) {
    let [buttonclicked, setbuttonclicked] = useState('btn-1');
    let [currentproducts, setcurrentproducts] = useState([]);
    let [searchQuery, setSearchQuery] = useState('');

    let [currentPage, setCurrentPage] = useState(1);


    const handleSearchResults = (results) => {
        setcurrentproducts(results);

        setCurrentPage(1);

        window.localStorage.setItem("HomePageBtnSelected", "1");
    };

    return (
        <>
            <Homepagetopheader
                sharedState={buttonclicked}
                setSharedState={setbuttonclicked}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                wishlist={wishlist}
                setWishlist={setWishlist}
                cartlist={cartlist}
                setcartlist={setcartlist}
            />
            <Herosection />
            <Homeproductsshow
                sharedState={buttonclicked}
                setSharedState={setbuttonclicked}
                currentproducts={currentproducts}
                setcurrentproducts={setcurrentproducts}
                searchQuery={searchQuery}
                handleSearchResults={handleSearchResults}
                currentPage={currentPage}
                wishlist={wishlist}
                setWishlist={setWishlist}
            />
            <Homepagebtnbar
                currentproducts={currentproducts}
                setcurrentproducts={setcurrentproducts}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer />
        </>
    );
}