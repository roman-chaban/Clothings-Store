'use client';

import { FC } from 'react';
import styles from './socialForm.module.scss';
import { Button } from '../ui/Button/Button';
import { Facebook, Google, Phone } from 'grommet-icons';

export const SocialForm: FC = () => {
  return (
    <div className={styles.socialContainer}>
      <h5 className={styles.social__title}>Or</h5>
      <div className={styles.social__buttons}>
        <Button type='button' id={styles.social} className={styles.withGoogle}>
          <Google color='plain' />
          Sign Up with Google
        </Button>
        <Button
          type='button'
          id={styles.social}
          className={styles.withFacebook}
        >
          <Facebook color='plain' />
          Sign Up with Facebook
        </Button>
        <Button type='button' id={styles.social} className={styles.withPhone}>
          <Phone color='#111111' />
          Sign Up with Number
        </Button>
      </div>
    </div>
  );
};
