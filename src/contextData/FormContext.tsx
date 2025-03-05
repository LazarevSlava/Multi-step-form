import { createContext, useContext, useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  addons: string[];
}
const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  addons: [],
};

const FormContext = createContext<{
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}>({
  formData: defaultFormData,
  setFormData: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>(defaultFormData);

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
