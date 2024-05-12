'use client';

import { FC } from 'react';
import styles from '@/components/Footer/footer.module.scss';
import Link from 'next/link';
import { Github, Linkedin, Send } from 'grommet-icons';

interface ListItem {
  id: number;
  label: string;
  icon?: JSX.Element;
}

interface ListProps {
  title: string;
  listItems: ListItem[];
}

export const listItemsSocialMedia = [
  {
    id: 0,
    label: 'Github',
    icon: <Github color='white' style={{ width: 14, height: 14 }} />,
  },
  {
    id: 1,
    label: 'LinkedIn',
    icon: <Linkedin color='white' style={{ width: 14, height: 14 }} />,
  },
  {
    id: 2,
    label: 'Telegram',
    icon: <Send color='white' style={{ width: 16, height: 14 }} />,
  },
];

export const List: FC<ListProps> = ({ title, listItems }) => {
  return (
    <ul className={styles.footer__menu}>
      <h3 className={styles.menu__title}>{title}</h3>
      {listItems.map((listItem) => (
        <li key={listItem.id} className={styles.menu__ListItem}>
          <Link href='' className={styles.menu__ListLink}>
            {listItem.icon && listItem.icon}
            {listItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
