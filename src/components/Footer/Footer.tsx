'use client';

import { FC, useState } from 'react';
import styles from '@/components/Footer/footer.module.scss';
import { Code } from 'grommet-icons';
import { Input } from '../ui/Input/Input';
import FooterIcon from '@/images/icons/footer-arrow.svg';
import Image from 'next/image';
import { List, listItemsSocialMedia } from '../List/List';
import { listItemsContacts } from '../List/contacts/contacts';
import { listItemsCompany, listItemsHelp } from '../List/lists/lists';

export const Footer: FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logoContainer}>
          <div className={styles.footer__logo}>
            <h3 className={styles.logo}>E-Commerce</h3>
            <Code color='white' />
          </div>
          <form className={styles.footer__form}>
            <Input
              type='text'
              className={styles.footer__input}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder='Subscribe to our newsletter ...'
            />
            <Image
              className={styles.footer__arrow}
              src={FooterIcon}
              width={20}
              height={20}
              alt='Blue arrow icon'
            />
          </form>
        </div>
        <nav className={styles.footer__nav}>
          <List title='Company' listItems={listItemsCompany} />
          <List title='Help' listItems={listItemsHelp} />
          <List title='Social Media' listItems={listItemsSocialMedia} />
          <List title='Contacts' listItems={listItemsContacts} />
        </nav>
      </div>
        <div className={styles.footer__copyright}>
          Copyright 2024. All Right Reserved &copy;
        </div>
    </footer>
  );
};
