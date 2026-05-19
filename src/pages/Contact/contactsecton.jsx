import { useState } from "react";

export default function ContactMainSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // সাবমিশন স্টেট হ্যান্ডেল করার জন্য ২টি নতুন স্টেট
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({ success: null, message: "" });

    // Web3Forms এর রিকোয়ারমেন্ট অনুযায়ী ডেটা অবজেক্ট তৈরি
    const dataToSend = {
      access_key: "8c4d6d03-aa94-49fb-8466-9eddc0a0d7db", // তোমার পাবলিক অ্যাক্সেস কি
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult({
          success: true,
          message: "আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! আমরা দ্রুত যোগাযোগ করব।",
        });
        // ফর্ম রিসেট করা
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitResult({
          success: false,
          message: result.message || "দুঃখিত, বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।",
        });
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setSubmitResult({
        success: false,
        message: "নেটওয়ার্ক সমস্যার কারণে বার্তা পাঠানো যায়নি।",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#fcfbf9] py-16 sm:py-24" style={{ fontFamily: "'Hind Siliguri', 'Sora', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── বাম পাশ: ব্র্যান্ড কন্টাক্ট কার্ড ও ইনফো (৫ কলাম) ── */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#064e3b] text-xs font-bold tracking-widest uppercase block mb-2">
                We'd Love to Hear From You
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                আমাদের সাথে সরাসরি <br />যোগাযোগের মাধ্যম
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed font-light">
                আপনার যেকোনো মতামত, পাইকারি অর্ডার বা অভিযোগ আমাদের জানাতে পারেন। আমাদের কাস্টমার সাপোর্ট টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>

            {/* কাজের সময় কার্ড */}
            <div className="bg-[#064e3b] text-white p-6 rounded-2xl shadow-xl shadow-[#064e3b]/5 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-[#ccff00] mb-3 uppercase tracking-wide">আমাদের সময়সূচী</h3>
              <div className="space-y-2 text-sm text-gray-100">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>শনিবার - বৃহস্পতিবার:</span>
                  <span className="font-semibold">সকাল ৯:০০ - রাত ৮:০০</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>শুক্রবার:</span>
                  <span className="text-[#ccff00] font-medium">সাপ্তাহিক ছুটি</span>
                </div>
              </div>
            </div>

            {/* সোশ্যাল মিডিয়া কানেক্ট */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">সোশ্যাল মিডিয়ায় আমরা</h4>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'WhatsApp', 'LinkedIn'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 text-xs font-medium text-[#064e3b] bg-white border border-[#064e3b]/10 rounded-xl hover:bg-[#064e3b] hover:text-white transition-all duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── ডান পাশ: প্রিমিয়াম কন্টাক্ট ফর্ম কার্ড (৭ কলাম) ── */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 relative">
            
            {/* টপ ডেকোরেশন লাইন */}
            <div className="absolute top-0 left-10 right-10 h-[4px] bg-gradient-to-r from-[#064e3b] via-[#ccff00] to-[#064e3b] rounded-b-full"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* নাম এবং ইমেইল (এক লাইনে ২ কলাম) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                    className="w-full px-4 py-3.5 bg-gray-50/60 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#064e3b] focus:ring-4 focus:ring-[#064e3b]/5 outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3.5 bg-gray-50/60 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#064e3b] focus:ring-4 focus:ring-[#064e3b]/5 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* ফোন এবং সাবজেক্ট (এক লাইনে ২ কলাম) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3.5 bg-gray-50/60 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#064e3b] focus:ring-4 focus:ring-[#064e3b]/5 outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="যোগাযোগের মূল বিষয়"
                    className="w-full px-4 py-3.5 bg-gray-50/60 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#064e3b] focus:ring-4 focus:ring-[#064e3b]/5 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* মেসেজ বক্স */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="আপনার বার্তাটি এখানে বিস্তারিত লিখুন..."
                  className="w-full px-4 py-3.5 bg-gray-50/60 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#064e3b] focus:ring-4 focus:ring-[#064e3b]/5 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* সাকসেস বা এরর মেসেজ অ্যালার্ট ব্যানার */}
              {submitResult.success !== null && (
                <div className={`p-4 rounded-xl text-sm font-medium border ${
                  submitResult.success 
                    ? "bg-green-50 border-green-200 text-green-800" 
                    : "bg-red-50 border-red-200 text-red-800"
                }`}>
                  {submitResult.message}
                </div>
              )}

              {/* প্রফেশনাল সাবমিট বাটন (Loading state সহ) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-[#ccff00] text-white hover:text-black px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#064e3b]/10 hover:shadow-[#ccff00]/20 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  {!isSubmitting && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}