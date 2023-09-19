export interface ICategory {
  id: string;
  title: string;
}

export interface iProduct {
  id: string;
  title: string;
  categoryId: string;
  images: string[];
  price: number;
  oldPrice?: number;
  parametrs: iProductParametr;
}

export interface iProductParametr {
  brand?: string;
  size?: string;
  color?: string;
}
