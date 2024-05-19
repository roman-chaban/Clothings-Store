'use client';

import { Products } from '@/interfaces/products';
import { FC, useState } from 'react';
import styles from './cart.module.scss';
import Image from 'next/image';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { FormClose } from 'grommet-icons';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addProductsFromCart } from '@/redux/slices/shoppingCartSlice';

interface ProductCartProps extends Products {
  productLinkTitle: string;
  onAddToCart: () => void;
  onDeleteFromCart: () => void;
}

export const ProductCart: FC<ProductCartProps> = ({
  category,
  images,
  mainImage,
  name,
  price,
  style,
  title,
  priceDiscount,
  productId,
  productLinkTitle,
  productRating,
  onDeleteFromCart,
}) => {
  const [checkedValue, setCheckedValue] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleAddToShoppingCart = (product: Products) => {
    dispatch(addProductsFromCart(product));
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <Checkbox
          color='success'
          checked={checkedValue}
          onChange={(event) => setCheckedValue(event.target.checked)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Image
          src={mainImage}
          alt={`${title}`}
          width={150}
          height={200}
          className={styles.cart__image}
        />
        <div className={styles.cartInfo}>
          <div className={styles.cart__titlesBlock}>
            <h2 className={styles.cartTitle}>{title}</h2>
            <p className={styles.cartName}>{style}</p>
          </div>
          <p className={styles.cartPrice}>Price: ${price}</p>
        </div>
      </div>
      <FormClose
        onClick={onDeleteFromCart}
        className={styles.cartClosed}
        color='#111111'
      />
    </div>
  );
};
