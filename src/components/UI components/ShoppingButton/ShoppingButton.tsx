'use client';

import { FC, useEffect, useState } from 'react';
import styles from '@/components/ProductsUI/ProductFavorite/product.module.scss';
import { Products } from '@/interfaces/products';

interface ShoppingCartButtonProps {
  product: Products;
  onClick: (product: Products) => void;
  onDelete?: (productId: number) => void;
}

export const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({
  product,
  onClick,
  onDelete,
}) => {
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      const savedColor = localStorage.getItem(
        `favoriteBackgroundColor_${product?.productId}`
      );
      setIsActiveButton(savedColor === '#66CDAA');
    }
  }, [product]);

  const handleAddToShoppingCart = () => {
    if (product) {
      const newColor = isActiveButton ? '#313237' : '#66CDAA';
      setIsActiveButton(!isActiveButton);
      localStorage.setItem(
        `favoriteBackgroundColor_${product?.productId}`,
        newColor
      );
      onClick(product);
    }
  };

  return (
    <button
      className={styles.shoppingCart}
      onClick={handleAddToShoppingCart}
      style={{ backgroundColor: isActiveButton ? '#66CDAA' : '#313237' }}
    >
      <svg
        aria-hidden='true'
        color='#ffffff'
        focusable='false'
        viewBox='0 0 24 24'
        role='img'
        width='24px'
        height='24px'
        fill='none'
      >
        <path
          stroke='currentColor'
          strokeWidth='1.5'
          d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
        ></path>
      </svg>
    </button>
  );
};
