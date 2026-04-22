const heritageData = {
    // Food Category
    "mansaf": {
        title: "المنسف",
        subtitle: "الأردن",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mansaf.jpg/800px-Mansaf.jpg",
        categoryUrl: "food.html",
        section1Title: "المكونات",
        section1Items: ["أرز", "لحم غنم", "لبن جميد", "لوز", "صنوبر"],
        section2Title: "أصل الطبق",
        section2Text: "طبق أردني تاريخي يعود إلى الثقافة البدوية ويعتبر الطبق الوطني للأردن.",
        section3Title: "مناسبة التقديم",
        section3Text: "الأعياد، المناسبات الرسمية، حفلات الزفاف، وإكرام الضيوف.",
        section4Title: "طريقة التحضير",
        section4Items: ["سلق اللحم مع المطيبات", "طهي الأرز مع السمن البلدي", "إضافة لبن الجميد المذاب وطبخه مع اللحم", "التزيين باللوز والصنوبر والبقدونس"]
    },
    "kabsa": {
        title: "الكبسة",
        subtitle: "السعودية",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chicken_Machbous.jpg/800px-Chicken_Machbous.jpg",
        categoryUrl: "food.html",
        section1Title: "المكونات",
        section1Items: ["أرز طويل الحبة", "لحم أو دجاج", "طماطم وبصل", "بهارات الكبسة", "مكسرات وزبيب"],
        section2Title: "أصل الطبق",
        section2Text: "أشهر الأطباق في المملكة العربية السعودية والخليج العربي.",
        section3Title: "مناسبة التقديم",
        section3Text: "الولائم، العزائم، والتجمعات العائلية.",
        section4Title: "طريقة التحضير",
        section4Items: ["سلق الدجاج أو اللحم مع البهارات الصحيحة", "قلي البصل والطماطم وإضافة بهارات الكبسة", "طبخ الأرز في مرق اللحم أو الدجاج", "تقديمها مزينة بالمكسرات المقلية"]
    },
    // Clothing Category
    "besht": {
        title: "البشت",
        subtitle: "الخليج العربي",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/BeshT_01.jpg/800px-BeshT_01.jpg",
        categoryUrl: "clothing.html",
        section1Title: "المواد والأقمشة",
        section1Items: ["صوف الجمل أو الغنم", "وبر ناعم", "خيوط ذهبية (الزري)", "خيوط قطنية"],
        section2Title: "أصل اللباس",
        section2Text: "لباس عربي تقليدي عريق يرتديه الرجال فوق الثوب.",
        section3Title: "مناسبة الارتداء",
        section3Text: "حفلات الزفاف، الأعياد، المقابلات الرسمية.",
        section4Title: "طريقة اللبس",
        section4Items: ["يرتدى فوق الثوب الأبيض", "يوضع على الأكتاف بشكل فضفاض", "يترك مفتوحاً من الأمام", "يتم مسك الحافة باليد أثناء المشي كدليل على الوقار"]
    },
    // Customs Category
    "arabic-coffee": {
        title: "القهوة العربية",
        subtitle: "الوطن العربي",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arabic_coffee_dallah.jpg/800px-Arabic_coffee_dallah.jpg",
        categoryUrl: "customs.html",
        section1Title: "الأدوات والمكونات",
        section1Items: ["حبوب القهوة المحمصة", "الهيل", "الزعفران أو القرنفل (اختياري)", "الدلة (الإبريق)", "الفناجين"],
        section2Title: "أصل العادة",
        section2Text: "عادة بدوية عربية أصيلة ارتبطت بالكرم والضيافة وحسن الاستقبال.",
        section3Title: "مناسبة التقديم",
        section3Text: "ترحيباً بالضيوف، في المجالس، والمناسبات السعيدة والحزينة.",
        section4Title: "آداب التقديم",
        section4Items: ["التقديم باليد اليمنى والدلة في اليسرى", "صب كمية قليلة في الفنجان (صبة الحشمة)", "استمرار الصب حتى يقوم الضيف بهز الفنجان", "أن يتذوق المضيف القهوة قبل تقديمها للضيوف"]
    },
    // Lexicon Category
    "dallah": {
        title: "الدلّة",
        subtitle: "أداة تراثية",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Old_Arabic_manuscript.jpg/1200px-Old_Arabic_manuscript.jpg",
        categoryUrl: "lexicon.html",
        section1Title: "وصف الأداة",
        section1Items: ["وعاء نحاسي أو برونزي", "مقبض طويل للحمل", "مصب طويل ومائل", "غطاء مزخرف"],
        section2Title: "الأصل التاريخي",
        section2Text: "ارتبطت بصناعة القهوة عند العرب منذ اكتشافها في اليمن وانتقالها لشبه الجزيرة.",
        section3Title: "الاستخدام",
        section3Text: "تغلى فيها القهوة وتقدم للضيوف مباشرة.",
        section4Title: "أنواع الدلال",
        section4Items: ["الدلة الحساوية", "الدلة البغدادية", "الدلة الحمصية", "الدلة العمانية"]
    },
    // Games Category
    "hopscotch": {
        title: "الحجلة (القفز)",
        subtitle: "ألعاب حركية",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hopscotch_court.jpg/800px-Hopscotch_court.jpg",
        categoryUrl: "games.html",
        section1Title: "أدوات اللعبة",
        section1Items: ["طبشور أو حجر للرسم", "حجر صغير للرمي (القطعة)", "مساحة مسطحة للرسم"],
        section2Title: "أصل اللعبة",
        section2Text: "لعبة عالمية وتعتبر من أقدم الألعاب الشعبية المنتشرة في الوطن العربي.",
        section3Title: "مناسبة اللعب",
        section3Text: "تلعب في الحارات والأفنية المدرسية والساحات المفتوحة.",
        section4Title: "طريقة اللعب",
        section4Items: ["رسم مربعات مرقمة على الأرض", "رمي الحجر داخل المربع بالترتيب", "القفز على قدم واحدة أو قدمين حسب المربعات", "التقاط الحجر في طريق العودة دون ملامسة الخطوط"]
    },
    "carrom": {
        title: "الكيرم",
        subtitle: "ألعاب لوحية",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Carrom_board.jpg/800px-Carrom_board.jpg",
        categoryUrl: "games.html",
        section1Title: "أدوات اللعبة",
        section1Items: ["لوح خشبي مربع بجيوب", "أقراص خشبية سوداء وبيضاء", "القرص الأحمر (الكوين أو الخال)", "قرص التسديد (المضرب)"],
        section2Title: "أصل اللعبة",
        section2Text: "من أصول هندية وانتشرت بشكل واسع في الخليج العربي وأصبحت جزءاً من تراثهم.",
        section3Title: "مناسبة اللعب",
        section3Text: "في المجالس، الدواوين، والتجمعات العائلية لاسيما في المساء.",
        section4Title: "طريقة اللعب",
        section4Items: ["ترتيب الأقراص في المنتصف", "استخدام قرص التسديد لإدخال الأقراص في الجيوب", "الحصول على أكبر قدر من النقاط", "يجب إدخال قرص عادي بعد القرص الأحمر لاحتسابه"]
    }
}
