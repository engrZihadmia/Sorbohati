import { useEffect, useState } from "react";
import ctaBackground from "../../assets/homebanner.jpg"; // হোম পেজের সেম ব্যাকগ্রাউন্ড থিম ধরে রাখার জন্য

export default function AboutCTA() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .btn-shimmer {
          background: linear-gradient(90deg, #00bf63 30%, #00e676 50%, #00bf63 70%);
          background-size: 200% auto;
        }
        .btn-shimmer:hover { animation: shimmer 1.4s linear infinite; }
      `}</style>

      <section 
        className="relative w-full overflow-hidden bg-[#f5f0ea] py-16 sm:py-20 border-t border-gray-900/5"
        style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}
      >
        {/* ── Background Elements (Home Page Banner থিমের সাথে মিল রেখে) ── */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-full opacity-[0.03] pointer-events-none mix-blend-overlay bg-radial" />
          {/* হালকা ও প্রিমিয়াম অর্গানিক শেপ ডেকোরেশন */}
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-[#00bf63]/5 blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#00bf63]/5 blur-3xl pointer-events-none" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          {/* ছোট গ্রিন লিফ ব্যাজ */}
          <div className="inline-flex items-center gap-2 mb-4 bg-[#00bf63]/10 px-3 py-1 rounded-full">
            <span className="text-[#00bf63] text-xs font-bold tracking-wider uppercase">
              সুস্থ থাকুন, খাঁটি থাকুন
            </span>
          </div>

          {/* মেইন ক্যাচফ্রেজ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight max-w-3xl mx-auto">
            প্রকৃতির সেরা পুষ্টি ও খাঁটি স্বাদ <br className="hidden sm:inline" />
            পৌঁছে যাক আপনার পরিবারে
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
            কোনো রকম কেমিক্যাল বা কৃত্রিম ভেজালের চিন্তা ছাড়াই আজই অর্ডার করুন আপনার নিত্যপ্রয়োজনীয় প্রিমিয়াম অর্গানিক পণ্য।
          </p>

          {/* একশন বাটন (Home Banner এর মতই Shimmer Effect) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/shop"
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white text-sm font-bold shadow-lg shadow-[#00bf63]/20 hover:shadow-[#00bf63]/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              আমাদের শপ ভিজিট করুন
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7m0 0xH13m3 0L3 20" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:text-[#00bf63] hover:border-[#00bf63]/30 transition-all duration-200"
            >
              যোগাযোগ করুন
            </a>
          </div>

        </div>
      </section>
    </>
  );
}