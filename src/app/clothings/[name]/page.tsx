import clothings from '@/api/clothing/clothing.json';
import { Product } from '@/components/ProductsUI/SneakerProduct/SneakerProduct';
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
    <div>
      <Product products={filteredClothings as Products[]} />
    </div>
  );
}
