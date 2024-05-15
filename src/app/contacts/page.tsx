import { Metadata } from 'next';
import styles from './contacts.module.scss';

export const metadata: Metadata = {
  title: 'Sneakers Store | Contacts',
};

export default function Contacts() {
  return  <div className={styles.contacts}>
  <div className={styles.contacts__title}>
    <h1 className={styles.title}>Contact us</h1>
  </div>

</div>
}
