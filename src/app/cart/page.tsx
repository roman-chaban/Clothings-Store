'use client';

import { FC, useEffect, useState } from 'react';
import { Products } from '@/interfaces/products';
import {
  addProductsFromCart,
  deleteProductsFromCart,
} from '@/redux/slices/shoppingCartSlice';
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
    dispatch(addProductsFromCart(product));
  };

  const handleRemoveFromShoppingCart = (productId: number) => {
    dispatch(deleteProductsFromCart(productId));
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
          </h2>
        ) : (
          <div className={styles.cart__container}>
            {shoppingCartProducts.map((shoppingCart) => (
              <ProductCart
                key={shoppingCart.productId}
                category={shoppingCart.category}
                productLinkTitle={`${
                  shoppingCart.category.includes('Shoes')
                    ? '/sneakers/sneaker/'
                    : shoppingCart.category.includes("Men's")
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
