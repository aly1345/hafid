import img1 from "./img/products-photo/00000.webp";
import img2 from "./img/products-photo/boots-7288665_1280.jpg";
import img3 from "./img/products-photo/running-shoe-371624_1280.jpg";
import img4 from "./img/products-photo/running-shoe-371625_1280.jpg";
import img5 from "./img/products-photo/shoe-5058300_1280.jpg";
import img6 from "./img/products-photo/shoes-832875_1280.jpg";
import img7 from "./img/products-photo/shoes-1433925_1280.jpg";
import img8 from "./img/products-photo/sneakers-531172_1280.jpg";
import img9 from "./img/products-photo/sport-shoes-1470061_1280.jpg";
import img10 from "./img/products-photo/sports-shoe-2465915_1280.jpg";
import img11 from "./img/products-photo/tennis-7968714_1280.png";
import img12 from "./img/products-photo/walking-boots-3054634_1280.jpg";
import img13 from "./img/products-photo/baby-shoes-974715_1280.jpg";
import img14 from "./img/products-photo/baby-shoes-2050828_1280.jpg";
import img15 from "./img/products-photo/baby-shoes-3644176_1280.jpg";
import img16 from "./img/products-photo/birth-5407332_1280.jpg";
import img17 from "./img/products-photo/childrens-shoes-687959_1280.jpg";
import img18 from "./img/products-photo/shoes-266849_1280.jpg";
import img19 from "./img/products-photo/black-shoes-2752226_1280.jpg";
import img20 from "./img/products-photo/brogue-shoes-5983822_1280.jpg";
import img21 from "./img/products-photo/brogue-shoes-5994356_1280.jpg";
import img22 from "./img/products-photo/dress-shoes-7855820_1280.jfif";    // can't read in programing in first
import img23 from "./img/products-photo/leather-shoes-2661198_1280.jpg";
import img24 from "./img/products-photo/loafers-6079036_1280.jpg";
import img25 from "./img/products-photo/oxford-shoes-6078951_1280.jpg";
import img26 from "./img/products-photo/shoes-men-3743549_1280.jpg";
import img27 from "./img/products-photo/fashion-1284496_1280.jpg";
import img28 from "./img/products-photo/high-heels-335003_1280.jpg";
import img29 from "./img/products-photo/high-heels-2476214_1280.jpg";
import img30 from "./img/products-photo/parquet-2152249_1280.jpg";
import img31 from "./img/products-photo/shoe-2258549_1280.jpg";
import img32 from "./img/products-photo/shoe-4120554_1280.jpg";
import img33 from "./img/products-photo/shoes-6701631_1280.jpg";
import img34 from "./img/products-photo/womens-shoes-178163_1280.jpg";
import img35 from "./img/products-photo/bag-6182625_1280.png";
import img36 from "./img/products-photo/backpack-2459934_1280.png";
import img37 from "./img/products-photo/backpack-8029117_1280.png";
import img38 from "./img/products-photo/backpack-8149616_1280.png";
import img39 from "./img/products-photo/201123N042436901_f34caca5-dd49-40d1-9bcb-477176d9490b.webp";
import img40 from "./img/products-photo/Cross_bag.webp";
import img41 from "./img/products-photo/il_fullxfull.3456617751_du19.webp";
import img42 from "./img/products-photo/jet-cross-bag-cross-bag-lupo-bianco-931063.webp";
import img43 from "./img/products-photo/leather-wallet-7006894_1280.jpg";
import img44 from "./img/products-photo/money-1934036_1280.jpg";
import img45 from "./img/products-photo/money-1934039_1280.jpg";
import img46 from "./img/products-photo/wallet-494169_1280.jpg";
import img47 from "./img/products-photo/wallet-4977021_1280.jpg";
import img48 from "./img/products-photo/wallet-5647_1280.jpg";
import img49 from "./img/products-photo/stainless-878315_1280.jpg";
import img50 from "./img/products-photo/stainless-878316_1280.jpg";
import img51 from "./img/products-photo/stainless-878317_1280.jpg";
import img52 from "./img/products-photo/stainless-878323_1280.jpg";
import img53 from "./img/products-photo/stainless-878336_1280.jpg";
import img54 from "./img/products-photo/stainless-878345_1280.jpg";
import img55 from "./img/products-photo/clock-2113218_1280.jpg";
import img56 from "./img/products-photo/clock-2113254_1280.jpg";
import img57 from "./img/products-photo/mens-watch-2239009_1280.jpg";
import img58 from "./img/products-photo/wrist-watch-2745278_1280.png";
import img59 from "./img/products-photo/wrist-watch-5350376_1280.jpg";
import img60 from "./img/products-photo/jd_2023_10_30_campaign_bfcm-185c-1702396046043.webp";
import img61 from "./img/products-photo/Plan-A-All-in-One-Shoe-Cleaning-Kit.jpg";
import img62 from "./img/products-photo/SHOEMGK-13.jpg";
import img63 from "./img/products-photo/Web_20336---Premium-Bike-Shoe-Cleaner-250ml-_Shoe-Kit__2022_1_7814215d-91fd-449a-ac38-692397c19ce6.webp";


let AllProductsAPI = [
    {
        id: 1,
        name: "قميص رجالي قطني",
        price: "120",
        mainimg: img1,
        description: "قميص قطني ناعم ومريح للارتداء اليومي",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "120",
        imgs: [img1, img1, img1],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "120", sizesAtColor: ["36", "38", "40", "42"] },
            { colorNameInArabic: "أزرق", price: "125", sizesAtColor: ["38", "40", "42", "44"] }
        ],
        comments: [
            { id: 1, text: "منتج رائع وجودة عالية" },
            { id: 2, text: "المقاسات دقيقة والقماش ناعم" }
        ]
    },
    {
        id: 2,
        name: "بنطلون جينز",
        price: "250",
        mainimg: img2,
        description: "بنطلون جينز عالي الجودة بتصميم عصري",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "250",
        imgs: [img2, img2],
        colors_sizes: [
            { colorNameInArabic: "أزرق غامق", price: "250", sizesAtColor: ["34", "36", "38", "40"] }
        ],
        comments: [
            { id: 3, text: "مريح وبتصميم جميل" }
        ]
    },
    {
        id: 3,
        name: "فستان سهرة",
        price: "450",
        mainimg: img3,
        description: "فستان سهرة أنيق من الساتان",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "450",
        imgs: [img3, img3],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "450", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أحمر", price: "470", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 4, text: "فستان رائع للمناسبات" },
            { id: 5, text: "التفصيلات رائعة والجودة عالية" }
        ]
    },
    {
        id: 4,
        name: "حذاء رياضي",
        price: "320",
        mainimg: img4,
        description: "حذاء رياضي مريح للرياضة اليومية",
        category: "أحذية",
        collection: "btn-4",
        global_price: "320",
        imgs: [img4, img4],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "320", sizesAtColor: ["40", "41", "42", "43"] },
            { colorNameInArabic: "أبيض", price: "330", sizesAtColor: ["39", "40", "41", "42"] }
        ],
        comments: [
            { id: 6, text: "مريح جداً للمشي الطويل" }
        ]
    },
    {
        id: 5,
        name: "ساعة يدوية",
        price: "180",
        mainimg: img5,
        description: "ساعة يدوية بتصميم كلاسيكي",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "180",
        imgs: [img5, img5],
        colors_sizes: [
            { colorNameInArabic: "فضي", price: "180", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "ذهبي", price: "190", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 7, text: "ساعة أنيقة وجودة جيدة" },
            { id: 8, text: "السعر مناسب للجودة" }
        ]
    },
    {
        id: 6,
        name: "حقيبة ظهر",
        price: "150",
        mainimg: img6,
        description: "حقيبة ظهر متعددة الجيوب",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "150",
        imgs: [img6, img6],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "150", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "رمادي", price: "155", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 9, text: "حقيبة عملية ومتينة" }
        ]
    },
    {
        id: 7,
        name: "قميص بولو",
        price: "140",
        mainimg: img7,
        description: "قميص بولو قطني بأناقة",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "140",
        imgs: [img7, img7],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "140", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "رمادي", price: "145", sizesAtColor: ["40", "42", "44", "46"] }
        ],
        comments: [
            { id: 10, text: "مقاسات دقيقة وجودة القماش جيدة" }
        ]
    },
    {
        id: 8,
        name: "تنورة نسائية",
        price: "130",
        mainimg: img8,
        description: "تنورة قطنية بتصميم عصري",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "130",
        imgs: [img8, img8],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "130", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أزرق", price: "135", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 11, text: "التنورة جميلة ومقاسها مناسب" }
        ]
    },
    {
        id: 9,
        name: "جاكيت شتوي",
        price: "280",
        mainimg: img9,
        description: "جاكيت شتوي دافئ ومقاوم للماء",
        category: "ملابس",
        collection: "btn-2",
        global_price: "280",
        imgs: [img9, img9],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "280", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أحمر", price: "290", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 12, text: "دافئ جداً ومناسب للشتاء" },
            { id: 13, text: "الجودة تستحق السعر" }
        ]
    },
    {
        id: 10,
        name: "قميص نسائي",
        price: "110",
        mainimg: img10,
        description: "قميص نسائي قطني بسيط وأنيق",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "110",
        imgs: [img10, img10],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "110", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "وردي", price: "115", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 14, text: "قميص مريح للارتداء اليومي" }
        ]
    },
    {
        id: 11,
        name: "بنطلون رسمي",
        price: "220",
        mainimg: img11,
        description: "بنطلون رسمي من الصوف",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "220",
        imgs: [img11, img11],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "220", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "رمادي", price: "225", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 15, text: "أنيق ومناسب للعمل" }
        ]
    },
    {
        id: 12,
        name: "بلوزة صوف",
        price: "170",
        mainimg: img12,
        description: "بلوزة صوف دافئة للشتاء",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "170",
        imgs: [img12, img12],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "170", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أحمر", price: "175", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 16, text: "دافئة ومريحة في الشتاء" }
        ]
    },
    {
        id: 13,
        name: "حذاء رسمي",
        price: "290",
        mainimg: img13,
        description: "حذاء رسمي من الجلد الطبيعي",
        category: "أحذية",
        collection: "btn-4",
        global_price: "290",
        imgs: [img13, img13],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "290", sizesAtColor: ["41", "42", "43", "44"] },
            { colorNameInArabic: "بني", price: "295", sizesAtColor: ["40", "41", "42", "43"] }
        ],
        comments: [
            { id: 17, text: "حذاء أنيق ومناسب للمناسبات" }
        ]
    },
    {
        id: 14,
        name: "سوار نسائي",
        price: "85",
        mainimg: img14,
        description: "سوار نسائي بتصميم مميز",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "85",
        imgs: [img14, img14],
        colors_sizes: [
            { colorNameInArabic: "فضي", price: "85", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "ذهبي", price: "90", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 18, text: "سوار جميل وتصميمه مميز" }
        ]
    },
    {
        id: 15,
        name: "قميص فلانيل",
        price: "160",
        mainimg: img15,
        description: "قميص فلانيل دافئ ومريح",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "160",
        imgs: [img15, img15],
        colors_sizes: [
            { colorNameInArabic: "أحمر", price: "160", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أزرق", price: "165", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 19, text: "دافئ ومناسب للطقس البارد" }
        ]
    },
    {
        id: 16,
        name: "فستان صيفي",
        price: "190",
        mainimg: img16,
        description: "فستان صيفي خفيف ومريح",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "190",
        imgs: [img16, img16],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "190", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أصفر", price: "195", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 20, text: "فستان مريح للصيف" }
        ]
    },
    {
        id: 17,
        name: "جينز واسع",
        price: "270",
        mainimg: img17,
        description: "جينز واسع بتصميم عريض",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "270",
        imgs: [img17, img17],
        colors_sizes: [
            { colorNameInArabic: "أزرق غامق", price: "270", sizesAtColor: ["36", "38", "40", "42"] },
            { colorNameInArabic: "أسود", price: "275", sizesAtColor: ["38", "40", "42", "44"] }
        ],
        comments: [
            { id: 21, text: "مريح وبتصميم عصري" }
        ]
    },
    {
        id: 18,
        name: "حقيبة يد",
        price: "120",
        mainimg: img18,
        description: "حقيبة يد نسائية بتصميم أنيق",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "120",
        imgs: [img18, img18],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "120", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "بني", price: "125", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 22, text: "حقيبة عملية وجميلة" }
        ]
    },
    {
        id: 19,
        name: "قميص كم طويل",
        price: "130",
        mainimg: img19,
        description: "قميص قطني بكم طويل",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "130",
        imgs: [img19, img19],
        colors_sizes: [
            { colorNameInArabic: "رمادي", price: "130", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "أخضر", price: "135", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 23, text: "مريح للطقس البارد" }
        ]
    },
    {
        id: 20,
        name: "تنورة جينز",
        price: "140",
        mainimg: img20,
        description: "تنورة جينز بتصميم عصري",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "140",
        imgs: [img20, img20],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "140", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أسود", price: "145", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 24, text: "تنورة أنيقة ومناسبة" }
        ]
    },
    {
        id: 21,
        name: "سترة جلد",
        price: "380",
        mainimg: img21,
        description: "سترة جلدية بتصميم كلاسيكي",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "380",
        imgs: [img21, img21],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "380", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "بني", price: "390", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 25, text: "سترة أنيقة وجودة الجلد جيدة" },
            { id: 26, text: "مناسب للخروج في المساء" }
        ]
    },
    {
        id: 22,
        name: "قميص نوم",
        price: "95",
        mainimg: img22,
        description: "قميص نوم قطني مريح",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "95",
        imgs: [img22, img22],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "95", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "وردي", price: "100", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 27, text: "مريح جداً للنوم" }
        ]
    },
    {
        id: 23,
        name: "بنطلون رياضي",
        price: "160",
        mainimg: img23,
        description: "بنطلون رياضي مريح للتدريبات",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "160",
        imgs: [img23, img23],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "160", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "رمادي", price: "165", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 28, text: "مريح للرياضة والتدريبات" }
        ]
    },
    {
        id: 24,
        name: "فستان طويل",
        price: "320",
        mainimg: img24,
        description: "فستان طويل بتصميم أنيق",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "320",
        imgs: [img24, img24],
        colors_sizes: [
            { colorNameInArabic: "أحمر", price: "320", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أسود", price: "330", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 29, text: "فستان رائع للمناسبات الرسمية" }
        ]
    },
    {
        id: 25,
        name: "حذاء شتوي",
        price: "310",
        mainimg: img25,
        description: "حذاء شتوي دافئ ومقاوم للماء",
        category: "أحذية",
        collection: "btn-4",
        global_price: "310",
        imgs: [img25, img25],
        colors_sizes: [
            { colorNameInArabic: "بني", price: "310", sizesAtColor: ["41", "42", "43", "44"] },
            { colorNameInArabic: "أسود", price: "315", sizesAtColor: ["40", "41", "42", "43"] }
        ],
        comments: [
            { id: 30, text: "دافئ ومريح في الشتاء" }
        ]
    },
    {
        id: 26,
        name: "قلادة نسائية",
        price: "75",
        mainimg: img26,
        description: "قلادة نسائية بتصميم مميز",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "75",
        imgs: [img26, img26],
        colors_sizes: [
            { colorNameInArabic: "فضي", price: "75", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "ذهبي", price: "80", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 31, text: "قلادة جميلة وتصميمها رائع" }
        ]
    },
    {
        id: 27,
        name: "قميص رسمي",
        price: "175",
        mainimg: img27,
        description: "قميص رسمي من القطن المصري",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "175",
        imgs: [img27, img27],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "175", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "أزرق فاتح", price: "180", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 32, text: "أنيق ومناسب للمكتب" }
        ]
    },
    {
        id: 28,
        name: "بلوزة صيفية",
        price: "105",
        mainimg: img28,
        description: "بلوزة صيفية خفيفة وملونة",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "105",
        imgs: [img28, img28],
        colors_sizes: [
            { colorNameInArabic: "أصفر", price: "105", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أخضر", price: "110", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 33, text: "بلوزة مريحة للصيف" }
        ]
    },
    {
        id: 29,
        name: "جينز ممزق",
        price: "240",
        mainimg: img29,
        description: "جينز ممزق بتصميم عصري",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "240",
        imgs: [img29, img29],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "240", sizesAtColor: ["36", "38", "40", "42"] },
            { colorNameInArabic: "رمادي", price: "245", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 34, text: "تصميم عصري وجميل" }
        ]
    },
    {
        id: 30,
        name: "حقيبة كمبيوتر",
        price: "135",
        mainimg: img30,
        description: "حقيبة لحمل الكمبيوتر المحمول",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "135",
        imgs: [img30, img30],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "135", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "رمادي", price: "140", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 35, text: "حقيبة عملية لحمل اللابتوب" }
        ]
    },
    {
        id: 31,
        name: "قميص فلانيل مخطط",
        price: "155",
        mainimg: img31,
        description: "قميص فلانيل مخطط بألوان متنوعة",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "155",
        imgs: [img31, img31],
        colors_sizes: [
            { colorNameInArabic: "أحمر وأسود", price: "155", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أزرق وأبيض", price: "160", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 36, text: "دافئ والألوان جميلة" }
        ]
    },
    {
        id: 32,
        name: "فستان قصير",
        price: "210",
        mainimg: img32,
        description: "فستان قصير بتصميم أنيق",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "210",
        imgs: [img32, img32],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "210", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أسود", price: "215", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 37, text: "فستان أنيق للخروج" }
        ]
    },
    {
        id: 33,
        name: "جاكيت رياضي",
        price: "230",
        mainimg: img33,
        description: "جاكيت رياضي خفيف",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "230",
        imgs: [img33, img33],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "230", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أسود", price: "235", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 38, text: "خفيف ومريح للرياضة" }
        ]
    },
    {
        id: 34,
        name: "قميص نوم حرير",
        price: "125",
        mainimg: img34,
        description: "قميص نوم من الحرير الناعم",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "125",
        imgs: [img34, img34],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "125", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أسود", price: "130", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 39, text: "ناعم ومريح جداً للنوم" }
        ]
    },
    {
        id: 35,
        name: "بنطلون جينز ضيق",
        price: "260",
        mainimg: img35,
        description: "بنطلون جينز ضيق بتصميم عصري",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "260",
        imgs: [img35, img35],
        colors_sizes: [
            { colorNameInArabic: "أزرق غامق", price: "260", sizesAtColor: ["36", "38", "40", "42"] },
            { colorNameInArabic: "أسود", price: "265", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 40, text: "مقاس دقيق وتصميم عصري" }
        ]
    },
    {
        id: 36,
        name: "فستان مطرز",
        price: "280",
        mainimg: img36,
        description: "فستان مطرز بتصميم تقليدي",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "280",
        imgs: [img36, img36],
        colors_sizes: [
            { colorNameInArabic: "أحمر", price: "280", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أزرق", price: "285", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 41, text: "التطريز رائع والجودة عالية" }
        ]
    },
    {
        id: 37,
        name: "حذاء كاجوال",
        price: "270",
        mainimg: img37,
        description: "حذاء كاجوال مريح للارتداء اليومي",
        category: "أحذية",
        collection: "btn-4",
        global_price: "270",
        imgs: [img37, img37],
        colors_sizes: [
            { colorNameInArabic: "بني", price: "270", sizesAtColor: ["40", "41", "42", "43"] },
            { colorNameInArabic: "أسود", price: "275", sizesAtColor: ["39", "40", "41", "42"] }
        ],
        comments: [
            { id: 42, text: "مريح جداً للارتداء اليومي" }
        ]
    },
    {
        id: 38,
        name: "سلسلة ذهبية",
        price: "95",
        mainimg: img38,
        description: "سلسلة ذهبية بتصميم بسيط",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "95",
        imgs: [img38, img38],
        colors_sizes: [
            { colorNameInArabic: "ذهبي", price: "95", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "فضي", price: "90", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 43, text: "سلسلة أنيقة وتصميمها جميل" }
        ]
    },
    {
        id: 39,
        name: "قميص بولو مخطط",
        price: "145",
        mainimg: img39,
        description: "قميص بولو مخطط بأناقة",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "145",
        imgs: [img39, img39],
        colors_sizes: [
            { colorNameInArabic: "أزرق وأبيض", price: "145", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "أحمر وأبيض", price: "150", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 44, text: "أنيق ومناسب للخروج" }
        ]
    },
    {
        id: 40,
        name: "تنورة طويلة",
        price: "175",
        mainimg: img40,
        description: "تنورة طويلة بتصميم كلاسيكي",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "175",
        imgs: [img40, img40],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "175", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "رمادي", price: "180", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 45, text: "تنورة أنيقة وطويلة" }
        ]
    },
    {
        id: 41,
        name: "جاكيت جينز",
        price: "290",
        mainimg: img41,
        description: "جاكيت جينز كلاسيكي",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "290",
        imgs: [img41, img41],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "290", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أسود", price: "295", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 46, text: "جاكيت كلاسيكي وعملي" }
        ]
    },
    {
        id: 42,
        name: "قميص نوم قطني",
        price: "85",
        mainimg: img42,
        description: "قميص نوم من القطن الناعم",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "85",
        imgs: [img42, img42],
        colors_sizes: [
            { colorNameInArabic: "وردي", price: "85", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أزرق", price: "90", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 47, text: "مريح وناعم على البشرة" }
        ]
    },
    {
        id: 43,
        name: "بنطلون كاجوال",
        price: "180",
        mainimg: img43,
        description: "بنطلون كاجوال مريح",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "180",
        imgs: [img43, img43],
        colors_sizes: [
            { colorNameInArabic: "بني", price: "180", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "أخضر", price: "185", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 48, text: "مريح للارتداء اليومي" }
        ]
    },
    {
        id: 44,
        name: "فستان ماكسي",
        price: "310",
        mainimg: img44,
        description: "فستان ماكسي طويل بأناقة",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "310",
        imgs: [img44, img44],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "310", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أزرق", price: "315", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 49, text: "فستان طويل وأنيق" }
        ]
    },
    {
        id: 45,
        name: "حذاء جلد طبيعي",
        price: "340",
        mainimg: img45,
        description: "حذاء من الجلد الطبيعي عالي الجودة",
        category: "أحذية",
        collection: "btn-4",
        global_price: "340",
        imgs: [img45, img45],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "340", sizesAtColor: ["41", "42", "43", "44"] },
            { colorNameInArabic: "بني", price: "345", sizesAtColor: ["40", "41", "42", "43"] }
        ],
        comments: [
            { id: 50, text: "جودة الجلد ممتازة" }
        ]
    },
    {
        id: 46,
        name: "خاتم فضي",
        price: "65",
        mainimg: img46,
        description: "خاتم فضي بتصميم بسيط",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "65",
        imgs: [img46, img46],
        colors_sizes: [
            { colorNameInArabic: "فضي", price: "65", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "ذهبي", price: "70", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 51, text: "خاتم أنيق وتصميمه بسيط" }
        ]
    },
    {
        id: 47,
        name: "قميص فلانيل دافئ",
        price: "165",
        mainimg: img47,
        description: "قميص فلانيل سميك ودافئ",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "165",
        imgs: [img47, img47],
        colors_sizes: [
            { colorNameInArabic: "أحمر وأسود", price: "165", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أزرق وأسود", price: "170", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 52, text: "دافئ جداً في الشتاء" }
        ]
    },
    {
        id: 48,
        name: "فستان بيبي دول",
        price: "195",
        mainimg: img48,
        description: "فستان بيبي دول بتصميم أنثوي",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "195",
        imgs: [img48, img48],
        colors_sizes: [
            { colorNameInArabic: "وردي", price: "195", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أبيض", price: "200", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 53, text: "فستان جميل وتصميمه أنثوي" }
        ]
    },
    {
        id: 49,
        name: "جينز كاجوال",
        price: "220",
        mainimg: img49,
        description: "جينز كاجوال مريح",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "220",
        imgs: [img49, img49],
        colors_sizes: [
            { colorNameInArabic: "أزرق فاتح", price: "220", sizesAtColor: ["36", "38", "40", "42"] },
            { colorNameInArabic: "رمادي", price: "225", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 54, text: "مريح للارتداء اليومي" }
        ]
    },
    {
        id: 50,
        name: "حقيبة سفر",
        price: "185",
        mainimg: img50,
        description: "حقيبة سفر متوسطة الحجم",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "185",
        imgs: [img50, img50],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "185", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "أزرق", price: "190", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 55, text: "حقيبة عملية للسفر" }
        ]
    },
    {
        id: 51,
        name: "قميص كم قصير",
        price: "115",
        mainimg: img51,
        description: "قميص قطني بكم قصير للصيف",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "115",
        imgs: [img51, img51],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "115", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "أزرق", price: "120", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 56, text: "مريح للطقس الحار" }
        ]
    },
    {
        id: 52,
        name: "تنورة جلد",
        price: "210",
        mainimg: img52,
        description: "تنورة جلدية بتصميم عصري",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "210",
        imgs: [img52, img52],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "210", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "بني", price: "215", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 57, text: "تنورة أنيقة وجلدها جيد" }
        ]
    },
    {
        id: 53,
        name: "جاكيت صوف",
        price: "270",
        mainimg: img53,
        description: "جاكيت صوف دافئ للشتاء",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "270",
        imgs: [img53, img53],
        colors_sizes: [
            { colorNameInArabic: "رمادي", price: "270", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "بني", price: "275", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 58, text: "دافئ ومناسب للطقس البارد" }
        ]
    },
    {
        id: 54,
        name: "قميص نوم حريري",
        price: "110",
        mainimg: img54,
        description: "قميص نوم من الحرير الصناعي",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "110",
        imgs: [img54, img54],
        colors_sizes: [
            { colorNameInArabic: "أحمر", price: "110", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "أسود", price: "115", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 59, text: "ناعم ومريح للنوم" }
        ]
    },
    {
        id: 55,
        name: "بنطلون رسمي أسود",
        price: "200",
        mainimg: img55,
        description: "بنطلون رسمي أسود من الصوف",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "200",
        imgs: [img55, img55],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "200", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "رمادي غامق", price: "205", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 60, text: "أنيق ومناسب للعمل" }
        ]
    },
    {
        id: 56,
        name: "فستان ساتان",
        price: "260",
        mainimg: img56,
        description: "فستان من الساتان الناعم",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "260",
        imgs: [img56, img56],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "260", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "أرجواني", price: "265", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 61, text: "فستان ناعم ومريح" }
        ]
    },
    {
        id: 57,
        name: "حذاء رياضي خفيف",
        price: "300",
        mainimg: img57,
        description: "حذاء رياضي خفيف الوزن",
        category: "أحذية",
        collection: "btn-4",
        global_price: "300",
        imgs: [img57, img57],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "300", sizesAtColor: ["40", "41", "42", "43"] },
            { colorNameInArabic: "أسود", price: "305", sizesAtColor: ["39", "40", "41", "42"] }
        ],
        comments: [
            { id: 62, text: "خفيف ومريح للجري" }
        ]
    },
    {
        id: 58,
        name: "أقراط ذهبية",
        price: "80",
        mainimg: img58,
        description: "أقراط ذهبية بتصميم كلاسيكي",
        category: "إكسسوارات",
        collection: "btn-6-0",
        global_price: "80",
        imgs: [img58, img58],
        colors_sizes: [
            { colorNameInArabic: "ذهبي", price: "80", sizesAtColor: ["واحد"] },
            { colorNameInArabic: "فضي", price: "75", sizesAtColor: ["واحد"] }
        ],
        comments: [
            { id: 63, text: "أقراط جميلة وتصميمها رائع" }
        ]
    },
    {
        id: 59,
        name: "قميص بولو كلاسيكي",
        price: "150",
        mainimg: img59,
        description: "قميص بولو كلاسيكي بأناقة",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "150",
        imgs: [img59, img59],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "150", sizesAtColor: ["38", "40", "42", "44"] },
            { colorNameInArabic: "أزرق", price: "155", sizesAtColor: ["40", "42", "44"] }
        ],
        comments: [
            { id: 64, text: "أنيق وعملي" }
        ]
    },
    {
        id: 60,
        name: "تنورة قلم",
        price: "145",
        mainimg: img60,
        description: "تنورة قلم بتصميم أنيق",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "145",
        imgs: [img60, img60],
        colors_sizes: [
            { colorNameInArabic: "أسود", price: "145", sizesAtColor: ["36", "38", "40"] },
            { colorNameInArabic: "رمادي", price: "150", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 65, text: "تنورة أنيقة للعمل" }
        ]
    },
    {
        id: 61,
        name: "جاكيت رياضي معطف",
        price: "240",
        mainimg: img61,
        description: "جاكيت رياضي على شكل معطف",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "240",
        imgs: [img61, img61],
        colors_sizes: [
            { colorNameInArabic: "أزرق", price: "240", sizesAtColor: ["40", "42", "44", "46"] },
            { colorNameInArabic: "أسود", price: "245", sizesAtColor: ["42", "44", "46"] }
        ],
        comments: [
            { id: 66, text: "دافئ وعملي" }
        ]
    },
    {
        id: 62,
        name: "قميص نوم قطني طويل",
        price: "100",
        mainimg: img62,
        description: "قميص نوم قطني طويل",
        category: "ملابس نسائي",
        collection: "btn-3",
        global_price: "100",
        imgs: [img62, img62],
        colors_sizes: [
            { colorNameInArabic: "أبيض", price: "100", sizesAtColor: ["34", "36", "38"] },
            { colorNameInArabic: "وردي", price: "105", sizesAtColor: ["36", "38", "40"] }
        ],
        comments: [
            { id: 67, text: "طويل ومريح للنوم" }
        ]
    },
    {
        id: 63,
        name: "بنطلون جينز كلاسيكي",
        price: "230",
        mainimg: img63,
        description: "بنطلون جينز كلاسيكي عالي الجودة",
        category: "ملابس رجالي",
        collection: "btn-2",
        global_price: "230",
        imgs: [img63, img63],
        colors_sizes: [
            { colorNameInArabic: "أزرق غامق", price: "230", sizesAtColor: ["36", "38", "40", "42"] },
            { colorNameInArabic: "أزرق فاتح", price: "235", sizesAtColor: ["38", "40", "42"] }
        ],
        comments: [
            { id: 68, text: "كلاسيكي وعالي الجودة" },
            { id: 69, text: "المقاسات دقيقة والقماش متين" }
        ]
    }
];

export default AllProductsAPI;



