'use client';

import { ProductCart } from '@/components/ProductsUI/ProductCart/ProductCart';
import { Products } from '@/interfaces/products';
import { FC } from 'react';
import styles from './sneakersProducts.module.scss';

interface ProductsProps {
  products: Products[];
}

export const SneakersProducts: FC<ProductsProps> = ({
  products,
}: ProductsProps) => {
  if (!products) {
    return <h1>Not found...404</h1>;
  }

  return (
    <div>
      <h1 className={styles.title}>Men&apos;s Sneakers</h1>
      <div className={styles.sneakersContainer}>
        {products.map((product) => (
          <ProductCart
            key={product.productId}
            priceDiscount={product.priceDiscount}
            mainImage={product.mainImage}
            title={product.title}
            category={product.category}
            style={product.style}
            price={product.price}
            productRating={product.productRating}
          />
        ))}
      </div>
    </div>
  );
};
