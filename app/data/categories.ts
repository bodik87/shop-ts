import { ICategory, iProduct } from "../models/models";

export const categories: ICategory[] = [
  { id: "1", title: "Категорія 1" },
  { id: "2", title: "Категорія 2" },
  { id: "3", title: "Категорія 3" },
  { id: "4", title: "Категорія 4" },
  { id: "5", title: "Категорія 5" },
  { id: "6", title: "Категорія 6" },
  { id: "7", title: "Категорія 7" },
  { id: "8", title: "Категорія 8" },
  { id: "9", title: "Категорія 9" },
];

export const products: iProduct[] = [
  {
    id: "1",
    title: "Товар 1",
    category: categories[0].title,
    images: ["/images/cat_1/prod_1/p_1.webp"],
    price: 123,
    parametrs: {
      size: "XL",
    },
  },
  {
    id: "2",
    title: "Товар 2",
    category: categories[0].title,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 2300,
    oldPrice: 4000,
    parametrs: {},
  },
  {
    id: "3",
    title: "Товар 3",
    category: categories[1].title,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 300,
    parametrs: {},
  },
];
