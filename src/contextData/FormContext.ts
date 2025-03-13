import { createContext } from 'react';
import { FormData, defaultFormData } from './formTypes';

export const FormContext = createContext<{
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}>({
  formData: defaultFormData,
  setFormData: () => {},
});
