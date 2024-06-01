'use client';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import styles from '@/assets/styles/Home.module.scss';
import { FC, useEffect, useState } from 'react';

export const ButtonUp: FC = () => {
  const [isScrolledButton, setIsScrolledButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScrolledButton = () => {
      if (window.scrollY > 0) {
        setIsScrolledButton(true);
      } else {
        setIsScrolledButton(false);
      }
    };
    window.addEventListener('scroll', handleScrolledButton);
    return () => {
      window.removeEventListener('scroll', handleScrolledButton);
    };
  }, []);

  const handleUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles.upButton} ${isScrolledButton ? styles.show : ''}`}
      onClick={handleUppPage}
      style={{ display: isScrolledButton ? 'block' : 'none' }}
    >
      <DoubleArrowIcon
        className={styles.arrow__top}
        style={{ transform: 'rotate(-90deg)', color: '#fff', fontSize: 20 }}
      />
    </button>
  );
};
