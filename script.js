(() => {
  "use strict";

        const CART_KEY = "opscura_cart_v1";
        const DISCOUNT_RATE = Number(window.OPSCURA_CONFIG?.promoRate ?? 0.1);
        const FREE_SHIPPING_THRESHOLD = 800;
        const FEATURED_STRIPS = [
          {
            rootId: "randomGridTop",
            categories: ["sports", "cars", "movies", "quotes"],
            direction: "ltr",
            rowSize: 12
          },
          {
            rootId: "randomGridBottom",
            categories: ["gaming", "rap", "gym", "art", "quran", "she"],
            direction: "ltr",
            rowSize: 12
          }
        ];
        const SIZE_OPTIONS = [
          { id: "20x30", label: "20 × 30 cm", price: 220, was: 270 },
          { id: "30x40", label: "30 × 40 cm", price: 270, was: 340 },
          { id: "40x50", label: "40 × 50 cm", price: 330, was: 430 }
        ];

        const CATALOG = {
          sports: [
            { id: "sp1", title: "Hossam Hassan", art: "sport.jpg" },
            { id: "sp2", title: "Shobier", art: "sport1.jpg" },
            { id: "sp3", title: "Neymar", art: "sport3.jpg" },
            { id: "sp4", title: "Salah", art: "sport4.jpg" },
            { id: "sp5", title: "Emam Ashour", art: "sport5.jpg" },
            { id: "sp6", title: "Messi", art: "sport6.jpg" },
            { id: "sp7", title: "Benzema", art: "sport7.jpg" },
            { id: "sp8", title: "Mbappe", art: "sport8.jpg" },
            { id: "sp9", title: "Haaland", art: "sport9.jpg" },
            { id: "sp10", title: "Modric", art: "sport10.jpg" },
            { id: "sp11", title: "De Bruyne", art: "sport11.jpg" },
            { id: "sp12", title: "Lewandowski", art: "sport12.jpg" },
            { id: "sp13", title: "Bellingham", art: "sport13.jpg" },
            { id: "sp14", title: "Mane", art: "sport14.jpg" },
            { id: "sp15", title: "Kane", art: "sport15.jpg" },
            { id: "sp16", title: "Griezmann", art: "sport20.jpg" },
            { id: "sp17", title: "Pedri", art: "sport21.jpg" },
            { id: "sp18", title: "Bruno Fernandes", art: "sport23.jpg" },
            { id: "sp19", title: "Marmoush", art: "sport25.jpg" },
            { id: "sp20", title: "Hakimi", art: "sport26.jpg" },
            { id: "sp21", title: "Rodri", art: "sport27.jpg" },
            { id: "sp22", title: "Davies", art: "sport28.jpg" },
            { id: "sp23", title: "Yamal", art: "sport29.jpg" },
            { id: "sp24", title: "Bounou", art: "sport113.jpg" },
            { id: "sp25", title: "Zizo", art: "spoprt18.jpg" },
            { id: "sp26", title: "Ronaldo", art: "sort19.jpg" }
          ],
          cars: [
            { id: "car1", title: "Nissan GT-R", art: "car1.jpg" },
            { id: "car2", title: "Porsche 911", art: "car2.jpg" },
            { id: "car3", title: "Ferrari SF90", art: "car3.jpg" },
            { id: "car4", title: "Porsche GT3 RS", art: "car4.jpg" },
            { id: "car5", title: "Ford Mustang", art: "car5.jpg" },
            { id: "car6", title: "Lamborghini Huracan", art: "car6.jpg" },
            { id: "car7", title: "McLaren 720S", art: "car7.jpg" },
            { id: "car8", title: "BMW M4", art: "car8.jpg" },
            { id: "car9", title: "Mercedes AMG GT", art: "car9.jpg" },
            { id: "car10", title: "Audi R8", art: "car10.jpg" },
            { id: "car11", title: "Chevrolet Camaro", art: "car11.jpg" },
            { id: "car12", title: "Bugatti Chiron", art: "car12.jpg" },
            { id: "car13", title: "Koenigsegg Jesko", art: "car13.jpg" }
          ],
          gaming: [
            { id: "gm1", title: "Arcade Legends", art: "game1.jpg" },
            { id: "gm2", title: "Neon Pulse", art: "game2.jpg" },
            { id: "gm3", title: "Console Glow", art: "game3.jpg" },
            { id: "gm4", title: "Game Night", art: "game4.jpg" },
            { id: "gm5", title: "Boss Fight", art: "game5.jpg" },
            { id: "gm6", title: "Level Up", art: "game6.jpg" },
            { id: "gm7", title: "Shadow Raid", art: "game7.jpg" },
            { id: "gm8", title: "Final Round", art: "game 8.jpg" }
          ],
          rap: [
            { id: "rap1", title: "Rap Energy", art: "rap1.jpg" },
            { id: "rap2", title: "Street Pulse", art: "rap2.jpg" },
            { id: "rap3", title: "Golden Bars", art: "rap3.jpg" },
            { id: "rap4", title: "Bassline Mood", art: "rap4.jpg" },
            { id: "rap5", title: "Rap Custom Upload", art: "rap5.jpg" },
            { id: "rap6", title: "Dark Flow", art: "rap6.jpg" },
            { id: "rap7", title: "Mic Smoke", art: "rap7.jpg" },
            { id: "rap8", title: "Backstage Gold", art: "rap8.jpg" }
          ],
          quotes: [
            { id: "q1", title: "Stay Focused", art: "quotes1.jpg" },
            { id: "q2", title: "Mindset Frame", art: "quotes2.jpg" },
            { id: "q3", title: "Rise Again", art: "quotes3.jpg" },
            { id: "q4", title: "Daily Power", art: "quotes4.jpg" }
          ],
          movies: [
            { id: "mv1", title: "Cinematic Night", art: "mov1.jpg" },
            { id: "mv2", title: "Iconic Scene", art: "mov2.jpg" },
            { id: "mv3", title: "Series Mood", art: "mov3.jpg" },
            { id: "mv4", title: "Golden Frame", art: "mov4.jpg" },
            { id: "mv5", title: "Director Cut", art: "mov5.jpg" },
            { id: "mv6", title: "Night Credits", art: "mov6.jpg" },
            { id: "mv7", title: "Scene Shift", art: "mov8.jpg" },
            { id: "mv8", title: "Silver Screen", art: "mov10.jpg" }
          ],
          gym: [
            { id: "gym1", title: "Iron Focus", art: "gym1.jpg" },
            { id: "gym2", title: "No Excuses", art: "gym2.jpg" },
            { id: "gym3", title: "Strength Daily", art: "gym3.jpg" },
            { id: "gym4", title: "Train Hard", art: "gym4.jpg" },
            { id: "gym5", title: "Lift Mode", art: "gym5.jpg" },
            { id: "gym6", title: "Power Reps", art: "gym6.jpg" },
            { id: "gym7", title: "Muscle Signal", art: "gym7.jpg" }
          ],
          art: [
            { id: "art1", title: "فن 1", art: "art 1.jpg" },
            { id: "art2", title: "فن 2", art: "art 2.jpg" },
            { id: "art3", title: "فن 3", art: "art 3.jpg" },
            { id: "art4", title: "فن 4", art: "art 4.jpg" },
            { id: "art5", title: "فن 5", art: "art 5.jpg" }
          ],
          quran: [
            { id: "quran1", title: "القرآن 1", art: "quran.jpg" },
            { id: "quran2", title: "القرآن 2", art: "quran 1.jpg" },
            { id: "quran3", title: "القرآن 3", art: "quran2.jpg" },
            { id: "quran4", title: "القرآن 4", art: "quran3.jpg" },
            { id: "quran5", title: "القرآن 5", art: "quran4.jpg" },
            { id: "quran6", title: "القرآن 6", art: "quran5.jpg" },
            { id: "quran7", title: "القرآن 7", art: "quran7.jpg" }
          ],
          she: [
            { id: "she1", title: "هي 1", art: "she.jpg" },
            { id: "she2", title: "هي 2", art: "she 1.jpg" },
            { id: "she3", title: "هي 3", art: "she2.jpg" },
            { id: "she4", title: "هي 4", art: "she3.jpg" },
            { id: "she5", title: "هي 5", art: "she4.jpg" },
            { id: "she6", title: "هي 6", art: "she5.jpg" },
            { id: "she7", title: "هي 7", art: "she6.jpg" },
            { id: "she8", title: "هي 8", art: "she7.jpg" }
          ],
          custom: [
            { id: "custom1", title: "Custom Portrait Frame", art: "upload.jpg" },
            { id: "custom2", title: "Album Cover Frame", art: "mov6.jpg" }
          ]
        };

        const LANG_KEY = "opscura_lang_v1";
        const SUPPORTED_LANGS = new Set(["en", "ar"]);
        let currentLanguage = "en";

        const I18N = {
          en: {
            promoBar: "Free shipping over 800 EGP · Custom framing in 3–4 days",
            promoBanner: "<strong>Offer:</strong> 10% off everything. Buy 2 and get 15% off all products.",
            navMenuAria: "Open menu",
            navCartAria: "Open cart",
            navLogoSub: "Custom framed art",
            sideCollections: "Collections",
            sideCloseAria: "Close menu",
            sideAllCollections: "All collections",
            sideSports: "Sports",
            sideCars: "Cars",
            sideGaming: "Gaming",
            sideRap: "Rap scene",
            sideQuotes: "Quotes",
            sideMovies: "Movies & series",
            sideGym: "Gym",
            sideArt: "Art",
            sideQuran: "Quran",
            sideShe: "She",
            sideCustom: "Custom art frames",
            sideContact: "Contact & socials",
            heroMystery: "Obscura veil",
            heroEyebrow: "Walls worth looking at",
            heroTitle: "Bring your favorite moments to life with premium framed prints.",
            heroDesc: "From football legends and car masterpieces to your own uploaded artwork, Opscura creates statement pieces you will love to display.",
            heroShop: "Shop the gallery",
            heroCustomize: "Customize your image",
            featuredEyebrow: "Featured",
            featuredTitle: "Featured products",
            collectionsEyebrow: "Collections",
            collectionsTitle: "Explore the shelves.",
            customEyebrow: "Customization",
            customTitle: "Upload your image and build it like a normal product.",
            customHeading: "Upload image, choose size, see the price instantly.",
            customDesc: "The custom frame now follows the same flow as the normal products. Upload the image, pick your size, then add it to the cart.",
            customPoint1: "Upload a personal photo or artwork.",
            customPoint2: "Select the exact frame size.",
            customChooseImage: "Choose your image",
            customChooseImageSub: "Upload album art, portrait, car shot, or any photo you want framed.",
            customUploadLabel: "Upload your image",
            customWhatToFrame: "Tell us what you want framed",
            customExamplePlaceholder: "Example: My favorite car photo, black frame, 40x50 cm",
            sizeLabel: "Size",
            finishLabel: "Finish",
            startsAt: "Starts at",
            addCustomBtn: "Add custom frame to cart",
            sportsH2: "Football legends and athletic energy.",
            carsH2: "Performance-inspired car prints and framed posters.",
            gamingH2: "Immersive visuals built for your wall.",
            rapH2: "Bold visuals and street-energy statement pieces.",
            quotesH2: "Clean, motivational message art for your spaces.",
            moviesH2: "Cinematic posters and iconic scenes, framed beautifully.",
            gymH2: "Strength, discipline and energy in every print.",
            artH2: "Bold art prints with a clean gallery feel.",
            quranH2: "Faith-inspired Arabic verses designed as calming wall art.",
            sheH2: "Elegant feminine portraits with premium editorial mood.",
            benefitsFastTitle: "Fast delivery",
            benefitsFastDesc: "2–4 working days across Egypt.",
            benefitsReplaceTitle: "Free replacement",
            benefitsReplaceDesc: "Damaged in transit? We replace it free within 7 days.",
            benefitsTelegramTitle: "Telegram-confirmed orders",
            benefitsTelegramDesc: "Your selected product name and image are sent directly to your Telegram bot.",
            cartbarMsgDefault: "Add items to unlock free shipping",
            cartbarViewCart: "View cart",
            drawerTitle: "Your cart",
            drawerCloseAria: "Close cart",
            drawerSubtotal: "Subtotal",
            drawerDiscount: "10% off everything · 15% off when you buy 2",
            drawerTotal: "Total after discount",
            checkoutNow: "Checkout now",
            checkoutTitle: "Checkout",
            checkoutCloseAria: "Close checkout",
            fullName: "Full name *",
            phone: "Phone *",
            email: "Email (optional)",
            governorate: "Governorate",
            chooseGovernorate: "Choose your governorate",
            address: "Delivery address *",
            notes: "Notes",
            confirmOrder: "Confirm order",
            checkoutFine: "By confirming, you agree to be contacted on the phone number above. We will notify your order to the Opscura team.",
            namePlaceholder: "Your name",
            addressPlaceholder: "Street, building, area, city",
            notesPlaceholder: "Anything we should know?",
            customPlaceholderAlt: "Preview of custom upload",
            whatsappAria: "WhatsApp",
            productHelperCustom: "Upload your image above, then add this custom frame like any other product.",
            productHelperNormal: "Premium framed print ready for your wall.",
            rapUploadLabel: "Choose your image",
            rapUploadHint: "This rap product lets the customer upload any image.",
            rapUploadMissing: "Please choose an image first",
            rapUploadAdded: "Your selected image frame was added to cart",
            addToCart: "Add to cart",
            customAdded: "Custom frame added to cart",
            addedToCart: "Added to cart · {title}",
            cartEmpty: "Your cart is empty",
            cartEmptyHint: "Pick a print or upload your own image to get started.",
            cartbarUnlocked: "15% discount applied and free shipping unlocked",
            cartbarNeedMore: "15% discount applied. Add {amount} EGP more for free shipping",
            cartbarNeedTwo: "10% off everything · buy 2 for 15% off",
            remove: "Remove",
            summarySubtotal: "Subtotal",
            summaryDiscount: "10% off everything · 15% off when you buy 2",
            summaryAfterDiscount: "After discount",
            summaryShipping: "Shipping",
            summaryTotal: "Total",
            emptyCartToast: "Your cart is empty",
            validationToast: "Please fill in name, phone, and address",
            phoneValidationToast: "Please enter a valid full Egyptian mobile number",
            orderSuccess: "Order {id} confirmed. Telegram has been notified.",
            optionFramed: "Framed",
            customPrefix: "Custom frame",
            uploadedArtwork: "Uploaded artwork",
            customUploadPrefix: "Custom upload"
          },
          ar: {
            promoBar: "شحن مجاني للطلبات فوق 800 جنيه · تجهيز الإطار المخصص خلال 3-4 أيام",
            promoBanner: "<strong>العرض:</strong> خصم 10% على الكل. لو خدت 2، خصم 15% على كل المنتجات.",
            navMenuAria: "فتح القائمة",
            navCartAria: "فتح السلة",
            navLogoSub: "لوحات مؤطرة مخصصة",
            sideCollections: "الأقسام",
            sideCloseAria: "إغلاق القائمة",
            sideAllCollections: "كل الأقسام",
            sideSports: "رياضة",
            sideCars: "سيارات",
            sideGaming: "جيمينج",
            sideRap: "راب",
            sideQuotes: "اقتباسات",
            sideMovies: "أفلام ومسلسلات",
            sideGym: "جيم",
            sideArt: "فن",
            sideQuran: "قرآن",
            sideShe: "هي",
            sideCustom: "إطارات مخصصة",
            sideContact: "تواصل وسوشيال",
            heroMystery: "لمسة أوبسكورا",
            heroEyebrow: "حوائط تستاهل تتشاف",
            heroTitle: "حوّل لحظاتك المفضلة للوحات مؤطرة بجودة عالية.",
            heroDesc: "من أساطير الكورة وروائع السيارات لحد صورك الخاصة، أوبسكورا بتقدملك قطع مميزة تزين بيها مكانك.",
            heroShop: "تصفح المعرض",
            heroCustomize: "خصص صورتك",
            featuredEyebrow: "منتجات مميزة",
            featuredTitle: "منتجات مميزة",
            collectionsEyebrow: "الأقسام",
            collectionsTitle: "اختار الستايل المناسب لك.",
            customEyebrow: "التخصيص",
            customTitle: "ارفع صورتك واطلبها بنفس طريقة أي منتج.",
            customHeading: "ارفع الصورة، اختار المقاس، وشوف السعر فورًا.",
            customDesc: "الإطار المخصص بقى بنفس خطوات المنتجات العادية: ارفع الصورة، اختار المقاس، وبعدها أضفه للسلة.",
            customPoint1: "ارفع صورة شخصية أو أي تصميم تحبه.",
            customPoint2: "حدد المقاس المناسب بدقة.",
            customChooseImage: "اختار صورتك",
            customChooseImageSub: "ارفع غلاف ألبوم، بورتريه، صورة عربية، أو أي صورة تحبها.",
            customUploadLabel: "ارفع صورتك",
            customWhatToFrame: "اكتب لنا عايز تأطّر إيه",
            customExamplePlaceholder: "مثال: صورتي المفضلة للعربية، إطار أسود، مقاس 40x50 سم",
            sizeLabel: "المقاس",
            finishLabel: "التشطيب",
            startsAt: "يبدأ من",
            addCustomBtn: "أضف الإطار المخصص للسلة",
            sportsH2: "أساطير الكرة وطاقة الملاعب.",
            carsH2: "لوحات سيارات بطابع أداء قوي وإحساس سباق.",
            gamingH2: "فيجوالز غامرة مناسبة لحائطك.",
            rapH2: "ستايل جريء وطاقة ستريت في كل لوحة.",
            quotesH2: "اقتباسات ملهمة بتصميم نظيف ولمسة راقية.",
            moviesH2: "بوسترات سينمائية ومشاهد أيقونية بإطار مميز.",
            gymH2: "قوة وانضباط وطاقة في كل تصميم.",
            artH2: "لوحات فن بطابع جاليري نظيف وفاخر.",
            quranH2: "آيات وإلهام إيماني بتصميم هادئ للمساحات.",
            sheH2: "بورتريهات أنثوية أنيقة بطابع فني فاخر.",
            benefitsFastTitle: "توصيل سريع",
            benefitsFastDesc: "من 2 إلى 4 أيام عمل داخل مصر.",
            benefitsReplaceTitle: "استبدال مجاني",
            benefitsReplaceDesc: "لو المنتج اتضرر في الشحن بنستبدله مجانًا خلال 7 أيام.",
            benefitsTelegramTitle: "تأكيد الطلب عبر تيليجرام",
            benefitsTelegramDesc: "اسم المنتج والصورة المختارة بيتم إرسالهم مباشرة لبوت تيليجرام.",
            cartbarMsgDefault: "أضف منتجات لفتح الشحن المجاني",
            cartbarViewCart: "عرض السلة",
            drawerTitle: "سلة مشترياتك",
            drawerCloseAria: "إغلاق السلة",
            drawerSubtotal: "الإجمالي",
            drawerDiscount: "خصم 10% على الكل · خصم 15% لو خدت 2",
            drawerTotal: "الإجمالي بعد الخصم",
            checkoutNow: "إتمام الطلب",
            checkoutTitle: "الدفع",
            checkoutCloseAria: "إغلاق الدفع",
            fullName: "الاسم بالكامل *",
            phone: "رقم الموبايل *",
            email: "البريد الإلكتروني (اختياري)",
            governorate: "المحافظة",
            chooseGovernorate: "اختر محافظتك",
            address: "عنوان التوصيل *",
            notes: "ملاحظات",
            confirmOrder: "تأكيد الطلب",
            checkoutFine: "بالتأكيد أنت موافق نتواصل معك على الرقم المسجل. فريق أوبسكورا هيستلم طلبك فورًا.",
            namePlaceholder: "اسمك",
            addressPlaceholder: "الشارع، العمارة، المنطقة، المدينة",
            notesPlaceholder: "أي ملاحظات تحب تضيفها؟",
            customPlaceholderAlt: "معاينة الصورة المرفوعة",
            whatsappAria: "واتساب",
            productHelperCustom: "ارفع صورتك من فوق وبعدها أضف الإطار المخصص للسلة مثل أي منتج.",
            productHelperNormal: "لوحة مؤطرة بجودة عالية جاهزة لحائطك.",
            rapUploadLabel: "اختار صورتك",
            rapUploadHint: "المنتج ده في قسم الراب يسمح للعميل يرفع أي صورة عايزها.",
            rapUploadMissing: "من فضلك اختار الصورة الأول",
            rapUploadAdded: "تمت إضافة الصورة المختارة للسلة",
            addToCart: "أضف للسلة",
            customAdded: "تمت إضافة الإطار المخصص للسلة",
            addedToCart: "تمت الإضافة للسلة · {title}",
            cartEmpty: "السلة فارغة",
            cartEmptyHint: "اختار لوحة أو ارفع صورتك علشان تبدأ.",
            cartbarUnlocked: "تم تطبيق خصم 15% وتفعيل الشحن المجاني",
            cartbarNeedMore: "تم تطبيق خصم 15%. أضف {amount} جنيه إضافي للحصول على الشحن المجاني",
            cartbarNeedTwo: "خصم 10% على الكل · لو خدت 2 هتطلع 15%",
            remove: "حذف",
            summarySubtotal: "الإجمالي",
            summaryDiscount: "خصم 10% على الكل · خصم 15% لو خدت 2",
            summaryAfterDiscount: "بعد الخصم",
            summaryShipping: "الشحن",
            summaryTotal: "الإجمالي النهائي",
            emptyCartToast: "السلة فارغة",
            validationToast: "من فضلك اكتب الاسم ورقم الموبايل والعنوان",
            phoneValidationToast: "من فضلك اكتب رقم موبايل مصري صحيح وكامل",
            orderSuccess: "تم تأكيد الطلب {id}. تم إخطار تيليجرام.",
            optionFramed: "بإطار",
            customPrefix: "إطار مخصص",
            uploadedArtwork: "صورة مرفوعة",
            customUploadPrefix: "رفع مخصص"
          }
        };

        const TITLE_AR = {
          "CR7 Legacy": "إرث CR7",
          "Gallery Heat": "وهج المعرض",
          "Messi Moment": "لحظة ميسي",
          "Salah Energy": "طاقة صلاح",
          "Champion Spirit": "روح البطل",
          "Stadium Night": "ليلة الملعب",
          "Matchday Aura": "أجواء المباراة",
          "Victory Frame": "إطار الانتصار",
          "Turbo Night": "ليلة التيربو",
          "Porsche 911": "بورشه 911",
          "Ferrari Icons": "أيقونات فيراري",
          "GT3 RS": "جي تي 3 آر إس",
          "Mustang Fire": "لهيب موستانج",
          "Speedline": "خط السرعة",
          "Track Spec": "مواصفات الحلبة",
          "Midnight Engine": "محرك منتصف الليل",
          "Arcade Legends": "أساطير الأركيد",
          "Neon Pulse": "نبض النيون",
          "Console Glow": "توهج الكونسل",
          "Game Night": "ليلة اللعب",
          "Boss Fight": "معركة الزعيم",
          "Level Up": "تقدم المستوى",
          "Shadow Raid": "غارة الظلال",
          "Final Round": "الجولة الأخيرة",
          "Rap Energy": "طاقة الراب",
          "Street Pulse": "نبض الشارع",
          "Golden Bars": "قوافي ذهبية",
          "Bassline Mood": "مود البيس لاين",
          "Night Verse": "بيت الليل",
          "Dark Flow": "فلو داكن",
          "Mic Smoke": "دخان المايك",
          "Backstage Gold": "ذهب الكواليس",
          "Rap Custom Upload": "اختار صورتك للراب",
          "Stay Focused": "خليك مركز",
          "Mindset Frame": "إطار العقلية",
          "Rise Again": "قوم من جديد",
          "Daily Power": "قوة يومية",
          "Cinematic Night": "ليلة سينمائية",
          "Iconic Scene": "مشهد أيقوني",
          "Series Mood": "مود المسلسلات",
          "Golden Frame": "إطار ذهبي",
          "Director Cut": "نسخة المخرج",
          "Night Credits": "ختام الليل",
          "Scene Shift": "تحول المشهد",
          "Silver Screen": "الشاشة الفضية",
          "Iron Focus": "تركيز حديدي",
          "No Excuses": "بدون أعذار",
          "Strength Daily": "قوة يومية",
          "Train Hard": "تمرّن بقوة",
          "Lift Mode": "وضع الرفع",
          "Power Reps": "تكرارات القوة",
          "Muscle Signal": "إشارة العضلة",
          "Velvet Portrait": "بورتريه مخملي",
          "Golden Muse": "إلهام ذهبي",
          "Soft Light": "إضاءة ناعمة",
          "City Grace": "أناقة المدينة",
          "Hossam Hassan": "حسام حسن",
          "Shobier": "شوبير",
          "Neymar": "نيمار",
          "Salah": "صلاح",
          "Ronaldo": "رونالدو",
          "Messi": "ميسي",
          "Benzema": "بنزيما",
          "Mbappe": "مبابي",
          "Haaland": "هالاند",
          "Modric": "مودريتش",
          "De Bruyne": "دي بروين",
          "Lewandowski": "ليفاندوفسكي",
          "Bellingham": "بيلينجهام",
          "Mane": "ماني",
          "Kane": "كين",
          "Griezmann": "جريزمان",
          "Pedri": "بيدري",
          "Bruno Fernandes": "برونو فيرنانديز",
          "Marmoush": "مرموش",
          "Hakimi": "حكيمي",
          "Rodri": "رودري",
          "Davies": "ديفيز",
          "Yamal": "يامال",
          "Bounou": "بونو",
          "Zizo": "زيزو",
          "Emam Ashour": "إمام عاشور",
          "Nissan GT-R": "نيسان جي تي آر",
          "Ferrari SF90": "فيراري SF90",
          "Porsche GT3 RS": "بورشه GT3 RS",
          "Ford Mustang": "فورد موستانج",
          "Lamborghini Huracan": "لامبورجيني هوراكان",
          "McLaren 720S": "ماكلارين 720S",
          "BMW M4": "بي إم دبليو M4",
          "Mercedes AMG GT": "مرسيدس AMG GT",
          "Audi R8": "أودي R8",
          "Chevrolet Camaro": "شيفروليه كامارو",
          "Bugatti Chiron": "بوجاتي شيرون",
          "Koenigsegg Jesko": "كوينيجسيج يسكو",
          "Sabr": "صبر",
          "Baraka": "بركة",
          "Tawakkul": "توكل",
          "Al Noor": "النور",
          "Upload image": "ارفع صورة"
        };

        const TITLE_EN = {
          ...Object.fromEntries(Object.entries(TITLE_AR).map(([en, ar]) => [ar, en])),
          "فن 1": "Art 1",
          "فن 2": "Art 2",
          "فن 3": "Art 3",
          "فن 4": "Art 4",
          "فن 5": "Art 5",
          "القرآن 1": "Quran 1",
          "القرآن 2": "Quran 2",
          "القرآن 3": "Quran 3",
          "القرآن 4": "Quran 4",
          "القرآن 5": "Quran 5",
          "القرآن 6": "Quran 6",
          "القرآن 7": "Quran 7",
          "هي 1": "She 1",
          "هي 2": "She 2",
          "هي 3": "She 3",
          "هي 4": "She 4",
          "هي 5": "She 5",
          "هي 6": "She 6",
          "هي 7": "She 7",
          "هي 8": "She 8"
        };

        const state = { cart: loadCart() };
        let toastTimer = null;
        let randomTracksTimer = null;
        let randomTracksPauseUntil = 0;

        const $ = (sel, parent = document) => parent.querySelector(sel);
        const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));
        const fmt = (value) => `${Math.round(value)} EGP`;
        const uid = () => Math.random().toString(36).slice(2, 10);
        const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (m) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[m]));

        function t(key, vars = {}) {
          const table = I18N[currentLanguage] || I18N.en;
          const template = table[key] ?? I18N.en[key] ?? key;
          return template.replace(/\{(\w+)\}/g, (_, token) => String(vars[token] ?? ""));
        }

        function localizeCatalogTitle(title) {
          if (currentLanguage === "ar") return TITLE_AR[title] || title;
          return TITLE_EN[title] || title;
        }

        function localizeItemTitle(raw) {
          if (!raw) return "";
          if (raw.startsWith("Custom frame · ")) {
            const description = raw.slice("Custom frame · ".length);
            return currentLanguage === "ar" ? `${t("customPrefix")} · ${description}` : raw;
          }
          if (raw.startsWith("إطار مخصص · ")) {
            const description = raw.slice("إطار مخصص · ".length);
            return currentLanguage === "en" ? `Custom frame · ${description}` : raw;
          }
          return localizeCatalogTitle(raw);
        }

        function localizeItemOption(raw) {
          if (!raw) return "";
          let value = raw;
          if (currentLanguage === "ar") {
            value = value.replace(" · Framed", ` · ${t("optionFramed")}`);
            value = value.replace("Custom upload - ", `${t("customUploadPrefix")} - `);
            return value;
          }

          value = value.replace(" · بإطار", " · Framed");
          value = value.replace("رفع مخصص - ", "Custom upload - ");
          return value;
        }

        function setText(selector, key) {
          const node = document.querySelector(selector);
          if (node) node.textContent = t(key);
        }

        function setAttr(selector, attr, key) {
          const node = document.querySelector(selector);
          if (node) node.setAttribute(attr, t(key));
        }

        function applyStaticTranslations() {
          document.documentElement.lang = currentLanguage;
          document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
          document.title = currentLanguage === "ar" ? "Opscura — لوحات مؤطرة مخصصة" : "Opscura — Custom Framed Prints";
          const desc = document.querySelector('meta[name="description"]');
          if (desc) {
            desc.setAttribute(
              "content",
              currentLanguage === "ar"
                ? "أوبسكورا للوحات المؤطرة المخصصة، ديكور حائط فاخر، وبوسترات بطابع فريد."
                : "Opscura custom framed prints, wall art, motorsport posters, and premium home decor."
            );
          }

          const promoBanner = document.querySelector("#promoBanner > div");
          if (promoBanner) promoBanner.innerHTML = t("promoBanner");

          setText(".promo-bar", "promoBar");
          const loaderSub = document.querySelector(".op-sub");
          if (loaderSub) loaderSub.textContent = currentLanguage === "ar" ? "لوحات مؤطرة مخصصة" : "CUSTOM FRAMED ART";
          const loaderCaption = document.querySelector(".op-caption");
          if (loaderCaption) loaderCaption.textContent = currentLanguage === "ar" ? "الستار ينكشف" : "THE VEIL IS LIFTING";
          const langToggle = document.getElementById("langToggle");
          if (langToggle) {
            langToggle.setAttribute("aria-label", currentLanguage === "ar" ? "اختيار اللغة" : "Language selector");
          }
          setAttr("#navMenu", "aria-label", "navMenuAria");
          setAttr("#navCart", "aria-label", "navCartAria");
          setText(".nav__logo-sub", "navLogoSub");

          setText(".side-menu__header h3", "sideCollections");
          setAttr("#sideMenuClose", "aria-label", "sideCloseAria");
          const allCollectionsLink = document.querySelector('.side-menu__panel a[href="#collections"], .side-menu__panel a[href="index.html#collections"]');
          if (allCollectionsLink) allCollectionsLink.textContent = t("sideAllCollections");
          setText('.side-menu__panel a[data-section="sports"]', "sideSports");
          setText('.side-menu__panel a[data-section="cars"]', "sideCars");
          setText('.side-menu__panel a[data-section="gaming"]', "sideGaming");
          setText('.side-menu__panel a[data-section="rap"]', "sideRap");
          setText('.side-menu__panel a[data-section="quotes"]', "sideQuotes");
          setText('.side-menu__panel a[data-section="movies"]', "sideMovies");
          setText('.side-menu__panel a[data-section="gym"]', "sideGym");
          setText('.side-menu__panel a[data-section="art"]', "sideArt");
          setText('.side-menu__panel a[data-section="quran"]', "sideQuran");
          setText('.side-menu__panel a[data-section="she"]', "sideShe");
          setText('.side-menu__panel a[data-section="custom"]', "sideCustom");
          setText('.side-menu__panel a[data-section="contact"]', "sideContact");

          setText(".hero__mystery-label", "heroMystery");
          setText(".hero__copy .eyebrow", "heroEyebrow");
          setText(".hero__copy h1", "heroTitle");
          setText(".hero__copy > p:not(.eyebrow)", "heroDesc");
          setText('.hero__actions .btn--solid[href="#collections"]', "heroShop");
          setText('.hero__actions .btn--ghost[href="#customizer"]', "heroCustomize");

          setText("#collections .section-head .eyebrow", "collectionsEyebrow");
          setText("#collections .section-head h2", "collectionsTitle");
          setText("#random-showcase .section-head .eyebrow", "featuredEyebrow");
          setText("#random-showcase .section-head h2", "featuredTitle");

          setText('#collections .collection-card[data-section="sports"] h3', "sideSports");
          const sportsCardDesc = document.querySelector('#collections .collection-card[data-section="sports"] p');
          if (sportsCardDesc) {
            sportsCardDesc.textContent = currentLanguage === "ar"
              ? "نجوم أسطورية، لحظات خالدة، وفخر الكيان."
              : "Legendary players, iconic moments and club pride.";
          }
          const carsCardDesc = document.querySelector('#collections .collection-card[data-section="cars"] p');
          if (carsCardDesc) {
            carsCardDesc.textContent = currentLanguage === "ar"
              ? "تصاميم سيارات وسوبركار بطابع قوي ومميز."
              : "High-impact motorsport and supercar artwork.";
          }
          const gamingCardDesc = document.querySelector('#collections .collection-card[data-section="gaming"] p');
          if (gamingCardDesc) {
            gamingCardDesc.textContent = currentLanguage === "ar"
              ? "بوسترات جريئة وفن بصري غامر."
              : "Bold posters and immersive reference art.";
          }
          const rapCardDesc = document.querySelector('#collections .collection-card[data-section="rap"] p');
          if (rapCardDesc) {
            rapCardDesc.textContent = currentLanguage === "ar"
              ? "ثقافة ستريت جريئة وفن مستوحى من الكلمات."
              : "Edgy street culture and bold lyric-inspired art.";
          }
          const quotesCardDesc = document.querySelector('#collections .collection-card[data-section="quotes"] p');
          if (quotesCardDesc) {
            quotesCardDesc.textContent = currentLanguage === "ar"
              ? "اقتباسات مينيمال بإحساس فاخر."
              : "Minimalist statement print ideas with a premium feel.";
          }
          const moviesCardDesc = document.querySelector('#collections .collection-card[data-section="movies"] p');
          if (moviesCardDesc) {
            moviesCardDesc.textContent = currentLanguage === "ar"
              ? "مشاهد أيقونية وبوسترات بطابع سينمائي."
              : "Iconic scenes, character posters, and cinematic moods.";
          }
          const gymCardDesc = document.querySelector('#collections .collection-card[data-section="gym"] p');
          if (gymCardDesc) {
            gymCardDesc.textContent = currentLanguage === "ar"
              ? "فيجوالز تحفيزية وطاقة قوية للتمرين."
              : "Motivational training visuals and strong energy pieces.";
          }
          const customCardDesc = document.querySelector('#collections .collection-card[data-section="custom"] p');
          if (customCardDesc) {
            customCardDesc.textContent = currentLanguage === "ar"
              ? "ارفع أي صورة واحنا نجهزها بإطار احترافي."
              : "Upload any image and we will frame it for you.";
          }
          const artCardDesc = document.querySelector('#collections .collection-card[data-section="art"] p');
          if (artCardDesc) {
            artCardDesc.textContent = currentLanguage === "ar"
              ? "لوحات فن بطابع جاليري نظيف وفاخر."
              : "Bold art prints with a clean gallery feel.";
          }
          const quranCardDesc = document.querySelector('#collections .collection-card[data-section="quran"] p');
          if (quranCardDesc) {
            quranCardDesc.textContent = currentLanguage === "ar"
              ? "آيات وإلهام إيماني بتصميم هادئ للمساحات."
              : "Faith-inspired Arabic verses designed as calming wall art.";
          }
          const sheCardDesc = document.querySelector('#collections .collection-card[data-section="she"] p');
          if (sheCardDesc) {
            sheCardDesc.textContent = currentLanguage === "ar"
              ? "بورتريهات أنثوية أنيقة بطابع فني فاخر."
              : "Elegant feminine portraits with premium editorial mood.";
          }
          setText('#collections .collection-card[data-section="cars"] h3', "sideCars");
          setText('#collections .collection-card[data-section="gaming"] h3', "sideGaming");
          setText('#collections .collection-card[data-section="rap"] h3', "sideRap");
          setText('#collections .collection-card[data-section="quotes"] h3', "sideQuotes");
          setText('#collections .collection-card[data-section="movies"] h3', "sideMovies");
          setText('#collections .collection-card[data-section="gym"] h3', "sideGym");
          setText('#collections .collection-card[data-section="art"] h3', "sideArt");
          setText('#collections .collection-card[data-section="quran"] h3', "sideQuran");
          setText('#collections .collection-card[data-section="she"] h3', "sideShe");
          setText('#collections .collection-card[data-section="custom"] h3', "sideCustom");

          const sidePanel = document.querySelector(".side-menu__panel");
          if (sidePanel) {
            sidePanel.setAttribute("aria-label", currentLanguage === "ar" ? "القائمة الرئيسية" : "Primary navigation");
          }
          const drawerPanel = document.querySelector("#drawer .drawer__panel");
          if (drawerPanel) {
            drawerPanel.setAttribute("aria-label", currentLanguage === "ar" ? "سلة المشتريات" : "Shopping cart");
          }
          const checkoutPanel = document.querySelector("#checkoutModal .modal__panel");
          if (checkoutPanel) {
            checkoutPanel.setAttribute("aria-label", currentLanguage === "ar" ? "الدفع" : "Checkout");
          }

          const heroImages = document.querySelectorAll(".hero__showcase img");
          if (heroImages[0]) heroImages[0].alt = currentLanguage === "ar" ? "لوحة مؤطرة مميزة" : "Featured framed print";
          if (heroImages[1]) heroImages[1].alt = currentLanguage === "ar" ? "لوحة بطابع سيارات" : "Car themed print";
          if (heroImages[2]) heroImages[2].alt = currentLanguage === "ar" ? "مجموعة لوحات مؤطرة" : "Multiple framed prints displayed together";
          const collectionAlts = {
            sports: ["مجموعة الرياضة", "Sports collection"],
            cars: ["مجموعة السيارات", "Cars collection"],
            gaming: ["مجموعة الجيمينج", "Gaming collection"],
            rap: ["مجموعة الراب", "Rap scene collection"],
            quotes: ["مجموعة الاقتباسات", "Quotes collection"],
            movies: ["مجموعة الأفلام والمسلسلات", "Movies and series collection"],
            gym: ["مجموعة الجيم", "Gym collection"],
            "she-art": ["مجموعة هي فن", "She is art collection"],
            "quran-quotes": ["مجموعة اقتباسات قرآنية", "Quran quotes collection"],
            art: ["مجموعة الفن", "Art collection"],
            quran: ["مجموعة القرآن", "Quran collection"],
            she: ["مجموعة هي", "She collection"],
            custom: ["مجموعة الإطارات المخصصة", "Custom art collection"]
          };
          Object.entries(collectionAlts).forEach(([section, [arAlt, enAlt]]) => {
            const img = document.querySelector(`#collections .collection-card[data-section="${section}"] img`);
            if (img) img.alt = currentLanguage === "ar" ? arAlt : enAlt;
          });

          setText("#customizer .section-head .eyebrow", "customEyebrow");
          setText("#customizer .section-head h2", "customTitle");
          setText("#customizer .customizer__copy h3", "customHeading");
          setText("#customizer .customizer__copy p", "customDesc");
          const customList = document.querySelectorAll("#customizer .customizer__copy li");
          if (customList[0]) customList[0].textContent = t("customPoint1");
          if (customList[1]) customList[1].textContent = t("customPoint2");
          setText("#customizer .customizer__preview-copy strong", "customChooseImage");
          setText("#customizer .customizer__preview-copy span", "customChooseImageSub");
          setAttr("#customizerPreview", "alt", "customPlaceholderAlt");
          setText("#customizerPriceLabel", "startsAt");
          setText("#addCustomBtn", "addCustomBtn");

          const customUploadLabel = document.querySelector("#customImageInput")?.closest("label")?.querySelector("span");
          if (customUploadLabel) customUploadLabel.textContent = t("customUploadLabel");
          const customDescLabel = document.querySelector("#customDescription")?.closest("label")?.querySelector("span");
          if (customDescLabel) customDescLabel.textContent = t("customWhatToFrame");
          const customSizeLabel = document.querySelector("#customSize")?.closest("label")?.querySelector("span");
          if (customSizeLabel) customSizeLabel.textContent = t("sizeLabel");
          setAttr("#customDescription", "placeholder", "customExamplePlaceholder");

          setText("#section-sports .section-head .eyebrow", "sideSports");
          setText("#section-sports .section-head h2", "sportsH2");
          setText("#section-cars .section-head .eyebrow", "sideCars");
          setText("#section-cars .section-head h2", "carsH2");
          setText("#section-gaming .section-head .eyebrow", "sideGaming");
          setText("#section-gaming .section-head h2", "gamingH2");
          setText("#section-rap .section-head .eyebrow", "sideRap");
          setText("#section-rap .section-head h2", "rapH2");
          setText("#section-quotes .section-head .eyebrow", "sideQuotes");
          setText("#section-quotes .section-head h2", "quotesH2");
          setText("#section-movies .section-head .eyebrow", "sideMovies");
          setText("#section-movies .section-head h2", "moviesH2");
          setText("#section-gym .section-head .eyebrow", "sideGym");
          setText("#section-gym .section-head h2", "gymH2");
          setText("#section-art .section-head .eyebrow", "sideArt");
          setText("#section-art .section-head h2", "artH2");
          setText("#section-quran .section-head .eyebrow", "sideQuran");
          setText("#section-quran .section-head h2", "quranH2");
          setText("#section-she .section-head .eyebrow", "sideShe");
          setText("#section-she .section-head h2", "sheH2");

          const benefits = document.querySelectorAll(".benefits article");
          if (benefits[0]) {
            benefits[0].querySelector("h3").textContent = t("benefitsFastTitle");
            benefits[0].querySelector("p").textContent = t("benefitsFastDesc");
          }
          if (benefits[1]) {
            benefits[1].querySelector("h3").textContent = t("benefitsReplaceTitle");
            benefits[1].querySelector("p").textContent = t("benefitsReplaceDesc");
          }
          if (benefits[2]) {
            benefits[2].querySelector("h3").textContent = t("benefitsTelegramTitle");
            benefits[2].querySelector("p").textContent = t("benefitsTelegramDesc");
          }

          setText("#cartbarMsg", "cartbarMsgDefault");
          setText("#cartbarOpen", "cartbarViewCart");
          setAttr("#drawerClose", "aria-label", "drawerCloseAria");
          setText(".drawer__head h3", "drawerTitle");
          setText(".drawer__foot .drawer__row:nth-child(1) span", "drawerSubtotal");
          setText(".drawer__foot .drawer__row:nth-child(2) span", "drawerDiscount");
          setText(".drawer__foot .drawer__row:nth-child(3) span", "drawerTotal");
          setText("#checkoutBtn", "checkoutNow");

          setText("#checkoutModal .modal__head h3", "checkoutTitle");
          setAttr("#checkoutClose", "aria-label", "checkoutCloseAria");
          setAttr("#whatsappFloatBtn", "aria-label", "whatsappAria");

          const nameLabel = document.querySelector("#checkoutForm input[name='name']")?.closest("label")?.querySelector("span");
          if (nameLabel) nameLabel.textContent = t("fullName");
          const phoneLabel = document.querySelector("#checkoutForm input[name='phone']")?.closest("label")?.querySelector("span");
          if (phoneLabel) phoneLabel.textContent = t("phone");
          const emailLabel = document.querySelector("#checkoutForm input[name='email']")?.closest("label")?.querySelector("span");
          if (emailLabel) emailLabel.textContent = t("email");
          const governorateLabel = document.querySelector("label[for='shipping-zone']");
          if (governorateLabel) governorateLabel.textContent = t("governorate");
          const addressLabel = document.querySelector("#checkoutForm input[name='address']")?.closest("label")?.querySelector("span");
          if (addressLabel) addressLabel.textContent = t("address");
          const notesLabel = document.querySelector("#checkoutForm textarea[name='notes']")?.closest("label")?.querySelector("span");
          if (notesLabel) notesLabel.textContent = t("notes");

          const shippingFirstOption = document.querySelector("#shipping-zone option[value='']");
          if (shippingFirstOption) shippingFirstOption.textContent = t("chooseGovernorate");

          setAttr("#checkoutForm input[name='name']", "placeholder", "namePlaceholder");
          setAttr("#checkoutForm input[name='address']", "placeholder", "addressPlaceholder");
          setAttr("#checkoutForm textarea[name='notes']", "placeholder", "notesPlaceholder");
          setText("#checkoutForm button[type='submit']", "confirmOrder");
          setText(".checkout-fine", "checkoutFine");

          const footerBrand = document.querySelector(".footer__brand p");
          if (footerBrand) {
            footerBrand.textContent = currentLanguage === "ar"
              ? "براند لوحات وإطارات مطبوعة بجودة عالية لتجهيز المساحات بشكل يليق بذوقك."
              : "A premium framed print brand that helps you style your space with taste and quality.";
          }
          const footerLinksTitle = document.querySelector(".footer__links h4");
          if (footerLinksTitle) footerLinksTitle.textContent = currentLanguage === "ar" ? "سوشيال البراند" : "Brand socials";
          const footerOwnerTitle = document.querySelector(".footer__owner h4");
          if (footerOwnerTitle) footerOwnerTitle.textContent = currentLanguage === "ar" ? "تصميم وتطوير" : "Design & development";
          const footerOwnerText = document.querySelector(".footer__owner p");
          if (footerOwnerText) {
            footerOwnerText.textContent = currentLanguage === "ar"
              ? "تم تصميم وتطوير هذا الموقع بالكامل بواسطة المالك. لو حابب تعمل موقع بنفس المستوى ابعتلنا."
              : "This website was fully designed and developed by the owner. If you want a site at the same level, contact us.";
          }
        }

        function setLanguage(nextLanguage) {
          if (!SUPPORTED_LANGS.has(nextLanguage)) return;
          currentLanguage = nextLanguage;
          applyStaticTranslations();
          renderProducts();
          renderCart();
          renderCheckoutSummary(Number(document.getElementById("shipping-zone")?.value || 0));
          const langToggle = document.getElementById("langToggle");
          if (langToggle) langToggle.value = currentLanguage;
        }

        function getSizeOption(sizeId) {
          return SIZE_OPTIONS.find((option) => option.id === sizeId) || SIZE_OPTIONS[0];
        }

        function getImageLabel(art, fallback) {
          if (!art) return fallback;
          if (art.startsWith("data:image")) return `${t("customUploadPrefix")} - ${fallback}`;
          return art.split("/").pop() || fallback;
        }

        function resolveArtPathForFetch(art) {
          if (!art) return "";
          if (art.startsWith("data:") || art.startsWith("blob:") || art.startsWith("http://") || art.startsWith("https://")) {
            return art;
          }
          if (art.startsWith("../") || art.startsWith("./") || art.startsWith("/")) {
            return art;
          }
          return window.location.pathname.includes("/files/") ? `../${art}` : art;
        }

        function loadCart() {
          try {
            return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
          } catch {
            return [];
          }
        }

        function saveCart() {
          localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
          renderCart();
        }

        function getCartSubtotal() {
          return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        }

        function getCartItemsCount() {
          return state.cart.reduce((sum, item) => sum + item.qty, 0);
        }

        function getActiveDiscountRate(itemCount = getCartItemsCount()) {
          return itemCount >= 2 ? BUNDLE_DISCOUNT_RATE : DISCOUNT_RATE;
        }

        function getDiscountValue(subtotal, itemCount = getCartItemsCount()) {
          return Math.round(subtotal * getActiveDiscountRate(itemCount));
        }

        function getDiscountedSubtotal(subtotal, itemCount = getCartItemsCount()) {
          return Math.max(0, subtotal - getDiscountValue(subtotal, itemCount));
        }

        function normalizeEgyptianPhone(phone) {
          const raw = String(phone || "").trim();
          if (!raw) return null;

          let value = raw.replace(/[\s\-()]/g, "");
          if (value.startsWith("+2")) value = value.slice(2);
          else if (value.startsWith("002")) value = value.slice(3);
          else if (value.startsWith("2") && value.length === 12) value = value.slice(1);

          if (!/^01[0125]\d{8}$/.test(value)) return null;
          return value;
        }

        function getSelectedCustomState() {
          const customSize = document.getElementById("customSize");
          const customDescription = document.getElementById("customDescription");
          const customizerPreview = document.getElementById("customizerPreview");
          const size = customSize?.value || "30x40";
          const description = customDescription?.value?.trim() || t("uploadedArtwork");
          const preview = customizerPreview?.src || "upload.jpg";
          return { size, description, preview, selectedSize: getSizeOption(size) };
        }

        function renderProducts() {
          renderSection("sportsGrid", CATALOG.sports);
          renderSection("carsGrid", CATALOG.cars);
          renderSection("gamingGrid", CATALOG.gaming);
          renderSection("rapGrid", CATALOG.rap);
          renderSection("quotesGrid", CATALOG.quotes);
          renderSection("moviesGrid", CATALOG.movies);
          renderSection("gymGrid", CATALOG.gym);
          renderSection("artGrid", CATALOG.art);
          renderSection("quranGrid", CATALOG.quran);
          renderSection("sheGrid", CATALOG.she);
          renderSection("customGrid", CATALOG.custom);
          renderRandomShowcase();
        }

        function renderRandomShowcase() {
          const stripRoots = [];

          FEATURED_STRIPS.forEach((strip) => {
            const root = document.getElementById(strip.rootId);
            if (!root) return;

            const stripPool = strip.categories
              .flatMap((category) => CATALOG[category] || [])
              .filter((item) => item.id !== "custom1" && item.id !== "custom2");
            const shuffled = [...stripPool].sort(() => Math.random() - 0.5);
            const items = shuffled.slice(0, strip.rowSize || 10);
            const marqueeItems = [...items, ...items, ...items];

            root.innerHTML = marqueeItems.map((item) => productCardHTML(item)).join("");
            root.dataset.flow = strip.direction === "rtl" ? "rtl" : "ltr";
            bindProductEvents(root);
            stripRoots.push(root);
          });

          setupRandomTrackControls(stripRoots);
          startRandomTracksMotion(stripRoots);
        }

        function setupRandomTrackControls(rowRoots) {
          rowRoots.forEach((track) => {
            if (!track || track.dataset.controlsBound === "1") return;

            const row = track.closest(".random-row");
            const prevBtn = row?.querySelector('.track-nav[data-dir="prev"]');
            const nextBtn = row?.querySelector('.track-nav[data-dir="next"]');

            const stepSize = () => Math.max(180, Math.round(track.clientWidth * 0.72));
            const moveTrack = (direction) => {
              track.scrollBy({ left: direction * stepSize(), behavior: "smooth" });
              pauseRandomTracks(7000);
            };

            prevBtn?.addEventListener("click", () => moveTrack(-1));
            nextBtn?.addEventListener("click", () => moveTrack(1));

            track.addEventListener("pointerdown", () => pauseRandomTracks(7000));
            track.addEventListener("touchstart", () => pauseRandomTracks(7000), { passive: true });
            track.addEventListener("wheel", () => pauseRandomTracks(5000), { passive: true });
            track.addEventListener("mouseenter", () => pauseRandomTracks(120000));
            track.addEventListener("mouseleave", () => pauseRandomTracks(500));
            bindRandomTrackDrag(track);

            track.dataset.controlsBound = "1";
          });
        }

        function wrapRandomTrackScroll(track, scrollLeft) {
          const segmentWidth = track.scrollWidth / 3;
          if (segmentWidth <= track.clientWidth) return 0;

          let wrapped = scrollLeft;
          const min = segmentWidth * 0.5;
          const max = segmentWidth * 1.5;

          if (wrapped < min) wrapped += segmentWidth;
          if (wrapped > max) wrapped -= segmentWidth;

          return wrapped;
        }

        function bindRandomTrackDrag(track) {
          if (!track || track.dataset.dragBound === "1") return;

          let pointerId = null;
          let startX = 0;
          let startY = 0;
          let startScroll = 0;
          let dragging = false;
          let moved = false;

          const onPointerMove = (event) => {
            if (pointerId === null || event.pointerId !== pointerId) return;

            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            if (!dragging && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
              dragging = Math.abs(dx) >= Math.abs(dy);
            }
            if (!dragging) return;

            moved = true;
            const nextScroll = startScroll - dx;
            track.scrollLeft = wrapRandomTrackScroll(track, nextScroll);
            track.classList.add("is-dragging");
            pauseRandomTracks(7000);
          };

          const endDrag = (event) => {
            if (pointerId === null || (event && event.pointerId !== pointerId)) return;

            try {
              track.releasePointerCapture(pointerId);
            } catch {
              // Ignore release errors when capture is already lost.
            }

            pointerId = null;
            dragging = false;
            track.classList.remove("is-dragging");
            if (moved) track.dataset.justDraggedAt = String(Date.now());
          };

          track.addEventListener("pointerdown", (event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            if (event.target.closest("button, select, input, textarea, label, .product__add, .opt-select, .rap-upload-input")) return;

            pointerId = event.pointerId;
            startX = event.clientX;
            startY = event.clientY;
            startScroll = track.scrollLeft;
            dragging = false;
            moved = false;
            track.setPointerCapture(pointerId);
            pauseRandomTracks(7000);
          });

          track.addEventListener("pointermove", onPointerMove);
          track.addEventListener("pointerup", endDrag);
          track.addEventListener("pointercancel", endDrag);
          track.addEventListener("lostpointercapture", endDrag);
          track.addEventListener("dragstart", (event) => event.preventDefault());
          track.addEventListener("click", (event) => {
            const draggedAt = Number(track.dataset.justDraggedAt || "0");
            if (draggedAt && Date.now() - draggedAt < 300) {
              event.preventDefault();
              event.stopPropagation();
            }
          }, true);

          track.dataset.dragBound = "1";
        }

        function pauseRandomTracks(durationMs) {
          randomTracksPauseUntil = Date.now() + durationMs;
        }

        function startRandomTracksMotion(rowRoots) {
          if (randomTracksTimer) {
            clearInterval(randomTracksTimer);
            randomTracksTimer = null;
          }
          if (randomTracksFrame) {
            cancelAnimationFrame(randomTracksFrame);
            randomTracksFrame = null;
          }

          const tracks = rowRoots.filter(Boolean);
          if (!tracks.length) return;

          tracks.forEach((track) => {
            track.dataset.dir = track.dataset.flow === "rtl" ? "-1" : "1";
            track.scrollLeft = track.scrollWidth / 3;
          });

          let lastTime = performance.now();
          const speedPxPerSecond = 30;

          const tick = (now) => {
            const deltaSeconds = Math.min(0.05, Math.max(0, (now - lastTime) / 1000));
            lastTime = now;

            if (Date.now() >= randomTracksPauseUntil) {
              tracks.forEach((track) => {
                const segmentWidth = track.scrollWidth / 3;
                if (segmentWidth <= track.clientWidth) return;

                const dir = Number(track.dataset.dir || "1");
                const next = track.scrollLeft + (dir * speedPxPerSecond * deltaSeconds);
                track.scrollLeft = wrapRandomTrackScroll(track, next);
              });
            }

            randomTracksFrame = requestAnimationFrame(tick);
          };

          randomTracksFrame = requestAnimationFrame(tick);
        }

        function renderSection(rootId, items) {
          const root = document.getElementById(rootId);
          if (!root) return;
          root.innerHTML = items.map((item) => productCardHTML(item)).join("");
          bindProductEvents(root);
        }

        function productCardHTML(item) {
          const optionsHTML = SIZE_OPTIONS.map((opt, index) => `<option value="${opt.id}" data-price="${opt.price}" data-was="${opt.was}" ${index === 0 ? "selected" : ""}>${opt.label} · ${opt.price} EGP</option>`).join("");
          const localizedTitle = localizeCatalogTitle(item.title);
          const isRapUpload = item.id === "rap5";
          const helperText = isRapUpload
            ? t("rapUploadHint")
            : item.id.startsWith("custom")
              ? t("productHelperCustom")
              : t("productHelperNormal");
          const uploadFieldHTML = isRapUpload
            ? `<label class="product__upload"><span>${t("rapUploadLabel")}</span><input class="rap-upload-input" type="file" accept="image/*" /></label>`
            : "";
          return `
            <article class="product" data-id="${item.id}">
              <div class="product__art">
                <img src="${item.art}" alt="${escapeHTML(localizedTitle)}" />
              </div>
              <div class="product__body">
                <h3 class="product__title">${escapeHTML(localizedTitle)}</h3>
                <div class="product__subcopy">${escapeHTML(helperText)}</div>
                ${uploadFieldHTML}
                <div class="product__opts">
                  <label>
                    <span>${t("sizeLabel")}</span>
                    <select class="opt-select">${optionsHTML}</select>
                  </label>
                </div>
                <div class="product__price"><s class="price-was">${fmt(SIZE_OPTIONS[0].was)}</s><span class="price">${fmt(SIZE_OPTIONS[0].price)}</span></div>
                <button class="btn btn--solid product__add" type="button">${t("addToCart")}</button>
              </div>
            </article>
          `;
        }

        function bindProductEvents(root) {
          $$(".product", root).forEach((card) => {
            const select = $(".opt-select", card);
            const priceEl = $(".price", card);
            const addBtn = $(".product__add", card);
            const rapUploadInput = $(".rap-upload-input", card);

            rapUploadInput?.addEventListener("change", (event) => {
              const file = event.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onload = () => {
                const dataUrl = String(reader.result || "");
                if (!dataUrl.startsWith("data:image")) return;

                const preview = $(".product__art img", card);
                if (preview) preview.src = dataUrl;
                card.dataset.customImage = dataUrl;
                card.dataset.customImageName = file.name || t("customUploadPrefix");
              };
              reader.readAsDataURL(file);
            });

            select?.addEventListener("change", () => {
              const option = select.selectedOptions[0];
              priceEl.textContent = fmt(Number(option.dataset.price));
              const wasEl = $(".price-was", card);
              if (wasEl) wasEl.textContent = fmt(Number(option.dataset.was));
            });

            addBtn?.addEventListener("click", () => {
              const option = select?.selectedOptions[0];
              const product = findCatalogItem(card.dataset.id);
              if (!product || !option) return;

              if (product.id === "custom1") {
                const customState = getSelectedCustomState();
                state.cart.push({
                  uid: uid(),
                  type: "custom",
                  title: `${t("customPrefix")} · ${customState.description}`,
                  option: customState.selectedSize.label,
                  price: customState.selectedSize.price,
                  qty: 1,
                  art: customState.preview,
                  imageLabel: getImageLabel(customState.preview, customState.description),
                  imageType: customState.preview.startsWith("data:image") ? "custom-upload" : "catalog"
                });
                saveCart();
                toast(t("customAdded"));
                return;
              }

              if (product.id === "rap5") {
                const uploadedImage = card.dataset.customImage;
                if (!uploadedImage) {
                  toast(t("rapUploadMissing"));
                  return;
                }

                const selectedSize = getSizeOption(option.value);
                const customTitle = `${t("customPrefix")} · ${localizeCatalogTitle(product.title)}`;
                state.cart.push({
                  uid: uid(),
                  type: "custom",
                  title: customTitle,
                  option: `${selectedSize.label} · ${t("optionFramed")}`,
                  price: selectedSize.price,
                  qty: 1,
                  art: uploadedImage,
                  imageLabel: card.dataset.customImageName || t("customUploadPrefix"),
                  imageType: "custom-upload"
                });
                saveCart();
                toast(t("rapUploadAdded"));
                return;
              }

              const selectedSize = getSizeOption(option.value);
              state.cart.push({
                uid: uid(),
                type: "print",
                title: product.title,
                option: `${selectedSize.label} · Framed`,
                price: selectedSize.price,
                qty: 1,
                art: product.art,
                imageLabel: getImageLabel(product.art, product.title),
                imageType: "catalog"
              });
              saveCart();
              toast(t("addedToCart", { title: localizeCatalogTitle(product.title) }));
            });
          });
        }

        function findCatalogItem(id) {
          return Object.values(CATALOG).flat().find((item) => item.id === id);
        }

        function syncWhatsAppOffset() {
          const cartbar = document.getElementById("cartbar");
          const isCartbarVisible = Boolean(cartbar && !cartbar.hidden);
          const offset = isCartbarVisible ? (cartbar.offsetHeight + 16) : 0;
          document.documentElement.style.setProperty("--wa-offset", `${offset}px`);
        }

        function renderCart() {
          const count = getCartItemsCount();
          const countEl = document.getElementById("cartCount");
          if (countEl) countEl.textContent = count;
          const cartbar = document.getElementById("cartbar");
          const whatsappFloatBtn = document.getElementById("whatsappFloatBtn");

          const itemsRoot = document.getElementById("drawerItems");
          if (!itemsRoot) return;

          if (state.cart.length === 0) {
            itemsRoot.innerHTML = `<div class="empty"><strong>${t("cartEmpty")}</strong>${t("cartEmptyHint")}</div>`;
            if (cartbar) cartbar.hidden = true;
            document.body.classList.remove("has-cartbar");
          } else {
            itemsRoot.innerHTML = state.cart.map(cartItemHTML).join("");
            if (cartbar) cartbar.hidden = false;
            document.body.classList.add("has-cartbar");
            bindCartItemEvents();
          }

          const subtotal = getCartSubtotal();
          const discount = getDiscountValue(subtotal, count);
          const total = getDiscountedSubtotal(subtotal, count);
          const subtotalEl = document.getElementById("drawerSubtotal");
          const discountEl = document.getElementById("drawerDiscount");
          const totalEl = document.getElementById("drawerTotal");
          if (subtotalEl) subtotalEl.textContent = fmt(subtotal);
          if (discountEl) discountEl.textContent = `- ${fmt(discount)}`;
          if (totalEl) totalEl.textContent = fmt(total);

          const cartbarMsg = document.getElementById("cartbarMsg");
          if (cartbarMsg) {
            if (count < 2) {
              cartbarMsg.textContent = t("cartbarNeedTwo");
            } else {
              cartbarMsg.textContent = total >= FREE_SHIPPING_THRESHOLD
                ? t("cartbarUnlocked")
                : t("cartbarNeedMore", { amount: Math.max(0, FREE_SHIPPING_THRESHOLD - total) });
            }
          }

          syncWhatsAppOffset();
        }

        function cartItemHTML(item) {
          const artMarkup = item.art
            ? `<div class="cart-item__artframe"><img src="${item.art}" alt="${escapeHTML(item.title)}" /></div>`
            : '<div class="cart-item__artframe">🖼</div>';
          return `
            <div class="cart-item" data-uid="${item.uid}">
              <div class="cart-item__art">${artMarkup}</div>
              <div class="cart-item__body">
                <div class="cart-item__title">${escapeHTML(localizeItemTitle(item.title))}</div>
                <div class="cart-item__sub">${escapeHTML(localizeItemOption(item.option))}</div>
                <div class="cart-item__row">
                  <div class="qty">
                    <button type="button" data-act="dec">−</button>
                    <span>${item.qty}</span>
                    <button type="button" data-act="inc">+</button>
                  </div>
                  <strong>${fmt(item.price * item.qty)}</strong>
                </div>
                <button class="cart-item__remove" type="button" data-act="rm">${t("remove")}</button>
              </div>
            </div>
          `;
        }

        function bindCartItemEvents() {
          $$(".cart-item").forEach((node) => {
            const uidValue = node.dataset.uid;
            const item = state.cart.find((entry) => entry.uid === uidValue);
            if (!item) return;

            $("[data-act='inc']", node)?.addEventListener("click", () => {
              item.qty += 1;
              saveCart();
            });

            $("[data-act='dec']", node)?.addEventListener("click", () => {
              item.qty = Math.max(1, item.qty - 1);
              saveCart();
            });

            $("[data-act='rm']", node)?.addEventListener("click", () => {
              state.cart = state.cart.filter((entry) => entry.uid !== uidValue);
              saveCart();
            });
          });
        }

        function syncBodyLock() {
          const drawerOpen = document.getElementById("drawer")?.getAttribute("aria-hidden") === "false";
          const modalOpen = document.getElementById("checkoutModal")?.getAttribute("aria-hidden") === "false";
          document.body.style.overflow = drawerOpen || modalOpen ? "hidden" : "";
        }

        function openDrawer() {
          document.getElementById("drawer")?.setAttribute("aria-hidden", "false");
          syncBodyLock();
        }

        function closeDrawer() {
          document.getElementById("drawer")?.setAttribute("aria-hidden", "true");
          syncBodyLock();
        }

        function openModal(id) {
          closeDrawer();
          const modal = document.getElementById(id);
          modal?.setAttribute("aria-hidden", "false");
          syncBodyLock();
          setTimeout(() => {
            const firstInput = $("input, textarea, select", modal);
            firstInput?.focus();
          }, 50);
        }

        function closeModal(id) {
          document.getElementById(id)?.setAttribute("aria-hidden", "true");
          syncBodyLock();
        }

        function toast(message) {
          const toastEl = document.getElementById("toast");
          if (!toastEl) return;
          toastEl.textContent = message;
          toastEl.hidden = false;
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => {
            toastEl.hidden = true;
          }, 2600);
        }

        function renderCheckoutSummary(shippingCost = 0) {
          const summary = document.getElementById("checkoutSummary");
          if (!summary) return;

          const subtotal = getCartSubtotal();
          const itemCount = getCartItemsCount();
          const discount = getDiscountValue(subtotal, itemCount);
          const discountedSubtotal = getDiscountedSubtotal(subtotal, itemCount);
          const total = discountedSubtotal + shippingCost;

          const rows = state.cart.map((item) => `
            <div class="checkout-summary__row">
              <span>${escapeHTML(localizeItemTitle(item.title))} <small>× ${item.qty}</small></span>
              <span>${fmt(item.price * item.qty)}</span>
            </div>
          `).join("");

          summary.innerHTML = `
            ${rows}
            <div class="checkout-summary__row">
              <span>${t("summarySubtotal")}</span>
              <span>${fmt(subtotal)}</span>
            </div>
            <div class="checkout-summary__row checkout-summary__row--discount">
              <span>${t("summaryDiscount")}</span>
              <span>- ${fmt(discount)}</span>
            </div>
            <div class="checkout-summary__row">
              <span>${t("summaryAfterDiscount")}</span>
              <span>${fmt(discountedSubtotal)}</span>
            </div>
            <div class="checkout-summary__row">
              <span>${t("summaryShipping")}</span>
              <span>${fmt(shippingCost)}</span>
            </div>
            <div class="checkout-summary__row checkout-summary__total">
              <span>${t("summaryTotal")}</span>
              <span>${fmt(total)}</span>
            </div>
          `;
        }

        function openCheckout() {
          if (state.cart.length === 0) {
            toast(t("emptyCartToast"));
            return;
          }
          renderCheckoutSummary(Number(document.getElementById("shipping-zone")?.value || 0));
          openModal("checkoutModal");
        }

        function updateShippingCost() {
          renderCheckoutSummary(Number(document.getElementById("shipping-zone")?.value || 0));
        }

        function handleCheckoutSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const shippingCost = Number(document.getElementById("shipping-zone")?.value || 0);
          const subtotal = getCartSubtotal();
          const itemCount = getCartItemsCount();
          const discount = getDiscountValue(subtotal, itemCount);
          const discountedSubtotal = getDiscountedSubtotal(subtotal, itemCount);

          const order = {
            id: `OP-${Date.now().toString().slice(-6)}`,
            customer: {
              name: (formData.get("name") || "").toString().trim(),
              phone: (formData.get("phone") || "").toString().trim(),
              email: (formData.get("email") || "").toString().trim(),
              address: (formData.get("address") || "").toString().trim(),
              notes: (formData.get("notes") || "").toString().trim()
            },
            items: state.cart.map((item) => ({
              title: item.title,
              option: item.option,
              qty: item.qty,
              price: item.price,
              subtotal: item.price * item.qty,
              imageLabel: item.imageLabel || item.title,
              imageType: item.imageType || "catalog",
              art: item.art || ""
            })),
            subtotal,
            discount,
            discountedSubtotal,
            shipping: shippingCost,
            total: discountedSubtotal + shippingCost,
            createdAt: new Date().toISOString()
          };

          if (!order.customer.name || !order.customer.phone || !order.customer.address) {
            toast(t("validationToast"));
            return;
          }

          const normalizedPhone = normalizeEgyptianPhone(order.customer.phone);
          if (!normalizedPhone) {
            toast(t("phoneValidationToast"));
            return;
          }
          order.customer.phone = normalizedPhone;

          localStorage.setItem("opscura_last_order", JSON.stringify(order));
          Promise.allSettled([sendOrderToBackend(order)]).finally(() => finalizeOrder(order));
        }

        async function sendOrderToBackend(order) {
          const cfg = window.OPSCURA_CONFIG || {};
          const endpoint = cfg.backendEndpoint || "";
          const token = cfg.telegramBotToken || "";
          const chatId = cfg.telegramChatId || "";

          if (!endpoint && (!token || !chatId)) {
            console.info("No backend endpoint or Telegram credentials configured yet.");
            return;
          }

          if (endpoint) {
            await fetch(endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ order, config: { telegramBotToken: token, telegramChatId: chatId } })
            });
            return;
          }

          await sendTelegramMessage(token, chatId, buildTelegramText(order));
          for (const item of order.items) {
            await sendTelegramPhoto(token, chatId, item);
          }
        }

        async function sendTelegramMessage(token, chatId, text) {
          const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text })
          });
          if (!response.ok) throw new Error("Telegram delivery failed");
        }

        async function sendTelegramPhoto(token, chatId, item) {
          if (!item.art) return;

          try {
            const photoResponse = await fetch(resolveArtPathForFetch(item.art));
            if (!photoResponse.ok) throw new Error("Photo load failed");
            const photoBlob = await photoResponse.blob();
            const formData = new FormData();
            formData.append("chat_id", chatId);
            formData.append("caption", `${item.title}\n${item.option}\n${item.imageLabel}`);
            formData.append("photo", photoBlob, item.imageLabel || "product.jpg");

            const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
              method: "POST",
              body: formData
            });

            if (!response.ok) {
              await sendTelegramMessage(token, chatId, `Image upload failed for ${item.title}, but the item is still included in the order.`);
            }
          } catch {
            await sendTelegramMessage(token, chatId, `Image preview unavailable for ${item.title}. Title and item details were still delivered.`);
          }
        }

        function buildTelegramText(order) {
          const lines = order.items.map((item) => `• ${item.title} (${item.option}) × ${item.qty} = ${item.subtotal} EGP\n  🖼 ${item.imageLabel}`).join("\n");
          return `🛒 NEW OPSCURA ORDER — ${order.id}\n──────────────\n👤 ${order.customer.name}\n📞 ${order.customer.phone}\n${order.customer.email ? `✉️ ${order.customer.email}\n` : ""}📍 ${order.customer.address}\n${order.customer.notes ? `📝 ${order.customer.notes}\n` : ""}──────────────\n${lines}\n──────────────\n💸 Subtotal: ${order.subtotal} EGP\n🏷 Discount: ${order.discount} EGP\n🚚 Shipping: ${order.shipping} EGP\n💰 TOTAL: ${order.total} EGP\n🕒 ${new Date(order.createdAt).toLocaleString("en-GB")}`;
        }

        function finalizeOrder(order) {
          state.cart = [];
          saveCart();
          closeModal("checkoutModal");
          closeDrawer();
          showSuccess(order);
        }

        function showSuccess(order) {
          toast(t("orderSuccess", { id: order.id }));
        }

        function bindEvents() {
          document.getElementById("navCart")?.addEventListener("click", openDrawer);
          document.getElementById("cartbarOpen")?.addEventListener("click", openDrawer);
          document.getElementById("drawerClose")?.addEventListener("click", closeDrawer);
          document.getElementById("drawerScrim")?.addEventListener("click", closeDrawer);
          document.getElementById("checkoutBtn")?.addEventListener("click", (event) => {
            event.preventDefault();
            openCheckout();
          });
          document.getElementById("checkoutClose")?.addEventListener("click", () => closeModal("checkoutModal"));
          document.getElementById("checkoutModal")?.addEventListener("click", (event) => {
            if (event.target.id === "checkoutModal" || event.target.id === "checkoutScrim") {
              closeModal("checkoutModal");
            }
          });
          document.querySelector("#checkoutModal .modal__panel")?.addEventListener("click", (event) => {
            event.stopPropagation();
          });
          document.getElementById("checkoutForm")?.addEventListener("submit", handleCheckoutSubmit);
          document.getElementById("shipping-zone")?.addEventListener("change", updateShippingCost);

          document.getElementById("navMenu")?.addEventListener("click", () => {
            document.getElementById("sideMenu")?.setAttribute("aria-hidden", "false");
          });
          document.getElementById("sideMenuClose")?.addEventListener("click", () => {
            document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
          });
          document.getElementById("sideMenuBackdrop")?.addEventListener("click", () => {
            document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
          });

          document.getElementById("langToggle")?.addEventListener("change", (event) => {
            const selected = event.target?.value;
            if (typeof selected === "string") setLanguage(selected);
          });

          window.addEventListener("resize", syncWhatsAppOffset);

          document.querySelectorAll(".collection-card, .side-menu__panel a").forEach((element) => {
            element.addEventListener("click", () => {
              if (element.tagName === "A") {
                const href = element.getAttribute("href") || "";
                if (!href.startsWith("#")) {
                  document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
                  return;
                }
              }
              const section = element.dataset.section;
              if (!section) return;
              const targetMap = {
                custom: "customizer",
                cars: "section-cars",
                gaming: "section-gaming",
                sports: "section-sports",
                rap: "section-rap",
                quotes: "section-quotes",
                movies: "section-movies",
                gym: "section-gym",
                contact: "footer"
              };
              const targetId = targetMap[section] || "collections";
              document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
              document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
            });
          });

          const customImageInput = document.getElementById("customImageInput");
          const customizerPreview = document.getElementById("customizerPreview");
          const customSize = document.getElementById("customSize");
          const customizerPrice = document.getElementById("customizerPrice");
          const addCustomBtn = document.getElementById("addCustomBtn");

          const syncCustomizerPrice = () => {
            const selectedSize = getSizeOption(customSize?.value || "30x40");
            if (customizerPrice) customizerPrice.textContent = fmt(selectedSize.price);
          };

          syncCustomizerPrice();
          customSize?.addEventListener("change", syncCustomizerPrice);

          customImageInput?.addEventListener("change", (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
              if (customizerPreview && typeof loadEvent.target?.result === "string") {
                customizerPreview.src = loadEvent.target.result;
              }
            };
            reader.readAsDataURL(file);
          });

          addCustomBtn?.addEventListener("click", () => {
            const customState = getSelectedCustomState();
            state.cart.push({
              uid: uid(),
              type: "custom",
              title: `${t("customPrefix")} · ${customState.description}`,
              option: customState.selectedSize.label,
              price: customState.selectedSize.price,
              qty: 1,
              art: customState.preview,
              imageLabel: getImageLabel(customState.preview, customState.description),
              imageType: customState.preview.startsWith("data:image") ? "custom-upload" : "catalog"
            });
            saveCart();
            toast(t("customAdded"));
          });

          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              closeDrawer();
              closeModal("checkoutModal");
              document.getElementById("sideMenu")?.setAttribute("aria-hidden", "true");
            }
          });
        }

        function init() {
          bindEvents();
          currentLanguage = "en";
          localStorage.removeItem(LANG_KEY);
          setLanguage("en");
          syncBodyLock();
        }

        document.addEventListener("DOMContentLoaded", init);
      })();