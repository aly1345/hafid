import "./heartpage.css";
import Topheartpage from "./topheartpage";
import Heartproductscontainer from "./heartproductscontainer";





export default function Heatrpage({ wishlist, setWishlist, cartlist, setcartlist }) {
    return (
        <div className="heart-page">
            <Topheartpage
                cartlist={cartlist}
                setcartlist={setcartlist}
            />
            <Heartproductscontainer wishlist={wishlist} setWishlist={setWishlist} />
        </div>
    )
}