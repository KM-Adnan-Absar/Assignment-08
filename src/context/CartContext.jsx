import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Add item to wishlist
  const addToWishlist = (item) => {
    setWishlist((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, wishlist, setWishlist, addToCart, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};
