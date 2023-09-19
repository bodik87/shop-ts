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
    title: "Амбасадор",
    categoryId: categories[0].id,
    images: ["/images/cat_1/prod_1/p_1.webp"],
    price: 123,
    parametrs: {
      brand: "Виробник 1",
      color: "Червоний",
    },
  },
  {
    id: "2",
    title: "Якобз",
    categoryId: categories[0].id,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 2300,
    oldPrice: 4000,
    parametrs: {
      brand: "Виробник 2",
      color: "Зелений",
    },
  },
  {
    id: "3",
    title: "Товар 3",
    categoryId: categories[1].id,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 300,
    parametrs: {
      brand: "Виробник 2",
    },
  },
  {
    id: "4",
    title: "Ковбаса",
    categoryId: categories[0].id,
    images: ["/images/cat_1/prod_2/p_1.webp"],
    price: 400,
    parametrs: {
      brand: "Виробник 4",
    },
  },
];
