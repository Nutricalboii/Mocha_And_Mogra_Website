import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { products, type Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, size?: string) => void;
  removeItem: (productId: number | string, size?: string) => void;
  updateQuantity: (productId: number | string, quantity: number, size?: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // Pre-populated with 1 quantity of each product for testing purposes
  const [items, setItems] = useState<CartItem[]>(() =>
    products.map((product) => ({ product, quantity: 1 }))
  );

  const addItem = useCallback((product: Product, size?: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === size ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1, size }];
    });
  }, []);

  const removeItem = useCallback((productId: number | string, size?: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.size === size)));
  }, []);

  const updateQuantity = useCallback((productId: number | string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.size === size)));
    } else {
      setItems((prev) =>
        prev.map((i) => i.product.id === productId && i.size === size ? { ...i, quantity } : i)
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
