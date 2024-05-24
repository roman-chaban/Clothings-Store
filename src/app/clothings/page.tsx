'use client';

import clothes from '@/api/clothing/clothing.json';
import { Products } from '@/interfaces/products';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import { useEffect, useState } from 'react';
import { ProductsSelect } from '@/components/UI components/Select/Select';

export default function ClothingsPage() {
  const [clothings, setClothings] = useState<Products[]>([]);

  useEffect(() => {
    (document.title = 'Clothings Store | Sneakers'), setClothings(clothes);
  }, []);
  return (
    <div>
      <ProductsSelect products={clothings} setProducts={setClothings} />
      <ProductsCatalog
        productLinkTitle='/clothings/'
        pageTitle="Men's Clothings"
        products={clothings}
      />
    </div>
  );
}
