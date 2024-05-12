'use client';

import { FC } from 'react';
import styles from '@/components/Header/header.module.scss';
import Link from 'next/link';
import { navBarLinks, HeaderNavLinks } from '@/constants/header-links';
import { usePathname } from 'next/navigation';
import { Code, Favorite, Shop, Tooltip } from 'grommet-icons';

export const Header: FC = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.empty__blockBg}>
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
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <strong>Clothing</strong>
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
            <button className={styles.nav__icon}>
              <Tooltip color='#1F3E97' />
              <span className={styles.counter__icon}>0</span>
            </button>
            <button className={styles.nav__icon}>
              <Link href='/favorite'>
                <Favorite
                  color='#1F3E97'
                  style={{ position: 'relative', bottom: 2 }}
                />
              </Link>
              <span className={styles.counter__icon}>0</span>
            </button>
            <button className={styles.nav__icon}>
              <Link href='/cart'>
                <Shop
                  color='#1F3E97'
                  style={{ position: 'relative', bottom: 4 }}
                />
              </Link>
              <span className={styles.counter__icon}>0</span>
            </button>
          </div>
          <div className={styles.nav__buttonsBlock}>
            <button type='button' className={styles.nav__signIn}>
              <Link className={styles.signIn} href='/auth/signUp'>
                {' '}
                Sign Up
              </Link>
            </button>
            <button type='button' className={styles.nav__signUp}>
              <Link className={styles.signUp} href='/auth/signIn'>
                {' '}
                Sign In
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
