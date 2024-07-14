"use client";

import { Products } from "@/interfaces/products";
import { FC, useState } from "react";
import styles from "./cart.module.scss";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import { FormClose, Star } from "grommet-icons";
import { useCount } from "@/hooks/useCount";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { CheckedValue, ProductItem } from "@/constants/types";
import Link from "next/link";

interface ProductCartProps extends Products {
  productLinkTitle: string;
  onAddToCart: () => void;
  onDeleteFromCart: () => void;
}

export const ProductCart: FC<ProductCartProps> = ({
  mainImage,
  price,
  style,
  name,
  title,
  about,
  productRating,
  productLinkTitle,
  onDeleteFromCart,
}) => {
  const [checkedValue, setCheckedValue] = useState<CheckedValue>(false);
  const [productItemCounter, setProductCounter] = useState<ProductItem>(0);
  const { productPrice, onAddProduct, onDeleteProduct } = useCount(price);

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.blockCard}>
          <Link href={`${productLinkTitle}${encodeURIComponent(name)}`}>
            <Image
              src={mainImage}
              alt={`${title}`}
              width={150}
              height={200}
              className={styles.cart__image}
            />
          </Link>
          <div className={styles.cartInfo}>
            <div className={styles.cart__titlesBlock}>
              <h2 className={styles.cartTitle}>{title}</h2>
              <p className={styles.cartName}>{style}</p>
              <p className={styles.cartPrice}>Price: ${price}</p>
              <p className={styles.cartAbout}>
                {productRating} / 5 <Star color="gold" />
              </p>{" "}
              <p className={styles.about}>About Product: {about}</p>
            </div>
          </div>
        </div>
        <div className={styles.counterProduct}>
          <div className={styles.counterProduct__block}>
            <span className={styles.favorite__cardPrice}>
              {productPrice} {"$"}
            </span>
            <div className={styles.buttonsPlusMinus}>
              <button
                className={styles.plus}
                onClick={() => {
                  onAddProduct();
                  setProductCounter((prevCounter) => prevCounter + 1);
                }}>
                <AddCircleIcon style={{ color: "#65C466" }} fontSize="large" />
              </button>
              <span className={styles.cartBtn__number}>
                {productItemCounter}
              </span>
              <button
                className={styles.minus}
                disabled={productPrice < 1 ? true : false}
                style={{
                  opacity: productPrice < 1 ? "0.5" : "1",
                  cursor: productPrice > 1 ? "pointer" : "not-allowed",
                }}
                onClick={() => {
                  onDeleteProduct();
                  setProductCounter((prevCounter) => prevCounter - 1);
                }}>
                <RemoveCircleIcon
                  style={{ color: "rgba(199, 53, 8, 0.8352941176)" }}
                  fontSize="large"
                />
              </button>
            </div>
          </div>
          <p className={styles.alreadyTitle}>
            Product already to buy {productItemCounter} goods
          </p>
        </div>
      </div>
      <FormClose
        onClick={onDeleteFromCart}
        className={styles.cartClosed}
        color="#111111"
      />
    </div>
  );
};
