import { SneakersProducts } from '@/components/ProductsUI/Sneakers/SneakersProducts';
import { Metadata } from 'next';
import products from '@/api/products/products.json';
import { Products } from '@/interfaces/products';

export const metadata: Metadata = {
  title: 'Sneakers Store | Sneakers',
};

export default function Sneakers() {
  return (
    <div>
      <SneakersProducts
        productLinkTitle='/sneakers/sneaker/'
        pageTitle="Men's Sneakers"
        products={products as Products[]}
      />
    </div>
  );
}
