'use client';

import { FC, useEffect, useState } from 'react';
import { Products } from '@/interfaces/products';
import {
  addProductToCart,
  removeProductFromCart,
} from '@/store/slices/shoppingCartSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { ProductCart } from '@/components/ProductsUI/ProductCart/ProductCart';
import styles from '@/app/favorite/favorite.module.scss';

const ShoppingCart: FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const dispatch = useAppDispatch();
  const shoppingCartProducts = useAppSelector(
    (state) => state.shoppingCart.products
  );
  const shoppingCartCounter = useAppSelector(
    (state) => state.shoppingCart.shoppingCartCounter
  );

  useEffect(() => {
    document.title = 'Clothings Store | Shopping Cart';
  }, []);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const handleAddToShoppingCart = (product: Products) => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveFromShoppingCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <div className={styles.shoppingCartContainer}>
      <h1 className={styles.favorite__title}>Shopping Cart</h1>
      {shoppingCartCounter === 0 ? (
        ''
      ) : (
        <h4 className={styles.itemsCounter}>
          Products in Shopping Cart:
          <strong className={styles.counter__marker}>
            {' '}
            {shoppingCartCounter}
          </strong>
        </h4>
      )}
      <div>
        <br />
        {shoppingCartProducts.length === 0 ? (
          <h2 className={styles.favorite__subTitle}>
            Your Shopping Cart is empty
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='200'
              height='150'
              color='#111111'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
                clipRule='evenodd'
              ></path>
            </svg>
          </h2>
        ) : (
          <div className={styles.cart__container}>
            {shoppingCartProducts.map((shoppingCart: Products) => (
              <ProductCart
                key={shoppingCart.productId}
                about={shoppingCart.about}
                subStyle={shoppingCart.subStyle}
                category={shoppingCart.category}
                productLinkTitle={`${
                  shoppingCart?.category?.includes('Shoes')
                    ? '/sneakers/sneaker/'
                    : shoppingCart?.category?.includes("Men's")
                    ? '/clothings/'
                    : '/accessories/'
                }`}
                onAddToCart={() => handleAddToShoppingCart(shoppingCart)}
                productId={shoppingCart.productId}
                title={shoppingCart.title}
                name={shoppingCart.name}
                style={shoppingCart.style}
                price={shoppingCart.price}
                productRating={shoppingCart.productRating}
                mainImage={shoppingCart.mainImage}
                images={[]}
                onDeleteFromCart={() =>
                  handleRemoveFromShoppingCart(shoppingCart.productId)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
