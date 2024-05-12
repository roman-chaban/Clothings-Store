'use client';

import { FC } from 'react';
import styles from '@/components/Footer/footer.module.scss';
import Link from 'next/link';
import { Facebook } from 'grommet-icons';
import { Tiktok } from 'grommet-icons';
import { Instagram } from 'grommet-icons';

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
    label: 'Facebook',
    icon: <Facebook color='white' style={{ width: 16, height: 14 }} />,
  },
  {
    id: 1,
    label: 'TikTok',
    icon: <Tiktok color='white' style={{ width: 16, height: 14 }} />,
  },
  {
    id: 2,
    label: 'Instagram',
    icon: <Instagram color='white' style={{ width: 16, height: 14 }} />,
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
