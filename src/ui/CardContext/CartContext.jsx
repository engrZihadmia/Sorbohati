import { createContext, useContext, useState } from "react";

// ─── Cart Context ──────────────────────────────────────────────────────────────
// Wrap your <App /> (or root layout) with <CartProvider> so both
// Navbar and ShopSection share the same cart state.
//
// Usage in App.jsx / main layout:
//   import { CartProvider } from "./CartContext";
//   <CartProvider> <Navbar /> <ShopSection /> </CartProvider>

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(new Map()); // Map<id, {product, qty}>
  const [cartOpen, setCartOpen]   = useState(false);

  // Add one unit of a product
  const addToCart = (product) => {
    setCartItems(prev => {
      const next = new Map(prev);
      const existing = next.get(product.id);
      next.set(product.id, {
        ...product,
        qty: (existing?.qty || 0) + 1,
      });
      return next;
    });
  };

  // Remove one unit; remove entry if qty reaches 0
  const removeOne = (id) => {
    setCartItems(prev => {
      const next = new Map(prev);
      const item = next.get(id);
      if (!item) return prev;
      if (item.qty <= 1) next.delete(id);
      else next.set(id, { ...item, qty: item.qty - 1 });
      return next;
    });
  };

  // Remove entire item
  const removeItem = (id) => {
    setCartItems(prev => { const n = new Map(prev); n.delete(id); return n; });
  };

  const clearCart = () => setCartItems(new Map());

  const totalCount = Array.from(cartItems.values()).reduce((s, i) => s + i.qty, 0);
  const totalPrice = Array.from(cartItems.values()).reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeOne, removeItem, clearCart,
      totalCount, totalPrice,
      cartOpen, setCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
};
