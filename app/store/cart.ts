"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { iProduct } from "../models/models";

type CartState = {
  cart: iProduct[];
  addToCart: (item: iProduct) => void;
  // clearCart: () => void;
  // removeProduct: (item: iProduct[]) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem: any) => cartItem.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem: any) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      // removeProduct: (item) =>
      //   set((state) => {
      //     const existingItem = state.cart.find(
      //       (cartItem: iProduct) => cartItem.id === item.id
      //     );
      //     if (existingItem && existingItem.quantity! > 1) {
      //       const updatedCart = state.cart.map((cartItem: any) => {
      //         if (cartItem.id === item.id) {
      //           return { ...cartItem, quantity: cartItem.quantity! - 1 };
      //         }
      //         return cartItem;
      //       });
      //       return { cart: updatedCart };
      //     } else {
      //       const filteredCart = state.cart.filter(
      //         (cartItem: any) => cartItem.id !== item.id
      //       );
      //       return { cart: filteredCart };
      //     }
      //   }),
      // clearCart: () => set((state) => ({ cart: [] })),
    }),

    { name: "cart-store" }
  )
);
