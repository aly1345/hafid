import AllProductsAPI from "../../../productsdata";
import "./controlproducts.css";
import { useState, useEffect } from "react";

export default function Homepagebtnbar({
    currentproducts,
    setcurrentproducts,
    currentPage,
    setCurrentPage
}) {
    const [selectedhomepageBtn, setSelectedhomepageBtn] = useState(1);
    const [homepagenumberofbuttons, setHomepagenumberofbuttons] = useState(1);

    useEffect(() => {
        let productsnum = currentproducts.length;
        let numberOfButtons;

        if (productsnum === 0) {
            numberOfButtons = 1;
        } else if ((productsnum % 20) === 0) {
            numberOfButtons = productsnum / 20;
        } else {
            numberOfButtons = Math.ceil(productsnum / 20);
        }

        setHomepagenumberofbuttons(numberOfButtons);

        if (currentPage > numberOfButtons) {
            setCurrentPage(1);
            setSelectedhomepageBtn(1);
            window.localStorage.setItem("HomePageBtnSelected", "1");
        }

        setSelectedhomepageBtn(currentPage);
    }, [currentproducts, currentPage, setCurrentPage]);

    const getFirstSevenButtons = () => {
        return [1, 2, 3, 4, 5, 6, 7];
    };

    const getLastSevenButtons = () => {
        return [
            (homepagenumberofbuttons - 6),
            (homepagenumberofbuttons - 5),
            (homepagenumberofbuttons - 4),
            (homepagenumberofbuttons - 3),
            (homepagenumberofbuttons - 2),
            (homepagenumberofbuttons - 1),
            homepagenumberofbuttons
        ].filter(num => num > 0);
    };


    const homepagehandleButtonClick = (buttonId) => {
        setSelectedhomepageBtn(buttonId);
        setCurrentPage(buttonId);
        window.localStorage.setItem("HomePageBtnSelected", buttonId.toString());

    };


    const Homepagemakebuttons = () => {
        const buttons = [];

        if (homepagenumberofbuttons <= 15) {

            for (let i = 1; i <= homepagenumberofbuttons; i++) {
                buttons.push(
                    <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
                        <button
                            className={`button-${selectedhomepageBtn === i ? 'selected' : ''}`}
                            onClick={() => homepagehandleButtonClick(i)}
                        >{i}</button>
                    </div>
                );
            }
        } else {

            const firstSeven = getFirstSevenButtons();
            const lastSeven = getLastSevenButtons();

            if (firstSeven.includes(selectedhomepageBtn)) {

                for (let i = 1; i <= 15; i++) {
                    if (i < 14) {
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
                                <button
                                    className={`button-${selectedhomepageBtn === i ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(i)}
                                >{i}</button>
                            </div>
                        );
                    } else if (i === 14) {
                        buttons.push(
                            <div className="control-section-button without-button" key="dots1">
                                <p>...</p>
                            </div>
                        );
                    } else {
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${homepagenumberofbuttons}`} key={homepagenumberofbuttons}>
                                <button
                                    className={`button-${selectedhomepageBtn === homepagenumberofbuttons ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(homepagenumberofbuttons)}
                                >{homepagenumberofbuttons}</button>
                            </div>
                        );
                    }
                }
            } else if (lastSeven.includes(selectedhomepageBtn)) {

                for (let i = homepagenumberofbuttons; i >= (homepagenumberofbuttons - 14); i--) {
                    if (i > (homepagenumberofbuttons - 13)) {
                        buttons.unshift(
                            <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
                                <button
                                    className={`button-${selectedhomepageBtn === i ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(i)}
                                >{i}</button>
                            </div>
                        );
                    } else if (i === (homepagenumberofbuttons - 13)) {
                        buttons.unshift(
                            <div className="control-section-button without-button" key="dots2">
                                <p>...</p>
                            </div>
                        );
                    } else {
                        buttons.unshift(
                            <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
                                <button
                                    className={`button-${selectedhomepageBtn === 1 ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(1)}
                                >{1}</button>
                            </div>
                        );
                        break;
                    }
                }
            } else {

                for (let i = 1; i <= 15; i++) {
                    if (i === 1) {
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
                                <button
                                    className={`button-${selectedhomepageBtn === 1 ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(1)}
                                >{1}</button>
                            </div>
                        );
                    } else if (i === 2) {
                        buttons.push(
                            <div className="control-section-button without-button" key="dots3">
                                <p>...</p>
                            </div>
                        );
                    } else if (i >= 3 && i <= 7) {
                        const pageNum = selectedhomepageBtn - 5 + i;
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${pageNum}`} key={pageNum}>
                                <button
                                    className={`button-${selectedhomepageBtn === pageNum ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(pageNum)}
                                >{pageNum}</button>
                            </div>
                        );
                    } else if (i === 8) {
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${selectedhomepageBtn}`} key={selectedhomepageBtn}>
                                <button
                                    className="button-selected"
                                    onClick={() => homepagehandleButtonClick(selectedhomepageBtn)}
                                >{selectedhomepageBtn}</button>
                            </div>
                        );
                    } else if (i >= 9 && i <= 13) {
                        const pageNum = selectedhomepageBtn + i - 8;
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${pageNum}`} key={pageNum}>
                                <button
                                    className={`button-${selectedhomepageBtn === pageNum ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(pageNum)}
                                >{pageNum}</button>
                            </div>
                        );
                    } else if (i === 14) {
                        buttons.push(
                            <div className="control-section-button without-button" key="dots4">
                                <p>...</p>
                            </div>
                        );
                    } else {
                        buttons.push(
                            <div className="control-section-button" id={`control-section-button-${homepagenumberofbuttons}`} key={homepagenumberofbuttons}>
                                <button
                                    className={`button-${selectedhomepageBtn === homepagenumberofbuttons ? 'selected' : ''}`}
                                    onClick={() => homepagehandleButtonClick(homepagenumberofbuttons)}
                                >{homepagenumberofbuttons}</button>
                            </div>
                        );
                    }
                }
            }
        }

        return buttons;
    };


    if (homepagenumberofbuttons <= 1) {
        return null;
    }

    return (
        <div className="control-section">
            <div className="control-section-buttons">
                <Homepagemakebuttons />
            </div>
        </div>
    );
}
