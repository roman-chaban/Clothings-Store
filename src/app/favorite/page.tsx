'use client';

import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  addProductToFavorite,
  deleteProductFromFavorite,
} from '@/store/slices/favoriteSlice';
import { Products } from '@/interfaces/products';
import styles from './FavoriteStyles.module.scss';
import { ProductFavorite } from '@/components/ProductsUI/ProductFavorite/ProductFavorite';

const Favorite: FC = () => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector((state) => state.favorite.favorite);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    document.title = 'Clothings Store | Favorite';
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
          <h2 className={styles.favorite__subTitle}>
            Your favorites list is empty{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='200'
              height='150'
              color='#111111'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
                clipRule='evenodd'
              ></path>
            </svg>
          </h2>
        ) : (
          <div className={styles.favorite__container}>
            {favoriteProducts.map((favorite: Products) => {
              const categoryLink =
                typeof favorite.category === 'string'
                  ? favorite.category.includes('Shoes')
                    ? '/sneakers/sneaker/'
                    : favorite.category.includes("Men's")
                    ? '/clothings/'
                    : '/accessories/'
                  : '/accessories/';

              return (
                <ProductFavorite
                  about={favorite.about}
                  key={favorite.productId}
                  category={favorite.category}
                  productLinkTitle={categoryLink}
                  onAddToFavorite={() => handleAddToFavorites(favorite)}
                  onDeleteProduct={() =>
                    handleRemoveFromFavorites(favorite.productId || 0)
                  }
                  productId={favorite.productId}
                  title={favorite.title}
                  name={favorite.name}
                  style={favorite.style}
                  price={favorite.price}
                  productRating={favorite.productRating}
                  mainImage={favorite.mainImage}
                  images={favorite.images || []}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
