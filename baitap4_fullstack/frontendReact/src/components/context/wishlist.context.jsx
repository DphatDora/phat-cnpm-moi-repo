import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Error loading wishlist from localStorage:", error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever wishlistItems changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems(prevItems => {
      const isAlreadyInWishlist = prevItems.find(item => item.id === product.id);
      if (!isAlreadyInWishlist) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlistItems.find(item => item.id === product.id);
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    getWishlistCount,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};