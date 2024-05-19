import { ProductsCatalog } from '@/components/ProductsUI/ProductsCatalog/ProductsCatalog';
import products from '@/api/products/products.json';
import clothings from '@/api/clothing/clothing.json';
import accessories from '@/api/accessories/accessories.json';
import { Products } from '@/interfaces/products';
import styles from './collections.module.scss';

export default function Collections() {
  return (
    <div className={styles.collections}>
      <ProductsCatalog
        productLinkTitle='/sneakers/sneaker/'
        pageTitle="Men's Sneakers"
        products={products}
      />
      <ProductsCatalog
        productLinkTitle='/clothing/'
        pageTitle='Clothings'
        products={clothings as Products[]}
      />
      <ProductsCatalog
        productLinkTitle='/accessories/'
        pageTitle='Accessories'
        products={accessories as Products[]}
      />
    </div>
  );
}
