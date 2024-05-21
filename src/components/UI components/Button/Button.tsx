'use client';

import { Products } from '@/interfaces/products';
import { Like, Shop } from 'grommet-icons';
import { FC, Fragment, useState, useEffect } from 'react';

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
  const [isActive, setIsActive] = useState<boolean>(false);

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
      title='Delete from Favorite'
      id={id}
      onClick={handleAddToCart}
      className={className}
      type={type}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: isActive ? '#ffb800' : '#313237',
        color: '#ffffff',
        width: 300,
      }}
    >
      {isActive ? (
        <Fragment>
          Added to Favorite{' '}
          <Like color='#ffffff' style={{ width: 20, height: 20 }} />
        </Fragment>
      ) : (
        <Fragment>
          Show now! <Shop style={{ width: 16, height: 16 }} color='#ffffff' />
        </Fragment>
      )}
    </button>
  );
};
