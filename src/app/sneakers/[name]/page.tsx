import products from '@/api/products/products.json';
import styles from './sneaker.module.scss';
import { SneakerProduct } from '@/components/ProductsUI/SneakerProduct/SneakerProduct';
import { SneakersProducts } from '@/components/ProductsUI/Products/Products';

interface SneakerProps {
  params: { name: string };
}

export async function generateMetadata({ params: { name } }: SneakerProps) {
  return {
    title: `Sneaker | ${name.replaceAll('-', ' ')}`,
  };
}

export default function Sneaker({ params: { name } }: SneakerProps) {
  const filteredSneakers = products.filter((product) => product.name === name);

  return (
    <div className={styles.sneakerProduct__container}>
      <SneakerProduct sneakers={filteredSneakers} />
      <SneakersProducts products={products} />
    </div>
  );
}
