export interface iProduct {
  id: string;
  title: string;
  images: string[];
  price: number;
  oldPrice?: number;
  brand?: string;
  size?: string;
  color?: string;
  rating?: number;
  quantity: number;
}

export interface iCategory {
  id: string;
  title: string;
  products: iProduct[];
}
