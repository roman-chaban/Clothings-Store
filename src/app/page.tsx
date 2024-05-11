import { Header } from '@/components/Header/Header';
import styles from '@/app/home.module.scss';
import { Hero } from '@/components/Hero/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className={styles.empty__blockBg}>
        <Link
          className={`${styles.empty__link} ${styles.decoration__line}`}
          href='/help'
        >
          Help
        </Link>
        <Link className={styles.empty__link} href='/store'>
          Store
        </Link>
      </div>
      <Header />
      <Hero />
    </div>
  );
}
