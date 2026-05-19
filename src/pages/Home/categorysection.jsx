import { useRef, useState, useEffect } from "react";

// ============================================================
//  ✏️  EDIT CATEGORIES — name, emoji, color
// ============================================================
const categories = [
  {
    name: "তুলশিমালা চাল",
    emoji: "🌾",
    bg: "#fefce8",
    border: "#fde68a",
  },
  {
    name: "লিচু ফুলের মধু",
    emoji: "🍯",
    bg: "#fff7ed",
    border: "#fed7aa",
  },
  {
    name: "কালোজিরা ফুলের মধু",
    emoji: "🍯",
    bg: "#fff7ed",
    border: "#fed7aa",
  },
  {
    name: "মরিচের গুঁড়ো",
    emoji: "🌶️",
    bg: "#fff1f2",
    border: "#fecdd3",
  },
  {
    name: "হলুদের গুঁড়ো",
    emoji: "🟡",
    bg: "#fefce8",
    border: "#fde68a",
  },
  {
    name: "দেশি ধনিয়ার গুড়া",
    emoji: "☘️",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    name: "দেশি কালোজিরা",
    emoji: "🌿",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    name: "চালের গুড়া",
    emoji: "🌾",
    bg: "#fefce8",
    border: "#fde68a",
  },
  {
    name: "খোসাসহ মুসুরি",
    emoji: "🫘",
    bg: "#fdf4ff",
    border: "#e9d5ff",
  },
  {
    name: "দেশি সরিষা",
    emoji: "🎋",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
];
// ============================================================

// Duplicate for infinite loop
const looped = [...categories, ...categories, ...categories];

const CARD_W = 160;   // px — card width
const CARD_GAP = 16;  // px — gap between cards
const STEP = CARD_W + CARD_GAP;

export default function CategorySlider() {
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const totalW = categories.length * STEP;

  // Seamless loop reset
  useEffect(() => {
    if (!transitioning) return;
    const handleEnd = () => {
      // If scrolled past one full set, jump back silently
      if (offset <= -totalW) {
        setTransitioning(false);
        setOffset(offset + totalW);
      }
      if (offset >= 0) {
        setTransitioning(false);
        setOffset(-totalW + STEP);
      }
    };
    const el = trackRef.current;
    if (el) el.addEventListener("transitionend", handleEnd);
    return () => { if (el) el.removeEventListener("transitionend", handleEnd); };
  }, [offset, totalW, transitioning]);

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!transitioning) {
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitioning(true)));
    }
  }, [transitioning]);

  // Auto-scroll
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setTransitioning(true);
      setOffset((prev) => prev - STEP);
    }, 2200);
    return () => clearInterval(autoRef.current);
  }, []);

  const pauseAuto = () => clearInterval(autoRef.current);
  const resumeAuto = () => {
    autoRef.current = setInterval(() => {
      setTransitioning(true);
      setOffset((prev) => prev - STEP);
    }, 2200);
  };

  const slideBy = (dir) => {
    pauseAuto();
    setTransitioning(true);
    setOffset((prev) => prev + dir * -STEP);
    resumeAuto();
  };

  // Start offset at -totalW (middle set)
  const startOffset = -totalW;
  const computedOffset = startOffset + offset;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .cat-track {
          display: flex;
          will-change: transform;
        }
        .cat-card:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 12px 32px rgba(0,191,99,0.15);
        }
        .cat-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .slider-btn:hover { transform: scale(1.1); }
        .slider-btn { transition: transform 0.2s, background 0.2s; }
      `}</style>

      <section
        className="w-full bg-white py-14"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#00bf63] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              Browse By Category
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Featured Categories
            </h2>
          </div>

          {/* Slider wrapper */}
          <div className="relative flex items-center gap-3">

            {/* Prev Button */}
            <button
              onClick={() => slideBy(-1)}
              className="slider-btn flex-shrink-0 w-10 h-10 rounded-full bg-[#00bf63] hover:bg-[#009e52] flex items-center justify-center text-white shadow-md shadow-[#00bf63]/30 z-10"
              aria-label="Previous"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Track container (overflow hidden) */}
            <div
              className="flex-1 overflow-hidden"
              onMouseEnter={pauseAuto}
              onMouseLeave={resumeAuto}
            >
              <div
                ref={trackRef}
                className="cat-track"
                style={{
                  transform: `translateX(${computedOffset}px)`,
                  transition: transitioning ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)" : "none",
                  gap: `${CARD_GAP}px`,
                }}
              >
                {looped.map((cat, idx) => (
                  <div
                    key={idx}
                    className="cat-card flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer"
                    style={{ width: `${CARD_W}px` }}
                  >
                    {/* Icon box */}
                    <div
                      className="w-full rounded-2xl flex items-center justify-center"
                      style={{
                        height: `${CARD_W}px`,
                        background: cat.bg,
                        border: `1.5px solid ${cat.border}`,
                      }}
                    >
                      <span style={{ fontSize: "52px", lineHeight: 1 }}>{cat.emoji}</span>
                    </div>

                    {/* Name */}
                    <p className="text-sm font-semibold text-gray-700 text-center leading-snug px-1">
                      {cat.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => slideBy(1)}
              className="slider-btn flex-shrink-0 w-10 h-10 rounded-full bg-[#00bf63] hover:bg-[#009e52] flex items-center justify-center text-white shadow-md shadow-[#00bf63]/30 z-10"
              aria-label="Next"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-8">
            {categories.map((_, i) => {
              const activeIdx = ((-offset / STEP) % categories.length + categories.length) % categories.length;
              const isActive = Math.round(activeIdx) === i;
              return (
                <div
                  key={i}
                  style={{
                    height: "6px",
                    borderRadius: "999px",
                    transition: "all 0.3s",
                    width: isActive ? "20px" : "6px",
                    background: isActive ? "#00bf63" : "#d1fae5",
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}