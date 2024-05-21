'use client';

import { Products } from '@/interfaces/products';
import { FC } from 'react';
import styles from './sneakersProducts.module.scss';
import { notFound, redirect } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  addProductToFavorite,
  deleteProductFromFavorite,
} from '@/redux/slices/favoriteSlice';
import { ProductFavorite } from '../ProductFavorite/ProductFavorite';

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
  const dispatch = useAppDispatch();
  if (!products) {
    return redirect(notFound());
  }

  const handleAddToFavorites = (product: Products) => {
    dispatch(addProductToFavorite(product));
  };

  const handleDeleteFromFavorites = (productId: number) => {
    dispatch(deleteProductFromFavorite(productId));
  };

  return (
    <div>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.sneakersContainer}>
        {products.map((product) => (
          <ProductFavorite
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
            onAddToFavorite={() => handleAddToFavorites(product)}
            onDeleteProduct={() => handleDeleteFromFavorites(product.productId)}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  );
};
