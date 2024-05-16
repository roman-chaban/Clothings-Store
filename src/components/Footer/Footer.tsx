'use client';

import { FC, useState } from 'react';
import styles from '@/components/Footer/footer.module.scss';
import { Input } from '../ui/Input/Input';
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
                fillRule='evenodd'
                d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
                clipRule='evenodd'
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
            <svg
              aria-hidden='true'
              color='#111111'
              focusable='false'
              viewBox='0 0 24 24'
              role='img'
              width='30px'
              height='30px'
              fill='none'
            >
              <path
                stroke='currentColor'
                stroke-width='1.5'
                d='M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853'
              ></path>
            </svg>
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
        &copy; 2024 Nike, inc. All Right Reserved
      </div>
    </footer>
  );
};
