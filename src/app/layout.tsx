import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/assets/styles/main.scss';
import { Header } from '@/components/Header/Header';
import styles from '@/app/layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Providers } from '@/redux/provider/provider';
import { ButtonUp } from '@/components/ui/buttonUp/ButtonUp';

const inter = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sneakers Store | Home',
  description: 'E-Commerce App',
  icons: './favicon/favicon.svg',
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
          <ButtonUp />
        </Providers>
      </body>
    </html>
  );
}
