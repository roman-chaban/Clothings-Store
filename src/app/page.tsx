import { Hero } from '@/components/Hero/Hero';
import { SneakersProducts } from '@/components/ProductsUI/Products/Products';
import { Metadata } from 'next';
import products from '@/api/products/products.json';
import { Products } from '@/interfaces/products';

export const metadata: Metadata = {
  title: 'Sneakers Store | Home',
};

export default function Home() {
  return (
    <>
      <Hero />
      <SneakersProducts products={products as Products[]} />
    </>
  );
}
