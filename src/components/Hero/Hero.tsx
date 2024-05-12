'use client';

import { FC, useState } from 'react';
import styles from './hero.module.scss';
import { Input } from '../ui/Input/Input';
import Image from 'next/image';
import Find from '@/images/icons/find.svg';

export const Hero: FC = () => {
  const [value, setValue] = useState<string>('Search...');

  return (
    <div className={styles.hero}>
      <div className={styles.heroTop__block}>
        <div className={styles.search__blockItem}>
          <Input
            className={styles.hero__search}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            type='text'
            placeholder='Search...'
          />
          <Image src={Find} width={18} height={18} alt='Find icon' />
        </div>
      </div>
      <div className={styles.heroBanner}>
        <div className={styles.heroBanner__block}>
          <h1 className={styles.hero__title}>
            E-Commerce, This is the best Store!
          </h1>
          <p className={styles.hero__subTitle}>
            <strong className={styles.hero__bold}>PUBLIC HIGH</strong>
            GUM NATURAL
          </p>
          <span className={styles.hero__subTitleCapture}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing
          </span>
          <button type='button' className={styles.shopNow}>
            Shop Now
          </button>
        </div>
        <div className={styles.slider__circles}>
          <button
            className={`${styles.slider__circle} ${styles.active}`}
          ></button>
          <button className={styles.slider__circle}></button>
          <button className={styles.slider__circle}></button>
        </div>
      </div>
    </div>
  );
};
