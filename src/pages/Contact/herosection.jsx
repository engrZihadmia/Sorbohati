import { useEffect, useState } from "react";
import contactBannerImg from "../../assets/contactbanner.jpg"; 

export default function ContactHero() {
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
        {/* ── Background image & Overlay (এবাউট পেজের সিগনেচার মাস্কিং) ── */}
        <div className="absolute inset-0">
          <img
            src={contactBannerImg}
            alt=""
            aria-hidden="true"
            className="img-float absolute right-0 top-0 h-full w-full object-cover object-right opacity-70"
          />
          {/* ডিপ গ্রিন লিনিয়ার মাস্ক এবং টপ-বটম শ্যাডো ওভারলে */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/85 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/30 via-transparent to-[#064e3b]/30" />
        </div>

        {/* ── Content Area ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] py-16 md:py-12">
            <div className="max-w-xl lg:max-w-3xl w-full">

              {/* Top Badge */}
              <div className="anim-1 inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#ccff00]" />
                <span className="text-[#ccff00] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Get In Touch With Us
                </span>
              </div>

              {/* Premium Heading */}
              <h1 className="anim-2 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white leading-[1.25] tracking-tight mb-4">
                যেকোনো প্রয়োজনে
                <span className="block text-[#ccff00] mt-1">আমাদের সাথে যোগাযোগ করুন</span>
              </h1>

              {/* Description */}
              <p className="anim-3 text-sm sm:text-base text-gray-200/90 mb-10 leading-relaxed font-light max-w-xl">
                Questions, feedback, or need bulk orders? Our team is here to ensure your premium experience. আমাদের পণ্য বা অর্ডার সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করতে পারেন।
              </p>

              {/* ── কন্টাক্ট কুইক ইনফো (হুবহু এবাউট পেজের কাউন্টার সেকশনের মতো মিনিমাল ডিজাইন) ── */}
              <div className="anim-4 flex items-center gap-x-12 gap-y-6 flex-wrap border-t border-white/15 pt-8">
                
                {/* ফোন স্ট্যাট */}
                <div className="flex items-start gap-3.5">
                  <div className="text-[#ccff00] mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs text-gray-300 font-medium uppercase tracking-widest">কল করুন</span>
                    <span className="block text-base sm:text-lg font-bold text-white tracking-wide mt-0.5">01998582338</span>
                  </div>
                </div>

                {/* ইমেইল স্ট্যাট */}
                <div className="flex items-start gap-3.5">
                  <div className="text-[#ccff00] mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs text-gray-300 font-medium uppercase tracking-widest">ইমেইল ঠিকানা</span>
                    <span className="block text-base sm:text-lg font-bold text-white tracking-wide mt-0.5">zihadmia5731@gmail.com</span>
                  </div>
                </div>

                {/* লোকেশন স্ট্যাট */}
                <div className="flex items-start gap-3.5">
                  <div className="text-[#ccff00] mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs text-gray-300 font-medium uppercase tracking-widest">প্রধান কার্যালয়</span>
                    <span className="block text-base sm:text-lg font-bold text-white tracking-wide mt-0.5">ঢাকা, বাংলাদেশ</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}