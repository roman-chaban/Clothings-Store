'use client';

import accessoriesProducts from '@/api/accessories/accessories.json';
import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import { ProductsSelect } from '@/components/UI components/Select/Select';
import { Products } from '@/interfaces/products';
import { useEffect, useState } from 'react';

export default function Accessories() {
  const [accessories, setAccessories] = useState<Products[]>([]);

  useEffect(() => {
    document.title = 'Clothings Store | Accessories';
    setAccessories(accessoriesProducts);
  }, []);

  return (
    <div>
      <ProductsSelect products={accessories} setProducts={setAccessories} />
      <ProductsCatalog
        products={accessories}
        pageTitle='Accessories'
        productLinkTitle='/accessories/'
      />
    </div>
  );
}
