'use client';

import { Products } from '@/interfaces/products';
import { FC, useState } from 'react';
import styles from './productInfo.module.scss';
import { clothesSizes, sizes } from '@/constants/product-sizes';
import { Clothings } from '@/interfaces/clothing';

interface SneakerProductProps {
  products: (Clothings | Products)[];
}

export const ProductInfo: FC<SneakerProductProps> = ({ products }) => {
  const [selectedSize, setSelectedSize] = useState<string>('37');

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  if (!products || products.length === 0) {
    return null;
  }

  const firstSneaker = products[0];

  if (!firstSneaker) {
    return null;
  }

  return (
    <div className={styles.productInfo}>
      {firstSneaker.priceDiscount !== undefined &&
        firstSneaker.priceDiscount > 0 && (
          <h4 className={styles.productDiscount}>
            <strong className={styles.discountTitle}>Discount: </strong>
            {firstSneaker.priceDiscount}
          </h4>
        )}
      <h2 className={styles.sneakerTitle}>{firstSneaker.title}</h2>
      <h4 className={styles.categoryTitle}>
        Category: {firstSneaker.category}
      </h4>
      {firstSneaker.priceDiscount !== undefined &&
        firstSneaker.priceDiscount > 0 && (
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
        {firstSneaker.category.includes('Shoes')
          ? sizes.map((size) => (
              <button
                onClick={() => handleSizeSelect(String(size.sizeNumber))}
                className={`${styles.sizeBtn} ${
                  selectedSize === String(size.sizeNumber)
                    ? styles.activeSize
                    : ''
                }`}
                key={size.sizeNumber}
              >
                {size.sizeTitle}
              </button>
            ))
          : clothesSizes.map((size) => (
              <button
                onClick={() => handleSizeSelect(String(size.sizeTitle))}
                className={`${styles.sizeBtn} ${
                  selectedSize === String(size.sizeTitle)
                    ? styles.activeSize
                    : ''
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
            About: <br /> {products[0].title}{' '}
          </h4>
          <p className={styles.about}>{products[0].about}</p>
        </div>
        <ul className={styles.about__list}>
          <li className={styles.about__listItem}>
            Shown: {products[0].subStyle}
          </li>
          <li className={styles.about__listItem}>{products[0].style}</li>
        </ul>
      </article>
    </div>
  );
};
