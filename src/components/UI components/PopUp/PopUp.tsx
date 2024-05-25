'use client';

import { FC, useEffect, useState } from 'react';
import styles from './popup.module.scss';
import { useSpring, animated } from 'react-spring';

interface PopupProps {
  onClose: () => void;
}

export const Popup: FC<PopupProps> = ({ onClose }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const animation = useSpring({
    top: visible ? '1200px' : '-100px',
    opacity: visible ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <animated.div
      className={styles.popup}
      style={{
        ...animation,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <div className={styles.popup__content}>
        <p className={styles.popup__capture}>
          The product has been successfully added to the cart!
        </p>
      </div>
    </animated.div>
  );
};
