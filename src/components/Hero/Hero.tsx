'use client';

import { FC, useState } from 'react';
import styles from './HeroStyles.module.scss';
import { Input } from '../UI components/Input/Input';
import { HeroSlider } from '../HeroSlider/HeroSlider';
import { TypeValue } from '@/constants/types';
import { Modal } from '../UI components/Modal/Modal';

export const Hero: FC = () => {
  const [value, setValue] = useState<TypeValue>('Search...');

  return (
    <div className={styles.hero}>
      <div className={styles.heroTop__block}>
        <Modal />
        <div className={styles.search__blockItem}>
          <Input
            className={styles.hero__search}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            type='text'
            placeholder='Search...'
          />
          <svg
            aria-hidden='true'
            color='#111111'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='30px'
            height='30px'
            fill='none'
          >
            <path
              stroke='currentColor'
              strokeWidth='1.5'
              d='M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853'
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.heroBanner}>
        <HeroSlider />
      </div>
    </div>
  );
};
