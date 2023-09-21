import { iProduct } from "../models/models";

export const totalPrice = (cart: iProduct[]) => {
  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};
