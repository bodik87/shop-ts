import { ICategory, iProduct } from "../models/models";

export const categories: ICategory[] = [
  { id: "1", title: "Назва категорії 1" },
  { id: "2", title: "Друга категорія" },
  { id: "3", title: "Категорія 3" },
  { id: "4", title: "Категорія 4" },
];

export const products: iProduct[] = [
  {
    id: "1",
    title: "Товар 1",
    categoryId: categories[0].id,
    images: ["/images/cat_1/prod_1/p_1.webp"],
    price: 123,
    parametrs: {
      size: "XL",
    },
  },
  {
    id: "2",
    title: "Товар 2",
    categoryId: categories[0].id,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 2300,
    oldPrice: 4000,
    parametrs: {},
  },
  {
    id: "3",
    title: "Товар 3",
    categoryId: categories[1].id,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 300,
    parametrs: {},
  },
];
