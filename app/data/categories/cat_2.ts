import { iCategory } from "@/app/models/models";
import { categories } from "./categories";

export const cat_2: iCategory = {
  id: "2",
  title: categories[1].title,
  products: [
    {
      id: "1",
      title: "Амбасадор",
      images: ["/images/cat_1/prod_1/p_1.webp"],
      price: 60,
      brand: "Европа",
      color: "Червоний",
      quantity: 1,
    },
    {
      id: "2",
      title: "Якобз",
      images: ["/images/cat_1/prod_2/p_1.webp"],
      price: 30,
      brand: "Якобз",
      color: "Червоний",
      quantity: 1,
    },
    {
      id: "3",
      title: "Амбасадор",
      images: ["/images/cat_1/prod_1/p_1.webp"],
      price: 160,
      brand: "Европа",
      color: "Червоний",
      quantity: 1,
    },
    {
      id: "4",
      title: "Якобз",
      images: ["/images/cat_1/prod_2/p_1.webp"],
      price: 230,
      brand: "Якобз",
      color: "Червоний",
      quantity: 1,
    },
  ],
};
