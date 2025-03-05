import { useState } from 'react';
import { useFormContext } from '../contextData/FormContext';
import style from './Step1.module.scss';

const Step1 = () => {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const validateName = (value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (value.trim().length < 2) {
      error = 'Name should be at least 2 characters long';
    }
    setErrors((prev) => ({ ...prev, name: error }));
  };
  const validateEmail = (value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      error = 'Invalid email format';
    }
    setErrors((prev) => ({ ...prev, email: error }));
  };

  return (
    <div className={style.stepContainer}>
      <h2 className={style.title}>Personal info</h2>
      <p className={style.description}>
        Please provide your name, email address, and phone number.
      </p>

      <form className={style.form}>
        <div className={style.inputGroup}>
          <div className={style.labelError}>
            <label htmlFor="name">Name</label>
            {errors.name && (
              <span className={style.errorText}>{errors.name}</span>
            )}
          </div>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ name: e.target.value });
              validateName(e.target.value);
            }}
            placeholder="e.g. Stephen King"
            className={errors.name ? style.errorInput : ''}
            required
          />
        </div>

        <div className={style.inputGroup}>
          <div className={style.labelError}>
            <label htmlFor="email">Email Address</label>
            {errors.email && (
              <span className={style.errorText}>{errors.email}</span>
            )}
          </div>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ email: e.target.value });
              validateEmail(e.target.value);
            }}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ phone: e.target.value })}
            placeholder="e.g. +1 234 567 890"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
