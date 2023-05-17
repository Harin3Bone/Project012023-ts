import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { definedStore } from "helpers/*";

type CartItem = {
  id: number;
  timestamp: number;
  quantity: number;
};

export type UserCart = {
  email: string;
  items: CartItem[];
};

export type UseManageCartDataStoreType = {
  userCarts: UserCart[];
  addItemToCart: (email: string, item: CartItem) => void;
  removeFromCart: (email: string, itemId: number) => void;
};

const useManageCartDataStore = create<UseManageCartDataStoreType>()(
  devtools(
    persist(
      (set) => ({
        userCarts: [],
        addItemToCart: (email, item) => {
          set(
            (state) => {
              const userCart =
              state.userCarts && state.userCarts.find((user) => user.email === email);
              
            if (userCart) {
              const existingItem = userCart.items.find((cartItem) => cartItem.id === item.id);

              if (existingItem) {
                const updatedItems = userCart.items.map((cartItem) =>
                  cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem
                );
                return {
                  userCarts: state.userCarts.map((userCart) =>
                    userCart.email === email ? { ...userCart, items: updatedItems } : userCart
                  ),
                };
              } else {
                return {
                  userCarts: state.userCarts.map((userCart) =>
                    userCart.email === email
                      ? { ...userCart, items: [...userCart.items, item] }
                      : userCart
                  ),
                };
              }
            } else {
              return {
                userCarts: [...state.userCarts, { email, items: [item] }],
              };
            }
          },
            false,
            { type: "addItemToCart" },
          );
        },
        removeFromCart: (email, itemId) => {
          set(
            (state) => {
              const userCart =
                state.userCarts && state.userCarts.find((user) => user.email === email);
              if (userCart) {
                const updatedItems = userCart.items.filter((item) => item.id !== itemId);
                return {
                  userCarts: state.userCarts.map((userCart) =>
                    userCart.email === email ? { ...userCart, items: updatedItems } : userCart,
                  ),
                };
              }
              return state;
            },
            false,
            { type: "removeFromCart" },
          );
        },
      }),
      { name: "cart-data" },
    ),
    definedStore("useManageCartDataStore"),
  ),
);

export default useManageCartDataStore;
//find: เมธอดนี้จะคืนค่า element แรกใน array ที่ผ่าน function ที่เรากำหนด (ในที่นี้คือ function ที่เช็คว่า cartItem.id === item.id หรือไม่). ถ้าไม่มี element ใดผ่าน function ที่เรากำหนด, มันจะคืนค่า undefined
//filter: เมธอดนี้จะสร้าง array ใหม่ที่ประกอบไปด้วย element ทุกตัวใน array ที่เดิมที่ผ่าน function ที่เรากำหนด. นั่นคือ, มันจะคืนค่า array ใหม่ที่มีเฉพาะ element ที่เราต้องการ.