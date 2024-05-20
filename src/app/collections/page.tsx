'use client';

import { useState } from 'react';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import products from '@/api/products/products.json';
import clothings from '@/api/clothing/clothing.json';
import accessories from '@/api/accessories/accessories.json';
import { Products } from '@/interfaces/products';
import styles from './collections.module.scss';
import { Pagination } from '@/components/Pagination/Pagination';

const ITEMS_PER_PAGE = 10;

const categories = {
  products: {
    data: products,
    title: "Men's Sneakers",
    link: '/sneakers/sneaker/',
  },
  clothings: {
    data: clothings,
    title: 'Clothings',
    link: '/clothing/',
  },
  accessories: {
    data: accessories,
    title: 'Accessories',
    link: '/accessories/',
  },
};

type Category = keyof typeof categories;

export default function Collections() {
  const [currentCategory, setCurrentCategory] = useState<Category>('products');
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = categories[currentCategory].data;
  const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);

  const paginate = (items: Products[], currentPage: number) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return items.slice(start, end);
  };

  const paginatedItems = paginate(
    currentData as unknown as Products[],
    currentPage
  );

  return (
    <div className={styles.collections}>
      <div className={styles.tabs}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={
              currentCategory === category
                ? `${styles.active} ${styles.category__button}`
                : styles.category__button
            }
            onClick={() => {
              setCurrentCategory(category as Category);
              setCurrentPage(1);
            }}
          >
            {categories[category as Category].title}
          </button>
        ))}
      </div>
      <ProductsCatalog
        productLinkTitle={categories[currentCategory].link}
        pageTitle={categories[currentCategory].title}
        products={paginatedItems}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
