import { useState, useRef, useEffect, useMemo } from "react";
// ১. আপনার তৈরি করা CartContext ফাইল থেকে useCart ইমপোর্ট করুন
import { useCart } from "../../ui/CardContext/CartContext";

// 📦 সেন্ট্রাল ডাটাবেজ ফাইল থেকে সব প্রোডাক্ট ইমপোর্ট করা হলো
import { mockProducts } from "../../data/products";

const CartIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// Single product card (পুরোপুরি ডাইনামিক ডাটা রিসিভ করবে)
const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
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

  return (
    <div className="flex-shrink-0 w-[220px] bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-lg hover:shadow-[#00bf63]/10 hover:border-[#00bf63]/25 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="relative bg-gray-50 h-52 flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold">
              {product.badge === "offer" ? "অফার আইটেম" : product.badge}
            </span>
          )}
        </div>
        {product.savePercent && (
          <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-[#00bf63] text-white text-[10px] font-bold">
            সাশ্রয় {product.savePercent}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-400"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base font-extrabold text-[#00bf63]">
            ৳{product.price?.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.oldPrice?.toLocaleString()}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-auto flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
            added
              ? "bg-[#00bf63] border-[#00bf63] text-white"
              : "border-[#00bf63] text-[#00bf63] hover:bg-[#00bf63] hover:text-white"
          }`}
        >
          <CartIcon />
          {added ? "যোগ হয়েছে ✓" : "কার্টে যোগ করুন"}
        </button>
      </div>
    </div>
  );
};

// Section Slider (ডাইনামিক সেকশনের স্লাইডার লজিক)
const ProductSection = ({ section }) => {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const CARD_W = 220 + 16; 
  const maxIdx = Math.max(0, section.products.length - 5);

  const slideTo = (newIdx) => {
    const clamped = Math.max(0, Math.min(newIdx, maxIdx));
    setIdx(clamped);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: clamped * CARD_W, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (trackRef.current) {
      const newIdx = Math.round(trackRef.current.scrollLeft / CARD_W);
      setIdx(newIdx);
    }
  };

  return (
    <div className="mb-14">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h2>
          <div className="mt-1.5 w-10 h-1 rounded-full bg-[#00bf63]" />
        </div>
        <a
          href={section.viewAllHref}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#00bf63] hover:text-[#009e52] transition-colors uppercase tracking-wide"
        >
          সব দেখুন
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {idx > 0 && (
          <button
            onClick={() => slideTo(idx - 1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:border-[#00bf63] hover:text-[#00bf63] transition-all duration-200"
          >
            <ChevronLeft />
          </button>
        )}

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 no-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`.no-scroll::-webkit-scrollbar{display:none}`}</style>
          {section.products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {idx < maxIdx && (
          <button
            onClick={() => slideTo(idx + 1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:border-[#00bf63] hover:text-[#00bf63] transition-all duration-200"
          >
            <ChevronRight />
          </button>
        )}
      </div>

      {/* Dots */}
      {maxIdx > 0 && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(i)}
              style={{
                height: "7px",
                width: i === idx ? "22px" : "7px",
                borderRadius: "999px",
                background: i === idx ? "#00bf63" : "#d1fae5",
                transition: "all 0.3s",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ProductSections() {
  // ⚡ ডাটাবেজের 'category' বা 'subCategory' প্রোপার্টি ম্যাচ করে রিয়েল-টাইম ডাইনামিক ফিল্টারিং
  const dynamicSections = useMemo(() => {
    if (!mockProducts || !Array.isArray(mockProducts)) return [];

    return [
      {
        id: "honey",
        title: "সকল প্রাকৃতিক মধু",
        viewAllHref: "/shop?category=honey",
        // নোট: আপনার ডাটাবেজের অবজেক্টে যদি 'subCategory' এর জায়গায় 'category' থাকে, তবে p.category === "..." করে দিন
        products: mockProducts.filter((p) => p.subCategory === "honey" || p.category === "honey"),
      },
      {
        id: "rice",
        title: "দেশি চাল",
        viewAllHref: "/shop?category=rice",
        products: mockProducts.filter((p) => p.subCategory === "rice" || p.category === "rice"),
      },
      {
        id: "spices",
        title: "মশলা ও গুঁড়ো",
        viewAllHref: "/shop?category=spices",
        products: mockProducts.filter((p) => p.subCategory === "spices" || p.category === "spices"),
      },
    ].filter(section => section.products.length > 0); // শুধু প্রোডাক্ট থাকা সেকশনগুলোই স্ক্রিনে দেখাবে
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <section
        className="w-full bg-[#fafaf8] py-14"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {dynamicSections.map((section) => (
            <ProductSection key={section.id} section={section} />
          ))}
        </div>
      </section>
    </>
  );
}