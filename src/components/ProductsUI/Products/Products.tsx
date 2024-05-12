'use client';

import { Products } from '@/interfaces/products';
import React, { FC, useRef } from 'react';
import { ProductCart } from '../ProductCart/ProductCart';
import styles from './products.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);

interface ProductsProps {
  products: Products[];
}

export const SneakersProducts: FC<ProductsProps> = ({
  products,
}: ProductsProps) => {
  const swiperRef = useRef<any>(null);

  const slideNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const slidePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div className={styles.products}>
      <div className={styles.productBlock}>
        <h2 className={styles.shoesTitle}>Shoes</h2>
        <div className={styles.navigationButtons}>
          <button className={styles.prevButton} onClick={slidePrev}>
            Previous
          </button>
          <button className={styles.nextButton} onClick={slideNext}>
            Next
          </button>
        </div>
      </div>
      <div className={styles.productsWrapper}>
        <Swiper
          ref={swiperRef}
          wrapperClass={styles.swiper__wrapper}
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={105}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{
            hide: true,
          }}
          slidesPerView={4}
        >
          {products.map((product) => (
            <SwiperSlide key={product.productId} className={styles.slide}>
              <ProductCart
                priceDiscount={product.priceDiscount}
                mainImage={product.mainImage}
                title={product.title}
                category={product.category}
                style={product.style}
                price={product.price}
                productRating={product.productRating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
