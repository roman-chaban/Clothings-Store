import products from '@/api/products/products.json';
import styles from './sneaker.module.scss';
import { Product } from '@/components/ProductsUI/SneakerProduct/SneakerProduct';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';
import { Products } from '@/interfaces/products';

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
      <Product products={filteredSneakers as Products[]} />
      <ProductsItem products={products as Products[]} productLinkTitle={''} />
    </div>
  );
}
