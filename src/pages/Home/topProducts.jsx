import { useState, useMemo } from "react";
// ১. আপনার তৈরি করা CartContext ফাইল থেকে useCart ইমপোর্ট করুন 
import { useCart } from "../../ui/CardContext/CartContext"; 

// 📦 সেন্ট্রাল ডাটাবেজ ফাইল থেকে সব প্রোডাক্ট ইমপোর্ট করা হলো
// (আপনার প্রজেক্টের ফোল্ডার স্ট্রাকচার অনুযায়ী পাথটি প্রয়োজনে পরিবর্তন করে নিন)
import { mockProducts } from "../../data/products";

const CartIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const FireIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
    <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.5 2.5-6.5 4-8 .5 2 1.5 3 3 3-1-3 1-6 4-7 0 3 2 5 4 5 2 0 3-1.5 3-3 1.5 2 3 4.5 3 7 0 5.5-3.5 11-12 11z"/>
  </svg>
);

const Badge = ({ type }) => {
  if (!type) return null;
  
  // ডাটাবেজে ছোট হাতের অক্ষরে থাকলে বা অন্য টেক্সট থাকলে তা হ্যান্ডেল করার জন্য কন্ডিশন
  const isBest = type.toLowerCase() === "best" || type === "Best Selling";
  const isOffer = type.toLowerCase() === "offer" || type === "Offered Items";

  if (!isBest && !isOffer) return null;

  return (
    <div
      className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[10px] font-bold shadow-md ${
        isBest ? "bg-red-500" : "bg-orange-500"
      }`}
    >
      <FireIcon />
      {isBest ? "Best Selling" : "Offered Items"}
    </div>
  );
};

// Single Dynamic Product Card
const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  
  // ওল্ড প্রাইস এবং বর্তমান প্রাইস থাকলে সাশ্রয় হিসাব করার লজিক
  const save = product.oldPrice && product.price ? product.oldPrice - product.price : 0;

  const { addToCart, setCartOpen } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setCartOpen(true);
  };

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row items-center gap-0 group hover:shadow-lg hover:shadow-[#00bf63]/10 hover:border-[#00bf63]/20 transition-all duration-300 h-full">
      <Badge type={product.badge} />

      {/* Image */}
      <div className="flex-shrink-0 w-full sm:w-44 h-44 flex items-center justify-center bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5 flex-1 w-full justify-between h-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xl font-extrabold text-[#00bf63]">
              ৳{product.price?.toLocaleString("bn-BD")}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ৳{product.oldPrice?.toLocaleString("bn-BD")}
              </span>
            )}
          </div>

          {/* Save badge */}
          {save > 0 && (
            <span className="inline-flex w-fit items-center px-2.5 py-0.5 rounded-full bg-green-100 text-[#00a855] text-xs font-bold">
              সাশ্রয় ৳{save.toLocaleString("bn-BD")}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 flex-wrap mt-2">
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
              added
                ? "border-[#00bf63] bg-[#00bf63] text-white"
                : "border-[#00bf63] text-[#00bf63] hover:bg-[#00bf63] hover:text-white"
            }`}
          >
            <CartIcon />
            {added ? "যোগ হয়েছে ✓" : "কার্টে যোগ করুন"}
          </button>

          <button 
            onClick={handleBuyNow}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00bf63] hover:bg-[#009e52] text-white text-sm font-semibold transition-all duration-200 shadow-sm shadow-[#00bf63]/30"
          >
            <CartIcon />
            এখনই কিনুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default function TopSellingProducts() {
  const [showAll, setShowAll] = useState(false);

  // ⚡ useMemo ব্যবহার করে mockProducts থেকে "best" এবং "offer" পণ্যগুলো ফিল্টার করা হচ্ছে
  const filteredProducts = useMemo(() => {
    if (!mockProducts || !Array.isArray(mockProducts)) return [];
    
    return mockProducts.filter((p) => {
      if (!p.badge) return false;
      const b = p.badge.toLowerCase();
      return b === "best" || b === "best selling" || b === "offer" || b === "offered items";
    });
  }, []);

  // 'আরও পণ্য দেখুন' বাটনের ওপর ভিত্তি করে পণ্য দেখানোর সংখ্যা নিয়ন্ত্রণ
  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  // যদি ডাটাবেজে এই টাইপের কোনো পণ্য না থাকে, তবে এই সেকশনটি হাইড থাকবে
  if (filteredProducts.length === 0) return null;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .prod-card { animation: fadeUp 0.4s ease forwards; }
      `}</style>

      <section
        className="w-full bg-[#fafaf8] py-14"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#00bf63] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              আমাদের সেরা পণ্য
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              সবচেয়ে বেশি বিক্রিত পণ্যসমূহ
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {visibleProducts.map((p) => (
              <div key={p.id} className="prod-card">
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          {/* Dynamic Show More / Show Less Button */}
          {filteredProducts.length > 4 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-[#00bf63] text-[#00bf63] font-semibold text-sm hover:bg-[#00bf63] hover:text-white transition-all duration-200"
              >
                {showAll ? "কম দেখুন" : "আরও পণ্য দেখুন"}
                <svg
                  width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}