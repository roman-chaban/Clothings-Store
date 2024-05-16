import { Hero } from '@/components/Hero/Hero';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import { Metadata } from 'next';
import products from '@/api/products/products.json';
import { Products } from '@/interfaces/products';

export const metadata: Metadata = {
  title: 'Sneakers Store | Just Do It. Home',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsItem
        products={products as Products[]}
        productLinkTitle={''}
        productTitle={'Most Popular'}
      />
    </>
  );
}
