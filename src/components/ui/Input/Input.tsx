import { ChangeEvent, FC, ReactNode } from 'react';

interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
