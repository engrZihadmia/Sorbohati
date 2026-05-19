import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logoimg from '../../assets/logo.png';
import { useCart } from "../CardContext/CartContext.jsx";

// ─── Icons ─────────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const NavCartIcon = ({ count }) => (
  <div className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
    {count > 0 && (
      <span className="absolute -top-2 -right-2 bg-[#00bf63] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
        {count}
      </span>
    )}
  </div>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4h6v2" />
  </svg>
);

// ─── Nav Links ─────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Shop",     href: "/shop" },
  { label: "Contact",  href: "/contact" },
];

// ─── Logo ──────────────────────────────────────────────────────────────────────
const Logo = () => (
  <a href="/" className="flex items-center flex-shrink-0">
    <img src={Logoimg} alt="Logo" className="h-12 lg:h-14 w-auto object-contain" />
  </a>
);

// ─── 🛠️ FIXED WORKABLE SEARCHBAR (ডেস্কটপ ভার্সন) ───
const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`relative flex items-center transition-all duration-300 ${focused ? "w-52" : "w-40"}`}>
      <span className={`absolute left-3 transition-colors duration-200 ${focused ? "text-[#00bf63]" : "text-gray-400"}`}>
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full pl-9 pr-4 py-2 text-sm rounded-xl border transition-all duration-300 outline-none bg-gray-50
          ${focused
            ? "border-[#00bf63] shadow-[0_0_0_3px_rgba(0,191,99,0.12)] bg-white"
            : "border-gray-200 hover:border-gray-300"}`}
      />
    </form>
  );
};

// ─── Cart Drawer ───────────────────────────────────────────────────────────────
function CartDrawer() {
  const { cartItems, removeOne, addToCart, removeItem, clearCart, totalCount, totalPrice, cartOpen, setCartOpen } = useCart();
  const items = Array.from(cartItems.values());

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen]);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const itemLines = items
      .map(item => `  • ${item.name}\n    Qty: ${item.qty} × ৳${item.price} = ৳${item.qty * item.price}`)
      .join('\n');
    const message =
      `🛒 *New Order from ShobjiBaraar*\n\n` +
      `*Order Details:*\n${itemLines}\n\n` +
      `─────────────────\n` +
      `🧾 *Total Amount: ৳${totalPrice}*\n\n` +
      `Please confirm my order and let me know the payment details. Thank you!`;
    window.open(`https://wa.me/8801998582338?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300
          ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[340px] max-w-[92vw] bg-white z-[999]
          flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
          ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
            {totalCount > 0 && (
              <p className="text-xs text-gray-400 font-medium">
                {totalCount} item{totalCount > 1 ? 's' : ''}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-400 hover:text-red-600 font-semibold px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
              >
                Clear all
              </button>
            )}
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <div className="text-5xl">🛒</div>
              <p className="text-gray-400 font-semibold text-sm">Your cart is empty</p>
              <p className="text-gray-300 text-xs">Add some products to get started</p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-2 px-5 py-2 rounded-xl bg-[#00bf63] text-white text-sm font-bold hover:bg-[#00a855] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-2xl border border-gray-100 hover:border-gray-200 bg-gray-50/50 transition-colors"
                >
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">{item.name}</p>
                    <p className="text-sm font-bold text-[#e07a2e] mt-1">৳{item.price}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Subtotal: ৳{item.price * item.qty}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => removeOne(item.id)}
                        className="w-6 h-6 rounded-lg bg-white border border-gray-200 text-gray-600 hover:border-[#00bf63] hover:text-[#00bf63] font-bold text-sm flex items-center justify-center transition-colors"
                      >−</button>
                      <span className="w-5 text-center text-sm font-bold text-gray-800">{item.qty}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 rounded-lg bg-[#00bf63] text-white font-bold text-sm flex items-center justify-center hover:bg-[#00a855] transition-colors"
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 font-medium">Total</span>
              <span className="text-xl font-bold text-gray-900">৳{totalPrice}</span>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Checkout via WhatsApp
            </button>
            <p className="text-center text-[11px] text-gray-400">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled]             = useState(false);
  const [mobileSearch, setMobileSearch]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileQuery, setMobileQuery]       = useState(""); // মোবাইল সার্চ স্টেট
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { totalCount, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ─── 🛠️ FIXED WORKABLE SEARCHBAR (মোবাইল সাবমিট হ্যান্ডলার) ───
  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    if (mobileQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(mobileQuery.trim())}`);
      setMobileSearch(false); // সার্চ শেষ হলে ইনপুট বার বন্ধ হবে
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-6px) translateX(-50%); }
          to   { opacity: 1; transform: translateY(0)   translateX(-50%); }
        }
        .animate-fade-in  { animation: fade-in 0.18s ease-out; }
        @keyframes slide-down { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 600px; } }
        .animate-slide-down { animation: slide-down 0.3s ease-out; overflow: hidden; }
      `}</style>

      <CartDrawer />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled 
            ? "bg-white py-2 border-b border-[#00bf63]/10" 
            : "bg-white/95 backdrop-blur-md py-4 border-b border-transparent"}`}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4">

            {/* Logo */}
            <Logo />

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.dropdown ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
                        ${activeDropdown === link.label
                          ? "text-[#00bf63] bg-green-50"
                          : "text-gray-800 hover:text-[#00bf63] hover:bg-green-50"}`}
                    >
                      {link.label}
                      <span className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}>
                        <ChevronDown />
                      </span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#00bf63] hover:bg-green-50 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                  {link.dropdown && activeDropdown === link.label && (
                    <DropdownMenu items={link.dropdown} />
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Search */}
              <div className="hidden sm:block"><SearchBar /></div>

              {/* Mobile Search Icon Trigger */}
              <button
                className="sm:hidden p-2 rounded-xl text-[#00bf63] hover:bg-green-50 transition-colors"
                onClick={() => setMobileSearch(!mobileSearch)}
              >
                <SearchIcon />
              </button>

              {/* 🛑 LOG IN BUTTONS REMOVED FROM ALL VIEWPORTS */}

              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="p-2 rounded-xl text-[#00bf63] hover:bg-green-50 transition-colors relative"
                aria-label="Open cart"
              >
                <NavCartIcon count={totalCount} />
              </button>

              {/* Hamburger Menu */}
              <button
                className="lg:hidden p-2 rounded-xl text-[#00bf63] hover:bg-green-50 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* 🛠️ WORKABLE MOBILE SEARCH INPUT STRIP */}
          {mobileSearch && (
            <div className="sm:hidden px-1 pb-3 animate-slide-down">
              <form onSubmit={handleMobileSearchSubmit} className="relative flex items-center">
                <span className="absolute left-3 text-[#00bf63]"><SearchIcon /></span>
                <input
                  autoFocus 
                  type="text" 
                  placeholder="Search products..."
                  value={mobileQuery}
                  onChange={(e) => setMobileQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-[#00bf63] shadow-[0_0_0_3px_rgba(0,191,99,0.12)] bg-white outline-none"
                />
              </form>
            </div>
          )}
        </div>

        {/* Mobile Drawer Links */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#00bf63] hover:bg-green-50 transition-all duration-200"
                      >
                        {link.label}
                        <span className={`text-[#00bf63] transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`}>
                          <ChevronDown />
                        </span>
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#00bf63]/20 pl-4">
                          {link.dropdown.map((item) => (
                            <a
                              key={item}
                              href={`/shop/${item.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-[#00bf63] rounded-lg hover:bg-green-50 transition-colors font-medium"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#00bf63] hover:bg-green-50 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              {/* 🛑 MOBILE ACCOUNTS STRIP REMOVED */}
            </div>
          </div>
        )}
      </header>

      {/* Spacer matching fixed nav */}
      <div className="h-20 lg:h-22" />
    </>
  );
}