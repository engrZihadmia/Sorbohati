import storyImage from "../../assets/ourstory.jpg"; // আপনার এসেট ইমেজ

export default function OurStory() {
  return (
    <section className="bg-[#f5f0ea]/30 py-16 sm:py-24 border-t border-b border-gray-100" style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* বাম পাশ: ইমেজ কন্টেইনার */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#00bf63] rounded-2xl transform rotate-3 scale-[1.02] opacity-5 pointer-events-none"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100 p-3">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" // ডামি ইমেজ
                // src={storyImage} // আপনার লোকাল ইমেজ আনকমেন্ট করতে পারেন
                alt="Our Journey" 
                className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* ডান পাশ: কন্টেন্ট */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[#00bf63] text-xs sm:text-sm font-bold uppercase tracking-wider block">আমাদের গল্প</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">যেভাবে শুরু হয়েছিল আমাদের এই পথচলা...</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              বাজারে যখন ভেজাল এবং কেমিক্যালের ছড়াছড়ি, তখন নিজেদের পরিবারের জন্য একটু খাঁটি এবং নিরাপদ খাদ্য খুঁজে পাওয়াটাই ছিল এক বড় চ্যালেঞ্জ। ঠিক সেই অভাব বোধ থেকেই আমাদের এই উদ্যোগের জন্ম। 
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              আমরা ছোট পরিসরে সরাসরি গ্রাম থেকে খাঁটি সরিষার তেল ও ঘি সংগ্রহের মাধ্যমে যাত্রা শুরু করি। আজ হাজারো পরিবারের প্রতিদিনের খাঁটি অর্গানিক খাদ্যের বিশ্বস্ত ঠিকানা হতে পেরে আমরা গর্বিত। আমরা প্রতিটি পণ্যের স্বাদ এবং পুষ্টিগুণ অক্ষুণ্ণ রাখতে শতভাগ আপসহীন।
            </p>
            
            {/* কোটেশন ভাইব */}
            <div className="border-l-4 border-[#00bf63] pl-4 italic text-gray-700 text-sm sm:text-base font-medium py-1 bg-white/60 rounded-r-xl">
              "আপনার ও আপনার পরিবারের সুস্বাস্থ্য নিশ্চিত করাই আমাদের প্রথম এবং প্রধান লক্ষ্য।"
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}