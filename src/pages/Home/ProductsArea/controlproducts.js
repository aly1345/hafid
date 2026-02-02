// import AllProductsAPI from "../../../productsdata";
// import "./controlproducts.css";
// import { useState } from "react";










// window.localStorage.setItem("HomePageBtnSelected", "1");




// let homepagenumberofbuttons;
// let productsnum = AllProductsAPI.length;

// if ((productsnum % 20) === 0) {
//     homepagenumberofbuttons = productsnum / 20;
// } else {
//     homepagenumberofbuttons = Math.ceil(productsnum / 20);
// }

// let firstsevenbuttons = [1, 2, 3, 4, 5, 6, 7];
// let lastsevenbuttons = [
//     (homepagenumberofbuttons - 6),
//     (homepagenumberofbuttons - 5),
//     (homepagenumberofbuttons - 4),
//     (homepagenumberofbuttons - 3),
//     (homepagenumberofbuttons - 2),
//     (homepagenumberofbuttons - 1),
//     homepagenumberofbuttons
// ];






// export default function Homepagebtnbar() {

//     const [selectedhomepageBtn, setSelectedhomepageBtn] = useState(1);

//     // --------------------------------------------------------------------------------------------

//     function Homepagecontrolcomments() {

//         function Homepagemakebuttons() {

//             const homepagehandleButtonClick = (buttonId) => {
//                 setSelectedhomepageBtn(buttonId);
//                 window.localStorage.HomePageBtnSelected = buttonId;
//             };
//             const buttons = [];

//             if (homepagenumberofbuttons <= 15) {// --------------- if number of buttons is less than or equal 15 ---------------
//                 for (let i = 1; i <= homepagenumberofbuttons; i++) {
//                     buttons.push(
//                         <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                             <button
//                                 className={`button-${selectedhomepageBtn === i ? 'selected' : ''}`}
//                                 onClick={() => homepagehandleButtonClick(i)}
//                                 key={i}
//                             >{i}</button>
//                         </div>
//                     );
//                 }
//             }
//             else {// --------------- if number of buttons is more than 15 ---------------

//                 if (firstsevenbuttons.includes(selectedhomepageBtn)) {// ---------- if selected button is in first seven buttons ----------
//                     for (let i = 1; i <= 15; i++) {

//                         if (i < 14) {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                                     <button
//                                         className={`button-${selectedhomepageBtn === i ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(i)}
//                                         key={i}
//                                     >{i}</button>
//                                 </div>
//                             );
//                         } else if (i === 14) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${homepagenumberofbuttons}`} key={homepagenumberofbuttons}>
//                                     <button
//                                         className={`button-${selectedhomepageBtn === homepagenumberofbuttons ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(homepagenumberofbuttons)}
//                                         key={homepagenumberofbuttons}
//                                     >{homepagenumberofbuttons}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 }
//                 else if (lastsevenbuttons.includes(selectedhomepageBtn)) {// ---------- if selected button is in last seven buttons ----------
//                     for (let i = homepagenumberofbuttons; i >= (homepagenumberofbuttons - 14); i--) {
//                         if (i > (homepagenumberofbuttons - 13)) {
//                             buttons.unshift(
//                                 <div className="control-section-button" id={`control-section-button-${i}`} key={i}>
//                                     <button
//                                         className={`button-${selectedhomepageBtn === i ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(i)}
//                                         key={i}
//                                     >{i}</button>
//                                 </div>
//                             );
//                         } else if (i === (homepagenumberofbuttons - 13)) {
//                             buttons.unshift(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.unshift(
//                                 <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
//                                     <button
//                                         className={`button-${selectedhomepageBtn === 1 ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(1)}
//                                         key={1}
//                                     >{1}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 }
//                 else {// ---------- if selected button is middel button from buttons ----------
//                     for (let i = 1; i <= 15; i++) {
//                         if (i === 1) {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${1}`} key={1}>
//                                     <button
//                                         className={`button-${selectedhomepageBtn === 1 ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(1)}
//                                         key={1}
//                                     >{1}</button>
//                                 </div>
//                             );
//                         } else if (i === 2) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else if ((i <= 7 && i > 2) || (i <= 13 && i > 8)) {
//                             buttons.push(
//                                 <div className="control-section-button"
//                                     id={`control-section-button-${(selectedhomepageBtn + i) - 8}`}
//                                     key={(selectedhomepageBtn + i) - 8}>
//                                     <button
//                                         className={`button-${selectedhomepageBtn === ((selectedhomepageBtn + i) - 8) ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick((selectedhomepageBtn + i) - 8)}
//                                         key={(selectedhomepageBtn + i) - 8}
//                                     >{(selectedhomepageBtn + i) - 8}</button>
//                                 </div>
//                             );
//                         } else if (i === 8) {
//                             buttons.push(
//                                 <div className="control-section-button"
//                                     id={`control-section-button-${selectedhomepageBtn}`}
//                                     key={selectedhomepageBtn}>
//                                     <button
//                                         className={"button-selected"}  //{`button-${selectedhomepageBtn === selectedhomepageBtn ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(selectedhomepageBtn)}
//                                         key={selectedhomepageBtn}
//                                     >{selectedhomepageBtn}</button>
//                                 </div>
//                             );
//                         }
//                         else if (i === 14) {
//                             buttons.push(
//                                 <div className="control-section-button without-button" id={`control-section-button-${i}`} key={i}>
//                                     <p>...</p>
//                                 </div>
//                             );
//                         } else {
//                             buttons.push(
//                                 <div className="control-section-button" id={`control-section-button-${homepagenumberofbuttons}`} key={homepagenumberofbuttons}>
//                                     <button
//                                         className={"button-"}  //{`button-${selectedhomepageBtn === `${homepagenumberofbuttons}` ? 'selected' : ''}`}
//                                         onClick={() => homepagehandleButtonClick(homepagenumberofbuttons)}
//                                         key={homepagenumberofbuttons}
//                                     >{homepagenumberofbuttons}</button>
//                                 </div>
//                             );
//                         }
//                     }
//                 }
//             }
//             return buttons;
//         }
//         return (
//             <div className="control-section">
//                 <div className="control-section-buttons">
//                     <Homepagemakebuttons />
//                 </div>
//             </div>
//         )
//     }


//     return (
//         <Homepagecontrolcomments />
//     )
// }









// ----------------------------------------------------------------------------------------------------------------------------













// ========== START OF PAGINATION MODIFICATION ==========
import AllProductsAPI from "../../../productsdata";
import "./controlproducts.css";
import { useState, useEffect } from "react";

export default function Homepagebtnbar({
    currentproducts, // المنتجات الحالية (بناءً على البحث أو القسم)
    setcurrentproducts, // دالة تحديث المنتجات (غير مستخدمة هنا لكن قد تكون مفيدة)
    currentPage, // الصفحة الحالية
    setCurrentPage // دالة تغيير الصفحة
}) {
    const [selectedhomepageBtn, setSelectedhomepageBtn] = useState(1);
    const [homepagenumberofbuttons, setHomepagenumberofbuttons] = useState(1);

    // حساب عدد الأزرار بناءً على عدد المنتجات الحالية
    useEffect(() => {
        let productsnum = currentproducts.length;
        let numberOfButtons;

        if (productsnum === 0) {
            numberOfButtons = 1; // صفحة واحدة حتى لو لا توجد منتجات
        } else if ((productsnum % 20) === 0) {
            numberOfButtons = productsnum / 20;
        } else {
            numberOfButtons = Math.ceil(productsnum / 20);
        }

        setHomepagenumberofbuttons(numberOfButtons);

        // إذا كانت الصفحة الحالية أكبر من عدد الصفحات الجديد، العودة للصفحة الأولى
        if (currentPage > numberOfButtons) {
            setCurrentPage(1);
            setSelectedhomepageBtn(1);
            window.localStorage.setItem("HomePageBtnSelected", "1");
        }

        // تحديث الزر المحدد عند تغيير الصفحة
        setSelectedhomepageBtn(currentPage);
    }, [currentproducts, currentPage, setCurrentPage]);

    // الحصول على الأزرار الأولى
    const getFirstSevenButtons = () => {
        return [1, 2, 3, 4, 5, 6, 7];
    };

    // الحصول على الأزرار الأخيرة
    const getLastSevenButtons = () => {
        return [
            (homepagenumberofbuttons - 6),
            (homepagenumberofbuttons - 5),
            (homepagenumberofbuttons - 4),
            (homepagenumberofbuttons - 3),
            (homepagenumberofbuttons - 2),
            (homepagenumberofbuttons - 1),
            homepagenumberofbuttons
        ].filter(num => num > 0); // التأكد من أن الأرقام موجبة
    };

    // دالة التعامل مع النقر على زر
    const homepagehandleButtonClick = (buttonId) => {
        setSelectedhomepageBtn(buttonId);
        setCurrentPage(buttonId);
        window.localStorage.setItem("HomePageBtnSelected", buttonId.toString());

        // التمرير لأعلى الصفحة عند تغيير الصفحة
        // window.scrollTo({
        //     top: 100,
        //     behavior: 'smooth'
        // });
    };

    // دالة إنشاء الأزرار
    const Homepagemakebuttons = () => {
        const buttons = [];

        if (homepagenumberofbuttons <= 15) {
            // إذا كان عدد الأزرار 15 أو أقل
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
            // إذا كان عدد الأزرار أكثر من 15
            const firstSeven = getFirstSevenButtons();
            const lastSeven = getLastSevenButtons();

            if (firstSeven.includes(selectedhomepageBtn)) {
                // إذا كان الزر المحدد من الأزرار السبعة الأولى
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
                // إذا كان الزر المحدد من الأزرار السبعة الأخيرة
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
                // إذا كان الزر المحدد في المنتصف
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

    // إرجاع القسم الرئيسي فقط إذا كان هناك أكثر من صفحة
    if (homepagenumberofbuttons <= 1) {
        return null; // لا تظهر أزرار التصفح إذا كان هناك صفحة واحدة فقط
    }

    return (
        <div className="control-section">
            <div className="control-section-buttons">
                <Homepagemakebuttons />
            </div>
        </div>
    );
}
// ========== END OF PAGINATION MODIFICATION ==========