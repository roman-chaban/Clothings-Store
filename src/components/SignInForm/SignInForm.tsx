'use client';

import { FC, useState } from 'react';
import styles from './signInForm.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '../ui/Button/Button';
import Link from 'next/link';
import { SocialForm } from '../SocialForm/SocialForm';

export const SignInForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <form autoComplete='off' className={styles.signIn__form}>
      <div className={styles.form__flex}>
        <label htmlFor='email' className={styles.email__label}>
          <h4 className={styles.label__title}>
            Username or Email <span style={{ color: '#ea1c0f' }}>*</span>
          </h4>
          <Input
            id='email'
            placeholder='E-Mail *'
            name='email'
            type='email'
            className={styles.email}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor='password' className={styles.password__label}>
          <h4 className={styles.password__title}>
            Username or Email <span style={{ color: '#ea1c0f' }}>*</span>
          </h4>
          <Input
            id='password'
            placeholder='Password *'
            name='password'
            type='password'
            className={styles.password}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div className={styles.submit}>
        <Button id='button' type='submit' className={styles.submit__button}>
          Sign In
        </Button>
        <div className={styles.forgot__links}>
          <Link className={styles.forgot__password} href='/forgot-password'>
            Forgot Password ?
          </Link>
          <Link className={styles.not__account} href='/forgot-not-account'>
            Don&apos;t have an account yet ?
          </Link>
        </div>
      </div>
      <SocialForm />
    </form>
  );
};
