
import accessories from '@/api/accessories/accessories.json';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import { Products } from '@/interfaces/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clothings Store | Accessories',
};

export default function Accessories() {
  return (
    <div>
      <ProductsCatalog
        products={accessories as Products[]}
        pageTitle='Accessories'
        productLinkTitle='/accessories/'
      />
    </div>
  );
}
