'use client';

import { useEffect, useState } from 'react';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import { Products } from '@/interfaces/products';
import styles from './collections.module.scss';
import { Pagination } from '@/components/Pagination/Pagination';
import { categories } from '@/constants/categories';
import { CurrentPage } from '@/constants/types';

const ITEMS_PER_PAGE = 6;

type Category = keyof typeof categories;

export default function Collections() {
  const [currentCategory, setCurrentCategory] = useState<Category>('products');
  const [currentPage, setCurrentPage] = useState<CurrentPage>(1);

  useEffect(() => {
    document.title = 'Clothings Store | Collections';
  }, []);

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
        pageTitle={categories[currentCategory].pageTitle}
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
