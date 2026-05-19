import { useEffect, useState } from "react";
import bannerBackground from "../../assets/shoppagebanner.jpg"; 

export default function Banner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
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
        .anim-1 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .anim-2 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.28s; opacity: 0; }
        .anim-3 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.44s; opacity: 0; }
        .anim-4 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.6s;  opacity: 0; }
        .img-float { animation: floatY 5s ease-in-out infinite; }
        .banner-bg  { animation: fadeIn 0.8s ease forwards; }
      `}</style>

      <section
        className="banner-bg relative w-full overflow-hidden bg-[#064e3b]"
        style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}
      >
        {/* ── Background image (এবাউট পেজের স্টাইলে মাস্কড এবং অপাসিটি ব্যালেন্সড) ── */}
        <div className="absolute inset-0">
          <img
            src={bannerBackground}
            alt=""
            aria-hidden="true"
            className="img-float absolute right-0 top-0 h-full w-full object-cover object-right opacity-75"
          />
          {/* শপ পেজের থিম কালার #064e3b দিয়ে তৈরি ডার্ক লিনিয়ার মাস্ক */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/85 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/30 via-transparent to-[#064e3b]/30" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[480px] py-16 md:py-12">
            <div className="max-w-lg lg:max-w-2xl">

              {/* Badge */}
              <div className="anim-1 inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#ccff00]" />
                <span className="text-[#ccff00] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Healthy and Fresh Grocery
                </span>
              </div>

              {/* Heading */}
              <h1 className="anim-2 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white leading-[1.25] tracking-tight mb-4">
                প্রিমিয়াম মানের খাঁটি ও
                <span className="block text-[#ccff00] mt-1">অর্গানিক নিত্যপ্রয়োজনীয় পণ্য</span>
              </h1>

              {/* Description */}
              <p className="anim-3 text-sm sm:text-base text-gray-100 mb-8 leading-relaxed font-light max-w-xl">
                We pride ourselves on providing a curated selection of the finest, nutrient-rich products that cater to your health-conscious lifestyle. এখানে পাবেন খাঁটি দেশি ঘি, মধু, চাল ও মসলাসহ সেরা সব উপাদান।
              </p>

              {/* CTA Button */}
              <div className="anim-4 flex items-center gap-4 flex-wrap">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-white text-[#064e3b] hover:bg-[#ccff00] hover:text-black px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-[#ccff00]/20"
                >
                  পণ্যগুলো দেখুন
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

            </div>
          </div>
        </div>
      </section>
    </>
  );
}