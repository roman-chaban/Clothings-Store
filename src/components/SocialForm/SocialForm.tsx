'use client';

import { FC } from 'react';
import styles from './SocialFormStyles.module.scss';
import { Button } from '../UI components/Button/Button';
import { Facebook, Google, Phone } from 'grommet-icons';
import { ButtonBase } from '@mui/material';

export const SocialForm: FC = () => {
  return (
    <div className={styles.socialContainer}>
      <h5 className={styles.social__title}>Or</h5>
      <div className={styles.social__buttons}>
        <ButtonBase
          type='button'
          id={styles.social}
          className={styles.withGoogle}
        >
          <Google color='plain' />
          Sign Up with Google
        </ButtonBase>
        <ButtonBase
          type='button'
          id={styles.social}
          className={styles.withFacebook}
        >
          <Facebook color='plain' />
          Sign Up with Facebook
        </ButtonBase>
        <ButtonBase
          type='button'
          id={styles.social}
          className={styles.withPhone}
        >
          <Phone color='#111111' />
          Sign Up with Number
        </ButtonBase>
      </div>
    </div>
  );
};
