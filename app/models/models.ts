export interface iProduct {
  id: string;
  title: string;
  price: number;
  images: string[];
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

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}
