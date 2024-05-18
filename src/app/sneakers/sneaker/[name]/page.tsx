import products from '@/api/products/products.json';
import styles from './sneaker.module.scss';
import { Product } from '@/components/ProductsUI/Product/Product';
import { Products } from '@/interfaces/products';
import { ProductsItem } from '@/components/ProductsUI/Products/Products';

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
      <Product products={filteredSneakers} />
      <ProductsItem
        products={products}
        productTitle='Most Popular'
        productLinkTitle={''}
      />
    </div>
  );
}
