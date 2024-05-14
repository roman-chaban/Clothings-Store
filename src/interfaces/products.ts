export interface Products {
  productId?: number;
  title: string;
  name: string;
  category: string;
  style: string;
  price: number;
  productRating: number;
  mainImage: string;
  priceDiscount?: number;
  images?: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
  }[];
  about?: string;
  subStyle?: string;
}
