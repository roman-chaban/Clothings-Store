'use client';

import { Products } from '@/interfaces/products';
import { FC, useEffect, useState } from 'react';
import styles from './productInfo.module.scss';
import { clothesSizes, sizes } from '@/constants/product-sizes';

interface SneakerProductProps {
  products: Products[];
}

export const ProductInfo: FC<SneakerProductProps> = ({ products }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isShoes, setIsShoes] = useState<boolean>(false);

  const firstSneaker = products[0];

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
        setSelectedSize(clothesSizes[0].sizeTitle);
      }
    }
  }, [products]);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  if (!products || products.length === 0) {
    return null;
  }

  if (!firstSneaker) {
    return null;
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
          {'$'} {firstSneaker.priceDiscount}
        </span>
      )}
      <h3 className={styles.priceTitle}>
        Price: {'$'} {firstSneaker.price}
      </h3>
      <span className={styles.selectSize}>
        Select size: <mark className={styles.markSize}>{selectedSize}</mark>
      </span>
      <div className={styles.productSize__container}>
        {isShoes
          ? sizes.map((size) => (
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
          : clothesSizes.map((size) => (
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
            About: <br /> {firstSneaker.title}{' '}
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
