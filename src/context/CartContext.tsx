import React, { useContext, createContext, ReactNode, useState } from "react";

interface useCartProviderProps {
  children: ReactNode;
}
interface CartContextTypes {
  getItems: (id: number) => number;
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  RemoveFromCart: (id: number) => void;
}

interface CartItems {
  id: number;
  count: number;
}
const CartContext = createContext({} as CartContextTypes);

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }: useCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  function getItems(id: number) {
    return cartItems.find((item) => item.id === id)?.count || 0;
  }

  function increaseCart(id: number) {
    setCartItems((prevItem) => {
      if (prevItem.find((item) => item.id === id) == null) {
        return [...prevItem, { id, count: 1 }];
      } else {
        return prevItem.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCart(id: number) {
    setCartItems((prevItem) => {
      if (prevItem.find((item) => item.id === id)?.count === 1) {
        return prevItem.filter((item) => item.id !== id);
      } else {
        return prevItem.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function RemoveFromCart(id: number) {
    setCartItems((prvItem) => {
      return prvItem.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{ getItems, increaseCart, decreaseCart, RemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
