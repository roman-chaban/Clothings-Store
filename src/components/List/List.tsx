'use client';

import { FC } from 'react';
import styles from '@/components/Footer/FooterStyles.module.scss';
import Link from 'next/link';
import { Github, Linkedin, Send } from 'grommet-icons';

interface ListItem {
  id: number;
  label: string;
  icon?: JSX.Element;
  href?: string;
}

interface ListProps {
  title: string;
  listItems: ListItem[];
}

export const listItemsSocialMedia: ListItem[] = [
  {
    id: 0,
    label: 'Github',
    icon: (
      <Github
        className={styles.hoverFooter__icon}
        color='#858585'
        style={{ width: 14, height: 14 }}
      />
    ),
    href: 'https://github.com/Chaban1001',
  },
  {
    id: 1,
    label: 'LinkedIn',
    icon: (
      <Linkedin
        className={styles.hoverFooter__icon}
        color='#858585'
        style={{ width: 14, height: 14 }}
      />
    ),
    href: 'https://www.linkedin.com/in/chaban100',
  },

  {
    id: 2,
    label: 'Telegram',
    icon: (
      <Send
        className={styles.hoverFooter__icon}
        color='#858585'
        style={{ width: 16, height: 14 }}
      />
    ),
    href: 'https://t.me/romanchaban',
  },
];

export const List: FC<ListProps> = ({ title, listItems }) => {
  return (
    <ul className={styles.footer__menu}>
      <h3 className={styles.menu__title} id={styles.shortestTitle}>
        {title}
      </h3>
      {listItems.map((listItem) => (
        <li key={listItem.id} className={styles.menu__ListItem}>
          <a
            target='_blank'
            href={listItem.href}
            className={styles.menu__ListLink}
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            rel='noopener noreferrer'
          >
            {listItem.icon && listItem.icon}
            {listItem.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
