import { Metadata } from 'next';
import styles from './contacts.module.scss';
import { ContactsForm } from '@/components/ContactsForm/ContactsForm';

export const metadata: Metadata = {
  title: 'Clothings Store | Contacts',
};

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__title}>
        <h1 className={styles.title}>Contact us</h1>
      </div>
      <ContactsForm />
    </div>
  );
}
