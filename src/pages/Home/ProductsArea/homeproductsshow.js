import productsdata from "../../../productsdata";
import "./homeproductsshow.css";
import Homeproduct from "./homeproduct";
import { useEffect, useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function Homeproductsshow({
    sharedState,
    setSharedState,
    currentproducts,
    setcurrentproducts,
    searchQuery,
    handleSearchResults,
    currentPage,
    wishlist,
    setWishlist
}) {
    const { t } = useTranslation();
    const [displayedProducts, setDisplayedProducts] = useState([]);

    const searchProducts = (query) => {
        if (!query.trim()) return [];
        const searchTerm = query.toLowerCase().trim();
        return productsdata.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            (product.description && product.description.toLowerCase().includes(searchTerm)) ||
            (product.category && product.category.toLowerCase().includes(searchTerm))
        );
    };

    const getProductsByCollection = (collection) => {
        let filteredProducts = [];

        if (collection === "btn-1") {
            filteredProducts = productsdata;
        } else if (collection !== "btn-1" && collection !== "btn-6" && collection[5] !== "-") {
            filteredProducts = productsdata.filter(product => product.collection === collection);
        } else if (collection === "btn-6-0") {
            filteredProducts = productsdata.filter(product => product.collection[4] === "6");
        } else if (collection[5] === "-" && collection !== "btn-6-0") {
            filteredProducts = productsdata.filter(product => product.collection === collection);
        } else if (collection === "btn-6") {
            filteredProducts = productsdata.filter(product => product.collection[4] === "6");
        }

        return filteredProducts;
    };

    const getDisplayedProducts = (products, page) => {
        const productsPerPage = 20;
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return products.slice(startIndex, endIndex);
    };

    useEffect(() => {
        let filteredProducts = [];

        if (sharedState.startsWith('search-')) {
            const query = sharedState.replace('search-', '');
            if (query) {
                filteredProducts = searchProducts(query);
            }
        } else {
            filteredProducts = getProductsByCollection(sharedState);
        }

        setcurrentproducts(filteredProducts);
        if (handleSearchResults) {
            handleSearchResults(filteredProducts);
        }
    }, [sharedState]);

    useEffect(() => {
        const displayed = getDisplayedProducts(currentproducts, currentPage);
        setDisplayedProducts(displayed);
    }, [currentproducts, currentPage]);

    let allhomeproduct;

    if (sharedState.startsWith('search-')) {
        const query = sharedState.replace('search-', '');

        if (currentproducts.length === 0 && query) {
            allhomeproduct = (
                <div className="no-results-message">
                    <h3>{t('noSearchResults', { query })}</h3>
                    <p>{t('tryOtherSearch')}</p>
                </div>
            );
        } else if (displayedProducts.length === 0) {
            allhomeproduct = (
                <div className="no-results-message">
                    <h3>{t('noProductsOnPage')}</h3>
                    <p>{t('goToAnotherPage')}</p>
                </div>
            );
        } else {
            allhomeproduct = displayedProducts.map((data) => (
                <Homeproduct
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    price={data.price}
                    img={data.mainimg}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                />
            ));
        }
    } else {
        if (displayedProducts.length === 0 && currentproducts.length > 0) {
            allhomeproduct = (
                <div className="no-results-message">
                    <h3>{t('noProductsOnPage')}</h3>
                    <p>{t('goToAnotherPage')}</p>
                </div>
            );
        } else if (displayedProducts.length === 0) {
            allhomeproduct = (
                <div className="no-results-message">
                    <h3>{t('noProductsInCategory')}</h3>
                    <p>{t('chooseAnotherCategory')}</p>
                </div>
            );
        } else {
            allhomeproduct = displayedProducts.map((data) => (
                <Homeproduct
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    price={data.price}
                    img={data.mainimg}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                />
            ));
        }
    }

    return (
        <div className="container">
            <div className="home-products-show">
                {allhomeproduct}
            </div>
        </div>
    );
}