'use client';

import { FC, useState } from 'react';
import { Hero } from '@/components/Hero/Hero';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import products from '@/api/products/products.json';
import { Products } from '@/interfaces/products';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
import { addProductsFromCart } from '@/redux/slices/shoppingCartSlice';
import { Popup } from '@/components/UI components/PopUp/PopUp';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleAddToShoppingCart = (product: Products) => {
    dispatch(addProductsFromCart(product));
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Provider store={store}>
      <Hero />
      <ProductsItem
        products={products as Products[]}
        productLinkTitle={'/sneakers/sneaker/'}
        productTitle={'Most Popular'}
        handleAddToShoppingCart={handleAddToShoppingCart}
      />

      {showPopup && <Popup onClose={handleClosePopup} />}
    </Provider>
  );
};

export default Home;
