import { ScrolledNav } from '@/constants/types';
import { useEffect, useState } from 'react';

export const useScrollObserver = () => {
  const [isScrolledNav, setIsScrolledNav] = useState<ScrolledNav>(false);

  useEffect(() => {
    const handleScrolledNav = () => {
      if (window.scrollY > 0) {
        setIsScrolledNav(true);
      } else [setIsScrolledNav(false)];
    };
    window.addEventListener('scroll', handleScrolledNav);
    return () => {
      window.removeEventListener('scroll', handleScrolledNav);
    };
  }, [setIsScrolledNav]);

  return { isScrolledNav };
};
