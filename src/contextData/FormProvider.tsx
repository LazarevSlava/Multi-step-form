import { useState } from 'react';
import { FormContext } from './FormContext';
import { FormData, defaultFormData } from './formTypes';

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>({
    ...defaultFormData,
    billingPeriod: 'monthly',
  });

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const toggleBilling = () => {
    setFormData({
      billingPeriod:
        formData.billingPeriod === 'monthly' ? 'yearly' : 'monthly',
    });
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, toggleBilling }}>
      {children}
    </FormContext.Provider>
  );
};
