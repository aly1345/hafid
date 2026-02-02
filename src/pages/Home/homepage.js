// import Homepagetopheader from "./Header/homepagetopheader";
// import Homeproductsshow from "./ProductsArea/homeproductsshow";
// import Homepagebtnbar from "./ProductsArea/controlproducts";
// import Herosection from "./HeroSection/Herosection";
// import Footer from "./Footer/footer";
// import { useState } from "react";




// export default function Homepage() {
//     let [buttonclicked, setbuttonclicked] = useState('btn-1');
//     let [currentproducts, setcurrentproducts] = useState([]);
//     // إضافة state للبحث
//     let [searchQuery, setSearchQuery] = useState('');


//     // دالة للتعامل مع نتائج البحث
//     const handleSearchResults = (results) => {
//         setcurrentproducts(results);
//     };


//     return (
//         <>
//             <Homepagetopheader
//                 sharedState={buttonclicked}
//                 setSharedState={setbuttonclicked}
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//             />
//             <Herosection />
//             <Homeproductsshow
//                 sharedState={buttonclicked}
//                 setSharedState={setbuttonclicked}
//                 currentproducts={currentproducts}
//                 setcurrentproducts={setcurrentproducts}
//                 searchQuery={searchQuery}
//                 handleSearchResults={handleSearchResults}
//             />
//             <Homepagebtnbar
//                 currentproducts={currentproducts}
//                 setcurrentproducts={setcurrentproducts}
//             />
//             <Footer />
//         </>
//     );
// }





// ----------------------------------------------------------------------------------------------------





// ========== START OF PAGINATION MODIFICATION ==========
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
    // إضافة state للصفحة الحالية
    let [currentPage, setCurrentPage] = useState(1);

    // دالة للتعامل مع نتائج البحث
    const handleSearchResults = (results) => {
        setcurrentproducts(results);
        // عند البحث أو تغيير القسم، العودة للصفحة الأولى
        setCurrentPage(1);
        // إعادة تعيين الزر المحدد في localStorage
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
                currentPage={currentPage} // تمرير الصفحة الحالية
                wishlist={wishlist}
                setWishlist={setWishlist}
            />
            <Homepagebtnbar
                currentproducts={currentproducts}
                setcurrentproducts={setcurrentproducts}
                currentPage={currentPage} // تمرير الصفحة الحالية
                setCurrentPage={setCurrentPage} // تمرير دالة تغيير الصفحة
            />
            <Footer />
        </>
    );
}
// ========== END OF PAGINATION MODIFICATION ==========