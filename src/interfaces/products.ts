export interface Images {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}

export interface Products {
  productId: number;
  title: string;
  name: string;
  category: string;
  style: string;
  price: number;
  productRating: number;
  mainImage: string;
  priceDiscount?: number;
  images: Images[];
  about?: string;
  subStyle?: string;
}
