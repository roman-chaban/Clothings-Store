export interface Images {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}

export interface Clothings {
  productId: string;
  name: string;
  title: string;
  category: string;
  price: number;
  priceDiscount: number;
  productRating: number;
  mainImage: string;
  subStyle: string;
  style: string;
  about: string;
  images: Images[];
}
