import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
//  ✏️  EDIT THIS ARRAY — change reviews, names, roles, avatars
// ============================================================
const reviews = [
  {
    logo: "NutriMart",
    quote:
      "এই শপের ড্রাই ফ্রুটসের কোয়ালিটি সত্যিই অসাধারণ! কাঠবাদাম আর কাজুবাদামগুলো একদম তাজা ও মুচমুচে ছিল, প্যাকেজিংও ছিল প্রিমিয়াম এবং ডেলিভারি পেয়েছি একদম সঠিক সময়ে। আমি অবশ্যই আবার অর্ডার করব!",
    name: "আনিকা রহমান",
    role: "ফুড ব্লগার",
    company: "TasteNest BD",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    logo: "GreenCart",
    quote:
      "অনলাইনে কেনা আমার অন্যতম সেরা ড্রাই ফ্রুটস। বিশেষ করে পেস্তা বাদামের হালকা নোনতা স্বাদটা পারফেক্ট ছিল এবং তাদের এয়ারটাইট জার প্যাকেজিংটা দারুণ। কাস্টমার সাপোর্টের ব্যবহারও খুব আন্তরিক ছিল!",
    name: "করিম হোসাইন",
    role: "পুষ্টিবিদ (Nutritionist)",
    company: "NutriLife Dhaka",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    logo: "FreshMart",
    quote:
      "এত কম দামে এত প্রিমিয়াম কোয়ালিটি সত্যিই ভাবা যায় না। তাদের ফেস্টিভ্যাল অফারে ফ্যামিলির জন্য ৩টি প্রিমিয়াম কম্বো বক্স নিয়েছিলাম, বাসার সবাই প্রতিটি বাইট দারুণ উপভোগ করেছে। শতভাগ সন্তুষ্ট!",
    name: "সুমাইয়া ইসলাম",
    role: "হোম শেফ",
    company: "GreenCart BD",
    avatar: "https://i.pravatar.cc/80?img=23",
  },
  {
    logo: "OrganicHub",
    quote:
      "অনলাইন থেকে ড্রাই ফ্রুটস কিনতে প্রথমে একটু দ্বিধায় ছিলাম, কিন্তু প্রোডাক্ট হাতে পাওয়ার পর কোয়ালিটি দেখে আমি পুরো ফ্যান হয়ে গেছি। প্রিমিয়াম খেঁজুর আর আখরোটগুলো এককথায় জাস্ট সেরা ছিল।",
    name: "রফিক আহমেদ",
    role: "সিনিয়র শেফ",
    company: "FreshMart Pro",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    logo: "PureRoots",
    quote:
      "কোয়ালিটির দিক থেকে কোনো আপস নেই, একদম টপ-নচ প্রোডাক্ট! বাজারে অনেক ব্র্যান্ডের ড্রাই ফ্রুটস ট্রাই করেছি তবে স্বাদে ও ঘ্রাণে এদেরটাই সেরা। ১০০% মানি-ব্যাক গ্যারান্টি থাকায় নিশ্চিন্তে অর্ডার করা যায়।",
    name: "নাদিয়া চৌধুরী",
    role: "ওয়েলনেস কোচ",
    company: "OrganicHub BD",
    avatar: "https://i.pravatar.cc/80?img=56",
  },
];
// ============================================================

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const QuoteMark = ({ color = "rgba(0,191,99,0.2)" }) => (
  <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
    <path
      d="M0 26V15.8C0 11.4 1.05 7.8 3.15 5C5.3 2.133 8.55 0.4 12.9 0L14 2.4C11.8 2.933 10 4.133 8.6 6C7.267 7.8 6.6 9.867 6.6 12.2H13V26H0ZM22 26V15.8C22 11.4 23.05 7.8 25.15 5C27.3 2.133 30.55 0.4 34.9 0L36 2.4C33.8 2.933 32 4.133 30.6 6C29.267 7.8 28.6 9.867 28.6 12.2H35V26H22Z"
      fill={color}
    />
  </svg>
);

export default function ReviewSection() {
  const total = reviews.length;
  const [active, setActive] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(null); // "left" | "right"
  const autoRef = useRef(null);

  // positions: -1 = left, 0 = center, 1 = right, others = hidden
  const getPos = (idx) => {
    const diff = (idx - active + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  const slide = useCallback(
    (dir) => {
      if (sliding) return;
      setSlideDir(dir);
      setSliding(true);
      setTimeout(() => {
        setActive((prev) =>
          dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total
        );
        setSliding(false);
        setSlideDir(null);
      }, 420);
    },
    [sliding, total]
  );

  useEffect(() => {
    autoRef.current = setInterval(() => slide("next"), 4000);
    return () => clearInterval(autoRef.current);
  }, [slide]);

  const resetAuto = (dir) => {
    clearInterval(autoRef.current);
    slide(dir);
    autoRef.current = setInterval(() => slide("next"), 4000);
  };

  // Card styles per position
  const cardStyle = (pos, isSliding, dir) => {
    const base =
      "absolute top-0 bg-white rounded-3xl shadow-xl flex flex-col p-7 select-none";

    const posStyles = {
      center: {
        zIndex: 20,
        width: "420px",
        left: "50%",
        transform: `translateX(-50%) translateY(0px) scale(1)`,
        opacity: 1,
        transition: "all 0.42s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
      },
      left: {
        zIndex: 10,
        width: "340px",
        left: "50%",
        transform: `translateX(calc(-50% - 280px)) translateY(30px) scale(0.88)`,
        opacity: 0.75,
        transition: "all 0.42s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      },
      right: {
        zIndex: 10,
        width: "340px",
        left: "50%",
        transform: `translateX(calc(-50% + 280px)) translateY(30px) scale(0.88)`,
        opacity: 0.75,
        transition: "all 0.42s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      },
      hidden: {
        zIndex: 0,
        width: "300px",
        left: "50%",
        transform:
          dir === "next"
            ? `translateX(calc(-50% + 500px)) translateY(50px) scale(0.75)`
            : `translateX(calc(-50% - 500px)) translateY(50px) scale(0.75)`,
        opacity: 0,
        transition: "all 0.42s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: "none",
      },
    };

    return { className: base, style: posStyles[pos] || posStyles.hidden };
  };

  return (
    <>
      {/* বাংলা ও ইংরেজি দুই ফন্টের পারফেক্ট কম্বিনেশন */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .review-wrap { position: relative; height: 400px; }
        @media (max-width: 1023px) {
          .review-wrap { height: 360px; }
        }
        @media (max-width: 639px) {
          .side-card { display: none !important; }
          .review-wrap { height: 340px; }
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden py-20 pb-28"
        style={{
          fontFamily: "'Hind Siliguri', 'Sora', sans-serif",
          background: "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)",
        }}
      >
        {/* Subtle dot grid bg */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #00bf6322 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-16 px-4">
          <span className="inline-block text-[#00bf63] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            গ্রাহকদের অভিজ্ঞতা
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            আমাদের ওপর তাদের আস্থা
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-sm mx-auto leading-relaxed font-light">
            আমাদের সম্মানিত গ্রাহকদের মুখের চওড়া হাসিতেই আমাদের আসল সার্থকতা।
          </p>
        </div>

        {/* Carousel */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="review-wrap">
            {reviews.map((r, idx) => {
              const pos = getPos(idx);
              const { className, style } = cardStyle(pos, sliding, slideDir);
              const isSide = pos === "left" || pos === "right";

              return (
                <div
                  key={idx}
                  className={`${className} ${isSide ? "side-card" : ""}`}
                  style={style}
                >
                  {/* Brand logo */}
                  <div className="mb-4">
                    <span className="text-lg font-extrabold tracking-tight text-[#00bf63]">
                      {r.logo}
                      <span className="ml-1 text-yellow-400 text-base">✦</span>
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <QuoteMark />
                    <p
                      className={`mt-3 text-gray-600 leading-relaxed font-light ${
                        pos === "center" ? "text-sm" : "text-xs line-clamp-4"
                      }`}
                    >
                      "{r.quote}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-5" />

                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className={`rounded-full object-cover ring-2 ring-[#00bf63]/30 flex-shrink-0 ${
                        pos === "center" ? "w-12 h-12" : "w-10 h-10"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {r.name}
                      </p>
                      <p className="text-xs text-gray-500 font-medium">{r.role}</p>
                      <p className="text-xs text-[#00bf63] font-semibold">
                        {r.company}
                      </p>
                    </div>
                    {pos === "center" && (
                      <div className="ml-auto">
                        <StarRating />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => resetAuto("prev")}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#00bf63] border border-gray-200 hover:border-[#00bf63] flex items-center justify-center text-gray-500 hover:text-white shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Previous"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i === active || sliding) return;
                    clearInterval(autoRef.current);
                    slide(i > active ? "next" : "prev");
                    setTimeout(
                      () =>
                        setActive(i) ||
                        (autoRef.current = setInterval(
                          () => slide("next"),
                          4000
                        )),
                      420
                    );
                  }}
                  style={{
                    height: "8px",
                    borderRadius: "999px",
                    transition: "all 0.3s",
                    width: i === active ? "24px" : "8px",
                    background:
                      i === active
                        ? "#00bf63"
                        : "#bbf7d0",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => resetAuto("next")}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#00bf63] border border-gray-200 hover:border-[#00bf63] flex items-center justify-center text-gray-500 hover:text-white shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Next"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <p className="text-center text-gray-400 text-xs mt-3 font-medium">
            {active + 1} / {total}
          </p>
        </div>
      </section>
    </>
  );
}