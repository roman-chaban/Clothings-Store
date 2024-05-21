'use client';

import { FC, useEffect, useState } from 'react';
import styles from '@/components/Header/header.module.scss';
import Link from 'next/link';
import { NAVBAR__LINKS, HeaderNavLinks } from '@/constants/header-links';
import { usePathname } from 'next/navigation';
import { Tooltip } from 'grommet-icons';
import { useAppSelector } from '@/hooks/useAppSelector';
import dynamic from 'next/dynamic';
import { ScrolledNav } from '@/constants/types';

const Header: FC = () => {
  const pathname = usePathname();
  const [isScrolledNav, setIsScrolledNav] = useState<ScrolledNav>(false);
  const favorite = useAppSelector((state) => state.favorite.favoriteCounter);
  const shoppingCart = useAppSelector(
    (state) => state.shoppingCart.shoppingCartCounter
  );

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
          <Link href='/' className={styles.header__logo}>
            <strong>Clothings</strong>
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
          </Link>
        </div>
        <nav className={styles.header__navBar}>
          <ul className={styles.header__menu}>
            {NAVBAR__LINKS.map((link: HeaderNavLinks) => {
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
                <Tooltip color='#111111' style={{ width: 26, height: 26 }} />
              </Link>
            </button>
            <button className={styles.nav__icon} title='Favorite'>
              <Link href='/favorite'>
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
              <Link href='/cart'>
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

export default dynamic(() => Promise.resolve(Header), { ssr: false });
