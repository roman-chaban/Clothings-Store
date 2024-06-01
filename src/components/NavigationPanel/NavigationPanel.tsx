'use client';

import type { FC } from 'react';
import { DEFAULT__LINKS } from '@/constants/default-links';
import Link from 'next/link';
import { HeaderNavLinks, NAVBAR__LINKS } from '@/constants/header-links';
import { useAppSelector } from '@/hooks/useAppSelector';
import { usePathname } from 'next/navigation';
import styles from '@/components/Header/HeaderStyles.module.scss';
import { Tooltip } from 'grommet-icons';

export const NavigationPanel: FC = () => {
  const pathname = usePathname();
  const favorite = useAppSelector((state) => state.favorite.favoriteCounter);
  const shoppingCart = useAppSelector(
    (state) => state.shoppingCart.shoppingCartCounter
  );

  const handleUpPage = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={styles.header__navBar}>
      <ul className={styles.header__menu}>
        {NAVBAR__LINKS.map((link: HeaderNavLinks) => {
          const isActive =
            pathname === link.href ||
            pathname === link.slugRef ||
            (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <li key={link.href}>
              <Link
                title={link.title}
                className={isActive ? styles.active : styles.menu__listItem}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.nav__icons}>
        <button
          onClick={handleUpPage}
          className={styles.nav__icon}
          title='Contacts'
        >
          <Link href={DEFAULT__LINKS.CONTACTS}>
            <Tooltip color='#111111' style={{ width: 26, height: 26 }} />
          </Link>
        </button>
        <button
          onClick={handleUpPage}
          className={styles.nav__icon}
          title='Favorite'
        >
          <Link onClick={handleUpPage} href={DEFAULT__LINKS.FAVORITE}>
            <svg
              style={{ position: 'relative', bottom: 2 }}
              aria-hidden='true'
              focusable='false'
              viewBox='0 0 24 24'
              role='img'
              width='28px'
              height='28px'
              fill='none'
              color='#111111'
            >
              <path
                stroke='currentColor'
                strokeWidth='1.5'
                d='M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451'
              ></path>
            </svg>
          </Link>
          <span className={styles.counter__icon}>{favorite}</span>
        </button>
        <button className={styles.nav__icon} title='Shopping Cart'>
          <Link href={DEFAULT__LINKS.CART}>
            <svg
              style={{ position: 'relative', bottom: 5 }}
              aria-hidden='true'
              color='#111111'
              focusable='false'
              viewBox='0 0 24 24'
              role='img'
              width='32px'
              height='32px'
              fill='none'
            >
              <path
                stroke='currentColor'
                strokeWidth='1.5'
                d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
              ></path>
            </svg>
          </Link>
          <span className={styles.counter__icon}>{shoppingCart}</span>
        </button>
      </div>
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
    </nav>
  );
};
