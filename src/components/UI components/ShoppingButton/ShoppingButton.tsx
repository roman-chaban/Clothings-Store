'use client';

'use client';

import { FC, useState, useEffect } from 'react';
import styles from '@/components/ProductsUI/ProductFavorite/product.module.scss';
import { Products } from '@/interfaces/products';

interface ShoppingCartButtonProps {
  product: Products;
  onClick: (product: Products) => void;
  onDeleteProduct: (productId: number) => void;
  isProductInCart: boolean;
}

export const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({
  product,
  onClick,
  onDeleteProduct,
  isProductInCart,
}) => {
  const [isActive, setIsActive] = useState<boolean>(isProductInCart);

  const handleToggleFavorite = () => {
    if (isActive) {
      onDeleteProduct(product.productId);
    } else {
      onClick(product);
    }
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(isProductInCart);
  }, [isProductInCart]);

  return (
    <button
      className={`${styles.shoppingCart}`}
      style={{ background: isActive ? '#CD6323' : '' }}
      onClick={handleToggleFavorite}
    >
      <svg
        aria-hidden='true'
        focusable='false'
        viewBox='0 0 24 24'
        role='img'
        width='24px'
        height='24px'
        fill='none'
      >
        <path
          stroke='#ffffff'
          strokeWidth='1.5'
          d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
        ></path>
      </svg>
    </button>
  );
};
