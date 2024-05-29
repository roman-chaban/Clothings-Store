'use client';

import { useState, useEffect, FC, KeyboardEventHandler } from 'react';
import styles from './burger.module.scss';
import Link from 'next/link';
import { HeaderNavLinks, NAVBAR__LINKS } from '@/constants/header-links';
import { FormClose } from 'grommet-icons';
import { DEFAULT__LINKS } from '@/constants/default-links';
import { usePathname } from 'next/navigation';
import { IsActive } from '@/constants/types';
import { useBodyOverFlow } from '@/hooks/useBodyOverflow';

interface BurgerProps {
  onClose: () => void;
}

export const Burger: FC<BurgerProps> = ({ onClose }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<IsActive>(false);

 useBodyOverFlow(isActive);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  const handleMenuCloseOnEscape: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.code === 'Escape' || event.code === 'Esc') {
      setIsActive(false);
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleMenuCloseOnEscape}
      className={`${styles.burgerContainer} ${isActive && styles.active}`}
    >
      <div className={styles.burger__logo}>
        <div className={styles.burger__logo__wrapper}>
          <h3 className={styles.burgerLogo__title}>Clothings store</h3>
          <svg
            className={styles.nikeLogo}
            xmlns='http://www.w3.org/2000/svg'
            width='100'
            height='80'
            color='#fff'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <FormClose
          className={styles.burgerClosed__icon}
          onClick={onClose}
          color='#fff'
          style={{ width: 40, height: 40, cursor: 'pointer' }}
        />
      </div>
      <div
        className={`${styles.burgerNavigation__wrapper} ${
          isActive && styles.active
        }`}
      >
        <nav className={styles.burgerNav}>
          <ul className={styles.burger__menu}>
            {NAVBAR__LINKS.map((link: HeaderNavLinks) => (
              <li key={link.href} className={styles.menu__listItem}>
                <Link
                  onClick={handleCloseMenu}
                  className={styles.listItem__link}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className={styles.nav__buttonsBlock}>
              <button
                type='button'
                className={
                  pathname === DEFAULT__LINKS.SIGN__UP
                    ? `${styles.nav__signUp} ${styles.active__button}`
                    : styles.nav__signUp
                }
              >
                <Link
                  onClick={handleCloseMenu}
                  className={`
${styles.signUp}
${pathname === DEFAULT__LINKS.SIGN__UP ? styles.active__link : ''}
`}
                  href={DEFAULT__LINKS.SIGN__UP}
                >
                  Sign Up
                </Link>
              </button>

              <button
                type='button'
                className={
                  pathname === DEFAULT__LINKS.SIGN__IN
                    ? `${styles.nav__signIn} ${styles.active__button}`
                    : styles.nav__signIn
                }
              >
                <Link
                  onClick={handleCloseMenu}
                  className={`
${styles.signIn}
${pathname === DEFAULT__LINKS.SIGN__IN ? styles.active__link : ''}
`}
                  href={DEFAULT__LINKS.SIGN__IN}
                >
                  Sign In
                </Link>
              </button>
            </div>
          </ul>
        </nav>
        <div className={styles.burger__copyright}>
          &copy; 2024 Nike, inc. All Rights Reserved
        </div>
      </div>
    </div>
  );
};
