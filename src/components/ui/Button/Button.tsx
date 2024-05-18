'use client';

import { Products } from '@/interfaces/products';
import { FC, ReactNode, useState } from 'react';

interface ButtonProps {
  className: string;
  children: ReactNode;
  type: 'submit' | 'button';
  product: Products;
  id?: string;
  onClick: (product: Products) => void;
  onDeleteProduct?: (productId: number) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  type,
  id,
  product = null,
  onClick = () => {},
  onDeleteProduct = () => {},
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    if (product) {
      setIsActive(!isActive);
      if (isActive) {
        onDeleteProduct(
          product?.productId !== undefined ? product.productId : 0
        );
      } else {
        onClick(product);
      }
    }
  };

  return (
    <button
      id={id}
      onClick={handleToggleFavorite}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};
