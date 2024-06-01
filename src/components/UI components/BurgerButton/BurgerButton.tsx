import React, { FC } from 'react';
import styles from './BurgerButton.module.scss';

interface ButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const BurgerButton: FC<ButtonProps> = ({ onClick, isActive }) => {
  return (
    <div className={`${styles.burgerContainer} ${isActive && styles.active}`}>
      <div className={styles.burgerButton__wrapper} onClick={onClick}>
        <span className={styles.buttonLine}></span>
      </div>
    </div>
  );
};
