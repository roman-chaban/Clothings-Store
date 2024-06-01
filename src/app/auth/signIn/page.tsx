import { Metadata } from 'next';
import styles from './SignIn.module.scss';
import { SignInForm } from '@/components/SignInForm/SignInForm';

export const metadata: Metadata = {
  title: 'Clothing Store | Sign-In',
};

export default function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.signIn__title}>
        <h1 className={styles.title}>Sign In</h1>
      </div>
      <div className={styles.form__bannerContainer}>
        <SignInForm />
      </div>
    </div>
  );
}
