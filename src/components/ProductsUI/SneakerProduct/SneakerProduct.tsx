'use client';

import { FC, memo, useState } from 'react';
import Link from 'next/link';
import { Products } from '@/interfaces/products';
import Image from 'next/image';
import styles from './sneakerProduct.module.scss';
import { FormNext, Next, Previous } from 'grommet-icons';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Clothings } from '@/interfaces/clothing';

interface SneakerProductProps {
  products: Products[];
}

// eslint-disable-next-line react/display-name
export const Product: FC<SneakerProductProps> = memo(({ products }) => {
  const [sneakerImage, setSneakerImage] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleThumbnailClick = (image: string) => {
    setSneakerImage(image);
  };

  return (
    <div className={styles.sneakerContainer}>
      <div className={styles.sneakersNav__block}>
        <h3 className={styles.title}>
          Sneakers Store <FormNext color='gray' />
        </h3>
        <h4 className={styles.title}>
          <Link className={styles.title} href='/sneakers'>
            Sneakers <FormNext color='gray' />
          </Link>
        </h4>
        {products.length > 0 && (
          <h5 className={styles.title}>
            {products[0].category} <FormNext color='gray' />
          </h5>
        )}
        {products.length > 0 && (
          <h6 className={`${styles.title} ${styles.titleActive}`}>
            {products[0].title}
          </h6>
        )}
      </div>
      <div className={styles.sneakersFlex}>
        {products.map((product) => (
          <div key={product.productId} className={styles.sneakerImagesBlock}>
            <div className={styles.product__images}>
              <div className={styles.smallImages}>
                {Array.isArray(product.images) && product.images.length > 0 && (
                  <>
                    {product.images[0]?.one && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === product.images[0].one
                            ? styles.active
                            : ''
                        }`}
                        alt={product.title}
                        width={80}
                        height={100}
                        src={product.images[0].one}
                        onClick={() =>
                          handleThumbnailClick(product.images[0].one)
                        }
                      />
                    )}
                    {product.images[0]?.two && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === product.images[0].two
                            ? styles.active
                            : ''
                        }`}
                        alt={product.title}
                        width={80}
                        height={100}
                        src={product.images[0].two}
                        onClick={() =>
                          handleThumbnailClick(product.images[0].two)
                        }
                      />
                    )}
                    {product.images[0]?.three && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === product.images[0].three
                            ? styles.active
                            : ''
                        }`}
                        alt={product.title}
                        width={80}
                        height={100}
                        src={product.images[0].three}
                        onClick={() =>
                          handleThumbnailClick(product.images[0].three)
                        }
                      />
                    )}
                    {product.images[0]?.four && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === product.images[0].four
                            ? styles.active
                            : ''
                        }`}
                        alt={product.title}
                        width={80}
                        height={100}
                        src={product.images[0].four}
                        onClick={() =>
                          handleThumbnailClick(product.images[0].four)
                        }
                      />
                    )}
                    {product.images[0]?.five && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === product.images[0].five
                            ? styles.active
                            : ''
                        }`}
                        alt={product.title}
                        width={80}
                        height={100}
                        src={product.images[0].five}
                        onClick={() =>
                          handleThumbnailClick(product.images[0].five)
                        }
                      />
                    )}
                  </>
                )}
              </div>
            </div>
            <div className={styles.mainImage__block}>
              <Image
                className={styles.sneakerImage}
                src={sneakerImage || product.mainImage}
                width={400}
                height={500}
                alt={product.title}
              />
              <div className={styles.nextPrev__buttons}>
                <button className={styles.btn} type='button'>
                  <Previous color='#111111' style={{ width: 20, height: 20 }} />
                </button>
                <button className={styles.btn} type='button'>
                  <Next color='#111111' style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <ProductInfo products={products as unknown as Clothings[]} />
      </div>
    </div>
  );
});
