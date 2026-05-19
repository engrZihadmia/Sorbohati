import { useEffect, useRef, useState } from "react";

// ============================================================
//  ✏️  EDIT CONTENT HERE (Bangla Premium Version)
// ============================================================
const CONTENT = {
  badge: "আমাদের শপ সম্পর্কে জানুন",
  heading: "প্রকৃতির ছোঁয়ায় খাঁটি পুষ্টি,\nসুস্থ ও সুন্দর জীবনের\nআস্থার প্রতিদিন",
  description:
    "আমরা বিশ্বাস করি প্রতিটি পণ্যের আসল গুণগত মান শুরু হয় একদম তার উৎস থেকে — ঠিক যেখানকার বাগান থেকে পরম যত্নে এবং সর্বোচ্চ তাজা অবস্থায় প্রিমিয়াম ড্রাই ফ্রুটস ও অর্গানিক পণ্য সংগ্রহ করা হয়। শতভাগ সততা ও স্বচ্ছতার সাথে সেরা জিনিসটি আপনার পরিবারের কাছে পৌঁছে দেওয়াই আমাদের মূল লক্ষ্য।",
  stats: {
    number: "10+",
    label: "বছরের অভিজ্ঞতা ও আস্থা",
  },
  features: [
    {
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07" />
          <path d="M12 6v6l4 2" />
          <circle cx="5" cy="5" r="2" fill="currentColor" fillOpacity={0.15} />
        </svg>
      ),
      title: "সতেজ ও স্বাস্থ্যকর জীবন",
      desc: "বিশ্বস্ত খামার থেকে সরাসরি সংগৃহীত শতভাগ খাঁটি ও প্রিমিয়াম কোয়ালিটির ড্রাই ফ্রুটস সবার কাছে পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ।",
    },
    {
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "প্রকৃতির আসল বিশুদ্ধতা",
      desc: "কোনো প্রকার কৃত্রিম উপাদান ছাড়া একদম খাঁটি, পুষ্টিকর এবং পরিবেশবান্ধব উপায়ে আপনাদের সেবায় আমরা নিয়োজিত।",
    },
  ],
  checkpoints: ["প্রকৃতির খাটি স্বাদের নিশ্চয়তা।", "সুস্থ খাদ্যাভ্যাস, সুস্থ জীবন।"],
  cta: { label: "আরও জানুন", href: "/about" },
  // Replace these with your actual imported images
  image1: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80",
  image2: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
};
// ============================================================

// Animated counter hook
function useCounter(target, duration = 1800, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const num = parseInt(target);
    let start = 0;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  const suffix = target.replace(/[0-9]/g, "");
  return `${count}${suffix}`;
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const counterVal = useCounter(CONTENT.stats.number, 1600, visible);

  return (
    <>
      {/* গুগল ফন্টসে 'Hind Siliguri' যুক্ত করা হলো বাংলা টেক্সটের প্রিমিয়াম লুকের জন্য */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-left  { opacity: 0; }
        .anim-right { opacity: 0; }
        .anim-up    { opacity: 0; }
        .visible .anim-left  { animation: fadeLeft  0.7s ease forwards; }
        .visible .anim-right { animation: fadeRight 0.7s ease 0.15s forwards; }
        .visible .anim-up    { animation: fadeUp    0.6s ease 0.1s forwards; }
        .visible .anim-up-2  { animation: fadeUp    0.6s ease 0.25s forwards; }
        .visible .anim-up-3  { animation: fadeUp    0.6s ease 0.4s forwards; }
        .anim-up-2, .anim-up-3 { opacity: 0; }
        .img-hover { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .img-hover:hover { transform: scale(1.03); }
      `}</style>

      <section
        ref={sectionRef}
        className={`w-full bg-white py-16 lg:py-24 ${visible ? "visible" : ""}`}
        style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT: Overlapping Images ── */}
            <div className="anim-left relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-none" style={{ height: "520px" }}>

                {/* Image 1 — top left, larger */}
                <div
                  className="img-hover absolute top-0 left-0 rounded-3xl overflow-hidden shadow-xl"
                  style={{ width: "72%", height: "58%", zIndex: 1 }}
                >
                  <img
                    src={CONTENT.image1}
                    alt="About 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image 2 — bottom right, overlaps */}
                <div
                  className="img-hover absolute bottom-0 right-0 rounded-3xl overflow-hidden shadow-2xl"
                  style={{ width: "68%", height: "58%", zIndex: 2 }}
                >
                  <img
                    src={CONTENT.image2}
                    alt="About 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Green accent dot */}
                <div
                  className="absolute rounded-full bg-[#00bf63]"
                  style={{ width: "14px", height: "14px", top: "56%", left: "24%", zIndex: 3 }}
                />
                {/* Outline circle accent */}
                <div
                  className="absolute rounded-full border-4 border-[#00bf63]/25"
                  style={{ width: "60px", height: "60px", bottom: "8%", left: "4%", zIndex: 0 }}
                />
                <div
                  className="absolute rounded-full border-4 border-[#00bf63]/15"
                  style={{ width: "36px", height: "36px", top: "6%", right: "6%", zIndex: 0 }}
                />
              </div>
            </div>

            {/* ── RIGHT: Content ── */}
            <div className="anim-right flex flex-col gap-6">

              {/* Badge */}
              <div className="anim-up inline-flex w-fit">
                <span className="px-4 py-1.5 rounded-full border border-[#00bf63]/40 bg-[#f0fdf4] text-[#00a855] text-xs font-semibold tracking-wide">
                  {CONTENT.badge}
                </span>
              </div>

              {/* Heading */}
              <h2 className="anim-up text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-[1.25] tracking-tight whitespace-pre-line">
                {CONTENT.heading}
              </h2>

              {/* Stats + Features row */}
              <div className="anim-up-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Stats card */}
                <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col justify-center">
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#00bf63]" />
                  <p className="text-5xl font-extrabold text-[#00a855] leading-none mb-1">
                    {counterVal}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">{CONTENT.stats.label}</p>
                </div>

                {/* Features list */}
                <div className="flex flex-col gap-3">
                  {CONTENT.features.map((f, i) => (
                    <div key={i} className={`flex gap-3 items-start pb-3 ${i < CONTENT.features.length - 1 ? "border-b border-gray-100" : ""}`}>
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#00a855]">
                        {f.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{f.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5 leading-snug line-clamp-2">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="anim-up-2 text-sm text-gray-500 leading-relaxed font-light">
                {CONTENT.description}
              </p>

              {/* Checkpoints + CTA */}
              <div className="anim-up-3 flex flex-col sm:flex-row sm:items-center gap-5">
                <ul className="flex flex-col gap-2">
                  {CONTENT.checkpoints.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00bf63" strokeWidth={2.5}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="sm:border-l sm:border-gray-200 sm:pl-5">
                  <a
                    href={CONTENT.cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00bf63] hover:bg-[#009e52] text-white text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#00bf63]/25"
                  >
                    {CONTENT.cta.label}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}