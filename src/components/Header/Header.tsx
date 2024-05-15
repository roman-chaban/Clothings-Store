'use client';

import { FC, useEffect, useState } from 'react';
import styles from '@/components/Header/header.module.scss';
import Link from 'next/link';
import { navBarLinks, HeaderNavLinks } from '@/constants/header-links';
import { usePathname } from 'next/navigation';
import { Favorite, Shop, Tooltip } from 'grommet-icons';

export const Header: FC = () => {
  const pathname = usePathname();
  const [isScrolledNav, setIsScrolledNav] = useState<boolean>(false);

  useEffect(() => {
    const handleNavScrolled = () => {
      if (window.scrollY > 0) {
        setIsScrolledNav(true);
      } else {
        setIsScrolledNav(false);
      }
    };
    window.addEventListener('scroll', handleNavScrolled);
    () => {
      removeEventListener('scroll', handleNavScrolled);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolledNav ? styles.header__active : ''
      }`}
    >
      <div className={styles.empty__blockBg}>
        <svg
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
        <div className={styles.empty__links}>
          <Link
            className={`${styles.empty__link} ${styles.decoration__line}`}
            href='/help'
          >
            Help
          </Link>
          <Link className={styles.empty__link} href='/store'>
            Store
          </Link>
        </div>
      </div>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <strong>Sneakers</strong>
          store
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
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
        <nav className={styles.header__navBar}>
          <ul className={styles.header__menu}>
            {navBarLinks.map((link: HeaderNavLinks) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
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
            <button className={styles.nav__icon} title='Contacts'>
              <Link href='/contacts'>
                <Tooltip color='#111111' />
              </Link>
              <span className={styles.counter__icon}>0</span>
            </button>
            <button className={styles.nav__icon} title='Favorite'>
              <Link href='/favorite'>
                <Favorite
                  color='#111111'
                  style={{ position: 'relative', bottom: 2 }}
                />
              </Link>
              <span className={styles.counter__icon}>0</span>
            </button>
            <button className={styles.nav__icon} title='Shopping Cart'>
              <Link href='/cart'>
                <Shop
                  color='#111111'
                  style={{ position: 'relative', bottom: 4 }}
                />
              </Link>
              <span className={styles.counter__icon}>0</span>
            </button>
          </div>
          <div className={styles.nav__buttonsBlock}>
            <button
              type='button'
              className={
                pathname === '/auth/signUp'
                  ? `${styles.nav__signUp} ${styles.active__button}`
                  : styles.nav__signUp
              }
            >
              <Link
                className={`
      ${styles.signUp}
      ${pathname === '/auth/signUp' ? styles.active__link : ''}
    `}
                href='/auth/signUp'
              >
                Sign Up
              </Link>
            </button>

            <button
              type='button'
              className={
                pathname === '/auth/signIn'
                  ? `${styles.nav__signIn} ${styles.active__button}`
                  : styles.nav__signIn
              }
            >
              <Link
                className={`
      ${styles.signIn}
      ${pathname === '/auth/signIn' ? styles.active__link : ''}
    `}
                href='/auth/signIn'
              >
                Sign In
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
