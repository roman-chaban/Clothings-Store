import styles from '@/assets/styles/not-found.module.scss';
import { Revert } from 'grommet-icons';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clothing Store | Not-Found',
};

export default function NotFoundPage() {
  return (
    <div className={styles.notFound__container}>
      <h1 className={styles.notFound__title}>
        This page is not found 404
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100'
          height='100'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
            clipRule='evenodd'
          ></path>
        </svg>
      </h1>
      <div className={styles.redirect__linkBlock}>
        <Link className={styles.redirect__link} href='/'>
          Go to home
        </Link>
        <Revert size='large' color='#111111' className={styles.arrow__link} />
      </div>
    </div>
  );
}
