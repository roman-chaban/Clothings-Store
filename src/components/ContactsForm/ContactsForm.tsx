'use client';

import { ChangeEvent, FC, useState } from 'react';
import styles from '../../app/contacts/contacts.module.scss';
import { Input } from '@/components/UI components/Input/Input';
import { Button } from '@mui/material';

interface ContactsData {
  fullName: { value: string };
  email: { value: string };
}

export const ContactsForm: FC = () => {
  const [contactsData, setContactsData] = useState<ContactsData>({
    fullName: { value: '' },
    email: { value: '' },
  });

  const handleFieldsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContactsData({
      ...contactsData,
      [name]: value,
    });
  };

  return (
    <div className={styles.fieldsContainer}>
      <div className={styles.fields}>
        <label htmlFor='fullName' className={styles.flex}>
          <h4 className={styles.label__title}>
            Full name <span style={{ color: '#ea1c0f' }}>*</span>
          </h4>
          <Input
            type='text'
            id='fullName'
            name='fullName'
            placeholder='Full Name *'
            className={styles.fullName__field}
            value={contactsData.fullName.value}
            onChange={handleFieldsChange}
          />
        </label>
        <label htmlFor='email' className={styles.flex}>
          <h4 className={styles.label__title}>
            Email <span style={{ color: '#ea1c0f' }}>*</span>
          </h4>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Email *'
            className={styles.email__field}
            value={contactsData.email.value}
            onChange={handleFieldsChange}
          />
        </label>
      </div>
      <label htmlFor='message' className={styles.flex}>
        <h4 className={styles.label__title}>
          Message <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <textarea
          name='message'
          id='message'
          placeholder='Type your message ...'
          className={styles.contactsArea}
        />
      </label>
      <Button id='button' type='submit' className={styles.submit__button}>
        Send
      </Button>
    </div>
  );
};
