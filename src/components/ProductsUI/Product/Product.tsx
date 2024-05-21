'use client';

import { FC, memo, useState } from 'react';
import Link from 'next/link';
import { Products } from '@/interfaces/products';
import Image from 'next/image';
import styles from './sneakerProduct.module.scss';
import { FormNext, Next, Previous } from 'grommet-icons';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { CurrentIndex, SneakerImage } from '@/constants/types';

interface SneakerProductProps {
  products: Products[];
}

// eslint-disable-next-line react/display-name
export const Product: FC<SneakerProductProps> = memo(({ products }) => {
  const [sneakerImage, setSneakerImage] = useState<SneakerImage>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<CurrentIndex>(0);

  const handleThumbnailClick = (image: string) => {
    setSneakerImage(image);
  };

  const handleNextImageClick = (product: Products) => {
    const nextIndex = (currentImageIndex + 1) % product.images.length;
    setCurrentImageIndex(nextIndex);
    const nextImage = product.images[nextIndex];
    const nextImageUrl =
      nextImage &&
      (nextImage.one ||
        nextImage.two ||
        nextImage.three ||
        nextImage.four ||
        nextImage.five);
    if (nextImageUrl) {
      setSneakerImage(nextImageUrl);
    }
  };

  const handlePrevImageClick = (product: Products) => {
    const prevIndex =
      (currentImageIndex - 1 + product.images.length) % product.images.length;
    setCurrentImageIndex(prevIndex);
    const prevImage = product.images[prevIndex];
    const prevImageUrl =
      prevImage &&
      (prevImage.one ||
        prevImage.two ||
        prevImage.three ||
        prevImage.four ||
        prevImage.five);
    if (prevImageUrl) {
      setSneakerImage(prevImageUrl);
    }
  };

  return (
    <div className={styles.sneakerContainer}>
      <div className={styles.sneakersNav__block}>
        <h3 className={styles.title}>
          Clothing Store <FormNext color='gray' />
        </h3>
        <h4 className={styles.title}>
          <Link className={styles.title} href='/sneakers'>
            {products[0].category} <FormNext color='#111111' />
          </Link>
        </h4>
        {products.length > 0 && (
          <h5 className={styles.categoryTitle}>
            {products[0].style} <FormNext color='#111111' />
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
                        loading='lazy'
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
                        loading='lazy'
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
                        loading='lazy'
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
                        loading='lazy'
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
                        loading='lazy'
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
                loading='lazy'
                className={styles.sneakerImage}
                src={sneakerImage || product.mainImage}
                width={400}
                height={500}
                alt={product.title}
              />
              <div className={styles.nextPrev__buttons}>
                <button
                  className={styles.btn}
                  type='button'
                  onClick={() => handlePrevImageClick(product)}
                >
                  <Previous color='#111111' style={{ width: 20, height: 20 }} />
                </button>
                <button
                  className={styles.btn}
                  type='button'
                  onClick={() => handleNextImageClick(product)}
                >
                  <Next color='#111111' style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <ProductInfo products={products} />
      </div>
    </div>
  );
});
