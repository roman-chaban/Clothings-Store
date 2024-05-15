import { Metadata } from 'next';
import clothes from '@/api/clothing/clothing.json';
import { Products } from '@/interfaces/products';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';

export const metadata: Metadata = {
  title: 'Sneakers Store | Clothings',
};

export default function ClothingsPage() {
  return (
    <div>
      <ProductsCatalog
        productLinkTitle='/clothings/'
        pageTitle="Men's Clothings"
        products={clothes as Products[]}
      />
    </div>
  );
}
