

// Check if cart and heart are in local storage

export default function handle() {


    if (window.localStorage.cart === null || window.localStorage.cart === undefined) {
        window.localStorage.setItem("cart", "");
        console.log("the item is exaist and he redeclar it ");
    } else {
        console.log("we have value");
        console.log(window.localStorage.cart);
        console.log(typeof (window.localStorage.cart));
    }

    if (window.localStorage.heart === null || window.localStorage.heart === undefined) {
        window.localStorage.setItem("heart", "");
        console.log("the item is exaist and he redeclar it ");
    } else {
        console.log("we have value");
        console.log(window.localStorage.heart);
        console.log(typeof (window.localStorage.heart));
    }
}



























