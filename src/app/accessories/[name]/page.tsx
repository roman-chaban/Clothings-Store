import accessories from '@/api/accessories/accessories.json';
import { Product } from '@/components/ProductsUI/Product/Product';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import { Products } from '@/interfaces/products';

interface AccessoriesProps {
  params: { name: string };
}

export async function generateMetadata({ params: { name } }: AccessoriesProps) {
  return {
    title: `Accessor | ${name.replaceAll('-', ' ')}`,
  };
}

export default function Accessor({ params: { name } }: AccessoriesProps) {
  const filteredAccessories = accessories.filter(
    (accessor) => accessor.name === name
  );
  return (
    <div>
      <Product products={filteredAccessories as Products[]} />
      <ProductsItem
        products={accessories as Products[]}
        productTitle='Most Popular Accessories'
        productLinkTitle=''
      />
    </div>
  );
}
