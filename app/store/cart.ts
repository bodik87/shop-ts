import { create } from "zustand";
import { iProduct } from "../models/models";

type Store = {
  count: number;
  inc: (num: number) => void;
};

const value =
  typeof window !== "undefined" ? window.localStorage.getItem("cart") : false;

const cart: iProduct[] = value && JSON.parse(localStorage.cart);

const totalPrice =
  cart &&
  cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

export const useCartStore = create<Store>()((set) => ({
  count: totalPrice,
  inc: (num) => set((state) => ({ count: state.count + num })),
}));
