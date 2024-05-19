import { ChangeEvent, FC, ReactNode } from 'react';

interface InputProps {
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
  className: string;
  checked?: boolean
  id?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  name,
  id,
  checked
}) => {
  return (
    <input
      name={name}
      className={className}
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  );
};
