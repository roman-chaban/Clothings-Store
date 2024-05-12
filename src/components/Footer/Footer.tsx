'use client';

import { FC, useState } from 'react';
import styles from '@/components/Footer/footer.module.scss';
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
            <h3 className={styles.logo}>Clothing store</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='80'
              color='#fff'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                fill-rule='evenodd'
                d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
                clip-rule='evenodd'
              ></path>
            </svg>
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
