import { Metadata } from 'next';
import products from '@/api/products/products.json';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';

export const metadata: Metadata = {
  title: 'Clothings Store | Sneakers',
};

export default function Sneakers() {
  return (
    <div>
      <ProductsCatalog
        productLinkTitle='/sneakers/sneaker/'
        pageTitle="Men's Sneakers"
        products={products}
      />
    </div>
  );
}
