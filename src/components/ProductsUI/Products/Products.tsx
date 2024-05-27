'use client';

import { Products } from '@/interfaces/products';
import React, { FC, useRef, useState, useEffect } from 'react';
import { ProductFavorite } from '../ProductFavorite/ProductFavorite';
import styles from './products.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Button } from '@mui/material';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  addProductToFavorite,
  deleteProductFromFavorite,
} from '@/redux/slices/favoriteSlice';

SwiperCore.use([Navigation]);

interface ProductsProps {
  products: Products[];
  productLinkTitle: string;
  productTitle: string;
}

export const ProductsItem: FC<ProductsProps> = ({
  products,
  productLinkTitle,
  productTitle,
}: ProductsProps) => {
  const swiperRef = useRef<any>(null);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const handleAddToFavorites = (product: Products) => {
    dispatch(addProductToFavorite(product));
  };

  const handleDeleteFromFavorites = (productId: number) => {
    dispatch(deleteProductFromFavorite(productId));
  };

  const updateNavigationButtons = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    }
  };

  useEffect(() => {
    updateNavigationButtons();
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.productBlock}>
        <h2 className={styles.shoesTitle}>{productTitle}</h2>
        <div className={styles.navigationButtons}>
          <Button
            className={styles.prevButton}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            disabled={isPrevDisabled}
          >
            Previous
          </Button>
          <Button
            className={styles.nextButton}
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </div>
      </div>
      <div className={styles.productsWrapper}>
        <Swiper
          ref={swiperRef}
          className={styles.swiper__wrapper}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          speed={900}
          style={{ cursor: 'grab' }}
          onSlideChange={updateNavigationButtons}
          onInit={(swiper) => updateNavigationButtons()}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.productId}
              className={styles.slide}
              style={{ width: '100%', maxWidth: '300px' }}
            >
              <ProductFavorite
                about={product.about}
                productId={product.productId}
                images={product.images}
                name={product.name}
                priceDiscount={product.priceDiscount}
                mainImage={product.mainImage}
                title={product.title}
                category={product.category}
                style={product.style}
                price={product.price}
                productRating={product.productRating}
                productLinkTitle={productLinkTitle}
                onAddToFavorite={() => handleAddToFavorites(product)}
                onDeleteProduct={() =>
                  handleDeleteFromFavorites(product.productId)
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
