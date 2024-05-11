'use client';

import { FC, useState } from 'react';
import styles from './hero.module.scss';
import { Input } from '../ui/Input/Input';
import Image from 'next/image';
import Find from '@/images/icons/find.svg';

export const Hero: FC = () => {
  const [value, setValue] = useState<string>('Search...');

  return (
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
  );
};
