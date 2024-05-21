import { Products } from '@/interfaces/products';
import products from '@/api/products/products.json';
import clothings from '@/api/clothing/clothing.json';
import accessories from '@/api/accessories/accessories.json';

export interface Categories {
  products: {
    data: Products[];
    title: string;
    pageTitle: string;
    link: string;
  };
  clothings: {
    data: Products[];
    title: string;
    pageTitle: string;
    link: string;
  };
  accessories: {
    data: Products[];
    title: string;
    pageTitle: string;
    link: string;
  };
}

export const categories: Categories = {
  products: {
    data: products,
    title: "Men's Sneakers",
    pageTitle: "Clothings store | Men's Sneakers",
    link: '/sneakers/sneaker/',
  },
  clothings: {
    data: clothings,
    title: 'Clothings',
    pageTitle: 'Clothings store | Clothings',
    link: '/clothings/',
  },
  accessories: {
    data: accessories,
    title: 'Accessories',
    pageTitle: 'Clothings store | Accessories',
    link: '/accessories/',
  },
};
