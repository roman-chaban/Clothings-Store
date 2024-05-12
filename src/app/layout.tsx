import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/main.scss';
import { Header } from '@/components/Header/Header';
import styles from '@/app/home.module.scss';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'E-Commerce | Home',
  description: 'E-Commerce App',
  icons: './favicon/vantela.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${styles.body}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
