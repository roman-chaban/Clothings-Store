import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/assets/styles/main.scss';
import Header from '@/components/Header/Header';
import styles from '@/assets/styles/Layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { ButtonUp } from '@/components/UI components/buttonUp/ButtonUp';
import { Providers } from '@/store/provider/provider';
import { FC, ReactNode } from 'react';

const projectFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '300', '500', '600'],
});

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Clothings Store | Just Do It | Home',
  description:
    'Clothings-Store - your ultimate destination for all things related to fashionable apparel! We are true enthusiasts in the world of clothing, where each piece reflects the latest fashion trends and technologies.',
  icons: './favicon/favicon.svg',
};

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`${projectFont.className} ${styles.body}`}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
          <ButtonUp />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
