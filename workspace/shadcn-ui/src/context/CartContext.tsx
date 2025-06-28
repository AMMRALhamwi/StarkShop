// src/context/CartContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, Product } from "@/lib/types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string, variantName?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantName?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {}
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Load cart items from localStorage on initial render
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    const { id, variant, quantity = 1 } = product;
    
    setCartItems(prevItems => {
      // Check if the product already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        item => item.id === id && (!variant || item.variant?.name === variant?.name)
      );

      if (existingItemIndex >= 0) {
        // Update quantity if product exists
        const updatedItems = [...prevItems];
        const newQuantity = Math.min(updatedItems[existingItemIndex].quantity + quantity, 10);
        updatedItems[existingItemIndex] = { 
          ...updatedItems[existingItemIndex], 
          quantity: newQuantity 
        };
        return updatedItems;
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string, variantName?: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === productId && (!variantName || item.variant?.name === variantName))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, variantName?: string) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId && (!variantName || item.variant?.name === variantName)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};