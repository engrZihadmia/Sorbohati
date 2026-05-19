import { useEffect, useState } from "react";
import aboutBannerBackground from "../../assets/aboutbanner.jpg"; 

export default function AboutHero() {
  // কাস্টম কাউন্টার স্টেট
  const [naturalCount, setNaturalCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    // ১মা কাউন্টার এনিমেশন (০ থেকে ১০০)
    let startNatural = 0;
    const endNatural = 100;
    const durationNatural = 2000; // ২ সেকেন্ড
    const stepTimeNatural = Math.abs(Math.floor(durationNatural / endNatural));
    
    const timerNatural = setInterval(() => {
      startNatural += 1;
      setNaturalCount(startNatural);
      if (startNatural === endNatural) {
        clearInterval(timerNatural);
      }
    }, stepTimeNatural);

    // ২য় কাউন্টার এনিমেশন (০ থেকে ৫০০০ - একটু বড় স্টেপে যেন স্মুথ হয়)
    let startCustomer = 0;
    const endCustomer = 5000;
    const durationCustomer = 2000; // ২ সেকেন্ড
    const steps = 100; // মোট ১০০ বার চেঞ্জ হবে
    const incrementCustomer = endCustomer / steps;
    const stepTimeCustomer = durationCustomer / steps;

    const timerCustomer = setInterval(() => {
      startCustomer += incrementCustomer;
      if (startCustomer >= endCustomer) {
        setCustomerCount(endCustomer);
        clearInterval(timerCustomer);
      } else {
        setCustomerCount(Math.floor(startCustomer));
      }
    }, stepTimeCustomer);

    return () => {
      clearInterval(timerNatural);
      clearInterval(timerCustomer);
    };
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
        className="banner-bg relative w-full overflow-hidden bg-[#0b1329]"
        style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}
      >
        {/* ── Background Image & Overlay ── */}
        <div className="absolute inset-0">
          <img
            src={aboutBannerBackground}
            alt=""
            aria-hidden="true"
            className="img-float absolute right-0 top-0 h-full w-full object-cover object-right opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] via-[#0b1329]/80 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329]/30 via-transparent to-[#0b1329]/30" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px] py-16 md:py-12">
            <div className="max-w-lg lg:max-w-2xl">

              {/* Badge */}
              <div className="anim-1 inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#00bf63]" />
                <span className="text-[#00bf63] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  আমাদের গল্প ও লক্ষ্য
                </span>
              </div>

              {/* Heading */}
              <h1 className="anim-2 text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.2] tracking-tight mb-4">
                খাঁটি ও স্বাস্থ্যকর জীবনের
                <span className="block text-gray-250">আস্থার এক যুগান্তকারী নাম</span>
              </h1>

              {/* Sub-heading */}
              <p className="anim-3 text-base sm:text-lg font-semibold text-[#00bf63] mb-2">
                কৃষকের ক্ষেত থেকে সরাসরি আপনার রান্নাঘরে
              </p>

              {/* Description */}
              <p className="anim-4 text-sm sm:text-base text-gray-200 mb-8 leading-relaxed">
                আমরা বিশ্বাস করি সুস্থতার মূল চাবিকাঠি লুকিয়ে আছে প্রকৃতির মাঝে। তাই কোনো প্রকার ভেজাল ছাড়াই ১০০% খাঁটি, পুষ্টিকর এবং প্রিমিয়াম মানের অর্গানিক পণ্য আপনার দোরগোড়ায় পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ।
              </p>

              {/* CTA */}
              <div className="anim-5 flex items-center gap-4 flex-wrap">
                <a
                  href="/shop"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold shadow-lg shadow-[#00bf63]/30 hover:shadow-[#00bf63]/50 transition-shadow duration-300"
                >
                  আমাদের পণ্যগুলো দেখুন
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
              </div>

              {/* ── Custom JavaScript Counter Section ── */}
              <div className="anim-5 flex items-center gap-8 mt-8 flex-wrap border-t border-gray-700/40 pt-6">
                
                {/* ১মা কাউন্টার */}
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#00bf63] tracking-tight">
                    {naturalCount}%
                  </span>
                  <span className="text-xs text-gray-300 font-medium mt-1">
                    প্রাকৃতিক উপাদান
                  </span>
                </div>

                {/* ২য় কাউন্টার */}
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#00bf63] tracking-tight">
                    {customerCount.toLocaleString()}+
                  </span>
                  <span className="text-xs text-gray-300 font-medium mt-1">
                  সন্তুষ্ট কাস্টমার
                  </span>
                </div>

                {/* ৩য় কাউন্টার */}
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#00bf63] tracking-tight">
                    ১০০% খাঁটি
                  </span>
                  <span className="text-xs text-gray-300 font-medium mt-1">
                    গুণগত মানের নিশ্চিতকরণ
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}