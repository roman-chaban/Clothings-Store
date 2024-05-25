'use client';

import { IsActive } from '@/constants/types';
import { Products } from '@/interfaces/products';
import { Shop } from 'grommet-icons';
import { FC, useState, useEffect } from 'react';

interface ButtonProps {
  className?: string;
  type?: 'submit' | 'button';
  product?: Products;
  id?: string;
  onClick?: (product: Products) => void;
  onDeleteProduct?: (productId: number) => void;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  type = 'button',
  id,
  product = null,
  onClick = () => {},
  onDeleteProduct = () => {},
}) => {
  const [isActive, setIsActive] = useState<IsActive>(false);

  useEffect(() => {
    if (product) {
      const savedColor = localStorage.getItem(
        `catalogButtonColor_${product.productId}`
      );
      setIsActive(savedColor === '#ffb800');
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      const newColor = isActive ? '#313237' : '#ffb800';
      setIsActive(!isActive);
      localStorage.setItem(`catalogButtonColor_${product.productId}`, newColor);
      if (!isActive) {
        onClick(product);
      } else {
        onDeleteProduct(product.productId);
      }
    }
  };

  return (
    <button
      title={isActive ? 'Delete from Favorite' : 'Add to Favorite'}
      id={id}
      onClick={handleAddToCart}
      className={className}
      type={type}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isActive ? '#676767' : '#313237',
        color: '#ffffff',
        width: 300,
        height: 30,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isActive ? (
        <>Delete from Favorite </>
      ) : (
        <>
          Add to Favorite{' '}
          <Shop
            style={{ width: 16, height: 16, marginLeft: 8 }}
            color='#ffffff'
          />
        </>
      )}
    </button>
  );
};
