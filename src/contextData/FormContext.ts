import { createContext } from 'react';
import { FormData, defaultFormData } from './formTypes';

export const FormContext = createContext<{
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  toggleBilling: () => void;
}>({
  formData: defaultFormData,
  setFormData: () => {},
  toggleBilling: () => {},
});
