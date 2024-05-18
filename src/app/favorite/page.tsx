'use client';

import { FC, useEffect, useState } from 'react';
import { ProductCart } from '@/components/ProductsUI/ProductCart/ProductCart';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  addProductToFavorite,
  deleteProductFromFavorite,
} from '@/redux/slices/favoriteSlice';
import { Products } from '@/interfaces/products';

const Favorite: FC = () => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector((state) => state.favorite.favorite);
  const [isHydrated, setIsHydrated] = useState(false);

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

  return (
    <div>
      {favoriteProducts.map((favorite) => (
        <ProductCart
          key={favorite.productId}
          category={favorite.category}
          productLinkTitle=''
          onAddToFavorite={() => handleAddToFavorites(favorite)}
          onDeleteProduct={() => handleRemoveFromFavorites(favorite.productId)}
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
  );
};

export default Favorite;
