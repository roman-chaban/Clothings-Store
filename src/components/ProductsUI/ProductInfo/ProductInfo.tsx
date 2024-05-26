'use client';

import { Products } from '@/interfaces/products';
import { FC, useEffect, useState } from 'react';
import styles from './productInfo.module.scss';
import { CLOTHES__SIZES, SIZES } from '@/constants/product-sizes';
import { notFound, redirect } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addProductToFavorite } from '@/redux/slices/favoriteSlice';
import { useAppSelector } from '@/hooks/useAppSelector';
import dynamic from 'next/dynamic';

interface SneakerProductProps {
  products: Products[];
  onAddToFavorite?: () => void;
  onDeleteProduct?: () => void;
}

const ProductInfo: FC<SneakerProductProps & Products> = ({
  products,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isShoes, setIsShoes] = useState<boolean>(false);
  const favoriteProducts = useAppSelector((state) => state.favorite.favorite);
  const dispatch = useAppDispatch();

  const firstSneaker = products[0];

  const isProductsFavorites = favoriteProducts.some(
    (product) => product.productId === firstSneaker.productId
  );

  const handleAddToShoppingCart = (product: Products) => {
    dispatch(addProductToFavorite(product));
  };
  const discount = firstSneaker.priceDiscount || 0;
  const discountPercentage =
    discount > 0
      ? Math.round(((firstSneaker.price - discount) / firstSneaker.price) * 100)
      : 0;

  useEffect(() => {
    if (products && products.length > 0) {
      const firstProduct = products[0];
      const isShoesCategory = firstProduct.category.includes('Shoes');
      setIsShoes(isShoesCategory);

      if (isShoesCategory) {
        setSelectedSize('37 (EU) / 6 (US)');
      } else {
        setSelectedSize(CLOTHES__SIZES[0].sizeTitle);
      }
    }
  }, [products]);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  if (!products || products.length === 0) {
    return redirect('/');
  }

  if (!firstSneaker) {
    return redirect(notFound());
  }

  return (
    <div className={styles.productInfo}>
      {discount > 0 && (
        <h4 className={styles.productDiscount}>
          <strong className={styles.discountTitle}>Discount:</strong>
          {discountPercentage}
        </h4>
      )}
      <h2 className={styles.sneakerTitle}>{firstSneaker.title}</h2>
      <h4 className={styles.categoryTitle}>
        Category: {firstSneaker.category}
      </h4>
      {discount > 0 && (
        <span className={styles.infoDiscount__title}>
          {'$'} {firstSneaker.price}
        </span>
      )}
      <h3 className={styles.priceTitle}>
        Price: {'$'}{' '}
        {Math.floor(
          firstSneaker.priceDiscount !== undefined &&
            firstSneaker.priceDiscount > 0
            ? firstSneaker.priceDiscount
            : firstSneaker.price
        )}
      </h3>
      <button
        className={styles.addBtn}
        style={{ background: isProductsFavorites ? '' : '#111111' }}
        onClick={() => handleAddToShoppingCart(firstSneaker)}
      >
        {isProductsFavorites ? 'Added to favorites' : 'Add to favorite'}
      </button>

      <span className={styles.selectSize}>
        Select size: <mark className={styles.markSize}>{selectedSize}</mark>
      </span>
      <div className={styles.productSize__container}>
        {isShoes
          ? SIZES.map((size) => (
              <button
                onClick={() => handleSizeSelect(size.sizeTitle)}
                className={`${styles.sizeBtn} ${
                  selectedSize === size.sizeTitle ? styles.activeSize : ''
                }`}
                key={size.sizeTitle}
              >
                {size.sizeTitle}
              </button>
            ))
          : CLOTHES__SIZES.map((size) => (
              <button
                onClick={() => handleSizeSelect(size.sizeTitle)}
                className={`${styles.sizeBtn} ${
                  selectedSize === size.sizeTitle ? styles.activeSize : ''
                }`}
                key={size.sizeTitle}
              >
                {size.sizeTitle}
              </button>
            ))}
      </div>
      <article className={styles.aboutProduct}>
        <div className={styles.about__block}>
          <h4 className={styles.about__blockTitle}>
            About Product: {firstSneaker.title}{' '}
          </h4>
          <p className={styles.about}>{firstSneaker.about}</p>
        </div>
        <ul className={styles.about__list}>
          <li className={styles.about__listItem}>
            Shown: {firstSneaker.subStyle}
          </li>
          <li className={styles.about__listItem}>{firstSneaker.style}</li>
        </ul>
      </article>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductInfo), { ssr: false });
