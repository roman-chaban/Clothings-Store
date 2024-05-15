'use client';

import { Button } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { SocialForm } from '@/components/SocialForm/SocialForm';
import Link from 'next/link';
import styles from './signUpForm.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { InputsFields } from '../InputsFields/InputsFields';

export interface InputsFormData {
  fullName: {
    value: string;
  };
  userName: {
    value: string;
  };
  dateOfBirth: {
    value: string;
  };
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  confirmPassword: {
    value: string;
  };
  onChangeData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SignUpForm: FC = () => {
  const [formData, setFormData] = useState<InputsFormData>({
    fullName: {
      value: '',
    },
    userName: {
      value: '',
    },
    dateOfBirth: {
      value: '',
    },
    email: {
      value: '',
    },
    password: {
      value: '',
    },
    confirmPassword: {
      value: '',
    },
    onChangeData: () => {},
  });

  const handleChangeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: {
        value: value,
      },
    });
  };

  return (
    <form autoComplete='off' className={styles.signUp__form}>
      <InputsFields
        fullName={formData.fullName}
        email={formData.email}
        password={formData.password}
        confirmPassword={formData.confirmPassword}
        userName={formData.userName}
        dateOfBirth={formData.dateOfBirth}
        onChangeData={handleChangeFormData}
      />
      <div className={styles.submit}>
        <Button id='button' type='submit' className={styles.submit__button}>
          Sign Up
        </Button>
        <div className={styles.forgot__links}>
          <Link className={styles.forgot__password} href='/forgot-password'>
            Forgot Password ?
          </Link>
          <Link className={styles.not__account} href='/forgot-not-account'>
            Don&apos;t have an account yet ?
          </Link>
        </div>
      </div>
      <SocialForm />
    </form>
  );
};
