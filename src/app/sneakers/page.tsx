'use client';

import sneakersProducts from '@/api/products/products.json';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import ProductsSelect  from '@/components/UI components/Select/Select';
import { useEffect, useState } from 'react';
import { Products } from '@/interfaces/products';

export default function Sneakers() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    (document.title = 'Clothings Store | Sneakers'),
      setProducts(sneakersProducts);
  }, []);

  return (
    <div>
      <ProductsSelect products={products} setProducts={setProducts} />
      <ProductsCatalog
        productLinkTitle='/sneakers/sneaker/'
        pageTitle="Men's Sneakers"
        products={products}
      />
    </div>
  );
}
