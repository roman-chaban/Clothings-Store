import { Products } from '@/interfaces/products';
import { Shop } from 'grommet-icons';
import { FC, Fragment, useEffect, useState } from 'react';

interface ButtonProps {
  className?: string;
  type?: 'submit' | 'button';
  product?: Products;
  id?: string;
  onClick?: (product: Products) => void;
  onDeleteProduct?: (productId: number) => void;
}

export const Button: FC<ButtonProps> = ({
  className,
  type,
  id,
  product = null,
  onClick = () => {},
  onDeleteProduct = () => {},
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && product) {
      const savedState = localStorage.getItem(`favorite-${product.productId}`);
      setIsActive(savedState === 'true');
    }
  }, [product]);

  useEffect(() => {
    if (typeof window !== 'undefined' && product) {
      localStorage.setItem(`favorite-${product.productId}`, String(isActive));
    }
  }, [product, isActive]);

  const handleToggleFavorite = () => {
    if (product) {
      const newState = !isActive;
      setIsActive(newState);
      if (newState) {
        onClick(product);
      } else {
        onDeleteProduct(
          product.productId !== undefined ? product.productId : 0
        );
      }
    }
  };

  return (
    <button
      id={id}
      onClick={handleToggleFavorite}
      className={className}
      type={type}
      style={{ background: isActive ? '#737373' : '' }}
    >
      {isActive ? (
        'Added to Favorite'
      ) : (
        <Fragment>
          Show now! <Shop style={{ width: 16, height: 16 }} color='#ffff' />
        </Fragment>
      )}
    </button>
  );
};
