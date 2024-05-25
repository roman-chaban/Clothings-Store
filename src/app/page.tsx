'use client';

import { Hero } from '@/components/Hero/Hero';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import products from '@/api/products/products.json';
import { Products } from '@/interfaces/products';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';

export default function Home() {
  return (
    <Provider store={store}>
      <Hero />
      <ProductsItem
        products={products as Products[]}
        productLinkTitle={'/sneakers/sneaker/'}
        productTitle={'Most Popular'}
      />
    </Provider>
  );
}
