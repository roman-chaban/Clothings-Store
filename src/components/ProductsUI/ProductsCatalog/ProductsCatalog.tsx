'use client';

import { ProductCart } from '@/components/ProductsUI/ProductCart/ProductCart';
import { Products } from '@/interfaces/products';
import { FC } from 'react';
import styles from './sneakersProducts.module.scss';
import { Clothings } from '@/interfaces/clothing';

interface ProductsProps {
  products: Products[];
  pageTitle: string;
  productLinkTitle: string;
}

export const ProductsCatalog: FC<ProductsProps> = ({
  products,
  pageTitle,
  productLinkTitle,
}: ProductsProps) => {
  if (!products) {
    return <h1>Not found...404</h1>;
  }

  return (
    <div>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.sneakersContainer}>
        {products.map((product) => (
          <ProductCart
            productLinkTitle={productLinkTitle}
            images={product.images}
            name={product.name}
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
