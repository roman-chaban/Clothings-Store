'use client';

import { CSSProperties, FC, ReactNode } from 'react';

interface ButtonProps {
  id?: string;
  className: string;
  children: ReactNode;
  style?: CSSProperties;
  type: 'submit' | 'button';
}

export const Button: FC<ButtonProps> = ({ children, className, id, type }) => {
  return (
    <button className={className} id={id} type={type}>
      {children}
    </button>
  );
};
