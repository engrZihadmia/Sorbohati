// src/data/products.js

export const mockProducts = [
  // === Side/Main Shop Categories (Cooking Essentials & Organic Certified) ===
  {
    id: "shop-1",
    name: "Chili (Morich) Powder 500g",
    category: "Cooking Essentials",
    subCategory: "spices",
    price: 400,
    oldPrice: null,
    badge: null,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-2",
    name: "Rice Flour (Chaler Gura) 2kg",
    category: "Cooking Essentials",
    subCategory: "rice",
    price: 200,
    oldPrice: null,
    badge: null,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-3",
    name: "Turmeric (Holud) Powder 500g",
    category: "Cooking Essentials",
    subCategory: "spices",
    price: 295,
    oldPrice: null,
    badge: null,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-4",
    name: "Gawa Ghee 500gm",
    category: "Cooking Essentials",
    subCategory: "ghee",
    price: 850,
    oldPrice: 900,
    badge: "Save 6%",
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1631209121750-a9f656d28f24?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-5",
    name: "Laal Atta 2kg",
    category: "Cooking Essentials",
    subCategory: "flour",
    price: 200,
    oldPrice: null,
    badge: null,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-6",
    name: "Mustard Oil 1L",
    category: "Cooking Essentials",
    subCategory: "oil",
    price: 320,
    oldPrice: 360,
    badge: "Save 11%",
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-7",
    name: "Organic Wild Honey 500g",
    category: "Organic Certified",
    subCategory: "honey",
    price: 650,
    oldPrice: 740,
    badge: "Save 12%",
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-8",
    name: "Organic Spirulina Powder 100g",
    category: "Organic Certified",
    subCategory: "supplements",
    price: 890,
    oldPrice: 940,
    badge: "Save 5%",
    newArrival: true,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-9",
    name: "Organic Matcha Green Tea 50g",
    category: "Organic Certified",
    subCategory: "tea",
    price: 720,
    oldPrice: null,
    badge: null,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-10",
    name: "Organic Ashwagandha Powder 100g",
    category: "Organic Certified",
    subCategory: "supplements",
    price: 560,
    oldPrice: null,
    badge: null,
    newArrival: true,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-11",
    name: "Ceylon Coconut Oil 500ml",
    category: "Organic Certified",
    subCategory: "oil",
    price: 480,
    oldPrice: null,
    badge: null,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: "shop-12",
    name: "Chia Seeds 200g",
    category: "Organic Certified",
    subCategory: "seeds",
    price: 380,
    oldPrice: 420,
    badge: "Save 10%",
    newArrival: true,
    isTopSelling: false,
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=400&auto=format&fit=crop&q=70"
  },

  // === Home Top Selling Section ===
  {
    id: "top-1",
    name: "তুলশিমালা চাল ১ কেজি",
    category: "Cooking Essentials",
    subCategory: "rice",
    price: 180,
    oldPrice: 220,
    badge: "best",
    isTopSelling: true,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80"
  },
  {
    id: "top-2",
    name: "লিচু ফুলের মধু ৫০০গ্রাম",
    category: "Organic Certified",
    subCategory: "honey",
    price: 550,
    oldPrice: 650,
    badge: "best",
    isTopSelling: true,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80"
  },
  {
    id: "top-3",
    name: "সুন্দরবনের কালোজিরা মধু ১কেজি",
    category: "Organic Certified",
    subCategory: "honey",
    price: 980,
    oldPrice: 1200,
    badge: "offer",
    isTopSelling: true,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&q=80"
  },
  {
    id: "top-4",
    name: "দেশি সরিষার তেল ১ লিটার",
    category: "Cooking Essentials",
    subCategory: "oil",
    price: 320,
    oldPrice: 380,
    badge: "best",
    isTopSelling: true,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&q=80"
  },
  {
    id: "top-5",
    name: "মরিচের গুঁড়ো ২৫০গ্রাম",
    category: "Cooking Essentials",
    subCategory: "spices",
    price: 120,
    oldPrice: 150,
    badge: null,
    isTopSelling: true,
    image: "https://images.unsplash.com/photo-1635943188737-a99b5c21e6a2?w=300&q=80"
  },
  {
    id: "top-6",
    name: "হলুদের গুঁড়ো ২৫০গ্রাম",
    category: "Cooking Essentials",
    subCategory: "spices",
    price: 110,
    oldPrice: 140,
    badge: "offer",
    isTopSelling: true,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&q=80"
  },

  // === Slider Sections Products ===
  {
    id: "slide-h1",
    name: "লিচু ফুলের মধু ১ কেজি",
    category: "Organic Certified",
    subCategory: "honey",
    price: 980,
    oldPrice: 1200,
    badge: "offer",
    savePercent: 18,
    isSliderProduct: true,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80"
  },
  {
    id: "slide-h2",
    name: "কালোজিরা ফুলের মধু ১ কেজি",
    category: "Organic Certified",
    subCategory: "honey",
    price: 1100,
    oldPrice: 1300,
    badge: null,
    savePercent: 15,
    isSliderProduct: true,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80"
  },
  {
    id: "slide-h3",
    name: "সুন্দরবনের মধু ১ কেজি",
    category: "Organic Certified",
    subCategory: "honey",
    price: 1400,
    oldPrice: 1700,
    badge: "offer",
    savePercent: 17,
    isSliderProduct: true,
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400&q=80"
  },
  {
    id: "slide-h4",
    name: "খাঁটি সরিষা ফুলের মধু ৫০০গ্রাম",
    category: "Organic Certified",
    subCategory: "honey",
    price: 550,
    oldPrice: 650,
    badge: null,
    savePercent: 15,
    isSliderProduct: true,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80"
  },
  {
    id: "slide-h5",
    name: "মিক্সড ফ্লাওয়ার মধু ১ কেজি",
    category: "Organic Certified",
    subCategory: "honey",
    price: 900,
    oldPrice: 1050,
    badge: "offer",
    savePercent: 14,
    isSliderProduct: true,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80"
  },
  {
    id: "slide-h6",
    name: "রাজশাহী লিচু মধু ৫০০গ্রাম",
    category: "Organic Certified",
    subCategory: "honey",
    price: 500,
    oldPrice: 600,
    badge: null,
    savePercent: 16,
    isSliderProduct: true,
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400&q=80"
  }
];