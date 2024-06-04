'use client';

import { Hero } from '@/components/Hero/Hero';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import products from '@/api/products/products.json';
import { Provider } from 'react-redux';
import { store } from '@/store/store/store';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';

export default function Home() {
  useChangePageTitle('Clothings Store | Home');
  return (
    <Provider store={store}>
      <Hero />
      <ProductsItem
        products={products}
        productLinkTitle={'/sneakers/sneaker/'}
        productTitle={'Most Popular'}
      />
    </Provider>
  );
}
