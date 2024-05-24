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
    pageTitle: "Men's Sneakers",
    link: '/sneakers/sneaker/',
  },
  clothings: {
    data: clothings,
    title: 'Clothings',
    pageTitle: 'Clothings',
    link: '/clothings/',
  },
  accessories: {
    data: accessories,
    title: 'Accessories',
    pageTitle: 'Accessories',
    link: '/accessories/',
  },
};
