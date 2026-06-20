export default function clickoncarticon() {
    document.querySelectorAll('.home-product-cart-icon').forEach(item => {
        item.onclick = function () {
            alert("clicked")
        }
    });
}


