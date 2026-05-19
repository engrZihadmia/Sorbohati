export default function FeatureStrip() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#00bf63" strokeWidth={1.5}>
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 5v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "ফ্রি ডেলিভারি",
      desc: "সারা দেশে ফ্রি ডেলিভারি",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#00bf63" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <text x="7.5" y="13.5" fontSize="5.5" fill="#00bf63" fontWeight="bold" stroke="none">24</text>
        </svg>
      ),
      title: "২৪/৭ সেবা",
      desc: "সর্বক্ষণ অনলাইন সেবা",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#00bf63" strokeWidth={1.5}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      ),
      title: "অনলাইন পেমেন্ট",
      desc: "সহজ ও নিরাপদ পেমেন্ট সুবিধা",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#00bf63" strokeWidth={1.5}>
          <path d="M20 12V22H4V12" />
          <path d="M22 7H2v5h20V7z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
      title: "ফেস্টিভ্যাল অফার",
      desc: "বর্তমানে কোনো অফার নেই",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#00bf63" strokeWidth={1.5}>
          <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4" />
          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
        </svg>
      ),
      title: "১০০% অরিজিনাল",
      desc: "১০০% মানি ব্যাক গ্যারান্টি",
    },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .feature-card { animation: fadeUp 0.5s ease forwards; opacity: 0; }
        .feature-card:nth-child(1) { animation-delay: 0.05s; }
        .feature-card:nth-child(2) { animation-delay: 0.15s; }
        .feature-card:nth-child(3) { animation-delay: 0.25s; }
        .feature-card:nth-child(4) { animation-delay: 0.35s; }
        .feature-card:nth-child(5) { animation-delay: 0.45s; }
        .feature-card:hover .icon-wrap {
          background: #00bf63;
          transform: scale(1.08);
        }
        .feature-card:hover .icon-wrap svg {
          stroke: white;
        }
        .feature-card:hover .icon-wrap svg text {
          fill: white;
        }
      `}</style>

      <section
        className="w-full bg-white border-y border-gray-100"
        style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="feature-card group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#00bf63]/30 hover:shadow-md hover:shadow-[#00bf63]/10 cursor-pointer transition-all duration-300"
              >
                {/* Icon */}
                <div className="icon-wrap flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 shadow-sm">
                  {f.icon}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 leading-snug truncate">
                    {f.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}