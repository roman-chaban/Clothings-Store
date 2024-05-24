import type { Metadata } from 'next';
import styles from './help.module.scss';
import { HelpList } from '@/components/HelpList/HelpList';

export const metadata: Metadata = {
  title: 'Clothings Store | Help',
};

export default function Help() {
  return (
    <article className={styles.help}>
      <h1 className={styles.help__subTitle}>Welcome to Our Help Page!</h1>
      <p className={styles.help__description}>
        We’re here to assist you with any questions or concerns you may have.
        Below, you&apos;ll find information on common topics to help you make
        the most of your shopping experience with us. If you need further
        assistance, don&apos;t hesitate to contact our customer support team.
      </p>
      <HelpList />
    </article>
  );
}
