import { useEffect, useState } from "react";

export default function AboutFeatures() {
  const features = [
    {
      id: 1,
      title: "সরাসরি কৃষক থেকে",
      desc: "আমরা কোনো মধ্যস্বত্বভোগী ছাড়া সরাসরি মাঠ পর্যায় থেকে পণ্য সংগ্রহ করি, ফলে কৃষকরা সঠিক মূল্য পায় এবং আপনি পান সেরা জিনিস।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 2,
      title: "১০০% হাইজেনিক প্যাকিং",
      desc: "পণ্য সংগ্রহ থেকে শুরু করে প্যাকেজিং পর্যন্ত প্রতিটি ধাপে সর্বোচ্চ পরিচ্ছন্নতা এবং স্বাস্থ্যবিধি বজায় রাখা হয়।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "কোনো কৃত্রিম উপাদান নেই",
      desc: "আমাদের কোনো পণ্যে কোনো প্রকার প্রিজারভেটিভ, কেমিক্যাল, রং বা কৃত্রিম ফ্লেভার ব্যবহার করা হয় না। সম্পূর্ণ প্রকৃতি যেমন, আমরা ঠিক তেমনই রাখি।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24" style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00bf63] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">আমাদের অনন্যতা</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">কেন আমাদের পণ্যগুলো সেরা ও আলাদা?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.id} className="p-8 rounded-2xl bg-[#f5f0ea]/40 border border-[#f5f0ea] hover:border-[#00bf63]/20 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#00bf63]/10 text-[#00bf63] group-hover:bg-[#00bf63] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}