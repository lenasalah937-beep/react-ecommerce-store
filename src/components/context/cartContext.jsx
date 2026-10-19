import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export default function Cart({ children }) {
  // favorites
  const [favorites, setfavorites] = useState(() => {
    const savedfav = localStorage.getItem("favoritesItem");
    return savedfav ? JSON.parse(savedfav) : [];
  });

  const AddTofavorites = (item) => {
    setfavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  useEffect(() => {
    localStorage.setItem("favoritesItem", JSON.stringify(favorites));
  }, [favorites]);

  const removefav = (id) => {
    setfavorites((prev) => prev.filter((i) => i.id !== id));
  };

  // cart
  const [CartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //increaseQuantity
  const increaseQuantity = (id) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  //decreaseQuantity

  const decreaseQuantity = (id) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  //removeFromCart

  const removeFromCart = (id) => {
    setCartItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const AddToCart = (item) => {
    setCartItem((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(CartItem));
  }, [CartItem]);

  return (
    <cartContext.Provider
      value={{
        CartItem,
        AddToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        favorites,
        AddTofavorites,
        removefav,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
