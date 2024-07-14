import { Products } from "@/interfaces/products";
import products from "@/api/products/products.json";
import clothings from "@/api/clothing/clothing.json";
import accessories from "@/api/accessories/accessories.json";
import { CategoriesCaptures } from "@/enums/categories";

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
    title: CategoriesCaptures.SNEAKERS,
    pageTitle: CategoriesCaptures.SNEAKERS,
    link: "/sneakers/sneaker/",
  },
  clothings: {
    data: clothings,
    title: CategoriesCaptures.CLOTHINGS,
    pageTitle: CategoriesCaptures.CLOTHINGS,
    link: "/clothings/",
  },
  accessories: {
    data: accessories,
    title: CategoriesCaptures.ACCESSORIES,
    pageTitle: CategoriesCaptures.ACCESSORIES,
    link: "/accessories/",
  },
};
