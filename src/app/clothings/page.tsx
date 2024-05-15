import { Metadata } from 'next';
import clothes from '@/api/clothing/clothing.json';
import { SneakersProducts } from '@/components/ProductsUI/Sneakers/SneakersProducts';
import { Products } from '@/interfaces/products';

export const metadata: Metadata = {
  title: 'Sneakers Store | Clothings',
};

export default function ClothingsPage() {
  return (
    <div>
      <SneakersProducts
        productLinkTitle='/clothings/'
        pageTitle="Men's Clothings"
        products={clothes as Products[]}
      />
    </div>
  );
}
