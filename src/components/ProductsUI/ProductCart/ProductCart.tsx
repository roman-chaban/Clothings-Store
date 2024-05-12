'use client';

import { FC } from 'react';
import styles from './product.module.scss';
import { Products } from '@/interfaces/products';
import Image from 'next/image';
import { Star } from 'grommet-icons';

export const ProductCart: FC<Products> = ({
  title,
  category,
  price,
  productRating,
  mainImage,
  style,
  priceDiscount = 0,
}) => {
  return (
    <div className={styles.productCart}>
      <div className={styles.productCart__container}>
        <div className={styles.productImage}>
          <Image
            className={styles.productImage}
            src={mainImage}
            width={300}
            height={300}
            alt='sneakers photo'
          />
        </div>
        <div className={styles.productCart__Info}>
          <h3 className={styles.productCart__title}>{title}</h3>
          <p className={styles.productCart__price}>
            {priceDiscount < 1 ? '' : priceDiscount}
            <mark
              className={styles.priceDiscount}
              style={{
                textDecoration: priceDiscount < 1 ? 'none' : 'line-through',
              }}
            >
              {'$'}
              {price}
            </mark>
          </p>
          <span className={styles.productCart__productRating}>
            {productRating} <Star color='gold' />
          </span>
          <span className={styles.productCart__style}>{style}</span>
          <br />
          <h3 className={styles.categoryBlock}>
            Category:
            <strong className={styles.productCart__category}>{category}</strong>
          </h3>
        </div>
      </div>
    </div>
  );
};
