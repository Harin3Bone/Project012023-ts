import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { definedStore } from "helpers/*";

type CartItem = {
  id: number;
  price: number;
  quantity: number;
};

type UseManageCartDataStoreType = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
};

const useManageCartDataStore = create<UseManageCartDataStoreType>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        addItemToCart: (item: CartItem) => {
          set(
            (state) => {
              const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
              if (existingItem) {
                return {
                  cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                      : cartItem,
                  ),
                };
              } else {
                return { cartItems: [item, ...state.cartItems] };
              }
            },false,{ type: "addItemToCart" },
          );
        },
        removeFromCart: (itemId: number) => {
          set(
            (state) => ({
              cartItems: state.cartItems.filter((cartItem) => cartItem.id !== itemId),
            }),false,{ type: "removeFromCart" },
          );
        },
      }),
      { name: "cart-data" },
    ),
    definedStore("useManageCartDataStore"),
  ),
);

export default useManageCartDataStore;
