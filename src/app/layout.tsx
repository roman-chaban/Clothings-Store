import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/main.scss';
import { Header } from '@/components/Header/Header';
import styles from '@/app/home.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Providers } from '@/redux/provider/provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Clothing Store | Home',
  description: 'E-Commerce App',
  icons: './favicon/nextjs.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${styles.body}`}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
