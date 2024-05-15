'use client';

import { FC, memo, useState } from 'react';
import Link from 'next/link';
import { Products } from '@/interfaces/products';
import Image from 'next/image';
import styles from './sneakerProduct.module.scss';
import { FormNext, Next, Previous } from 'grommet-icons';
import { ProductInfo } from '../ProductInfo/ProductInfo';

interface SneakerProductProps {
  sneakers: Products[];
}

// eslint-disable-next-line react/display-name
export const SneakerProduct: FC<SneakerProductProps> = memo(({ sneakers }) => {
  const [sneakerImage, setSneakerImage] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleThumbnailClick = (image: string) => {
    setSneakerImage(image);
  };

  return (
    <div className={styles.sneakerContainer}>
      <div className={styles.sneakersNav__block}>
        <h3 className={styles.title}>
          Clothing Store <FormNext color='gray' />
        </h3>
        <h4 className={styles.title}>
          <Link className={styles.title} href='/sneakers'>
            Sneakers <FormNext color='gray' />
          </Link>
        </h4>
        <h5 className={styles.title}>
          {sneakers[0].category} <FormNext color='gray' />
        </h5>
        <h6 className={`${styles.title} ${styles.titleActive}`}>
          {sneakers[0].title}
        </h6>
      </div>
      <div className={styles.sneakersFlex}>
        {sneakers.map((sneaker) => (
          <div key={sneaker.productId} className={styles.sneakerImagesBlock}>
            <div className={styles.product__images}>
              <div className={styles.smallImages}>
                {Array.isArray(sneaker.images) && sneaker.images.length > 0 && (
                  <>
                    {sneaker.images[0]?.one && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === sneaker.images[0].one
                            ? styles.active
                            : ''
                        }`}
                        alt={sneaker.title}
                        width={80}
                        height={100}
                        src={sneaker.images[0].one}
                        onClick={() =>
                          handleThumbnailClick(sneaker.images[0].one)
                        }
                      />
                    )}
                    {sneaker.images[0]?.two && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === sneaker.images[0].two
                            ? styles.active
                            : ''
                        }`}
                        alt={sneaker.title}
                        width={80}
                        height={100}
                        src={sneaker.images[0].two}
                        onClick={() =>
                          handleThumbnailClick(sneaker.images[0].two)
                        }
                      />
                    )}
                    {sneaker.images[0]?.three && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === sneaker.images[0].three
                            ? styles.active
                            : ''
                        }`}
                        alt={sneaker.title}
                        width={80}
                        height={100}
                        src={sneaker.images[0].three}
                        onClick={() =>
                          handleThumbnailClick(sneaker.images[0].three)
                        }
                      />
                    )}
                    {sneaker.images[0]?.four && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === sneaker.images[0].four
                            ? styles.active
                            : ''
                        }`}
                        alt={sneaker.title}
                        width={80}
                        height={100}
                        src={sneaker.images[0].four}
                        onClick={() =>
                          handleThumbnailClick(sneaker.images[0].four)
                        }
                      />
                    )}
                    {sneaker.images[0]?.five && (
                      <Image
                        className={`${styles.smallImage} ${
                          sneakerImage === sneaker.images[0].five
                            ? styles.active
                            : ''
                        }`}
                        alt={sneaker.title}
                        width={80}
                        height={100}
                        src={sneaker.images[0].five}
                        onClick={() =>
                          handleThumbnailClick(sneaker.images[0].five)
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
                src={sneakerImage || sneaker.mainImage}
                width={400}
                height={500}
                alt={sneaker.title}
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
        <ProductInfo sneakers={sneakers} />
      </div>
    </div>
  );
});
