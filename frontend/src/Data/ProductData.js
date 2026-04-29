
const laptopDataRaw = [
  {
    "title": "HP Omnibook 5 OLED (Previously Pavilion), Snapdragon X Processor (16GB LPDDR5x,1TB SSD) 2K OLED,16''/40.6cm, Win11, M365*Office24, Glacier Silver, 1.59kg, fb0001QU, Backlit, Next-Gen AI Laptop",
    "price": "78,850",
    "image": "https://m.media-amazon.com/images/I/71yaFtjgRzL._AC_UY218_.jpg"
  },
  {
    "title": "Dell 15, 13th Gen Intel Core i5-1334U (16GB DDR4, 512GB SSD) Anti-Glare FHD 15.6\"/39.62cm, Windows 11, Microsoft Office Home 2024, Grey, 1.66kg, [Vostro 3530], 12 Month McAfee, Thin & Light Laptop",
    "price": "65,990",
    "image": "https://m.media-amazon.com/images/I/712WiT-wexL._AC_UY218_.jpg"
  },
  {
    "title": "BrowseBook 14.1\" FHD IPS Laptop | Best Student & Office Work Laptop | Celeron N4020 | 4GB RAM | 128GB SSD | Windows 11 | 38Wh | 1.3kg | Grey",
    "price": "13,990",
    "image": "https://m.media-amazon.com/images/I/71h+7L8gcrL._AC_UY218_.jpg"
  },
  {
    "title": "HP 15, 13th Gen Intel Core i3-1315U Laptop (8GB DDR4,512GB SSD) Anti-Glare, Micro-Edge,15.6''/39.6cm, FHD, Win11,M365 Basic(1yr),Office Home24, Silver,1.59kg, FHD Camera w/Privacy Shutter, fd0569TU",
    "price": "47,990",
    "image": "https://m.media-amazon.com/images/I/71VXUiEYJ1L._AC_UY218_.jpg"
  },
  {
    "title": "EBook 11.6\" HD Laptop | Best Student & Office Work Laptop | Celeron N4020 | 4GB DDR4 | 128GB eMMC + M.2 SSD Expandable Slot | Win 11 Home |31Wh Battery | UHD Graphics 600 | Black",
    "price": "11,990",
    "image": "https://m.media-amazon.com/images/I/71F8TUSryhL._AC_UY218_.jpg"
  },
  {
    "title": "Apple 2026 MacBook Neo 13″ Laptop with A18 Pro chip: Built for AI and Apple Intelligence, Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera; Indigo",
    "price": "67,900",
    "image": "https://m.media-amazon.com/images/I/61vTx-Qa1QL._AC_UL640_QL65_.jpg"
  },
  {
    "title": "acer SmartChoice Aspire Lite, AMD Ryzen 5-5625U Processor, 16 GB/512 GB, Full HD, 15.6\"/39.62 cm, Windows 11 Home, Steel Gray, 1.59 kg, AL15-41, Metal Body, Thin and Light Laptop",
    "price": "45,990",
    "image": "https://m.media-amazon.com/images/I/718UBZxpxrL._AC_UY218_.jpg"
  },
  {
    "title": "Lenovo Ideapad Slim 3 AMD Ryzen 5 7520U 15.6\" (39.6cm) FHD Thin and Light Laptop (16GB/512GB SSD/Windows 11/Microsoft 365 Basic + Office Home 2024/Backlit Keyboard/Grey/1.6Kg), 82XQ00XDIN",
    "price": "50,990",
    "image": "https://m.media-amazon.com/images/I/71TpJsdzvCL._AC_UY218_.jpg"
  },
  {
    "title": "ASUS Vivobook 15, 13th Gen, Intel Core i3-1315U, 16GB RAM, 512GB SSD, FHD, Anti-Glare, 15.6\", 39.6 cm, Windows 11 Home, M365 Basic(1yr)* Office24, Quiet Blue, 1.70 kg, X1504VA-BQ342WS, Laptop",
    "price": "46,900",
    "image": "https://m.media-amazon.com/images/I/71OUu3JeNIL._AC_UY218_.jpg"
  },
  {
    "title": "Lenovo Yoga Slim 7 Intel Core Ultra 5 125H (16GB RAM/1TB SSD/14 (35.5cm)/WUXGA OLED/Copilot+ PC/Windows 11/MSO 365 Basic+Office 2024/1Yr ADP Free/Teal/1.39Kg), 83CV00G2IN",
    "price": "86,990",
    "image": "https://m.media-amazon.com/images/I/81PaO9Q1WFL._AC_UY218_.jpg"
  },
  {
    "title": "acer Aspire Lite, AMD Ryzen 3 5300U Processor, 16 GB RAM, 512GB SSD, Full HD, 15.6\"/39.62cm, Windows 11 Home, Steel Gray, 1.59KG, AL15-41, Metal Body, Premium Thin and Light Laptop",
    "price": "44,990",
    "image": "https://m.media-amazon.com/images/I/513p8BwV-RL._AC_UY218_.jpg"
  },
  {
    "title": "HP 15, Intel Core Ultra 5 125H (24GB DDR5, 1TB SSD), Micro-Edge, Anti-Glare, FHD, 15''/39.6cm, Win11, M365* Office24, Silver, 1.65kg, FD1458TU, FHD Camera, Backlit Laptop",
    "price": "84,990",
    "image": "https://m.media-amazon.com/images/I/71GUbAzXvLL._AC_UY218_.jpg"
  },
  {
    "title": "HP Smartchoice OmniBook 5 (Previously Pavilion) 50 Tops, AMD Ryzen AI 5 340 (16GB LPDDR5X, 512GB SSD) WUXGA 2K, 16''/40.6cm, Win11, Office24, Silver, 1.79kg, ag1037au, Next Gen AI Copilot+ Laptop",
    "price": "69,990",
    "image": "https://m.media-amazon.com/images/I/812Gk34kkML._AC_UY218_.jpg"
  },
  {
    "title": "HP 15, 13th Gen Intel Core i3-1315U (12GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver, 1.59kg, fd0573TU, FHD Camera w/Shutter Laptop",
    "price": "51,990",
    "image": "https://m.media-amazon.com/images/I/71FXHAM+jWL._AC_UY218_.jpg"
  },
  {
    "title": "HP OmniBook 5 OLED (Previously Pavilion), Snapdragon X Processor (16GB LPDDR5x, 512GB SSD) 2K, 14''/35.6cm, Win11, M365 Basic(1yr)* Office24, Silver, 1.35kg, he0014QU, Light-Weight, Next-Gen AI Laptop",
    "price": "78,990",
    "image": "https://m.media-amazon.com/images/I/71fHNU8KnQL._AC_UL320_.jpg"
  },
  {
    "title": "HP OmniBook 5 OLED (Previously Pavilion), Snapdragon X Processor (16GB LPDDR5x, 512GB SSD) 2K, 14''/35.6cm, Win11, M365 Basic(1yr)* Office24, Silver, 1.35kg, he0014QU, Light-Weight, Next-Gen AI Laptop",
    "price": "78,990",
    "image": "https://m.media-amazon.com/images/I/71fHNU8KnQL._AC_UL320_.jpg"
  },
  {
    "title": "Primebook 2 Max (2026) | 8GB RAM, 256GB UFS Storage | 15.6-Inch Full HD IPS Display | 12hrs Battery | MediaTek Helio G99 | Android 15 (PrimeOS 3.0) | Backlit Keyboard | in-Built AI (Gray)",
    "price": "28,490",
    "image": "https://m.media-amazon.com/images/I/51JTBldTCXL._AC_UL320_.jpg"
  },
  {
    "title": "Lenovo LOQ AMD Ryzen 5 7235HS | NVIDIA RTX 3050A 4GB (12GB RAM/512GB SSD/144Hz Refresh Rate/15.6\" (39.6cm)/Windows 11/Office Home 2024/3 Mon. Game Pass/Grey/2.4Kg), 83JC00JXIN AI Gaming Laptop",
    "price": "66,990",
    "image": "https://m.media-amazon.com/images/I/61aXoUYHNcL._AC_UL320_.jpg"
  },
  {
    "title": "ASUS Chromebook CX1405 (2025), Intel Core 3-N355, 8GB RAM, 128GB SSD, FHD 14\"(35.56cm), Chrome OS, Pure Grey, 1.38Kg, CX1405CTA-S60724, Intel UHD Graphics, 42WHrs, Thin & Light Laptop",
    "price": "34,490",
    "image": "https://m.media-amazon.com/images/I/71LikKalsOL._AC_UY218_.jpg"
  },
  {
    "title": "HP 14s Intel Celeron Dual Core N4500 Laptop (8GB/512GB SSD/Win 11) 14.0\" HD Display, MSO 24, Black, 1.46kg, DQ3149TU Thin and Light Business Laptop",
    "price": "40,999",
    "image": "https://m.media-amazon.com/images/I/61bRpOLNVKL._AC_UY218_.jpg"
  },
  {
    "title": "HP 255 Notebook, AMD Athlon Silver 7120U,8GB DDR4, 256GB SSD, 15.6-inch(39.6cm), Anti-Glare, HD Laptop, Radeon Graphics, (Win 11, Silver,1.52kg) G10",
    "price": "38,790",
    "image": "https://m.media-amazon.com/images/I/71rw7cd14mL._AC_UY218_.jpg"
  },
  {
    "title": "acer Professional 14, AMD Ryzen 3-7330U, 8 GB RAM, 512 GB SSD, Full HD 14\", Windows 11 Pro, MSO21, Pro Silver, 1.39 KG, Professional Premium Laptop, Travel Lite",
    "price": "40,990",
    "image": "https://m.media-amazon.com/images/I/51xKQHXurwL._AC_UY218_.jpg"
  },
  {
    "title": "ASUS TUF A15 (2025), AMD Ryzen 7 7445HS,RTX 3050-4GB,75W TGP,16GB DDR5(Upgradeable Upto 64GB) 512GB SSD,FHD,15.6\",144Hz,RGB Keyboard,Windows 11,Graphite Black,2.3 Kg FA506NCG-HN199W, Gaming Laptop",
    "price": "71,990",
    "image": "https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_UY218_.jpg"
  },
  {
    "title": "ASUS Vivobook Go 14, AMD Ryzen 5 7520U, 16GB RAM, 512GB SSD, FHD, 14\", 60Hz,42WHrs, Windows 11, M365 Basic (1Year)*,Office Home 2024, Mixed Black, 1.38 kg, E1404FA-EB774WS, Thin & Light Laptop",
    "price": "48,990",
    "image": "https://m.media-amazon.com/images/I/71AfM5k3J4L._AC_UY218_.jpg"
  },
  {
    "title": "HP 15 Laptop, AMD Ryzen 7-5825U [16GB DDR4 Ram/512GB SSD/Win11/Office Home'2024/M365 Basic(1yr)*/Anti-Glare,Micro-Edge,15.6''/39.6cm FHD/Silver,1.59kg /Backlit KB+FHD Camera+Radeon Graphics] fc0533AU",
    "price": "56,990",
    "image": "https://m.media-amazon.com/images/I/713CLhU8hQL._AC_UY218_.jpg"
  },
  {
    "title": "Primebook 2 Pro (2026) | 8GB RAM, 128GB UFS Storage | 14.1-Inch FHD IPS Display | 14 Hours Battery | MediaTek Helio G99 | Android 15 (PrimeOS 3.0) | Backlit Keyboard | in-Built AI (Gray)",
    "price": "24,990",
    "image": "https://m.media-amazon.com/images/I/51CIIx6l+VL._AC_UY218_.jpg"
  },
  {
    "title": "Primebook 2 Max (2026) | 8GB RAM, 256GB UFS Storage | 15.6-Inch Full HD IPS Display | 12hrs Battery | MediaTek Helio G99 | Android 15 (PrimeOS 3.0) | Backlit Keyboard | in-Built AI (Gray)",
    "price": "28,490",
    "image": "https://m.media-amazon.com/images/I/51JTBldTCXL._AC_UY218_.jpg"
  },
  {
    "title": "QUICLEAN Laptop Cleaner Kit -500ml With 7-In-1 Gadget Cleaning Machine & 350gsm Cloth For All Screen Cleaning | Machine Cleans - Mobile, Laptop, Keyboard, Earbuds & Lens|Cleaner Cloth For Large Screen",
    "price": "400",
    "image": "https://m.media-amazon.com/images/I/61bs+nMzxSL._AC_UL640_QL65_.jpg"
  }
];

const mobileDataRaw = [
  {
    "title": "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine",
    "price": "69,900",
    "image": "https://m.media-amazon.com/images/I/712SuRmHG4L._AC_UY218_.jpg"
  },
  {
    "title": "Apple iPhone 16 Plus 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Pink",
    "price": "79,900",
    "image": "https://m.media-amazon.com/images/I/71AXSIdO4oL._AC_UY218_.jpg"
  },
  {
    "title": "iQOO Z10 Lite 5G (Titanium Blue, 6GB RAM, 128GB Storage) | 6000 mAh Battery | Dimensity 6300 5G Processor with 433K+* AnTuTu Score | IP64 Rated & Military Grade Shock-Resistance*",
    "price": "14,999",
    "image": "https://m.media-amazon.com/images/I/61vww2LWl9L._AC_UY218_.jpg"
  },
  {
    "title": "Zeno 100 (3+5GB RAM, 64GB ROM) | 5000mAh Battery with Type-C | 90Hz Display | Side Fingerprint | Military Grade Protection | Octa-Core Processor | Titanium Gold",
    "price": "7,799",
    "image": "https://m.media-amazon.com/images/I/619p86eEMmL._AC_UY218_.jpg"
  },
  {
    "title": "Zeno100 (3+5GB RAM, 64GB ROM) | 5000mAh Battery with Type-C | 90Hz Display | Side Fingerprint | Military Grade Protection | Octa-Core Processor | Pure Black",
    "price": "7,799",
    "image": "https://m.media-amazon.com/images/I/61B6BIQ9JtL._AC_UL320_.jpg"
  },
  {
    "title": "Zeno100 (3+5GB RAM, 64GB ROM) | 5000mAh Battery with Type-C | 90Hz Display | Side Fingerprint | Military Grade Protection | Octa-Core Processor | Pure Black",
    "price": "7,799",
    "image": "https://m.media-amazon.com/images/I/61B6BIQ9JtL._AC_UL320_.jpg"
  },
  {
    "title": "REDMI Note 15 5G (Glacier Blue, 8GB RAM 128GB Storage) | 108MP OIS Camera | Snapdragon 6 Gen 3 | 17.2cm Tough Curved AMOLED Screen | Segment's Slimmest Phone | 5520mAh Si/C Battery | 45W Fast Charging",
    "price": "24,999",
    "image": "https://m.media-amazon.com/images/I/81SxS-bDvVL._AC_UL320_.jpg"
  },
  {
    "title": "REDMI Note 15 Pro+ 5G (Coffee Mocha, 12GB + 256GB) | 200MasterPixel OIS Camera | Snapdragon 7s Gen 4 | CrystalRes AMOLED | IP69/69K | 6500mAh Si/C Battery | 100W HyperCharge",
    "price": "39,999",
    "image": "https://m.media-amazon.com/images/I/81pHku2Z4KL._AC_UL320_.jpg"
  },
  {
    "title": "Wayona Type C to Type C Fast Charging Cable 65W Braided USB C to C for iPhone 17/17 Air/17 Pro/17 Pro Max,iPhone 16, iPhone15 Series,Samsung Galaxy S25,S24,Flip, Fold,Macbook,OnePlus",
    "price": "296\n.",
    "image": "https://m.media-amazon.com/images/I/61K3e5X2vDL._AC_UL640_QL65_.jpg"
  },
  {
    "title": "Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger",
    "price": "9,999",
    "image": "https://m.media-amazon.com/images/I/610lbucItmL._AC_UY218_.jpg"
  },
  {
    "title": "Samsung Galaxy M06 5G Mobile (Sage Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6300 | AnTuTu 623K+ | 12 5G Bands | 25W Fast Charging | 4 Gen OS Upgrades | 50MP Camera | Without Charger",
    "price": "12,499",
    "image": "https://m.media-amazon.com/images/I/71evPv-TvmL._AC_UY218_.jpg"
  },
  {
    "title": "POCO C71, Cool Blue (4GB, 64GB)",
    "price": "8,985",
    "image": "https://m.media-amazon.com/images/I/51HxVAuLvtL._AC_UY218_.jpg"
  },
  {
    "title": "Samsung Galaxy A07 5G (Light Green, 4GB RAM, 128GB Storage) | 6.7 inch HD+ 120Hz Display | MediaTek Dimensity 6300 | 50MP + 2MP Rear Camera | 6000 mAh Battery",
    "price": "16,490",
    "image": "https://m.media-amazon.com/images/I/71Xm-oCA8NL._AC_UY218_.jpg"
  },
  {
    "title": "Samsung Galaxy M56 5G Mobile (Black, 8GB RAM, 256GB Storage)| Segment's Slimmest | Gorilla Glass Victus+| 10 Bit HDR Video| 50MP Camera| AI | Vapour Cooling Chamber| Lag-Free Gaming| Without Charger",
    "price": "26,499",
    "image": "https://m.media-amazon.com/images/I/71Acpnvfu2L._AC_UY218_.jpg"
  },
  {
    "title": "REDMI A7 4G (Black, 3 GB RAM, 64GB Storage) | Large 17.48cm (6.88) Smooth 120Hz Display | 5300mAh 2-Day Battery | Royale Design | Charger in the Box",
    "price": "10,499",
    "image": "https://m.media-amazon.com/images/I/71Trxekf8pL._AC_UY218_.jpg"
  },
  {
    "title": "REDMI A7 Pro 4G (Sunset Orange, 4GB RAM, 64GB Storage) | Segment's Slimmest Smartphone | Segment's Largest 6300mAh Battery| Segment's Largest 17.53cm and Smoothest 120Hz Display",
    "price": "11,499",
    "image": "https://m.media-amazon.com/images/I/81965yGlhCL._AC_UY218_.jpg"
  },
  {
    "title": "Redmi A5 Jaisalmer Gold (3GB RAM 64GB Storage) | Royale Design | Segment's Largest 17.47cm(6.88) and Smoothest 120Hz Display | 5200mAh Large Battery | Expandable Storage up to 2TB",
    "price": "8,999",
    "image": "https://m.media-amazon.com/images/I/51mcySOjwFL._AC_UY218_.jpg"
  },
  {
    "title": "iQOO Z11x 5G (Prismatic Green, 6GB RAM, 128 GB Storage) | Dimensity 7400-Turbo Processor | 7200 mAh Battery Smartphone | Powered by OriginOS 6",
    "price": "22,999",
    "image": "https://m.media-amazon.com/images/I/61HBOs7MdQL._AC_UY218_.jpg"
  },
  {
    "title": "Samsung Galaxy M17e 5G Mobile (Vibe Violet, 6GB RAM, 128GB Storage) | Smoothest 120 Hz Refresh Rate| Monster 6000 mAh Battery | IP54 | 6 Gen OS Upgrades | AI | Gemini Live | Without Charger",
    "price": "15,499",
    "image": "https://m.media-amazon.com/images/I/717m3kkQM1L._AC_UY218_.jpg"
  },
  {
    "title": "POP X (Chilly Green, 4GB+64GB) | 120Hz 6.74\" Smooth Display| IP64 Protection & Drop Resistant | No Network Communication* | AI Active Noise Cancellation | AI Song Identification |AI Flash Snap|5000mAh",
    "price": "8,999",
    "image": "https://m.media-amazon.com/images/I/51+Rqm1-97L._AC_UY218_.jpg"
  },
  {
    "title": "REDMI A7 Pro 5G (Black, 4GB RAM,128GB Storage) | Segment's Fastest Processor | Segment's Largest Battery | Segment's Largest & Smoothest 6.9in 120Hz Display",
    "price": "13,499",
    "image": "https://m.media-amazon.com/images/I/71YpB3zpkpL._AC_UY218_.jpg"
  },
  {
    "title": "SAMSUNG Galaxy F07 (Green, 64 GB) (4 GB RAM)",
    "price": "9,890",
    "image": "https://m.media-amazon.com/images/I/317CVL0zICL._AC_UY218_.jpg"
  },
  {
    "title": "realme NARZO 90x 5G (Maroon Red,4GB+128GB) | 7000mAh + 60W Biggest Battery & Fastest Charging in The Segment* | 144Hz Bright Display | Sony 50MP AI Rear Camera | AI Assist | 400% Ultra Boom Speaker",
    "price": "14,999",
    "image": "https://m.media-amazon.com/images/I/81u0omBK6VL._AC_UY218_.jpg"
  },
  {
    "title": "Samsung Galaxy M17e 5G Mobile (Blitz Blue, 4GB RAM, 128GB Storage) | Smoothest 120 Hz Refresh Rate| Monster 6000 mAh Battery | IP54 | 6 Gen OS Upgrades | AI | Gemini Live | Without Charger",
    "price": "13,999",
    "image": "https://m.media-amazon.com/images/I/711NP4juOiL._AC_UY218_.jpg"
  },
  {
    "title": "Apple iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Cosmic Orange",
    "price": "1,34,900",
    "image": "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY218_.jpg"
  },
  {
    "title": "Apple iPhone Air 256 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Space Black",
    "price": "1,01,190",
    "image": "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY218_.jpg"
  },
  {
    "title": "Hollyland Wireless Magnetic Mini Microphone: Lark A1 Mini Duo Wireless Mic for iPhone15/16/iPad/Android Smartphone with 3-Lv Noise Cancel, 200m Transmission for YouTube Podcast Vlog Content Creation",
    "price": "4,098",
    "image": "https://m.media-amazon.com/images/I/612ETE0GIHL._AC_UL640_QL65_.jpg"
  }
];

const cameraDataRaw = [
  {
    "title": "IZI One Lite 5K Action Camera 4K 60FPS 50MP Ultra HD Dual Screen EIS Stabilization 170° Wide Angle 30M Waterproof 2 Batteries 180 Min 18+ Accessories 256GB Support for Sports Bike Diving Vlog Travel",
    "price": "6,849",
    "image": "https://m.media-amazon.com/images/I/71pHKZ+trZL._AC_UY218_.jpg"
  },
  {
    "title": "CP PLUS 4MP Quad HD Smart Wi-Fi CCTV Camera for Home | 360° Pan & Tilt | CTC Cyber Secure Tech | Supports LAN | View & Talk | Smart Detection Suite | Night Vision | Cloud Storage | OK Google | CP-E41Q",
    "price": "2,699",
    "image": "https://m.media-amazon.com/images/I/612VETOKKQL._AC_UY218_.jpg"
  },
  {
    "title": "WiFi Spy Camera 360° Security Camera for Home Outdoor High HD Spy Magnet Mini Spy WiFi Magnetic Live Stream Night Vision IP Wireless 1080P Audio Video Hidden CCTV Magnet (1) (Magnet Camera)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/71iRfTGentL._AC_UY218_.jpg"
  },
  {
    "title": "CADDLE & TOES Kids Camera for Girls Boys,Kids Selfie Camera 13MP 1080P HD Digital Video Camera for Toddler,Christmas Birthday Gifts for 4+ to15 Years Old Children (Pink)",
    "price": "549",
    "image": "https://m.media-amazon.com/images/I/71jBKU9twqL._AC_UY218_.jpg"
  },
  {
    "title": "Digital Cameras for Photography - 5K 75MP Vlogging Camera for YouTube WiFi - UHD Autofocus Vlog Camera 3\" 180° Flip Screen with 18X Zoom - Travel YouTube with 32GB SD Card, 2 Batteries (CAM25)",
    "price": "7,999",
    "image": "https://m.media-amazon.com/images/I/71D+YWeR5GL._AC_UY218_.jpg"
  },
  {
    "title": "Toy Imagine Kids Digital Camera 3.0MP &1080p Video Photos 2-Inch Screen, USB Rechargeable & Portable Fun Mini Toy Camera for Boys & Girls Age 3–12 Educational Birthday Gift Supports 32GB SD Card(Pink)",
    "price": "598",
    "image": "https://m.media-amazon.com/images/I/51qNm+iP4aL._AC_UY218_.jpg"
  },
  {
    "title": "Digital Camera, 4K Ultra HD Cameras for Photography, Digital Point and Shoot Camera with 56Mp Autofocus 20X Zoom Anti Shake, Video Camera with 32GB SD Card for Kids, Teens, Beginners (CAM24)",
    "price": "4,999",
    "image": "https://m.media-amazon.com/images/I/61YMAaVsb8L._AC_UY218_.jpg"
  },
  {
    "title": "CP PLUS 3MP Smart Wi-Fi CCTV Camera | 360° Pan & Tilt | CTC Cyber Secure Tech | View & Talk | Smart Detection Suite | Night Vision | Cloud Storage | Supports OK Google | CP-E35Q",
    "price": "2,199",
    "image": "https://m.media-amazon.com/images/I/41hLbBV4EsL._AC_UY218_.jpg"
  },
  {
    "title": "Qubo Smart 360° 3MP [2K] CCTV Camera | Wi-Fi Indoor Home Security Cam | STQC Certified | AI Person Detection | Automatic Alarm | App Alerts | NightPulse Vision | SD & Cloud Storage | Made in India",
    "price": "2,190",
    "image": "https://m.media-amazon.com/images/I/61dwW44MO2L._AC_UY218_.jpg"
  },
  {
    "title": "Kids Digital Camera Toy – 3.0MP 1080P HD Video Camera with Games 2-Inch Screen with No Printer – Easy USB Rechargeable, Fun, Educational & Birthday Gift for Boys & Girls Age 3–12",
    "price": "499",
    "image": "https://m.media-amazon.com/images/I/51U4tVKZgbL._AC_UY218_.jpg"
  },
  {
    "title": "Nylon For Fujifilm Instax Mini 11 & Mini 12 Instant Camera Carry Case (Green)",
    "price": "999",
    "image": "https://m.media-amazon.com/images/I/61-utAVkqlL._AC_UY218_.jpg"
  },
  {
    "title": "CP PLUS 3MP Smart Wi-Fi CCTV Camera for Home with 360° Pan & Tilt | View & Talk | Smart Detection Suite | Night Vision 30 Mtr | Cloud Recording | CTC Cyber Secure Tech | EZ-P34Q",
    "price": "2,099",
    "image": "https://m.media-amazon.com/images/I/51nadwTWTLL._AC_UY218_.jpg"
  },
  {
    "title": "KTG 4K 30Fps Action Ultra Hd Camera with Accessories Kit WiFi 16 MP170 Degree Wide Angle Lens 98FT Underwater Waterproof ditgital Camera YouTube Vlogging Bike Helmet vlogging Easy to use Safe (Black)",
    "price": "1,498",
    "image": "https://m.media-amazon.com/images/I/61126QGucML._AC_UY218_.jpg"
  },
  {
    "title": "CP PLUS 2MP Full HD Wi-Fi CCTV Camera for Home with Motion Tracking | Smart Detection Suite | Night Vision | Cloud Recording | View & Talk | Supports OK Google | CTC Cyber Secure | CP-E25Q",
    "price": "1,899",
    "image": "https://m.media-amazon.com/images/I/41Uy-UnZYIL._AC_UY218_.jpg"
  },
  {
    "title": "Saneen Digital Camera, 4K Cameras for Photography and Video, 64MP WiFi Touchscreen, Vlogging Camera for YouTube with Flash, 32GB Card, Sunshade, 3000mAh Battery, Front Cameras",
    "price": "13,999",
    "image": "https://m.media-amazon.com/images/I/711X0g9zd5L._AC_UY218_.jpg"
  },
  {
    "title": "Sony Alpha ZV-E10K (Previously ZV-E10L) with Upgraded SELP1650 (Ver 2) Power Zoom Lens | 24.2 MP Interchangeable-Lens Mirrorless vlog Camera, Made for Creators |APS-C Sensor 4K Movie Recording-Black",
    "price": "61,490",
    "image": "https://m.media-amazon.com/images/I/712ywHZbdNL._AC_UY218_.jpg"
  },
  {
    "title": "CP PLUS 2.4MP Full HD IP Indoor Wired Dome Camera CP-URC-DC24PL3 Compatible with DVR only | 30 Meters IR Black & White Night Vision | 3.6mm Lens | Motion Detection, White",
    "price": "779",
    "image": "https://m.media-amazon.com/images/I/51-lj1ODgAL._AC_UY218_.jpg"
  },
  {
    "title": "Storio Kids Digital Camera Toy 3.0MP 1080P HD Video Camera with 2-Inch Screen | USB Rechargeable Mini Camera | Educational Toy & Birthday Gift for Boys & Girls Age 3–12 | Supports 32GB SD Card - Blue",
    "price": "503",
    "image": "https://m.media-amazon.com/images/I/61MaXYRGQeL._AC_UY218_.jpg"
  },
  {
    "title": "Canon EOS R100 24.1 MP Mirrorless Camera (Black) with RF-S18-45mm f/4.5-6.3 is STM Optical Zoom Lens | 4k Video",
    "price": "44,990",
    "image": "https://m.media-amazon.com/images/I/81Tib6mb8eL._AC_UY218_.jpg"
  },
  {
    "title": "Maizic Smarthome Dual Lens Mini Fox | 5+5MP WiFi CCTV Camera with PTZ & Fixed View | AI Motion Detection, Color Night Vision, Two-Way Audio, 360� Coverage, App Remote Access",
    "price": "1,589",
    "image": "https://m.media-amazon.com/images/I/41cG2RMZHuL._AC_UY218_.jpg"
  },
  {
    "title": "Qubo Smart Cam 360° by Hero Group [2026 Edition]| 3MP Ultra 2K Display | STQC Certified | Color Night Vision | 360° Panoramic Monitoring | 2-Way Talk | AI Person Detection | Cloud & SD Card Support",
    "price": "2,490",
    "image": "https://m.media-amazon.com/images/I/61BI1MJ03iL._AC_UY218_.jpg"
  },
  {
    "title": "smars Pocket Body Camera | 1080P Full HD Rotatable Lens | Night Vision | Audio & Video Chest Wearable Recorder",
    "price": "3,978",
    "image": "https://m.media-amazon.com/images/I/51h4jJjgyeL._AC_UY218_.jpg"
  },
  {
    "title": "Fujifilm Instax Wide Evo Premium Edition Combo Box with 20 Shots Wide Films",
    "price": "35,490",
    "image": "https://m.media-amazon.com/images/I/61sLqF1n3aL._AC_UL640_QL65_.jpg"
  }
];

const soundDataRaw = [
  {
    "title": "E GATE C207 |18Watt Bluetooth Soundbar, 52mm Driver, 2.0 Channel, Ambient RGB Light, Upto 18 Hrs* Backup from 2000 mAH Battery, Hands Free Call, TWS, AUX, USB, mSD, FM, BT 5.4v - eGate Sound bar",
    "price": "690",
    "image": "https://m.media-amazon.com/images/I/715i92DKGNL._AC_UY218_.jpg"
  },
  {
    "title": "LG S65TR 600W 5.1 Channel Dolby Digital, Wireless Subwoofer & Rear Speaker with Built-in Receiver, AI Sound Pro Home Theater Soundbar with HDMI, USB & Bluetooth Connectivity (Black)",
    "price": "21,990",
    "image": "https://m.media-amazon.com/images/I/41BVGok4L4L._AC_UY218_.jpg"
  },
  {
    "title": "ZEBRONICS Sound Feast 90 10W Output, Portable Wireless Speaker with Bluetooth v5.0, TWS, 6.3mm with Wired Mic, USB, mSD, AUX, Mobile Holder and RGB Lights",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/718mnMXpj5L._AC_UY218_.jpg"
  },
  {
    "title": "ZEBRONICS Astra 35, Portable Bluetooth Speaker, 16 Watts, Upto 8h Backup, Dual Drivers + Dual Passive Radiators, Call Function, Bluetooth v5.3 | USB | mSD| AUX, TWS, RGB LED",
    "price": "739",
    "image": "https://m.media-amazon.com/images/I/71Gn7eWoLUL._AC_UY218_.jpg"
  },
  {
    "title": "EDNITA jbl Ultra Mini Wireless Bluetooth Speaker with Heavy Metal Electroplating Round Speaker | Wireless Power Button Controlled, Long Lasting Battery & Quick Charge Pack of 1 (Multicolor)",
    "price": "288",
    "image": "https://m.media-amazon.com/images/I/418SigfmUnL._AC_UY218_.jpg"
  },
  {
    "title": "pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speaker, Wireless Karaoke Mic, 8Hrs Playtime, Vivid RGB Lights, Voice Effects, Multi-Play Modes BT5.1/TF Card & Type-C Charging (Light Pink)",
    "price": "899",
    "image": "https://m.media-amazon.com/images/I/611z3Ep-gnL._AC_UL320_.jpg"
  },
  {
    "title": "pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speaker, Wireless Karaoke Mic, 8Hrs Playtime, Vivid RGB Lights, Voice Effects, Multi-Play Modes BT5.1/TF Card & Type-C Charging (Light Pink)",
    "price": "899",
    "image": "https://m.media-amazon.com/images/I/611z3Ep-gnL._AC_UL320_.jpg"
  },
  {
    "title": "Lenyes S873 Bluetooth Karaoke Party Speaker, 400W Peak Power, 2 Wireless UHF Mics, 30000mAh Battery, 60W Fast Charging, IPX6 Waterproof, TWS, RGB Lights, Guitar Input, Lenyes Audio App Control (Black)",
    "price": "25,999",
    "image": "https://m.media-amazon.com/images/I/51yXiBa03VL._AC_UL320_.jpg"
  },
  {
    "title": "Boat PartyPal 600 Party Speaker, 220W Signature Sound, Dynamic Pixels, Animated Text Display, App Support, UHF Wireless Microphone, Colorful LEDs,7hrs Battery & Guitar Input (Premium Black)",
    "price": "15,499",
    "image": "https://m.media-amazon.com/images/I/71+1C9GyQgL._AC_UL320_.jpg"
  },
  {
    "title": "Boat Aavante Bar 490 10W Signature Sound, Dual Full-Range Drivers,7 HRS Battery, Built-in Mic,2.0 CH, TWS Feature,Multi Connect, Bluetooth Sound Bar, Soundbar Speaker (Classic Black)",
    "price": "899",
    "image": "https://m.media-amazon.com/images/I/71-I9Bk8dgL._AC_UY218_.jpg"
  },
  {
    "title": "FRONTECH 2.0 Multimedia Speakers with USB Power, AUX Connectivity & Volume Control (SPK-0002BLK)",
    "price": "299",
    "image": "https://m.media-amazon.com/images/I/71XrqOOr0tL._AC_UY218_.jpg"
  },
  {
    "title": "Zebronics Zeb-Warrior 2.0 Multimedia Speaker With Aux Connectivity,USB Powered And Volume Control",
    "price": "699",
    "image": "https://m.media-amazon.com/images/I/71kIRMs8nQL._AC_UY218_.jpg"
  },
  {
    "title": "JBL Compatible Ultra Mini Wireless Bluetooth Speaker with Heavy Metal Electroplating | Round Mini Speaker, Power Button Controlled, Long Battery Backup & Quick Charge",
    "price": "284",
    "image": "https://m.media-amazon.com/images/I/41tmsJRz5hL._AC_UY218_.jpg"
  },
  {
    "title": "Portronics SoundDrum 1 12W TWS Portable Bluetooth Speaker with Powerful Bass, Bluetooth 5.3V, 360° Surround Sound, USB Drive in, Type C Fast Charging(Blue)",
    "price": "999",
    "image": "https://m.media-amazon.com/images/I/61ygYGBZUBL._AC_UY218_.jpg"
  },
  {
    "title": "pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speaker with Wireless Karaoke Mic, 8Hrs Playtime, Vivid RGB Lights, Voice Effects, Multi-Play Modes BT5.1/TF Card & Type-C Charging Port (Blue)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/61gKj643idL._AC_UY218_.jpg"
  },
  {
    "title": "TRIGGR Roar 12 Portable BT, V5.3, FM Mode, Rubber Finish, 8 Hr Playtime 12 W Bluetooth Speaker (Rustic Dust, Mono Channel)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/812OeWMe3pL._AC_UY218_.jpg"
  },
  {
    "title": "Boat Aavante 2.0 150, 2.0 CH, 16W Signature Sound, RGB LEDs, Dual Full-Range Drivers, Upto 5H Battery, TWS, Multi Ports, Bluetooth Sound bar, Home Theatre Soundbar Speaker (Premium Black)",
    "price": "1,399",
    "image": "https://m.media-amazon.com/images/I/81t+HbL-ESL._AC_UY218_.jpg"
  },
  {
    "title": "Dubstep Pop 1200 with Upto 16 Hrs Playtime, 52mm Dynamic Driver, TWS Pairing with 12W Output Bluetooth Wireless Speaker (Black)",
    "price": "549",
    "image": "https://m.media-amazon.com/images/I/71YG3ZhUwxL._AC_UY218_.jpg"
  },
  {
    "title": "Zebronics ZEB-COUNTY 3W Wireless Bluetooth Portable Speaker With Supporting Carry Handle, USB, SD Card, AUX, FM & Call Function. (Black)",
    "price": "549",
    "image": "https://m.media-amazon.com/images/I/71wAXhzCmnS._AC_UY218_.jpg"
  },
  {
    "title": "CERLINK jbl Small Ultra Bluetooth Speaker 4D with Loud Stereo Sound and Long Playtime Mini Speaker Easy to Carry Metal Electroplating Round Body Pack of-1-Random Multicolor",
    "price": "319",
    "image": "https://m.media-amazon.com/images/I/71P1lmKM+IL._AC_UY218_.jpg"
  },
  {
    "title": "ZEBRONICS Igloo 1, 2.0 USB Computer Speakers, 8 Watts, Multicolor LED, USB Powered, AUX, Volume Control Pod for PC, Laptops, Desktop, Black",
    "price": "495",
    "image": "https://m.media-amazon.com/images/I/71gqSJ1uGIL._AC_UY218_.jpg"
  },
  {
    "title": "pTron Newly Launched Fusion Tunes 10W Mini Bluetooth Speaker with Wireless Karaoke Mic, 8Hrs Playtime, Vivid RGB Lights, Voice Effects, Multi-Play Modes BT5.1/TF Card & Type-C Charging Port (Black)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/61Lgfcc+o-L._AC_UY218_.jpg"
  },
  {
    "title": "Boat Stone 110 Bluetooth Speaker with 3W Signature Sound, Up to 15Hrs Playback, Built-in Mic, TWS Feature, Bluetooth v5.4, AUX Port, Voice Assistant & IPX4 (Raging Black)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/81aQh6koT9L._AC_UY218_.jpg"
  },
  {
    "title": "E GATE C207 |18Watt Bluetooth Soundbar, 52mm Driver, 2.0 Channel, Ambient RGB Light, Upto 18 Hrs* Backup from 2000 mAH Battery, Hands Free Call, TWS, AUX, USB, mSD, FM, BT 5.4v - eGate Sound bar",
    "price": "690",
    "image": "https://m.media-amazon.com/images/I/715i92DKGNL._AC_UY218_.jpg"
  },
  {
    "title": "pTron Fusion ONE 48W Bluetooth Party Speaker w/Pristine Stereo Sound, Dual 4 inch Neo Drivers, Rhythmic RGB Lights, 6Hrs Playtime, BT5.3/Aux/TF Card/USB Playback Modes, Type-C Charging (Jet Black)",
    "price": "2,099",
    "image": "https://m.media-amazon.com/images/I/71Fln-PGf9L._AC_UY218_.jpg"
  },
  {
    "title": "E GATE C210 | 20W Bluetooth Speaker Soundbar, Dual Drivers + Dual Passive Radiator for Extra bass, RGB Light, Upto 15 Hrs Backup from 2000mah Battery, Call Function, TWS, Aux, USB, FM",
    "price": "750",
    "image": "https://m.media-amazon.com/images/I/71ZH131PJ1L._AC_UY218_.jpg"
  },
  {
    "title": "TRIGGR Roar 12 Portable BT, V5.3, FM Mode, Rubber Finish, 8 Hr Playtime 12 W Bluetooth Speaker (Rustic Dust, Mono Channel)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/812OeWMe3pL._AC_UL320_.jpg"
  },
  {
    "title": "TRIGGR Roar 12 Portable BT, V5.3, FM Mode, Rubber Finish, 8 Hr Playtime 12 W Bluetooth Speaker (Rustic Dust, Mono Channel)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/812OeWMe3pL._AC_UL320_.jpg"
  },
  {
    "title": "Lenyes S873 Bluetooth Karaoke Party Speaker, 400W Peak Power, 2 Wireless UHF Mics, 30000mAh Battery, 60W Fast Charging, IPX6 Waterproof, TWS, RGB Lights, Guitar Input, Lenyes Audio App Control (Black)",
    "price": "25,999",
    "image": "https://m.media-amazon.com/images/I/51yXiBa03VL._AC_UL320_.jpg"
  },
  {
    "title": "PHILIPS TAS1400GY Wireless Bluetooth Speaker with Deep Bass, Passive Radiator, 12W Sound Output, 1200mAh Rechargable Battery, RGB Light Modes, 10H Playtime, Supports TF/USB (Willow Bough)",
    "price": "1,199",
    "image": "https://m.media-amazon.com/images/I/71Kw13SwLBL._AC_UL320_.jpg"
  }
];

const gamingDataRaw = [
  {
    "title": "BenQ MOBIUZ EX271 27” FHD 180Hz Gaming Monitor, 1ms GtG, AMD FreeSync, DP 1.2, HDMI 2.0, USB Hub, 95% P3, Game Optimized Color, 2.5Wx2 Speakers, VESA Display HDR400 (White)",
    "price": "15,735",
    "image": "https://m.media-amazon.com/images/I/71aGcCappAL._AC_UL320_.jpg"
  },
  {
    "title": "daWg HeadBug G60 Lightweight Wireless Gaming Headphones, 20ms Ultra Low Latency (2.4GHz), Bluetooth v5.4, 40mm Neodymium Drivers, Crystal Clear Mic, Soft Leatherlite Headband, for PS5, PS4, PC, Mobile",
    "price": "3,299",
    "image": "https://m.media-amazon.com/images/I/71wiTgpfJRL._AC_UL320_.jpg"
  },
  {
    "title": "HyperX Cloud III Over Ear Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53Mm Drivers, DTS, Memory Foam, Durable Frame, Ultra-Clear 10Mm Mic, USB-C, USB-A, 3.5Mm Black (727A8AA)",
    "price": "7,299",
    "image": "https://m.media-amazon.com/images/I/71AMEEP3HLL._AC_UL320_.jpg"
  },
  {
    "title": "HyperX Cloud Jet – Dual Wireless Gaming Headset, 2.4GHz dongle, Bluetooth 5.2, PC, PS5, Nintendo Switch, Steam Deck, Mobile, USB-A, Black",
    "price": "4,845",
    "image": "https://m.media-amazon.com/images/I/61gQyJac5sL._AC_UL320_.jpg"
  },
  {
    "title": "AirConsole - Gaming Console for TV",
    "price": "0",
    "image": "https://m.media-amazon.com/images/I/71fX+1vwXjL._AC_UL320_.png"
  },
  {
    "title": "RC Car Complete Racing Simulator: Driving Games (Thrill Ride)",
    "price": "0",
    "image": "https://m.media-amazon.com/images/I/81Ly129EsYL._AC_UL320_.png"
  },
  {
    "title": "Xbox",
    "price": "0",
    "image": "https://m.media-amazon.com/images/I/41amEfnVeyL._AC_UL320_.png"
  },
  {
    "title": "EvoFox Banshee 2 Wireless Gaming Mouse with Display Tri-Mode (2X BT,2.4G&Wired) | PixArt Sensor, 1000Hz Polling Rate, 12,000 DPI, 6 Programmable Buttons, Software Support",
    "price": "1,899",
    "image": "https://m.media-amazon.com/images/I/61MeFs1lcQL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Banshee 2 Wireless Gaming Mouse with Display Tri-Mode (2X BT,2.4G&Wired) | PixArt Sensor, 1000Hz Polling Rate, 12,000 DPI, 6 Programmable Buttons, Software Support",
    "price": "1,899",
    "image": "https://m.media-amazon.com/images/I/61MeFs1lcQL._AC_UL320_.jpg"
  },
  {
    "title": "HyperX Pulsefire Haste 2 Smartchoice Dual Wireless RGB Gaming Mouse, Upto 26K DPI, HyperX 26K Sensor, 61g Ultra Lightweight, 100 Hr Battery Life, 1K Hz Polling Rate, 24 Months Warranty-White [6N0A9AA]",
    "price": "3,590",
    "image": "https://m.media-amazon.com/images/I/519vd4Seq6L._AC_UL320_.jpg"
  },
  {
    "title": "Madlions MAD 60 HE Flagship V2 Wired Mechanical Gaming Keyboard | Supports Polling Rates Upto 8000Hz | Compatible with Windows & Mac Os - 1 Year Warranty (White - Magneto Gaming Swithces)",
    "price": "5,199",
    "image": "https://m.media-amazon.com/images/I/41qqf1-lWIL._AC_UL320_.jpg"
  },
  {
    "title": "TOYTONIC Handheld Gaming Console for Kids & Adults | 520 Classic Built-in Games | Retro Video Game Player | Portable, Rechargeable, TV Output | Toy & Gift for Boys Girls Ages 6-14 | Mini Game Box",
    "price": "779",
    "image": "https://m.media-amazon.com/images/I/518hbhY2uwL._AC_UL320_.jpg"
  },
  {
    "title": "Storio Rechargeable Pocket Video Game for Kids 400 in 1 Retro Game Box Console Handheld Game Box with TV Output - Multicolor",
    "price": "599",
    "image": "https://m.media-amazon.com/images/I/61QZbqAUvKL._AC_UL320_.jpg"
  },
  {
    "title": "Asphalt 8 Car Racing Game - Drive & Drift",
    "price": "0",
    "image": "https://m.media-amazon.com/images/I/71MJ6jg1PlL._AC_UL320_.png"
  },
  {
    "title": "TOYTONIC Retro Handheld Gaming Console for Kids & Adults – 666-In-1 Built-in Classic Video Games – Rechargeable Game Console for Boys 7-14 Years – TV Output – Portable Toy Gift",
    "price": "1,099",
    "image": "https://m.media-amazon.com/images/I/61-n4lM4AJL._AC_UL320_.jpg"
  },
  {
    "title": "SpinBot BattleBudz C30 Wired in Ear Type C Gaming Earphone with Detachable Boom Mic |12mm Drivers | Dedicated Mic Mute Switch",
    "price": "748",
    "image": "https://m.media-amazon.com/images/I/51Smy4MQhsL._AC_UL320_.jpg"
  },
  {
    "title": "STRIFF Mobile Cooling Pad |Mobile Cooler | Gaming Fan | for Instant Cooling Advanced Refrigeration Chip & LED Temperature Display Compatible for Android and iPhones - (Black)",
    "price": "578",
    "image": "https://m.media-amazon.com/images/I/61Go0xLXaDL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Fireblade TKL Semi-Mechanical Gaming Keyboard with Rainbow Backlit& Breathing Effect, Floating Keycaps, 19 Anti-Ghosting & 12 Multimedia Keys, Windows Lock Key, Braided Cable (Black)",
    "price": "899",
    "image": "https://m.media-amazon.com/images/I/617q9MVCT9L._AC_UL320_.jpg"
  },
  {
    "title": "Smartcam® Retro Handheld Gaming Console for Kids & Adults | 520+ Built-in Classic Video Games | Portable Rechargeable Mini Game Player | TV Output | Gift for Boys & Girls Ages 6–14",
    "price": "795",
    "image": "https://m.media-amazon.com/images/I/61Gv-wRMX+L._AC_UL320_.jpg"
  },
  {
    "title": "STRIFF World Map Extended Size (800 mm x 300 mm x 2 mm) Gaming Mouse Pad| Desk Mat | Stitched Edges| Non-Slip Rubber Base|Computer Laptop|Keyboard Mouse Pad for Office & Home (World Map)",
    "price": "229",
    "image": "https://m.media-amazon.com/images/I/61s6d6BxW4L._AC_UL320_.jpg"
  },
  {
    "title": "TOYTONIC Portable Retro Handheld Game Console for Kids | Classic Gaming with Preloaded 620 Games | 3.5\" Color Screen, Built-in Power Cell, TV Output | Video Games Player 𝐋𝐢𝐦𝐢𝐭𝐞𝐝 𝐓𝐨𝐝𝐚𝐲",
    "price": "999",
    "image": "https://m.media-amazon.com/images/I/61dF-1B1-lL._AC_UL320_.jpg"
  },
  {
    "title": "Amisha Gift Gallery 500 in 1 Handheld Game Console for Kids, Retro Video Game Player with Rechargeable Battery, TV Connect Portable Pocket Gaming Device with Controller, Classic Arcade Games for Boys",
    "price": "785",
    "image": "https://m.media-amazon.com/images/I/61LeN75i3HL._AC_UL320_.jpg"
  },
  {
    "title": "Inefable® (10 Pcs with Black Pouch) Pubg Anti-Slip Thumb Sleeve, Slip-Proof Sweat-Proof Professional Touch Screen Thumbs Finger Sleeve for Pubg Mobile Phone Game Gaming Gloves Multi Colour",
    "price": "149",
    "image": "https://m.media-amazon.com/images/I/61mxMXM+sWL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox One X Wireless Gaming Controller for PC, Switch, Android, iOS & macOS, Tri-Mode, Hall Effect Joysticks & Triggers, On-the-fly 6 Axis Gyro, 1000Hz Polling, Macro buttons, 800mAh Battery (Black)",
    "price": "2,799",
    "image": "https://m.media-amazon.com/images/I/61N0rXSGCTL._AC_UL320_.jpg"
  },
  {
    "title": "Honeywell High-Speed USB 3.1 to RJ45 Gigabit Ethernet Adapter, 10/100/1000 MBPS Network LAN Speed, for Laptop, Desktop, Gaming Console, Ultrabook, Chromebook, Plug & Play, 3 Yrs Manufacturer Warranty",
    "price": "1,149",
    "image": "https://m.media-amazon.com/images/I/51A-FtNRgTL._AC_UL320_.jpg"
  },
  {
    "title": "Techie DisplayPort 1.8m DP to DP Copper Cable Supports 8K@60Hz and 4K@120Hz | 32.4Gbps High Speed Copper Cable with Gold Plated Connectors | Compatible with Laptop, PC, Gaming Monitor & Graphics Card",
    "price": "499",
    "image": "https://m.media-amazon.com/images/I/71sU2YX0yWL._AC_UL320_.jpg"
  },
  {
    "title": "HyperX DuoCast - RGB USB Condenser Microphone for PC, PS5, PS4, Mac, Gaming, Streaming, Podcasts, Twitch, YouTube, Discord (4P5E2AA)",
    "price": "5,299",
    "image": "https://m.media-amazon.com/images/I/61UK73gPQsL._AC_UL320_.jpg"
  },
  {
    "title": "Nextech 20M HDMI AOC Cable – 4K@60Hz Active Optical Fibre, Armoured Heavy-Duty Build, EMI/RFI Shielded, Long-Distance High-Speed HDMI Cable for TV, Projector, Gaming & AV Installations",
    "price": "9,995",
    "image": "https://m.media-amazon.com/images/I/61RC7pjSdfL._AC_UL320_.jpg"
  },
  {
    "title": "Zebronics Jet PRO Premium Wired Gaming On Ear Headphone with LED for Headband + earcups, 40mm Neodymium Drivers, 2 Meter Braided Cable, with mic, Suspension Design, 3.5mm + USB Connector (Black, Blue)",
    "price": "888",
    "image": "https://m.media-amazon.com/images/I/71VR6c3j2bL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Elite X RGB Wired Gaming Controller for PC with 2 Programmable Macro Back Buttons, Adjustable Dual Vibration Motors,Turbo Mode,Analog Triggers, High Precision joysticks,Low Latency Plug and Play,Translucent Shell Gamepad for pc",
    "price": "1,199",
    "image": "https://m.media-amazon.com/images/I/71ghAT0kkNL._AC_UL320_.jpg"
  },
  {
    "title": "Acer 4 in 1 Wired Gaming Combo, 7 Color LED Backlit Keyboard, RGB Mouse (800/1600/2400/3200 DPI), Premium Gaming Headset (50mm Driver, 120dB) with Mixed Light Effect, Fabric Weave Mousepad (Black)",
    "price": "2,499",
    "image": "https://m.media-amazon.com/images/I/81JilIXX68L._AC_UL320_.jpg"
  },
  {
    "title": "TOYTONIC G5 Handheld Game Console for Kids, Retro Gaming Device with 3.0\" HD Screen, Built-in 500 Classic Games, AV Output, Random Color – Portable Game Player for Boys & Girls, Multicolour",
    "price": "699",
    "image": "https://m.media-amazon.com/images/I/71wKSz1I4zL._AC_UL320_.jpg"
  },
  {
    "title": "OnePlay Gaming",
    "price": "0",
    "image": "https://m.media-amazon.com/images/I/41HVdisP7IL._AC_UL320_.png"
  },
  {
    "title": "EvoFox Katana X2 FS Mechanical Gaming Keyboard | 3‑Pin Replaceable Clicky Blue Switches, Dynamic Backlighting, All Keys Anti‑Ghosting, Volume Knob, Copilot, Xbox Gamebar, Screenshot & More (Black)",
    "price": "1,899",
    "image": "https://m.media-amazon.com/images/I/61S2i2cin6L._AC_UL320_.jpg"
  },
  {
    "title": "Ant Esports GM100 V2 Optical Gaming Mouse,7 Button Wired USB Mouse, 4000 FPS Sensor, 3600 DPI, RGB Lighting,1.5m PVC Cable, Ergonomic Design, for Windows PC, Laptop,Gaming & Office Use- Black & White",
    "price": "399",
    "image": "https://m.media-amazon.com/images/I/715OxxoEkML._AC_UL320_.jpg"
  },
  {
    "title": "Kreo Hive 65 RGB Mechanical Gaming Keyboard | Pre-Lubed Switches, Anti-Ghosting, 5-Pin Hot-Swap | Wired 65% Keyboard with RGB Backlight & Detachable USB-C Cable (Black)",
    "price": "2,599",
    "image": "https://m.media-amazon.com/images/I/510Px9AaMgL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Phantom Air Ultra Lightweight Gaming Mouse | Upto 1000Hz Polling Rate, 7000 FPS, 12800 DPI | Honeycomb RGB Lighting | Fully Programmable with Windows Software & On-Board Memory | Black",
    "price": "599",
    "image": "https://m.media-amazon.com/images/I/61Czf25EF9L._AC_UL320_.jpg"
  },
  {
    "title": "ZEBRONICS PHERO Wired Gaming Mouse with up to 1600 DPI, Rainbow LED Lights, DPI Switch, High Precision, Plug & Play, 4 Buttons",
    "price": "199",
    "image": "https://m.media-amazon.com/images/I/71PfyTreJIL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Blaze Ultra Value 8 Button Programmable Gaming Mouse with 1000Hz Polling Rate | Gaming Grade DPI 200 to 12800 | Ultra-Responsive 7000fps | RGB Lights with Music sync Mode | Windows Software",
    "price": "629",
    "image": "https://m.media-amazon.com/images/I/516kq12OmmL._AC_UL320_.jpg"
  },
  {
    "title": "Zebronics Transformer M Plus Wired Gaming Mouse, Up to 12800 DPI, 6 Buttons with a 6-Level DPI Switch, 8 RGB Modes, 1000Hz Polling Rate, 1.5m Detachable Cable, Gaming Grade Sensor (Grey + Blue)",
    "price": "699",
    "image": "https://m.media-amazon.com/images/I/71ezQFgSl7L._AC_UL320_.jpg"
  },
  {
    "title": "2025 Upgraded New TV Gaming System | Plug & Play Video TV Games 4K Ultra HD with 21,000+ Games Built-in, 23 Emulators & Wireless 2 Controller for Kids (5 Years to 17 Years) (White) (First Edition)",
    "price": "3,299",
    "image": "https://m.media-amazon.com/images/I/71vkdmnaV0L._AC_UL320_.jpg"
  },
  {
    "title": "daWg HeadBug G60 Lightweight Wireless Gaming Headphones, 20ms Ultra Low Latency (2.4GHz), Bluetooth v5.4, 40mm Neodymium Drivers, Crystal Clear Mic, Soft Leatherlite Headband, for PS5, PS4, PC, Mobile",
    "price": "3,299",
    "image": "https://m.media-amazon.com/images/I/71wiTgpfJRL._AC_UL320_.jpg"
  },
  {
    "title": "ASUS TUF A15 (2025), AMD Ryzen 7 7445HS,RTX 3050-4GB,75W TGP,16GB DDR5(Upgradeable Upto 64GB) 512GB SSD,FHD,15.6\",144Hz,RGB Keyboard,Windows 11,Graphite Black,2.3 Kg FA506NCG-HN199W, Gaming Laptop",
    "price": "71,990",
    "image": "https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_UL320_.jpg"
  },
  {
    "title": "Blacknut Cloud Gaming",
    "price": "0",
    "image": "https://m.media-amazon.com/images/I/319Di2BhM9L._AC_UL320_.png"
  },
  {
    "title": "ASUS ROG XBOX Ally (2025), AMD Ryzen Z2 A Processor,16GB RAM, 512GB SSD, 7\"/17.8cm, FHD, Touchscreen,120Hz, 500 nits, Windows 11 Home, White, 670g, RC73YA-NH010W,AMD Radeon Graphics,Gaming Handheld PC",
    "price": "67,990",
    "image": "https://m.media-amazon.com/images/I/61c0Ufa7IdL._AC_UL320_.jpg"
  },
  {
    "title": "Razer BlackShark V2 X Smartchoice Wired Gaming Headset with Mic, 7.1 Surround Sound, 50mm Drivers, Memory Foam Cushions, Multi-Platform (PC/PS/Xbox/Switch/Mobile), 3.5mm Jack_Black",
    "price": "3,999",
    "image": "https://m.media-amazon.com/images/I/51vUMenoNkL._AC_UL320_.jpg"
  },
  {
    "title": "FRONTECH KB-0008P Dragon Fox Rainbow Backlit Gaming Keyboard | 35 Anti-Ghosting & Mechanical Keys | USB Wired Compact Keyboard for PC & Laptop | Windows Compatible | Plug & Play",
    "price": "609",
    "image": "https://m.media-amazon.com/images/I/71OhscS9ltL._AC_UL320_.jpg"
  },
  {
    "title": "Alienware Area-51 Gaming Desktop | Core Ultra 9 285K | 32GB DDR5 | 2TB SSD | Win 11 + Office H&S 2024 | NVIDIA RTX 5080 16GB GDDR7 | 1 Year Alienware Care Service",
    "price": "5,88,500",
    "image": "https://m.media-amazon.com/images/I/61MBTTbb4bL._AC_UL320_.jpg"
  },
  {
    "title": "TYROCX Blue Shark Gaming Trigger with Five Pair Mobile Gaming Sleeves for Mobile Gaming",
    "price": "119",
    "image": "https://m.media-amazon.com/images/I/51bA+5mgE-L._AC_UL320_.jpg"
  },
  {
    "title": "VGRASSP 400 in 1 Mini Video Game Toy for Kids - Portable Retro Handheld Game Console with Rechargeable Battery - AV Output TV Compatible - Color and Design As Per Stock (Modern) (Classic)",
    "price": "549",
    "image": "https://m.media-amazon.com/images/I/81DL0D0UINL._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Starter Series Spectre USB Wired Gaming Mouse with Upto 3600 DPI Gaming Sensor | 6 Buttons Design | Upto 7 Million Clicks | 7 Colours Rainbow Lighting | 1.5m Braided Cable (Black)",
    "price": "349",
    "image": "https://m.media-amazon.com/images/I/51o4FuhgD7L._AC_UL320_.jpg"
  },
  {
    "title": "UNCTRL RAGE Type-C Gaming Controller for Mobile, Android, iPhone(USB-C), PC, Ultra Low Latency, Hall Effect Joysticks/Triggers, Key Mapping, Turbo, RT, Charging, RGB, PSRemotePlay & SteamLink Support",
    "price": "3,999",
    "image": "https://m.media-amazon.com/images/I/51kax+6QNbL._AC_UL320_.jpg"
  },
  {
    "title": "pTron Bassbuds Rogue W/ 40Ms Low-Latency Gaming,Clear Calls,50Hrs Playtime,Pristine Sound,V5.3 Bluetooth in Ear Headphones,Snug-Fit,RGB Lights,Touch Control,Voice Assist,IPX5 Water Resistant(Black)",
    "price": "696",
    "image": "https://m.media-amazon.com/images/I/51DSjZ8at1L._AC_UL320_.jpg"
  },
  {
    "title": "Kreo Mirage Wireless RGB Gaming Controller for PC, Android, iOS & PS4 | Programmable Buttons, Turbo & Macro, Dual Vibration Motors, Hall effect Triggers & Joystic",
    "price": "1,999",
    "image": "https://m.media-amazon.com/images/I/71Mj4xd0YML._AC_UL320_.jpg"
  },
  {
    "title": "HOPPUP Xo6 Gaming Earbuds with 35MS Low Latency, RGB LED, 13MM Drivers & 50H Playtime Bluetooth (Cobalt Blue, True Wireless)",
    "price": "799",
    "image": "https://m.media-amazon.com/images/I/61xUny0zw5L._AC_UL320_.jpg"
  },
  {
    "title": "Kreo Harpy Gaming Mouse Wired, 55g Ultra-Lightweight Mouse, Customizable RGB Mouse for Laptop Gaming, Mouse for Pc, 1000Hz Polling Rate, 12800 DPI",
    "price": "549",
    "image": "https://m.media-amazon.com/images/I/51NOau2YnsL._AC_UL320_.jpg"
  },
  {
    "title": "Smartcam R36S Handheld Gaming Console with 3.5” HD Screen | 15000+ Retro Games | 21 Emulators | Dual Joystick | 3500mAh Battery | Save & Load | Portable Retro Game Player",
    "price": "3,599",
    "image": "https://m.media-amazon.com/images/I/61S79bOIO0L._AC_UL320_.jpg"
  },
  {
    "title": "EvoFox Elite X2 Wireless Gaming Controller For PC with 1000Hz Polling Rate, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers, EZ Click Macros, Dual Vibration Motors(White)",
    "price": "1,799",
    "image": "https://m.media-amazon.com/images/I/61XixU5Jp6L._AC_UL320_.jpg"
  },
  {
    "title": "Razer DeathAdder Essential White Edition - 6400 DPI Ergonomic Wired Gaming Mouse - RZ01-03850200-R3M1",
    "price": "1,389",
    "image": "https://m.media-amazon.com/images/I/51Wn57OxWAL._AC_UL320_.jpg"
  },
  {
    "title": "Razer Bluetooth DeathAdder V2 X Hyper Speed: Award-Winning Ergonomic Design with 14000 DPI - Ultra-Fast Hyper Speed Wireless Ergonomic Gaming Mouse - 235hr Battery Life - RZ01-04130100-R3A1, Black",
    "price": "3,499",
    "image": "https://m.media-amazon.com/images/I/61HIJnrPojL._AC_UL320_.jpg"
  },
  {
    "title": "FEDUS USB Extension Cable 3.0 Long usb Male to Female Extender cable 16.4 FT for 5Gbps High Data Transfer, TV, PC, Laptop, Camera, Keyboard, Mouse, USB Flash Drive, Hard Drive, Printer,Game controller",
    "price": "849",
    "image": "https://m.media-amazon.com/images/I/71znx0mCtQL._AC_UL320_.jpg"
  },
  {
    "title": "pTron Bassbuds Bliss TWS Ear Buds w/ 4 QuadPro Mics, 3D Audioscape, AI-ENC Calls, 40H Playtime, 50Ms Low-Latency Game/Music Modes, BTv5.3, Type C Fast Charging & IPX5 Water Resistant (Obsidian)",
    "price": "698",
    "image": "https://m.media-amazon.com/images/I/51qpz1lG5qL._AC_UL320_.jpg"
  },
  {
    "title": "Noise Buds Vector Truly Wireless Earbuds with Hi-Res Audio & LDAC, Best Bass & Call Clarity, 40H Playtime, Quad Mic ENC, Instacharge (10 Min = 120 Min), Bluetooth v5.3 – Midnight Blue",
    "price": "1,299",
    "image": "https://m.media-amazon.com/images/I/61hVp2yVmFL._AC_UL320_.jpg"
  },
  {
    "title": "Amazon Basics Pro Series Wired USB On Ear Headset with Mic | 40 mm Driver | Computer/PC or Laptop Headphone | Noise Cancellation Microphone | in-line Control for Home, Office, Teams or Zoom, Black",
    "price": "2,099",
    "image": "https://m.media-amazon.com/images/I/61IcSUTenIL._AC_UL320_.jpg"
  },
  {
    "title": "Kreo Owl Full HD 1080P 60 FPS Webcam with Auto-Focus and Built-in Dual Digital Mic, Plug and Play Setup for Video Call, Streaming, YouTube and More, Built-in Privacy Shutter with 360 Rotation (Black)",
    "price": "3,599",
    "image": "https://m.media-amazon.com/images/I/71U+rz14e4L._AC_UL640_QL65_.jpg"
  }
]



// ================= FORMAT DATA =================
const formattedLaptopData = laptopDataRaw.map((item, index) => ({
  img: item.image,
  title: item.title,
  price: `₹${item.price}`,
  slug: `laptop-${index}`,
  category: "laptop",
  stock: "In stock",
}));

const formattedMobileData = mobileDataRaw.map((item, index) => ({
  img: item.image,
  title: item.title,
  price: `₹${item.price}`,
  slug: `mobile-${index}`,
  category: "mobile",
  stock: "In stock"
}));

const formattedCameraData = cameraDataRaw.map((item, index) => ({
  img: item.image,
  title: item.title,
  price: `₹${item.price}`,
  slug: `camera-${index}`,
  category: "cameras",
  stock: "In stock"
}));

const formattedSoundData = soundDataRaw.map((item, index) => ({
  img: item.image,
  title: item.title,
  price: `₹${item.price}`,
  slug: `sound-${index}`,
  category: "sound",
  stock: "In stock"
}));


const formattedGamingData = gamingDataRaw.map((item, index) => ({
  img: item.image,
  title: item.title,
  price: `₹${item.price}`,
  slug: `gaming-${index}`,
  category: "gaming",
  stock: "In stock"
}));

// ================= MERGE ALL =================
const allProducts = [
  ...formattedLaptopData,
  ...formattedMobileData,
  ...formattedCameraData,
  ...formattedSoundData,
  ...formattedGamingData,
];


// ================= CATEGORY LIST =================
export const categories = [
  { name: "Laptops", slug: "laptops" },
  { name: "PC & Computers", slug: "pc" },
  { name: "Cell Phones", slug: "mobile" },
  { name: "Tablets", slug: "tablets" },
  { name: "Gaming & VR", slug: "gaming" },
  { name: "Networking", slug: "networking" },
  { name: "Cameras", slug: "cameras" },
  { name: "Sounds", slug: "sound" },
  { name: "Office", slug: "office" },
  { name: "Accessories", slug: "accessories" }
];


// ================= CATEGORY MAPPING =================
const categoryMap = {
  laptop: "laptops",
  laptops: "laptops",
  cameras: "cameras",
  mobile: "mobile",
  phone: "mobile",
  iphone: "mobile",
  samsung: "mobile",
  xiaomi: "mobile",
  tablet: "tablets",
  gaming: "gaming",
  audio: "sound",
  sound: "sound",
  accessories: "accessories",
  wearable: "accessories",
  display: "pc",
  pc: "pc",
};


// ================= NORMALIZED FINAL DATA =================
export const finalProducts = allProducts.map((product, index) => ({
  ...product,
  id: index + 1,
  category: categoryMap[product.category] || "accessories"
}));




// ================= HELPER FUNCTIONS =================

// Get products by category
export const getProductsByCategory = (slug) => {
  return finalProducts.filter((p) => p.category === slug);
};

// Group products (for homepage sections)
export const groupedProducts = categories.map((cat) => ({
  ...cat,
  products: finalProducts.filter((p) => p.category === cat.slug)
}));
