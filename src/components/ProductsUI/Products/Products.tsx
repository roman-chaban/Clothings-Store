"use client";

import { Products } from "@/interfaces/products";
import React, { FC, useRef, useState, useEffect } from "react";
import { ProductFavorite } from "../ProductFavorite/ProductFavorite";
import styles from "./products.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ProductsSwiper.scss";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Button } from "@mui/material";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  addProductToFavorite,
  deleteProductFromFavorite,
} from "@/store/slices/favoriteSlice";

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
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    updateNavigationButtons();
    if (swiperInstance) {
      swiperInstance.on("slideChange", updateNavigationButtons);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateNavigationButtons);
      }
    };
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.productBlock}>
        <h2 className={styles.shoesTitle}>{productTitle}</h2>
        <div className={styles.navigationButtons}>
          <Button
            className={`${styles.prevButton} ${
              isPrevDisabled ? "" : styles.active
            }`}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            disabled={isPrevDisabled}
          >
            Previous
          </Button>

          <Button
            className={`${styles.nextButton} ${
              isNextDisabled ? "" : styles.active
            }`}
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
          spaceBetween={20}
          speed={100}
          loop={false}
          onSlideChange={updateNavigationButtons}
          slidesPerView="auto"
          centeredSlides={false}
        >
          {products.map((product) => (
            <SwiperSlide key={product.productId} style={{ width: 300 }}>
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
