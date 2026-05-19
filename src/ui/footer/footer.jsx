import { useState } from "react";
import Logoimg from "../../assets/logo.png";

// ─── Social Icons ──────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.965C5.12 20 12 20 12 20s6.88 0 8.59-.455a2.78 2.78 0 0 0 1.95-1.965A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6L12 17.2 5.8 21.7l2.4-7.6L2 9.6h7.6z" />
  </svg>
);

// ─── 🛠️ FIXED FOOTER DATA (পাবলিক নেভিগেশন ও শপ ফিল্টারের সাথে ম্যাচ করা) ───
const footerLinks = [
  {
    title: "কোম্পানি",
    links: [
      { name: "হোম পেজ", href: "/" },
      { name: "আমাদের সম্পর্কে", href: "/about" },
      { name: "ব্লগ ও রেসিপি", href: "/blog" },
      { name: "যোগাযোগ", href: "/contact" },
    ],
  },
  {
    title: "শপ ক্যাটাগরি",
    links: [
      { name: "সব পণ্য", href: "/shop" },
      { name: "প্রাকৃতিক মধু", href: "/shop?category=honey" },
      { name: "দেশি চাল", href: "/shop?category=rice" },
      { name: "খাঁটি মশলা", href: "/shop?category=spices" },
    ],
  },
  {
    title: "গ্রাহক সেবা",
    links: [
      { name: "হেল্প সেন্টার", href: "/contact" },
      { name: "অর্ডার ট্র্যাক করুন", href: "/contact" },
      { name: "রিটার্ন পলিসি", href: "/contact" },
      { name: "শিপিং তথ্য", href: "/contact" },
    ],
  },
];

const socials = [
  { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com" },
  { icon: <TwitterIcon />, label: "Twitter", href: "https://twitter.com" },
  { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com" },
  { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <YoutubeIcon />, label: "YouTube", href: "https://youtube.com" },
];

// ─── Newsletter ────────────────────────────────────────────────────────────────
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };

  return (
    <div className="relative">
      {!sent ? (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="আপনার ইমেইল দিন"
            className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-[#00bf63] focus:bg-white/15 transition-all duration-200"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-[#00bf63] hover:bg-[#00a855] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            সাবস্ক্রাইব <ArrowRight />
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-2 px-4 py-3 bg-[#00bf63]/20 border border-[#00bf63]/40 rounded-xl text-[#00bf63] text-sm font-semibold">
          <SparkleIcon /> আমাদের সাথে যুক্ত হওয়ার জন্য ধন্যবাদ! 🎉
        </div>
      )}
    </div>
  );
};

// ─── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        .footer-glow { background: radial-gradient(ellipse 80% 50% at 50% 120%, rgba(0,191,99,0.18) 0%, transparent 70%); }
        .grid-pattern { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px; }
        .link-hover { position:relative; }
        .link-hover::after { content:''; position:absolute; left:0; bottom:-1px; width:0; height:1px; background:#00bf63; transition: width 0.25s ease; }
        .link-hover:hover::after { width:100%; }
      `}</style>

      <footer
        className="relative bg-gray-950 text-white overflow-hidden"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="absolute inset-0 footer-glow pointer-events-none" />

        {/* Decorative glowing orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#00bf63] to-transparent opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Top Section ── */}
          <div className="pt-16 pb-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Logo */}
              <a href="/" className="inline-block group w-fit">
                <img src={Logoimg} alt="Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200" />
              </a>

              {/* Tagline */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[#00bf63] text-xs font-semibold tracking-widest uppercase">
                    <SparkleIcon /> 100% খাঁটি ও অর্গানিক
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  আপনার সুস্বাস্থ্যের জন্য আমরা নিশ্চিত করছি একদম মাঠ থেকে বাছাইকৃত সম্পূর্ণ ভেজালমুক্ত ও প্রাকৃতিক নিত্যপ্রয়োজনীয় পণ্য।
                </p>
              </div>

              {/* Newsletter */}
              <div className="flex flex-col gap-3">
                <p className="text-white text-sm font-semibold">
                  নতুন অফার ও আপডেট পেতে যুক্ত থাকুন
                </p>
                <Newsletter />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00bf63] hover:border-[#00bf63]/50 hover:bg-[#00bf63]/10 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerLinks.map((col) => (
                <div key={col.title}>
                  <h4 className="text-white text-sm font-bold mb-4 tracking-wide uppercase">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="link-hover text-gray-400 hover:text-[#00bf63] text-sm transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Trust Badge Strip ── */}
          <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              {["১০০% প্রিমিয়াম কোয়ালিটি", "সুরক্ষিত পেমেন্ট", "দ্রুত হোম ডেলিভারি", "২৪/৭ কাস্টমার সাপোর্ট"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00bf63] animate-pulse" />
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00bf63]" />
              All systems operational
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} গ্রোসারি শপ। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex items-center gap-5 flex-wrap justify-center">
              {["প্রাইভেসি পলিসি", "শর্তাবলী", "কুকি সেটিংস"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#00bf63] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}