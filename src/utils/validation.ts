import { FormData } from '../contextData/formTypes';

export const isStep1Complete = (formData: FormData) => {
  return formData.name.trim() && formData.email.trim() && formData.phone.trim();
};

export const validateName = (value: string) => {
  if (!value.trim()) return 'This field is required';
  if (value.trim().length < 2)
    return 'Name should be at least 2 characters long';
  return '';
};

export const validateEmail = (value: string) => {
  if (!value.trim()) return 'This field is required';
  if (!/^\S+@\S+\.\S+$/.test(value)) return 'Invalid email format';
  return '';
};

export const validatePhone = (value: string) => {
  if (!value.trim()) return 'This field is required';
  if (!/^\+?[0-9\s-]{7,15}$/.test(value)) return 'Invalid phone number';
  return '';
};
