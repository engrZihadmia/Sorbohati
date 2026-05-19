import React, { useState, useMemo, useRef } from 'react';
import { useCart } from "../CartContext"; // adjust path as needed

// ─── Product Data ───────────────────────────────────────────────────────────
// 👉 Replace / extend this array with your real product data
const productsData = [
  {
    id: 1, name: "Chili (Morich) Powder 500g", category: "Cooking Essentials",
    price: 400, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 2, name: "Rice Flour (Chaler Gura) 2kg", category: "Cooking Essentials",
    price: 200, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 3, name: "Turmeric (Holud) Powder 500g", category: "Cooking Essentials",
    price: 295, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 4, name: "Gawa Ghee 500gm", category: "Cooking Essentials",
    price: 850, oldPrice: 900, badge: "Save 6%",
    image: "https://images.unsplash.com/photo-1631209121750-a9f656d28f24?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 5, name: "Laal Atta 2kg", category: "Cooking Essentials",
    price: 200, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 6, name: "Mustard Oil 1L", category: "Cooking Essentials",
    price: 320, oldPrice: 360, badge: "Save 11%",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 7, name: "Organic Wild Honey 500g", category: "Organic Certified",
    price: 650, oldPrice: 740, badge: "Save 12%",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 8, name: "Organic Spirulina Powder 100g", category: "Organic Certified",
    price: 890, oldPrice: 940, badge: "Save 5%", newArrival: true,
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 9, name: "Organic Matcha Green Tea 50g", category: "Organic Certified",
    price: 720, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 10, name: "Organic Ashwagandha Powder 100g", category: "Organic Certified",
    price: 560, oldPrice: null, badge: null, newArrival: true,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 11, name: "Ceylon Coconut Oil 500ml", category: "Organic Certified",
    price: 480, oldPrice: null, badge: null,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&auto=format&fit=crop&q=70"
  },
  {
    id: 12, name: "Chia Seeds 200g", category: "Organic Certified",
    price: 380, oldPrice: 420, badge: "Save 10%", newArrival: true,
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=400&auto=format&fit=crop&q=70"
  },
];

const CATEGORIES = ['All', 'Cooking Essentials', 'Organic Certified'];

// 👉 Replace this URL with your own banner image
const BANNER_IMAGE = "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&auto=format&fit=crop&q=80";

// ─── Icons ───────────────────────────────────────────────────────────────────
const MiniCartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = cartItems.has(product.id);

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #ede8e0',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transition: 'box-shadow 0.25s, transform 0.25s',
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.13)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '1', background: '#fff9f3', overflow: 'hidden' }}>
        <img
          src={product.image} alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          loading="lazy"
        />
        {product.badge && (
          <span style={{
            position: 'absolute', top: 8, right: 8,
            background: '#3d8c4a', color: '#fff',
            fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 20,
          }}>{product.badge}</span>
        )}
        {product.newArrival && (
          <span style={{
            position: 'absolute', top: 8, left: 8,
            background: '#e07a2e', color: '#fff',
            fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 20,
          }}>New Arrival</span>
        )}
        {inCart && (
          <span style={{
            position: 'absolute', bottom: 8, right: 8,
            background: '#3d8c4a', color: '#fff',
            fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 20,
          }}>In Cart ✓</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '12px 12px 14px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#1e1e1e', lineHeight: 1.4 }}>{product.name}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: '#e07a2e' }}>৳{product.price}</span>
          {product.oldPrice && (
            <span style={{ fontSize: 12, color: '#999', textDecoration: 'line-through' }}>৳{product.oldPrice}</span>
          )}
        </div>
        <button
          onClick={handleAdd}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            width: '100%', padding: '9px 10px',
            background: justAdded ? '#3d8c4a' : '#fff',
            border: `1.5px solid ${justAdded ? '#3d8c4a' : '#e07a2e'}`,
            color: justAdded ? '#fff' : '#e07a2e',
            borderRadius: 9, cursor: 'pointer',
            fontFamily: 'inherit', fontSize: 12, fontWeight: 800,
            transition: 'all 0.2s', marginTop: 'auto', letterSpacing: 0.2,
          }}
          onMouseEnter={e => { if (!justAdded) { e.currentTarget.style.background = '#e07a2e'; e.currentTarget.style.color = '#fff'; }}}
          onMouseLeave={e => { if (!justAdded) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#e07a2e'; }}}
        >
          <MiniCartIcon />
          {justAdded ? 'Added!' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
}

// ─── Horizontal Category Row ──────────────────────────────────────────────────
function CategoryRow({ title, products }) {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <section style={{ marginBottom: 44 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 8 }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px,3vw,22px)', fontWeight: 700, color: '#1e1e1e' }}>{title}</h2>
          <div style={{ width: 42, height: 3, background: '#e07a2e', borderRadius: 2, marginTop: 6 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#" style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.8px', color: '#e07a2e', textDecoration: 'none' }}>
            VIEW ALL ITEMS →
          </a>
          <div style={{ display: 'flex', gap: 4 }}>
            {[[-1, canLeft, <ChevronLeft key="l"/>], [1, canRight, <ChevronRight key="r"/>]].map(([dir, enabled, icon]) => (
              <button key={dir} onClick={() => scroll(dir)} style={{
                background: '#fff', border: '1px solid #ede8e0', borderRadius: 8,
                width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: enabled ? 'pointer' : 'default', color: '#1e1e1e', opacity: enabled ? 1 : 0.3,
                transition: 'all 0.15s',
              }}>
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Row */}
      <div ref={scrollRef} onScroll={checkScroll} style={{
        display: 'flex', gap: 16,
        overflowX: 'auto', scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
        paddingBottom: 8,
      }}>
        {products.map(p => (
          <div key={p.id} style={{ flex: '0 0 clamp(155px, 20vw, 200px)', scrollSnapAlign: 'start' }}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Promo Banner ─────────────────────────────────────────────────────────────
function PromoBanner() {
  return (
    <div style={{
      position: 'relative', borderRadius: 18, overflow: 'hidden',
      marginBottom: 44, minHeight: 260, background: '#1a1008',
    }}>
      <img
        src={BANNER_IMAGE} alt="Promo Banner"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(10,6,2,0.85) 0%, rgba(10,6,2,0.5) 55%, rgba(10,6,2,0.1) 100%)',
      }} />
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(28px,5vw,52px)', minHeight: 260, maxWidth: 520,
      }}>
        <p style={{ fontFamily: 'inherit', fontWeight: 800, fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: '#f5a058', marginBottom: 14 }}>
          ✦ সেরা মানের পণ্য
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.25,
          color: '#fff', marginBottom: 16, textShadow: '0 2px 16px rgba(0,0,0,0.6)',
        }}>
          সেরা স্বাদে রান্না<br />হোক স্বস্তিতে
        </h2>
        <p style={{ fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: 24 }}>
          ১০০% প্রাকৃতিক মশলা ও জৈব পণ্য —<br />সরাসরি আপনার দরজায়
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['🌱 Organic', '✓ 100% Pure', '🚚 Fast Delivery'].map(b => (
            <span key={b} style={{
              background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontWeight: 700, fontSize: 12, padding: '6px 14px', borderRadius: 20,
            }}>{b}</span>
          ))}
        </div>
      </div>
      {/* 👉 Remove this hint once you replace the banner image */}
      <div style={{
        position: 'absolute', bottom: 12, right: 16, zIndex: 3,
        background: 'rgba(0,0,0,0.5)', borderRadius: 6, padding: '4px 10px',
        fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 600,
      }}>
        📷 Replace BANNER_IMAGE with your photo
      </div>
    </div>
  );
}

// ─── Sidebar Content ──────────────────────────────────────────────────────────
function SidebarContent({ activeCategory, setActiveCategory, sortOrder, setSortOrder, maxPrice, setMaxPrice, onReset }) {
  return (
    <div style={{ fontFamily: "'Sora', sans-serif" }}>
      <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', color: '#999', marginBottom: 20 }}>
        Filter & Sort
      </p>

      {/* Categories */}
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', color: '#999', marginBottom: 10, display: 'block' }}>
          Categories
        </span>
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setActiveCategory(c)} style={{
            display: 'block', width: '100%', textAlign: 'left',
            background: activeCategory === c ? '#00bf63' : 'none',
            border: 'none', fontFamily: "'Sora', sans-serif",
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            color: activeCategory === c ? '#fff' : '#555',
            padding: '8px 12px', borderRadius: 8, marginBottom: 2,
            transition: 'all 0.15s',
          }}>
            {c}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', color: '#999', marginBottom: 10, display: 'block' }}>
          Sort by Price
        </span>
        {[['lowToHigh', 'Low to High ↑'], ['highToLow', 'High to Low ↓']].map(([val, label]) => (
          <button key={val} onClick={() => setSortOrder(sortOrder === val ? 'default' : val)} style={{
            display: 'block', width: '100%', textAlign: 'left',
            background: sortOrder === val ? '#1e1e1e' : 'none',
            border: '1px solid #ede8e0', fontFamily: "'Sora', sans-serif",
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            color: sortOrder === val ? '#fff' : '#555',
            padding: '8px 12px', borderRadius: 8, marginBottom: 6,
            transition: 'all 0.15s',
          }}>{label}</button>
        ))}
      </div>

      {/* Price Slider */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', color: '#999' }}>Max Price</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: '#e07a2e' }}>৳{maxPrice}</span>
        </div>
        <input
          type="range" min="50" max="1000" step="10" value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#00bf63', height: 4, cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#999', marginTop: 4 }}>
          <span>৳50</span><span>৳1000</span>
        </div>
      </div>

      <button onClick={onReset} style={{
        display: 'block', width: '100%', textAlign: 'left',
        background: 'none', border: '1px solid #ede8e0', fontFamily: "'Sora', sans-serif",
        fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#555',
        padding: '8px 12px', borderRadius: 8, transition: 'all 0.15s',
      }}>↺ Reset All</button>
    </div>
  );
}

// ─── Main ShopSection ─────────────────────────────────────────────────────────
export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder]           = useState('default');
  const [maxPrice, setMaxPrice]             = useState(1000);
  const [sidebarOpen, setSidebarOpen]       = useState(false);

  const filtered = useMemo(() => {
    let r = productsData.filter(p =>
      (activeCategory === 'All' || p.category === activeCategory) && p.price <= maxPrice
    );
    if (sortOrder === 'lowToHigh') r = [...r].sort((a, b) => a.price - b.price);
    if (sortOrder === 'highToLow') r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [activeCategory, sortOrder, maxPrice]);

  const sections = activeCategory === 'All' ? ['Cooking Essentials', 'Organic Certified'] : [activeCategory];
  const reset = () => { setActiveCategory('All'); setSortOrder('default'); setMaxPrice(1000); };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      <style>{`
        .shop-sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 150; }
        .shop-sidebar-drawer  { position: fixed; top: 0; left: -280px; width: 260px; height: 100vh; background: #fff; z-index: 151; transition: left 0.3s ease; padding: 24px 18px; overflow-y: auto; box-shadow: 4px 0 24px rgba(0,0,0,0.12); }
        .shop-sidebar-drawer.open { left: 0 !important; }
        .shop-cards-track::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          .shop-desktop-sidebar { display: none !important; }
          .shop-filter-btn      { display: flex !important; }
          .shop-sidebar-overlay { display: block; }
        }
      `}</style>

      {/* Mobile sidebar overlay */}
      <div
        className="shop-sidebar-overlay"
        style={{ opacity: sidebarOpen ? 1 : 0, pointerEvents: sidebarOpen ? 'all' : 'none', transition: 'opacity 0.25s' }}
        onClick={() => setSidebarOpen(false)}
      />
      <div className={`shop-sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
        <button onClick={() => setSidebarOpen(false)} style={{ float: 'right', background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#555', marginBottom: 12 }}>✕</button>
        <SidebarContent activeCategory={activeCategory} setActiveCategory={setActiveCategory} sortOrder={sortOrder} setSortOrder={setSortOrder} maxPrice={maxPrice} setMaxPrice={setMaxPrice} onReset={reset} />
      </div>

      {/* Outer wrapper */}
      <div style={{ background: '#faf6f0', minHeight: '60vh', fontFamily: "'Sora', sans-serif" }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(20px,3vw,28px) clamp(14px,3vw,20px)', display: 'flex', gap: 28, alignItems: 'flex-start' }}>

          {/* Desktop Sidebar */}
          <aside className="shop-desktop-sidebar" style={{
            width: 230, flexShrink: 0, background: '#fff',
            borderRadius: 14, border: '1px solid #ede8e0',
            padding: '24px 18px', position: 'sticky', top: 88,
          }}>
            <SidebarContent activeCategory={activeCategory} setActiveCategory={setActiveCategory} sortOrder={sortOrder} setSortOrder={setSortOrder} maxPrice={maxPrice} setMaxPrice={setMaxPrice} onReset={reset} />
          </aside>

          {/* Main */}
          <main style={{ flex: 1, minWidth: 0 }}>

            {/* Mobile filter button */}
            <button
              className="shop-filter-btn"
              onClick={() => setSidebarOpen(true)}
              style={{
                display: 'none', alignItems: 'center', gap: 6,
                background: '#fff3e8', border: '1px solid #e07a2e',
                color: '#e07a2e', fontFamily: "'Sora', sans-serif",
                fontWeight: 700, fontSize: 13,
                padding: '8px 16px', borderRadius: 9, cursor: 'pointer',
                marginBottom: 20,
              }}
            >
              ☰ Filters
            </button>

            {filtered.length === 0 ? (
              <div style={{ background: '#fff', border: '1px solid #ede8e0', borderRadius: 14, padding: '60px 20px', textAlign: 'center' }}>
                <p style={{ color: '#999', fontSize: 15, marginBottom: 12 }}>No products match your filters.</p>
                <button onClick={reset} style={{ background: 'none', border: 'none', fontFamily: 'inherit', fontWeight: 800, fontSize: 13, color: '#e07a2e', textDecoration: 'underline', cursor: 'pointer' }}>
                  Reset Filters
                </button>
              </div>
            ) : (
              sections.map((section, idx) => {
                const sectionProducts = filtered.filter(p => p.category === section);
                if (sectionProducts.length === 0) return null;
                return (
                  <React.Fragment key={section}>
                    <CategoryRow title={section} products={sectionProducts} />
                    {idx === 0 && activeCategory === 'All' && <PromoBanner />}
                  </React.Fragment>
                );
              })
            )}
          </main>
        </div>
      </div>
    </>
  );
}
