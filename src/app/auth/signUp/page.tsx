import { Metadata } from 'next';
import styles from './signUp.module.scss';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';

export const metadata: Metadata = {
  title: 'Clothing Store | Sign-Up',
};

export default function SignUp() {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUp__title}>
        <h1 className={styles.title}>Sign Up</h1>
      </div>
      <div className={styles.form__bannerContainer}>
        <SignUpForm />
      </div>
    </div>
  );
}
