import { useState } from 'react';
import { useFormContext } from '../components/hooks/useFormContext';
import style from './Step1.module.scss';
import {
  validateName,
  validateEmail,
  validatePhone,
} from '../utils/validation';

const Step1 = () => {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const handleValidation = (
    field: 'name' | 'email' | 'phone',
    value: string,
  ) => {
    let errorMessage = '';
    if (field === 'name') errorMessage = validateName(value);
    if (field === 'email') errorMessage = validateEmail(value);
    if (field === 'phone') errorMessage = validatePhone(value);
    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
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
              handleValidation('name', e.target.value);
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
              handleValidation('email', e.target.value);
            }}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>
        <div className={style.inputGroup}>
          <div className={style.labelError}>
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && (
              <span className={style.errorText}>{errors.phone}</span>
            )}
          </div>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ phone: e.target.value });
              handleValidation('phone', e.target.value);
            }}
            placeholder="e.g. +1 234 567 890"
            className={errors.phone ? style.errorInput : ''}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
