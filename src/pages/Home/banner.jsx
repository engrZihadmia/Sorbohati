import { useEffect, useState } from "react";
import bannerBackground from "../../assets/homebanner.jpg";

export default function Banner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .anim-1 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .anim-2 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.28s; opacity: 0; }
        .anim-3 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.44s; opacity: 0; }
        .anim-4 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.6s;  opacity: 0; }
        .anim-5 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.76s; opacity: 0; }
        .img-float { animation: floatY 5s ease-in-out infinite; }
        .banner-bg  { animation: fadeIn 0.8s ease forwards; }
        .btn-shimmer {
          background: linear-gradient(90deg, #00bf63 30%, #00e676 50%, #00bf63 70%);
          background-size: 200% auto;
        }
        .btn-shimmer:hover { animation: shimmer 1.4s linear infinite; }
      `}</style>

      <section
        className="banner-bg relative w-full overflow-hidden bg-[#f5f0ea]"
        style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}
      >
        {/* ── Background image ── */}
        <div className="absolute inset-0">
          <img
            src={bannerBackground}
            alt=""
            aria-hidden="true"
            className="img-float absolute right-0 top-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0ea] via-[#f5f0ea]/85 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0ea]/30 via-transparent to-[#f5f0ea]/20" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[480px] py-14 md:py-0">
            <div className="max-w-lg lg:max-w-2xl">

              {/* Badge */}
              <div className="anim-1 inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#00bf63]" />
                <span className="text-[#00bf63] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  সপ্তাহের সেরা দেশি ও অর্গানিক পণ্য 
                </span>
              </div>

              {/* Heading */}
              <h1 className="anim-2 text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-4">
                প্রিমিয়াম মানের খাঁটি পণ্য 
                <span className="block text-gray-800">অর্গানিক নিত্যপ্রয়োজনীয় পণ্য </span>
              </h1>

              {/* Sub-heading */}
              <p className="anim-3 text-base sm:text-lg font-semibold text-gray-700 mb-2">
                স্বাস্থ্যকর কেনাকাটা এখন আরও সহজ 
              </p>

              {/* Description */}
              <p className="anim-4 text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
                এখানে পাবেন খাঁটি দেশি ঘি, মধু, চাল, মসলা ও ডালসহ সেরা মানের অর্গানিক পণ্য 
              </p>

              {/* CTA */}
              <div className="anim-5 flex items-center gap-4 flex-wrap">
                <a
                  href="/shop"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold shadow-lg shadow-[#00bf63]/30 hover:shadow-[#00bf63]/50 transition-shadow duration-300"
                >
                  এখনই কিনুন 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-[#00bf63] transition-colors duration-200 group"
                >
                  আরও জানুন 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Trust badges */}
              <div className="anim-5 flex items-center gap-5 mt-8 flex-wrap">
                {[
                  { label: "১০০% প্রাকৃতিক " },
                  { label: "সারা দেশে ডেলিভারি " },
                  { label: "প্রতিদিন তাজা ও মানসম্মত পণ্য" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#00bf63"
                      strokeWidth={2.5}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs text-gray-500 font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}