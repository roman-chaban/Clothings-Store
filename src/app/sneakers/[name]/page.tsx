'use client';

import products from '@/api/products/products.json';
import { useEffect, useState } from 'react';
import styles from './sneaker.module.scss';
import { SneakerProduct } from '@/components/ProductsUI/SneakerProduct/SneakerProduct';
import { useParams } from 'next/navigation';
import { SneakersProducts } from '@/components/ProductsUI/Products/Products';

interface SneakerProps {
  params: { name: string };
}

export default function Sneaker({ params: { name } }: SneakerProps) {
  const [selectedProducts, setSelectedProducts] = useState(products[0]);
  const { name: sneakerName } = useParams<{ name: string }>();
  const filteredSneakers = products.filter((product) => product.name === name);

  useEffect(() => {
    document.title = name.replaceAll('-', ' ');
  }, [name]);

  return (
    <div className={styles.sneakerProduct__container}>
      <SneakerProduct sneakers={filteredSneakers} />
      <SneakersProducts products={products} />
    </div>
  );
}
