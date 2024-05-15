import clothings from '@/api/clothing/clothing.json';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import { Product } from '@/components/ProductsUI/Product/Product';
import { Products } from '@/interfaces/products';

interface ClothingProps {
  params: { name: string };
}

export async function generateMetadata({ params: { name } }: ClothingProps) {
  return {
    title: `Sneaker | ${name.replaceAll('-', ' ')}`,
  };
}

export default function Clothing({ params: { name } }: ClothingProps) {
  const filteredClothings = clothings.filter((cloth) => cloth.name === name);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.125rem' }}>
      <Product products={filteredClothings as Products[]} />
      <ProductsItem
        products={clothings as Products[]}
        productTitle='Most Popular Clothings'
        productLinkTitle=''
      />
    </div>
  );
}
