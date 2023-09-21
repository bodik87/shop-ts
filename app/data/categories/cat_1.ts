import { iCategory } from "@/app/models/models";
import { categories } from "../variables";

// id from 1 to 99

export const cat_1: iCategory = {
  id: "1",
  title: categories[0].title,
  products: [
    {
      id: "1",
      title: "Амбасадор",
      images: ["/images/cat_1/prod_1/p_1.webp"],
      price: 123,
      brand: "Европа",
      color: "Червоний",
      quantity: 1,
    },
    {
      id: "2",
      title: "Якобз",
      images: ["/images/cat_1/prod_2/p_1.webp"],
      price: 300,
      brand: "Якобз",
      color: "Червоний",
      quantity: 1,
    },
  ],
};
