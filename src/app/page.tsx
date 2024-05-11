import { Header } from '@/components/Header/Header';
import styles from '@/components/Header/header.module.scss';
import { Hero } from '@/components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <div className={styles.empty__blockBg} />
      <Header />
      <Hero />
    </div>
  );
}
