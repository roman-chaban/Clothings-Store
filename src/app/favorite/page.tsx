'use client';

import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  addProductToFavorite,
  deleteProductFromFavorite,
} from '@/redux/slices/favoriteSlice';
import { Products } from '@/interfaces/products';
import styles from './favorite.module.scss';
import { ProductFavorite } from '@/components/ProductsUI/ProductFavorite/ProductFavorite';

const Favorite: FC = () => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector((state) => state.favorite.favorite);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    document.title = 'Favorite | Just Do It.';
  }, []);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleAddToFavorites = (favorite: Products) => {
    dispatch(addProductToFavorite(favorite));
  };

  const handleRemoveFromFavorites = (productId: number) => {
    dispatch(deleteProductFromFavorite(productId));
  };

  if (!isHydrated) {
    return null;
  }

  const favoritesCounter = favoriteProducts.length;

  return (
    <div className={styles.favorite}>
      <h1 className={styles.favorite__title}>Favorites</h1>
      {favoritesCounter === 0 ? (
        ''
      ) : (
        <h4 className={styles.itemsCounter}>
          Products in favorites:
          <strong className={styles.counter__marker}>
            {' '}
            {favoritesCounter}
          </strong>
        </h4>
      )}
      <div>
        <br />
        {favoriteProducts.length === 0 ? (
          <h2 className={styles.favorite__title}>
            Your favorites list is empty
          </h2>
        ) : (
          <div className={styles.favorite__container}>
            {favoriteProducts.map((favorite) => (
              <ProductFavorite
                key={favorite.productId}
                category={favorite.category}
                productLinkTitle={`${
                  favorite.category.includes('Shoes')
                    ? '/sneakers/sneaker/'
                    : favorite.category.includes("Men's")
                    ? '/clothings/'
                    : '/accessories/'
                }`}
                onAddToFavorite={() => handleAddToFavorites(favorite)}
                onDeleteProduct={() =>
                  handleRemoveFromFavorites(favorite.productId)
                }
                productId={favorite.productId}
                title={favorite.title}
                name={favorite.name}
                style={favorite.style}
                price={favorite.price}
                productRating={favorite.productRating}
                mainImage={favorite.mainImage}
                images={[]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
