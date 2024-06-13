import React, { type FC } from 'react';
import styles from './AccordionStyles.module.scss';
import { Add, Subtract } from 'grommet-icons';

interface AccordionProps {
  onToggle: () => void;
  title: string;
  subTitles: {
    firstSubTitle: string;
    secondSubTitle: string;
  };
  isOpen: boolean;
}

export const Accordion: FC<AccordionProps> = ({
  onToggle,
  subTitles,
  title,
  isOpen,
}) => {
  return (
    <div onClick={onToggle} className={styles.accordion}>
      <h1 className={styles.title}>
        {title}
        <span
          className='icon'
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)' }}
        >
          {isOpen ? (
            <Subtract color='rgba(0, 0, 0, 0.8)' />
          ) : (
            <Add color='rgba(0, 0, 0, 0.8)' />
          )}
        </span>
      </h1>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div>
          <p className={styles.subTitle}>{subTitles.firstSubTitle}</p>
          {subTitles.secondSubTitle && (
            <p className={styles.subTitle}>{subTitles.secondSubTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};
