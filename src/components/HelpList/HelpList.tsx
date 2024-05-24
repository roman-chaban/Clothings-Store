import { FC } from 'react';
import styles from '@/app/help/help.module.scss';
import { helpList } from './help-list';

export const HelpList: FC = () => {
  return (
    <ul className={styles.helpList}>
      {helpList.map((item) => (
        <div key={item.listTitle} className={styles.listBlock}>
          <h3 className={styles.helpList__title}>{item.listTitle}</h3>
          <li className={styles.helpList__subTitle}>
            {item.listSubitems[0].firstSubTitle}
          </li>
          {item.listSubitems[0].secondSubTitle === '' ? (
            ''
          ) : (
            <li className={styles.helpList__subTitle}>
              {item.listSubitems[0].secondSubTitle}
            </li>
          )}
        </div>
      ))}
    </ul>
  );
};
