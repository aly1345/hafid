import "./cartpage.css";
import Topcartpage from "./topcartpage";
import Productscontainer from "./productscontainer";
import Payincartbottom from "./payincartbottom";
import Invoice from "./invoice";





export default function Cartpage({ wishlist, setWishlist, cartlist, setcartlist }) {
    return (
        <div className="cart-page">
            <Topcartpage wishlist={wishlist} setWishlist={setWishlist} />
            <Productscontainer
                cartlist={cartlist}
                setcartlist={setcartlist}
            />
            <div>
                <Invoice
                    cartlist={cartlist}
                    setcartlist={setcartlist}
                />
                <Payincartbottom />
            </div>
        </div>
    )
}

