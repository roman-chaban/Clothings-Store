"use client";

import { FC, memo, useState, useEffect } from "react";
import Link from "next/link";
import { Products } from "@/interfaces/products";
import Image from "next/image";
import styles from "./sneakerProduct.module.scss";
import { FormNext, Next, Previous } from "grommet-icons";
import ProductInfo from "../ProductInfo/ProductInfo";
import { CurrentIndex, SneakerImage } from "@/constants/types";

interface SneakerProductProps {
  products: Products[];
}

// eslint-disable-next-line react/display-name
export const Product: FC<SneakerProductProps> = memo(({ products }) => {
  const [sneakerImage, setSneakerImage] = useState<SneakerImage>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<CurrentIndex>(0);
  const [currentProduct, setCurrentProduct] = useState<Products | null>(null);

  useEffect(() => {
    if (products.length > 0) {
      setCurrentProduct(products[0]);
      setSneakerImage(products[0].mainImage);
      setCurrentImageIndex(0);
    }
  }, [products]);

  const handleThumbnailClick = (image: string, product: Products) => {
    setSneakerImage(image);
    setCurrentProduct(product);
    const index = product.images.findIndex((img) =>
      Object.values(img).includes(image)
    );
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.sneakerContainer}>
      <div className={styles.sneakersNav__block}>
        <h3 className={styles.title}>
          Clothing Store <FormNext color="gray" />
        </h3>
        <h4 className={styles.title}>
          <Link className={styles.title} href="/sneakers">
            {products[0].category} <FormNext color="#111111" />
          </Link>
        </h4>
        {products.length > 0 && (
          <h5 className={styles.categoryTitle}>
            {products[0].style} <FormNext color="#111111" />
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
                {product.images.map((imageSet, index) =>
                  Object.values(imageSet).map((image, i) => (
                    <Image
                      key={`${index}-${i}`}
                      loading="lazy"
                      className={`${styles.smallImage} ${
                        sneakerImage === image ? styles.active : ""
                      }`}
                      alt={product.title}
                      width={80}
                      height={100}
                      src={image}
                      onClick={() => handleThumbnailClick(image, product)}
                    />
                  ))
                )}
              </div>
            </div>
            <div className={styles.mainImage__block}>
              <Image
                loading="lazy"
                className={styles.sneakerImage}
                src={sneakerImage || product.mainImage}
                width={400}
                height={500}
                alt={product.title}
              />
              {/* <div className={styles.nextPrev__buttons}>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={handlePrevImageClick}
                >
                  <Previous color="#111111" style={{ width: 20, height: 20 }} />
                </button>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={handleNextImageClick}
                >
                  <Next color="#111111" style={{ width: 20, height: 20 }} />
                </button>
              </div> */}
            </div>
          </div>
        ))}
        {currentProduct && (
          <ProductInfo
            products={products}
            productId={currentProduct.productId}
            title={currentProduct.title}
            name={currentProduct.name}
            category={currentProduct.category}
            style={currentProduct.style}
            price={currentProduct.price}
            productRating={currentProduct.productRating}
            mainImage={currentProduct.mainImage}
            images={currentProduct.images}
            about={currentProduct.about}
          />
        )}
      </div>
    </div>
  );
});
