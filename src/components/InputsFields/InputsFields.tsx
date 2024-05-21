import { FC } from 'react';
import { Input } from '../UI components/Input/Input';
import styles from '../SignUpForm/signUpForm.module.scss';
import { InputsFormData } from '../SignUpForm/SignUpForm';

export const InputsFields: FC<InputsFormData> = ({
  email,
  password,
  confirmPassword,
  dateOfBirth,
  userName,
  fullName,
  onChangeData,
}) => {
  return (
    <div className={styles.form__grid}>
      <label htmlFor='fullName' className={styles.email__label}>
        <h4 className={styles.label__title}>
          Full name <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <Input
          id='fullName'
          placeholder='Full name *'
          name='fullName'
          type='text'
          className={styles.email}
          value={fullName.value}
          onChange={onChangeData}
        />
      </label>
      <label htmlFor='userName' className={styles.password__label}>
        <h4 className={styles.password__title}>
          Username <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <Input
          id='userName'
          placeholder='Username *'
          name='userName'
          type='text'
          className={styles.password}
          value={userName.value}
          onChange={onChangeData}
        />
      </label>
      <label htmlFor='dateOfBirth' className={styles.password__label}>
        <h4 className={styles.password__title}>
          Date of birth <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <Input
          id='dateOfBirth'
          name='dateOfBirth'
          type='date'
          className={styles.password}
          value={dateOfBirth.value}
          onChange={onChangeData}
        />
      </label>
      <label htmlFor='email' className={styles.email__label}>
        <h4 className={styles.label__title}>
          Email <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <Input
          id='email'
          placeholder='E-Mail *'
          name='email'
          type='email'
          className={styles.email}
          value={email.value}
          onChange={onChangeData}
        />
      </label>
      <label htmlFor='password' className={styles.password__label}>
        <h4 className={styles.password__title}>
          Password <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <Input
          id='password'
          placeholder='Password *'
          name='password'
          type='password'
          className={styles.password}
          value={password.value}
          onChange={onChangeData}
        />
      </label>
      <label htmlFor='confirmPassword' className={styles.password__label}>
        <h4 className={styles.password__title}>
          Confirm Password <span style={{ color: '#ea1c0f' }}>*</span>
        </h4>
        <Input
          id='confirmPassword'
          placeholder='Password *'
          name='confirmPassword'
          type='password'
          className={styles.password}
          value={confirmPassword.value}
          onChange={onChangeData}
        />
      </label>
    </div>
  );
};
